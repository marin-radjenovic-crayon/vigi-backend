const path = require('path');
const { isIDGood, handleError } = require('../../middleware/utils');
const { getItem, checkQueryString, getItems } = require('../../middleware/db');

const Screenshot = require(`${APP_ROOT_PATH}/src/controllers/utils/screenshot`);

const TemplatesRecordsM = require('../../models/template_records');
const TimelineRecordsM = require('../../models/timeline_records');
const { saveSingleTemplate } = require('../templates');

const { v4: uuidv4 } = require('uuid');
const async = require('async');
const _ = require('lodash');
const cfg = require('../../config');
const SetupM = require('../../models/setup');
const FnFeedsClass = require('../feeds/opta/functions');
const FnFeedsClassAdler = require('../feeds/del/functions');
const FnFeedsClassHeimspiel = require('../feeds/heimspiel/functions');
const { changePasswordInDB } = require('../profile/helpers');
const {
  collectUniqueTemplates,
  attachAdlerTemplateSearchCriteria,
  getFieldsToFind
} = require('../utils/timelineAutomation');
const { format, parse, parseISO, differenceInMinutes } = require('date-fns');
const { euro2024TimelineOnlyGerman } = require('./competitionsSpecialHandler');

const { de } = require('date-fns/locale');
const { competitionId, matchdayTimelines } = require('../../config');
const { create } = require('../videos/create');
const config = require('@/src/config');
const {
  buildSearchCriteria,
  parseCompetitionConfig,
  filterUniqueRecords,
  getDefaultCompetitionFallback,
  getUsedTemplates,
  syncTimelineByStatus,
  getIndicator,
  filterUniqueTemplateIds,
  prepareMatchIsoString,
  distributeVideos,
  updateSelectedSide,
  removeDuplicateTemplates,
  getUsedPreTemplates,
  getUsedPostTemplates
} = require('@/src/controllers/actions/helpers');
const { getEventData, getEventDataForBild, getMatchStatus } = require('@/src/controllers/updater/helpers');
const TimelineM = require('@/src/models/timeline_records');
const getUserEvent = require('../functions/getUserEvent');
const { CLIENTS } = require('@/src/constants/config');
const { handleWcGoal, DYNAMIC_TEMPLATES } = require('../updater/dynamicTemplates');
const { zonedTimeToUtc } = require('date-fns-tz');
const VidoesM = require('@/src/models/videos');

const allowedTeams = [
  "apoawtpvac4zqlancmvw4nk4o", // FC Bayern
  "dt4pinj0vw0t0cvz7za6mhmzy", // Dortmund
  "c5hderjlkcoaze51e5wgvptk" // Frankfurt
]

const attachVideoAds = async (timelineSettings, combinedTimeline, firstMatchdayEvent) => {
  const adsOptions = {
    advertiseInterval: timelineSettings?.advertiseInterval,
    advertiseStatus: timelineSettings?.advertiseStatus,
    advertiseVideoDe: timelineSettings?.advertiseVideoDe,
    advertiseVideoEn: timelineSettings?.advertiseVideoEn
  };

  if (!adsOptions.advertiseStatus) {
    return combinedTimeline;
  }

  const times = adsOptions?.advertiseInterval?.split('x')?.[0];
  const interval = adsOptions?.advertiseInterval?.split('x')?.[1];

  const templatesUuids = [];

  const allTemplates = _.each(combinedTimeline, item => {
    templatesUuids.push(item.templateId);
  });

  const data = await TemplatesRecordsM.find(
    {
      uuid: { $in: templatesUuids },
      $and: [
        {
          'data.fields.value.uuid': {
            $nin: [timelineSettings?.advertiseVideoDe?.uuid, timelineSettings?.advertiseVideoEn?.uuid]
          }
        }, // Exclude 'AAAA' and 'BBBB'
        { template_name: { $ne: 'wc_staticmedia' } }
      ]
    },
    ['data.options.id', 'data.options.value', 'uuid', 'template_name'],
    {
      lean: true,
      sort: {
        createdAt: -1
      }
    }
  );

  const dataUuids = data?.map(item => item.uuid);
  combinedTimeline = combinedTimeline.filter(item => dataUuids.includes(item.templateId));

  const isExistAddDe = await TemplatesRecordsM.findOne(
    {
      name: `VIDEO AD DE - ${firstMatchdayEvent?.competitionId}`
    },
    null,
    { lean: true }
  ).catch(err => {
    LOGGER.error('syncMatchdayTimelines->isExist catch %o', err);
  });

  if (!isExistAddDe) {
    await createTemplate(
      {
        template: 'staticmedia',
        fields: {
          type: 'generic',
          background: adsOptions?.advertiseVideoDe
        },
        options: {
          name: `VIDEO AD DE - ${firstMatchdayEvent?.competitionId}`,
          videoduration: `15`
        }
      },
      firstMatchdayEvent,
      false
    );
  }

  const isExistAddEn = await TemplatesRecordsM.findOne(
    {
      name: `VIDEO AD EN - ${firstMatchdayEvent?.competitionId}`
    },
    null,
    { lean: true }
  ).catch(err => {
    LOGGER.error('syncMatchdayTimelines->isExist catch %o', err);
  });

  if (!isExistAddEn) {
    await createTemplate(
      {
        template: 'staticmedia',
        fields: {
          type: 'generic',
          background: adsOptions?.advertiseVideoEn
        },
        options: {
          name: `VIDEO AD EN - ${firstMatchdayEvent?.competitionId}`,
          videoduration: `15`
        }
      },
      firstMatchdayEvent,
      false
    );
  }

  const apiData = data || [];
  let totalDuration = _.sumBy(apiData, function (templateEntry) {
    return parseFloat(_.get(_.find(templateEntry.data.options, { id: 'videoduration' }), 'value'));
  });

  const inDuration = 100 / 1000;
  const outDuration = (500 / 1000) * combinedTimeline.length - 1;

  const totalIncludedOthers = totalDuration + inDuration + outDuration;

  const totalDurationInSeconds = totalIncludedOthers; // Your total duration in seconds
  const frequencyInSeconds = (parseInt(interval) * 60) / parseInt(times); // Frequency for SPECIAL A (every 1200 seconds)

  const numberOfInserts = Math.floor(totalDurationInSeconds / frequencyInSeconds) || 1; // Number of times to insert
  const totalPositions = combinedTimeline.length + numberOfInserts;
  const insertionInterval = Math.floor(totalPositions / numberOfInserts);

  let insertionCount = 0;
  // Start the loop from index 3
  for (let i = 3; insertionCount < numberOfInserts && i < combinedTimeline.length; i += insertionInterval) {
    // Insert the first template
    combinedTimeline.splice(i, 0, {
      templateId: isExistAddEn?.uuid,
      template: isExistAddEn?.template_name,
      name: isExistAddEn?.name,
      lng: 'en',
      eventId: firstMatchdayEvent?.eventId
    });

    // Increment index to insert the second template immediately after the first
    i++;

    // Insert the second template
    combinedTimeline.splice(i, 0, {
      templateId: isExistAddDe?.uuid,
      template: isExistAddDe?.template_name,
      name: isExistAddDe?.name,
      lng: 'de', // assuming you want to set language to 'de'
      eventId: firstMatchdayEvent?.eventId
    });

    insertionCount++;
    i++;
  }

  return combinedTimeline;
};

