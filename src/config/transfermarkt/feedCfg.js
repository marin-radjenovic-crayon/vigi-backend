module.exports = {
  url: 'https://api.performfeeds.com/',
  trackedCompetitions: [],
  competitions: [
    {
      competitionName: 'Transfermarkt',
      competitionId: 'transfermarkt', //tournamentCalendar
      competitionIdReal: 'transfermarkt',
      id: 'transfermarkt',
      ocId: '10',
      opId: '5',
      name: 'Transfermarkt',
      knownName: 'Transfermarkt',
      competitionCode: 'UCL',
      displayOrder: 100,
      country: 'Europe',
      countryId: '7yiwjcnhat6jo3f901h266cwl',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'transfermarkt',
          includesVenues: 'yes',
          ocId: '23680',
          name: '2023/2024',
          startDate: '2023-06-27Z',
          endDate: '2024-06-01Z',
          active: 'yes',
          lastUpdated: '2023-08-31T18:26:00Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club'
    },
  ],
  data: {
    tournamentcalendar: {
      competition: {
        identifier: 'tournamentcalendar:competition',
        url: 'soccerdata/tournamentcalendar/[[OUTLET_KEY]]?_rt=b&_fmt=json&comp=[[LEAGUE]]',
        feed: {
          title: 'Tournament Calendars',
          key: 'OT2'
        }
      }
    },
    tournament: {
      active: {
        identifier: 'tournament:active',
        url: 'soccerdata/tournamentcalendar/[[OUTLET_KEY]]/active/authorized?_rt=b&_fmt=json',
        feed: {
          key: 'Active & Authorized competition'
        },
        keepInSeconds: 60 * 60 * 24 * 30
      },
      contestants: {
        identifier: 'tournament:contestants',
        url: 'soccerdata/team/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]',
        feed: {
          key: 'TM1'
        },
        keepInSeconds: 60 * 60 * 24
      },
      schedule: {
        identifier: 'tournament:schedule',
        url: 'soccerdata/tournamentschedule/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]&_lcl=[[LANG]]&_ordSrt=asc',
        feed: {
          key: 'MA0'
        },
        keepInSeconds: 60 * 60 * 24,
        lastUpdatedPath: 'tournamentCalendar.lastUpdated'
      },
      seasonstats: {
        identifier: 'tournament:seasonstats',
        url: 'soccerdata/seasonstats/[[OUTLET_KEY]]?_rt=b&_fmt=json&detailed=yes&tmcl=[[LEAGUE]]&ctst=[[TEAMID]]',
        feed: {
          key: 'TM4'
        },
        keepInSeconds: 60 * 30
      },
      standings: {
        identifier: 'tournament:standings',
        url: 'soccerdata/standings/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]&live=yes',
        feed: {
          key: 'TM2'
        },
        keepInSeconds: 60 * 5
      },
      topperformers: {
        identifier: 'tournament:topperformers',
        url: 'soccerdata/topperformers/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]',
        feed: {
          key: 'PE6'
        },
        keepInSeconds: 60 * 30
      },
      rankings: {
        identifier: 'tournament:rankings',
        url: 'soccerdata/rankings/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]',
        feed: {
          key: 'PE4'
        },
        keepInSeconds: 60 * 60 * 24
      },
      seasonExpectedGoals: {
        identifier: 'tournament:seasonExpectedGoals',
        url: 'soccerdata/seasonexpectedgoals/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]&ctst=[[TEAMID]]',
        feed: {
          key: 'TM9'
        },
        keepInSeconds: 60 * 30
      }
    },
    fixtures: {
      matches: {
        identifier: 'fixtures:matches',
        feed: {
          title: 'Matches',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_pgSz=300&_rt=b&_fmt=json&tmcl=[[LEAGUE]]&live=yes&mt.mDt=[[[DATERANGE_FROM]] TO [[DATERANGE_TO]]]&lineups=no&_ordSrt=asc',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matches_by_id: {
        identifier: 'fixtures:matches_by_id',
        feed: {
          title: 'Matches',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?fx=[[IDS]]&_rt=b&_fmt=json&live=yes&lineups=no&_ordSrt=asc',
        keepInSeconds: 60 * 5
      },
      matches_last: {
        identifier: 'fixtures:matches_last',
        feed: {
          title: 'Matches last',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&live=yes&ctst=[[TEAM_ID1]]&status=Played',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matches_next: {
        identifier: 'fixtures:matches_next',
        feed: {
          title: 'Matches next',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&live=yes&ctst=[[TEAM_ID1]]&status=Fixture',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      match_league_next: {
        identifier: 'fixtures:match_league_next',
        feed: {
          title: 'Match league next',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&live=yes&tmcl=[[LEAGUE]]&status=Fixture&_ordSrt=asc&_pgSz=5',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matches_week_live: {
        identifier: 'fixtures:matches_week_live',
        feed: {
          title: 'Matches LIVE',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_pgSz=300&_rt=b&_fmt=json&tmcl=[[LEAGUE]]&live=yes&lineups=no&_ordSrt=asc&&week=[[WEEK]]',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matches_week_stg: {
        identifier: 'fixtures:matches_week_stg',
        feed: {
          title: 'Matches STG',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_pgSz=300&_rt=b&_fmt=json&tmcl=[[LEAGUE]]&live=yes&lineups=no&_ordSrt=asc&&stg=[[STAGE]]',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      match: {
        identifier: 'fixtures:match',
        feed: {
          title: 'Match single',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&fx=[[EVENTID]]&live=yes',
        keepInSeconds: 60 * 60 * 24,
        keepInSecondsLive: 25,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matchstats: {
        identifier: 'fixtures:matchstats',
        feed: {
          title: 'Match Stats',
          key: 'MA2'
        },
        url: 'soccerdata/matchstats/[[OUTLET_KEY]]/[[EVENTID]]?_rt=b&_fmt=json&detailed=[[DETAILED]]',
        keepInSeconds: 25
      },
      matchevent: {
        identifier: 'fixtures:matchevent',
        feed: {
          title: 'Match Events',
          key: 'MA3'
        },
        url: 'soccerdata/matchevent/[[OUTLET_KEY]]/[[EVENTID]]?_rt=b&_fmt=json',
        keepInSeconds: 25
      },
      matchplayerratings: {
        identifier: 'fixtures:matchplayerratings',
        feed: {
          title: 'Match Player Ratings',
          key: 'MA20'
        },
        url: 'soccerdata/matchplayerratings/[[OUTLET_KEY]]/[[EVENTID]]?_rt=b&_fmt=json',
        keepInSeconds: 60 * 5
      }
    }
  },
  vodData: {
    fixture: {
      identifier: 'vod:fixture',
      url: 'vod/[[OUTLET_KEY]]/?_rt=b&vo=os&_fmt=json&_ord=pt&_ordSrt=desc&_lcl=en,de&lnk=urn:perform:mfl:fixture:[[EVENTID]]'
    }
  }
};
