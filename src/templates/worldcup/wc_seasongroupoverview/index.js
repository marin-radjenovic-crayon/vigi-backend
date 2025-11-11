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

  let yestarday = new Date(`${tournamentCalendar.startDate}00:00:00Z`);
  let today = new Date(`${tournamentCalendar.endDate}23:59:59Z`);

  const results = rangeAvailable
    ? await FeedInstance.getMatchdaysInRange(yestarday.toISOString(), today.toISOString()).catch(err => {
        console.log('err', err);
      })
    : [];

//   const matchdays = _.groupBy(results?.matchdays, m => m?.matchInfo?.stage?.name);
//
// // Initialize an object to hold the final grouped data
//   const groupedStages = {};
//
// // Iterate over each stage in `matchdays`
//   Object.keys(matchdays).forEach(stageName => {
//     const stageMatchdays = matchdays[stageName];
//
//     // Group matchdays by league within the current stage
//     const leagues = _.groupBy(stageMatchdays, m => m?.matchInfo?.league?.name);
//
//     // Initialize an object to hold the grouped series for each league
//     const groupedLeaguesBySeries = {};
//
//     // Iterate over each league and group by series
//     Object.keys(leagues).forEach(leagueName => {
//       console.log('leagueName', leagueName)
//
//       groupedLeaguesBySeries[leagueName] = _.groupBy(leagues[leagueName], m => m?.matchInfo?.series?.name);
//     });
//
//     console.log('stageName', stageName)
//
//     // Store the grouped data by stage name
//     groupedStages[stageName] = groupedLeaguesBySeries;
//   });
//
//   console.log('#matchdays', matchdays);
//   console.log('#groupedStages', groupedStages);

  const matchdays = _.groupBy(results?.matchdays, m => m?.matchInfo?.stage?.name);
  const groupStage = _.groupBy(matchdays?.['Group Stage'], m => m?.matchInfo?.series?.name);
  const sorted = Object.keys(groupStage)
    .sort()
    .reduce((acc, key) => {
      acc[key] = groupStage[key];
      return acc;
    }, {});

  const { matchInfo, liveData } = await FeedInstance.getMatch().catch(err => {
    console.log('err', err);
  });

  const assets = {};

  return {
    matchInfo,
    groupStage: sorted,
    assets
  };
};

module.exports = Template;
