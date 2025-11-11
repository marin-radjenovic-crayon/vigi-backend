const path = require('path');
const { isIDGood, handleError } = require('../../middleware/utils');
const { getItem, checkQueryString, getItems } = require('../../middleware/db');
const TemplatesRecordsM = require('../../models/template_records');
const TimelineRecordsM = require('../../models/timeline_records');
const { saveSingleTemplate } = require('../templates');

const { v4: uuidv4 } = require('uuid');
const async = require('async');
const _ = require('lodash');
const cfg = require('../../config');
const SetupM = require('../../models/setup');
const FnFeedsClass = require('../feeds/opta/functions');
const FnFeedsClassHeimspiel = require('../feeds/heimspiel/functions');
const FnFeedsClassAdler = require('../feeds/del/functions');
const { format, parse, parseISO, differenceInMinutes } = require('date-fns');

const { de } = require('date-fns/locale');
const { competitionId, matchdayTimelines } = require('../../config');
const { create } = require('../videos/create');
const config = require('@/src/config');
const {
  buildSearchCriteria,
  parseCompetitionConfig,
  getDefaultCompetitionFallback
} = require('@/src/controllers/actions/helpers');
const {
  prepareMatchdayPureAdler,
  prepareMatchdayPure,
  createTemplate,
  syncMatchdayTimelinePureAdler,
  syncMatchdayTimelinePure,
  syncMatchdayTimelinePureBild,
  syncMatchdayTimelinePureForOF
} = require('@/src/controllers/actions/handleTemplate');
const { processMatchVideos } = require('@/src/controllers/vod/perform-stats');
const getUserEvent = require('../functions/getUserEvent');
const { getItemsPure } = require('@/src/middleware/db');
const { STATIC_TEMPLATES_PERFORMSTATS } = require('@/src/constants/templates');
const { CLIENTS } = require('@/src/constants/config');
const { CALL_SAVE_TYPES } = require('@/src/constants/common');
const { handleWcGoal, DYNAMIC_TEMPLATES } = require("@/src/controllers/updater/dynamicTemplates");

/**
 * Dynamicly handle template
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const prepareMatchday = async (req, res) => {
  try {
    const body = req.body;
    switch (cfg.client) {
      case CLIENTS.ADLER:
        {
          const output = await prepareMatchdayPureAdler(undefined, req).catch(err => {
            LOGGER.error('prepareMatchdayPure catch %o', err);
          });
          res.status(200).json(output);
        }
        break;
      default: {
        const output = await prepareMatchdayPure(undefined, undefined, body.competitionId, req, true).catch(err => {
          LOGGER.error('prepareMatchdayPure catch %o', err);
        });
        res.status(200).json(output);
      }
    }
  } catch (error) {
    LOGGER.error(error, 'actions->handleTemplate %o');
    const message = new Error(`prepareMatchday error ${error.message}`);
    handleError(res, message);
  }
};

/**
 * Sync match videos on demand, when daemon crashed or something
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const syncMatchVideos = async (req, res) => {
  try {
    const body = req.body;
    const competitionId = body.competitionId;
    const eventId = body.eventId;

    const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId });

    await processMatchVideos([eventId], competitionConfig).catch(err => {
      LOGGER.error(err, 'processMatchVideos err');
    });

    res.status(200).json({
      success: true
    });
  } catch (error) {
    LOGGER.error(error, 'actions->syncMatchVideos %o');
    const message = new Error(`syncMatchVideos error ${error.message}`);
    handleError(res, message);
  }
};

const tmpCreateBefore = async () => {
  return new Promise((resolve, reject) => {
    async.eachSeries(
      cfg?.matchdayTemplatesToCreate,
      (template, callbackTop) => {
        (async () => {
          const created = await createTemplate(template);
          // const actions = [{
          //   'templateId': created?.uuid,
          //   'url': `${MAINCONFIG.frontendUrl}/frontend/screenshot/${template.name}/${created?.uuid}?format=1920x1080`,
          //   'dir': template.name,
          //   'format': '1920x1080',
          //   'preview': true
          // }];
          //
          // const ScreenshotClass = new Screenshot();
          // const response = await ScreenshotClass.takeScreenshotPure(actions).catch((err) => {
          //   LOGGER.error('actions->handleTemplate->takeScreenshotPure %o', err)
          // });

          callbackTop();
        })().catch(err => {
          callbackTop(err);
        });
      },
      function (err) {
        if (err) {
          LOGGER.error(err);
        }

        resolve();
      }
    );
  });
};

/**
 * Synchronizes matchday timelines based on the provided request and response objects.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves once the matchday timelines are synchronized.
 */
