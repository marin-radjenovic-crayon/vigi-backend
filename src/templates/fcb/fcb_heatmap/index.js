const TemplatesRecordsM = require('../../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
const MediaM = require('../../../models/media');

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

  // add some data into initial data

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

Template.prototype.getDynamicData = async function (baseData, callOptions) {
  const event = _.get(baseData, 'event');

  const FeedInstance = new FnFeedsClass({
    target: {
      eventId: event.eventId,
      league: event.competitionId,
      teamId: event.selectedTeamId
    }
  });

  const teamSide = _.find(baseData.data.fields, { id: 'selectedSide' })?.value;
  const playerSelected = _.find(baseData.data.fields, { id: 'heatmap_players' })?.value;
  const { matchInfo, liveData } = await FeedInstance.getMatch().catch(err => {
    LOGGER.error(err);
  });

  const fcbId = "apoawtpvac4zqlancmvw4nk4o";
  const KaneId = "b9g4qurpll4wizajo95c406hh";
  const teamHeatmap = await FeedInstance.getTeamHeatmap(fcbId, callOptions).catch(err => {
    console.error(err);
  });

  const playerHeatmap = await FeedInstance.getPlayerHeatmap(fcbId, KaneId, callOptions).catch(err => {
    LOGGER.error(err);
  });

  const assets = {};

  return {
    ...playerHeatmap,
    teamHeatmap,
    matchInfo,
    liveData,
    assets
  };
};

module.exports = Template;
