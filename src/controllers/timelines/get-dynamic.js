const { matchedData } = require('express-validator');
const { getAllItemsFromDB } = require('./helpers');
const { getItem, checkQueryString, getItems } = require('../../middleware/db');
const { isIDGood, handleError } = require('../../middleware/utils');

const MainModel = require('../../models/timeline_records');
const TemplatesRecordsM = require('../../models/template_records');
const { asyncFilter } = require('../utils/functions');
const _ = require('lodash');
const FnFeedsClass = require('@/src/controllers/feeds/opta/functions');
const CFG = require('@/src/config');
const { prepareMatchdayPure } = require('@/src/controllers/actions/handleTemplate');
const async = require('async');
const { attachAdlerTemplateSearchCriteria } = require('@/src/controllers/utils/timelineAutomation');
const TimelineRecordsM = require('@/src/models/timeline_records');
const { format, parseISO } = require('date-fns');
const { de } = require('date-fns/locale');
const { buildSearchCriteria } = require('@/src/controllers/actions/helpers');

/**
 * Get timeline by type / cid / tid / mid
 * Pre-create when not exists
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getPreCreatedTimeline = async (req, res) => {
  try {
    const {
      params: { ctype, cid, tid, mid },
      query: { lng: language }
    } = req;

    const nowUtc = new Date();

    const FnFeeds = new FnFeedsClass({
      target: {
        league: cid
      }
    });

    const teamsPlayMatchday = (await FnFeeds.getClosestMatchFromSchedule(nowUtc.getTime(), [tid]))?.teamsPlayMatchday;
    let closestMatch = _.find(teamsPlayMatchday, i => {
      return i.contestant?.[0].id === tid || i.contestant?.[1].id === tid;
    });

    if (!closestMatch) {
      closestMatch = teamsPlayMatchday[0];
    }

    const eventData = {
      selectedTeamId: closestMatch?.homeContestantId,
      competitionId: cid,
      competitionName: cid,
      type: 'match',
      homeTeamId: closestMatch?.homeContestantId,
      awayTeamId: closestMatch?.awayContestantId,
      side: null,
      eventId: closestMatch?.id,
      dateObj: null,
      date: new Date(`${closestMatch.date}${closestMatch?.time}`),
      start_date: null,
      time: null,
      localDate: closestMatch?.localDate,
      localTime: closestMatch?.localTime,
      stage: closestMatch?.stage
    };

    const competitionConfig = {
      competitionId: eventData?.competitionId,
      competitionName: eventData?.competitionName
    };

    await prepareMatchdayPure(eventData, true).catch(err => {
      LOGGER.error('prepareMatchdayPure catch %o', err);
    });

    const setupTimelineAutomation = CFG?.dynamicTimelines;

    await async.eachSeries(setupTimelineAutomation, async timeline => {
      const isCustomArr = _.isArray(timeline);
      if (isCustomArr) {
        return;
      }

      const timelineContent = [];
      for (const template of timeline.templates) {
        // const searchCriteria = {
        //   template_name: template.name,
        //   'event.eventId': eventData.eventId,
        //   'event.competitionId': eventData.competitionId
        // };

        // attachAdlerTemplateSearchCriteria(searchCriteria, template);
        const { searchCriteria, pickLimit } = buildSearchCriteria(template, eventData?.eventId, competitionConfig);

        const toPickAarray = await TemplatesRecordsM.find(searchCriteria, null, { lean: true }).catch(err => {
          LOGGER.error(err, 'syncMatchdayTimelines->toPick catch');
        });

        for (const pick of toPickAarray) {
          if (pick?.uuid) {
            const lng = _.find(pick?.data?.fields, { id: 'lang' })?.value;
            timelineContent.push({
              templateId: pick.uuid,
              template: pick.template_name,
              name: pick.name,
              createdAt: pick.createdAt,
              lng,
              eventId: pick?.event?.eventId
            });
          }
        }
      }

      const matchDate = eventData.date;

      const startTime = format(matchDate, 'HH:mm', { locale: de });
      const startDate = format(matchDate, 'dd.MM.yy', { locale: de });

      const targetTimelineName = `${closestMatch.homeContestantShortName}-${
        closestMatch.awayContestantShortName
      } ${startDate.replaceAll('.', '-')} ${startTime.replace(':', '_')} ${timeline.label}`;

      await TimelineRecordsM.findOneAndUpdate(
        { name: targetTimelineName },
        {
          $set: {
            data: {},
            format: '1920x1080',
            name: targetTimelineName,
            templates: timelineContent,
            options: { mode: 'auto' },
            event: eventData
          }
        },
        {
          lean: true,
          new: true,
          upsert: true
          // runValidators: true
        }
      ).catch(err => {
        LOGGER.error(err, 'get-dynamic TimelineRecordsM.findOneAndUpdate error');
      });
    });

    const timeline =
      (await MainModel.findOne(
        {
          name: { $regex: /POST-MATCH/i },
          'event.eventId': closestMatch?.id
        },
        null,
        {
          lean: true,
          sort: { createdAt: -1 }
        }
      ).catch(err => {
        LOGGER.error(err, 'timeline catch %o');
      })) || {};

    timeline.templates =
      (await asyncFilter(timeline.templates, async template => {
        const { lng, template: templateType, templateId } = template || {};

        if (lng && language) {
          return lng === language;
        }

        if (templateType === 'wc_goalshots') {
          try {
            const data = await TemplatesRecordsM.findOne({ uuid: templateId }, null, { lean: true });
            const goalShots = _.get(data, 'data.dynamic.goalShots', []);
            const side = _.get(data, 'data.fields', []).find(field => field.id === 'selectedSide')?.value;
            const selectedContenstant = _.get(data, 'data.dynamic.matchInfo.contestant', []).find(
              contestant => contestant.position === side
            )?.id;
            return goalShots.some(e => selectedContenstant === e?.contestantId);
          } catch (err) {
            LOGGER.error('get template->isExist catch %o', err);
          }
        }

        return true;
      })) || [];

    res.status(200).json(timeline);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  getPreCreatedTimeline
};