const syncMatchdayTimelines = async (req, res) => {
  const cfg = require('../../config');
  const body = req?.body;
  const client = MAINCONFIG.client || 'womansworldcup';
  const fcbId = "apoawtpvac4zqlancmvw4nk4o";
  try {
    switch (cfg.client) {
      case CLIENTS.ADLER:
        {
          const output = await syncMatchdayTimelinePureAdler(undefined, req).catch(err => {
            LOGGER.error('syncMatchdayTimelinePureAdler catch %o', err);
          });
          res.status(200).json(output);
        }
        break;
      case CLIENTS.FCB: {
        const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId: body.competitionId });
        const FnFeeds = new FnFeedsClass({
          target: {
            league: body.competitionId
          }
        });
        const nowLocal = new Date();
        const closestMatchesData = await FnFeeds.getClosestMatchFromSchedule(nowLocal.getTime(), [], competitionConfig);
        const closestMatches = [...(closestMatchesData.teamsPlayMatchday || [])];
        const events = [];

        const focusedMatches = closestMatches;
        const focusedMatchesUnique = _.uniqBy(focusedMatches, 'id');

        const closestEvents = [];

        await async.eachSeries(focusedMatchesUnique, async closestMatch => {

          const home = _.find(closestMatch?.contestant, { position: 'home' });
          const away = _.find(closestMatch?.contestant, { position: 'away' });

          const homeContestantName = closestMatch.homeContestantName || home?.shortName;
          const awayContestantName = closestMatch.awayContestantName || away?.shortName;
          if (home.id === fcbId || away.id === fcbId) {
            LOGGER.info(
              'BUTTON PREPARE TIMELINES Closest match picked: %s',
              `${closestMatch.date}${closestMatch.time} - ${homeContestantName} VS ${awayContestantName}`
            );

            let eventData = {
              selectedTeamId: closestMatch?.homeContestantId,
              competitionId: body.competitionId,
              competitionName: competitionConfig.competitionName,
              type: 'match',
              homeTeamId: closestMatch?.homeContestantId,
              awayTeamId: closestMatch?.awayContestantId,
              home: _.find(closestMatch?.contestant, { position: 'home' }),
              away: _.find(closestMatch?.contestant, { position: 'away' }),
              side: null,
              eventId: closestMatch?.id,
              dateObj: null,
              date: closestMatch.date,
              start_date: null,
              time: closestMatch.time,
              stage: closestMatch?.stage
            };

            if (home) {
              eventData.selectedTeamId = home.id;
              eventData.homeTeamId = home.id;
              eventData.awayTeamId = away.id;
            }

            events.push(eventData);

            await prepareMatchdayPure(eventData, true, competitionConfig.competitionId, req).catch(err => {
              LOGGER.error('prepareMatchdayPure catch %o', err);
            });
          }
        });
        // filter out closestMatchesData 
        const { teamsPlayMatchday } = closestMatchesData;
        const filtered = teamsPlayMatchday.filter(obj =>
          obj.contestant?.[0]?.id === fcbId || obj.contestant?.[1]?.id === fcbId
        );
        console.log('filtered: ', filtered)
        const output = await syncMatchdayTimelinePure({
          competitionConfig,
          closestMatchesData: { teamsPlayMatchday: filtered }
        }).catch(err => {
          LOGGER.error('syncMatchdayTimelinePure catch %o', err);
        });
        return res.status(200).json(output);
      }
      case CLIENTS.BILD: {
        const competitionConfig = _.find(MAINCONFIG?.feeds?.heimspiel?.competitions, { competitionId: body.competitionId });
        const FnFeeds = new FnFeedsClassHeimspiel({
          target: {
            league: competitionConfig.competitionId
          },
          client: 'bild'
        });

        // const nowLocal = new Date('2023-12-19Z15:05:00Z');
        const nowLocal = new Date();
        const closestMatchesData = await FnFeeds.getClosestMatchFromSchedule(nowLocal.getTime(), [], competitionConfig);
        const closestMatches = [...(closestMatchesData.teamsPlayMatchday || [])];

        const events = [];

        const focusedMatches = closestMatches;
        const focusedMatchesUnique = _.uniqBy(focusedMatches, 'id');

        const closestEvents = [];

        await async.eachSeries(focusedMatchesUnique, async closestMatch => {
          const home = closestMatch?.home;
          const away = closestMatch?.away
          const homeContestantName = home?.shortname;
          const awayContestantName = away?.shortname;

          LOGGER.info(
            'BUTTON PREPARE TIMELINES Closest match picked: %s',
            `${closestMatch.match_date}${closestMatch.match_time} - ${homeContestantName} VS ${awayContestantName}`
          );

          let eventData = {
            selectedTeamId: closestMatch?.home?.id,
            competitionId: body.competitionId,
            competitionName: competitionConfig.competitionName,
            type: 'match',
            homeTeamId: closestMatch?.home?.id,
            awayTeamId: closestMatch?.away?.id,
            home: home,
            away: away,
            side: null,
            eventId: closestMatch?.id,
            dateObj: null,
            date: closestMatch.match_date,
            start_date: null,
            time: closestMatch.match_time,
            stage: closestMatch?.stage
          };

          if (home) {
            eventData.selectedTeamId = home.id;
            eventData.homeTeamId = home.id;
            eventData.awayTeamId = away.id;
          }

          events.push(eventData);

          await prepareMatchdayPure(eventData, true, competitionConfig.competitionId, req).catch(err => {
            LOGGER.error('prepareMatchdayPure catch %o', err);
          });
        });

        const output = await syncMatchdayTimelinePureBild({
          competitionConfig,
          closestMatchesData
        }).catch(err => {
          LOGGER.error('syncMatchdayTimelinePure catch %o', err);
        });
        return res.status(200).json(output);
      }
      case CLIENTS.OF: {
        const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId: body.competitionId });
        const FnFeeds = new FnFeedsClass({
          target: {
            league: body.competitionId
          }
        });
        const nowLocal = new Date();
        const closestMatchesData = await FnFeeds.getClosestMatchFromSchedule(nowLocal.getTime(), [], competitionConfig);
        const output = await syncMatchdayTimelinePureForOF({
          competitionConfig,
          closestMatchesData
        }).catch(err => {
          LOGGER.error('syncMatchdayTimelinePure catch %o', err);
        });
        return res.status(200).json(output);
      }
      default: {
        const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId: body.competitionId });
        const FnFeeds = new FnFeedsClass({
          target: {
            league: body.competitionId
          }
        });

        // const nowLocal = new Date('2023-12-19Z15:05:00Z');
        const nowLocal = new Date();
        const closestMatchesData = await FnFeeds.getClosestMatchFromSchedule(nowLocal.getTime(), [], competitionConfig);
        const closestMatches = [...(closestMatchesData.teamsPlayMatchday || [])];

        const events = [];

        const focusedMatches = closestMatches;
        const focusedMatchesUnique = _.uniqBy(focusedMatches, 'id');

        const closestEvents = [];

        await async.eachSeries(focusedMatchesUnique, async closestMatch => {
          const home = _.find(closestMatch?.contestant, { position: 'home' });
          const away = _.find(closestMatch?.contestant, { position: 'away' });
          const homeContestantName = closestMatch.homeContestantName || home?.shortName;
          const awayContestantName = closestMatch.awayContestantName || away?.shortName;

          LOGGER.info(
            'BUTTON PREPARE TIMELINES Closest match picked: %s',
            `${closestMatch.date}${closestMatch.time} - ${homeContestantName} VS ${awayContestantName}`
          );

          let eventData = {
            selectedTeamId: closestMatch?.homeContestantId,
            competitionId: body.competitionId,
            competitionName: competitionConfig.competitionName,
            type: 'match',
            homeTeamId: closestMatch?.homeContestantId,
            awayTeamId: closestMatch?.awayContestantId,
            home: _.find(closestMatch?.contestant, { position: 'home' }),
            away: _.find(closestMatch?.contestant, { position: 'away' }),
            side: null,
            eventId: closestMatch?.id,
            dateObj: null,
            date: closestMatch.date,
            start_date: null,
            time: closestMatch.time,
            stage: closestMatch?.stage
          };

          if (home) {
            eventData.selectedTeamId = home.id;
            eventData.homeTeamId = home.id;
            eventData.awayTeamId = away.id;
          }

          events.push(eventData);

          await prepareMatchdayPure(eventData, true, competitionConfig.competitionId, req).catch(err => {
            LOGGER.error('prepareMatchdayPure catch %o', err);
          });
        });

        const output = await syncMatchdayTimelinePure({
          competitionConfig,
          closestMatchesData
        }).catch(err => {
          LOGGER.error('syncMatchdayTimelinePure catch %o', err);
        });
        res.status(200).json(output);
      }
    }
  } catch (error) {
    LOGGER.error('syncMatchdayTimelines err %o', error);
    const message = new Error(`prepareMatchday error ${error.message}`);
    handleError(res, message);
  }
};

