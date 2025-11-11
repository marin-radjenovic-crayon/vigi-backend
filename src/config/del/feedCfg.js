module.exports = {
  clientTeamId: 2,
  url: 'https://s3-eu-west-1.amazonaws.com/de.hokejovyzapis.cz/',
  competitions: [
    {
      competitionName: 'DEL Regular season',
      competitionId: 1,
      logo: null
    },
    {
      competitionName: 'DEL Playoffs',
      competitionId: 3,
      logo: null
    }
  ],
  clientLeagueId: 1,
  data: {
    standing: {
      url: 'tables/32.json' //season 2024/2025 - regular
    },
    teamSchedule: {
      url: 'league-team-matches/[[SEASON]]/[[LEAGUE]]/[[TEAMID]].json'
    },
    season: {
      // singlePlayer: {
      //   url: 'league-player-team-stats/[[SEASON]]/[[LEAGUE]]/[[TEAMID]]/[[PLAYERID]].json'
      // },
      playerStats: {
        url: 'league-team-stats/[[SEASON]]/[[LEAGUE]]/[[TEAMID]].json'
      },
      teamStats: {
        url: 'league-all-team-stats/[[SEASON]]/[[LEAGUE]]/[[TEAMID]].json'
      }
    },
    liveGame: {
      gameInfo: {
        url: 'matches/[[EVENTID]]/game-header.json'
      },
      gameRoster: {
        url: 'matches/[[EVENTID]]/roster.json'
      },
      gameEvents: {
        url: 'matches/[[EVENTID]]/period-events.json'
      },
      playerStats: {
        url: 'matches/[[EVENTID]]/team-stats/[[TEAMID]].json'
      },
      teamStats: {
        url: 'match-detail/team-stats/[[EVENTID]]/[[TEAMID]].json'
      },
      // topScorers: {
      //   url: 'matches/[[EVENTID]]/top-scorers.json'
      // },
      allGoalies: {
        url: 'matches/[[EVENTID]]/top-goalies.json'
      }
    }
  }
};
