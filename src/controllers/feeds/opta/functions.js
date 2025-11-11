const _ = require('lodash');
const axios = require('axios');
const config = require('../../../config');
const BaseClass = require('./index');
const { promise } = require('bcrypt/promises');
const async = require('async');
const {
  format,
  parseISO,
  differenceInMinutes,
  parse,
  isSameDay,
  isBefore,
  addHours,
  closestTo,
  subDays,
  isWithinInterval,
  addDays,
  startOfDay,
  endOfDay,
  differenceInHours,
  addMinutes,
  min,
  max, subMinutes
} = require('date-fns');
const { upsertItem } = require('../../../middleware/db');
const UpdaterM = require('../../../models/updater');
const TimelineRecordsM = require('../../../models/timeline_records');
const AlarmEventsM = require('../../../models/alarm_events');
const TemplateRecordsM = require('@/src/models/template_records');
const { liveMatch } = require('@/src/config/opta_opta_dynamic/dynamic_timelines');
const { getClosestMatchFromNow, eventType, getApiCallRelevantMatchData, isOlderThanDelay, getNextClosestMatchFromNow } = require('@/src/controllers/feeds/opta/helpers');
const { getIo } = require('@/src/socket');
const {
  prepareMatchIsoString,
  getDefaultCompetitionFallback,
  parseCompetitionConfig
} = require('@/src/controllers/actions/helpers');
const cfg = require('@/src/config');

const competitionsActivated = require('@/src/data/competitions_activated.json');
const { CALL_SAVE_TYPES } = require('@/src/constants/common');
const { getGoalData } = require('@/src/templates/worldcup/wc_goal/functions');
const { CLIENTS } = require('@/src/constants/config');

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 1 day in milliseconds
const MINUTES_5_IN_MS = 15 * 60 * 1000;
const HOURS_12_IN_MS = 12 * 60 * 60 * 1000;
const HOURS_1_IN_MS = 1 * 60 * 60 * 1000;

function isWithinMatchTimeWindow(match, now) {
  if (!match) return false; // No match provided

  // Use the helper function to prepare the match's ISO string
  const matchIsoString = prepareMatchIsoString({
    date: match?.date,
    time: match?.time
  });

  const matchDateTimeUtc = matchIsoString ? parseISO(matchIsoString) : null;

  if (matchDateTimeUtc) {
    // Calculate the time range: 5 minutes before to 3 hours after the match
    const startTime = subMinutes(matchDateTimeUtc, 5);
    const endTime = addHours(matchDateTimeUtc, 3);

    // Check if 'now' is within the time range
    return isWithinInterval(now, { start: startTime, end: endTime });
  } else if (match.date) {
    // If only the date is defined, check if 'now' is the same day as the match date
    const matchDay = parseISO(match.date);
    return isSameDay(matchDay, now);
  }

  // If neither date nor time is defined, return false
  return false;
}

function getOldestStartDateAndNewestEndDate(standing) {
  // Strip the 'Z' and parse the dates
  const startDates = standing.map(item => parseISO(item.startDate.replace('Z', '')));
  const endDates = standing.map(item => parseISO(item.endDate.replace('Z', '')));
  // Get the min startDate and max endDate
  const oldestStartDate = min(startDates);
  const newestEndDate = max(endDates);

  return {
    oldestStartDate,
    newestEndDate
  };
}

const findRelevantMatch = matches => {
  const now = new Date();
  let upcomingMatch = null;
  let closestPastMatch = null;
  let closestPastMatchTimeDiff = Infinity;

  matches.forEach(match => {
    if (match.localDate && match.localTime) {
      const fullDateTime = `${match.localDate}T${match.localTime}`;
      const matchDateTime = parseISO(fullDateTime);

      if (isBefore(matchDateTime, now)) {
        const timeDiff = now - matchDateTime;
        if (timeDiff < closestPastMatchTimeDiff) {
          closestPastMatch = match;
          closestPastMatchTimeDiff = timeDiff;
        }
      } else if (
        !upcomingMatch ||
        isBefore(parseISO(`${upcomingMatch.localDate}T${upcomingMatch.localTime}`), matchDateTime)
      ) {
        upcomingMatch = match;
      }
    }
  });

  if (!upcomingMatch) {
    return closestPastMatch; // No upcoming matches, return the closest past match
  }

  const upcomingMatchDateTime = parseISO(`${upcomingMatch.localDate}T${upcomingMatch.localTime}`);
  const hoursToUpcomingMatch = (upcomingMatchDateTime - now) / (1000 * 60 * 60);

  if (hoursToUpcomingMatch <= 6) {
    return upcomingMatch;
  } else {
    return closestPastMatch;
  }
};

function moveArrayItemToNewIndex(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}

class Feed extends BaseClass {
  constructor({ target }) {
    super();

    this.target = {
      season: config.season,
      league: _.get(target, 'league', null),
      teamId: _.get(target, 'teamId', null),
      eventId: _.get(target, 'eventId', null)
    };

    this.apiData = {
      standing: null,
      // teamSchedule: null,
      // teamScheduleAway: null,
      tournamentSchedule: null,
      season: {
        playerStats: {
          home: {},
          away: {}
        },
        teamStats: {
          home: {},
          away: {}
        }
      },
      liveMatchStats: null,
      liveMatchEvents: null
    };
    this.matchInfo = {};
    this.matchDetails = {};
    this.teams = [];
    this.players = [];
  }

  get eventDataOmit() {
    return _.omitBy(this.eventData, v => _.isUndefined(v) || _.isNil(v) || v === '' || v.length === 0);
  }

  async setActiveCompetitions() {
    const indicator = config.feeds.opta.data.tournament.active;

    const response = await this.apiCall(
      {
        url: indicator.url
      },
      { indicator }
    );

    return response;
  }

  // [gameInfo, gameRoster, gameEvents, playerStats, teamStats, allGoalies]
  async setLiveMatchStats(detailed = true) {
    const indicator = config.feeds.opta.data.fixtures.matchstats;

    const allGoaliesCall = indicator.url
      .replace('[[EVENTID]]', this.target.eventId)
      .replace('[[DETAILED]]', detailed ? 'yes' : 'no');

    const liveMatchStats = await this.apiCall(
      {
        url: allGoaliesCall
      },
      { indicator }
    );

    return liveMatchStats;
  }

  async setMatchPlayerRatings() {
    const indicator = config.feeds.opta.data.fixtures.matchplayerratings;
    const apiCall = indicator.url.replace('[[EVENTID]]', this.target.eventId);

    const apiData = await this.apiCall(
      {
        url: apiCall
      },
      { indicator }
    );

    this.apiData.matchPlayerRatings = apiData;
    this.matchInfo = apiData?.matchInfo;
  }

  async setTournamentTopPerformers() {
    const indicator = config.feeds.opta.data.tournament.topperformers;
    const apiCall = indicator.url.replace('[[LEAGUE]]', this.target.league);

    const apiData = await this.apiCall(
      {
        url: apiCall
      },
      { indicator }
    );

    return apiData;
  }

  async setTournamentRankings() {
    const indicator = config.feeds.opta.data.tournament.rankings;

    const apiCall = indicator.url.replace('[[LEAGUE]]', this.target.league);

    const apiData = await this.apiCall(
      {
        url: apiCall
      },
      { indicator }
    );

    return apiData;
  }

  compareArraysByProperty(array1, array2, propertyName) {
    const map = array2.reduce((acc, item) => {
      acc[item[propertyName]] = true;
      return acc;
    }, {});

    return array1.filter(item => !map[item[propertyName]]);
  }

  async getDeletedEvent(deletedEvent, allEvents) {
    const relatedEventId = deletedEvent.related_event_id || deletedEvent.corresponding_event_id;
    if (relatedEventId) {
      return allEvents.find(e => e.event_id === relatedEventId && e.type_id === 16); // 16 = Goal
    }
    const toleranceSeconds = 10; // within 10 seconds
    const toleranceMinutes = 1;  // within 1 minute
    const toleranceXY = 0.05;    // 5% coordinate difference

    return allEvents.find(e =>
      e.type_id === 16 &&
      e.player_id === deletedEvent.player_id &&
      e.team_id === deletedEvent.team_id &&
      Math.abs(e.minute - deletedEvent.minute) <= toleranceMinutes &&
      Math.abs((e.second || 0) - (deletedEvent.second || 0)) <= toleranceSeconds &&
      (e.x !== undefined && deletedEvent.x !== undefined
        ? Math.abs(e.x - deletedEvent.x) <= toleranceXY
        : true) &&
      (e.y !== undefined && deletedEvent.y !== undefined
        ? Math.abs(e.y - deletedEvent.y) <= toleranceXY
        : true)
    ) || null;
  }

  async handleDeletedEvent(data, matchStatus) {
    if (!data) {
      return;
    }
    const deletedAfterReviewEventId = 84;

    const events = data.liveData?.event || [];
    const deletedEvents = events.filter(e => e.typeId === deletedAfterReviewEventId);
    const matchInfo = data.matchInfo;

    for (const event of deletedEvents) {
      const { eventId, contestantId, playerId, playerName } = event;
      // Remove deleted template from template_records
      await TemplateRecordsM.deleteOne({
        "data.dynamic.goalData.eventId": eventId,
        "data.dynamic.goalData.playerName": playerName,
        "data.dynamic.goalData.typeId": 16,
      }).catch(err => {
        LOGGER.error(err, 'Error deleting template document');
      });

      // Remove deleted event from alarm events
      await AlarmEventsM.updateOne(
        {
          events: {
            $elemMatch: {
              eventId,
              contestantId,
              playerId,
              playerName
            }
          }
        },
        {
          $pull: {
            events: {
              eventId,
              contestantId,
              playerId,
              playerName
            }
          }
        }
      ).catch(err => {
        LOGGER.error(err, 'Error removing deleted event');
      });
    }
  }

  isOwnGoal(event) {
    return event.qualifiers?.some(q => q.qualifier_id === 28); // 28 = Own Goal (standard Opta)
  }