/**
 * Retrieves the closest match and related information.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
const getClosestMatch = async (req, res) => {
  try {
    const cfg = require('../../config');
    const { competitionId } = req.params;
    const nowUtc = new Date();

    if (cfg.client === CLIENTS.ADLER) {
      // const FnFeeds = new FnFeedsClass({
      //   target: {
      //     league: competitionId
      //   }
      // });

      const PRE = await TimelineRecordsM.findOne({ name: 'PRE-MATCH' }, null, { lean: true });
      const LIVE = await TimelineRecordsM.findOne({ name: 'POST-MATCH' }, null, { lean: true });
      const POST = await TimelineRecordsM.findOne({ name: 'LIVE-MATCH' }, null, { lean: true });

      let setupEvent = await getUserEvent(req);
      setupEvent = setupEvent.data;
      const eventData = _.get(setupEvent, 'data.event');
      //check updated only 2 hours before and after game
      // const DateNow = new Date('2021-09-24 17:25:00');
      // const DateEvent = new Date('2021-09-24 19:30:00');

      // console.log('eventData', eventData);

      const FeedInstance = new FnFeedsClassAdler({
        target: {
          eventId: eventData.eventId,
          league: eventData.competitionId
        }
      });

      const game = await FeedInstance.getGameInfo().catch(err => {
        console.log('err', err);
      });

      // console.log('game', game);

      const DateNow = new Date();
      const DateEvent = new Date(_.get(eventData, 'start_date'));

      //
      // console.log('DateEvent', DateEvent);
      // console.log('DateNow', DateNow);

      // const hoursDiffrence = differenceInMinutes(DateNow, DateEvent);

      // console.log('DateEvent', DateEvent);
      // console.log('hoursDiffrence', hoursDiffrence);

      res.status(200).json({
        closestMatch: eventData,
        matchdayTimelines: [
          {
            name: 'PRE-MATCH',
            uuid: PRE?.uuid
          },
          {
            name: 'LIVE-MATCH',
            uuid: LIVE?.uuid
          },
          {
            name: 'POST-MATCH',
            uuid: POST?.uuid
          }
        ],
        liveMatchDetails: {},
        currentTimelineType: FeedInstance._getMatchStatus(game?.actualTimeAlias),
        matchStatus: {
          actualTimeAlias: game?.actualTimeAlias,
          actualTimeName: game?.actualTimeName
        }
      });
    } else {
      const FnFeeds = new FnFeedsClass({
        target: {
          league: competitionId
        }
      });

      const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId: competitionId }) || {
        competitionId: competitionId
      };
      const timelinesConfig = _.get(cfg?.matchdayTimelines, competitionConfig.competitionId);

      const PRE = await TimelineRecordsM.findOne(
        {
          name: { $regex: /PRE-MATCH/i },
          'event.competitionId': competitionId
        },
        null,
        { lean: true }
      );
      const LIVE = await TimelineRecordsM.findOne(
        {
          name: { $regex: /LIVE-MATCH/i },
          'event.competitionId': competitionId
        },
        null,
        { lean: true }
      );
      const POST = await TimelineRecordsM.findOne(
        {
          name: { $regex: /POST-MATCH/i },
          'event.competitionId': competitionId
        },
        null,
        { lean: true }
      );

      const prePostLiveLabel = timelinesConfig?.containerTimelines?.preLivePost?.label;
      let PRELIVEPOST = null;
      if (prePostLiveLabel) {
        PRELIVEPOST = await TimelineRecordsM.findOne(
          {
            name: prePostLiveLabel,
            'event.competitionId': competitionId
          },
          null,
          { lean: true }
        );
      }

      const closestMatchApi = await FnFeeds.getClosestMatchFromSchedule(nowUtc.getTime());

      const closestMatch = closestMatchApi?.teamsPlayToday?.[0] || closestMatchApi?.teamsPlayMatchday?.[0];

      const FnFeedsClosest = new FnFeedsClass({
        target: {
          league: competitionId,
          eventId: closestMatch?.id
        }
      });

      let liveMatchStats = null;
      if (closestMatch?.id) {
        liveMatchStats = await FnFeedsClosest.setLiveMatchStats(false).catch(console.error);
      }

      const liveMatchDetails = _.get(liveMatchStats, 'liveData.matchDetails', null);

      res.status(200).json({
        closestMatch,
        matchdayTimelines: [
          {
            name: 'PRE-MATCH',
            timelineName: PRE?.name,
            uuid: PRE?.uuid
          },
          {
            name: 'LIVE-MATCH',
            timelineName: LIVE?.name,
            uuid: LIVE?.uuid
          },
          {
            name: 'POST-MATCH',
            timelineName: POST?.name,
            uuid: POST?.uuid
          },
          {
            name: 'PRE-LIVE-POST',
            timelineName: PRELIVEPOST?.name,
            uuid: PRELIVEPOST?.uuid
          }
        ],
        liveMatchDetails
      });
    }

    // const nowUtc = new Date('2022-11-21Z15:35:00Z');
  } catch (error) {
    LOGGER.error(error, 'actions->handleTemplate %o');
    const message = new Error(error);
    handleError(res, message);
  }
};

const getLiveMatch = async (req, res) => {
  try {
    if (MAINCONFIG.client === CLIENTS.ADLER) {
      res.status(200).json({
        matchInfo: null,
        matchDetails: null,
        matchDetailsExtra: null
      });
    } else {
      if (MAINCONFIG.client === CLIENTS.BILD) {
        // FnFeedsClassHeimspiel
        const FnFeeds = new FnFeedsClassHeimspiel({
          target: {
            league: competitionId,
            eventId: req.params?.mid
          },
          client: MAINCONFIG.client
        });
        const liveMatchStats = await FnFeeds.setLiveMatchStats(false);
        const match_result = liveMatchStats?.match_result;
        const finalScores = match_result?.filter((ms) => ms.match_result_at === "0");
        const homeScore = finalScores?.find((s) => s.place === 'home')?.match_result;
        const awayScore = finalScores?.find((s) => s.place === 'away')?.match_result;
        const scores = {
          home: homeScore || '-',
          away: awayScore || '-'
        }
        res.status(200).json({
          matchInfo: liveMatchStats,
          scores
        });
      } else {
        const FnFeeds = new FnFeedsClass({
          target: {
            league: competitionId,
            eventId: req.params?.mid
          }
        });
        const liveMatchStats = await FnFeeds.setLiveMatchStats(false);

        res.status(200).json({
          matchInfo: liveMatchStats?.matchInfo,
          matchDetails: liveMatchStats?.liveData?.matchDetails,
          matchDetailsExtra: liveMatchStats?.liveData?.matchDetailsExtra
        });
      }


    }
  } catch (error) {
    const message = new Error(error);
    handleError(res, message);
  }
};

/**
 * Prepares competition timelines based on the given request and response.
 *
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - A promise that resolves with the success status.
 * @throws {Error} - If an error occurs during the process.
 */