const createTemplate = async (template, event, _takeScreenshot = false, user) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const templateKey = template?.name || template?.template;
      const templateFields = template?.fields;
      const templateOptions = template?.options;
      if (DYNAMIC_TEMPLATES.includes(templateKey)) {
        await handleWcGoal({
          eventData: event
        }).catch(err => LOGGER.error(err, 'DYNAMIC_TEMPLATES: handleWcGoal err'));
        LOGGER.debug(`Template ${templateKey} created.`);
        resolve();
      } else {
        await saveSingleTemplate(
          {
            params: {
              template: templateKey
            },
            _takeScreenshot,
            _fields: templateFields,
            _options: templateOptions,
            _keyword: template?.keyword,
            _event: event,
            _origin: 'prepareMatchday',
            user: user
          },
          {
            status: () => {
              return {
                json: data => {
                  LOGGER.debug(`Template ${templateKey} created.`);
                  resolve({
                    uuid: data?.uuid
                  });
                }
              };
            }
          }
        );
      }

    })().catch(err => {
      LOGGER.error(err, 'handleTemplate error');
      reject(err);
    });
  });
};


// OF
const recreatePostMatchdayForOF = async (event, skipScreenshot = false, competitionId, req, reCreateGoal = false) => {
  const cfg = require('../../config');
  try {
    const setupEvent = await getUserEvent(req);
    const eventData = event ?? _.get(setupEvent, 'data.event') ?? _.get(setupEvent, 'data.data.event');
    const competitionConfig =
      _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId }) || {
        competitionId: eventData?.competitionId,
        competitionName: eventData?.competitionName
      };
    const fallbackId = getDefaultCompetitionFallback(competitionConfig);
    let timelineConfig = _.get(cfg?.matchdayTimelines, competitionId)?.name
      ? _.get(cfg?.matchdayTimelines, competitionId)
      : _.get(cfg?.matchdayTimelines, fallbackId);

    timelineConfig = parseCompetitionConfig(timelineConfig, competitionConfig);

    const timelinesConfigTemplates = getUsedPostTemplates(timelineConfig);
    const currentWeek = eventData?.week;

    for (const template of timelinesConfigTemplates) {
      try {
        const { searchCriteria } = buildSearchCriteria(
          template,
          eventData?.eventId,
          competitionConfig,
          eventData?.stage?.name,
          currentWeek
        );
        const isExist = await TemplatesRecordsM.findOne(searchCriteria, null, { lean: true })
        if (isExist) {
          await reSaveTemplate(isExist, eventData)
        } else {
          await createTemplate(template, eventData, false, req?.user);
        }
      } catch (err) {
        console.log(err, `Error in template processing: ${template.name}`);
        throw err;
      }
    }
    return { success: true };

  } catch (error) {
    LOGGER.error(error, 'actions->handleTemplate');
    return { success: false, error };
  }
};

const recreatePreMatchdayForOF = async (event, competitionId, req) => {
  const cfg = require('../../config');
  try {
    const setupEvent = await getUserEvent(req);
    const eventData = event ?? _.get(setupEvent, 'data.event') ?? _.get(setupEvent, 'data.data.event');
    const competitionConfig =
      _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId }) || {
        competitionId: eventData?.competitionId,
        competitionName: eventData?.competitionName
      };
    const fallbackId = getDefaultCompetitionFallback(competitionConfig);
    let timelineConfig = _.get(cfg?.matchdayTimelines, competitionId)?.name
      ? _.get(cfg?.matchdayTimelines, competitionId)
      : _.get(cfg?.matchdayTimelines, fallbackId);

    timelineConfig = parseCompetitionConfig(timelineConfig, competitionConfig);

    const timelinesConfigTemplates = getUsedPreTemplates(timelineConfig);
    const currentWeek = eventData?.week;
    for (const template of timelinesConfigTemplates) {
      try {
        const { searchCriteria } = buildSearchCriteria(
          template,
          eventData?.eventId,
          competitionConfig,
          eventData?.stage?.name,
          currentWeek
        );
        const isExist = await TemplatesRecordsM.findOne(searchCriteria, null, { lean: true })
        if (isExist) {
          await reSaveTemplate(isExist, eventData)
        } else {
          await createTemplate(template, eventData, false, req?.user);
        }
      } catch (err) {
        LOGGER.error(err, `Error in template processing: ${template.name}`);
        throw err;
      }
    }
    return { success: true };

  } catch (error) {
    console.log('error on recreating prematch for of: ', error)
    LOGGER.error(error, 'actions->handleTemplate');
    return { success: false, error };
  }
};


const reSaveTemplate = async (template, event,) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const templateKey = template?.template_name || template?.template;
      const uuid = _.get(template, 'uuid');
      await saveSingleTemplate(
        {
          params: {
            template: templateKey,
            uuid
          },
          _takeScreenshot: false,
          _event: event,
        },
        {
          status: () => {
            return {
              json: data => {
                LOGGER.debug(`Template ${templateKey} created.`);
                resolve({
                  uuid: data?.uuid
                });
              }
            };
          }
        }
      );

    })().catch(err => {
      LOGGER.error(err, 'handleTemplate error');
      reject(err);
    });
  });
};

//opta
const prepareMatchdayPure = async (event, skipScreenshot = false, competitionId, req, reCreateGoal = false) => {
  const cfg = require('../../config');
  try {
    const setupEvent = await getUserEvent(req);
    const eventData = event ?? _.get(setupEvent, 'data.event') ?? _.get(setupEvent, 'data.data.event');
    const competitionConfig =
      _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId }) || {
        competitionId: eventData?.competitionId,
        competitionName: eventData?.competitionName
      };
    const fallbackId = getDefaultCompetitionFallback(competitionConfig);
    let timelineConfig = _.get(cfg?.matchdayTimelines, competitionId)?.name
      ? _.get(cfg?.matchdayTimelines, competitionId)
      : _.get(cfg?.matchdayTimelines, fallbackId);

    timelineConfig = parseCompetitionConfig(timelineConfig, competitionConfig);

    const timelinesConfigTemplates = getUsedTemplates(timelineConfig);
    const currentWeek = eventData?.week;
    const hasGoal = timelinesConfigTemplates.some(
      t => DYNAMIC_TEMPLATES.includes(t.template) || DYNAMIC_TEMPLATES.includes(t.name)
    );
    if (hasGoal && reCreateGoal) {
      try {
        await TemplatesRecordsM.deleteMany({
          'event.eventId': eventData?.eventId,
          template_name: { $in: DYNAMIC_TEMPLATES }
        });
      } catch (err) {
        LOGGER.error(err, 'wc_goal deleteMany failed or timed out');
        throw err;
      }
    }
    for (const template of timelinesConfigTemplates) {
      try {
        const { searchCriteria } = buildSearchCriteria(
          template,
          eventData?.eventId,
          competitionConfig,
          eventData?.stage?.name,
          currentWeek
        );

        const isExist = await TemplatesRecordsM.findOne(searchCriteria, null, { lean: true })

        if (!isExist) {
          // const takeScreenshot = !skipScreenshot ?? process.env.CLIENT_CFG === 'adler' ?? cfg.client === CLIENTS.FCB;
          const takeScreenshot = !skipScreenshot ?? process.env.CLIENT_CFG === 'adler';
          await createTemplate(template, eventData, takeScreenshot, req?.user);
        }

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

      } catch (err) {
        LOGGER.error(err, `Error in template processing: ${template.name}`);
        throw err;
      }
    }
    return { success: true };

  } catch (error) {
    LOGGER.error(error, 'actions->handleTemplate');
    return { success: false, error };
  }
};

