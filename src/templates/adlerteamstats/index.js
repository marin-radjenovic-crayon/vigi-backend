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

  const standing = await FeedInstance.getStandingTable().catch(err => {
    LOGGER.error(err);
  });

  const game = await FeedInstance.getGameInfo().catch(err => {
    LOGGER.error(err);
  });

  const previousMatchdays = await FeedInstance.getLastXMatchdays(5).catch(err => {
    LOGGER.error(err);
  });

  const teamStats = await FeedInstance.getTeamStatsSeason().catch(err => {
    LOGGER.error(err);
  });

  const assets = {};

  const teamHome = await getItem(
    {
      'data.id': event.homeTeamId,
      group: 'teams'
    },
    MediaM
  ).catch(err => {
    LOGGER.error(err);
  });

  const teamAway = await getItem(
    {
      'data.id': event.awayTeamId,
      group: 'teams'
    },
    MediaM
  ).catch(err => {
    LOGGER.error(err);
  });

  if (teamHome) {
    _.set(assets, 'teamHome', teamHome);
  }

  if (teamAway) {
    _.set(assets, 'teamAway', teamAway);
  }

  _.set(assets, 'teamHome', teamHome);

  const standingTeamIds = [];

  _.each(standing, (item, index) => {
    standingTeamIds.push(item.id.toString());
  });

  const standingLogos = await getItemsPure(
    {
      'data.id': { $in: standingTeamIds },
      group: 'teams'
    },
    MediaM
  ).catch(err => {
    LOGGER.error(err);
  });

  _.each(standingLogos, dbItem => {
    const teamId = _.get(dbItem, 'data.id');
    delete dbItem._id;
    _.set(assets, `t_${teamId}`, dbItem);
  });

  return {
    event,
    teamSide: _.get(event, 'side'),
    game,
    teamStats,
    previousMatchdays,
    standing,
    assets
  };
};

module.exports = Template;
