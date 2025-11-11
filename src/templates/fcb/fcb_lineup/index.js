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

    await getSingleDefaultHandler.call(this, {
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
    await setSingleDefaultHandler.call(this, {
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


    const { lineup, liveData, matchInfo } = await FeedInstance.getLineup().catch(err => {
      console.log('err', err);
    });

    // const fcbTeamId = 'apoawtpvac4zqlancmvw4nk4o';
    // const seasonStats = await FeedInstance.getSeasonStats(fcbTeamId);
    //
    // console.log('seasonStats.player', seasonStats.player)
    //
    // console.log('seasonStats', seasonStats.player.map((p)=> {
    //   return {
    //     label: p?.lastName,
    //     position: p?.position,
    //     value: p?.lastName,
    //     id: p?.id,
    //     shirtNumber: p?.shirtNumber,
    //     shortFirstName: p?.shortFirstName,
    //     shortLastName: p?.shortLastName,
    //   }
    // }))

    return {
      matchInfo,
      lineup: lineup,
      liveData,
      assets: {}
    };
  };
}

module.exports = Template;