const prepareCompetitionTimelines = async (req, res) => {
  try {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: MAINCONFIG.competitionId
      }
    });

    const body = req.body;
    const videoproduction = _.get(body, 'videoproduction', false);

    await FnFeeds.setTeamSchedule();

    const tournamentCalendar = FnFeeds.apiData?.tournamentCalendar;

    let yestarday = new Date(`${tournamentCalendar.startDate}00:00:00Z`);
    let today = new Date(`${tournamentCalendar.endDate}23:59:59Z`);

    const matchdays = await FnFeeds.getMatchdaysInRange(yestarday.toISOString(), today.toISOString()).catch(err => {
      console.log('err', err);
    });

    const playedMatches = _.filter(
      matchdays.matchdays,
      m => _.toLower(m.liveData.matchDetails?.matchStatus) === 'played'
    ).map(m => {
      const teams = m?.matchInfo?.contestant;
      const home = _.find(teams, { position: 'home' });
      const away = _.find(teams, { position: 'away' });
      const eventId = m?.matchInfo?.id;
      return {
        ...m,
        _event: {
          selectedTeamId: null,
          competitionId: m?.matchInfo?.tournamentCalendar?.id,
          competitionName: m.matchInfo.competition.name,
          type: 'match',
          homeTeamId: home?.id,
          awayTeamId: away?.id,
          side: null,
          eventId,
          dateObj: null,
          date: null,
          start_date: null,
          time: null
        }
      };
    });

    const timelineTypeCfg = _.find(cfg?.matchdayTimelines, { name: 'POST-MATCH' });

    await async.eachSeries(playedMatches, async match => {
      const event = match?._event;
      const teams = match?.matchInfo?.contestant;
      const home = _.find(teams, { position: 'home' });
      const away = _.find(teams, { position: 'away' });

      const matchDate = parseISO(match?.matchInfo?.date.replace('Z', 'T') + match?.matchInfo?.time);

      const startTime = format(matchDate, 'HH:mm', { locale: de });
      const startDate = format(matchDate, 'dd.MM.yy', { locale: de });

      const eventId = match?.matchInfo?.id;
      const competition = match?.matchInfo?.competition;
      const calendarId = match?.matchInfo?.tournamentCalendar?.id;

      const timelineContent = [];

      await prepareMatchdayPure(event, undefined, undefined, req).catch(err => {
        LOGGER.error('prepareMatchdayPure catch %o', err);
      });

      const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId: calendarId });

      for (const template of timelineTypeCfg.templates) {
        const { searchCriteria, pickLimit } = buildSearchCriteria(template, eventId, competitionConfig);

        const toPickAarray =
          (await TemplatesRecordsM.find(searchCriteria, null, { lean: true }).catch(err => {
            LOGGER.error(err, 'prepareCompetitionTimelines->toPick catch %o');
          })) || [];

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

      const targetTimelineName = `${home.shortName}-${away.shortName} ${startDate.replaceAll(
        '.',
        '-'
      )} ${startTime.replace(':', '_')} POST`;

      const isExist = await TimelineRecordsM.findOne({ name: targetTimelineName }, null, { lean: true }).catch(err => {
        LOGGER.error('syncMatchdayTimelines->isExist catch %o', err);
      });

      if (!isExist) {
        await TimelineRecordsM.findOneAndUpdate(
          { name: targetTimelineName },
          {
            $set: {
              data: {
                matchDetails: match?.liveData?.matchDetails
              },
              format: '1920x1080',
              name: targetTimelineName,
              templates: timelineContent,
              options: { mode: 'auto' },
              event
            }
          },
          {
            lean: true,
            new: true,
            upsert: true
            // runValidators: true
          }
        ).catch(err => {
          LOGGER.error(err, 'TimelineRecordsM update and find');
        });

        if (videoproduction) {
          //calculate total duration BEGIN
          const filter = {
            uuid: []
          };
          _.each(timelineContent, item => {
            filter.uuid.push(item.templateId);
          });

          const data = await TemplatesRecordsM.find(
            {
              uuid: { $in: filter.uuid }
            },
            ['data.options.id', 'data.options.value'],
            {
              lean: true,
              sort: {
                createdAt: -1
              }
            }
          );

          const apiData = data || [];
          let totalDuration = _.sumBy(apiData, function (templateEntry) {
            return parseFloat(_.get(_.find(templateEntry.data.options, { id: 'videoduration' }), 'value'));
          });

          const inDuration = 100 / 1000;
          const outDuration = (500 / 1000) * timelineContent.length - 1;

          const totalIncludedOthers = totalDuration + inDuration + outDuration;

          const currentRecord = await TimelineRecordsM.findOne({ name: targetTimelineName }, null, {
            lean: true
          }).catch(err => {
            LOGGER.error('syncMatchdayTimelines->isExist catch %o', err);
          });

          const videoquery = {
            url: `${MAINCONFIG.frontendUrl}/frontend/video/timeline/${currentRecord.uuid}`,
            seconds: parseFloat(totalIncludedOthers) + 20,
            webhook: `${MAINCONFIG.server.appUrl}/webhook/videoproduction`,
            width: 1920,
            height: 1080
          };

          // if (videoSoundIsOn && videosound) {
          //   videoquery.sound = `${global.APP_FULLURL}${_.get(videosound, 'url')}`;
          // }

          LOGGER.debug('videoquery %o', videoquery);

          await create({
            body: {
              timeline_uuid: currentRecord.uuid,
              name: currentRecord.name,
              format: '1920x1080',
              event: event,
              videoquery
            },
            params: {
              type: 'timeline'
            }
          }).catch(err => {
            LOGGER.error(err, 'send video err');
          });
        }
      }
    });

    res.status(200).json({
      success: true
    });
  } catch (error) {
    LOGGER.error(error, 'actions->handleTemplate %o');
    const message = new Error(error);
    handleError(res, message);
  }
};