  async handleAlarmTemplate(data, matchStatus) {
    const goalEventTypeId = 16;
    if (!data) {
      return;
    }

    // Thinking to do it only on opta and bild
    // Don't need it for other clients

    if (![CLIENTS.PERFORM_STATS, CLIENTS.AWS, CLIENTS.BILD].includes(MAINCONFIG.client)) {
      return;
    }

    const matchInfo = data.matchInfo;

    const competitionId = matchInfo?.competition?.id;
    const matchDetails = data.liveData?.matchDetails;
    const events = data.liveData?.event || [];
    const goalEvents = events.filter(e => e.typeId === goalEventTypeId);

    const io = getIo();
    const goal = matchStatus?.liveData?.goal; // or the last item from goalEvents

    const lineUp = matchStatus?.liveData?.lineUp;

    // let timeline_uuid = '19aaa923-6f15-4c5d-af0d-4f59b1e25da3';
    let timeline_uuid = '1d42e6ae-4b1c-4ac4-87c3-13a1002a0ad6';

    const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionIdReal: competitionId });
    const defaultCompetitionFallbackId = getDefaultCompetitionFallback(competitionConfig);

    let timelinesConfig =
      _.get(cfg?.matchdayTimelines, competitionConfig?.competitionId) ||
      _.get(cfg?.matchdayTimelines, defaultCompetitionFallbackId);
    timelinesConfig = parseCompetitionConfig(timelinesConfig, competitionConfig);

    if (!timelinesConfig) {
      return;
    }

    const timeline = await TimelineRecordsM.findOne(
      {
        name: timelinesConfig.containerTimelines.preLivePost.label,
        'event.competitionId': competitionConfig.competitionId
      },
      null,
      {
        lean: true
      }
    ).catch(err => {
      LOGGER.error(err, 'handleAlarmTemplate error');
    });
    if (timeline) {
      timeline_uuid = timeline?.uuid;
    }
    console.log('timeline uuid: ', timeline_uuid)
    const matchId = matchInfo.id;

    const matchExist = await AlarmEventsM.findOne(
      {
        matchId: matchId
      },
      null,
      { lean: true }
    );

    const allEvents = [...goalEvents];

    let homeScore = 0;
    let awayScore = 0;
    const contestants = matchInfo.contestant;
    const homeTeam = contestants.find(c => c.position === "home");
    const awayTeam = contestants.find(c => c.position === "away");

    const homeTeamId = homeTeam.id;
    const awayTeamId = awayTeam.id;


    for (const event of goalEvents) {
      if (this.isOwnGoal(event)) {
        if (event.contestantId === homeTeamId) {
          awayScore++;
        } else if (event.contestantId === awayTeamId) {
          homeScore++;
        }
      } else {
        if (event.contestantId === homeTeamId) {
          homeScore++;
        } else if (event.contestantId === awayTeamId) {
          awayScore++;
        }
      }

    }

    const latestScore = {
      home: homeScore,
      away: awayScore
    }
    if (matchExist) {
      const { events: prevEvents } = matchExist;

      // Prevent duplicate events by comparing 'id'
      const newEvents = this.compareArraysByProperty(allEvents, prevEvents, 'id');
      if (newEvents && newEvents.length > 0) {
        const newEvent = {
          ...newEvents[0],
          sent: true,
          target: {
            type: 'timeline',
            uuid: [timeline_uuid]
          }
        };
        const goalCoordData = getGoalData(events, lineUp, newEvent);
        const emitData = {
          matchId,
          event_type: eventType[newEvent.typeId],
          ...newEvent,
          matchInfo,
          matchDetails,
          goalData: {
            goal,
            lineUp,
            goalCoordData
          },
          latestScore
        };

        io.emit('notify_alarm', emitData);

        await AlarmEventsM.findOneAndUpdate(
          {
            matchId: matchId
          },
          {
            $set: {
              ...emitData,
              events: [...prevEvents, newEvent]
            }
          },
          {
            lean: true,
            new: false,
            upsert: true
          }
        );
      }
    } else {
      // Save only the first event
      if (allEvents.length > 0) {
        const firstEvent = {
          ...allEvents[0],
          sent: true,
          target: {
            type: 'timeline',
            uuid: [timeline_uuid]
          }
        };
        const goalCoordData = getGoalData(events, lineUp, firstEvent);

        const emitData = {
          matchId,
          event_type: eventType[firstEvent.typeId],
          ...firstEvent,
          matchInfo,
          matchDetails,
          goalData: {
            goal,
            lineUp,
            goalCoordData
          },
          latestScore
        };

        const alarmEvent = {
          ...emitData,
          events: [firstEvent]
        };

        io.emit('notify_alarm', emitData);
        await AlarmEventsM.create(alarmEvent);
      }
    }
  }

  async handleDuplicatedEvents(data, matchStatus) {
    // Remove goal templates where dynamic.goalData is null
    await TemplateRecordsM.deleteMany({
      template_name: "wc_goal",
      "data.dynamic.goalData": null
    }).catch(err => {
      LOGGER.error(err, "Error deleting null template records");
    });


    const matchInfo = data.matchInfo;

    const competitionId = matchInfo?.competition?.id;
    const goalTemplates = await TemplateRecordsM.find({
      template_name: "wc_goal",
      "data.dynamic.matchInfo.competition.id": competitionId,
      "data.dynamic.matchInfo.id": matchInfo?.id,
    }).sort({ _id: -1 });
    const seenScores = new Set();
    const duplicatesToDelete = [];

    for (const template of goalTemplates) {
      const goalData = template?.data?.dynamic?.goalData;
      if (!Array.isArray(goalData) || goalData.length === 0) continue;

      const scoreObj = goalData[goalData.length - 1];
      const key = `${scoreObj.eventId}-${scoreObj.playerName}-${scoreObj.teamId}`;

      if (seenScores.has(key)) {
        duplicatesToDelete.push(template._id);
      } else {
        seenScores.add(key);
      }
    }

    // Delete all duplicates
    if (duplicatesToDelete.length > 0) {
      await TemplateRecordsM.deleteMany({ _id: { $in: duplicatesToDelete } });
      console.log(`Deleted ${duplicatesToDelete.length} duplicate templates.`);
    } else {
      console.log("No duplicates found.");
    }
  }

  async setLiveMatchEvents(callOptions, checkDup = false) {
    const indicator = config.feeds.opta.data.fixtures.matchevent;
    const dataCall = indicator.url.replace('[[EVENTID]]', this.target.eventId);
    const dataRes = await this.apiCall(
      {
        url: dataCall
      },
      { indicator }
    );
    this.matchInfo = dataRes?.matchInfo;
    const matchStatus = await this.setLiveMatchStats();
    if (checkDup) {
      // handle duplicated goal events
      await this.handleDuplicatedEvents(dataRes, matchStatus);

      // check for deleted events
      await this.handleDeletedEvent(dataRes, matchStatus);
    }

    if (callOptions?._saveType !== CALL_SAVE_TYPES.RESAVE_ALL_TEMPLATES) {
      await this.handleAlarmTemplate(dataRes, matchStatus);
    }
    return dataRes;
  }

  async setMatch(eventId = this.target.eventId) {
    const indicator = config.feeds.opta.data.fixtures.match;
    const dataCall = indicator.url.replace('[[EVENTID]]', eventId);

    const dataRes = await this.apiCall(
      {
        url: dataCall
      },
      { indicator }
    );

    return dataRes;
  }

  async setSeasonTeamStats(teamId, liveMatch) {
    const indicator = config.feeds.opta.data.tournament.seasonstats;
    const dataCall = indicator.url
      .replace('[[LEAGUE]]', this.target.league)
      .replace('[[TEAMID]]', teamId ?? this.target.teamId);

    const dataRes = await this.apiCall(
      {
        url: dataCall
      },
      { indicator, liveMatch }
    );
    return dataRes;
  }

  setTeamSchedule(bothTeams = false, lang = 'en-gb') {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const indicator = config.feeds.opta.data.tournament.schedule;

      const apiCall = indicator.url.replace('[[LEAGUE]]', league).replace('[[LANG]]', lang);

      const callResults = await this.apiCall(
        {
          url: apiCall
        },
        { indicator }
      ).catch(err => {
        LOGGER.error(err);
      });

      if (callResults && callResults.matchDate) {
        _.set(this.apiData, `tournamentSchedule`, callResults.matchDate);
        _.set(this.apiData, `tournamentCalendar`, callResults.tournamentCalendar);
        _.set(this.apiData, `competition`, callResults.competition);
      }

      resolve();
    });
  }

  getMatchesById(matchesToQuery = [], lang = 'en-gb') {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const indicator = config.feeds.opta.data.fixtures.matches_by_id;

      const apiCall = indicator.url.replace('[[LEAGUE]]', league).replace('[[IDS]]', matchesToQuery.join(','));

      const callResults = await this.apiCall(
        {
          url: apiCall
        },
        { indicator }
      ).catch(err => {
        LOGGER.error(err);
      });

      resolve(callResults?.match || []);
    });
  }

  setMatchdaysInRange(dateFrom, dateTo) {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const indicator = config.feeds.opta.data.fixtures.matches;

      const apiCall = indicator.url
        .replace('[[LEAGUE]]', league)
        .replace('[[DATERANGE_FROM]]', dateFrom)
        .replace('[[DATERANGE_TO]]', dateTo);

      const callResults = await this.apiCall(
        {
          url: apiCall
        },
        { indicator }
      ).catch(err => {
        LOGGER.error(err);
      });

      _.set(this.apiData, `matchdays`, callResults?.match || []);
      // _.set(this.apiData, `matchdays.stage`, callResults?.stage);

      resolve();
    });
  }

  setTeamLastGames(teamId1) {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const indicator = config.feeds.opta.data.fixtures.matches_last_league;

      const apiCall = indicator.url
        .replace('[[LEAGUE]]', league)
        .replace('[[TEAM_ID1]]', teamId1)
        .replace('[[TEAM_ID2]]', teamId1);

      const callResults = await this.apiCall(
        {
          url: apiCall
        },
        { indicator }
      ).catch(err => {
        LOGGER.error(err);
      });

      _.set(this.apiData, `matchdays_last`, callResults?.match || []);

      resolve(callResults?.match || []);
    });
  }

  setTeamNextGames(teamId1) {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const indicator = config.feeds.opta.data.fixtures.matches_next;

      const apiCall = indicator.url
        .replace('[[LEAGUE]]', league)
        .replace('[[TEAM_ID1]]', teamId1)
        .replace('[[TEAM_ID2]]', teamId1);

      const callResults = await this.apiCall(
        {
          url: apiCall
        },
        { indicator }
      ).catch(err => {
        LOGGER.error(err);
      });

      // _.set(this.apiData, `matchdays_next`, callResults?.match || []);

      resolve(callResults?.match || []);
    });
  }

  getNextLeagueMatch() {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const indicator = config.feeds.opta.data.fixtures.match_league_next;

      const apiCall = indicator.url.replace('[[LEAGUE]]', league);

      const callResults = await this.apiCall(
        {
          url: apiCall
        },
        { indicator }
      ).catch(err => {
        LOGGER.error(err);
      });

      resolve(callResults?.match || []);
    });
  }

  setTeamStatsSeason() {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const gameInfo = await this.getGameInfo();

      const indicator = config.feeds.del.data.season.teamStats;

      const gameInfoCallHome = indicator.url
        .replace('[[SEASON]]', this.target.season)
        .replace('[[LEAGUE]]', this.target.league)
        .replace('[[TEAMID]]', _.get(gameInfo, 'home.id'));

      const gameInfoCallResultHome = await this.apiCall(
        {
          url: gameInfoCallHome
        },
        { indicator }
      );

      const gameInfoCallAway = indicator.url
        .replace('[[SEASON]]', this.target.season)
        .replace('[[LEAGUE]]', this.target.league)
        .replace('[[TEAMID]]', _.get(gameInfo, 'away.id'));

      const gameInfoCallResultAway = await this.apiCall(
        {
          url: gameInfoCallAway
        },
        { indicator }
      );

      _.set(this.apiData, `season.teamStats.home`, gameInfoCallResultHome);
      _.set(this.apiData, `season.teamStats.away`, gameInfoCallResultAway);

      resolve();
    });
  }

  setPlayerStatsSeason() {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId, eventId } = this.target;

      const indicator = config.feeds.del.data.season.playerStats;

      const gameInfo = this.getMatchById(eventId, true);
      const gameInfoCallHome = indicator.url
        .replace('[[SEASON]]', season)
        .replace('[[LEAGUE]]', league)
        .replace('[[TEAMID]]', _.get(gameInfo, 'home.id'));

      const gameInfoCallResultHome = await this.apiCall(
        {
          url: gameInfoCallHome
        },
        { indicator }
      );

      const gameInfoCallAway = indicator.url
        .replace('[[SEASON]]', season)
        .replace('[[LEAGUE]]', league)
        .replace('[[TEAMID]]', _.get(gameInfo, 'away.id'));

      const gameInfoCallResultAway = await this.apiCall(
        {
          url: gameInfoCallAway
        },
        { indicator }
      );

      _.set(this.apiData, `season.playerStats.home`, gameInfoCallResultHome);
      _.set(this.apiData, `season.playerStats.away`, gameInfoCallResultAway);

      resolve();
    });
  }

  async getTeamStatsSeason() {
    await this.setTeamStatsSeason().catch(err => {
      LOGGER.error(err, 'setTeamStatsSeason error');
    });

    return _.get(this.apiData.season, 'teamStats');
  }

  async getPlayerStatsSeason() {
    await this.setPlayerStatsSeason().catch(err => {
      LOGGER.error(err, 'setPlayerStatsSeason error');
    });

    return _.get(this.apiData.season, 'playerStats');
  }

  setMatchday() {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId, eventId } = this.target;

      await this.setTeamSchedule();

      const foundMatchday = _.find(this.apiData.teamSchedule, item => {
        return String(item.id) === String(eventId);
      });

      _.set(this.eventData, `matchday`, foundMatchday);

      resolve();
    });
  }

  setContestants() {
    return new Promise(async (resolve, reject) => {
      const that = this;

      const indicator = config.feeds.opta.data.tournament.contestants;

      const apiCall = indicator.url.replace('[[LEAGUE]]', this.target.league);

      const callResults = await this.apiCall(
        {
          url: apiCall
        },
        { indicator }
      ).catch(err => {
        LOGGER.error(err, 'setContestants error');
      });

      _.set(this.apiData, `contestants`, callResults?.contestant);
      this.setTeams();

      resolve();
    });
  }

  setTeams() {
    const teams = _.map(_.get(this.apiData, 'contestants', []), (team, index) => {
      return {
        shortcut: team.shortName,
        name: team.name,
        teamId: team.id,
        code: team.code
      };
    });
    this.teams = teams;
  }

  setGameInfo() {
    const { gameInfo } = this.apiData.liveGame;

    if (!gameInfo) {
      return;
    }

    this.eventData.side = this.getTeamSide();
    this.eventData.actualTimeName = _.get(gameInfo, 'actualTimeName');
    this.eventData.actualTimeAlias = _.get(gameInfo, 'actualTimeAlias');
    this.eventData.stadium = _.get(gameInfo, 'stadium');
    this.eventData.numberOfViewers = _.get(gameInfo, 'numberOfViewers');
    this.eventData.teamBilance = _.get(gameInfo, 'teamBilance');
    this.eventData.results = _.get(gameInfo, 'results');
    this.eventData.home = _.get(gameInfo, 'teamInfo.home');
    this.eventData.away = _.get(gameInfo, 'teamInfo.visitor');
    this.eventData.referees = _.get(gameInfo, 'referees');

    return this.eventDataOmit;
  }

  async getMatchPlayerRatings() {
    await this.setMatchPlayerRatings().catch(err => {
      console.error(err);
    });

    return this.apiData?.matchPlayerRatings;
  }

  async getMVP() {
    // const ratings = await this.getMatchPlayerRatings().catch(err => {
    //   console.error(err);
    // });

    const liveMatchStats = await this.setLiveMatchStats().catch(err => {
      console.error(err);
    });

    const scores = _.get(liveMatchStats, 'liveData.matchDetails.scores.total', {
      home: 0,
      away: 0
    });

    const homeScore = parseInt(scores.home);
    const awayScore = parseInt(scores.away);

    let winningTimeIndex = homeScore > awayScore ? 0 : 1;

    // const selectedRankingHome = _.get(ratings, `playerRatings.contestant.0.player`, []);
    // const selectedRankingAway = _.get(ratings, `playerRatings.contestant.1.player`, []);

    let sorted = [];

    // if (homeScore === awayScore) {
    //   sorted = _.orderBy(
    //     [...selectedRankingHome, ...selectedRankingAway],
    //     function (obj) {
    //       return parseFloat(obj?.matchDataScore?.indexScore?.value) || 0;
    //     },
    //     ['desc']
    //   );
    // } else {
    //
    // }

    const homePlayers = _.get(liveMatchStats, 'liveData.lineUp.0.player', []);
    const awayPlayers = _.get(liveMatchStats, 'liveData.lineUp.1.player', []);

    const targetTeam = winningTimeIndex === 0 ? homePlayers : awayPlayers;
    sorted = _.orderBy(
      targetTeam,
      function (obj) {
        const playerStats = obj?.stat || [];
        const goals = _.find(playerStats, { type: 'goals' })?.value || 0;
        const assists = _.find(playerStats, { type: 'goalAssist' })?.value || 0;
        const touches = _.find(playerStats, { type: 'touches' })?.value || 0;
        return [parseFloat(goals) || 0, parseFloat(assists) || 0, parseFloat(touches) || 0];
      },
      ['desc', 'desc', 'desc']
    );

    const mvp = sorted?.[0];

    // if (homeScore === awayScore) {
    //   const lineup = _.get(ratings, `lineUp`, []);
    //   const isHome = _.findIndex(lineup?.[0]?.player, { playerId: mvp?.playerId });
    //
    //   if (isHome > -1) {
    //     winningTimeIndex = 0;
    //   } else {
    //     winningTimeIndex = 1;
    //   }
    // }

    if (mvp?.id) {
      mvp.playerId = mvp.id;
    }

    return mvp?.playerId
      ? {
        mvp,
        winningTimeIndex
      }
      : null;
  }

  async getTournamentTopPerformers() {
    const data = await this.setTournamentTopPerformers().catch(err => {
      console.error(err);
    });

    return data;
  }

  async getTournamentRankings() {
    const data = await this.setTournamentRankings().catch(err => {
      console.error(err);
    });

    return data;
  }

  async getTournamentTeamRanking(rankStatTypes, additionalStats = [], calcStats = [], sumTypes = false, topN = 5) {
    const data = await this.setTournamentRankings().catch(err => {
      console.error(err);
    });

    const teams = data?.team;

    if (!teams || !teams?.[0]?.name) {
      return [];
    }
    // Modified helper function to find a stat in a team's stats array, returns 0 if not found
    const findStatValue = (team, statType) => {
      const stat = team?.stat?.find(s => s.type === statType);
      // Use 0 instead of Infinity when stat is not available
      return stat ? parseInt(stat?.value, 10) : 0;
    };

    const isAscendingSort = statType => statType.toLowerCase().includes('ranking');

    // Sort teams by the specified ranking stats
    const sortedTeams = teams.sort((a, b) => {
      if (sumTypes) {
        // Sum the specified stats for each player and sort (default descending)
        const sumA = rankStatTypes.reduce((acc, type) => acc + findStatValue(a, type), 0);
        const sumB = rankStatTypes.reduce((acc, type) => acc + findStatValue(b, type), 0);
        if (sumA !== sumB) {
          return sumB - sumA; // Descending sort for sums
        } else {
          // Tie-breaker based on order of rankStatTypes when sums are equal
          for (let i = 0; i < rankStatTypes.length; i++) {
            const statType = rankStatTypes[i];
            const valA = findStatValue(a, statType);
            const valB = findStatValue(b, statType);
            if (valA !== valB) {
              return valB - valA; // Descending for individual stats
            }
          }
        }
      } else {
        // Non-summing scenario, sort based on each stat in rankStatTypes in sequence
        for (let i = 0; i < rankStatTypes.length; i++) {
          const statType = rankStatTypes[i];

          const valA = findStatValue(a, statType);
          const valB = findStatValue(b, statType);
          if (valA !== valB) {
            // Apply ascending sort if statType includes "ranking", otherwise descending
            return isAscendingSort(statType) ? valA - valB : valB - valA;
          }
        }
      }
      return 0; // Maintain original order if all conditions are equal
    });

    // Get the top N teams and add ranking
    const topTeams = sortedTeams.slice(0, topN).map((team, index) => {
      const teamStats = {
        rank: index + 1, // Ranking starts at 1
        name: team.name,
        id: team.id,
        additionalStats: additionalStats.map(statType => ({
          type: statType,
          value: findStatValue(team, statType)
        })),
        calcStats: calcStats.map(statType => ({
          type: statType,
          value: findStatValue(team, statType)
        }))
      };

      return teamStats;
    });

    return topTeams;
  }

  async getTournamentSingleTeamRanking(teamId) {
    const data = await this.setTournamentRankings().catch(err => {
      console.error(err);
    });

    const teams = data?.team;

    if (!teams) {
      return [];
    }

    const team = _.find(teams, { id: teamId });

    return team?.stat || [];
  }

  async getTournamentSinglePlayerRanking(teamId, playerId) {
    const data = await this.setTournamentRankings().catch(err => {
      console.error(err);
    });

    const teams = data?.team;

    if (!teams) {
      return [];
    }

    const team = _.find(teams, { id: teamId });
    const player = _.find(team?.player, { id: playerId }) || {};

    return player?.stat || [];
  }

  async getTournamentPlayerRanking(rankStatTypes, additionalStats = [], calcStats = [], sumTypes = false, topN = 5) {
    const data = await this.setTournamentRankings().catch(err => {
      console.error(err);
    });

    const teams = data?.team;

    if (!teams || !teams?.[0]?.name) {
      return [];
    }

    const findStatValue = (player, statType) => {
      const stat = player.stat.find(s => s.type === statType);
      return stat ? parseInt(stat.value, 10) : 0;
    };

    const players = teams.flatMap(team =>
      team.player.map(player => {
        return {
          ...player,
          teamName: team.name,
          teamId: team.id
        };
      })
    );

    // Determine if sorting should be ascending based on "ranking" inclusion for each stat type
    const isAscendingSort = statType => statType.toLowerCase().includes('ranking');

    const sortedPlayers = players.sort((a, b) => {
      if (sumTypes) {
        // Sum the specified stats for each player and sort (default descending)
        const sumA = rankStatTypes.reduce((acc, type) => acc + findStatValue(a, type), 0);
        const sumB = rankStatTypes.reduce((acc, type) => acc + findStatValue(b, type), 0);
        if (sumA !== sumB) {
          return sumB - sumA; // Descending sort for sums
        } else {
          // Tie-breaker based on order of rankStatTypes when sums are equal
          for (let i = 0; i < rankStatTypes.length; i++) {
            const statType = rankStatTypes[i];
            const valA = findStatValue(a, statType);
            const valB = findStatValue(b, statType);
            if (valA !== valB) {
              return valB - valA; // Descending for individual stats
            }
          }
        }
      } else {
        // Non-summing scenario, sort based on each stat in rankStatTypes in sequence
        for (let i = 0; i < rankStatTypes.length; i++) {
          const statType = rankStatTypes[i];

          const valA = findStatValue(a, statType);
          const valB = findStatValue(b, statType);
          if (valA !== valB) {
            // Apply ascending sort if statType includes "ranking", otherwise descending
            return isAscendingSort(statType) ? valA - valB : valB - valA;
          }
        }
      }
      return 0; // Maintain original order if all conditions are equal
    });

    const topPlayers = sortedPlayers.slice(0, topN).map((player, index) => {
      const playerStats = {
        rank: index + 1,
        name: player.name,
        position: player.position,
        id: player.id,
        teamName: player.teamName,
        teamId: player.teamId,
        additionalStats: additionalStats.map(statType => ({
          type: statType,
          value: findStatValue(player, statType)
        })),
        calcStats: calcStats.map(statType => ({
          type: statType,
          value: findStatValue(player, statType)
        }))
      };

      return playerStats;
    });

    return topPlayers;
  }

  async getTopGoalkeepers(
    rankStatTypes,
    additionalStats = [],
    calcStats = [],
    sumTypes = false,
    topN = 5
  ) {
    const data = await this.setTournamentRankings().catch(err => {
      console.error(err);
    });

    const teams = data?.team;

    if (!teams || !teams?.[0]?.name) {
      return [];
    }

    const findStatValue = (player, statType) => {
      const stat = player.stat.find(s => s.type === statType);
      return stat ? parseInt(stat.value, 10) : 0;
    };

    // ✅ FILTER goalkeepers only
    const players = teams.flatMap(team =>
      team.player
        .filter(player => player.position === 'Goalkeeper') // <-- filter here
        .map(player => ({
          ...player,
          teamName: team.name,
          teamId: team.id
        }))
    );

    // Determine if sorting should be ascending based on "ranking" inclusion
    const isAscendingSort = statType => statType.toLowerCase().includes('ranking');

    const sortedPlayers = players.sort((a, b) => {
      if (sumTypes) {
        const sumA = rankStatTypes.reduce((acc, type) => acc + findStatValue(a, type), 0);
        const sumB = rankStatTypes.reduce((acc, type) => acc + findStatValue(b, type), 0);
        if (sumA !== sumB) return sumB - sumA;
        for (let i = 0; i < rankStatTypes.length; i++) {
          const statType = rankStatTypes[i];
          const valA = findStatValue(a, statType);
          const valB = findStatValue(b, statType);
          if (valA !== valB) return valB - valA;
        }
      } else {
        for (let i = 0; i < rankStatTypes.length; i++) {
          const statType = rankStatTypes[i];
          const valA = findStatValue(a, statType);
          const valB = findStatValue(b, statType);
          if (valA !== valB) {
            return isAscendingSort(statType) ? valA - valB : valB - valA;
          }
        }
      }
      return 0;
    });

    return sortedPlayers.slice(0, topN).map((player, index) => ({
      rank: index + 1,
      name: player.name,
      position: player.position,
      id: player.id,
      teamName: player.teamName,
      teamId: player.teamId,
      additionalStats: additionalStats.map(statType => ({
        type: statType,
        value: findStatValue(player, statType)
      })),
      calcStats: calcStats.map(statType => ({
        type: statType,
        value: findStatValue(player, statType)
      }))
    }));
  }


  getTeamSide() {
    const { gameInfo } = this.apiData.liveGame;
    const teamInfo = _.get(gameInfo, 'teamInfo');

    if (_.get(teamInfo, 'home.id') === this.target.teamId) {
      return 'home';
    }

    if (_.get(teamInfo, 'visitor.id') === this.target.teamId) {
      return 'away';
    }
  }

  async getLineup() {
    const liveMatchStats = await this.setLiveMatchStats().catch(err => {
      console.error(err);
    });
    return {
      lineup: _.get(liveMatchStats, 'liveData.lineUp', []),
      liveData: liveMatchStats?.liveData,
      matchInfo: liveMatchStats?.matchInfo
    };
  }

  //position = [Defender, Midfielder, Striker]
  //all available: Goalkeeper | Wing Back | Defender | Defensive Midfielder | Attacking Midfielder | Midfielder | Striker | Substitute
  //all sun: Goalkeeper | Defender | Attacker | Midfielder | Striker | Unknown
  async getPlayerCompare(position = 'Midfielder') {
    const liveMatchStats = await this.setLiveMatchStats().catch(err => {
      console.error(err);
    });

    const positionExtension = {
      Goalkeeper: 'Goalkeeper',
      'Wing Back': 'Defender',
      Striker: 'Striker',
      'Defensive Midfielder': 'Midfielder',
      'Attacking Midfielder': 'Midfielder',
      Midfielder: 'Midfielder',
      Defender: 'Defender',
      Attacker: 'Striker',
      Unknown: 'Midfielder'
    };

    const homePlayers = _.get(liveMatchStats, 'liveData.lineUp.0.player', []);
    const awayPlayers = _.get(liveMatchStats, 'liveData.lineUp.1.player', []);
    const matchStatus = _.lowerCase(_.get(liveMatchStats, 'liveData.matchDetails.matchStatus', ''));
    const isMatchPlayed = matchStatus === 'played' ? true : false;

    let selectedHome = null;
    let selectedAway = null;

    if (isMatchPlayed) {
      const mvp = await this.getMVP().catch(err => {
        LOGGER.error('getPlayerCompare %o', err);
      });

      const winningTeamSide = mvp?.winningTimeIndex === 0 ? 'home' : 'away';
      const players = [...homePlayers, ...awayPlayers];
      const mvpPLayer = _.find(players, { playerId: mvp?.mvp?.playerId });

      let mvpPosition = positionExtension?.[_.get(mvpPLayer, 'position', 'Midfielder')];

      if (winningTeamSide === 'home') {
        selectedHome = mvpPLayer;
      } else {
        selectedAway = mvpPLayer;
      }

      if (!selectedHome) {
        const filteredHome = homePlayers.filter(e => e.position?.indexOf(mvpPosition) > -1);
        selectedHome = _.sample(filteredHome) || null;
      }

      if (!selectedAway) {
        const filteredAway = awayPlayers.filter(e => e.position?.indexOf(mvpPosition) > -1);
        selectedAway = _.sample(filteredAway) || null;
      }
    } else {
      const filteredHome = homePlayers.filter(e => e.position?.indexOf(position) > -1);
      const filteredAway = awayPlayers.filter(e => e.position?.indexOf(position) > -1);
      selectedHome = _.sample(filteredHome) || null;
      selectedAway = _.sample(filteredAway) || null;
    }

    // const isSameFeedIssue = selectedHome.playerId === selectedAway.playerId;
    //
    // if(isSameFeedIssue) {
    //   const filteredHome = homePlayers.filter((e) => positionExtension['Midfielder']?.indexOf(e.position) > -1);
    //   const filteredAway = awayPlayers.filter((e) => positionExtension['Midfielder']?.indexOf(e.position) > -1);
    //   selectedHome = _.sample(filteredHome) || null;
    //   selectedAway = _.sample(filteredAway) || null;
    // }

    if (!selectedHome) {
      const backupHome = homePlayers.filter(e => e.position?.indexOf(position) > -1);
      selectedHome = _.sample(backupHome);
    }

    if (!selectedAway) {
      const backupAway = awayPlayers.filter(e => e.position?.indexOf(position) > -1);
      selectedAway = _.sample(backupAway);
    }

    return {
      home: selectedHome,
      away: selectedAway,
      kits: {
        home: liveMatchStats?.liveData?.lineUp?.[0]?.kit,
        away: liveMatchStats?.liveData?.lineUp?.[1]?.kit
      }
    };
  }

  //position = [Defender, Midfielder, Striker]
  //all available: Goalkeeper | Wing Back | Defender | Defensive Midfielder | Attacking Midfielder | Midfielder | Striker | Substitute
  //all sun: Goalkeeper | Defender | Attacker | Midfielder | Striker | Unknown

  async getPlayerCompareSeason(position = 'Midfielder') {
    const match = await this.setMatch(this.target?.eventId).catch(err => {
      console.error(err);
    });

    const matchData = match?.match?.[0];

    const matchInfo = matchData?.matchInfo;
    const home = _.find(matchInfo?.contestant, { position: 'home' });
    const away = _.find(matchInfo?.contestant, { position: 'away' });

    const relevantMatchData = getApiCallRelevantMatchData(matchData)

    const homeStats = await this.getSeasonStats(home.id, relevantMatchData);
    const awayStats = await this.getSeasonStats(away.id, relevantMatchData);

    // const positionExtension = {
    //   Goalkeeper: 'Goalkeeper',
    //   'Wing Back': 'Defender',
    //   Striker: 'Forward',
    //   'Defensive Midfielder': 'Midfielder',
    //   'Attacking Midfielder': 'Midfielder',
    //   Midfielder: 'Midfielder',
    //   Defender: 'Defender',
    //   Attacker: 'Forward',
    //   Unknown: 'Midfielder'
    // };

    const positionExtension = {
      // Goalkeeper: 'Goalkeeper',
      // 'Wing Back': 'Defender',
      Striker: 'Forward',
      // 'Defensive Midfielder': 'Midfielder',
      // 'Attacking Midfielder': 'Midfielder',
      Midfielder: 'Midfielder'
      // Defender: 'Defender',
      // Attacker: 'Forward',
      // Unknown: 'Midfielder'
    };
    const homePlayers = _.get(homeStats, 'player', []);
    const awayPlayers = _.get(awayStats, 'player', []);

    let selectedHome = null;
    let selectedAway = null;
    const players = [...homePlayers, ...awayPlayers];

    let mvpPosition = _.sample(Object.values(positionExtension));
    // let mvpPosition =  'Midfielder';

    const filteredHome = homePlayers.filter(e => {
      const gamesPlayed = e.stat?.find(stat => stat.name === 'Games Played');
      return e.position?.indexOf(mvpPosition) > -1 && gamesPlayed && parseInt(gamesPlayed.value) > 0;
    });
    selectedHome = _.sample(filteredHome) || null;

    const filteredAway = awayPlayers.filter(e => {
      const gamesPlayed = e.stat?.find(stat => stat.name === 'Games Played');
      return e.position?.indexOf(mvpPosition) > -1 && gamesPlayed && parseInt(gamesPlayed.value) > 0;
    });
    selectedAway = _.sample(filteredAway) || null;

    return {
      home: selectedHome,
      away: selectedAway
    };
  }

  async getPlayerStatsById(playerId) {
    const liveMatchStats = await this.setLiveMatchStats().catch(err => {
      console.error(err);
    });

    const homePlayers = _.get(liveMatchStats, 'liveData.lineUp.0.player', []);
    const awayPlayers = _.get(liveMatchStats, 'liveData.lineUp.1.player', []);

    let playerStats = _.find(homePlayers, { playerId: playerId }) || _.find(awayPlayers, { playerId: playerId });

    return {
      playerStats,
      kits: {
        home: liveMatchStats?.liveData?.lineUp?.[0]?.kit,
        away: liveMatchStats?.liveData?.lineUp?.[1]?.kit
      },
      liveData: liveMatchStats?.liveData,
      matchInfo: liveMatchStats?.matchInfo
    };
  }

  async getGoals() {
    const that = this;
    const liveMatchStats = await this.setLiveMatchStats().catch(err => {
      console.error(err);
    });

    return _.get(liveMatchStats, 'liveData.goal', []);
  }

  async getTeamHeatmap(teamId, callOptions) {
    const that = this;
    const liveMatchEvents = await this.setLiveMatchEvents(callOptions).catch(err => {
      console.error(err);
    });

    const events = _.get(liveMatchEvents, 'liveData.event', []);

    const filtered = events.filter(i => {
      if (teamId) {
        return (i?.x > 0 || i?.y > 0) && i.contestantId === teamId;
      }

      return i?.x > 0 || i?.y > 0;
    });

    return filtered;
  }

  async getTopPlayerHeatmap(teamId, callOptions) {
    const that = this;
    const teamHeatmap = await this.getTeamHeatmap(teamId, callOptions).catch(err => {
      console.error(err);
    });

    const playerWithMostData = _.countBy(teamHeatmap, p => p.playerId);
    const playerWithMostDataSorted = _(playerWithMostData).toPairs().orderBy(1, 'desc').fromPairs().value();

    const topTrackedPlayer = Object.keys(playerWithMostDataSorted)?.[0] || [];

    const playerFiltered = teamHeatmap.filter(i => {
      return i.playerId === topTrackedPlayer;
    });

    const playerStats = await this.getPlayerStatsById(topTrackedPlayer).catch(err => {
      LOGGER.error('err', err);
    });

    return {
      heatmap: playerFiltered,
      stats: playerStats?.playerStats,
      kits: playerStats?.kits
    };
  }

  async getPlayerHeatmap(teamId, playerId, callOptions) {
    const teamHeatmap = await this.getTeamHeatmap(teamId, callOptions).catch(err => {
      console.error(err);
    });

    const playerFiltered = teamHeatmap.filter(i => {
      return i.playerId === playerId;
    });
    const playerStats = await this.getPlayerStatsById(playerId).catch(err => {
      LOGGER.error('err', err);
    });

    return {
      heatmap: playerFiltered,
      stats: playerStats?.playerStats,
      kits: playerStats?.kits
    };
  }

  async getSeasonStats(teamId, liveMatch) {
    const that = this;
    return this.setSeasonTeamStats(teamId, liveMatch).catch(err => {
      console.error(err);
    });
  }

  async getTotalSeasonStatsByKeys(limit) {
    let teams = await this.getTeams().catch(err => {
      console.error('getTeams', err);
    });
    //  {
    //     shortcut: 'France',
    //     name: 'France',
    //     teamId: '185xqd7s06sm2t85sxzfkrl',
    //     code: 'FRA'
    //   },

    const { defensive, offensive } = require('../../../templates/worldcup/wc_seasontotals/statsConfig');

    if (limit) {
      teams = teams.slice(0, limit);
    }

    const allTeamsSeasonsDef = [];
    const allTeamsSeasonsOff = [];
    await async.eachSeries(teams, async contestant => {
      const indicator = config.feeds.opta.data.tournament.seasonstats;
      const dataCall = indicator.url
        .replace('[[LEAGUE]]', this.target.league)
        .replace('[[TEAMID]]', contestant?.teamId);

      const dataRes = await this.apiCall(
        {
          url: dataCall
        },
        { indicator }
      );

      const teamStats = dataRes?.contestant?.stat || [];

      const selectedTeamStatsDef = {};
      for (const defStat of defensive) {
        selectedTeamStatsDef[defStat] = parseFloat(_.find(teamStats, { name: defStat })?.value) || 0;
      }

      allTeamsSeasonsDef.push(selectedTeamStatsDef);

      const selectedTeamStatsOff = {};
      for (const offStat of offensive) {
        selectedTeamStatsOff[offStat] = parseFloat(_.find(teamStats, { name: offStat })?.value) || 0;
      }

      allTeamsSeasonsOff.push(selectedTeamStatsOff);
    });

    const finalTotalsDef = {};
    for (const defStat of allTeamsSeasonsDef) {
      _.forEach(defStat, (stat, key) => {
        finalTotalsDef[key] = (finalTotalsDef[key] || 0) + stat;
      });
    }

    const finalTotalsOff = {};
    for (const offStat of allTeamsSeasonsOff) {
      _.forEach(offStat, (stat, key) => {
        finalTotalsOff[key] = (finalTotalsOff[key] || 0) + stat;
      });
    }

    finalTotalsDef['Games Played'] = finalTotalsDef?.['Games Played'] / 2;
    finalTotalsOff['Games Played'] = finalTotalsOff?.['Games Played'] / 2;

    return {
      defensive: finalTotalsDef,
      offensive: finalTotalsOff
    };
  }

  async getTeamPlayers() {
    await this.setLiveGame(['gameInfo', 'playerStats']).catch(err => {
      console.error(err);
    });

    // set basic game data, based on gameInfo
    this.setGameInfo();

    let players = [];

    const playersData = _.get(this.apiData.liveGame, 'playerStats');

    players = _.cloneDeep(playersData);

    return players.map(item => {
      return {
        id: item.id.toString(),
        name: item.name,
        firstname: item.firstname,
        surname: item.surname,
        position: item.position,
        jersey: item.jersey,
        nationality: item.nationality
      };
    });
  }

  // {
  //   Goals,
  //   Assists,
  //   TotalGames,
  //   YellowCards,
  //   RedCards,
  //   TotalGamesOverall,
  //   GoalsOverall,
  //   YellowCardsOverall,
  //   RedCardsOverall,
  //   SubOnOverall,
  //   SubOffOverall,
  //   AssistsOverall
  // }
  async getTopScorersSeason(rankingType = 'Goals') {
    const seasonTopPerformers = await this.getTournamentTopPerformers().catch(err => {
      console.error(err);
    });

    const topPerformers = _.get(seasonTopPerformers, 'playerTopPerformers.ranking', []);

    if (rankingType === 'Goals') {
      const playerRankingGoals = _.find(topPerformers, { name: 'Goals' });
      return playerRankingGoals?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'Assists') {
      const playerRankingAssists = _.find(topPerformers, { name: 'Assists' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'TotalGames') {
      const playerRankingAssists = _.find(topPerformers, { name: 'TotalGames' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'YellowCards') {
      const playerRankingAssists = _.find(topPerformers, { name: 'YellowCards' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'RedCards') {
      const playerRankingAssists = _.find(topPerformers, { name: 'RedCards' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'TotalGamesOverall') {
      const playerRankingAssists = _.find(topPerformers, { name: 'TotalGamesOverall' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'GoalsOverall') {
      const playerRankingAssists = _.find(topPerformers, { name: 'GoalsOverall' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'YellowCardsOverall') {
      const playerRankingAssists = _.find(topPerformers, { name: 'YellowCardsOverall' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'RedCardsOverall') {
      const playerRankingAssists = _.find(topPerformers, { name: 'RedCardsOverall' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'SubOnOverall') {
      const playerRankingAssists = _.find(topPerformers, { name: 'SubOnOverall' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'SubOffOverall') {
      const playerRankingAssists = _.find(topPerformers, { name: 'SubOffOverall' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'AssistsOverall') {
      const playerRankingAssists = _.find(topPerformers, { name: 'AssistsOverall' });
      return playerRankingAssists?.player?.slice(0, 5) || [];
    }

    if (rankingType === 'all') {
      const goals = _.find(topPerformers, { name: 'Goals' })?.player || [];
      const assists = _.find(topPerformers, { name: 'Assists' })?.player || [];
      // Create a combined map by player name
      const combinedMap = {};

      goals.forEach(player => {
        combinedMap[player.matchName] = {
          matchName: player.matchName,
          goals: player.value || 0,
          assists: 0,
          total: player.value || 0,
          ...player
        };
      });

      assists.forEach(player => {
        if (!combinedMap[player.matchName]) {
          combinedMap[player.matchName] = {
            matchName: player.matchName,
            goals: 0,
            assists: player.value || 0,
            total: player.value || 0,
            ...player
          };
        } else {
          combinedMap[player.matchName].assists = player.value || 0;
          combinedMap[player.matchName].total += player.value || 0;
        }
      });

      // Convert to array and sort by total (goals + assists)
      const combinedRankings = Object.values(combinedMap)
        .sort((a, b) => b.total - a.total)
        .slice(0, 5); // Top 5
      return combinedRankings;
    }

    // const side = this.getTeamSide();
    // const sortIterationsFn = [
    //   (item) => {
    //     return parseInt(item.statistics.points.home) + parseInt(item.statistics.points.away);
    //   },
    //   (item) => {
    //     return parseInt(item.statistics.goals.home) + parseInt(item.statistics.goals.away);
    //   },
    //   (item) => {
    //     return parseInt(item.statistics.assists.home) + parseInt(item.statistics.assists.away);
    //   },
    //   (item) => {
    //     return parseInt(item.statistics.timeOnIce) + parseInt(item.statistics.timeOnIce);
    //   }
    // ];
    //
    // const sortIterationsOrder = ['desc', 'desc', 'desc', 'asc'];
    //
    // const sortedHome = _.orderBy(this.apiData.season.playerStats['home'], sortIterationsFn, sortIterationsOrder);
    // const sortedAway = _.orderBy(this.apiData.season.playerStats['away'], sortIterationsFn, sortIterationsOrder);
    //
    // return {
    //   home: sortedHome.slice(0, 3),
    //   away: sortedAway.slice(0, 3)
    // };
  }

  // async getGameInfo() {
  //   await this.setLiveGame(['gameInfo']).catch((err) => {
  //     console.error(err);
  //   });
  //
  //   // set basic game data, based on gameInfo
  //   const eventData = this.setGameInfo();
  //   return eventData;
  // }

  async getNextMatchday(eventId) {
    const matches = await this.getMatches([], false).catch(err => {
      console.error(err);
    });
    const currentIndex = _.findIndex(matches, { id: eventId || this.target.eventId });

    return matches?.[currentIndex + 1] || null;
  }

  async getNextFixtureFromNow() {
    const matches = await this.getMatches([], false).catch(err => {
      console.error(err);
    });
    // const currentIndex = _.findIndex(matches, { id: eventId || this.target.eventId });

    // return matches?.[currentIndex + 1] || null;
  }

  async getMatchdaysInRange(dateFrom, dateTo) {
    // const time = "2019-10-25T08:10:00Z";
    await this.setMatchdaysInRange(dateFrom?.replace('.000Z', 'Z'), dateTo?.replace('.000Z', 'Z')).catch(err => {
      console.error(err);
    });

    const matchesToQuery = _.map(this.apiData.matchdays, match => match?.matchInfo?.id);

    const series = [];
    // await async.eachSeries(matchesToQuery, async (eventId) => {
    //   const matchStatsCall = config.feeds.opta.data.fixtures.matchstats.url
    //     .replace('[[EVENTID]]', eventId)
    //     .replace('[[DETAILED]]', 'false');
    //
    //   const liveMatchStats = await this.apiCall({
    //     url: matchStatsCall
    //   });
    //
    //   _.set(liveMatchStats, 'matchInfo.series.eventId', eventId);
    //
    //   series.push(liveMatchStats?.matchInfo?.series);
    // });

    return {
      matchdays: this.apiData.matchdays,
      series
    };
  }

  async getTeamLastGames(teamSide = 'home') {
    const { matchInfo, liveData } = await this.getMatch().catch(err => {
      console.error(err);
    });

    const targetTeam = teamSide === 'home' ? matchInfo?.contestant?.[0]?.id : matchInfo?.contestant?.[1]?.id;
    const targetTeamName = teamSide === 'home' ? matchInfo?.contestant?.[0]?.name : matchInfo?.contestant?.[1]?.name;

    const matchdaysLast = await this.setTeamLastGames(targetTeam).catch(err => {
      console.error(err);
    });

    // const matchesToQuery = _.map(this.apiData.matchdays_last, match => match?.matchInfo?.id);

    // const customMatches = this.apiData.matchdays_last.filter(
    //   e => e.matchInfo?.contestant[0]?.id === targetTeam || e.matchInfo?.contestant[1]?.id === targetTeam
    // );
    //
    // const customMatches = require('../../../templates/worldcup/wc_lastgames/recent_matches.json').filter(
    //   e => e.homeName === targetTeamName || e.awayName === targetTeamName
    // );

    // const customMatchesUnique = _.uniqBy(customMatches, function (e) {
    //   return e?.matchInfo?.id;
    // });

    const feedsMatches = _.filter(matchdaysLast, match => {
      return match?.liveData?.matchDetails?.matchStatus === 'Played' && match?.matchInfo?.date;
    }).map(m => {
      return {
        competition: m?.matchInfo?.competition?.knownName || m?.matchInfo?.competition?.name,
        competitionId: m?.matchInfo?.competition?.id,
        tournamentCalendarId: m?.tournamentCalendar?.tournamentCalendarId,
        date: format(parse(m?.matchInfo?.date.replace('Z', ''), 'yyyy-MM-dd', new Date()), 'MM/dd/yyyy'),
        matchDate: m?.matchInfo?.date,
        matchTime: m?.matchInfo?.time,
        homeId: m?.matchInfo?.contestant?.[0]?.id,
        awayId: m?.matchInfo?.contestant?.[1]?.id,
        homeName: m?.matchInfo?.contestant?.[0]?.shortName || m?.matchInfo?.contestant?.[0]?.name,
        awayName: m?.matchInfo?.contestant?.[1]?.shortName || m?.matchInfo?.contestant?.[1]?.name,
        scoreHome: m?.liveData?.matchDetails?.scores?.total?.home,
        scoreAway: m?.liveData?.matchDetails?.scores?.total?.away,
        liveData: m?.liveData
      };
    });

    const combined = [...feedsMatches];
    const combinedSorted = _.orderBy(
      combined,
      function (entry) {
        const matchDate = parse(entry.date, 'MM/dd/yyyy', new Date()).getTime();
        return matchDate;
      },
      ['desc']
    ).filter(m => {
      const competitionCfg = _.find(competitionsActivated?.competition, { id: m?.competitionId });
      return competitionCfg?.isFriendly === 'no';
    });

    return combinedSorted.slice(0, 5) || [];
  }

  async getLastGamesByTeamId(teamId, gamesCount = 10) {
    const targetTeam = teamId;

    const matchdaysLast = await this.setTeamLastGames(targetTeam).catch(err => {
      console.error(err);
    });

    const feedsMatches = _.filter(matchdaysLast, match => {
      return match?.liveData?.matchDetails?.matchStatus === 'Played' && match?.matchInfo?.date;
    }).map(m => {
      return {
        competition: m?.matchInfo?.competition?.knownName || m?.matchInfo?.competition?.name,
        competitionId: m?.matchInfo?.competition?.id,
        // tournamentCalendarId: m?.tournamentCalendar?.tournamentCalendarId,
        date: format(parse(m?.matchInfo?.date.replace('Z', ''), 'yyyy-MM-dd', new Date()), 'MM/dd/yyyy'),
        // matchDate: m?.matchInfo?.date,
        // matchTime: m?.matchInfo?.time,
        homeId: m?.matchInfo?.contestant?.[0]?.id,
        awayId: m?.matchInfo?.contestant?.[1]?.id,
        homeName: m?.matchInfo?.contestant?.[0]?.shortName || m?.matchInfo?.contestant?.[0]?.name,
        awayName: m?.matchInfo?.contestant?.[1]?.shortName || m?.matchInfo?.contestant?.[1]?.name,
        scoreHome: m?.liveData?.matchDetails?.scores?.total?.home,
        scoreAway: m?.liveData?.matchDetails?.scores?.total?.away,
        week: m?.matchInfo?.week
        // liveData: m?.liveData
      };
    });

    const combined = [...feedsMatches];
    const combinedSorted = _.orderBy(
      combined,
      function (entry) {
        const matchDate = parse(entry.date, 'MM/dd/yyyy', new Date()).getTime();
        return matchDate;
      },
      ['desc']
    ).filter(m => {
      const competitionCfg = _.find(competitionsActivated?.competition, { id: m?.competitionId });
      return competitionCfg.isFriendly === 'no';
    });

    return combinedSorted.slice(0, gamesCount) || [];
  }

  async getTeamNextGames(teamSide = 'home') {
    const { matchInfo, liveData } = await this.getMatch().catch(err => {
      console.error(err);
    });

    const targetTeam = teamSide === 'home' ? matchInfo?.contestant?.[0]?.id : matchInfo?.contestant?.[1]?.id;
    const targetTeamName = teamSide === 'home' ? matchInfo?.contestant?.[0]?.name : matchInfo?.contestant?.[1]?.name;

    const matchdaysNext = await this.setTeamNextGames(targetTeam).catch(err => {
      console.error(err);
    });

    const feedsMatches = _.filter(matchdaysNext, match => {
      return (
        match?.liveData?.matchDetails?.matchStatus === 'Fixture' &&
        match?.matchInfo?.date &&
        _.toLower(match?.matchInfo?.competition?.knownName) !== 'friendly'
      );
    }).map(m => {
      return {
        competition: m?.matchInfo?.competition?.knownName || m?.matchInfo?.competition?.name,
        competitionId: m?.matchInfo?.competition?.id,
        tournamentCalendarId: m?.tournamentCalendar?.tournamentCalendarId,
        date: format(parse(m?.matchInfo?.date.replace('Z', ''), 'yyyy-MM-dd', new Date()), 'MM/dd/yyyy'),
        matchDate: m?.matchInfo?.date,
        matchTime: m?.matchInfo?.time,
        homeId: m?.matchInfo?.contestant?.[0]?.id,
        awayId: m?.matchInfo?.contestant?.[1]?.id,
        homeName: m?.matchInfo?.contestant?.[0]?.shortName || m?.matchInfo?.contestant?.[0]?.name,
        awayName: m?.matchInfo?.contestant?.[1]?.shortName || m?.matchInfo?.contestant?.[1]?.name,
        scoreHome: m?.liveData?.matchDetails?.scores?.total?.home,
        scoreAway: m?.liveData?.matchDetails?.scores?.total?.away
      };
    });

    const combined = [...feedsMatches];
    const combinedSorted = _.orderBy(
      combined,
      function (entry) {
        const matchDate = parse(entry.date, 'MM/dd/yyyy', new Date()).getTime();
        return matchDate;
      },
      ['asc']
    );

    return combinedSorted.slice(0, 5) || [];
  }

  async getCurrentMatchday() {
    const matches = await this.getMatches([], false).catch(err => {
      console.error(err);
    });
    const currentIndex = _.findIndex(matches, { id: this.target.eventId });

    return matches?.[currentIndex] || null;
  }

  //get game to focus based on time and schedule
  async getClosestMatchFromSchedule(now, teamIds = [], competitionConfig = {}) {
    const isCurrentScheduleExists = await UpdaterM.findOne(
      {
        'event.season': this.target.season,
        feedType: `tournamentSchedule-${this.target.league}`
      },
      null,
      {
        lean: true
      }
    );

    let matches = null;
    const isOutdated = isOlderThanDelay(isCurrentScheduleExists?.updatedAt, ONE_DAY_IN_MS);

    if (!isCurrentScheduleExists || isOutdated) {
      matches = await this.getMatches([], false).catch(err => {
        console.error(err);
      });

      await UpdaterM.findOneAndUpdate(
        {
          'event.season': this.target.season,
          feedType: `tournamentSchedule-${this.target.league}`
        },
        {
          data: matches,
          event: {
            competitionId: this.target.league,
            season: this.target.season,
            eventId: 'GENERIC'
          },
          feedType: `tournamentSchedule-${this.target.league}`,
          feedProvider: 'opta'
        },
        {
          lean: true,
          new: true,
          upsert: true
        }
      ).catch(err => {
        LOGGER.error('Failed to upsert tournamentSchedule %o', err);
      });
    } else {
      matches = isCurrentScheduleExists?.data || [];
    }

    const { closestMatch, prevClosest, nextClosest } = getClosestMatchFromNow({
      matches,
      teamIds
      // now: new Date('2023-12-29T22:05:00Z')
    });

    if (!closestMatch) {
      LOGGER.warn(this.target, 'Failed to get closestMatch! %o');
      return {
        teamsPlayMatchday: [],
        teamsPlayToday: [],
        todaysWeek: null,
        todaysStage: null,
        todaysLeg: null
      };
    }

    const matchesToQuery = [prevClosest?.id, closestMatch?.id, nextClosest?.id];

    // Cache for getMatchesById
    const matchesCacheKey = `matchesById-${closestMatch?.id}`;
    let matchesMa1 = await UpdaterM.findOne({ feedType: matchesCacheKey }, null, { lean: true });

    const closestInRange = isWithinMatchTimeWindow(closestMatch, now);
    const nextClosestInRange = isWithinMatchTimeWindow(nextClosest, now);

    if (!matchesMa1 || (closestInRange || nextClosestInRange) || Boolean(matchesMa1?.forceUpdate)) {
      matchesMa1 = await this.getMatchesById(matchesToQuery).catch(console.error);

      if (matchesMa1 && Array.isArray(matchesMa1)) {
        matchesMa1 = matchesMa1.map(match => {
          if (match?.liveData) {
            match.liveData = _.pick(match?.liveData, ['matchDetails']);
          }
          return match;
        });
      }

      await UpdaterM.findOneAndUpdate(
        { feedType: matchesCacheKey },
        {
          data: matchesMa1,
          feedType: matchesCacheKey,
          event: {
            competitionId: this.target.league,
            season: this.target.season
          },
          feedProvider: 'opta',
          forceUpdate: false
        },
        { lean: true, new: true, upsert: true }
      ).catch(err => LOGGER.error('Failed to upsert matchesById cache %o', err));
    } else {
      matchesMa1 = matchesMa1?.data || [];
    }

    const closestMatchData = _.find(matchesMa1, f => f?.matchInfo.id === closestMatch?.id);
    const nextMatchData = _.find(matchesMa1, f => f?.matchInfo.id === nextClosest?.id);
    const prevMatchData = _.find(matchesMa1, f => f?.matchInfo.id === prevClosest?.id);

    const currentWeek = closestMatchData?.matchInfo?.week;
    const currentStage = closestMatchData?.matchInfo?.stage;

    const competitionFormat = competitionConfig?.competitionFormat;

    let matchdayMatches = [];
    // Cache for getLiveMatchesByStage
    const liveMatchesCacheKey = `liveMatchesByStage-${currentStage?.id}`;
    let matchdayMatchesByStage = await UpdaterM.findOne(
      { feedType: liveMatchesCacheKey },
      null,
      { lean: true }
    );
    if (currentStage && !matchdayMatchesByStage || (closestInRange || nextClosestInRange) || Boolean(matchdayMatchesByStage?.forceUpdate)) {
      matchdayMatchesByStage = await this.getLiveMatchesByStage(currentStage).catch(console.error);

      if (matchdayMatchesByStage && Array.isArray(matchdayMatchesByStage)) {
        matchdayMatchesByStage = matchdayMatchesByStage.map(match => {
          if (match?.liveData) {
            match.liveData = _.pick(match?.liveData, ['matchDetails']);
          }
          return match;
        });
      }

      await UpdaterM.findOneAndUpdate(
        { feedType: liveMatchesCacheKey },
        {
          data: matchdayMatchesByStage,
          feedType: liveMatchesCacheKey,
          event: {
            competitionId: this.target.league,
            season: this.target.season
          },
          feedProvider: 'opta',
          forceUpdate: false
        },
        { lean: true, new: true, upsert: true }
      ).catch(err => LOGGER.error('Failed to upsert liveMatchesByStage cache %o', err));
    } else {
      matchdayMatchesByStage = matchdayMatchesByStage?.data || [];
    }

    // name: 'UEFA Nations League',
    // if (competitionConfig?.id === '595nsvo7ykvoe690b1e4u5n56') {
    //   const standing = await this.getStandingTable().catch(err => {
    //     console.log('err', err);
    //   });
    //
    //   const result = getOldestStartDateAndNewestEndDate(standing);
    //
    //
    //   console.log('result', result)
    //   console.log('standing', standing)
    //
    //   // Format the dates to yyyy-MM-dd to use in the rangeFrom and rangeTo
    //   const formattedOldestStartDate = format(result.oldestStartDate, 'yyyy-MM-dd');
    //   const formattedNewestEndDate = format(result.newestEndDate, 'yyyy-MM-dd');
    //
    //   let rangeFrom = new Date(`${formattedOldestStartDate}T00:00:00Z`);
    //   let rangeTo = new Date(`${formattedNewestEndDate}T23:59:59Z`);
    //
    //   const matchdayMatchesByRange = (
    //     await this.getMatchdaysInRange(rangeFrom.toISOString(), rangeTo.toISOString()).catch(err => {
    //       console.log('err', err);
    //     })
    //   )?.matchdays;
    //
    //   matchdayMatches = matchdayMatchesByRange;
    // } else {
    matchdayMatches = matchdayMatchesByStage;
    // }

    let teamsPlayToday = [];
    let teamsPlayMatchday = [];

    const hasLeg = Boolean(closestMatchData?.liveData?.matchDetails?.leg);

    matchdayMatches?.forEach(function (match) {
      const matchInfo = match?.matchInfo;
      const matchLiveDetails = match?.liveData?.matchDetails;
      const combinedMatch = {
        ...matchInfo,
        ...matchLiveDetails
      };

      if (matchInfo?.contestant?.every(contestant => contestant.id)) {
        // Check if the match date is within the specified time frame
        if (matchInfo.localDate) {
          const fullDateTime = prepareMatchIsoString({
            date: matchInfo?.date,
            time: matchInfo?.time
          });
          const matchUtcDate = parseISO(fullDateTime);
          // Parse the local date and time
          const matchLocalDateStr = `${matchInfo.localDate} ${matchInfo.localTime}`;
          const matchLocalDate = parse(matchLocalDateStr, 'yyyy-MM-dd HH:mm:ss', new Date());

          // Calculate the difference in hours between local and UTC
          const minuteDifference = differenceInMinutes(matchLocalDate, matchUtcDate);
          // Adjust the current UTC date to the local time by subtracting the hour difference
          const nowLocalDate = addMinutes(now, minuteDifference);

          // Format the dates for comparison
          // const formattedMatch = format(matchLocalDate, 'dd-MM-yyyy');
          // const formattedNow = format(nowLocalDate, 'dd-MM-yyyy');

          const timeDiffToNow = differenceInMinutes(matchUtcDate, now);
          if (isSameDay(matchLocalDate, nowLocalDate) || Math.abs(timeDiffToNow) <= Math.abs(minuteDifference)) {
            teamsPlayToday.push(combinedMatch);
          }

          const todayStart = startOfDay(nowLocalDate);
          const todayEnd = endOfDay(nowLocalDate);

          const in1Day = startOfDay(addDays(todayStart, 1));
          const twoDaysAgo = startOfDay(subDays(todayStart, 2));
          const threeDaysAgo = startOfDay(subDays(now, 3));
          const weeks2Ago = startOfDay(subDays(now, 14));
          const weeks2In = startOfDay(addDays(now, 14));
          const inTwoDays = endOfDay(addDays(now, 2));

          if (competitionConfig?.name === 'Friendlies') {
            if (
              isWithinInterval(matchLocalDate, {
                start: weeks2Ago,
                end: inTwoDays
              })
            ) {
              teamsPlayMatchday.push(combinedMatch);
            }
          } else {
            if (
              isWithinInterval(matchLocalDate, {
                start: twoDaysAgo,
                end: in1Day
              })
            ) {
              teamsPlayMatchday.push(combinedMatch);
            }
          }
        }
      }
    });

    // Fallback logic for no recent or upcoming games
    const closestMatchLeg = closestMatchData?.liveData?.matchDetails?.leg;
    const closestMatchWeek = closestMatchData?.matchInfo?.week;
    if (teamsPlayMatchday.length === 0) {
      teamsPlayMatchday.push(
        ...(matchdayMatches
          ?.filter(m => m.liveData?.matchDetails?.leg && m.liveData?.matchDetails?.leg === closestMatchLeg)
          .map(match => {
            const matchInfo = match?.matchInfo;
            const matchLiveDetails = match?.liveData?.matchDetails;
            return {
              ...matchInfo,
              ...matchLiveDetails
            };
          }) ?? [])
      );
    }

    if (teamsPlayMatchday.length === 0) {
      teamsPlayMatchday.push(
        ...(matchdayMatches
          ?.filter(m => m.matchInfo?.week && m.matchInfo?.week === closestMatchWeek)
          .map(match => {
            const matchInfo = match?.matchInfo;
            const matchLiveDetails = match?.liveData?.matchDetails;
            return {
              ...matchInfo,
              ...matchLiveDetails
            };
          }) ?? [])
      );
    }

    let todaysWeek = currentWeek;
    let todaysStage = currentStage;
    let todaysLeg = null;

    if (teamsPlayMatchday.length === 0 || _.isEmpty(teamsPlayMatchday?.[0])) {
      teamsPlayMatchday.push(
        ...(matchdayMatches?.slice(-4).map(match => {
          const matchInfo = match?.matchInfo;
          const matchLiveDetails = match?.liveData?.matchDetails;
          return {
            ...matchInfo,
            ...matchLiveDetails
          };
        }) ?? [])
      );
    }

    // if (teamsPlayMatchday.length === 0 && !_.isEmpty(nextMatchData)) {
    //   teamsPlayMatchday.push({
    //     ...nextMatchData?.matchInfo,
    //     ...nextMatchData?.liveData?.matchDetails
    //   });
    // }

    const forceUpdate = teamsPlayToday?.some(match => isWithinMatchTimeWindow(match, now));

    if (forceUpdate) {
      await Promise.all([
        UpdaterM.findOneAndUpdate(
          { feedType: matchesCacheKey },
          { forceUpdate: true },
          { lean: true, new: true, upsert: true }
        ).catch(err => LOGGER.error('Failed to update matchesCacheKey %o', err)),

        UpdaterM.findOneAndUpdate(
          { feedType: liveMatchesCacheKey },
          { forceUpdate: true },
          { lean: true, new: true, upsert: true }
        ).catch(err => LOGGER.error('Failed to update liveMatchesCacheKey %o', err))
      ]);
    }

    return {
      teamsPlayMatchday,
      teamsPlayToday,
      todaysWeek,
      todaysStage,
      todaysLeg,
      closestMatch
    };
  }

  //get game to focus based on time and schedule
  async getNextMatchdayMatchesFromSchedule(now, teamIds = [], competitionConfig = {}) {
    const isCurrentScheduleExists = await UpdaterM.findOne(
      {
        'event.season': this.target.season,
        feedType: `tournamentSchedule-${this.target.league}`
      },
      null,
      {
        lean: true
      }
    );

    let matches = null;
    const isOutdated = isOlderThanDelay(isCurrentScheduleExists?.updatedAt, ONE_DAY_IN_MS);

    if (!isCurrentScheduleExists || isOutdated) {
      matches = await this.getMatches([], false).catch(err => {
        console.error(err);
      });

      await UpdaterM.findOneAndUpdate(
        {
          'event.season': this.target.season,
          feedType: `tournamentSchedule-${this.target.league}`
        },
        {
          data: matches,
          event: {
            competitionId: this.target.league,
            season: this.target.season,
            eventId: 'GENERIC'
          },
          feedType: `tournamentSchedule-${this.target.league}`,
          feedProvider: 'opta'
        },
        {
          lean: true,
          new: true,
          upsert: true
        }
      ).catch(err => {
        LOGGER.error('Failed to upsert tournamentSchedule %o', err);
      });
    } else {
      matches = isCurrentScheduleExists?.data || [];
    }

    const { closestMatch, prevClosest, nextClosest } = getNextClosestMatchFromNow({
      matches,
      teamIds
      // now: new Date('2023-12-29T22:05:00Z')
    });

    if (!closestMatch) {
      LOGGER.warn(this.target, 'Failed to get closestMatch! %o');
      return {
        teamsPlayMatchday: [],
        teamsPlayToday: [],
        todaysWeek: null,
        todaysStage: null,
        todaysLeg: null
      };
    }

    const matchesToQuery = [prevClosest?.id, closestMatch?.id, nextClosest?.id];

    // Cache for getMatchesById
    const matchesCacheKey = `matchesById-${closestMatch?.id}`;
    let matchesMa1 = await UpdaterM.findOne({ feedType: matchesCacheKey }, null, { lean: true });

    const closestInRange = isWithinMatchTimeWindow(closestMatch, now);
    const nextClosestInRange = isWithinMatchTimeWindow(nextClosest, now);

    if (!matchesMa1 || (closestInRange || nextClosestInRange) || Boolean(matchesMa1?.forceUpdate)) {
      matchesMa1 = await this.getMatchesById(matchesToQuery).catch(console.error);

      if (matchesMa1 && Array.isArray(matchesMa1)) {
        matchesMa1 = matchesMa1.map(match => {
          if (match?.liveData) {
            match.liveData = _.pick(match?.liveData, ['matchDetails']);
          }
          return match;
        });
      }

      await UpdaterM.findOneAndUpdate(
        { feedType: matchesCacheKey },
        {
          data: matchesMa1,
          feedType: matchesCacheKey,
          event: {
            competitionId: this.target.league,
            season: this.target.season
          },
          feedProvider: 'opta',
          forceUpdate: false
        },
        { lean: true, new: true, upsert: true }
      ).catch(err => LOGGER.error('Failed to upsert matchesById cache %o', err));
    } else {
      matchesMa1 = matchesMa1?.data || [];
    }

    const closestMatchData = _.find(matchesMa1, f => f?.matchInfo.id === closestMatch?.id);
    
    const currentWeek = closestMatchData?.matchInfo?.week;
    const currentStage = closestMatchData?.matchInfo?.stage;

    let matchdayMatches = [];
    // Cache for getLiveMatchesByStage
    const liveMatchesCacheKey = `liveMatchesByStage-${currentStage?.id}`;
    let matchdayMatchesByStage = await UpdaterM.findOne(
      { feedType: liveMatchesCacheKey },
      null,
      { lean: true }
    );
    if (currentStage && !matchdayMatchesByStage || (closestInRange || nextClosestInRange) || Boolean(matchdayMatchesByStage?.forceUpdate)) {
      matchdayMatchesByStage = await this.getLiveMatchesByStage(currentStage).catch(console.error);

      if (matchdayMatchesByStage && Array.isArray(matchdayMatchesByStage)) {
        matchdayMatchesByStage = matchdayMatchesByStage.map(match => {
          if (match?.liveData) {
            match.liveData = _.pick(match?.liveData, ['matchDetails']);
          }
          return match;
        });
      }

      await UpdaterM.findOneAndUpdate(
        { feedType: liveMatchesCacheKey },
        {
          data: matchdayMatchesByStage,
          feedType: liveMatchesCacheKey,
          event: {
            competitionId: this.target.league,
            season: this.target.season
          },
          feedProvider: 'opta',
          forceUpdate: false
        },
        { lean: true, new: true, upsert: true }
      ).catch(err => LOGGER.error('Failed to upsert liveMatchesByStage cache %o', err));
    } else {
      matchdayMatchesByStage = matchdayMatchesByStage?.data || [];
    }
    matchdayMatches = matchdayMatchesByStage;

    let teamsPlayToday = [];
    let teamsPlayMatchday = [];
    let teamsPlayPostMatch = [];

    matchdayMatches?.forEach(function (match) {
      const matchInfo = match?.matchInfo;
      const matchLiveDetails = match?.liveData?.matchDetails;
      const combinedMatch = {
        ...matchInfo,
        ...matchLiveDetails
      };

      if (matchInfo?.contestant?.every(contestant => contestant.id)) {
        // Check if the match date is within the specified time frame
        if (matchInfo.localDate) {
          const fullDateTime = prepareMatchIsoString({
            date: matchInfo?.date,
            time: matchInfo?.time
          });
          const matchUtcDate = parseISO(fullDateTime);
          // Parse the local date and time
          const matchLocalDateStr = `${matchInfo.localDate} ${matchInfo.localTime}`;
          const matchLocalDate = parse(matchLocalDateStr, 'yyyy-MM-dd HH:mm:ss', new Date());

          // Calculate the difference in hours between local and UTC
          const minuteDifference = differenceInMinutes(matchLocalDate, matchUtcDate);
          // Adjust the current UTC date to the local time by subtracting the hour difference
          const nowLocalDate = addMinutes(now, minuteDifference);

          // Format the dates for comparison
          // const formattedMatch = format(matchLocalDate, 'dd-MM-yyyy');
          // const formattedNow = format(nowLocalDate, 'dd-MM-yyyy');

          const timeDiffToNow = differenceInMinutes(matchUtcDate, now);
          if (isSameDay(matchLocalDate, nowLocalDate) || Math.abs(timeDiffToNow) <= Math.abs(minuteDifference)) {
            teamsPlayToday.push(combinedMatch);
          }

          const todayStart = startOfDay(nowLocalDate);
          const todayEnd = endOfDay(nowLocalDate);

          const in1Day = startOfDay(addDays(todayStart, 1));
          const twoDaysAgo = startOfDay(subDays(todayStart, 2));
          const threeDaysAgo = startOfDay(subDays(now, 3));
          const weeks2Ago = startOfDay(subDays(now, 14));
          const weeks2In = startOfDay(addDays(now, 14));
          const inTwoDays = endOfDay(addDays(now, 2));

          if (competitionConfig?.name === 'Friendlies') {
            if (
              isWithinInterval(matchLocalDate, {
                start: weeks2Ago,
                end: inTwoDays
              })
            ) {
              teamsPlayPostMatch.push(combinedMatch);
            }
          } else {
            if (
              isWithinInterval(matchLocalDate, {
                start: twoDaysAgo,
                end: in1Day
              })
            ) {
              teamsPlayPostMatch.push(combinedMatch);
            }
          }
        }
      }
    });

    // Fallback logic for no recent or upcoming games
    const closestMatchLeg = closestMatchData?.liveData?.matchDetails?.leg;
    const closestMatchWeek = closestMatchData?.matchInfo?.week;

    if (teamsPlayMatchday.length === 0) {
      teamsPlayMatchday.push(
        ...(matchdayMatches
          ?.filter(m => m.matchInfo?.week && m.matchInfo?.week === closestMatchWeek)
          .map(match => {
            const matchInfo = match?.matchInfo;
            const matchLiveDetails = match?.liveData?.matchDetails;
            return {
              ...matchInfo,
              ...matchLiveDetails
            };
          }) ?? [])
      );
    }

    if (teamsPlayMatchday.length === 0) {
      teamsPlayMatchday.push(
        ...(matchdayMatches
          ?.filter(m => m.liveData?.matchDetails?.leg && m.liveData?.matchDetails?.leg === closestMatchLeg)
          .map(match => {
            const matchInfo = match?.matchInfo;
            const matchLiveDetails = match?.liveData?.matchDetails;
            return {
              ...matchInfo,
              ...matchLiveDetails
            };
          }) ?? [])
      );
    }

    if (teamsPlayMatchday.length === 0 || _.isEmpty(teamsPlayMatchday?.[0])) {
      teamsPlayMatchday.push(
        ...(matchdayMatches?.slice(-4).map(match => {
          const matchInfo = match?.matchInfo;
          const matchLiveDetails = match?.liveData?.matchDetails;
          return {
            ...matchInfo,
            ...matchLiveDetails
          };
        }) ?? [])
      );
    }

    const forceUpdate = teamsPlayToday?.some(match => isWithinMatchTimeWindow(match, now));

    if (forceUpdate) {
      await Promise.all([
        UpdaterM.findOneAndUpdate(
          { feedType: matchesCacheKey },
          { forceUpdate: true },
          { lean: true, new: true, upsert: true }
        ).catch(err => LOGGER.error('Failed to update matchesCacheKey %o', err)),

        UpdaterM.findOneAndUpdate(
          { feedType: liveMatchesCacheKey },
          { forceUpdate: true },
          { lean: true, new: true, upsert: true }
        ).catch(err => LOGGER.error('Failed to update liveMatchesCacheKey %o', err))
      ]);
    }

    return {
      teamsPlayMatchday,
      teamsPlayPostMatch
    };
  }

  async getLastXMatchdays(lastGamesAmount) {
    await this.setTeamSchedule(true).catch(err => {
      console.error(err);
    });

    const gameInfo = await this.getGameInfo();
    const { side } = gameInfo;
    const secondSide = side === 'home' ? 'away' : 'home';

    const output = {
      home: [],
      away: []
    };

    //selectedTeamSide
    const currentMatchIndex = _.findIndex(this.apiData.teamSchedule, { id: parseInt(this.target.eventId, 10) });
    if (currentMatchIndex > -1) {
      _.times(lastGamesAmount, gameIndex => {
        const thisMatch = _.get(this.apiData.teamSchedule, currentMatchIndex);
        const thisMatchRound = parseInt(_.get(thisMatch, 'round'));
        const previousMatchRound = thisMatchRound - (gameIndex + 1);

        const previousMatch = _.find(this.apiData.teamSchedule, { round: previousMatchRound.toString() }, null);

        if (previousMatch) {
          output[side].push(previousMatch);
        }
      });
    }

    if (output[side].length) {
      output[side] = output[side].slice();
    }

    //oppositeSide
    const currentMatchIndexSecond = _.findIndex(this.apiData.teamScheduleAway, {
      id: parseInt(this.target.eventId, 10)
    });
    if (currentMatchIndexSecond > -1) {
      _.times(lastGamesAmount, gameIndex => {
        const thisMatch = _.get(this.apiData.teamScheduleAway, currentMatchIndexSecond);
        const thisMatchRound = parseInt(_.get(thisMatch, 'round'));
        const previousMatchRound = thisMatchRound - (gameIndex + 1);

        const previousMatch = _.find(this.apiData.teamScheduleAway, { round: previousMatchRound.toString() }, null);

        if (previousMatch) {
          output[secondSide].push(previousMatch);
        }
      });
    }

    if (output[secondSide].length) {
      output[secondSide] = output[secondSide].slice();
    }

    return output;
  }

  async getTeams() {
    await this.setContestants().catch(err => {
      console.error(err);
    });

    return this.teams;
  }

  async getMatches(teamIds = [], parsed = true, lang) {
    await this.setTeamSchedule(false, lang).catch(err => {
      console.error(err);
    });

    const matches = [];

    let matchDay = 0;
    _.forEach(this.apiData.tournamentSchedule, matchDate => {
      matchDay++;
      _.forEach(matchDate.match, match => {
        if (!match?.localDate) {
          match.localDate = match?.date.replace('Z', '');
          match.localTime = match?.time.replace('Z', '');
        }
        if (!teamIds?.length) {
          matches.push({
            ...match,
            _round: matchDay,
            _matchDateUtc: matchDate?.date
          });
        } else {
          if (teamIds.includes(match?.homeContestantId) || teamIds.includes(match?.awayContestantId)) {
            matches.push({
              ...match,
              _round: matchDay,
              _matchDateUtc: matchDate?.date
            });
          }
        }
      });
    });

    if (parsed) {
      return matches.map(value => {
        let date = new Date(`${value.date}${value.time}`);

        const startTime = format(date, 'HH:mm');
        const startDate = format(date, 'dd.MM.yyyy');

        return {
          eventId: String(value.id),
          competitionId: String(this.target.league),
          competitionName: 'tbi.',
          date: startDate,
          time: startTime,
          start_date: null,
          real_end_date: null,
          stadion: null,
          season: String(2022),
          round: String(value._round),
          home: {
            name: value?.homeContestantName || 'tbd.',
            id: String(value?.homeContestantId) || 'tbd.',
            shortcut: value?.homeContestantCode || 'tbd.'
          },
          away: {
            name: value.awayContestantName || 'tbd.',
            id: String(value.awayContestantId) || 'tbd.',
            shortcut: value?.awayContestantCode || 'tbd.'
          },
          score: {
            home: 0,
            away: 0
          },
          actual_time_name: null,
          actual_time_alias: null,
          status: null,
          results: null,
          teamId: this.target.teamId,
          _matchDateUtc: value?._matchDateUtc
        };
      });
    }

    return matches;
  }

  async getMatch(eventId) {
    const match = await this.setMatch(eventId).catch(err => {
      console.error(err);
    });

    return {
      matchInfo: _.get(match, 'match.0.matchInfo'),
      liveData: _.get(match, 'match.0.liveData')
    };
  }

  async getMatchById(eventId, onlyMatchInfo = true) {
    const indicator = config.feeds.opta.data.fixtures.match;
    const dataCall = indicator.url.replace('[[EVENTID]]', eventId);

    const dataRes = await this.apiCall(
      {
        url: dataCall
      },
      { indicator }
    );

    if (onlyMatchInfo) {
      return _.get(dataRes, 'match.0.matchInfo');
    }
    return _.get(dataRes, 'match.0');
  }

  async getMatchesBetweenTwo(homeTeamId, awayTeamId) {
    const indicator = config.feeds.opta.data.fixtures.matchesAllCompetitionsBetweenTwo;
    const dataCall = indicator.url.replace('[[TEAM_1]]', homeTeamId)
      .replace('[[TEAM_2]]', awayTeamId);

    const dataRes = await this.apiCall(
      {
        url: dataCall
      },
      { indicator }
    );
    return dataRes;
  }

  async getMatchesForRange(teamId) {
    const indicator = config.feeds.opta.data.fixtures.matchesAllCompetitionsOneRange;
    let currentDate = new Date().toISOString();
    currentDate = currentDate.split('.')[0] + 'Z';
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    let oneYearAgoISO = oneYearAgo.toISOString();
    oneYearAgoISO = oneYearAgoISO.split('.')[0] + 'Z';
    const dataCall = indicator.url.replace('[[TEAM]]', teamId)
      .replace('[[DATERANGE_FROM]]', oneYearAgoISO)
      .replace('[[DATERANGE_TO]]', currentDate);

    const dataRes = await this.apiCall(
      {
        url: dataCall
      },
      { indicator }
    );
    return dataRes;
  }

  async getStandingTable(teamId) {
    await this.setStanding().catch(err => {
      console.error(err);
    });

    // Iterate through all stages
    const stages = this.apiData.standing?.stage || [];

    // Store the divisions with appended parent (stage) data
    let groupsTotalWithParentData = [];

    stages.forEach(stage => {
      // Filter divisions of type 'total' for the current stage
      const groupsTotal = stage?.division.filter(i => i.type === 'total');

      const groupsWithParentData = groupsTotal.map(division => ({
        ...division,
        stageId: stage.id,
        formatId: stage.formatId,
        stageName: stage.name,
        vertical: stage.vertical,
        horizontal: stage.horizontal,
        startDate: stage.startDate,
        endDate: stage.endDate,
        correction: stage.correction
      }));

      // Add the processed divisions to the final array
      groupsTotalWithParentData = [...groupsTotalWithParentData, ...groupsWithParentData];
    });
    // If a specific teamId is provided, return the specific group containing the team's ranking
    if (teamId) {
      return _.find(groupsTotalWithParentData, i => {
        return _.find(i.ranking, { contestantId: teamId });
      });
    }

    // Otherwise return all divisions with parent data
    return groupsTotalWithParentData;
  }


  async getAllMatchdays() {
    return new Promise(async (resolve, reject) => {
      const allTeams = await this.getTeams().catch(err => {
        console.error(err);
      });

      const allMatchdays = [];

      async.eachSeries(
        allTeams,
        (team, callback) => {
          (async () => {
            const teamId = _.get(team, 'teamId');

            const indicator = config.feeds.del.data.teamSchedule;

            const apiCall = indicator.url
              .replace('[[SEASON]]', this.target.season)
              .replace('[[LEAGUE]]', this.target.league)
              .replace('[[TEAMID]]', teamId);

            const callResults = await this.apiCall(
              {
                url: apiCall
              },
              { indicator }
            );

            if (callResults && callResults.matches) {
              allMatchdays.push(...callResults.matches);
            }

            callback();
          })().catch(err => {
            callback(err);
          });
        },
        function (err) {
          if (err) {
            console.error(err.message);
          }
          resolve(allMatchdays);
        }
      );
    });
  }

  async getRoundOverview(round, selectedTeam) {
    const allMatchdays = await this.getAllMatchdays().catch(err => {
      console.error(err);
    });

    const unique = [];

    const filterRound = _.filter(allMatchdays, matchday => {
      const id = _.get(matchday, 'id');

      if (unique.indexOf(id) === -1) {
        unique.push(id);
      } else {
        return false;
      }

      return String(matchday.round) === String(round);
    });

    filterRound.sort(function (x, y) {
      const xDate = new Date(x.start_date).getTime();
      const yDate = new Date(y.start_date).getTime();

      return xDate - yDate;
    });

    const findSelectedTeam = _.findIndex(filterRound, item => {
      return item.home.id == selectedTeam || item.guest.id == selectedTeam;
    });

    //selected team always on begining
    const selectedTeamEntry = _.cloneDeep(filterRound[findSelectedTeam]);
    filterRound.splice(findSelectedTeam, 1);
    filterRound.unshift(selectedTeamEntry);

    return filterRound;
  }

  setStanding() {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const indicator = config.feeds.opta.data.tournament.standings;

      const apiCall = indicator.url.replace('[[LEAGUE]]', this.target.league);

      const callResults = await this.apiCall(
        {
          url: apiCall
        },
        { indicator }
      );

      _.set(this.apiData, `standing`, callResults);

      resolve();
    });
  }


  async getGoalShotsCords(callOptions) {
    const that = this;
    const liveMatchEvents = await this.setLiveMatchEvents(callOptions).catch(err => {
      console.error(err);
    });

    const qualifierToGoalPosition = {
      76: 'Low Left',
      77: 'High Left',
      78: 'Low Centre',
      79: 'High Centre',
      80: 'Low Right',
      81: 'High Right',
      82: 'Blocked'
      // 83: 'Close Left',
      // 84: 'Close Right',
      // 85: 'Close High',
      // 86: 'Close Left and High',
      // 87: 'Close Right and High'
    };

    const qualifierToGoalCords = {
      102: 'Goalmouth Y Coordinate',
      103: 'Goalmouth Z Coordinate'
    };

    const typeIdToLabel = {
      // 13: 'Miss',
      14: 'Post',
      15: 'Attempt Saved',
      16: 'Goal'
    };

    const events = _.get(liveMatchEvents, 'liveData.event', []);

    const filtered = events
      .filter(i => {
        if (
          Object.keys(typeIdToLabel)
            .map(o => Number(o))
            .includes(i?.typeId)
        ) {
          const findQualifiers = _.find(i.qualifier, o => {
            return [...Object.keys(qualifierToGoalCords)].map(o => Number(o)).includes(o.qualifierId);
          });

          const excludeBlocked = _.find(i.qualifier, o => {
            return [82].includes(o.qualifierId);
          });

          if (findQualifiers && !excludeBlocked) {
            return true;
          }
        }
        return false;
      })
      .map(o => {
        const goalY = _.find(o.qualifier, { qualifierId: 102 })?.value || null;
        const goalZ = _.find(o.qualifier, { qualifierId: 103 })?.value || null;

        const checkGoalPosition = _.find(o.qualifier, e => {
          return [...Object.keys(qualifierToGoalPosition)].map(e => Number(e)).includes(e.qualifierId);
        });

        const isOwnGoal = Boolean(
          _.find(o.qualifier, e => {
            return [28].map(e => Number(e)).includes(e.qualifierId);
          })
        );

        const isPenalty = Boolean(
          _.find(o.qualifier, e => {
            return [9].map(e => Number(e)).includes(e.qualifierId);
          })
        );

        delete o.qualifier;
        return {
          ...o,
          goalY,
          goalZ,
          eventTypeLabel: typeIdToLabel?.[o.typeId],
          goalPositionLabel: qualifierToGoalPosition?.[checkGoalPosition?.qualifierId],
          isOwnGoal,
          isPenalty
        };
      });

    return filtered;
  }

  async getGoalShots(callOptions) {
    const that = this;
    const liveMatchEvents = await this.setLiveMatchEvents(callOptions).catch(err => {
      console.error(err);
    });

    const qualifierToGoalPosition = {
      24: 'Set piece',
      26: 'Free kick',
      29: 'Assisted',
      60: 'Small box - Right',
      73: 'Left',
      76: 'Low Left',
      77: 'High Left',
      78: 'Low Centre',
      79: 'High Centre',
      80: 'Low Right',
      81: 'High Right',
      82: 'Blocked',
      83: 'Close Left',
      84: 'Close Right',
      85: 'Close High',
      86: 'Close Left and High',
      87: 'Close Right and High',
      89: '1 on 1',
      94: 'Def block',
      214: 'Big chance',
      215: 'Individual play',
      263: 'Direct corner',
      273: 'Hit Right Post',
      274: 'Hit Left Post',
      275: 'Hit Bar',
    };

    const qualifierToGoalCords = {
      102: 'Goalmouth Y Coordinate',
      103: 'Goalmouth Z Coordinate'
    };

    const typeIdToLabel = {
      10: 'Save',
      11: 'Claim',
      12: 'Clearance',
      13: 'Miss',
      14: 'Post',
      15: 'Attempt Saved',
      16: 'Goal',
      41: 'Punch',
      42: 'Good skill',
      45: 'Challenge',
      49: 'Ball recovery',
      50: 'Dispossessed',
      51: 'Error',
      52: 'Keeper pick-up',
      53: 'Cross not claimed',
      54: 'Smother',
      55: 'Offside provoked',
      56: 'Shield ball opp',
      60: 'Chance missed',
      61: 'Ball touch',
      72: 'Caught Offside',
      74: 'Blocked Pass',
      44: 'Aerial',
      59: 'Keeper Sweeper'
    };

    const events = _.get(liveMatchEvents, 'liveData.event', []);

    const filtered = events
      .filter(i => {
        if (
          Object.keys(typeIdToLabel)
            .map(o => Number(o))
            .includes(i?.typeId)
        ) {
          const findQualifiers = _.find(i.qualifier, o => {
            return [...Object.keys(qualifierToGoalCords)].map(o => Number(o)).includes(o.qualifierId);
          });

          const excludeBlocked = _.find(i.qualifier, o => {
            return [82].includes(o.qualifierId);
          });

          if (findQualifiers && !excludeBlocked) {
            return true;
          }
        }
        return false;
      })
      .map(o => {
        const goalY = _.find(o.qualifier, { qualifierId: 102 })?.value || null;
        const goalZ = _.find(o.qualifier, { qualifierId: 103 })?.value || null;

        const checkHotZone = _.find(o.qualifier, e => {
          return [...Object.keys(qualifierToGoalPosition)].map(e => Number(e)).includes(e.qualifierId);
        });

        delete o.qualifier;
        return {
          ...o,
          goalY,
          goalZ,
          eventTypeLabel: typeIdToLabel?.[o.typeId],
          goalPositionLabel: qualifierToGoalPosition?.[checkHotZone?.qualifierId],
        };
      });

    return filtered;
  }

  async getDangerousActions(callOptions, matchInfo, selectedValue) {
    const that = this;
    const liveMatchEvents = await this.setLiveMatchEvents(callOptions).catch(err => {
      console.error(err);
    });

    const qualifierPassActions = {
      2: 'Cross',
      4: 'Through Ball',
      156: 'Lay Off'
    }

    const passTypeId = {
      1: 'Pass'
    };

    const shootingTypeIds = {
      13: 'Missed Shots',
      14: 'Shot on Post',
      15: 'Saved Shot',
      16: 'Goal'
    }

    const defensiveTypeIds = {
      3: 'Take On',
      4: 'Fouls Won',
      44: 'Aerials Won',
      7: 'Tackle',
      8: 'Interception'
    }
    const home = matchInfo?.contestant?.[0];
    const away = matchInfo?.contestant?.[1];
    const teamId = selectedValue === "home" ? home?.id : away?.id;
    const events = _.get(liveMatchEvents, 'liveData.event', []);
    const passData = []; // array of arrays, one per goal
    const goalIndices = [];

    // First, collect all goal indices (reverse order to find last ones first)
    for (let i = events.length - 1; i >= 0; i--) {
      if (events[i].typeId === 16) {
        goalIndices.push(i);
        if (goalIndices.length === 3) break; // Only last 3 goals
      }
    }

    // For each goal index, find the 3 passes before it
    for (let g = 0; g < goalIndices.length; g++) {
      const goalIndex = goalIndices[g];
      const passes = [];

      for (let i = goalIndex - 1; i >= 0; i--) {
        const event = events[i];

        // Check for valid pass qualifier
        const isPass = _.some(event.qualifier, o =>
          Object.keys(qualifierPassActions).map(Number).includes(o.qualifierId)
        );

        const correctTeam = event.contestantId === teamId;

        if (isPass && correctTeam) {
          const x = parseFloat(_.find(event.qualifier, { qualifierId: 140 })?.value || "");
          const y = parseFloat(_.find(event.qualifier, { qualifierId: 141 })?.value || "");

          if (isNaN(x) || isNaN(y) || x < 50) continue;
          passes.unshift({
            ...event,
            destPosX: x,
            destPosY: y
          });

          if (passes.length === 3) break; // Stop after 3 passes
        }
      }

      passData.push(passes);
    }
    const allPasses = [].concat.apply([], passData);

    const passEvents = events
      .filter(i => {
        if (Object.keys(passTypeId)
          .map(o => Number(o))
          .includes(i?.typeId)) {
          const findQualifiers = _.find(i.qualifier, o => {
            return [...Object.keys(qualifierPassActions)].map(o => Number(o)).includes(o.qualifierId);
          });
          const excludeBlocked = _.find(i.qualifier, o => {
            return [82].includes(o.qualifierId);
          });

          if (findQualifiers && !excludeBlocked) {
            return true;
          }
        }
        return false;
      })
      .map(o => {
        const x = parseFloat(_.find(o.qualifier, { qualifierId: 140 })?.value || "");
        const y = parseFloat(_.find(o.qualifier, { qualifierId: 141 })?.value || "");

        if (isNaN(x) || isNaN(y) || x < 50) return null;
        delete o.qualifier;
        return {
          ...o,
          destPosX: x,
          destPosY: y,
        };
      })
      .filter(Boolean); // ✅ Remove nulls from map result

    const goalEvents = events
      .filter(i => {
        if (Object.keys(shootingTypeIds)
          .map(o => Number(o))
          .includes(i?.typeId)) {

          const excludeBlocked = _.find(i.qualifier, o => {
            return [82].includes(o.qualifierId);
          });

          if (!excludeBlocked) {
            return true;
          }
        }
        return false;
      })
      .map(o => {
        const x = o.x;
        const y = o.y;

        if (isNaN(x) || isNaN(y) || x < 50) return null;
        delete o.qualifier;
        return {
          ...o,
          destPosX: x,
          destPosY: y,
        };
      })
      .filter(Boolean); // ✅ Remove nulls from map result


    const defensiveEvents = events
      .filter(i => {
        if (Object.keys(defensiveTypeIds)
          .map(o => Number(o))
          .includes(i?.typeId)) {

          const excludeBlocked = _.find(i.qualifier, o => {
            return [82].includes(o.qualifierId);
          });

          if (!excludeBlocked) {
            return true;
          }
        }
        return false;
      })
      .map(o => {
        const x = o.x;
        const y = o.y;

        if (isNaN(x) || isNaN(y) || x < 50) return null;

        if (o.typeId === 4 || o.typeId === 44) {
          if (o.outcome !== 1) return null;
        }

        delete o.qualifier;
        return {
          ...o,
          destPosX: x,
          destPosY: y,
        };
      })
      .filter(Boolean); // ✅ Remove nulls from map result
    const allEvents = [...allPasses, ...goalEvents, ...defensiveEvents];
    return allEvents;
  }



  getLiveMatches(week = 1) {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const indicator = config.feeds.opta.data.fixtures.matches_week_live;
      const apiCall = indicator.url.replace('[[LEAGUE]]', league).replace('[[WEEK]]', week);
      // .replace('[[DATERANGE_FROM]]', dateFrom)
      // .replace('[[DATERANGE_TO]]', dateTo);

      const callResults = await this.apiCall(
        {
          url: apiCall
        },
        { indicator }
      ).catch(err => {
        LOGGER.error(err);
      });

      // _.set(this.apiData, `matchdays`, callResults?.match || []);
      // _.set(this.apiData, `matchdays.stage`, callResults?.stage);

      resolve(callResults?.match);
    });
  }

  /*
  * stage: {
    id: 'ebmrggkdccvakg5slnbyw20b8',
    formatId: '614sqb9421oaflw5mpvvm9uj9',
    startDate: '2024-02-13Z',
    endDate: '2024-03-13Z',
    name: '8th Finals'
  }
  * */
  getLiveMatchesByStage(stage = null) {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;
      const indicator = config.feeds.opta.data.fixtures.matches_week_stg;
      const apiCall = indicator.url.replace('[[LEAGUE]]', league).replace('[[STAGE]]', stage.id);

      const callResults = await this.apiCall(
        {
          url: apiCall
        },
        { indicator }
      ).catch(err => {
        LOGGER.error(err);
      });

      // _.set(this.apiData, `matchdays`, callResults?.match || []);
      // _.set(this.apiData, `matchdays.stage`, callResults?.stage);

      resolve(callResults?.match);
    });
  }

  async getSeasonExpectedGoals(teamId) {
    const that = this;
    const indicator = config.feeds.opta.data.tournament.seasonExpectedGoals;
    const dataCall = indicator.url
      .replace('[[LEAGUE]]', this.target.league)
      .replace('[[TEAMID]]', teamId ?? this.target.teamId);

    const dataRes = await this.apiCall(
      {
        url: dataCall
      },
      { indicator }
    );

    return dataRes;
  }

  async getGoalsEvents(callOptions) {
    const liveMatchEvents = await this.setLiveMatchEvents(callOptions, true).catch(err => {
      console.error(err);
    });

    if (!liveMatchEvents) {
      return [];
    }

    const qualifierToGoalPosition = {
      76: 'Low Left',
      77: 'High Left',
      78: 'Low Centre',
      79: 'High Centre',
      80: 'Low Right',
      81: 'High Right',
      82: 'Blocked'
      // 83: 'Close Left',
      // 84: 'Close Right',
      // 85: 'Close High',
      // 86: 'Close Left and High',
      // 87: 'Close Right and High'
    };

    const qualifierToGoalCords = {
      102: 'Goalmouth Y Coordinate',
      103: 'Goalmouth Z Coordinate'
    };

    const typeIdToLabel = {
      // 13: 'Miss',
      // 14: 'Post',
      // 15: 'Attempt Saved',
      16: 'Goal'
    };

    const liveData = _.get(liveMatchEvents, 'liveData', null);
    const events = _.get(liveMatchEvents, 'liveData.event', []);
    const matchDetails = _.get(liveMatchEvents, 'liveData.matchDetails', null);
    const matchInfo = _.get(liveMatchEvents, 'matchInfo', null);
    const contestants = matchInfo?.contestant;
    const homeTeam = contestants.find(c => c.position === "home");
    const awayTeam = contestants.find(c => c.position === "away");

    const homeTeamId = homeTeam.id;
    const awayTeamId = awayTeam.id;

    let homeScore = 0;
    let awayScore = 0;
    const filtered = events
      .filter(i => {
        if (
          Object.keys(typeIdToLabel)
            .map(o => Number(o))
            .includes(i?.typeId)
        ) {
          const findQualifiers = _.find(i.qualifier, o => {
            return [...Object.keys(qualifierToGoalCords)].map(o => Number(o)).includes(o.qualifierId);
          });

          const excludeBlocked = _.find(i.qualifier, o => {
            return [82].includes(o.qualifierId);
          });

          if (findQualifiers && !excludeBlocked) {
            return true;
          }
        }
        return false;
      })
      .map(o => {
        const goalY = _.find(o.qualifier, { qualifierId: 102 })?.value || null;
        const goalZ = _.find(o.qualifier, { qualifierId: 103 })?.value || null;

        const checkGoalPosition = _.find(o.qualifier, e => {
          return [...Object.keys(qualifierToGoalPosition)].map(e => Number(e)).includes(e.qualifierId);
        });

        const isOwnGoal = Boolean(
          _.find(o.qualifier, e => {
            return [28].map(e => Number(e)).includes(e.qualifierId);
          })
        );

        const isPenalty = Boolean(
          _.find(o.qualifier, e => {
            return [9].map(e => Number(e)).includes(e.qualifierId);
          })
        );

        delete o.qualifier;
        // calculate score
        if (isOwnGoal) {
          if (o.contestantId === homeTeamId) {
            awayScore++;
          } else if (o.contestantId === awayTeamId) {
            homeScore++;
          }
        } else {
          if (o.contestantId === homeTeamId) {
            homeScore++;
          } else if (o.contestantId === awayTeamId) {
            awayScore++;
          }
        }
        return {
          ...o,
          goalY,
          goalZ,
          eventTypeLabel: typeIdToLabel?.[o.typeId],
          goalPositionLabel: qualifierToGoalPosition?.[checkGoalPosition?.qualifierId],
          isOwnGoal,
          isPenalty,
          scores: matchDetails?.scores || [],
          currentScores: {
            total: {
              home: homeScore,
              away: awayScore
            }
          }
        };
      });

    return filtered;
  }

  async getMomentum(eventId) {
    const indicator = config.feeds.opta.data.prediction.momentum;
    const dataCall = indicator.url.replace('[[EVENT_ID]]', eventId ?? this.target.eventId);

    const dataRes = await this.apiCall(
      {
        url: dataCall
      },
      { indicator }
    );
    return _.get(dataRes, 'liveData');
    if (onlyMatchInfo) {
      return _.get(dataRes, 'match.0.matchInfo');
    }
    return _.get(dataRes, 'match.0');
  }
}

module.exports = Feed;
