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

  const startingSixHome = await FeedInstanceHome.getStartingSix().catch(err => {
    console.log('err', err);
  });

  const startingSixAway = await FeedInstanceAway.getStartingSix().catch(err => {
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

  const players = [];

  const onlyStartingSixHome = _.get(startingSixHome, 'startingSix', []);
  const onlyStartingSixAway = _.get(startingSixAway, 'startingSix', []);

  _.each(onlyStartingSixHome, scorer => {
    // LOGGER.debug("linePlayer %o", linePlayer);
    const playerId = _.get(scorer, 'playerId');

    if (playerId) {
      players.push(playerId.toString());
    }
  });

  _.each(onlyStartingSixAway, scorer => {
    // LOGGER.debug("linePlayer %o", linePlayer);
    const playerId = _.get(scorer, 'playerId');

    if (playerId) {
      players.push(playerId.toString());
    }
  });

  const playersImages = await getItemsPure(
    {
      'data.id': { $in: players },
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
    teamSide: _.get(event, 'side'),
    game,
    startingSixHome: onlyStartingSixHome,
    startingSixAway: onlyStartingSixAway,
    assets
  };
};

module.exports = Template;