//adler
const prepareMatchdayPureAdler = async (match, req) => {
  const cfg = require('../../config');

  try {
    let setupEvent = await getUserEvent(req);
    setupEvent = setupEvent.data;
    const eventData = match ? match : _.get(setupEvent, 'data.event');
    const setupTimelineAutomation = (await getItem({ id: 3 }, SetupM))?.data;

    // const uniqueTemplatesToCreate = _.filter(collectUniqueTemplates(setupTimelineAutomation), { name: 'staticmedia' });
    const uniqueTemplatesToCreate = collectUniqueTemplates(setupTimelineAutomation);

    await async.eachSeries(uniqueTemplatesToCreate, async template => {
      const searchCriteria = {
        'event.eventId': eventData?.eventId,
        template_name: template?.name
      };

      attachAdlerTemplateSearchCriteria(searchCriteria, template);

      const isExist = await TemplatesRecordsM.findOne(searchCriteria, null, { lean: true }).catch(err => {
        LOGGER.error(err, 'prepareMatchdayPureAdler->isExist catch %o');
      });

      let created = null;

      if (!isExist) {
        const takeScreenshot = true;

        created = await createTemplate(template, eventData, takeScreenshot, req?.user);
        // const actions = [
        //   {
        //     templateId: created?.uuid,
        //     url: `${MAINCONFIG.frontendUrl}/frontend/screenshot/${template.name}/${created?.uuid}?format=1920x1080`,
        //     dir: template.name,
        //     format: '1920x1080',
        //     preview: true
        //   }
        // ];
        //
        // const ScreenshotClass = new Screenshot();
        // const response = await ScreenshotClass.takeScreenshotPure(actions).catch(err => {
        //   LOGGER.error('actions->handleTemplate->takeScreenshotPure %o', err);
        // });
      }
    });

    return {
      success: true
    };
  } catch (error) {
    LOGGER.error(error, 'actions->handleTemplate');
    return {
      success: false,
      error
    };
  }
};

//worldcup
/**
 * Synchronizes the matchday timeline.
 *
 * @param {Array} events - The list of events.
 * @param {Object} competitionConfig - The competition configuration.
 * @param {Object} closestMatchesData - FnFeeds.getClosestMatchFromSchedule data
 * @returns {Object} - The result of the synchronization.
 */
