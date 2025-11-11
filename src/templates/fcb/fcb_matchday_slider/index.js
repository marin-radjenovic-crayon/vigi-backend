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


function getTop5Scorers(events, contestantId) {
  const statsMap = {};

  for (const event of events) {
    if (!event) continue;
    if (event.contestantId !== contestantId) continue;

    const scorerId = event.scorerId;
    if (!statsMap[scorerId]) {
      statsMap[scorerId] = {
        player: {
          id: scorerId,
          name: event.scorerName
        },
        goals: 0,
        assists: 0
      };
    }
    statsMap[scorerId].goals += 1;


    // Count assists (only if assistPlayerId exists)
    if (event.assistPlayerId) {
      const assistId = event.assistPlayerId;
      if (!statsMap[assistId]) {
        statsMap[assistId] = {
          player: {
            id: assistId,
            name: event.assistPlayerName
          },
          goals: 0,
          assists: 0
        };
      }
      statsMap[assistId].assists += 1;
    }
  }

  // Convert to array and sort
  const sorted = Object.values(statsMap).sort((a, b) => {
    if (b.goals === a.goals) {
      return b.assists - a.assists;
    }
    return b.goals - a.goals;
  });

  // Return top 5
  return sorted.slice(0, 5);
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
    const { match: homeTeamAllMatches } = await FeedInstance.getMatchesForRange(homeTeam);
    const homeAllEvents = homeTeamAllMatches.map((m) => m.liveData.goal).flat();

    const homeTopScorers = getTop5Scorers(homeAllEvents, homeTeam);


    const { match: awayTeamAllMatches } = await FeedInstance.getMatchesForRange(awayTeam);
    const awayAllEvents = awayTeamAllMatches.map((m) => m.liveData.goal).flat();

    const awayTopScorers = getTop5Scorers(awayAllEvents, awayTeam);

    const prevMatches = getPrevMatches(match);
    let homeWins = 0;
    let homeDraws = 0;
    let homeLoss = 0;
    for (const match of prevMatches) {
      const { matchInfo, liveData: { matchDetails } } = match;
      const _homeTeam = matchInfo?.contestant?.[0]?.id;
      if (homeTeam === _homeTeam) {
        if (matchDetails?.winner === 'home') {
          homeWins++;
        } else if (matchDetails?.winner === 'draw') {
          homeDraws++;
        } else {
          homeLoss++;
        }
      } else {
        if (matchDetails?.winner === 'home') {
          homeLoss++;
        } else if (matchDetails?.winner === 'draw') {
          homeDraws++;
        } else {
          homeWins++;
        }
      }
    }
    const last5Matches = prevMatches?.slice(0, 10)

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
      homeTeamScorers: homeTopScorers,

      awayTeamScorers: awayTopScorers,
      last5Matches,
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
      totalScores: {
        homeWins,
        homeDraws,
        homeLoss
      }
    };
  };
}

module.exports = Template;
