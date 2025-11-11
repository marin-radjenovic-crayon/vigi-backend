const _ = require('lodash');

const competitions = require('./custom/competitions');
const teams = require('./custom/teams');
const matches = require('./custom/matches');

const getCompetitions = () => {
  return _.get(competitions, MAINCONFIG.season, []);
};

const getTeams = ({ cid }) => {
  return _.get(teams, cid, []);
};

const getMatches = ({ cid, tid }) => {
  return _.get(matches, tid, []);
};

const getMatch = ({ cid, tid, mid }) => {
  const data = _.get(matches, tid, []);
  return _.find(data, { eventId: mid });
};

module.exports = {
  getCompetitions,
  getTeams,
  getMatches,
  getMatch
};