const syncMatchdayTimelinePure = async ({ competitionConfig, closestMatchesData }) => {
  const cfg = require('../../config');

  try {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: competitionConfig.competitionId
      }
    });

    // const nowUtc = new Date("2023-07-05T00:00:00.121Z");
    // const nowUtc = new Date('2023-12-19Z15:05:00Z');

    const nowUtc = new Date();
    LOGGER.debug('Server local UTC time NOW: %s', nowUtc.toISOString());

    const pureMatches =
      closestMatchesData ||
      (await FnFeeds.getClosestMatchFromSchedule(nowUtc.getTime(), [], competitionConfig).catch(err => {
        LOGGER.error(err, 'getClosestMatchFromSchedule error');
      }));
    if (!pureMatches) {
      LOGGER.warn('Closest Match cant be defined...');
      return;
    }

    let teamsPlayMatchday = pureMatches.teamsPlayMatchday || [];
    if (!teamsPlayMatchday?.length) {
      LOGGER.warn('teamsPlayMatchday.length is 0');
      return;
    }

    if (competitionConfig.competitionIdReal === 'cesdwwnxbc5fmajgroc0hqzy2') {
      teamsPlayMatchday = teamsPlayMatchday.filter(m => {
        return _.find(m?.contestant, { id: '3l2t2db0c5ow2f7s7bhr6mij4' });
      });
    }

    const firstMatchdayEvent = getEventData(teamsPlayMatchday[0], competitionConfig);

    //attach global when enabled
    const setupGeneral = await getItem({ id: 1 }, SetupM).catch(err => {
      LOGGER.error(err, 'setupGeneral failed - setupGeneral');
    });

    const timelineSettings = _.get(setupGeneral, 'data.timeline.settings', {});

    const defaultCompetitionFallbackId = getDefaultCompetitionFallback(competitionConfig);

    //premiere league as default
    let timelinesConfig =
      _.get(cfg?.matchdayTimelines, competitionConfig.competitionId) ||
      _.get(cfg?.matchdayTimelines, defaultCompetitionFallbackId);
    timelinesConfig = parseCompetitionConfig(timelinesConfig, competitionConfig);
    let timelineContentPre = [];
    let timelineContentLive = [];
    let timelineContentPost = [];
    let timelineContentPost2 = [];
    let customTimelineVideos = [];
    let lastGameOlderThan48h = false;
    let withinNext48h = false;
    let lastPlayedMatch = null;
    let minTimeDiff = Infinity;

    await async.eachSeries(teamsPlayMatchday, async match => {
      try {
        if (match?.date && match?.time) {
          // const fullDateTime = `${match?.date}T${match?.time}`;
          const fullDateTime = prepareMatchIsoString({
            date: match?.date,
            time: match?.time
          });
          const targetDate = parseISO(fullDateTime);
          const diffMinutes = differenceInMinutes(targetDate, nowUtc);

          if (match?.matchStatus === 'Played') {
            if (diffMinutes < 0 && Math.abs(diffMinutes) < minTimeDiff) {
              minTimeDiff = Math.abs(diffMinutes);
              lastPlayedMatch = match;
            }
          }

          if (match?.matchStatus === 'Fixture' && diffMinutes >= 0 && diffMinutes <= 2880) {
            withinNext48h = true;
          }
        }
      } catch (error) {
        console.error('Error processing match:', error);
      }
    });

    lastGameOlderThan48h = minTimeDiff >= 2880;
    const germanTeamId = '3l2t2db0c5ow2f7s7bhr6mij4';
    const germanEventIds = [];

    await async.eachSeries(teamsPlayMatchday, async matchdayMatch => {
      const matchStatus = matchdayMatch?.matchStatus;
      const matchEvent = getEventData(matchdayMatch, competitionConfig);
      const currentWeek = matchEvent?.week;
      const currentLeg = matchdayMatch?.leg;
      const contestant = matchdayMatch?.contestant;

      if (_.find(contestant, { id: germanTeamId })) {
        germanEventIds.push(matchdayMatch?.id);
      }

      if (!contestant?.[0]?.id || !contestant?.[1]?.id) {
        return;
      }

      if (matchStatus === 'Fixture' || matchStatus === 'Postponed') {
        await syncTimelineByStatus({
          targetTimelineToMutate: timelineContentPre,
          timelineTemplatesConfig: timelinesConfig.timelines.preMatch.templates,
          currentWeek,
          matchdayMatch,
          competitionConfig,
          customTimelineVideos
        }).catch(err => {
          LOGGER.error(err, 'syncTimelineByStatus PRE->catch %o');
        });
      }

      if (matchStatus === 'Playing') {
        for (const template of timelinesConfig.timelines.liveMatch.templates) {
          const { searchCriteria, pickLimit } = buildSearchCriteria(
            template,
            matchdayMatch?.id,
            competitionConfig,
            null,
            currentWeek,
            currentLeg
          );

          const pickLimitNumber = [
            'staticmedia',
            'wc_facts',
            'wc_facts_curiosity',
            'wc_static_facts',
            'wc_customranking',
            'staticslide',
            'wc_goal',
            'fcb_goal'
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
                indicator: getIndicator(matchEvent)
              };
              timelineContentLive.push(insertion);

              if (template?.fields?.type === 'pressbox') {
                customTimelineVideos.push(insertion);
              }
            }
          }
        }
      }

      if (matchStatus === 'Played') {
        await syncTimelineByStatus({
          targetTimelineToMutate: timelineContentPost,
          timelineTemplatesConfig: timelinesConfig.timelines.postMatch.templates,
          currentWeek,
          matchdayMatch,
          competitionConfig,
          customTimelineVideos
        }).catch(err => {
          LOGGER.error(err, 'syncTimelineByStatus POST->catch %o');
        });

        if (timelinesConfig.timelines?.postMatch2) {
          await syncTimelineByStatus({
            targetTimelineToMutate: timelineContentPost2,
            timelineTemplatesConfig: timelinesConfig.timelines.postMatch2?.templates || [],
            currentWeek,
            matchdayMatch,
            competitionConfig,
            customTimelineVideos
          }).catch(err => {
            LOGGER.error(err, 'syncTimelineByStatus POST->catch %o');
          });
        }
      }
    });

    const filterLastNextGame = arr => {
      let index = -1;
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].template === 'wc_nextgame') {
          index = i;
          break;
        }
      }

      // if 'NextGame' was not found return original array
      if (index === -1) {
        return arr;
      }

      return arr.filter((item, i) => item.template !== 'wc_nextgame' || i === index);
    };

    timelineContentPost = filterLastNextGame(timelineContentPost);
    // //make sure no duplicates
    const allowedDuplicates = ['staticmedia'];
    timelineContentPre = filterUniqueRecords(timelineContentPre, allowedDuplicates);
    timelineContentLive = filterUniqueRecords(timelineContentLive, allowedDuplicates);
    timelineContentPost = filterUniqueRecords(timelineContentPost, allowedDuplicates);
    timelineContentPost2 = filterUniqueTemplateIds(timelineContentPost2, allowedDuplicates);

    //Sort wc_goal templates by CreatedAt
    timelineContentLive = timelineContentLive.sort((a, b) => {
      if (DYNAMIC_TEMPLATES.includes(a.template) && DYNAMIC_TEMPLATES.includes(b.template)) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0; // maintain the original order if not 'wc_goal'
    });

    timelineContentPost = timelineContentPost.sort((a, b) => {
      if (DYNAMIC_TEMPLATES.includes(a.template) && DYNAMIC_TEMPLATES.includes(b.template)) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

    if (
      !timelinesConfig?.timelines?.preMatch?.label ||
      !timelinesConfig?.timelines?.liveMatch?.label ||
      !timelinesConfig?.timelines?.postMatch?.label
    ) {
      LOGGER.warn(
        {
          timelinesConfig,
          competitionConfig
        },
        'timelinesConfig issue, labels missing %o'
      );
    }

    await TimelineRecordsM.findOneAndUpdate(
      { name: timelinesConfig.timelines.preMatch.label },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: timelinesConfig.timelines.preMatch.label,
          templates: timelineContentPre,
          options: { mode: 'auto' },
          event: firstMatchdayEvent
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

    await TimelineRecordsM.findOneAndUpdate(
      { name: timelinesConfig.timelines.liveMatch.label },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: timelinesConfig.timelines.liveMatch.label,
          templates: timelineContentLive,
          options: { mode: 'auto' },
          event: firstMatchdayEvent
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

    await TimelineRecordsM.findOneAndUpdate(
      { name: timelinesConfig.timelines.postMatch.label },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: timelinesConfig.timelines.postMatch.label,
          templates: timelineContentPost,
          options: { mode: 'auto' },
          event: firstMatchdayEvent
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

    if (timelinesConfig.timelines?.postMatch2) {
      await TimelineRecordsM.findOneAndUpdate(
        { name: timelinesConfig.timelines.postMatch2.label },
        {
          $set: {
            data: {},
            format: '1920x1080',
            name: timelinesConfig.timelines.postMatch2.label,
            templates: timelineContentPost2,
            options: { mode: 'auto' },
            event: firstMatchdayEvent
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
    }

    let combinedTimeline = [];
    let globalTimeline = [];
    let globalTemplates = [];

    if (timelineSettings?.globalOnPostmatch) {
      globalTimeline = await TimelineRecordsM.findOne({
        name: timelineSettings?.globalTimelineName,
        'event.competitionId': competitionConfig.competitionId
      }).catch(err => {
        LOGGER.error(err, 'Global timeline not found');
      });

      if (globalTimeline) {
        globalTemplates = globalTimeline?.templates || [];
      }
    }

    //focus on live, when any live matches
    if (timelineContentLive?.length > 0) {
      combinedTimeline = [...timelineContentLive];
    } else if (lastGameOlderThan48h && !withinNext48h) {
      if (
        competitionConfig.competitionFormat === 'International cup' &&
        competitionConfig.competitionType === 'international'
      ) {
        combinedTimeline = [...globalTemplates, ...timelineContentPre, ...timelineContentLive, ...timelineContentPost];
      } else {
        combinedTimeline = [...globalTemplates, ...timelineContentPost2, ...timelineContentPre, ...timelineContentLive];
      }
    } else {
      combinedTimeline = [...globalTemplates, ...timelineContentPre, ...timelineContentLive, ...timelineContentPost];
    }

    combinedTimeline = await attachVideoAds(timelineSettings, combinedTimeline, firstMatchdayEvent).catch(err => {
      console.error('Error during attachVideoAds', err);
    });

    await TimelineRecordsM.findOneAndUpdate(
      { name: timelinesConfig.containerTimelines.preLivePost.label },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: timelinesConfig.containerTimelines.preLivePost.label,
          templates: combinedTimeline,
          options: { mode: 'auto' },
          event: firstMatchdayEvent
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

    await euro2024TimelineOnlyGerman({
      competitionConfig,
      timelinesConfig,
      combinedTimeline,
      firstMatchdayEvent,
      germanEventIds
    }).catch(err => {
      LOGGER.error(err, 'euro2024TimelineOnlyGerman error');
    });

    //CUSTOM TIMELINES
    const targetTimelines = await TimelineRecordsM.find({ 'options.includeEventVideos': true }).catch(err => {
      LOGGER.error(err, 'CUSTOM TIMELINES not found');
    });

    for (const customTimeline of targetTimelines) {
      const uniqueEventIds = _.uniqBy(customTimeline?.templates, 'eventId').map(e => e?.eventId);
      const filteredVideos = customTimelineVideos.filter(video => uniqueEventIds.includes(video.eventId));
      const updatedTemplates = distributeVideos(customTimeline.templates, filteredVideos);

      await TimelineRecordsM.findOneAndUpdate(
        { uuid: customTimeline.uuid },
        {
          $set: {
            templates: updatedTemplates
          }
        },
        {
          lean: true,
          new: true,
          upsert: true
        }
      ).catch(err => {
        console.error('err', err);
      });
    }

    return {
      success: true
    };
  } catch (error) {
    LOGGER.error(error, 'syncMatchdayTimeline error %o');
    return {
      success: false,
      error
    };
  }
};

const createVideo = async (timeline, type = 'pre') => {
  const format = '1920x1080'
  const videoFormatFileUrl = _.get(
    timeline,
    `data.videos.${format}.file`,
    null,
  );
  console.log('there is timeline exist, need to check video stuff: ', videoFormatFileUrl)
  if (videoFormatFileUrl) {
    // maybe remove the timelines ?
    // but we might need it a few days just for track purposes.
    return;
  } else {
    //calculate total duration BEGIN

    // maybe we add a logic to check if the video is in the process of being created

    const createActualVideo = async () => {
      const filter = {
        uuid: []
      };
      const timelineContent = timeline?.templates;
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

      const totalIncludedOthers = totalDuration + 3;
      const videoquery = {
        url: `${MAINCONFIG.frontendUrl}/frontend/video/timeline/${timeline.uuid}`,
        seconds: parseFloat(totalIncludedOthers),
        webhook: `${MAINCONFIG.server.appUrl}/webhook/videoproduction`,
        width: 1920,
        height: 1080
      };

      const setupGeneral = await getItem({ id: 1 }, SetupM).catch(err => {
        LOGGER.error(err, 'setupGeneral failed - setupGeneral');
      });

      const videoSoundIsOn = _.get(setupGeneral, 'data.video.addSoundToTimeline', false);
      const videosound = _.get(setupGeneral, 'data.video.timelineaudio', null);

      if (videoSoundIsOn && videosound) {
        if (type === 'pre') {
          videoquery.sound = `${MAINCONFIG.server.appUrl}${_.get(videosound, 'pre_url')}`;
        } else {
          videoquery.sound = `${MAINCONFIG.server.appUrl}${_.get(videosound, 'post_url')}`;
        }
      }

      await create({
        body: {
          timeline_uuid: timeline.uuid,
          name: timeline.name,
          format: '1920x1080',
          event: timeline.event,
          videoquery
        },
        params: {
          type: 'timeline'
        }
      }).catch(err => {
        LOGGER.error(err, 'send video err');
      });
    }

    const timeline_uuid = timeline.uuid;
    // from videos, find out if video with status "sent" exists
    const video = await VidoesM.findOne(
      {
        timeline_uuid: timeline_uuid
      },
      null,
      {
        lean: true,
        sort: {
          createdAt: -1
        }
      }
    );
    if (video) {
      const videoStatus = video?.status;
      if (videoStatus === 'sent') {
        // wait
        console.log('wait until it is being processed')
        // if it's been more than 15 mins, create again ?
      } else if (videoStatus === 'error') {
        console.log('it is errored, create video again')
        await createActualVideo();
      }
    } else {
      await createActualVideo();
    }
  }
}


// OneFootball
const syncMatchdayTimelinePureForOF = async ({ competitionConfig, closestMatchesData }) => {
  const cfg = require('../../config');
  console.log('start of sync matchday timeline pure for of');
  try {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: competitionConfig.competitionId
      }
    });
    const nowUtc = new Date();
    LOGGER.debug('Server local UTC time NOW: %s', nowUtc.toISOString());

    const pureMatches =
      (await FnFeeds.getNextMatchdayMatchesFromSchedule(nowUtc.getTime(), [], competitionConfig).catch(err => {
        LOGGER.error(err, 'getClosestMatchFromSchedule error');
      }));

    if (!pureMatches) {
      LOGGER.warn('Closest Match cant be defined...');
      return;
    }
    let teamsPlayMatchday = pureMatches.teamsPlayMatchday || [];
    let teamsPlayMatchdayForPost = pureMatches.teamsPlayPostMatch || [];
    if (!teamsPlayMatchday?.length) {
      LOGGER.warn('teamsPlayMatchday.length is 0');
      return;
    }

    if (competitionConfig.competitionIdReal === 'cesdwwnxbc5fmajgroc0hqzy2') {
      teamsPlayMatchday = teamsPlayMatchday.filter(m => {
        return _.find(m?.contestant, { id: '3l2t2db0c5ow2f7s7bhr6mij4' });
      });
    }

    const defaultCompetitionFallbackId = getDefaultCompetitionFallback(competitionConfig);

    //premiere league as default
    let timelinesConfig =
      _.get(cfg?.matchdayTimelines, competitionConfig.competitionId) ||
      _.get(cfg?.matchdayTimelines, defaultCompetitionFallbackId);
    timelinesConfig = parseCompetitionConfig(timelinesConfig, competitionConfig);
    let customTimelineVideos = [];
    for (const matchdayMatch of teamsPlayMatchdayForPost) {
      // how to remove previous timelines which are already finished ... 
      // but this really doesn't make big difference as we only need the video at the moment

      // For finished games, create timeline and video ...
      const matchStatus = matchdayMatch?.matchStatus;
      const matchEvent = getEventData(matchdayMatch, competitionConfig);
      const currentWeek = matchEvent?.week;
      const contestants = matchdayMatch?.contestant;
      const homeTeam = contestants[0];
      const awayTeam = contestants[1];


      if (!homeTeam?.id || !awayTeam?.id) {
        return;
      }
      let matchName = homeTeam?.shortName + " vs " + awayTeam?.shortName;
      if (matchStatus === 'Played') {
        // need to get winning team
        const winner = matchdayMatch.winner;
        let winningSide = 'home';
        if (winner === 'away') {
          winningSide = 'away';
        }
        let timelineContentPost = [];
        const timelineLabel = timelinesConfig.timelines.postMatch.label + ' - ' + matchName;
        const timeline = await TimelineRecordsM.findOne(
          { name: timelineLabel },
          null,
          {
            lean: true,
          }
        ).catch(err => {
          console.error('err', err);
        });
        if (timeline) {
          // check video is created
          await createVideo(timeline, 'post');
        } else {
          // template recreation logic
          const event = getEventData(matchdayMatch, competitionConfig);
          await recreatePostMatchdayForOF(event, true, competitionConfig.competitionId, {})
          let postTemplates = timelinesConfig.timelines.postMatch.templates;
          postTemplates = updateSelectedSide(postTemplates, winningSide)
          const uniqueTemplates = removeDuplicateTemplates(postTemplates);
          await syncTimelineByStatus({
            targetTimelineToMutate: timelineContentPost,
            timelineTemplatesConfig: uniqueTemplates,
            currentWeek,
            matchdayMatch,
            competitionConfig,
            customTimelineVideos
          }).catch(err => {
            LOGGER.error(err, 'syncTimelineByStatus POST->catch %o');
          });
          timelineContentPost = filterUniqueRecords(timelineContentPost, []);
          if (timelineContentPost.length > 0) {
            const newTimeline = await TimelineRecordsM.findOneAndUpdate(
              { name: timelineLabel },
              {
                $set: {
                  format: '1920x1080',
                  name: timelineLabel,
                  templates: timelineContentPost,
                  options: { mode: 'auto' },
                  event: matchEvent
                }
              },
              {
                new: true,
                upsert: true,
                timestamps: true
              }
            ).catch(err => {
              console.error('err', err);
            });
            await createVideo(newTimeline, 'post');
          } else {
            console.log('no timeline creation, no content')
          }

        }
      } else {
        const timelineLabel = timelinesConfig.timelines.postMatch.label + ' - ' + matchName;
        // remove timelines
        await TimelineRecordsM.deleteOne({
          name: timelineLabel
        }).catch(err => {
          console.log('error deleting timeline ', err);
        })
      }
    }


    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, ...
    if (day === 1) {
      // ✅ Run your logic here
      console.log("Running Pre Videos logic on Monday...");
      let isFinished = false;
      if (teamsPlayMatchday.length > 0) {
        const allPlayed = teamsPlayMatchday.every(m => m?.matchStatus === 'Played');
        const allFixture = teamsPlayMatchday.every(m => m?.matchStatus === 'Fixture');

        // isFinished = allPlayed || allFixture;
        // isFinished = allPlayed;
        isFinished = allFixture;
      }
      for (const matchdayMatch of teamsPlayMatchday) {
        const matchEvent = getEventData(matchdayMatch, competitionConfig);
        const currentWeek = matchEvent?.week;
        const contestants = matchdayMatch?.contestant;
        const homeTeam = contestants[0];
        const awayTeam = contestants[1];


        if (!homeTeam?.id || !awayTeam?.id) {
          return;
        }
        let matchName = homeTeam?.shortName + " vs " + awayTeam?.shortName;

        if (isFinished) {
          let timelineContentPre = [];
          const timelineLabel = timelinesConfig.timelines.preMatch.label + ' - ' + matchName;
          const timeline = await TimelineRecordsM.findOne(
            { name: timelineLabel },
            null,
            {
              lean: true,
            }
          ).catch(err => {
            console.error('err', err);
          });
          if (timeline) {
            await createVideo(timeline, 'pre');
          } else {
            // template recreation logic
            const event = getEventData(matchdayMatch, competitionConfig);
            await recreatePreMatchdayForOF(event, competitionConfig.competitionId, {})

            let preTemplates = timelinesConfig.timelines.preMatch.templates;
            preTemplates = updateSelectedSide(preTemplates, 'home')
            const uniqueTemplates = removeDuplicateTemplates(preTemplates);
            await syncTimelineByStatus({
              targetTimelineToMutate: timelineContentPre,
              timelineTemplatesConfig: uniqueTemplates,
              currentWeek,
              matchdayMatch,
              competitionConfig,
              customTimelineVideos
            }).catch(err => {
              LOGGER.error(err, 'syncTimelineByStatus PRE->catch %o');
            });
            timelineContentPre = filterUniqueRecords(timelineContentPre, []);
            const newTimeline = await TimelineRecordsM.findOneAndUpdate(
              { name: timelineLabel },
              {
                $set: {
                  format: '1920x1080',
                  name: timelineLabel,
                  templates: timelineContentPre,
                  options: { mode: 'auto' },
                  event: matchEvent
                }
              },
              {
                new: true,
                upsert: true,
                timestamps: true
              }
            ).catch(err => {
              console.error('err', err);
            });
            await createVideo(newTimeline, 'pre');
          }

        }
      };
    } else {
      // Remove all pre timelines
      for (const matchdayMatch of teamsPlayMatchday) {
        const contestants = matchdayMatch?.contestant;
        const homeTeam = contestants[0];
        const awayTeam = contestants[1];
        if (!homeTeam?.id || !awayTeam?.id) {
          return;
        }
        const matchName = homeTeam?.shortName + " vs " + awayTeam?.shortName;
        const timelineLabel = timelinesConfig.timelines.preMatch.label + ' - ' + matchName;
        // remove timelines
        await TimelineRecordsM.deleteOne({
          name: timelineLabel
        }).catch(err => {
          console.log('error deleting timeline ', err);
        })
      }
    }

    return {
      success: true
    };
  } catch (error) {
    console.log('error: ', error)
    LOGGER.error(error, 'syncMatchdayTimeline error %o');
    return {
      success: false,
      error
    };
  }
};


// bild
/**
 * Synchronizes the matchday timeline.
 *
 * @param {Array} events - The list of events.
 * @param {Object} competitionConfig - The competition configuration.
 * @param {Object} closestMatchesData - FnFeeds.getClosestMatchFromSchedule data
 * @returns {Object} - The result of the synchronization.
 */
const syncMatchdayTimelinePureBild = async ({ competitionConfig, closestMatchesData }) => {
  const cfg = require('../../config');

  try {
    const FnFeeds = new FnFeedsClassHeimspiel({
      target: {
        league: competitionConfig.competitionId
      },
      client: 'bild'
    });

    // const nowUtc = new Date("2023-07-05T00:00:00.121Z");
    // const nowUtc = new Date('2023-12-19Z15:05:00Z');

    const nowUtc = new Date();
    LOGGER.debug('Server local UTC time NOW: %s', nowUtc.toISOString());

    const pureMatches =
      closestMatchesData ||
      (await FnFeeds.getClosestMatchFromSchedule(nowUtc.getTime(), [], competitionConfig).catch(err => {
        LOGGER.error(err, 'getClosestMatchFromSchedule error');
      }));
    if (!pureMatches) {
      LOGGER.warn('Closest Match cant be defined...');
      return;
    }

    let teamsPlayMatchday = pureMatches.teamsPlayMatchday || [];
    if (!teamsPlayMatchday?.length) {
      LOGGER.warn('teamsPlayMatchday.length is 0');
      return;
    }

    if (competitionConfig.competitionIdReal === 'cesdwwnxbc5fmajgroc0hqzy2') {
      teamsPlayMatchday = teamsPlayMatchday.filter(m => {
        return _.find(m?.contestant, { id: '3l2t2db0c5ow2f7s7bhr6mij4' });
      });
    }

    const firstMatchdayEvent = getEventDataForBild(teamsPlayMatchday[0], competitionConfig);

    //attach global when enabled
    const setupGeneral = await getItem({ id: 1 }, SetupM).catch(err => {
      LOGGER.error(err, 'setupGeneral failed - setupGeneral');
    });

    const timelineSettings = _.get(setupGeneral, 'data.timeline.settings', {});

    const defaultCompetitionFallbackId = getDefaultCompetitionFallback(competitionConfig);

    //premiere league as default
    let timelinesConfig =
      _.get(cfg?.matchdayTimelines, competitionConfig.competitionId) ||
      _.get(cfg?.matchdayTimelines, defaultCompetitionFallbackId);
    timelinesConfig = parseCompetitionConfig(timelinesConfig, competitionConfig);
    let timelineContentPre = [];
    let timelineContentLive = [];
    let timelineContentPost = [];
    let timelineContentPost2 = [];
    let customTimelineVideos = [];
    let lastGameOlderThan48h = false;
    let withinNext48h = false;
    let lastPlayedMatch = null;
    let minTimeDiff = Infinity;
    const TIME_ZONE = "Europe/Berlin";

    await async.eachSeries(teamsPlayMatchday, async match => {
      try {
        if (match?.match_date && match?.match_time) {
          // Combine API date and time strings (e.g. "24.11.2024 17:30")
          const matchDateTimeStr = `${match.match_date} ${match.match_time}`;

          // Parse it as Europe/Berlin local time
          const matchLocalDate = parse(matchDateTimeStr, "dd.MM.yyyy HH:mm", new Date());

          // Convert Berlin local time → UTC Date object
          const targetDate = zonedTimeToUtc(matchLocalDate, TIME_ZONE);

          // Calculate time difference (minutes) between match and now
          const diffMinutes = differenceInMinutes(targetDate, nowUtc);

          if (match?.matchStatus === "Played") {
            if (diffMinutes < 0 && Math.abs(diffMinutes) < minTimeDiff) {
              minTimeDiff = Math.abs(diffMinutes);
              lastPlayedMatch = match;
            }
          }

          if (match?.matchStatus === "Fixture" && diffMinutes >= 0 && diffMinutes <= 2880) {
            withinNext48h = true;
          }
        }
      } catch (error) {
        console.error('Error processing match:', error);
      }
    });

    lastGameOlderThan48h = minTimeDiff >= 2880;
    const germanTeamId = '3l2t2db0c5ow2f7s7bhr6mij4';
    const germanEventIds = [];

    await async.eachSeries(teamsPlayMatchday, async matchdayMatch => {
      const matchStatus = getMatchStatus(matchdayMatch);
      const matchEvent = getEventDataForBild(matchdayMatch, competitionConfig);
      const currentWeek = matchEvent?.matchday;
      const contestant = [matchdayMatch?.home, matchdayMatch?.away];

      if (_.find(contestant, { id: germanTeamId })) {
        germanEventIds.push(matchdayMatch?.id);
      }

      if (!contestant?.[0]?.id || !contestant?.[1]?.id) {
        return;
      }

      if (matchStatus === 'Fixture' || matchStatus === 'Postponed') {
        await syncTimelineByStatus({
          targetTimelineToMutate: timelineContentPre,
          timelineTemplatesConfig: timelinesConfig.timelines.preMatch.templates,
          currentWeek,
          matchdayMatch,
          competitionConfig,
          customTimelineVideos
        }).catch(err => {
          LOGGER.error(err, 'syncTimelineByStatus PRE->catch %o');
        });
      }

      if (matchStatus === 'Playing') {
        for (const template of timelinesConfig.timelines.liveMatch.templates) {
          const { searchCriteria, pickLimit } = buildSearchCriteria(
            template,
            matchdayMatch?.id,
            competitionConfig,
            null,
            currentWeek,
            currentLeg
          );

          const pickLimitNumber = [
            'staticmedia',
            'bild_static_facts',
            'bild_goal'
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
                indicator: getIndicator(matchEvent)
              };
              timelineContentLive.push(insertion);

              if (template?.fields?.type === 'pressbox') {
                customTimelineVideos.push(insertion);
              }
            }
          }
        }
      }

      if (matchStatus === 'Played') {
        await syncTimelineByStatus({
          targetTimelineToMutate: timelineContentPost,
          timelineTemplatesConfig: timelinesConfig.timelines.postMatch.templates,
          currentWeek,
          matchdayMatch,
          competitionConfig,
          customTimelineVideos
        }).catch(err => {
          LOGGER.error(err, 'syncTimelineByStatus POST->catch %o');
        });

        if (timelinesConfig.timelines?.postMatch2) {
          await syncTimelineByStatus({
            targetTimelineToMutate: timelineContentPost2,
            timelineTemplatesConfig: timelinesConfig.timelines.postMatch2?.templates || [],
            currentWeek,
            matchdayMatch,
            competitionConfig,
            customTimelineVideos
          }).catch(err => {
            LOGGER.error(err, 'syncTimelineByStatus POST->catch %o');
          });
        }
      }
    });

    const filterLastNextGame = arr => {
      let index = -1;
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].template === 'bild_nextgame') {
          index = i;
          break;
        }
      }

      // if 'NextGame' was not found return original array
      if (index === -1) {
        return arr;
      }

      return arr.filter((item, i) => item.template !== 'bild_nextgame' || i === index);
    };

    timelineContentPost = filterLastNextGame(timelineContentPost);
    // //make sure no duplicates
    const allowedDuplicates = ['staticmedia'];
    timelineContentPre = filterUniqueRecords(timelineContentPre, allowedDuplicates);
    timelineContentLive = filterUniqueRecords(timelineContentLive, allowedDuplicates);
    timelineContentPost = filterUniqueRecords(timelineContentPost, allowedDuplicates);
    timelineContentPost2 = filterUniqueTemplateIds(timelineContentPost2, allowedDuplicates);

    //Sort wc_goal templates by CreatedAt
    timelineContentLive = timelineContentLive.sort((a, b) => {
      if (a.template === 'bild_goal' && b.template === 'bild_goal') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0; // maintain the original order if not 'wc_goal'
    });

    timelineContentPost = timelineContentPost.sort((a, b) => {
      if (a.template === 'bild_goal' && b.template === 'bild_goal') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

    if (
      !timelinesConfig?.timelines?.preMatch?.label ||
      !timelinesConfig?.timelines?.liveMatch?.label ||
      !timelinesConfig?.timelines?.postMatch?.label
    ) {
      LOGGER.warn(
        {
          timelinesConfig,
          competitionConfig
        },
        'timelinesConfig issue, labels missing %o'
      );
    }

    await TimelineRecordsM.findOneAndUpdate(
      { name: timelinesConfig.timelines.preMatch.label },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: timelinesConfig.timelines.preMatch.label,
          templates: timelineContentPre,
          options: { mode: 'auto' },
          event: firstMatchdayEvent
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

    await TimelineRecordsM.findOneAndUpdate(
      { name: timelinesConfig.timelines.liveMatch.label },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: timelinesConfig.timelines.liveMatch.label,
          templates: timelineContentLive,
          options: { mode: 'auto' },
          event: firstMatchdayEvent
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

    await TimelineRecordsM.findOneAndUpdate(
      { name: timelinesConfig.timelines.postMatch.label },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: timelinesConfig.timelines.postMatch.label,
          templates: timelineContentPost,
          options: { mode: 'auto' },
          event: firstMatchdayEvent
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

    if (timelinesConfig.timelines?.postMatch2) {
      await TimelineRecordsM.findOneAndUpdate(
        { name: timelinesConfig.timelines.postMatch2.label },
        {
          $set: {
            data: {},
            format: '1920x1080',
            name: timelinesConfig.timelines.postMatch2.label,
            templates: timelineContentPost2,
            options: { mode: 'auto' },
            event: firstMatchdayEvent
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
    }

    let combinedTimeline = [];
    let globalTimeline = [];
    let globalTemplates = [];

    if (timelineSettings?.globalOnPostmatch) {
      globalTimeline = await TimelineRecordsM.findOne({
        name: timelineSettings?.globalTimelineName,
        'event.competitionId': competitionConfig.competitionId
      }).catch(err => {
        LOGGER.error(err, 'Global timeline not found');
      });

      if (globalTimeline) {
        globalTemplates = globalTimeline?.templates || [];
      }
    }

    //focus on live, when any live matches
    if (timelineContentLive?.length > 0) {
      combinedTimeline = [...timelineContentLive];
    } else if (lastGameOlderThan48h && !withinNext48h) {
      if (
        competitionConfig.competitionFormat === 'International cup' &&
        competitionConfig.competitionType === 'international'
      ) {
        combinedTimeline = [...globalTemplates, ...timelineContentPre, ...timelineContentLive, ...timelineContentPost];
      } else {
        combinedTimeline = [...globalTemplates, ...timelineContentPost2, ...timelineContentPre, ...timelineContentLive];
      }
    } else {
      combinedTimeline = [...globalTemplates, ...timelineContentPre, ...timelineContentLive, ...timelineContentPost];
    }

    combinedTimeline = await attachVideoAds(timelineSettings, combinedTimeline, firstMatchdayEvent).catch(err => {
      console.error('Error during attachVideoAds', err);
    });

    await TimelineRecordsM.findOneAndUpdate(
      { name: timelinesConfig.containerTimelines.preLivePost.label },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: timelinesConfig.containerTimelines.preLivePost.label,
          templates: combinedTimeline,
          options: { mode: 'auto' },
          event: firstMatchdayEvent
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

    await euro2024TimelineOnlyGerman({
      competitionConfig,
      timelinesConfig,
      combinedTimeline,
      firstMatchdayEvent,
      germanEventIds
    }).catch(err => {
      LOGGER.error(err, 'euro2024TimelineOnlyGerman error');
    });

    //CUSTOM TIMELINES
    const targetTimelines = await TimelineRecordsM.find({ 'options.includeEventVideos': true }).catch(err => {
      LOGGER.error(err, 'CUSTOM TIMELINES not found');
    });

    for (const customTimeline of targetTimelines) {
      const uniqueEventIds = _.uniqBy(customTimeline?.templates, 'eventId').map(e => e?.eventId);
      const filteredVideos = customTimelineVideos.filter(video => uniqueEventIds.includes(video.eventId));
      const updatedTemplates = distributeVideos(customTimeline.templates, filteredVideos);

      await TimelineRecordsM.findOneAndUpdate(
        { uuid: customTimeline.uuid },
        {
          $set: {
            templates: updatedTemplates
          }
        },
        {
          lean: true,
          new: true,
          upsert: true
        }
      ).catch(err => {
        console.error('err', err);
      });
    }

    return {
      success: true
    };
  } catch (error) {
    LOGGER.error(error, 'syncMatchdayTimeline error %o');
    return {
      success: false,
      error
    };
  }
};

const syncMatchdayTimelinePureAdler = async (matches, req) => {
  const cfg = require('../../config');

  try {
    let setupEvent = await getUserEvent(req);
    setupEvent = setupEvent.data;
    const eventsData = matches ? matches : [_.get(setupEvent, 'data.event')];
    const setupTimelineAutomation = (await getItem({ id: 3 }, SetupM))?.data;

    await async.eachSeries(setupTimelineAutomation, async timeline => {
      const isCustomArr = _.isArray(timeline);
      if (isCustomArr) {
        return;
      }

      const timelineContent = [];
      await async.eachSeries(eventsData, async eventData => {
        for (const template of timeline.templates) {
          const searchCriteria = {
            template_name: template.name,
            'event.eventId': eventData.eventId,
            'event.competitionId': eventData.competitionId
          };

          attachAdlerTemplateSearchCriteria(searchCriteria, template);

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
      });

      await TimelineRecordsM.findOneAndUpdate(
        { name: timeline.label },
        {
          $set: {
            data: {},
            format: '1920x1080',
            name: timeline.label,
            templates: timelineContent,
            options: { mode: 'auto' },
            event: eventsData?.[0]
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
    });

    await async.eachSeries(setupTimelineAutomation.custom, async timeline => {
      const timelineContent = [];
      await async.eachSeries(eventsData, async eventData => {
        for (const template of timeline.templates) {
          const searchCriteria = {
            template_name: template.name,
            'event.eventId': eventData.eventId,
            'event.competitionId': eventData.competitionId
          };

          attachAdlerTemplateSearchCriteria(searchCriteria, template);

          const toPickAarray =
            (await TemplatesRecordsM.find(searchCriteria, null, { lean: true }).catch(err => {
              LOGGER.error(err, 'syncMatchdayTimelines->toPick catch');
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
      });

      await TimelineRecordsM.findOneAndUpdate(
        { name: timeline.label },
        {
          $set: {
            data: {},
            format: '1920x1080',
            name: timeline.label,
            templates: timelineContent,
            options: { mode: 'auto' },
            event: eventsData?.[0]
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
    });

    return {
      success: true
    };
  } catch (error) {
    LOGGER.error(error, 'syncMatchdayTimeline custom error');
    return {
      success: false,
      error
    };
  }
};

/**
 * Dynamicly handle template
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const prepareMatchday = async (req, res) => {
  try {
    switch (cfg.client) {
      case CLIENTS.ADLER:
        {
          const output = await prepareMatchdayPureAdler().catch(err => {
            LOGGER.error('prepareMatchdayPure catch %o', err);
          });
          res.status(200).json(output);
        }
        break;
      default: {
        const output = await prepareMatchdayPure().catch(err => {
          LOGGER.error('prepareMatchdayPure catch %o', err);
        });
        res.status(200).json(output);
      }
    }
  } catch (error) {
    LOGGER.error('actions->handleTemplate %o', error);
    const message = new Error(`prepareMatchday error ${error.message}`);
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

const getClosestMatch = async (req, res) => {
  try {
    const cfg = require('../../config');
    const { competitionId, matchdayTimelines } = cfg;
    const nowUtc = new Date();

    if (cfg.client === CLIENTS.ADLER) {
      // const FnFeeds = new FnFeedsClass({
      //   target: {
      //     league: competitionId
      //   }
      // });

      const PRE = await TimelineRecordsM.findOne({ name: 'PRE-MATCH' }, null, { lean: true });
      const LIVE = await TimelineRecordsM.findOne({ name: 'LIVE-MATCH' }, null, { lean: true });
      const POST = await TimelineRecordsM.findOne({ name: 'POST-MATCH' }, null, { lean: true });

      const setupEvent = await getItem({ id: 2 }, SetupM);
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

      const closestMatch = (await FnFeeds.getClosestMatchFromSchedule(nowUtc.getTime()))?.matches?.[0];

      const FnFeedsClosest = new FnFeedsClass({
        target: {
          league: competitionId,
          eventId: closestMatch?.id
        }
      });

      await FnFeedsClosest.setLiveMatchStats(false).catch(console.error);

      const liveMatchDetails = _.get(FnFeedsClosest.apiData.liveMatchStats, 'liveData.matchDetails', null);

      res.status(200).json({
        closestMatch,
        matchdayTimelines,
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

/**
 * Fetches live match data and returns match information, match details, and extra match details.
 *
 * @async
 * @function getLiveMatch
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response JSON containing match information, match details, and extra match details.
 */
const getLiveMatch = async (req, res) => {
  try {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: competitionId,
        eventId: req.params?.mid
      }
    });

    await FnFeeds.setLiveMatchStats(false);

    res.status(200).json({
      matchInfo: FnFeeds.apiData?.liveMatchStats?.matchInfo,
      matchDetails: FnFeeds.apiData?.liveMatchStats?.liveData?.matchDetails,
      matchDetailsExtra: FnFeeds.apiData?.liveMatchStats?.liveData?.matchDetailsExtra
    });
  } catch (error) {
    console.error('ERR handleTemplate', error);
    LOGGER.error('actions->handleTemplate %o', error);
    const message = new Error(error);
    handleError(res, message);
  }
};

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

      await prepareMatchdayPure(event).catch(err => {
        LOGGER.error('prepareMatchdayPure catch %o', err);
      });

      for (const template of timelineTypeCfg.templates) {
        const searchCriteria = {
          template_name: template.template,
          'event.eventId': eventId,
          'event.competitionId': calendarId // tournamentId as competitionId
        };

        if (template.side) {
          searchCriteria['data.fields'] = {
            $elemMatch: {
              id: 'selectedSide',
              value: template.side
            }
          };
        }

        if (template.rankingType) {
          searchCriteria['data.fields'] = {
            $elemMatch: {
              id: 'rankingType',
              value: template.rankingType
            }
          };
        }

        const toPickAarray = await TemplatesRecordsM.find(searchCriteria, null, { lean: true }).catch(err => {
          LOGGER.error(err, 'prepareCompetitionTimelines->toPick catch %o');
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
    LOGGER.error('actions->handleTemplate %o', error);
    const message = new Error(error);
    handleError(res, message);
  }
};

module.exports = {
  prepareMatchday,
  prepareMatchdayPure,
  getClosestMatch,
  syncMatchdayTimelinePure,
  syncMatchdayTimelinePureAdler,
  syncMatchdayTimelinePureBild,
  syncMatchdayTimelinePureForOF,
  getLiveMatch,
  prepareCompetitionTimelines,
  createTemplate
};
