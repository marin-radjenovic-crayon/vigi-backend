const _ = require('lodash');

const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../controllers/feeds/heimspiel/functions');
const { cloneDeep } = require("lodash");
const { getTeamRankingsByMatchday } = require('@/src/controllers/feeds/heimspiel/helpers');

/**
 * Get all items function called by route
 */

function Template(req, res) {
  this.template = req.params.template;
  this.uuid = req.params.uuid;
  this.templateconf = _.find(MAINCONFIG.templates, { name: this.template });
  this.res = res;
  this.req = req;
}

// the start method
Template.prototype.getSingle = async function () {
  await getSingleDefaultHandler.call(this, {
    initialData
  });
};

// the start method
Template.prototype.setSingle = async function () {
  await setSingleDefaultHandler.call(this, {
    initialData
  });
};

Template.prototype.getDynamicData = async function (baseData) {
  const event = _.get(baseData, 'event');
  const FeedInstance = new FnFeedsClass({
    target: {
      eventId: event.eventId,
      league: event.competitionId,
      teamId: event.selectedTeamId
    },
    client: 'bild'
  });

  const match = await FeedInstance.getMatchById().catch(err => {
    console.log('err', err);
  });

  const round = await FeedInstance.getBildSeasonRound();
  const { current_matchday } = round;
  let startMatchday = 1;
  if (parseInt(current_matchday) > 10) {
    startMatchday = parseInt(current_matchday) - 9;
  }

  const { match: seasonMatches } = round;
  const rankings = getTeamRankingsByMatchday(seasonMatches, startMatchday, parseInt(current_matchday))
  return {
    week: parseInt(current_matchday),
    matchInfo: match,
    last10GamesStandings: rankings,
    totalStandingTeams: rankings[0].length,
  };
};


module.exports = Template;
