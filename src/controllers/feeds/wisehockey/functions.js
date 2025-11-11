const _ = require('lodash');
const config = require('../../../config');
const FeedBaseWise = require('./index');
const async = require('async');
const { format } = require('date-fns');

class Feed extends FeedBaseWise {
  constructor({ target }) {
    super();

    this.feedCfg = config.feeds.wiseHockey;

    this.target = {
      season: config.season,
      league: _.get(target, 'league', null),
      teamId: parseInt(_.get(target, 'teamId', null)),
      eventId: _.get(target, 'eventId', null)
    };

    this.apiData = {
      standing: null,
      teamSchedule: null,
      teamScheduleAway: null,
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
      liveGame: {
        gameInfo: null,
        gameRoster: null,
        gameEvents: null,
        playerStats: null,
        teamStats: null,
        allGoalies: null,
        matchStats: {}
      }
    };
    this.eventData = {
      matchday: null,
      actualTimeName: null,
      actualTimeAlias: null,
      stadium: null,
      numberOfViewers: 0,
      teamBilance: {},
      results: {},
      home: {
        id: null,
        name: null,
        shortcut: null,
        bestPlayer: null
      },
      away: {
        id: null,
        name: null,
        shortcut: null,
        bestPlayer: null
      },
      lineup: [],
      startingSix: [],
      shifts: [],
      teamStats: null
    };
    this.teams = [];
    this.players = [];
  }

  get eventDataOmit() {
    return _.omitBy(this.eventData, v => _.isUndefined(v) || _.isNil(v) || v === '' || v.length === 0);
  }

  async prepareMatchStatisticsByKey(value) {
    const allGoaliesCall = this.feedCfg.data.matchStatistics?.[value].url
      .replace('[[EVENTID]]', this.target.eventId)
      .replace('[[LEAGUE]]', this.target.league);

    if (!allGoaliesCall) {
      return;
    }

    const liveMatchStats = await this.apiCall({
      url: allGoaliesCall
    });

    _.set(this.apiData, `liveGame.matchStats.${value}`, liveMatchStats);
  }

  async setMatchStatistics(keys = []) {
    for (const key of keys) {
      try {
        await this.prepareMatchStatisticsByKey(key);
      } catch (err) {
        LOGGER.error({
          err,
          key
        }, 'setMatchStatistics err');
      }
    }
  }

