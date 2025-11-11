const TemplatesRecordsM = require('../../models/template_records');
const { getItem, getItemsPure, checkQueryString, getItems } = require('../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../_helpers/getSingle');
const setSingleDefaultHandler = require('../_helpers/setSingle');

const initialData = require('./initialData');

const FeedClass = require('../../controllers/feeds/del/functions');
const FnFeedsClass = require('../../../src/controllers/feeds/del/functions');
const MediaM = require('../../models/media');

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

  const teamSide = _.get(event, 'side');

  const game = await FeedInstance.getGameInfo().catch(err => {
    console.log('err', err);
  });

  const topScorersHome = await FeedInstance.getTopScorersSeason().catch(err => {
    console.log('err', err);
  });

  const assets = {};

  const teamHome = await getItem(
    {
      'data.id': event.homeTeamId,
      group: 'teams'
    },
    MediaM
  ).catch(err => {
    console.log('err', err);
  });

  const teamAway = await getItem(
    {
      'data.id': event.awayTeamId,
      group: 'teams'
    },
    MediaM
  ).catch(err => {
    console.log('err', err);
  });

  _.set(assets, 'teamHome', teamHome);
  _.set(assets, 'teamAway', teamAway);

  const scorers = [];

  _.each(topScorersHome.home, scorer => {
    // LOGGER.debug("linePlayer %o", linePlayer);
    scorers.push(scorer.id.toString());
  });

  _.each(topScorersHome.away, scorer => {
    // LOGGER.debug("linePlayer %o", linePlayer);
    scorers.push(scorer.id.toString());
  });

  const playersImages = await getItemsPure(
    {
      'data.id': { $in: scorers },
      group: 'players'
    },
    MediaM
  ).catch(err => {
    console.log('err', err);
  });

  _.each(playersImages, dbItem => {
    const playerId = _.get(dbItem, 'data.id');
    delete dbItem._id;
    _.set(assets, `p_${playerId}`, dbItem);
  });

  return {
    teamSide,
    game,
    topScorersHome: topScorersHome[teamSide],
    assets
  };
};

module.exports = Template;
