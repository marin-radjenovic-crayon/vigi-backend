const TemplatesRecordsM = require('../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../_helpers/getSingle');
const setSingleDefaultHandler = require('../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../src/controllers/feeds/del/functions');
const FnWiseClass = require('../../../src/controllers/feeds/wisehockey/functions');
const MediaM = require('../../models/media');
const { competitionMapping } = require('../../config/wisehockey/feedCfg');

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

  const game = await FeedInstance.getGameInfo().catch(err => {
    console.log('getGameInfo err', err);
  });

  const FeedWise = new FnWiseClass({
    target: {
      eventId: event.eventId,
      league: competitionMapping[event.competitionId],
      teamId: event.selectedTeamId
    }
  });

  const assets = {};

  const teamSide = _.find(baseData.data.fields, { id: 'selectedSide' })?.value;
  const rankingType = _.find(baseData.data.fields, { id: 'rankingType' })?.value;

  const matchRanks = await FeedWise.getMatchRanks().catch(err => {
    console.log('getMatchRanks err', err);
  });

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

  const sideRanks = _.get(matchRanks, teamSide, {});
  const sideTypeRank = _.get(sideRanks, rankingType, []);

  const players = [];

  _.each(sideTypeRank, scorer => {
    // LOGGER.debug("linePlayer %o", linePlayer);
    let playerId = _.get(scorer, 'shooter');

    if (!playerId) {
      playerId = _.get(scorer, 'player');
    }

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
    teamSide,
    game,
    assets,
    matchRanks
  };
};

module.exports = Template;
