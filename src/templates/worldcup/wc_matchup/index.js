const _ = require('lodash');

const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../controllers/feeds/opta/functions');
const {cloneDeep} = require("lodash");

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

  const liveMatchStats = await FeedInstance.setLiveMatchStats().catch(LOGGER.error);
  const matchday = await FeedInstance.getCurrentMatchday().catch(LOGGER.error);
  const standing = await FeedInstance.getStandingTable().catch(LOGGER.error);

  if (!standing?.[0]?.ranking) {
    LOGGER.error("Missing standing data");
    return {};
  }

  const ranking = standing[0].ranking;
  const validTeams = new Set(ranking.map(t => t.contestantId));
  const teamMeta = Object.fromEntries(ranking.map(t => [
    t.contestantId,
    { contestantName: t.contestantName }
  ]));

  async function getTeamStandings() {
    const allGames = await Promise.all(
      ranking.map(async item => {
        const games = await FeedInstance.getLastGamesByTeamId(item.contestantId, 15).catch(err => {
          console.error('Error fetching games for:', item.contestantName, err);
          return [];
        });
        return games;
      })
    );

    // Flatten and filter valid
    const allMatches = allGames.flat().filter(
      m => validTeams.has(m.homeId) && validTeams.has(m.awayId)
    );

    // Deduplicate
    const uniqueMatchesMap = new Map();
    for (const m of allMatches) {
      const key = `${m.homeId}-${m.awayId}-${m.week}-${m.scoreHome}-${m.scoreAway}`;
      if (!uniqueMatchesMap.has(key)) {
        uniqueMatchesMap.set(key, m);
      }
    }
    const uniqueMatches = Array.from(uniqueMatchesMap.values());
    uniqueMatches.sort((a, b) => Number(b.week) - Number(a.week)); // DESC, newest first

    // Build matchday buckets using match.week directly
    const matchdayBuckets = {}; // {matchday: [matches]}
    for (const match of uniqueMatches) {
      const matchday = Number(match.week); // Use match.week directly as the matchday
      if (!matchdayBuckets[matchday]) {
        matchdayBuckets[matchday] = [];
      }
      matchdayBuckets[matchday].push(match);
    }

    const last10GamesStandings = [];
    const last10GamesStandingsDebug = [];

    // Initialize tempStandings
    const tempStandings = Object.fromEntries(
      ranking.map(t => [t.contestantId, {
        contestantId: t.contestantId,
        points: t.points ?? 0,
        goalsFor: t.goalsFor ?? 0,
        goalsAgainst: t.goalsAgainst ?? 0,
        goalDifference: (t.goalsFor ?? 0) - (t.goalsAgainst ?? 0)
      }])
    );

// Sort matchdays in descending order (newest to oldest)
    const allMatchdays = Object.keys(matchdayBuckets)
      .map(Number)
      .sort((a, b) => b - a);

    for (const currentMatchday of allMatchdays) {
      // 1. Take a snapshot BEFORE processing the rollback for this matchday
      const snapshot = JSON.parse(JSON.stringify(tempStandings));
      const sorted = Object.values(snapshot).sort((a, b) =>
        b.points - a.points ||         // sort primarily by points
        b.goalDifference - a.goalDifference || // then goal difference
        b.goalsFor - a.goalsFor         // then goals for
      );

      const rankingMap = {};
      const debugList = [];
      sorted.forEach((team, index) => {
        rankingMap[team.contestantId] = index + 1;
        debugList.push({
          rank: index + 1,
          team: teamMeta[team.contestantId].contestantName,
          points: team.points,
          goalDifference: team.goalDifference
        });
      });

      last10GamesStandings.unshift(rankingMap);
      last10GamesStandingsDebug.unshift({
        matchday: currentMatchday,
        standings: debugList
      });

      // Stop when you've collected 10 snapshots
      if (last10GamesStandings.length >= 10) break;

      // 2. Now process this matchday's matches to rollback their impact
      const matches = matchdayBuckets[currentMatchday];
      for (const match of matches) {
        const { homeId, awayId, scoreHome, scoreAway } = match;

        // Reverse the points and update goals (undo the match result)
        if (scoreHome > scoreAway) {
          tempStandings[homeId].points -= 3;  // undo home win
        } else if (scoreHome < scoreAway) {
          tempStandings[awayId].points -= 3;  // undo away win
        } else {
          tempStandings[homeId].points -= 1;  // undo draw
          tempStandings[awayId].points -= 1;
        }

        // Update goals for and against, and then recalc goal difference
        tempStandings[homeId].goalsFor -= scoreHome;
        tempStandings[homeId].goalsAgainst -= scoreAway;
        tempStandings[awayId].goalsFor -= scoreAway;
        tempStandings[awayId].goalsAgainst -= scoreHome;
        tempStandings[homeId].goalDifference = tempStandings[homeId].goalsFor - tempStandings[homeId].goalsAgainst;
        tempStandings[awayId].goalDifference = tempStandings[awayId].goalsFor - tempStandings[awayId].goalsAgainst;
      }
    }

    return {
      last10GamesStandings,
      last10GamesStandingsDebug
    };
  }

  const {
    last10GamesStandings = [],
    last10GamesStandingsDebug = []
  } = await getTeamStandings();

  const assets = {};

  return {
    matchday,
    matchInfo: liveMatchStats?.matchInfo,
    liveData: liveMatchStats?.liveData,
    matchStats: liveMatchStats,
    kits: {
      home: liveMatchStats?.liveData?.lineUp?.[0]?.kit,
      away: liveMatchStats?.liveData?.lineUp?.[1]?.kit
    },
    last10GamesStandings,
    last10GamesStandingsDebug,
    standing: standing?.[0]?.ranking,
    week: last10GamesStandingsDebug?.[last10GamesStandingsDebug?.length - 1]?.matchday || "0",
    totalStandingTeams: ranking.length,
    assets
  };
};


module.exports = Template;
