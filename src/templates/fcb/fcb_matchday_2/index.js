const _ = require('lodash');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
const getSingleDefaultHandler = require('@/src/templates/_helpers/getSingle');
const setSingleDefaultHandler = require('@/src/templates/_helpers/setSingle');

const initialData = require('./initialData');
const getUserEvent = require('@/src/controllers/functions/getUserEvent');

const getPrevMatches = (matches) => {
  const today = new Date();

  const filtered = matches.filter(item => {
    const rawDate = item.matchInfo.date.replace('Z', 'T00:00:00Z');
    const matchDate = new Date(rawDate);
    return matchDate <= today;
  });
  return filtered;
}

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

  getDynamicData = async function (baseData) {
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

    const homeTeam = matchInfo?.contestant?.[0]?.id;
    const awayTeam = matchInfo?.contestant?.[1]?.id;
    const { match } = await FeedInstance.getMatchesBetweenTwo(homeTeam, awayTeam);
    const prevMatches = getPrevMatches(match);
    const last10Matches = prevMatches?.slice(0, 10)

    const homeLastGames = await FeedInstance.getTeamLastGames('home').catch(err => {
      console.log('err', err);
    });

    const awayLastGames = await FeedInstance.getTeamLastGames('away').catch(err => {
      console.log('err', err);
    });

    return {
      event,
      homeLastGames,
      awayLastGames,
      last10Matches,
      assets: {},
      timezones: [
        {
          city: 'Hawaii',
          timezone: 'Pacific/Honolulu'
        },
        {
          city: 'Los Angeles',
          timezone: 'America/Los_Angeles'
        },
        {
          city: 'Mexico City',
          timezone: 'America/Mexico_City'
        },
        {
          city: 'New York',
          timezone: 'America/New_York'
        },
        {
          city: 'Rio De Janeiro',
          timezone: 'America/Sao_Paulo'
        },
        {
          city: 'Dakar',
          timezone: 'Africa/Dakar'
        },
        {
          city: 'Abuja',
          timezone: 'Africa/Lagos'
        },
        {
          city: 'Munich',
          timezone: 'Europe/Berlin'
        },
        {
          city: 'Nairobi',
          timezone: 'Africa/Nairobi'
        },
        {
          city: 'New Delhi',
          timezone: 'Asia/Kolkata'
        },
        {
          city: 'Bangkok',
          timezone: 'Asia/Bangkok'
        },
        {
          city: 'Jakarta',
          timezone: 'Asia/Jakarta'
        },
        {
          city: 'Shanghai',
          timezone: 'Asia/Shanghai'
        },
        {
          city: 'Seoul',
          timezone: 'Asia/Tokyo'
        },
        {
          city: 'Sydney',
          timezone: 'Australia/Sydney'
        },
      ],
    };
  };
}

module.exports = Template;
