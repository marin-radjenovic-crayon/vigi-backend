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
    let setupEvent = await getUserEvent(this.req);
    setupEvent = setupEvent.data;
    const setupFeedType = _.get(setupEvent, 'data.event.feedType', 'opta');

    getSingleDefaultHandler.call(this, {
      initialData: {
        ...initialData,
        event: {
          ...initialData.event,
          feedType: setupFeedType
        }
      }
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

    const liveMatchEvents = await FeedInstance.setLiveMatchEvents(callOptions).catch(err => {
      console.log('err', err);
    });

    const liveData = liveMatchEvents?.liveData || null;

    return {
      teamSide: event?.side,
      matchDetails: liveData?.matchDetails,
      assets: {}
    };
  };
}

module.exports = Template;
