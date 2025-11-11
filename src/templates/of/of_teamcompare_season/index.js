const TemplatesRecordsM = require('../../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
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
    }
  });

  await FeedInstance.setMatch(event?.eventId).catch(err => {
    LOGGER.error(err)
  });

  const match = await FeedInstance.getMatchById(event.eventId, false);

  const matchInfo = match?.matchInfo;
  const liveData = match?.liveData;
  const home = _.find(matchInfo?.contestant, { position: 'home' });
  const away = _.find(matchInfo?.contestant, { position: 'away' });

  const relevantMatchData = getApiCallRelevantMatchData(match)

  const homeStats = await FeedInstance.getSeasonStats(home.id, relevantMatchData);
  const awayStats = await FeedInstance.getSeasonStats(away.id, relevantMatchData);

  const homeRanking = await FeedInstance.getTournamentSingleTeamRanking(home.id);
  const awayRanking = await FeedInstance.getTournamentSingleTeamRanking(away.id);

  const matchday = await FeedInstance.getCurrentMatchday().catch(err => {
    console.log('err', err);
  });

  const assets = {};

  return {
    matchday,
    matchInfo,
    liveData,
    ranking: {
      home: homeRanking,
      away: awayRanking
    },
    teamCompare: {
      home: homeStats?.contestant?.stat,
      away: awayStats?.contestant?.stat
    },
    assets
  };
};

module.exports = Template;
