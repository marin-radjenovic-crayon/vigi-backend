const TemplatesRecordsM = require('../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../_helpers/getSingle');
const setSingleDefaultHandler = require('../_helpers/setSingle');

const initialData = require('./initialData');
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

  const FeedInstanceHome = new FnFeedsClass({
    target: {
      eventId: event.eventId,
      league: event.competitionId,
      teamId: event.homeTeamId
    }
  });

  const FeedInstanceAway = new FnFeedsClass({
    target: {
      eventId: event.eventId,
      league: event.competitionId,
      teamId: event.awayTeamId
    }
  });

  const game = await FeedInstanceHome.getGameInfo().catch(err => {
    console.log('err', err);
  });

  const lineupHome = await FeedInstanceHome.getLineup().catch(err => {
    console.log('err', err);
  });

  const lineupAway = await FeedInstanceAway.getLineup().catch(err => {
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

  const lineupPlayers = [];

  _.each(_.get(lineupHome, 'lineup', {}), linePlayers => {
    _.each(linePlayers, linePlayer => {
      // LOGGER.debug("linePlayer %o", linePlayer);
      lineupPlayers.push(linePlayer.playerId.toString());
    });
  });

  _.each(_.get(lineupAway, 'lineup', {}), linePlayers => {
    _.each(linePlayers, linePlayer => {
      // LOGGER.debug("linePlayer %o", linePlayer);
      lineupPlayers.push(linePlayer.playerId.toString());
    });
  });

  // LOGGER.debug("lineupPlayers %o", lineupPlayers);

  const playersImages = await getItemsPure(
    {
      'data.id': { $in: lineupPlayers },
      group: 'players'
    },
    MediaM
  ).catch(err => {
    console.log('err', err);
  });
  // // console.log("FeedInstance", FeedInstance);
  //
  _.each(playersImages, dbItem => {
    const playerId = _.get(dbItem, 'data.id');
    delete dbItem._id;
    _.set(assets, `p_${playerId}`, dbItem);
  });

  return {
    teamSide: _.get(event, 'side'),
    game,
    assets,
    lineupHome: _.get(lineupHome, 'lineup', null),
    lineupAway: _.get(lineupAway, 'lineup', null)
  };
};

module.exports = Template;
