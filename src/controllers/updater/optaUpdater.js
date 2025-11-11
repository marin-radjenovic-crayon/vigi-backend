const BaseClass = require('./index');
const config = require('../../config');
const _ = require('lodash');
const async = require('async');
const { differenceInMinutes, parseISO, format, parse } = require('date-fns');

const { saveSingleTemplate } = require('../templates/handleTemplate');

const TemplatesRecordsM = require('../../models/template_records');

const FeedClass = require('../feeds/del/functions');
const UpdaterM = require('../../models/updater');
const { upsertItem, getItem, getItemsPure } = require('../../middleware/db');
const MediaM = require('../../models/media');

const GoalTemplateClass = require('../../templates/adlergoal');
const FnFeedsClass = require('../feeds/opta/functions');
const FnFeedsClassHeimspiel = require('../feeds/heimspiel/functions');
const { prepareMatchdayPure, syncMatchdayTimelinePure, syncMatchdayTimelinePureBild, syncMatchdayTimelinePureForOF } = require('../actions/handleTemplate');
const { utcToZonedTime } = require('date-fns-tz');
const TimelineRecordsM = require('../../models/timeline_records');
const { prepareMatchday } = require('@/src/controllers/actions');
const { getEventData, getEventDataForBild } = require('@/src/controllers/updater/helpers');
const cfg = require('@/src/config');
const { parseCompetitionConfig, getDefaultCompetitionFallback } = require('@/src/controllers/actions/helpers');
const { processMatchVideos } = require('@/src/controllers/vod/perform-stats');
const { DYNAMIC_TEMPLATES, handleWcGoal } = require('@/src/controllers/updater/dynamicTemplates');
const { convertLocalTimeRangeToUTC, isWithinUTCRange } = require('@/src/controllers/utils/auto-updater');
const { queues } = require('@/src/queues/init');

let LAST_MATCHDAY_AND_TIMELINE_PREPARE = null;
const localTimeRange = MAINCONFIG.feeds?.opta?.localTimeRange;
const crypto = require('crypto');
const { CLIENTS } = require('@/src/constants/config');

function getMinutesDifference(currentTime, match) {
  const matchTime = new Date(match.date + match.time);
  return differenceInMinutes(currentTime, matchTime);
}

function getMinutesDifferenceForBild(currentTime, match) {
  // Combine date + time into one string
  const matchDateTimeStr = `${match.match_date} ${match.match_time}`; // "24.11.2024 17:30"

  // Parse using the known format
  const matchTime = parse(matchDateTimeStr, "dd.MM.yyyy HH:mm", new Date());

  // Return difference in minutes
  return differenceInMinutes(currentTime, matchTime);
}

function shouldUpdateTimeline(minutesDiff, matchId) {
  return (
    MAINCONFIG.prepareMatchAndTimelineOn &&
    (!LAST_MATCHDAY_AND_TIMELINE_PREPARE || LAST_MATCHDAY_AND_TIMELINE_PREPARE !== matchId) &&
    minutesDiff < 0
  );
}

function shouldSkipUpdate({ minutesDiff, hoursBefore, hoursAfter }) {
  return (minutesDiff < 0 && minutesDiff <= -(hoursBefore * 60)) || (minutesDiff > 0 && minutesDiff >= hoursAfter * 60);
}

