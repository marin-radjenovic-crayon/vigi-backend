const TemplatesRecordsM = require('../../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
const MediaM = require('../../../models/media');
const { default: axios } = require('axios');

async function fetchGoalRecords(competitionId, homeTeamId, awayTeamId) {
  try {
    const filter = {
      "event.competitionId": competitionId,
      template_name: "wc_goal",
      "$or": [
        { "event.homeTeamId": { $in: [homeTeamId, awayTeamId] } },
        { "event.awayTeamId": { $in: [homeTeamId, awayTeamId] } }
      ]
    };
    const response = await axios.get("https://api-samsung.vigitalsolutions.com/templates", {
      params: {
        filter: JSON.stringify(filter)
      }
    });
    const result = response.data.docs ?? response.data;

    return result;

  } catch (error) {
    console.error("Error fetching template records:", error.response?.data || error.message);
    throw error;
  }
}

const ranges = [
  { label: "0-15", min: 0, max: 15 },
  { label: "15-30", min: 15, max: 30 },
  { label: "30-45", min: 30, max: 45 },
  { label: "45-60", min: 45, max: 60 },
  { label: "60-75", min: 60, max: 75 },
  { label: "75-96", min: 75, max: 150 },
];
function categorizeTime(data) {

  // Initialize counts
  const counts = {};
  ranges.forEach(r => counts[r.label] = 0);

  // Count items in each range
  data.forEach(item => {
    const totalMin = item.timeMin + item.timeSec / 60;
    for (let r of ranges) {
      if (totalMin >= r.min && totalMin < r.max) {
        counts[r.label]++;
        break; // stop once we found the correct range
      }
      // Include the upper bound for the last range
      if (r.label === "75-96" && totalMin <= r.max) {
        counts[r.label]++;
        break;
      }
    }
  });

  return counts;
}

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
    }
  });

  const competitionId = event.competitionId;
  // homeId, awayId need both

  const { matchInfo, liveData } = await FeedInstance.getMatch().catch(err => {
    console.log('err', err);
  });

  const contestant = matchInfo?.contestant;
  const homeId = contestant?.[0]?.id;
  const awayId = contestant?.[1]?.id;

  const goals = await fetchGoalRecords(competitionId, homeId, awayId);
  const homeGoals = goals.filter((goal) => goal?.event?.homeTeamId === homeId || goal?.event?.awayTeamId === homeId);
  const awayGoals = goals.filter((goal) => goal?.event?.homeTeamId === awayId || goal?.event?.awayTeamId === awayId);
  const homeUpdaters = homeGoals?.map((i) => i?.data?.updater);
  const awayUpdaters = awayGoals?.map((i) => i?.data?.updater)
  const homeCounts = categorizeTime(homeUpdaters)
  const awayCounts = categorizeTime(awayUpdaters);
  const result = ranges.map(r => ({
    range: r.label,
    teamA: homeCounts[r.label],
    teamB: awayCounts[r.label],
  }));
  const assets = {};

  return {
    matchInfo,
    liveData,
    goals,
    goalData: result,
    assets
  };
};

module.exports = Template;
