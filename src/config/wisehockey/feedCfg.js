module.exports = {
  apiKey: 'RA23Wdjl4WQytTaOy397s4BpB',
  clientTeamId: 2,
  url: 'https://api.del.wisehockey.com/v4.1/',
  feedTournament: [
    {
      id: 18,
      group: 'DEL',
      name: 'DEL 2022-2023 playoffs',
      tournamentType: 'LeaguePlayoffs',
      year: '2023',
      originId: '2022-3'
    },
    {
      id: 20,
      group: 'DEL',
      name: 'DEL 2023-2024 practice',
      tournamentType: 'LeaguePracticeTournament',
      year: '2024',
      originId: '2023-2'
    },
    {
      id: 2,
      group: 'DEL',
      name: 'DEL 2022-2023',
      tournamentType: 'LeagueRegularSeason',
      year: '2023',
      originId: '2022-1'
    },
    {
      id: 19,
      group: 'DEL',
      name: 'DEL 2023-2024',
      tournamentType: 'LeagueRegularSeason',
      year: '2024',
      originId: '2023-1'
    },
    {
      id: 21,
      group: 'DEL',
      name: 'DEL 2023-2024 playoffs',
      tournamentType: 'LeaguePlayoffs',
      year: '2024',
      originId: '2023-3'
    },
    {
      id: 22,
      group: 'DEL',
      name: 'DEL 2024-2025',
      tournamentType: 'LeagueRegularSeason',
      year: '2025',
      originId: '2024-1'
    }
  ],
  competitionMapping: {
    3: 21,
    2: 2,
    1: 22
  },
  competitions: [
    {
      competitionName: 'DEL 2024-2025',
      competitionId: 22,
      logo: null,
      year: '2025'
    },
    {
      competitionName: 'DEL 2023-2024 playoffs',
      competitionId: 21,
      logo: null,
      year: '2024'
    }
  ],
  clientLeagueId: 22,
  data: {
    matches: {
      match: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]'
      },
      matches: {
        url: 'tournaments/[[LEAGUE]]/matches?includeMatchesWithoutStatistics=true'
      },
      players: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/players'
      },
      venue: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/venue'
      }
    },
    matchStatistics: {
      faceoffs: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/faceoffs'
      },
      offenses: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/offenses'
      },
      puckcontrol: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/puckcontrol'
      },
      goals: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/goals'
      },
      shots: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/shots'
      },
      passes: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/passes'
      },
      skaterstatistics: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/skaterstatistics'
      },
      skatershifts: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/skatershifts'
      },
      goalkeeperstatistics: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/goalkeeperstatistics'
      },
      teamstatistics: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/teamstatistics'
      },
      bluelinecrossings: {
        url: 'tournaments/[[LEAGUE]]/matches/[[EVENTID]]/bluelinecrossings'
      }
    },
    players: {
      players: {
        url: 'tournaments/[[LEAGUE]]/players'
      },
      player: {
        url: 'tournaments/[[LEAGUE]]/players/[[PLAYERID]]'
      }
    },
    teams: {
      teams: {
        url: 'tournaments/[[LEAGUE]]/teams'
      },
      team: {
        url: 'tournaments/[[LEAGUE]]/teams/[[TEAMID]]'
      },
      players: {
        url: 'tournaments/[[LEAGUE]]/teams/[[TEAMID]]/players'
      }
    },
    tournaments: {
      tournaments: {
        url: 'tournaments'
      }
    },
    tournamentStatistics: {
      skatersummary: {
        url: 'tournaments/[[LEAGUE]]/players/[[PLAYERID]]/skatersummary'
      },
      skatersummaryteam: {
        url: 'tournaments/[[LEAGUE]]/teams/[[TEAMID]]/skatersummary'
      },
      goalkeepersummary: {
        url: 'tournaments/[[LEAGUE]]/players/[[PLAYERID]]/goalkeepersummary'
      },
      goalkeepersummaryteam: {
        url: 'tournaments/[[LEAGUE]]/teams/[[TEAMID]]/goalkeepersummary'
      },
      teamsummary: {
        url: 'tournaments/[[LEAGUE]]/teams/[[TEAMID]]/teamsummary'
      }
    }
  }
};
