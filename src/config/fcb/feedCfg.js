module.exports = {
  url: 'https://api.performfeeds.com/',
  trackedCompetitions: [
    {
      knownName: 'German Bundesliga',
      tournamentCalendarId: '2bchmrj23l9u42d68ntcekob8',
      id: '6by3h89i2eykc341oz7lv1ddd',
      guessedTimezone: 'Europe/Paris',
      timezoneOffset: '+02:00'
    },
    {
      knownName: 'UEFA Champions League',
      tournamentCalendarId: '2mr0u0l78k2gdsm79q56tb2fo',
      id: '4oogyu6o156iphvdvphwpck10',
      guessedTimezone: 'Europe/Paris',
      timezoneOffset: '+02:00'
    },
    {
      knownName: 'German Super Cup',
      tournamentCalendarId: 'bhnq4wrqidi0asitvyp5wbrx0',
      id: 'bt104r4nsjznxitfaqpc8j09s',
      guessedTimezone: 'Europe/Paris',
      timezoneOffset: '+02:00'
    },
  ],
  competitions: [
    {
      competitionName: 'German Bundesliga',
      competitionId: '2bchmrj23l9u42d68ntcekob8', //tournamentCalendar
      competitionIdReal: '6by3h89i2eykc341oz7lv1ddd',
      id: '6by3h89i2eykc341oz7lv1ddd',
      ocId: '9',
      opId: '22',
      name: 'Bundesliga',
      knownName: 'German Bundesliga',
      competitionCode: 'BUN',
      displayOrder: 10,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: "2bchmrj23l9u42d68ntcekob8",
          includesVenues: "yes",
          ocId: "26633",
          name: "2025/2026",
          startDate: "2025-08-22Z",
          endDate: "2026-05-16Z",
          active: "yes",
          lastUpdated: "2025-06-27T15:08:39Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'UEFA Champions League',
      competitionId: '2mr0u0l78k2gdsm79q56tb2fo', //tournamentCalendar
      competitionIdReal: '4oogyu6o156iphvdvphwpck10',
      id: '4oogyu6o156iphvdvphwpck10',
      ocId: '10',
      opId: '232',
      name: 'UEFA Champions League',
      knownName: 'UEFA Champions League',
      competitionCode: 'UCL',
      displayOrder: 100,
      country: 'Europe',
      countryId: '7yiwjcnhat6jo3f901h266cwl',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: "2mr0u0l78k2gdsm79q56tb2fo",
          includesVenues: "yes",
          ocId: "26943",
          name: "2025/2026",
          startDate: "2025-07-08Z",
          endDate: "2026-05-30Z",
          active: "yes",
          lastUpdated: "2025-08-06T03:05:51Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'German Super Cup',
      competitionId: 'bhnq4wrqidi0asitvyp5wbrx0', //tournamentCalendar
      competitionIdReal: 'bt104r4nsjznxitfaqpc8j09s',
      id: 'bt104r4nsjznxitfaqpc8j09s',
      ocId: '638',
      opId: '541',
      name: 'Super Cup',
      knownName: 'German Super Cup',
      competitionCode: 'SUC',
      displayOrder: 120,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic super cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: "bhnq4wrqidi0asitvyp5wbrx0",
          includesVenues: "yes",
          ocId: "25637",
          name: "2025/2026",
          startDate: "2025-08-16Z",
          endDate: "2025-08-16Z",
          active: "yes",
          lastUpdated: "2025-06-04T10:06:16Z",
          includesStandings: "no"
        }
      ],
      competitionType: 'club'
    },
    // {
    //   competitionName: 'UEFA Super Cup',
    //   competitionId: 'db8f4sqdf7s0g850fspnf8hlg', //tournamentCalendar
    //   competitionIdReal: 'a0f4gtru0oyxmpvty4thc5qkc',
    //   id: 'a0f4gtru0oyxmpvty4thc5qkc',
    //   ocId: '211',
    //   opId: '174',
    //   name: 'UEFA Super Cup',
    //   knownName: 'UEFA Super Cup',
    //   competitionCode: 'USC',
    //   displayOrder: 130,
    //   country: 'Europe',
    //   countryId: '7yiwjcnhat6jo3f901h266cwl',
    //   isFriendly: 'no',
    //   competitionFormat: 'International super cup',
    //   type: 'men',
    //   tournamentCalendar: [
    //     {
    //       id: "db8f4sqdf7s0g850fspnf8hlg",
    //       includesVenues: "yes",
    //       ocId: "25630",
    //       name: "2025/2026",
    //       startDate: "2025-08-13Z",
    //       endDate: "2025-08-13Z",
    //       active: "yes",
    //       lastUpdated: "2025-06-04T07:27:50Z",
    //       includesStandings: "no"
    //     }
    //   ],
    //   competitionType: 'club'
    // },
    // {
    //   competitionName: "FIFA Club World Cup",
    //   competitionCode: 'FCW',
    //   competitionId: '7n3ltxz65zjcd8z9eyr5i2wb8', //tournamentCalendar
    //   competitionIdReal: 'dc4k1xh2984zbypbnunk7ncic',
    //   id: 'dc4k1xh2984zbypbnunk7ncic',
    //   ocId: '2458',
    //   opId: '1277',
    //   logo: null,
    //   tournamentCalendarId: '7n3ltxz65zjcd8z9eyr5i2wb8',
    //   displayOrder: 150,
    //   country: 'World',
    //   countryId: '7yasa43laq1nb2e6f8bfuvxed',
    //   isFriendly: 'no',
    //   competitionFormat: 'International cup',
    //   type: 'men',
    //   name: 'FIFA Club World Cup',
    //   knownName: 'FIFA Club World Cup',
    //   tournamentCalendar: [
    //     {
    //       id: '7n3ltxz65zjcd8z9eyr5i2wb8',
    //       includesVenues: 'yes',
    //       ocId: '25665',
    //       name: '2025 USA',
    //       startDate: '2025-06-15Z',
    //       endDate: '2025-07-13Z',
    //       active: 'yes',
    //       lastUpdated: '2025-06-09T09:40:41Z',
    //       includesStandings: 'yes'
    //     }

    //   ],
    //   competitionType: 'international'
    // },
    {
      competitionName: 'German DFB Pokal',
      competitionId: 'd3y7p0y4366q5chknrlo1t34k', //tournamentCalendar
      competitionIdReal: '486rhdgz7yc0sygziht7hje65',
      id: "486rhdgz7yc0sygziht7hje65",
      ocId: "104",
      opId: "231",
      name: "DFB Pokal",
      knownName: "German DFB Pokal",
      competitionCode: "DFB",
      displayOrder: 100,
      country: "Germany",
      countryId: "36min0qztu8eydwvpv8t1is0m",
      countryCode: "DEU",
      isFriendly: "no",
      competitionFormat: "Domestic cup",
      type: "men",
      tournamentCalendar: [
        {
          id: "d3y7p0y4366q5chknrlo1t34k",
          includesVenues: "yes",
          ocId: "26770",
          name: "2025/2026",
          startDate: "2025-08-15Z",
          endDate: "2026-05-23Z",
          active: "yes",
          lastUpdated: "2025-06-26T03:05:49Z",
          includesStandings: "no"
        }
      ],
      competitionType: "club"
    },
    {
      competitionName: 'Club Friendlies',
      competitionId: '9r8h2z7y89a0h1995f4bz105w', //tournamentCalendar
      competitionIdReal: '4nidzmunvpvxk1ir9b6m8mpay',
      id: "4nidzmunvpvxk1ir9b6m8mpay",
      ocId: "732",
      opId: "34",
      name: "Club Friendlies",
      knownName: "Friendly",
      competitionCode: "CLF",
      displayOrder: 210,
      country: "World",
      countryId: "7yasa43laq1nb2e6f8bfuvxed",
      isFriendly: "yes",
      competitionFormat: "International cup",
      type: "men",
      tournamentCalendar: [
        {
          id: "9r8h2z7y89a0h1995f4bz105w",
          includesVenues: "yes",
          ocId: "25828",
          name: "2025",
          startDate: "2025-01-01Z",
          endDate: "2025-12-31Z",
          active: "yes",
          lastUpdated: "2025-07-24T12:02:31Z",
          includesStandings: "no"
        }
      ],
      competitionType: "club"
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
      matches_last_league: {
        identifier: 'fixtures:matches_last_league',
        feed: {
          title: 'Matches last by League',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&live=yes&ctst=[[TEAM_ID1]]&status=Played&_ordSrt=desc&tmcl=[[LEAGUE]]',
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
      },
      matchesAllCompetitionsBetweenTwo: {
        identifier: 'fixtures:matchesAllCompetitionsBetweenTwo',
        feed: {
          title: 'Matches',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&ctst=[[TEAM_1]]&ctst2=[[TEAM_2]]',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matchesAllCompetitionsOne: {
        identifier: 'fixtures:matchesAllCompetitionsOne',
        feed: {
          title: 'Matches',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&ctst=[[TEAM]]',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matchesAllCompetitionsOneRange: {
        identifier: 'fixtures:matchesAllCompetitionsOneRange',
        feed: {
          title: 'Matches',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&ctst=[[TEAM]]&mt.mDt=[[[DATERANGE_FROM]] TO [[DATERANGE_TO]]]&_pgSz=300',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
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