/**
 * Prepare the post match timeline for a given request and response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - Resolves with success message if operation is successful.
 */
const preparePostMatchTimeline = async (req, res) => {
  try {
    const body = req.body;
    const onlyLastMatchday = _.get(body, 'onlyLastMatchday', true);
    const tournamentCalendarId = _.get(body, 'tournamentCalendarId', null);
    const videoproduction = _.get(body, 'videoproduction', false);

    const FnFeeds = new FnFeedsClass({
      target: {
        league: tournamentCalendarId
      }
    });

    await FnFeeds.setTeamSchedule();

    const tournamentCalendar = FnFeeds.apiData?.tournamentCalendar;
    const calendarId = tournamentCalendar?.id;
    const competition = FnFeeds.apiData?.competition;
    const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId: calendarId });

    let yestarday = new Date(`${tournamentCalendar.startDate}00:00:00Z`);
    let today = new Date(`${tournamentCalendar.endDate}23:59:59Z`);

    const matchdays = await FnFeeds.getMatchdaysInRange(yestarday.toISOString(), today.toISOString()).catch(err => {
      console.log('err', err);
    });

    let playedMatches = _.filter(
      matchdays.matchdays,
      m => _.toLower(m.liveData.matchDetails?.matchStatus) === 'played'
    ).map(m => {
      const teams = m?.matchInfo?.contestant;
      const home = _.find(teams, { position: 'home' });
      const away = _.find(teams, { position: 'away' });
      const eventId = m?.matchInfo?.id;

      const homeName = home?.shortName || home?.name;
      const awayName = away?.shortName || away?.name;
      return {
        ...m,
        _event: {
          selectedTeamId: home?.id,
          competitionId: m?.matchInfo?.tournamentCalendar?.id,
          competitionName: m.matchInfo.competition.name,
          type: 'match',
          homeTeamId: home?.id,
          homeName,
          awayName,
          awayTeamId: away?.id,
          side: null,
          eventId,
          dateObj: null,
          date: null,
          start_date: null,
          time: null
        }
      };
    });

    const lastPlayed = playedMatches[playedMatches.length - 1];
    const lastWeek = lastPlayed?.matchInfo?.week;

    playedMatches = playedMatches.filter(e => {
      return e?.matchInfo?.week === lastWeek;
    });

    const timelineTypeCfg = _.find(cfg?.matchdayTimelines?.[competition?.name], { name: 'POST-MATCH' });
    const finalTemplates = [];

    await async.eachSeries(playedMatches, async match => {
      const event = match?._event;
      const teams = match?.matchInfo?.contestant;
      const home = _.find(teams, { position: 'home' });
      const away = _.find(teams, { position: 'away' });

      const matchDate = parseISO(match?.matchInfo?.date.replace('Z', 'T') + match?.matchInfo?.time);

      const startTime = format(matchDate, 'HH:mm', { locale: de });
      const startDate = format(matchDate, 'dd.MM.yy', { locale: de });

      const eventId = match?.matchInfo?.id;
      const competition = match?.matchInfo?.competition;

      const timelineContent = [];

      await prepareMatchdayPure(event, true, competitionConfig.competitionId, req).catch(err => {
        LOGGER.error('prepareMatchdayPure catch %o', err);
      });

      for (const template of timelineTypeCfg.templates) {
        const { searchCriteria, pickLimit } = buildSearchCriteria(template, eventId, competitionConfig);

        const toPickAarray =
          (await TemplatesRecordsM.find(searchCriteria, null, { lean: true })
            .limit(pickLimit)
            .catch(err => {
              LOGGER.error(err, 'prepareCompetitionTimelines->toPick catch %o');
            })) || [];

        for (const pick of toPickAarray) {
          if (pick?.uuid) {
            const lng = _.find(pick?.data?.fields, { id: 'lang' })?.value;
            timelineContent.push({
              templateId: pick.uuid,
              template: pick.template_name,
              name: pick.name,
              createdAt: pick.createdAt,
              lng,
              eventId: pick?.event?.eventId,
              homeName: pick?.event?.homeName,
              awayName: pick?.event?.awayName
            });
          }
        }
      }

      finalTemplates.push(...timelineContent);
    });

    //handle _after all
    // eslint-disable-next-line no-unsafe-optional-chaining
    for (const template of timelineTypeCfg?._after?.templates) {
      const { searchCriteria, pickLimit } = buildSearchCriteria(template, null, competitionConfig);

      const toPickAarray =
        (await TemplatesRecordsM.find(searchCriteria, null, { lean: true })
          .limit(pickLimit)
          .catch(err => {
            LOGGER.error(err, 'prepareCompetitionTimelines->toPick catch %o');
          })) || [];

      for (const pick of toPickAarray) {
        if (pick?.uuid) {
          const lng = _.find(pick?.data?.fields, { id: 'lang' })?.value;
          finalTemplates.push({
            templateId: pick.uuid,
            template: pick.template_name,
            name: pick.name,
            createdAt: pick.createdAt,
            lng,
            eventId: pick?.event?.eventId,
            homeName: pick?.event?.homeName,
            awayName: pick?.event?.awayName
          });
        }
      }
    }

    const targetTimelineName = `LAST MATCHDAY POST - ${competition?.knownName || competition?.name}`;

    const isExist = await TimelineRecordsM.findOne(
      {
        name: targetTimelineName,
        'event.competitionId': tournamentCalendar?.id
      },
      null,
      { lean: true }
    ).catch(err => {
      LOGGER.error('syncMatchdayTimelines->isExist catch %o', err);
    });

    // console.log('isExist', isExist)

    // if (!isExist) {
    await TimelineRecordsM.findOneAndUpdate(
      { name: targetTimelineName },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: targetTimelineName,
          templates: finalTemplates,
          options: { mode: 'auto' },
          event: {
            competitionId: tournamentCalendar?.id
          }
        }
      },
      {
        lean: true,
        new: true,
        upsert: true
        // runValidators: true
      }
    ).catch(err => {
      LOGGER.error(err, 'TimelineRecordsM update and find');
    });
    // }

    res.status(200).json({
      success: true
    });
  } catch (error) {
    LOGGER.error(error, 'actions->handleTemplate %o');
    const message = new Error(error);
    handleError(res, message);
  }
};

