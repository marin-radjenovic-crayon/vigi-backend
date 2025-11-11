const _ = require('lodash');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../controllers/feeds/opta/functions');

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

    const FeedInstance = new FnFeedsClass({
      target: {
        eventId: event.eventId,
        league: event.competitionId,
        teamId: event.selectedTeamId
      }
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
      ['total scoring att'],
      ['total scoring att',],
      ['total games']
    ).catch(err => console.log('err', err));

    const lineUp = liveMatchStats?.liveData?.lineUp;

    return {
      assets: {},
      matchDetails: liveData.matchDetails,
      lineUp,
      goalShots: dangerousActions,
      matchInfo,
      matchStats: liveMatchStats,
      teamRanking: ranking
    };
  };
}

module.exports = Template;