  setTeamSchedule(bothTeams = false) {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const apiCall = this.feedCfg.data.matches.matches.url
        .replace('[[SEASON]]', season)
        .replace('[[LEAGUE]]', league)
        .replace('[[TEAMID]]', teamId);

      const callResults = await this.apiCall({
        url: apiCall
      }).catch(err => {
        LOGGER.error(err);
      });

      if (callResults && callResults.matches) {
        _.set(this.apiData, `teamSchedule`, callResults.matches);
      }

      // if (bothTeams) {
      //   const gameInfo = await this.getGameInfo();
      //   const { side } = gameInfo;
      //
      //   const oppositeTeamId = side === 'home' ? _.get(gameInfo, 'away.id') : _.get(gameInfo, 'home.id');
      //
      //   const apiCallAway = config.feeds.del.data.teamSchedule.url
      //     .replace('[[SEASON]]', season)
      //     .replace('[[LEAGUE]]', league)
      //     .replace('[[TEAMID]]', oppositeTeamId);
      //
      //   const callResultsAway = await this.apiCall({
      //     url: apiCallAway
      //   });
      //
      //   _.set(this.apiData, `teamScheduleAway`, callResultsAway.matches);
      // }

      resolve();
    });
  }

  setTeamStatsSeason() {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const gameInfo = await this.getGameInfo();

      const gameInfoCallHome = config.feeds.del.data.season.teamStats.url
        .replace('[[SEASON]]', this.target.season)
        .replace('[[LEAGUE]]', this.target.league)
        .replace('[[TEAMID]]', _.get(gameInfo, 'home.id'));

      const gameInfoCallResultHome = await this.apiCall({
        url: gameInfoCallHome
      });

      const gameInfoCallAway = config.feeds.del.data.season.teamStats.url
        .replace('[[SEASON]]', this.target.season)
        .replace('[[LEAGUE]]', this.target.league)
        .replace('[[TEAMID]]', _.get(gameInfo, 'away.id'));

      const gameInfoCallResultAway = await this.apiCall({
        url: gameInfoCallAway
      });

      _.set(this.apiData, `season.teamStats.home`, gameInfoCallResultHome);
      _.set(this.apiData, `season.teamStats.away`, gameInfoCallResultAway);

      resolve();
    });
  }

  setPlayerStatsSeason() {
    return new Promise(async (resolve, reject) => {
      const that = this;
      const { season, league, teamId } = this.target;

      const gameInfo = await this.getGameInfo();

      const gameInfoCallHome = config.feeds.del.data.season.playerStats.url
        .replace('[[SEASON]]', season)
        .replace('[[LEAGUE]]', league)
        .replace('[[TEAMID]]', _.get(gameInfo, 'home.id'));

      const gameInfoCallResultHome = await this.apiCall({
        url: gameInfoCallHome
      });

      const gameInfoCallAway = config.feeds.del.data.season.playerStats.url
        .replace('[[SEASON]]', season)
        .replace('[[LEAGUE]]', league)
        .replace('[[TEAMID]]', _.get(gameInfo, 'away.id'));

      const gameInfoCallResultAway = await this.apiCall({
        url: gameInfoCallAway
      });

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

  setStanding() {
    return new Promise(async (resolve, reject) => {
      const that = this;

      const apiCall = config.feeds.del.data.standing.url;

      const callResults = await this.apiCall({
        url: apiCall
      });

      _.set(this.apiData, `standing`, callResults);
      this.setTeams();

      resolve();
    });
  }

  setTeams() {
    const teams = _.map(_.get(this.apiData, 'standing.table', []), (team, index) => {
      return {
        shortcut: team.shortcut,
        name: team.name,
        teamId: team.id
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

  getTeamSide(match) {
    if (_.get(match, 'homeTeam.id') == this.target.teamId) {
      return 'home';
    }

    if (_.get(match, 'awayTeam.id') == this.target.teamId) {
      return 'away';
    }
  }

  async getLineup() {
    await this.setLiveMatchStats().catch(err => {
      LOGGER.error(err, 'getLineup error');
    });

    // set basic game data, based on gameInfo
    this.setGameInfo();

    const lines = {
      line1: [],
      line2: [],
      line3: [],
      line4: [],
      lineGoalie: []
    };

    if (this.eventData.side === 'home') {
      this.eventData.lineup = _.get(this.apiData, `liveGame.gameRoster.home`, {});
    } else {
      this.eventData.lineup = _.get(this.apiData, `liveGame.gameRoster.visitor`, {});
    }

    _.each(this.eventData.lineup, (item, index) => {
      const checkLine = _.get(item, 'roster', null);

      if (checkLine) {
        const lineIndex = parseInt(checkLine.charAt(1), 10);

        if (lineIndex === 0) {
          lines.lineGoalie.push(item);
        } else {
          if (lineIndex >= 4) {
            lines[`line4`].push(item);
          } else {
            lines[`line${lineIndex}`].push(item);
          }
        }
      }
    });

    // 1st number indicates player position (1 = goalie, 2 = defense, 3 = forward)
    // 2nd number indicates line (1 = 1st line, 2 = 2nd line etc.)
    // 3rd number indicates position on the line (1 = left, 2 = center, 3 = right)

    const compare = (a, b) => {
      const checkLineA = _.get(a, 'roster', null);
      const checkLineB = _.get(b, 'roster', null);
      const positionRosterA = parseInt(checkLineA.charAt(0), 10);
      const positionRosterB = parseInt(checkLineB.charAt(0), 10);
      return positionRosterB - positionRosterA;
    };

    if (lines.line1.length) {
      lines.line1.sort(compare);
    }

    if (lines.line2.length) {
      lines.line2.sort(compare);
    }

    if (lines.line3.length) {
      lines.line3.sort(compare);
    }

    if (lines.line4.length) {
      lines.line4.sort(compare);
    }

    this.eventData.lineup = lines;

    return this.eventDataOmit;
  }

  async getStartingSix(teamId) {
    await this.setMatchRoster().catch(err => {
      LOGGER.error(err, 'getStartingSix error');
    });

    // set basic game data, based on gameInfo
    // this.setGameInfo();

    let roster = [];

    const rosterApi = this.apiData.liveGame.gameRoster;

    roster = _.filter(rosterApi, el => {
      return el?.teamId == teamId;
    });

    const ms = this.eventData.startingSix; //reference only

    const startingSixPlayers = _.filter(roster, function (o) {
      return _.get(o, 'startingSix', false);
    });

    if (startingSixPlayers.length) {
      _.each(startingSixPlayers, o => {
        const ro = _.get(o, 'roster');
        const posIndex = parseInt(ro.charAt(0), 10); //position index
        const polIndex = parseInt(ro.charAt(2), 10); //positionOnLine
        //defense
        if (posIndex === 2) {
          if (polIndex === 1) {
            ms[0] = o;
          }

          if (polIndex === 2) {
            ms[4] = o;
          }
        }

        //attack
        if (posIndex === 3) {
          if (!ms[1] && !_.find(ms, { playerId: o?.playerId })) {
            ms[1] = o;
          }
          if (!ms[2] && !_.find(ms, { playerId: o?.playerId })) {
            ms[2] = o;
          }
          if (!ms[3] && !_.find(ms, { playerId: o?.playerId })) {
            ms[3] = o;
          }
        }

        //goalie
        if (posIndex === 1) {
          ms[5] = o;
        }
      });
    } else {
      ms.push(_.get(roster, '211', null));
      ms.push(_.get(roster, '311', null));
      ms.push(_.get(roster, '312', null));
      ms.push(_.get(roster, '313', null));
      ms.push(_.get(roster, '212', null));
      ms.push(_.get(roster, '101', null));
    }

    return this.eventDataOmit;
  }

  async getGoals() {
    const that = this;
    const target = ['goals'];

    await this.setMatchStatistics(target).catch(err => {
      console.log('err', err);
    });

    const match = await this.getMatch().catch(err => {
      console.log('err', err);
    });

    const side = this.getTeamSide(match);

    const gameEvents = _.get(this.apiData, `liveGame.matchStats.goals.goals`, []);
    const teamPlayers = await this.getPlayers(this.target.teamId);

    // console.log('gameEvents', gameEvents);
    // console.log('side', side);

    const goals = gameEvents.filter(e => _.toLower(e?.team) === side) || [];
    const outputGoals = [];

    // console.log('##goals', goals);

    const getPlayers = (data, fixedScoreboardString) => {
      const teamSide = _.get(data, 'team', null);
      const scorerId = _.get(data, 'shot.shooter', null);

      if (!scorerId) {
        return;
      }

      const scorer = _.find(teamPlayers, {
        id: _.toString(scorerId)
      });

      const scoreboardTime = _.get(data, 'secondsFromPeriodStart', 0);
      let prepareScoreboardString = Math.ceil(parseInt(scoreboardTime, 10) / 60) + '.';

      if (fixedScoreboardString) {
        prepareScoreboardString = fixedScoreboardString;
      }

      scorer.scoreboardTime = [prepareScoreboardString];
      outputGoals.push(scorer);
    };

    goals.forEach(event => {
      getPlayers(event);
    });

    return outputGoals;
  }

  async getLiveGoals(eventIds = []) {
    await this.setLiveGame(['gameInfo', 'gameEvents']).catch(err => {
      LOGGER.error(err, 'getLiveGoals error');
    });

    const teamId = this.target.teamId;
    const matchEvents = _.get(this.apiData, `liveGame.gameEvents`, {});
    const gameInfo = _.get(this.apiData, `liveGame.gameInfo`, {});

    const homeId = _.get(gameInfo, 'teamInfo.home.id', 'home_id');
    const awayId = _.get(gameInfo, 'teamInfo.visitor.id', 'away_id');
    const goals = [];

    let teamIdSide = null;

    if (String(teamId) === String(homeId)) {
      teamIdSide = 'home';
    }

    if (String(teamId) === String(awayId)) {
      teamIdSide = 'visitor';
    }

    const getPlayers = (item, period) => {
      const eventType = _.get(item, 'type', null);
      if (eventType === 'goal') {
        const data = _.get(item, 'data', {});
        const eventId = String(_.get(data, 'id', null));
        const teamSide = _.get(data, 'team', null);
        const scorer = _.get(data, 'scorer', null);
        // const scorerId = _.get(data, 'scorer.playerId', null);
        const scoreboardTime = _.get(data, 'scoreboardTime', 0);

        const scoreboardMinutes = Math.floor(scoreboardTime / 60).toString();
        const scoreboardSeconds = (scoreboardTime - scoreboardMinutes * 60).toString();

        const prepareScoreboardString = `${scoreboardMinutes.padStart(2, '0')}:${scoreboardSeconds.padStart(2, '0')}`;

        if (eventIds.indexOf(eventId) > -1 || teamIdSide === null || teamSide !== teamIdSide) {
          return;
        }

        scorer.teamSide = teamSide;
        scorer.eventId = eventId;
        scorer.realTime = _.get(data, 'realTime', null);
        scorer.currentScore = _.get(data, 'currentScore', null);
        scorer.scoreboardTime = prepareScoreboardString;
        scorer.period = period;
        scorer.shooting = _.get(data, 'shooting', null);
        goals.push(scorer);
      }
    };

    _.each(matchEvents, (events, period) => {
      _.each(events, event => {
        getPlayers(event, period);
      });
    });

    return goals;
  }

  // async getSubstitutions() {
  //   await this.setLiveGame(['gameInfo', 'gameEvents']).catch((err) => {
  //     console.error(err);
  //   });
  //
  //   // set basic game data, based on gameInfo
  //   this.setGameInfo();
  //
  //   const teamSide = this.eventData.side;
  //
  //   const teamId = teamSide === "home" ? _.get(this.eventData, `home.id`) : _.get(this.eventData, `away.id`);
  //
  //   return this.eventData.shifts.filter((item) => {
  //     const shiftTeamId = _.get(item, 'team.id', "");
  //     return shiftTeamId === teamId;
  //   });
  // }

  async getTeamPlayersPure() {
    await this.setLiveGame(['gameInfo', 'playerStats']).catch(err => {
      console.error(err);
    });

    // set basic game data, based on gameInfo
    this.setGameInfo();
    return _.get(this.apiData.liveGame, 'playerStats');
  }

  async getTopScorers() {
    const players = await this.getTeamPlayersPure().catch(err => {
      console.error(err);
    });

    const sorted = _.orderBy(players, 'statistics.pointsPerGame', 'desc');

    return sorted.slice(0, 3);
  }

  async getTopScorersSeason() {
    await this.setPlayerStatsSeason().catch(err => {
      console.error(err);
    });

    const side = this.getTeamSide();
    const sortIterationsFn = [
      item => {
        return parseInt(item.statistics.points.home) + parseInt(item.statistics.points.away);
      },
      item => {
        return parseInt(item.statistics.goals.home) + parseInt(item.statistics.goals.away);
      },
      item => {
        return parseInt(item.statistics.assists.home) + parseInt(item.statistics.assists.away);
      },
      item => {
        return parseInt(item.statistics.timeOnIce) + parseInt(item.statistics.timeOnIce);
      }
    ];

    const sortIterationsOrder = ['desc', 'desc', 'desc', 'asc'];

    const sortedHome = _.orderBy(this.apiData.season.playerStats['home'], sortIterationsFn, sortIterationsOrder);
    const sortedAway = _.orderBy(this.apiData.season.playerStats['away'], sortIterationsFn, sortIterationsOrder);

    return {
      home: sortedHome.slice(0, 3),
      away: sortedAway.slice(0, 3)
    };
  }

  async getGameInfo() {
    await this.setLiveGame(['gameInfo']).catch(err => {
      console.error(err);
    });

    // set basic game data, based on gameInfo
    const eventData = this.setGameInfo();
    return eventData;
  }

  async getMatchday() {
    await this.setMatchday().catch(err => {
      console.error(err);
    });

    return this.eventData.matchday;
  }

  async getNextMatchday(onlyHome = false) {
    await this.setMatchday().catch(err => {
      console.error(err);
    });

    let nextMatch = {};

    const currentMatchIndex = _.findIndex(this.apiData.teamSchedule, { id: parseInt(this.target.eventId, 10) });
    if (currentMatchIndex > -1) {
      let nextMatchIndex = currentMatchIndex + 1;
      nextMatch = _.get(this.apiData.teamSchedule, nextMatchIndex, null);

      if (onlyHome === true && this.target.teamId) {
        let homeId = _.get(nextMatch, 'home.id', null);

        do {
          nextMatch = _.get(this.apiData.teamSchedule, nextMatchIndex, null);
          homeId = _.get(nextMatch, 'home.id', null);

          if (nextMatch === null) {
            break;
          }
          nextMatchIndex++;
        } while (parseInt(homeId, 10) !== parseInt(this.target.teamId, 10));
      }
    }

    return nextMatch;
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
    const apiCall = this.feedCfg.data.teams.teams.url.replace('[[LEAGUE]]', this.target.league);

    const callResults = await this.apiCall({
      url: apiCall
    }).catch(err => {
      console.error('err', err);
    });

    _.set(this.apiData, `teams`, callResults?.teams);

    const teams = _.map(_.get(this.apiData, 'teams', []), (team, index) => {
      return {
        shortcut: team.shortName,
        name: team.fullName,
        teamId: team.id
      };
    });

    this.teams = teams;

    return this.teams;
  }

  async getPlayers(teamId) {
    const apiCall = this.feedCfg.data.teams.players.url
      .replace('[[LEAGUE]]', this.target.league)
      .replace('[[TEAMID]]', teamId);

    const callResults = await this.apiCall({
      url: apiCall
    }).catch(err => {
      console.error('err', err);
    });

    return (callResults?.players || []).map(item => {
      return {
        id: item.id.toString(),
        name: `${item.firstName} ${item.lastName}`,
        firstname: item.firstName,
        surname: item.lastName,
        position: item.role,
        jersey: item.jersey,
        nationality: item.nationality
      };
    });
  }

  async getMatches(parsed = true) {
    await this.setTeamSchedule().catch(err => {
      console.error(err);
    });

    const matches = _.cloneDeep(this.apiData?.teamSchedule);

    if (parsed) {
      return matches.map(value => {
        let date = new Date(`${value.date}`);

        const startTime = format(date, 'HH:mm');
        const startDate = format(date, 'dd.MM.yyyy');

        return {
          eventId: String(value.id),
          competitionId: String(this.target.league),
          competitionName: 'DEL',
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
          teamId: this.target.teamId
        };
      });
    }

    return matches;
  }

  async getMatch() {
    const apiCall = this.feedCfg.data.matches.match.url
      .replace('[[LEAGUE]]', this.target.league)
      .replace('[[EVENTID]]', this.target.eventId);

    const callResults = await this.apiCall({
      url: apiCall
    }).catch(err => {
      LOGGER.error(err);
    });

    return callResults;
  }

  async setTeamStats() {
    const url = this.feedCfg.data.matchStatistics.teamstatistics.url
      .replace('[[LEAGUE]]', this.target.league)
      .replace('[[EVENTID]]', this.target.eventId)
      .replace('[[TEAMID]]', this.target.teamId);

    const teamstatistics = await this.apiCall({
      url
    });

    this.apiData.teamstatistics = teamstatistics;
  }

  async setMatchRoster() {
    const url = this.feedCfg.data.matches.players.url
      .replace('[[LEAGUE]]', this.target.league)
      .replace('[[EVENTID]]', this.target.eventId);

    const callData = await this.apiCall({
      url
    });

    this.apiData.liveGame.gameRoster = callData?.players || [];
  }

  async getTeamStats() {
    const target = ['teamstatistics'];

    await this.setMatchStatistics(target).catch(err => {
      console.log('err', err);
    });

    const homeStats = _.get(this.apiData.liveGame, 'matchStats.teamstatistics.homeTeamStatistics');
    const awayStats = _.get(this.apiData.liveGame, 'matchStats.teamstatistics.awayTeamStatistics');

    return {
      home: homeStats,
      away: awayStats
    };
  }

  async getStandingTable() {
    await this.setStanding().catch(err => {
      console.error(err);
    });

    return _.get(this.apiData.standing, 'table', []);
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

            const apiCall = config.feeds.del.data.teamSchedule.url
              .replace('[[SEASON]]', this.target.season)
              .replace('[[LEAGUE]]', this.target.league)
              .replace('[[TEAMID]]', teamId);

            const callResults = await this.apiCall({
              url: apiCall
            });

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

  async getMatchRanks() {
    const target = ['skaterstatistics', 'shots'];
    await Promise.all([this.setMatchStatistics(target), this.setMatchRoster()]);

    const skaterStats = _.get(this.apiData, 'liveGame.matchStats.skaterstatistics.skaterStatistics', []);
    const players = _.get(this.apiData, 'liveGame.gameRoster', []);
    const shots = _.get(this.apiData, 'liveGame.matchStats.shots.shots', []);

    const homeStats = _.filter(skaterStats, o => _.toLower(o.team) === 'home');
    const awayStats = _.filter(skaterStats, o => _.toLower(o.team) === 'away');

    const orderByDesc = (array, key) => _.orderBy(array, `totalStatistics.skatingStatistics.${key}`, 'desc');

    const homeCombined = {
      traveledDistance: orderByDesc(homeStats, 'distanceTravelled'),
      fastestScater: orderByDesc(homeStats, 'topSpeed'),
      skaterAcceleration: orderByDesc(homeStats, 'accelerations'),
      timeOnIce: orderByDesc(homeStats, 'timeOnIce'),
      shotSpeed: _.orderBy(
        _.filter(shots, o => _.toLower(o.team) === 'home'),
        'speed',
        'desc'
      )
    };

    const awayCombined = {
      traveledDistance: orderByDesc(awayStats, 'distanceTravelled'),
      fastestScater: orderByDesc(awayStats, 'topSpeed'),
      skaterAcceleration: orderByDesc(awayStats, 'accelerations'),
      timeOnIce: orderByDesc(awayStats, 'timeOnIce'),
      shotSpeed: _.orderBy(
        _.filter(shots, o => _.toLower(o.team) === 'away'),
        'speed',
        'desc'
      )
    };

    const takeTopN = (array, n) =>
      _.take(
        _.map(array, v => _.omit(v, 'periodStatistics')),
        n
      );

    const top5Home = {
      distanceTravelled: takeTopN(homeCombined.traveledDistance, 5),
      fastestScater: takeTopN(homeCombined.fastestScater, 5),
      skaterAcceleration: takeTopN(homeCombined.skaterAcceleration, 5),
      timeOnIce: takeTopN(homeCombined.timeOnIce, 5),
      shotSpeed: takeTopN(homeCombined.shotSpeed, 5)
    };

    const top5Away = {
      distanceTravelled: takeTopN(awayCombined.traveledDistance, 5),
      fastestScater: takeTopN(awayCombined.fastestScater, 5),
      skaterAcceleration: takeTopN(awayCombined.skaterAcceleration, 5),
      timeOnIce: takeTopN(awayCombined.timeOnIce, 5),
      shotSpeed: takeTopN(awayCombined.shotSpeed, 5)
    };

    return {
      home: top5Home,
      away: top5Away,
      players
    };
  }
}

module.exports = Feed;
