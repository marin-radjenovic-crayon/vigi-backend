//const TemplatesRecordsM = require('../../../models/template_records');
//const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

//const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
//const MediaM = require('../../../models/media');
const { extractAttackingZonesData } = require('./functions');

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

Template.prototype.getDynamicData = async function (baseData, callOptions) {
  const event = baseData.event;
  const teamSide = baseData.data.fields.find(({ id }) => id === 'selectedSide').value;

  const FeedInstance = new FnFeedsClass({
    target: {
      eventId: event.eventId,
      league: event.competitionId,
      teamId: event.selectedTeamId
    }
  });

  const liveMatchEvents = await FeedInstance.setLiveMatchEvents(callOptions).catch(err => {
    console.log('err', err);
  });

  const matchInfo = liveMatchEvents?.matchInfo;
  const liveData = liveMatchEvents?.liveData;

  const homeTeam = matchInfo?.contestant?.[0];
  const awayTeam = matchInfo?.contestant?.[1];

  const attackingZones = liveMatchEvents?.matchInfo
    ? extractAttackingZonesData(liveData?.event, homeTeam.id, awayTeam.id)
    : null;

  const assets = {};

  return {
    matchInfo,
    matchDetails: liveData?.matchDetails,
    assets,
    attackingZones: attackingZones?.[teamSide],
    teamSide
  };
};

module.exports = Template;
