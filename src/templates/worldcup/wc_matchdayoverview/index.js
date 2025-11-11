const TemplatesRecordsM = require('../../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

const {
  format,
  compareAsc,
  setMinutes,
  setSeconds,
  setHours,
  setMilliseconds,
  add,
  parseISO,
  sub
} = require('date-fns');
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

  await FeedInstance.setTeamSchedule();

  const tournamentCalendar = FeedInstance.apiData?.tournamentCalendar;

  const rangeAvailable = tournamentCalendar?.startDate && tournamentCalendar.endDate;

  let yestarday = new Date(`${tournamentCalendar?.startDate}00:00:00Z`);
  let today = new Date(`${tournamentCalendar?.endDate}23:59:59Z`);

  const matchdays = rangeAvailable
    ? await FeedInstance.getMatchdaysInRange(yestarday.toISOString(), today.toISOString()).catch(err => {
        console.log('err', err);
      })
    : [];
  //
  // console.log('matchdays', JSON.stringify(matchdays));

  const { matchInfo, liveData } = await FeedInstance.getMatch().catch(err => {
    console.log('err', err);
  });

  const assets = {};

  return {
    matchInfo,
    matchdays: matchdays?.matchdays,
    series: matchdays?.series,
    assets
  };
};

module.exports = Template;
