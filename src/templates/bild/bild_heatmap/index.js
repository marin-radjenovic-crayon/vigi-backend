const TemplatesRecordsM = require('../../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
const FnBildFeedsClass = require('../../../../src/controllers/feeds/heimspiel/functions');
const MediaM = require('../../../models/media');
const eventMapping = require('@/eventMapping');
const teamMapping = require('@/teamMapping');
const playersMapping = require('@/playerMapping');
const fs = require("fs");
const { germanBundelisgaId } = require('../id');
const { buildPlayerMappings, getAllPlayerMappings } = require('../helper');

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
  const event = _.get(baseData, 'event');
  const optaEvent = {
    eventId: eventMapping[event.eventId],
    selectedTeamId: teamMapping[event.selectedTeamId],
    competitionId: germanBundelisgaId // German bundesliga 2025/2026 season
  }

  const FeedBildInstance = new FnBildFeedsClass({
    target: {
      eventId: event.eventId,
      league: event.competitionId,
      teamId: event.selectedTeamId
    },
    client: 'bild'
  });
  const FeedInstance = new FnFeedsClass({
    target: {
      eventId: optaEvent.eventId,
      league: optaEvent.competitionId,
      teamId: optaEvent.selectedTeamId
    },
  });

  const teamSide = _.find(baseData.data.fields, { id: 'selectedSide' })?.value;

  const { matchInfo, liveData } = await FeedInstance.getMatch().catch(err => {
    LOGGER.error(err);
  });
  const liveMatchStats = await FeedInstance.setLiveMatchStats().catch(err => {
    console.log('err', err);
  });
  const optaLineUp = liveMatchStats?.liveData?.lineUp;

  const match = await FeedBildInstance.getMatchById().catch(err => {
    console.log('err', err);
  });

  const heimLineup = match?.match_event?.filter((e) => e.kind === "lineup" || e.kind === 'substitute-in');

  const { reversePlayerMapping } = buildPlayerMappings(
    heimLineup,
    optaLineUp,
    teamMapping
  );

  // const bildMatches = await FeedBildInstance.getBildSeasonMatches();
  // const finishedMatches = bildMatches?.filter((m) => m.finished === 'yes');

  // const allMapping = await getAllPlayerMappings(finishedMatches, FnFeedsClass, FnBildFeedsClass);
  // console.log('allMapping: ', allMapping)
  // fs.writeFileSync(
  //   "playerMapping.js",
  //   `const playerMapping = ${JSON.stringify(allMapping, null, 2)};\n\nmodule.exports = playerMapping;`
  // );
  let allPlayerMapping = {}
  if (reversePlayerMapping) {
    allPlayerMapping = reversePlayerMapping;
  } else {
    allPlayerMapping = playersMapping['reversePlayerMapping']
  }

  const targetTeam = teamSide === 'home' ? matchInfo?.contestant?.[0]?.id : matchInfo?.contestant?.[1]?.id;

  const playerHeatmap = await FeedInstance.getTopPlayerHeatmap(targetTeam, callOptions).catch(err => {
    LOGGER.error(err);
  });

  const assets = {};

  return {
    ...playerHeatmap,
    optaMatchInfo: matchInfo,
    liveData,
    matchDetails: liveData?.matchDetails,
    assets,
    reversePlayerMapping: allPlayerMapping,
    matchInfo: match
  };
};

module.exports = Template;
