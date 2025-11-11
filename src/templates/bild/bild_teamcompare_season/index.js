const TemplatesRecordsM = require('../../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/heimspiel/functions');
const MediaM = require('../../../models/media');
const {getApiCallRelevantMatchData} = require("@/src/controllers/feeds/opta/helpers");

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
  getSingleDefaultHandler.call(this, {
    initialData
  });
};

// the start method
Template.prototype.setSingle = async function () {
  setSingleDefaultHandler.call(this, {
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

  const currentMatch = await FeedInstance.getMatchById();
  const homeTeam = currentMatch.home;
  const awayTeam = currentMatch.away;
  const seasonMatches = await FeedInstance.getBildSeasonMatches();
  const matchesForHome = seasonMatches.filter((t) => t.home.id === homeTeam.id || t.away.id === homeTeam.id);
  const homeMatchIds = matchesForHome?.filter((m) => m.finished === 'yes')?.map((m) => m.id);
  const homeTeamSeason = await FeedInstance.getTeamCompareSeason(homeMatchIds, homeTeam.id);
  const matchesForAway = seasonMatches.filter((t) => t.home.id === awayTeam.id || t.away.id === awayTeam.id);
  const awayMatchIds = matchesForAway?.filter((m) => m.finished === 'yes')?.map((m) => m.id);
  const awayTeamSeason = await FeedInstance.getTeamCompareSeason(awayMatchIds, awayTeam.id);
  return {
    matchInfo: currentMatch,
    homeTeamSeason,
    awayTeamSeason
  }
};

module.exports = Template;