/**
 * Prepare the post match timeline for a given request and response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - Resolves with success message if operation is successful.
 */
const resaveAllTemplatesCompetitionTimeline = async (req, res) => {
  try {
    const body = req.body;
    // const tournamentCalendarId = _.get(body, 'tournamentCalendarId', null);

    const trackedCompetitions = MAINCONFIG.feeds?.opta?.trackedCompetitions;

    let counter = 0;
    for (const competition of trackedCompetitions) {
      const tournamentCalendarId = competition?.tournamentCalendarId;
      const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId: tournamentCalendarId });

      const FnFeeds = new FnFeedsClass({
        target: {
          league: competition?.tournamentCalendarId
        }
      });

      const defaultCompetitionFallbackId = getDefaultCompetitionFallback(competitionConfig);

      let timelinesConfig = _.get(cfg?.matchdayTimelines, competitionId)?.name
        ? _.get(cfg?.matchdayTimelines, competitionId)
        : _.get(cfg?.matchdayTimelines, defaultCompetitionFallbackId);

      timelinesConfig = parseCompetitionConfig(timelinesConfig, competitionConfig);

      const isExist = await TimelineRecordsM.findOne(
        {
          name: timelinesConfig?.containerTimelines?.preLivePost?.label,
          'event.competitionId': tournamentCalendarId
        },
        null,
        { lean: true }
      );

      if (!Array.isArray(isExist?.templates)) {
        continue;
      }

      const templateIds = isExist?.templates?.map(pick => pick?.templateId);
      counter += templateIds?.length;

      // Step 2: Query all template records for the UUID array and retrieve only the event and uuid
      const templates = await getItemsPure(
        {
          uuid: { $in: templateIds } // Match any uuid in the array
        },
        TemplatesRecordsM,
        ['uuid', 'event', 'template_name'],
        {
          limit: 0
        }
      );

      // Step 3: Create a map of uuid: event for quick lookup
      const eventMap = new Map();
      templates.forEach(template => {
        if (template?.uuid && template?.event) {
          eventMap.set(template.uuid, template.event);
        }
      });


      const uniqueEventsSet = new Set();

      // Step 4: Sequentially save templates
      for (const pick of isExist?.templates) {
        if (pick?.templateId && !STATIC_TEMPLATES_PERFORMSTATS.includes(pick?.template)) {

          const eventForTemplate = eventMap.get(pick?.templateId);

          if (eventForTemplate) {
            uniqueEventsSet.add(eventForTemplate); // Collect unique event
          }

          const templateStructure = {
            params: {
              template: pick?.template,
              uuid: pick?.templateId
            },
            _takeScreenshot: false,
            _event: eventForTemplate,
            _saveType: CALL_SAVE_TYPES.RESAVE_ALL_TEMPLATES
          };


          if (!DYNAMIC_TEMPLATES.includes(pick?.template)) {

            // Sequentially await each saveSingleTemplate call
            await saveSingleTemplate(templateStructure, {
              status: () => {
                return {
                  json: () => {
                  }
                };
              }
            });
          }
        }
      }

      const uniqueEventsArray = Array.from(uniqueEventsSet);
      const goalsToRemove = _.uniq(uniqueEventsArray.map((e) => e?.eventId))

      await TemplatesRecordsM.deleteMany({
        'event.eventId': { $in: goalsToRemove },
        template_name: { $in: DYNAMIC_TEMPLATES }
      });

      // Step 5: Handle WC_GOAL
      for (const uniqueEvent of uniqueEventsArray) {
        await handleWcGoal({
          eventData: uniqueEvent
        }).catch(err => LOGGER.error(err, 'DYNAMIC_TEMPLATES: handleWcGoal err'));
      }

    }

    LOGGER.debug(`resaveAllTemplatesCompetitionTimeline: counter total templates resaved: ${counter}`);

    // Step 5: Send response after all templates are processed sequentially
    res.status(200).json({
      success: true
    });
  } catch (error) {
    // console.error('##error', error)
    const message = new Error(error);
    handleError(res, message);
  }
};

module.exports = {
  prepareMatchday,
  syncMatchdayTimelines,
  getClosestMatch,
  getLiveMatch,
  prepareCompetitionTimelines,
  preparePostMatchTimeline,
  syncMatchVideos,
  resaveAllTemplatesCompetitionTimeline
};
