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
      league: Number(event.competitionId || 1),
      teamId: event.selectedTeamId
    }
  });

  const game = await FeedInstance.getGameInfo().catch(err => {
    console.error('game err', err);
  });

  const thisGame = await FeedInstance.getMatchday().catch(err => {
    console.error('thisGame err', err);
  });

  const nextGame = await FeedInstance.getNextMatchday().catch(err => {
    console.error('nextGame err', err);
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

  if (teamHome) {
    _.set(assets, 'teamHome', teamHome);
  }

  if (teamAway) {
    _.set(assets, 'teamAway', teamAway);
  }

  return {
    teamSide: _.get(event, 'side'),
    game,
    thisGame,
    nextGame,
    assets
  };
};

module.exports = Template;