module.exports = class OptaUpdater extends BaseClass {
  constructor() {
    super();
  }

  async updateOtherMatches({ closestMatchesData, closestMatches, nowLocal, deps, updates, competitionConfig }) {
    for (const match of closestMatchesData.teamsPlayToday) {
      if (match.id === closestMatches[0].id) {
        continue; // Skipping the closest game
      }

      const eventData = getEventData(match, competitionConfig);
      const matchDate = new Date(match.date + match.time).getTime();
      const distance = differenceInMinutes(matchDate, nowLocal);

      if (distance >= -(15 * 60)) {
        // Update logic
        if (deps.includes('live')) {
          updates.push('live');
        }

        await this.processTemplates(updates, eventData);
      }
    }
  }

  processTemplates(
    updates,
    eventData,
    options = {
      includeEvent: true,
      mongoOptions: {
        limit: 0
      }
    }
  ) {
    return new Promise((resolve, reject) => {
      const templateUpdateConfig = MAINCONFIG.client === CLIENTS.BILD ? config.liveUpdates.heimspielBild : config.liveUpdates.opta;
      const includeEventSearchCriteria = options?.includeEvent;

      const templatesToUpdate = [];
      _.each(updates, updateType => {
        const templatesTypesToUpdate = _.get(templateUpdateConfig, updateType);

        _.each(_.get(templatesTypesToUpdate, 'templates', []), template => {
          if (templatesToUpdate.indexOf(template) === -1) {
            if (MAINCONFIG.client === CLIENTS.FCB) {
              if (template.includes('fcb_')) {
                templatesToUpdate.push(template);
              }
            } else {
              templatesToUpdate.push(template);
            }
          }
        });
      });
      const mongoOptions = options?.mongoOptions;

      async.eachSeries(
        templatesToUpdate,
        (templateNameToUpdate, callback) => {
          (async () => {
            const searchCriteria = {
              template_name: templateNameToUpdate
            };

            if (includeEventSearchCriteria) {
              searchCriteria['event.eventId'] = eventData.eventId;
            }

            if (DYNAMIC_TEMPLATES.includes(templateNameToUpdate)) {
              await handleWcGoal({
                eventData
              }).catch(err => LOGGER.error(err, 'DYNAMIC_TEMPLATES: handleWcGoal err'));

              callback();
            } else {
              const templates = await getItemsPure(
                searchCriteria,
                TemplatesRecordsM,
                ['uuid', 'event'],
                mongoOptions
              ).catch(err => {
                LOGGER.error(err);
              });

              async.eachSeries(
                templates,
                (dbTemplate, callback2) => {
                  const targetEventData = includeEventSearchCriteria ? eventData : dbTemplate?.event;
                  const uuid = _.get(dbTemplate, 'uuid');
                  (async () => {
                    const templateStructure = {
                      params: {
                        template: templateNameToUpdate,
                        uuid: uuid
                      },
                      _takeScreenshot: false,
                      _event: targetEventData
                    };

                    await saveSingleTemplate(templateStructure, {
                      status: () => {
                        return {
                          json: () => { }
                        };
                      }
                    });

                    LOGGER.debug('Templates has been resaved %o', {
                      template: templateNameToUpdate,
                      uuid: uuid
                    });

                    callback2();
                  })().catch(err => {
                    callback2(err);
                  });
                },
                function (err) {
                  if (err) {
                    LOGGER.error(err);
                  }
                  // configs is now a map of JSON data
                  callback();
                }
              );
            }
          })().catch(err => {
            callback(err);
          });
        },
        function (err) {
          if (err) {
            reject(err);
          }
          resolve();
        }
      );
    });
  }

  async processTemplatesSeason(
    updates,
    options = {
      trackedCompetitions: [],
      mongoOptions: {
        limit: 0
      },
      onlyPreLivePostTemplates: false,
      maxTimeRangeInSeconds: 25
    }
  ) {
    const templateUpdateConfig = MAINCONFIG.client === CLIENTS.BILD ? config.liveUpdates.heimspielBild : config.liveUpdates.opta;
    const trackedCompetitions = options?.trackedCompetitions;

    let templatesToUpdate = [];
    updates.forEach(updateType => {
      const templatesTypesToUpdate = _.get(templateUpdateConfig, updateType, {});
      const templates = _.get(templatesTypesToUpdate, 'templates', []);
      templates.forEach(template => {
        if (!templatesToUpdate.includes(template)) {
          templatesToUpdate.push(template);
        }
      });
    });

    const nowLocal = new Date();
    const shouldUpdateCompetitionHashMap = {};
    for (const competition of trackedCompetitions) {
      const FnFeeds = new FnFeedsClass({
        target: {
          league: competition.tournamentCalendarId
        }
      });

      // const closestMatchesData = await FnFeeds.getClosestMatchFromSchedule(nowLocal.getTime());
      // const matchesToday = closestMatchesData.teamsPlayToday || [];

      //update last games, when mixed with older matchday, workaround until new timeline logic will be implemented
      // shouldUpdateCompetitionHashMap[competition.tournamentCalendarId] = matchesToday?.length > 0 ? true : false;
      shouldUpdateCompetitionHashMap[competition.tournamentCalendarId] = true;
    }

    const mongoOptions = options?.mongoOptions;

    for (const templateNameToUpdate of templatesToUpdate) {
      const searchCriteria = {
        template_name: templateNameToUpdate
      };

      if (trackedCompetitions.length) {
        for (const competition of trackedCompetitions) {
          const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, {
            id: competition.id
          });

          if (!shouldUpdateCompetitionHashMap[competition.tournamentCalendarId]) {
            continue;
          }

          const defaultCompetitionFallbackId = getDefaultCompetitionFallback(competitionConfig);

          let timelinesConfig =
            _.get(cfg?.matchdayTimelines, competitionConfig.competitionId) ||
            _.get(cfg?.matchdayTimelines, defaultCompetitionFallbackId);

          timelinesConfig = parseCompetitionConfig(timelinesConfig, competitionConfig);

          const targetTimelineLabel = timelinesConfig?.containerTimelines?.preLivePost.label;

          let preLivePostTemplates = [];

          if (options?.onlyPreLivePostTemplates) {
            preLivePostTemplates =
              (
                await TimelineRecordsM.findOne(
                  {
                    name: targetTimelineLabel,
                    'event.competitionId': { $in: [competition.tournamentCalendarId] }
                  },
                  [`templates.templateId`, `templates.template`],
                  { lean: true }
                )
              )?.templates
                ?.filter(t => t.template === templateNameToUpdate)
                .map(t => t.templateId) || [];

            searchCriteria['uuid'] = { $in: preLivePostTemplates };
          }

          searchCriteria['event.competitionId'] = { $in: [competition.tournamentCalendarId] };

          const dateThreshold = new Date(new Date().getTime() - options.maxTimeRangeInSeconds * 1000);
          searchCriteria['updatedAt'] = { $lte: dateThreshold };

          const templates = await getItemsPure(
            searchCriteria,
            TemplatesRecordsM,
            ['uuid', 'event', 'updatedAt'],
            mongoOptions
          );

          LOGGER.debug('Season Templates total: %o', {
            templates_count: templates?.length,
            searchCriteria: searchCriteria
          });

          for (const dbTemplate of templates) {
            const targetEventData = dbTemplate?.event;
            const uuid = _.get(dbTemplate, 'uuid');

            const templateStructure = {
              params: {
                template: templateNameToUpdate,
                uuid: uuid
              },
              _takeScreenshot: false,
              _event: targetEventData
            };

            await saveSingleTemplate(templateStructure, {
              status: () => ({
                json: () => { }
              })
            });

            LOGGER.debug('Season Templates have been resaved %o', {
              template: templateNameToUpdate,
              uuid: uuid
            });
          }
        }
      }
    }
  }

  // bild
  async initBild(deps = ['live'], competitionId = MAINCONFIG.competitionId) {
    try {
      const updates = [];
      const competitionConfig = _.find(MAINCONFIG?.feeds?.heimspiel?.competitions, { competitionId });
      const fnFeeds = new FnFeedsClassHeimspiel({
        target: { league: competitionConfig?.competitionId },
        client: 'bild'
      });
      const nowLocal = new Date();
      const closestMatchesData = await fnFeeds.getClosestMatchFromSchedule(nowLocal.getTime(), [], competitionConfig);
      const matchesToday = closestMatchesData.teamsPlayToday || [];

      LOGGER.debug(`teamsPlayMatchday ${competitionConfig?.knownName || competitionConfig?.name}: %s`, closestMatchesData.teamsPlayMatchday?.length);
      LOGGER.debug(`teamsPlayToday ${competitionConfig?.knownName || competitionConfig?.name}: %s `, closestMatchesData.teamsPlayToday?.length);

      if (matchesToday.length === 0) {
        LOGGER.debug('Skip update...no closest match found in 40 minutes...');
        return updates;
      }

      for (const match of matchesToday) {
        const home = match?.home;
        const away = match?.away;
        const homeContestantName = home?.shortname;
        const awayContestantName = away?.shortname;

        LOGGER.debug(
          'Today match check for live update: %s',
          `${match.match_date}${match.match_time} - ${homeContestantName} VS ${awayContestantName}`
        );
        const eventData = getEventDataForBild(match, competitionConfig);

        const minutesDiff = getMinutesDifferenceForBild(nowLocal, match);

        LOGGER.debug('minutesDifference %s', minutesDiff);

        if (
          shouldSkipUpdate({
            minutesDiff,
            hoursBefore: 1,
            hoursAfter: 3
          })
        ) {
          LOGGER.debug('Skipping live update....');
          continue;
        }

        if (deps.includes('live')) {
          updates.push('live');
        }

        await this.processTemplates(updates, eventData);
      }

      return updates;
    } catch (err) {
      // Handle errors that occurred during initialization
      throw err; // Rethrow or handle it as needed
    }
  }

  // worldcup
  async init(deps = ['live'], competitionId = MAINCONFIG.competitionId) {
    try {
      const fcbId = "apoawtpvac4zqlancmvw4nk4o";
      const updates = [];
      const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId });

      const fnFeeds = new FnFeedsClass({ target: { league: competitionConfig?.competitionId } });
      const nowLocal = new Date();
      // const localToTimezone = utcToZonedTime(nowLocal.toISOString(), 'America/New_York');
      // const nowLocal = new Date('2024-09-23T03:10:21.902Z');

      // LOGGER.info('Server local time NOW: %s', nowLocal);
      // LOGGER.info('UTC time NOW: %s', nowLocal.toISOString());
      // LOGGER.info('USA ISO time NOW: %s', localToTimezone.toISOString());

      const closestMatchesData = await fnFeeds.getClosestMatchFromSchedule(nowLocal.getTime(), [], competitionConfig);
      const matchesToday = closestMatchesData.teamsPlayToday || [];

      LOGGER.debug(`teamsPlayMatchday ${competitionConfig?.knownName || competitionConfig?.name}: %s`, closestMatchesData.teamsPlayMatchday?.length);
      LOGGER.debug(`teamsPlayToday ${competitionConfig?.knownName || competitionConfig?.name}: %s `, closestMatchesData.teamsPlayToday?.length);

      if (matchesToday.length === 0) {
        LOGGER.debug('Skip update...no closest match found in 40 minutes...');
        return updates;
      }

      for (const match of matchesToday) {
        const home = _.find(match?.contestant, { position: 'home' });
        const away = _.find(match?.contestant, { position: 'away' });
        const homeContestantName = home?.shortName;
        const awayContestantName = away?.shortName;
        if (MAINCONFIG.client === CLIENTS.FCB) {
          if (home?.id !== fcbId && away?.id !== fcbId) {
            continue;
          }
        }

        LOGGER.debug(
          'Today match check for live update: %s',
          `${match.date}${match.time} - ${homeContestantName} VS ${awayContestantName}`
        );
        const eventData = getEventData(match, competitionConfig);

        const minutesDiff = getMinutesDifference(nowLocal, match);

        LOGGER.debug('minutesDifference %s', minutesDiff);

        if (
          shouldSkipUpdate({
            minutesDiff,
            hoursBefore: 1,
            hoursAfter: 3
          })
        ) {
          LOGGER.debug('Skipping live update....');
          continue;
        }

        if (deps.includes('live')) {
          updates.push('live');
        }

        await this.processTemplates(updates, eventData);
      }

      return updates;
    } catch (err) {
      // Handle errors that occurred during initialization
      throw err; // Rethrow or handle it as needed
    }
  }

  async seasonDaemonInit(competition) {
    // const nowUtc = new Date('2022-11-20Z15:05:00Z');
    const nowUtc = new Date();
    const trackedCompetitions = MAINCONFIG.feeds?.opta?.trackedCompetitions;

    LOGGER.debug('SEASON DAEMON: Server local UTC time NOW: %s', nowUtc.toISOString());

    // if (MAINCONFIG.liveUpdates.optaVod?.enabled) {
    //   LOGGER.info('SEASON DAEMON: Adding PS_GET_VIDEOS %o', competition);
    //
    //   const data = { competition };
    //   // const jobId = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
    //   await queues.PerformStatsVideos.add('PS_GET_VIDEOS', data, {
    //     removeOnComplete: false
    //   });
    // }

    const utcTimeRange = convertLocalTimeRangeToUTC(localTimeRange, competition?.guessedTimezone);
    LOGGER.debug('SEASON DAEMON: utcTimeRange: %o', utcTimeRange);
    if (isWithinUTCRange(utcTimeRange)) {
      const maxTimeRangeInSeconds = config.liveUpdates.opta.season.maxTimeRangeInSeconds;

      await this.processTemplatesSeason(['season'], {
        includeEvent: false,
        trackedCompetitions: [competition],
        mongoOptions: {
          limit: 0
        },
        onlyPreLivePostTemplates: true,
        maxTimeRangeInSeconds
      }).catch(err => {
        LOGGER.error(err, 'ERROR processTemplatesSeason seasonDaemonInit %o', competition);
      });
    }

    return true;
  }

  async overviewDaemonInit(competition) {
    const nowUtc = new Date();
    LOGGER.debug('OVERVIEW DAEMON: Processing competition: %o', competition?.knownName);

    const maxTimeRangeInSeconds = config.liveUpdates.opta.overview.maxTimeRangeInSeconds;

    try {
      await this.processTemplatesSeason(['overview'], {
        includeEvent: false,
        trackedCompetitions: [competition],
        mongoOptions: { limit: 0 },
        onlyPreLivePostTemplates: true,
        maxTimeRangeInSeconds
      });
    } catch (err) {
      LOGGER.error(err, 'OVERVIEW DAEMON: processTemplatesSeason error');
    }

    const nowLocal = new Date();

    // LOGGER.debug('OVERVIEW DAEMON: Server local time NOW: %s', nowLocal);
    LOGGER.debug('OVERVIEW DAEMON: UTC time NOW: %s', nowLocal.toISOString());
    // LOGGER.info('USA ISO time NOW: %s', localToTimezone.toISOString());

    const client = MAINCONFIG?.client;
    if (client === CLIENTS.BILD) {
      const fnFeeds = new FnFeedsClassHeimspiel({
        target: { league: competition?.heimspielId },
        client: 'bild'
      });
      const competitionConfig = _.find(MAINCONFIG?.feeds?.heimspiel?.competitions, {
        competitionId: competition?.heimspielId
      });
      const closestMatchesData = await fnFeeds.getClosestMatchFromSchedule(
        nowLocal.getTime(),
        [],
        competitionConfig
      );

      const focusedMatches = closestMatchesData?.teamsPlayMatchday || [];

      for (const match of focusedMatches) {
        try {
          const home = match?.home;
          const away = match?.away
          const homeContestantName = home?.shortname;
          const awayContestantName = away?.shortname;

          LOGGER.debug(
            'OVERVIEW DAEMON: PREPARE TEMPLATES - TIMELINES Closest match picked: %s',
            `${match.match_date}${match.match_time} - ${homeContestantName} VS ${awayContestantName}`
          );

          const eventData = getEventDataForBild(match, competitionConfig);
          await prepareMatchdayPure(eventData, true, competitionConfig.competitionId);
        } catch (err) {
          LOGGER.error('prepareMatchdayPure for bild error: %o', err);
        }
      }

      if (competitionConfig) {
        await syncMatchdayTimelinePureBild({
          competitionConfig,
          closestMatchesData
        });
        return true;
      }

      return false;
    } else {
      const fnFeeds = new FnFeedsClass({ target: { league: competition?.tournamentCalendarId } });
      const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, {
        id: competition?.id
      });
      const fcbId = "apoawtpvac4zqlancmvw4nk4o";

      const closestMatchesData = await fnFeeds.getClosestMatchFromSchedule(
        nowLocal.getTime(),
        [],
        competitionConfig
      );

      const focusedMatches = closestMatchesData?.teamsPlayMatchday || [];

      for (const match of focusedMatches) {
        try {
          const home = _.find(match?.contestant, { position: 'home' });
          const away = _.find(match?.contestant, { position: 'away' });
          const homeContestantName = match.homeContestantName || home?.shortName;
          const awayContestantName = match.awayContestantName || away?.shortName;

          if (MAINCONFIG.client === CLIENTS.FCB) {
            if (home?.id !== fcbId && away?.id !== fcbId) {
              continue;
            }
          }

          LOGGER.debug(
            'OVERVIEW DAEMON: PREPARE TEMPLATES - TIMELINES Closest match picked: %s',
            `${match.date}${match.time} - ${homeContestantName} VS ${awayContestantName}`
          );

          const eventData = getEventData(match, competitionConfig);
          await prepareMatchdayPure(eventData, true, competitionConfig.competitionId);
        } catch (err) {
          LOGGER.error('prepareMatchdayPure error: %o', err);
        }
      }

      if (competitionConfig) {
        const { teamsPlayMatchday } = closestMatchesData;
        let filteredClosestMatchesData = teamsPlayMatchday

        if (MAINCONFIG.client === CLIENTS.FCB) {
          filteredClosestMatchesData = teamsPlayMatchday.filter(obj =>
            obj.contestant?.[0]?.id === fcbId || obj.contestant?.[1]?.id === fcbId
          );

        }
        await syncMatchdayTimelinePure({
          competitionConfig,
          closestMatchesData: {
            teamsPlayMatchday: filteredClosestMatchesData
          }
        });
        return true;
      }

      return false;
    }


  }

  async dailyDaemonInit(competition) {
    const nowUtc = new Date();

    LOGGER.debug('DAILY DAEMON: Server local UTC time NOW: %s', nowUtc.toISOString());
    LOGGER.debug(competition, 'DAILY DAEMON: Processing competition:');

    const maxTimeRangeInSeconds = config.liveUpdates.opta.daily.maxTimeRangeInSeconds;
    await this.processTemplatesSeason(['daily'], {
      includeEvent: false,
      trackedCompetitions: [competition],
      mongoOptions: {
        limit: 0
      },
      onlyPreLivePostTemplates: true,
      maxTimeRangeInSeconds
    }).catch(err => LOGGER.error('DAILY DAEMON: overviewDaemonInit', err));

    return true;
  }

  async minutes5DaemonInit(competition) {
    const nowUtc = new Date();

    LOGGER.debug('5 MINUTES DAEMON: Server local UTC time NOW: %s', nowUtc.toISOString());
    LOGGER.debug('5 MINUTES DAEMON: Processing competition:', competition);

    const maxTimeRangeInSeconds = config.liveUpdates.opta.minutes5.maxTimeRangeInSeconds;

    await this.processTemplatesSeason(['minutes5'], {
      includeEvent: false,
      trackedCompetitions: [competition],
      mongoOptions: {
        limit: 0
      },
      onlyPreLivePostTemplates: true,
      maxTimeRangeInSeconds
    }).catch(err => LOGGER.error(err, '5 MINUTES DAEMON: minutes5DaemonInit'));

    return true;
  }

  async minutes5DaemonInitForOF(competitionConfig) {
    const nowUtc = new Date();
    console.log('minute5DaemonInitForOF start ....');
    await syncMatchdayTimelinePureForOF({competitionConfig})
    console.log('minute5DaemonInitForOF end ....');
    return true;
  }

  async processCompetitionVods(competition, options = {}) {
    const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, {
      id: competition.id
    });
    console.log('processCompetitionVods: ')
    const defaultCompetitionFallbackId = getDefaultCompetitionFallback(competitionConfig);

    let timelinesConfig =
      _.get(cfg?.matchdayTimelines, competitionConfig.competitionId) ||
      _.get(cfg?.matchdayTimelines, defaultCompetitionFallbackId);

    timelinesConfig = parseCompetitionConfig(timelinesConfig, competitionConfig);

    const targetTimelineLabels = [
      timelinesConfig?.timelines?.preMatch?.label,
      timelinesConfig?.timelines?.liveMatch?.label,
      timelinesConfig?.timelines?.postMatch?.label
    ];

    const regexPatterns = targetTimelineLabels.map(label => ({
      name: label
    }));

    let timelines = await TimelineRecordsM.find(
      {
        $or: regexPatterns,
        'event.competitionId': { $in: [competition.tournamentCalendarId] }
      },
      ['name', `templates.templateId`, `templates.template`, `templates.eventId`],
      { lean: true }
    );

    const combinedTemplates = timelines.flatMap(timeline => timeline.templates);
    const uniqueEventIds = _.uniqBy(combinedTemplates, 'eventId').map(e => e?.eventId);

    if (uniqueEventIds?.length > 0) {
      LOGGER.debug(`Unique events found! Processing videos for ${competition?.knownName}..`);

      await processMatchVideos(uniqueEventIds, competitionConfig).catch(err => {
        LOGGER.error(err, 'processMatchVideos err');
      });
    }

    // for (const dbTemplate of templates) {
    //   const targetEventData = dbTemplate?.event;
    //   const uuid = _.get(dbTemplate, 'uuid');
    //
    //   const templateStructure = {
    //     params: {
    //       template: templateNameToUpdate,
    //       uuid: uuid
    //     },
    //     _takeScreenshot: false,
    //     _event: targetEventData
    //   };
    //
    //   await saveSingleTemplate(templateStructure, {
    //     status: () => ({
    //       json: () => {}
    //     })
    //   });
    //
    //   LOGGER.info('Season Templates have been resaved %o', {
    //     template: templateNameToUpdate,
    //     uuid: uuid
    //   });
    // }
    // };
  }
};
