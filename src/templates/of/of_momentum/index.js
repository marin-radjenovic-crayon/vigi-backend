const TemplatesRecordsM = require('../../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
const MediaM = require('../../../models/media');


function buildMomentumData(data, totalMinutes = 96, scaleFactor = 100000) {
  const homeMomentum = Array(totalMinutes).fill(0);
  const awayMomentum = Array(totalMinutes).fill(0);

  // Step 1: Fill in per-minute probabilities
  data.forEach(minuteData => {
    const idx = minuteData.timeMin - 1;
    if (idx >= 0 && idx < totalMinutes) {
      const homeProb = parseFloat(minuteData.prediction.find(p => p.type === "Home")?.probability || 0);
      const awayProb = parseFloat(minuteData.prediction.find(p => p.type === "Away")?.probability || 0);
      homeMomentum[idx] = homeProb;
      awayMomentum[idx] = awayProb;
    }
  });

  // Step 2: Aggregate per 5-min window based on net control
  const step = 5;
  const result = [];

  for (let start = 0; start < 90; start += step) {
    const end = Math.min(start + step, 90);
    let actualEnd = end;
    if (end === 90 && totalMinutes > 90) actualEnd = totalMinutes;

    const homeSlice = homeMomentum.slice(start, actualEnd);
    const awaySlice = awayMomentum.slice(start, actualEnd);
    // Compute net control per minute, then sum
    const netSum = homeSlice.reduce((a, b, i) => a + (b - awaySlice[i]), 0);
    // ✅ Adjust last window proportionally to 5-min equivalent
    const duration = actualEnd - start;
    const normalizedNet = (duration !== step) ? netSum * (step / duration) : netSum;


    let teamA = 0;
    let teamB = 0;

    if (normalizedNet > 0) {
      teamA = normalizedNet * scaleFactor;
    } else if (normalizedNet < 0) {
      teamB = Math.abs(normalizedNet) * scaleFactor;
    }

    result.push({
      range: `${start + 1}-${actualEnd}`,
      teamA: parseFloat(teamA.toFixed(2)),
      teamB: parseFloat(teamB.toFixed(2)),
    });

    if (actualEnd === totalMinutes) break;
  }

  return result;
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
  const { predictions, goal } = await FeedInstance.getMomentum().catch(err => {
    console.log('err', err);
  });

  const contestant = matchInfo?.contestant;
  const homeId = contestant?.[0]?.id;
  const awayId = contestant?.[1]?.id;
  const momentumData = buildMomentumData(predictions, predictions.length);
  const assets = {};

  return {
    matchInfo,
    liveData,
    goalData: momentumData,
    goal,
    assets
  };
};

module.exports = Template;
