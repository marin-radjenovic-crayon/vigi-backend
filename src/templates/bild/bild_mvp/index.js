const TemplatesRecordsM = require('../../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/heimspiel/functions');
const MediaM = require('../../../models/media');
const { detectFormation } = require('@/src/controllers/feeds/heimspiel/helpers');

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

  const mvp = await FeedInstance.getMVP(match).catch(err => {
    console.log('err', err);
  });
  const winningTeamSide = mvp?.winningTimeIndex === 0 ? 'home' : 'away';
  const {tactical} = match;
  const homeId = match.home.id;
  return {
    matchInfo: match,
    mvp,
    winningTeamSide
  };
};

module.exports = Template;
