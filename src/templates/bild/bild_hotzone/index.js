const _ = require('lodash');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../controllers/feeds/opta/functions');
const FnBildFeedsClass = require('../../../../src/controllers/feeds/heimspiel/functions');
const eventMapping = require('@/eventMapping');
const teamMapping = require('@/teamMapping');
const { germanBundelisgaId } = require('../id');

class Template {
  constructor(req, res) {
    this.template = req.params.template;
    this.uuid = req.params.uuid;
    this.templateconf = MAINCONFIG.templates.find(({ name }) => name === this.template);
    this.res = res;
    this.req = req;
  }

  getSingle = async function () {
    getSingleDefaultHandler.call(this, {
      initialData
    });
  };

  setSingle = async function () {
    setSingleDefaultHandler.call(this, {
      initialData
    });
  };

  getDynamicData = async function (baseData, callOptions) {
    const event = baseData.event;

    // const teamSide = baseData.data.fields.find(({ id }) => id === 'selectedSide').value;
    const optaEvent = {
      eventId: eventMapping[event.eventId],
      selectedTeamId: teamMapping[event.selectedTeamId],
      competitionId: germanBundelisgaId // German bundesliga 2025/2026 season
    }
    const FeedInstance = new FnFeedsClass({
      target: {
        eventId: optaEvent.eventId,
        league: optaEvent.competitionId,
        teamId: optaEvent.selectedTeamId
      },
    });

    const FeedBildInstance = new FnBildFeedsClass({
      target: {
        eventId: event.eventId,
        league: event.competitionId,
        teamId: event.selectedTeamId
      },
      client: 'bild'
    });

    const { matchInfo, liveData } = await FeedInstance.getMatch().catch(err => {
      console.log('err', err);
    });

    const fields = this.req?.body?.fields;
    const selectedSide = fields?.selectedSide;
    const selectedValue = selectedSide?.value ?? "home";
    const dangerousActions = await FeedInstance.getDangerousActions(callOptions, matchInfo, selectedValue).catch(err => {
      console.log('error getting dangerous actions: ', err);
    })


    const liveMatchStats = await FeedInstance.setLiveMatchStats().catch(err => {
      console.log('err', err);
    });

    const ranking = await FeedInstance.getTournamentTeamRanking(
      ['total goals', 'total scoring att'],
      ['total scoring att', 'total goals'],
      ['total games']
    ).catch(err => console.log('err', err));

    const lineUp = liveMatchStats?.liveData?.lineUp;
    const match = await FeedBildInstance.getMatchById().catch(err => {
      console.log('err', err);
    });
    return {
      assets: {},
      matchDetails: liveData.matchDetails,
      lineUp,
      goalShots: dangerousActions,
      optaMatchInfo: matchInfo,
      matchInfo: match,
      matchStats: liveMatchStats,
      teamRanking: ranking
    };
  };
}

module.exports = Template;
