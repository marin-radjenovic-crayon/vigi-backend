const _ = require('lodash');

const competitions = require('./custom/competitions');
const teams = require('./custom/teams');
const matches = require('./custom/matches');

const FnFeedsClass = require('../../feeds/heimspiel/functions');
const { format } = require('date-fns');
const MediaM = require('../../../models/media');
const { getItems } = require('../../../middleware/db');
const { handleError } = require('../../../middleware/utils');
const allCompetitions = require('@/test/ajaxMocker/feeds/heimspiel/feeds/en/competition-list.json');

const getCompetitionSeasons = () => {
  return MAINCONFIG.feeds.heimspiel.competitions;
};

const parseCompetitionFeedData = data => {
  const result = [];

  data.forEach(parent => {
    parent.competition.forEach(comp => {
      const combinedObj = {
        ...comp,
        parentId: parent.id,
        parentName: parent.name,
        competitionId: comp.id,
        knownName: comp.shortname || comp.name,
        competitionName: comp.shortname || comp.name
      };
      if (parent.topic) {
        combinedObj.parentTopic = parent.topic;
      }
      result.push(combinedObj);
    });
  });

  return result;
};

const parseTeamsFeedData = data => {
  const result = [];

  data.forEach(t => {
    result.push({
      ...t
    });
  });

  return result;
};

const getCompetitions = async () => {
  const allCompetitions = require('../../../../test/ajaxMocker/feeds/heimspiel/feeds/en/competition-list.json');
  return parseCompetitionFeedData(allCompetitions);
};

const getTeams = async ({ cid }) => {
  const allTeams = require('../../../../test/ajaxMocker/feeds/heimspiel/feeds/en/country-list.json');
  return parseTeamsFeedData(allTeams);
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

const getBildCompetition = async () => {
  const allCompetitions = require('../../../../test/ajaxMocker/feeds/heimspiel/feeds/en/bild-competition-list.json');

  return allCompetitions;
}

const getBildTeams = async (season_id, round_id, tid) => {
  const FeedInstance = new FnFeedsClass({
    target: {
      seasonId: 'se' + season_id,
      roundId: 'ro' + round_id
    },
    client: 'bild'
  });

  const { teams, matches } = await FeedInstance.getBildTeams(tid);
  return { teams, matches };
}

module.exports = {
  getCompetitions,
  getTeams,
  getMatches,
  getMatch,
  getBildCompetition,
  getBildTeams,
};
