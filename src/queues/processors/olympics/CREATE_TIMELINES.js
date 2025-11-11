const TimelineRecordsM = require('@/src/models/timeline_records');
const { eachOfLimit, eachOf, eachOfSeries } = require('async');
const { convertLocalTimeRangeToUTC, isWithinUTCRange } = require('@/src/controllers/utils/auto-updater');
const _ = require('lodash');
const cfg = require('@/src/config');
const async = require('async');
const { buildSearchCriteria, buildSearchCriteriaOlympic, getIndicator } = require('@/src/controllers/actions/helpers');
const TemplatesRecordsM = require('@/src/models/template_records');
const { createTemplate } = require('@/src/controllers/actions/handleTemplate');
const { distributeVideos } = require('@/src/queues/processors/olympics/utils');
const { sub } = require('date-fns');

module.exports = async job => {
  const trackedCompetitions = MAINCONFIG.feeds?.heimspiel?.trackedCompetitions;

  try {
    let timelinesConfig = cfg?.feeds.heimspiel?.timelines;

    _.set(
      timelinesConfig.timelines,
      'preLivePost.label',
      timelinesConfig.timelines.preLivePost.label?.replace('[[COMPETITION_NAME]]', timelinesConfig.name)
    );

    const createdContentAvailableEvents = await TemplatesRecordsM.find(
      {
        'event.feedType': 'heimspiel'
      },
      ['event'],
      { lean: true }
    ).catch(err => {
      LOGGER.error('syncMatchdayTimelines->isExist catch %o', err);
    });

    // console.log('createdContentAvailableEvents', createdContentAvailableEvents)

    const uniqueTrackedEvents = _.uniqBy(createdContentAvailableEvents, 'event.competitionId');

    const timelinePreLivePost = [];

    const events = [];
    await eachOfSeries(uniqueTrackedEvents, async (event, index) => {
      events.push(event?.event);

      await async.eachSeries(timelinesConfig.timelines.preLivePost.templates, async template => {
        //
        // const isExist = await TemplatesRecordsM.findOne(searchCriteria, null, { lean: true }).catch(err => {
        //   LOGGER.error('syncMatchdayTimelines->isExist catch %o', err);
        // });

        // if (!isExist) {
        //   const takeScreenshot = false;
        //   await createTemplate(template, event?.event, takeScreenshot);
        // }

        const { searchCriteria, pickLimit } = buildSearchCriteriaOlympic({
          template,
          event: event?.event
        });

        const pickLimitNumber = [
          'staticmedia',
          'wc_facts',
          'wc_facts_curiosity',
          'wc_static_facts',
          'wc_customranking',
          'staticslide'
        ].includes(template?.template)
          ? 0
          : 1;

        const toPickAarray =
          (await TemplatesRecordsM.find(searchCriteria, null, {
            lean: true,
            sort: { updatedAt: -1 }
          })
            .limit(pickLimitNumber)
            .catch(err => {
              LOGGER.error(err, 'syncMatchdayTimelines->toPick PRE / LIVE catch %o');
            })) || [];

        for (const pick of toPickAarray) {
          const lng = _.find(pick?.data?.fields, { id: 'lang' })?.value;
          if (pick?.uuid) {
            const insertion = {
              templateId: pick.uuid,
              template: pick.template_name,
              name: pick.name,
              createdAt: pick.createdAt,
              lng,
              eventId: pick?.event?.eventId,
              global: template?.global || false,
              indicator: `${pick?.event?.competitionName}-${pick?.event?.country?.code}`
            };
            timelinePreLivePost.push(insertion);
          }
        }
      });
    });

    //attach system pressbox videos
    const timelineSystemVideos = [];
    const searchCriteriasVideos = buildSearchCriteriaOlympic({
      template: {
        template: 'staticmedia',
        fields: {
          type: 'system_pressbox'
        },
        custom: true
      },
      event: null
    });

    const last48Hours = sub(new Date(), { hours: 48 });

    const toPickVideosAarray =
      (await TemplatesRecordsM.find(
        {
          ...searchCriteriasVideos.searchCriteria,
          createdAt: { $gte: last48Hours }
        },
        null,
        {
          lean: true,
          sort: { updatedAt: -1 }
        }
      )
        .limit(0)
        .catch(err => {
          LOGGER.error(err, 'syncMatchdayTimelines->searchCriteriasVideos PRE / LIVE catch %o');
        })) || [];

    for (const pick of toPickVideosAarray) {
      const lng = _.find(pick?.data?.fields, { id: 'lang' })?.value;
      if (pick?.uuid) {
        const insertion = {
          templateId: pick.uuid,
          template: pick.template_name,
          name: pick.name,
          createdAt: pick.createdAt,
          lng,
          eventId: null,
          global: false,
          indicator: `system_pressbox-${lng}`
        };
        timelineSystemVideos.push(insertion);
      }
    }

    // console.log('timelineSystemVideos', timelineSystemVideos)
    // console.log('timelinePreLivePost', timelinePreLivePost)

    const combinedTimelineWithVideosDistributed = distributeVideos(timelinePreLivePost, timelineSystemVideos);

    // console.log('timelinePreLivePost', timelinePreLivePost)
    // console.log('timelineSystemVideos', timelineSystemVideos)
    // console.log('combinedTimelineWithVideosDistributed', combinedTimelineWithVideosDistributed)

    await TimelineRecordsM.findOneAndUpdate(
      { name: timelinesConfig.timelines.preLivePost.label },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: timelinesConfig.timelines.preLivePost.label,
          templates: combinedTimelineWithVideosDistributed,
          options: { mode: 'auto' },
          event: events
        }
      },
      {
        lean: true,
        new: true,
        upsert: true
        // runValidators: true
      }
    ).catch(err => {
      console.error('err', err);
    });

    return 'ok';
  } catch (err) {
    LOGGER.error(err, 'CATCH UPDATER overviewDaemon ERROR');
    return err;
  }
};
