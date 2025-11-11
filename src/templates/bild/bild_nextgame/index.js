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

  const type = _.find(baseData.data.fields, { id: 'type' })?.value;

  const FeedInstance = new FnFeedsClass({
    target: {
      eventId: event.eventId,
      league: event.competitionId,
      teamId: event.selectedTeamId
    }
  });

  const now = new Date();
  let currentGame = {
    id: event.eventId
  };

  let nextGame = null;
  let nextMatchInfo = null;

  if (type === 'global') {
    nextGame = (await FeedInstance.getNextLeagueMatch())?.[0];
    nextMatchInfo = nextGame?.matchInfo;
  } else {
    nextGame = await FeedInstance.getNextMatchday(currentGame.id).catch(err => {
      console.log('err', err);
    });

    nextMatchInfo = await FeedInstance.getMatchById(nextGame?.id).catch(err => {
      console.log('err', err);
    });
  }

  const { liveData } = await FeedInstance.getMatch().catch(err => {
    console.log('err', err);
  });

  const assets = {};

  return {
    nextMatchInfo,
    matchDetails: liveData?.matchDetails,
    nextGame,
    assets
  };
};

module.exports = Template;
