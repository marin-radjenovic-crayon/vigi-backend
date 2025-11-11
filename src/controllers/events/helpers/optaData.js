const _ = require('lodash');

const competitions = require('./custom/competitions');
const teams = require('./custom/teams');
const matches = require('./custom/matches');

const FnFeedsClass = require('../../feeds/opta/functions');
const { format } = require('date-fns');
const MediaM = require('../../../models/media');
const { getItems } = require('../../../middleware/db');
const { handleError } = require('../../../middleware/utils');

const matchParser = (value, tid) => {
  if (!value) {
    return {};
  }

  let date = new Date();

  // if (value?.start_date.indexOf('000-00-00') === -1) {
  //   date = new Date(value.start_date);
  // }

  const startTime = format(date, 'HH:mm');
  const startDate = format(date, 'dd.MM.yyyy');

  return {
    eventId: String(value.id),
    competitionId: String(value.league_id),
    competitionName: value.league,
    date: startDate,
    time: startTime,
    start_date: value.start_date,
    real_end_date: value.real_end_date,
    stadion: null,
    season: String(value.season),
    round: String(value.round),
    home: {
      name: value.home.name,
      id: String(value.home.id),
      shortcut: value.home.shortcut
    },
    away: {
      name: value.guest.name,
      id: String(value.guest.id),
      shortcut: value.guest.shortcut
    },
    score: {
      home: _.get(value, 'results.score.final.score_home'),
      away: _.get(value, 'results.score.final.score_guest')
    },
    actual_time_name: value.actual_time_name,
    actual_time_alias: value.actual_time_alias,
    status: value.status,
    results: value.results,
    teamId: _.toString(tid)
  };
};

const getCompetitions = () => {
  return MAINCONFIG.feeds.opta.competitions;
};

const getTeams = async ({ cid }) => {
  const FnFeeds = new FnFeedsClass({
    target: {
      league: cid
    }
  });

  const teamsData = await FnFeeds.getTeams();
  const teamIds = [];

  _.each(teamsData, (team, teamIndex) => {
    teamIds.push(team.teamId.toString());
  });

  const teamLogos = await getItems({ query: {} }, MediaM, {
    'data.id': { $in: teamIds },
    group: 'teams'
  }).catch(err => {
    LOGGER.error(err);
  });

  return _.map(teamsData, (value, key) => {
    const teamLogo = _.find(teamLogos.docs, {
      data: {
        id: value.teamId.toString()
      }
    });

    return {
      shortcut: value.shortcut,
      name: value.name,
      id: value.teamId.toString(),
      logo: teamLogo,
      code: value?.code
    };
  });
};

const getMatches = async ({ cid, tid }) => {
  if (!tid) {
    return [];
  }

  const FnFeeds = new FnFeedsClass({
    target: {
      league: cid,
      teamId: tid
    }
  });

  const matchesData = await FnFeeds.getMatches([tid]);
  // return _.map(matchesData, (value, key) => {
  //   return matchParser(value, tid);
  // });

  return matchesData;
};

const getMatch = async ({ cid, tid, mid }, matches) => {
  if (!tid || !mid) {
    return;
  }

  return _.find(matches, { eventId: mid }) || {};
};

module.exports = {
  getCompetitions,
  getTeams,
  getMatches,
  getMatch
};
