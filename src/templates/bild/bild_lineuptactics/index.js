const TemplatesRecordsM = require('../../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/heimspiel/functions');
const FnOptaFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
const MediaM = require('../../../models/media');
const { detectFormation } = require('@/src/controllers/feeds/heimspiel/helpers');
const playersMapping = require('@/playerMapping');
const eventMapping = require('@/eventMapping');
const teamMapping = require('@/teamMapping');
const { germanBundelisgaId } = require('../id');

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

  const optaEvent = {
    eventId: eventMapping[event.eventId],
    selectedTeamId: teamMapping[event.selectedTeamId],
    competitionId: germanBundelisgaId // German bundesliga 2025/2026 season
  }

  const FeedInstance = new FnFeedsClass({
    target: {
      eventId: event.eventId,
      league: event.competitionId,
      teamId: event.selectedTeamId
    },
    client: 'bild'
  });

  const FeedOptaInstance = new FnOptaFeedsClass({
    target: {
      eventId: optaEvent.eventId,
      league: optaEvent.competitionId,
      teamId: optaEvent.selectedTeamId
    },
  });

  const match = await FeedInstance.getMatchById().catch(err => {
    console.log('err', err);
  });

  const { tactical } = match;
  const homeId = match.home.id;
  const awayId = match.away.id;
  const teamSide = _.find(baseData.data.fields, { id: 'selectedSide' })?.value;
  const targetTeam = teamSide === 'home' ? homeId : awayId;
  const teamTactical = tactical?.filter((t) => t.team_id === targetTeam);

  let allPlayerMapping = playersMapping['playerMapping'];

  const { lineup, liveData, matchInfo } = await FeedOptaInstance.getLineup().catch(err => {
    console.log('err', err);
  });

  if (teamTactical) {
    const { formation, lines } = detectFormation(teamTactical);
    return {
      matchInfo: match,
      formation,
      lines,
      allPlayerMapping,
      lineup,
      optaMatchInfo: matchInfo
    };
  }

  return {
    matchInfo: match,
    formation: null,
    lines: null,
    allPlayerMapping: null,
    lineup,
    optaMatchInfo: matchInfo
  };


};

module.exports = Template;
