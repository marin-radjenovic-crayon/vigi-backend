const _ = require('lodash');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
const getSingleDefaultHandler = require('@/src/templates/_helpers/getSingle');
const setSingleDefaultHandler = require('@/src/templates/_helpers/setSingle');

const initialData = require('./initialData');
const getUserEvent = require('@/src/controllers/functions/getUserEvent');

class Template {
  constructor(req, res) {
    this.template = req.params.template;
    this.uuid = req.params.uuid;
    this.templateconf = _.find(MAINCONFIG.templates, { name: this.template });
    this.res = res;
    this.req = req;
  }

  getSingle = async function () {
    await getSingleDefaultHandler.call(this, {
      initialData
    });
  };

  // the start method
  setSingle = async function () {
    await setSingleDefaultHandler.call(this, {
      initialData
    });
  };

  getDynamicData = async function (baseData) {
    const event = _.get(baseData, 'event');

    const FeedInstance = new FnFeedsClass({
      target: {
        eventId: event.eventId,
        league: event.competitionId,
        teamId: event.selectedTeamId
      }
    });

    const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId: event.competitionId }) || {
      competitionId: event.competitionId
    };

    const standing = await FeedInstance.getStandingTable().catch(err => {
      console.log('err', err);
    });

    const closest = await FeedInstance.getClosestMatchFromSchedule(new Date(), [], competitionConfig).catch(err => {
      console.log('err', err);
    });

    const { matchInfo, liveData } = await FeedInstance.getMatch().catch(err => {
      console.log('err', err);
    });

    const assets = {};

    return {
      matchInfo,
      currentWeek: closest?.todaysWeek,
      currentStage: closest?.todaysStage,
      standing,
      assets
    };
  };
}

module.exports = Template;
