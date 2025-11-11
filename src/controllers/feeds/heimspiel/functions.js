const _ = require('lodash');
const axios = require('axios');
const config = require('../../../config');
const BaseClass = require('./index');
const { promise } = require('bcrypt/promises');
const async = require('async');
const cfg = require('@/src/config');
const UpdaterM = require('../../../models/updater');
const { getUniqueTeams, getMatchesByTeam, getTopPlayerSeason, runWithConcurrencyLimit, getTeamSeason, getTopPerformersSeason, getClosestMatchFromNow } = require('./helpers');
const { format, parse, subMinutes, addHours, isWithinInterval, parseISO, isSameDay, differenceInMinutes, startOfDay, endOfDay, addDays, subDays } = require('date-fns');
const { isOlderThanDelay } = require('../opta/helpers');
const { prepareMatchDateForBild } = require('../../actions/helpers');
const { utcToZonedTime, zonedTimeToUtc } = require('date-fns-tz');
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 1 day in milliseconds

function isWithinMatchTimeWindow(match, now) {
  if (!match) return false; // No match provided

  // Use the helper function to prepare the match's ISO string
  const matchIsoString = prepareMatchDateForBild({
    date: match?.match_date,
    time: match?.match_time
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

class Feed extends BaseClass {
  constructor({ target, client }) {
    super('data', client);

    this.target = {
      season: target?.season || config.season,
      league: _.get(target, 'league', null),
      teamId: _.get(target, 'teamId', null),
      countryId: _.get(target, 'countryId', null),
      eventId: _.get(target, 'eventId', null),
      olympicSeason: _.get(target, 'olympicSeason', 'to5229'),
      seasonId: _.get(target, 'seasonId', 'se94724'), // se94724
      roundId: _.get(target, 'roundId', 'ro262400'),  // ro262400
      nextSeasonId: _.get(target, 'nextSeasonId', 'se94724'), // 
      nextRoundId: _.get(target, 'nextRoundId', 'ro262400'), // 
    };
    this.client = client;
    this.apiData = {};
  }

  async getBildSeasonRound(isNextSeason) {
    const indicator = config.feeds.heimspiel.data.matchesBySeason;
    const callUrl = indicator.url
      .replace('[[SID]]', isNextSeason ? this.target.nextSeasonId : this.target.seasonId)
      .replace('[[RID]]', isNextSeason ? this.target.nextRoundId : this.target.roundId);
    const call = await this.apiCall({
      url: callUrl
    }, { indicator })
    const seasonCompetition = call[0];
    const competition = seasonCompetition?.competition?.[0];
    const seasons = competition?.season;
    const season = seasons[0];
    const rounds = season?.round;
    const round = rounds[0];
    return round;
  }

  async getBildSeasonMatches(isNextSeason = false) {
    const round = await this.getBildSeasonRound(isNextSeason);
    const { match } = round; // id is roundId

    return match;
  }


  async getBildTeams(tid) {
    const match = await this.getBildSeasonMatches();
    // get the list of the teams here
    const teams = getUniqueTeams(match);
    let matches = [];
    matches = getMatchesByTeam(match, tid);

    return { teams, matches };
  }

  async getSeasonGames() {
    const indicator = config.feeds.heimspiel.data.matchesBySeason;
    const callUrl = indicator.url.replace('[[SID]]', this.target.seasonId).replace('[[RID]]', this.target.roundId);
    const call = await this.apiCall({
      url: callUrl
    }, { indicator })
    const seasonCompetition = call[0];
    const competition = seasonCompetition?.competition?.[0];
    const seasons = competition?.season;
    const season = seasons[0];
    const rounds = season?.round;
    const round = rounds[0];
    const { current_matchday, match, id } = round; // id is roundId
    // get the list of the teams here

    const allTeams = getUniqueTeams(match);
    for (const matchItem of match) {
      const { id: matchId, match_date, match_time, home, away, match_result } = matchItem;
      // calculate score based on match_result
      const finalScores = match_result.filter((ms) => ms.match_result_at === "0");
      const homeScore = finalScores.find((s) => s.place === 'home')?.match_result;
      const awayScore = finalScores.find((s) => s.place === 'away')?.match_result;
      const score = {
        home: homeScore,
        away: awayScore
      }
    }
  }

  // [gameInfo, gameRoster, gameEvents, playerStats, teamStats, allGoalies]
  async getOlympicMedals(params) {
    const indicator = config.feeds.heimspiel.data.medals;

    const callUrl = indicator.url.replace('[[OLYMPIC_SEASON]]', this.target.olympicSeason).replace('[[LIMIT]]', `li${params?.limit}`);

    const call = await this.apiCall(
      {
        url: callUrl
      },
      { indicator }
    );

    return call;
  }

  async setLiveMatchStats(detailed = true) {
    const indicator = config.feeds.heimspiel.data.matchDetails;

    const allGoaliesCall = indicator.url
      .replace('[[MATCHID]]', this.target.eventId)
    const matchDetails = await this.apiCall(
      {
        url: allGoaliesCall
      },
      { indicator }
    );
    const matchDetail = matchDetails?.[0];
    if (!matchDetail) return;
    const match = _.get(matchDetail, 'competition[0].season[0].round[0].match[0]', null)
    return match;
  }

  async getMatchById(id) {
    const indicator = config.feeds.heimspiel.data.matchDetails;

    const callUrl = indicator.url
      .replace('[[MATCHID]]', id ?? this.target.eventId)
    const matchDetails = await this.apiCall(
      {
        url: callUrl
      },
      { indicator }
    );
    const matchDetail = matchDetails?.[0];
    if (!matchDetail) return;
    const match = _.get(matchDetail, 'competition[0].season[0].round[0].match[0]', null)
    return match;
  }

  async getMatchesByIds(ids) {
    const tasks = ids.map(id => () => this.getMatchById(id));

    const results = await runWithConcurrencyLimit(tasks, 3);
    const matches = [];
    for (const result of results) {
      if (result.status === 'fulfilled') {
        matches.push(result.value);
      } else {
        console.error('Failed:', result.reason);
      }
    }
    return matches;
  }

  async getTeamLastGames(teamSide = 'home') {
    const currentMatch = await this.getMatchById().catch(err => {
      console.error(err);
    });

    const targetTeam = teamSide === 'home' ? currentMatch.home.id : currentMatch.away.id;

    // we are not able to get last games of different competitions
    // we are dealing only with Bundesliga

    const seasonMatches = await this.getBildSeasonMatches();
    const matchesForTeam = seasonMatches.filter((t) => t.home.id === targetTeam || t.away.id === targetTeam);
    const teamMatches = matchesForTeam?.filter((m) => m.finished === 'yes');

    const feedsMatches = teamMatches.map(m => {
      return {
        competitionId: '12',
        date: format(parse(m?.match_date.replace('Z', ''), 'dd.MM.yyyy', new Date()), 'MM/dd/yyyy'),
        matchDate: format(parse(m?.match_date.replace('Z', ''), 'dd.MM.yyyy', new Date()), 'dd.MM'),
        matchTime: m?.match_time,
        homeId: m?.home?.id,
        awayId: m?.away?.id,
        homeName: m?.home?.name,
        awayName: m?.away?.name,
        scoreHome: m?.match_result?.find((ms) => ms?.match_result_at === '0' && ms?.place === 'home')?.match_result,
        scoreAway: m?.match_result?.find((ms) => ms?.match_result_at === '0' && ms?.place === 'away')?.match_result,
        homeTeam: m?.home,
        awayTeam: m?.away
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
    );

    return combinedSorted.slice(0, 5) || [];
  }

  async getTeamNextGames(teamSide = 'home') {
    const currentMatch = await this.getMatchById().catch(err => {
      console.error(err);
    });

    const targetTeam = teamSide === 'home' ? currentMatch.home.id : currentMatch.away.id;

    // we are not able to get last games of different competitions
    // we are dealing only with Bundesliga

    const seasonMatches = await this.getBildSeasonMatches();
    // if we don't have enough upcoming matches for current season
    // need to look into next season matches
    const matchesForTeam = seasonMatches.filter((t) => t.home.id === targetTeam || t.away.id === targetTeam);
    const teamMatches = matchesForTeam?.filter((m) => m.finished === 'no');
    const upcomingMatchesCurrentSeason = [...teamMatches];
    if (upcomingMatchesCurrentSeason.length < 5) {
      // push next matches how many ?
      const missingLen = 5 - upcomingMatchesCurrentSeason.length;
      const upcomingMatches = await this.getBildSeasonMatches(true);
      const nextSeasonMatches = upcomingMatches.filter((t) => t.home.id === targetTeam || t.away.id === targetTeam);
      const nextMatches = nextSeasonMatches?.filter((m) => m.finished === 'no')?.slice(0, missingLen);
      upcomingMatchesCurrentSeason.push(...nextMatches)
    }
    const feedsMatches = upcomingMatchesCurrentSeason.map(m => {
      return {
        competitionId: '12',
        date: format(parse(m?.match_date.replace('Z', ''), 'dd.MM.yyyy', new Date()), 'MM/dd/yyyy'),
        matchDate: format(parse(m?.match_date.replace('Z', ''), 'dd.MM.yyyy', new Date()), 'dd.MM'),
        matchTime: m?.match_time,
        homeId: m?.home?.id,
        awayId: m?.away?.id,
        homeName: m?.home?.name,
        awayName: m?.away?.name,
        scoreHome: m?.match_result?.find((ms) => ms?.match_result_at === '0' && ms?.place === 'home')?.match_result,
        scoreAway: m?.match_result?.find((ms) => ms?.match_result_at === '0' && ms?.place === 'away')?.match_result,
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

  async getTopPlayer(ids, teamId) {
    const matches = await this.getMatchesByIds(ids);
    const { topPlayer } = getTopPlayerSeason(matches, teamId);
    return topPlayer;
  }

  async getPositionValues() {
    const indicator = config.feeds.heimspiel.data.positionValues;

    const callUrl = indicator.url;
    const positionValues = await this.apiCall(
      {
        url: callUrl
      },
      { indicator }
    );
    return positionValues;
  }

  // TODO:
  // For now, looping all games and find top scores of each team, and combining them together
  // Is there any better way to get them all in once ?
  async getSeasonTopPerformers() {
    const seasonMatches = await this.getBildSeasonMatches();
    const teams = getUniqueTeams(seasonMatches);
    const teamIds = teams?.map((t) => t.id);
    const allMatchIds = seasonMatches?.map((m) => m.id);
    const matches = await this.getMatchesByIds(allMatchIds);
    const { topPlayers } = getTopPerformersSeason(matches, teamIds);
    return topPlayers;
  }

  async getTeamCompareSeason(ids, teamId) {
    const matches = await this.getMatchesByIds(ids);
    return getTeamSeason(matches, teamId)
  }

  async getMVP(match) { //getMVP
    const { match_result, home, away } = match;
    const scores = {
      home: match_result.find((m) => m.match_result_at === '0' && m.place === 'home')?.match_result,
      away: match_result.find((m) => m.match_result_at === '0' && m.place === 'away')?.match_result,
    }
    const homeScore = parseInt(scores.home);
    const awayScore = parseInt(scores.away);
    const homeId = home.id;
    const awayId = away.id

    let winningTimeIndex = homeScore > awayScore ? 0 : 1;

    let sorted = [];
    // personStatsByMatch
    const indicatorPByM = config.feeds.heimspiel.data.personStatsByMatch;

    const callUrlForPByM = indicatorPByM.url
      .replace('[[MATCHID]]', this.target.eventId)
    const personByMatchs = await this.apiCall(
      {
        url: callUrlForPByM
      },
      { indicator: indicatorPByM }
    );
    const personByMatch = personByMatchs;

    const homePlayers = personByMatch.filter((p) => p.team.id === homeId);
    const awayPlayers = personByMatch.filter((p) => p.team.id === awayId);


    const targetTeam = winningTimeIndex === 0 ? homePlayers : awayPlayers;
    sorted = _.orderBy(
      targetTeam,
      function (obj) {
        const playerStats = obj;
        const goals = _.get(playerStats, 'score') || 0;
        const assists = _.get(playerStats, 'assists') || 0;
        const touches = _.get(playerStats, 'balls_touched') || 0;
        return [parseFloat(goals) || 0, parseFloat(assists) || 0, parseFloat(touches) || 0];
      },
      ['desc', 'desc', 'desc']
    );

    const mvp = sorted?.[0];

    if (mvp?.person?.id) {
      mvp.playerId = mvp.person?.id;
    }
    return mvp?.playerId
      ? {
        mvp,
        winningTimeIndex
      }
      : null;
  }

  async getMatches(teamIds = [], parsed = true, lang) {

    const matches = [];
    const apiMatches = await this.getBildSeasonMatches();
    for (const match of apiMatches) {
      // Filter by teamIds if provided
      if (
        !teamIds?.length ||
        teamIds.includes(String(match?.home?.id)) ||
        teamIds.includes(String(match?.away?.id))
      ) {
        matches.push(match);
      }
    }

    if (!parsed) {
      return matches;
    }

    // Map to parsed/normalized structure
    return matches.map(value => {
      // Parse the date and time (given as dd.MM.yyyy and HH:mm)
      const dateTime = parse(
        `${value.match_date} ${value.match_time}`,
        'dd.MM.yyyy HH:mm',
        new Date()
      );

      const startTime = format(dateTime, 'HH:mm');
      const startDate = format(dateTime, 'dd.MM.yyyy');

      return {
        eventId: String(value.id),
        competitionId: String(this.target.league),
        competitionName: this.target?.competitionName || 'tbd.',
        date: startDate,
        time: startTime,
        start_date: null, // if available in API, map it
        real_end_date: null, // if available in API, map it
        stadion: value?.venue?.name || null,
        season: String(this.target?.season || new Date().getFullYear()),
        round: String(value?.matchday || ''),
        home: {
          name: value?.home?.name || 'tbd.',
          id: String(value?.home?.id) || 'tbd.',
          shortcut: value?.home?.microname || value?.home?.shortname || 'tbd.'
        },
        away: {
          name: value?.away?.name || 'tbd.',
          id: String(value?.away?.id) || 'tbd.',
          shortcut: value?.away?.microname || value?.away?.shortname || 'tbd.'
        },
        score: {
          home: value?.match_result?.[0]?.result_goals ?? 0,
          away: value?.match_result?.[1]?.result_goals ?? 0
        },
        actual_time_name: value?.live_status || null,
        actual_time_alias: value?.finished || null,
        status: value?.finished || null,
        results: value?.match_result || null,
        teamId: this.target?.teamId,
      };
    });
  }



  //get game to focus based on time and schedule
  async getClosestMatchFromSchedule(now, teamIds = [], competitionConfig = {}) {
    const isCurrentScheduleExists = await UpdaterM.findOne(
      {
        'event.season': this.target.season,
        feedType: `bild-schedule-${this.target.league}`
      },
      null,
      {
        lean: true
      }
    );

    let matches = null;
    const isOutdated = isOlderThanDelay(isCurrentScheduleExists?.updatedAt, ONE_DAY_IN_MS);

    matches = await this.getMatches([], false).catch(err => {
      console.error(err);
    });

    await UpdaterM.findOneAndUpdate(
      {
        'event.season': this.target.season,
        feedType: `bild-schedule-${this.target.league}`
      },
      {
        data: matches,
        event: {
          competitionId: this.target.league,
          season: this.target.season,
          eventId: 'GENERIC'
        },
        feedType: `bild-schedule-${this.target.league}`,
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
    const matchesCacheKey = `bild-match-by-id-${closestMatch?.id}`;
    let matchesMa1 = await UpdaterM.findOne({ feedType: matchesCacheKey }, null, { lean: true });
    const closestInRange = isWithinMatchTimeWindow(closestMatch, now);
    const nextClosestInRange = isWithinMatchTimeWindow(nextClosest, now);

    matchesMa1 = await this.getMatchesByIds(matchesToQuery).catch(console.error);

    if (matchesMa1 && Array.isArray(matchesMa1)) {
      matchesMa1 = matchesMa1.map(match => {
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


    const closestMatchData = _.find(matchesMa1, f => f?.id === closestMatch?.id);
    const nextMatchData = _.find(matchesMa1, f => f?.id === nextClosest?.id);
    const prevMatchData = _.find(matchesMa1, f => f?.id === prevClosest?.id);
    const currentWeek = closestMatchData?.matchday;

    const competitionFormat = competitionConfig?.competitionFormat;

    let matchdayMatches = [];
    // Cache for getLiveMatchesByStage

    matchdayMatches = matches.filter((f) => f.matchday === currentWeek);
    let teamsPlayToday = [];
    let teamsPlayMatchday = [];
    const TIME_ZONE = "Europe/Berlin";

    matchdayMatches?.forEach(function (match) {
      const matchInfo = match;
      const combinedMatch = {
        ...matchInfo,
      };

      if ([matchInfo?.home, matchInfo?.away]?.every(contestant => contestant.id)) {
        // Check if the match date is within the specified time frame
        if (!matchInfo?.match_date) return;

        // 1. Parse match date/time string as if it is in Europe/Berlin
        const matchLocalDateStr = matchInfo.match_time
          ? `${matchInfo.match_date} ${matchInfo.match_time}`
          : matchInfo.match_date;

        const matchLocalDate = parse(
          matchLocalDateStr,
          matchInfo.match_time ? 'dd.MM.yyyy HH:mm' : 'dd.MM.yyyy',
          new Date()
        );

        // Convert to UTC for internal consistency
        const matchUtcDate = zonedTimeToUtc(matchLocalDate, TIME_ZONE);

        // 2. Get "now" in Berlin time
        const nowUtc = new Date();
        const nowLocalDate = utcToZonedTime(nowUtc, TIME_ZONE);

        // 3. Comparison logic (all in local zone)
        const timeDiffToNow = differenceInMinutes(matchLocalDate, nowLocalDate);

        if (isSameDay(matchLocalDate, nowLocalDate)) {
          teamsPlayToday.push(combinedMatch);
        }

        const todayStart = startOfDay(nowLocalDate);
        const in1Day = startOfDay(addDays(todayStart, 1));
        const twoDaysAgo = startOfDay(subDays(todayStart, 2));
        const weeks2Ago = startOfDay(subDays(nowLocalDate, 14));
        const inTwoDays = endOfDay(addDays(nowLocalDate, 2));

        if (competitionConfig?.name === 'Friendlies') {
          if (isWithinInterval(matchLocalDate, { start: weeks2Ago, end: inTwoDays })) {
            teamsPlayMatchday.push(combinedMatch);
          }
        } else {
          if (isWithinInterval(matchLocalDate, { start: twoDaysAgo, end: in1Day })) {
            teamsPlayMatchday.push(combinedMatch);
          }
        }
      }
    });

    // Fallback logic for no recent or upcoming games
    const closestMatchWeek = closestMatchData?.matchday;

    if (teamsPlayMatchday.length === 0) {
      teamsPlayMatchday.push(
        ...(matchdayMatches
          .map(match => {
            const matchInfo = match;
            return {
              ...matchInfo,
            };
          }) ?? [])
      );
    }

    if (teamsPlayMatchday.length === 0) {
      teamsPlayMatchday.push(
        ...(matchdayMatches
          ?.filter(m => m?.matchday && m?.matchday === closestMatchWeek)
          .map(match => {
            const matchInfo = match;
            return {
              ...matchInfo,
            };
          }) ?? [])
      );
    }

    let todaysWeek = currentWeek;

    if (teamsPlayMatchday.length === 0 || _.isEmpty(teamsPlayMatchday?.[0])) {
      teamsPlayMatchday.push(
        ...(matchdayMatches?.slice(-4).map(match => {
          const matchInfo = match;
          return {
            ...matchInfo,
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
      ]);
    }

    return {
      teamsPlayMatchday,
      teamsPlayToday,
      todaysWeek,
      todaysStage: null,
      closestMatch
    };
  }

}

module.exports = Feed;
