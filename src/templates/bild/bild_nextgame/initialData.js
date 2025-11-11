module.exports = {
  uuid: '0',
  template_name: 'bild_nextgame',
  name: 'Next Game',
  data: {
    dynamic: {
      assets: {},
      nextMatchInfo: {
        id: 'bzyh8uc9dcu6mnj4zpx9nh6hg',
        coverageLevel: '15',
        date: '2022-11-21Z',
        time: '13:00:00Z',
        localDate: '2022-11-21',
        localTime: '16:00:00',
        week: '1',
        numberOfPeriods: 2,
        periodLength: 45,
        lastUpdated: '2022-11-09T15:02:52Z',
        description: 'England vs Iran',
        sport: {
          id: '289u5typ3vp4ifwh5thalohmq',
          name: 'Soccer'
        },
        ruleset: {
          id: '79plas4983031idr6vw83nuel',
          name: 'Men'
        },
        competition: {
          id: '70excpe1synn9kadnbppahdn7',
          name: 'World Cup',
          competitionCode: 'WOC',
          competitionFormat: 'International cup',
          country: {
            id: '7yasa43laq1nb2e6f8bfuvxed',
            name: 'World'
          }
        },
        tournamentCalendar: {
          id: '2a8elwzsufmguwymxbshcx756',
          startDate: '2022-11-20Z',
          endDate: '2022-12-18Z',
          name: '2022 Qatar'
        },
        stage: {
          id: '2awryriz2besyqksnv5o9db3e',
          formatId: '86p6pz5rcsdbz4cklvfwtzrv9',
          startDate: '2022-11-20Z',
          endDate: '2022-12-02Z',
          name: 'Group Stage'
        },
        series: {
          id: '2b1930z6tow4xzg7wtpoy47sa',
          formatId: 'ci6ciikoil0ifcuis37z8h7md',
          name: 'Group B'
        },
        contestant: [
          {
            id: 'ck8m1cn23sukwsurgx5qakttk',
            name: 'England',
            shortName: 'England',
            officialName: 'England',
            code: 'ENG',
            position: 'home',
            country: {
              id: '1fk5l4hkqk12i7zske6mcqju6',
              name: 'England'
            }
          },
          {
            id: 'cubclbw5k5gdqdau95bnav0nn',
            name: 'Iran',
            shortName: 'Iran',
            officialName: 'Iran',
            code: 'IRN',
            position: 'away',
            country: {
              id: 'e53g9hr2d3kasm34uumbg8r4',
              name: 'Iran'
            }
          }
        ],
        venue: {
          id: 'x2io384gn9dj0kya08mj5k1u',
          neutral: 'yes',
          longName: 'Khalifa International Stadium',
          shortName: 'Khalifa International Stadium'
        }
      },
      nextGame: {
        id: 'bzyh8uc9dcu6mnj4zpx9nh6hg',
        coverageLevel: '15',
        date: '2022-11-21Z',
        time: '13:00:00Z',
        localDate: '2022-11-21',
        localTime: '16:00:00',
        homeContestantId: 'ck8m1cn23sukwsurgx5qakttk',
        awayContestantId: 'cubclbw5k5gdqdau95bnav0nn',
        homeContestantName: 'England',
        awayContestantName: 'Iran',
        homeContestantOfficialName: 'England',
        awayContestantOfficialName: 'Iran',
        homeContestantShortName: 'England',
        awayContestantShortName: 'Iran',
        homeContestantCode: 'ENG',
        awayContestantCode: 'IRN',
        numberOfPeriods: 2,
        periodLength: 45,
        _round: 2
      }
    },
    fields: [
      {
        id: 'type',
        label: 'Type',
        type: 'select',
        selectData: [
          {
            label: 'Matchday',
            value: 'matchday'
          },
          {
            label: 'Global',
            value: 'global'
          }
        ],
        value: 'matchday'
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Next Game'
      },
      {
        id: 'color1',
        label: 'Color 1',
        type: 'color',
        value: '#00FDFF'
      },
      {
        id: 'color2',
        label: 'Color 2',
        type: 'color',
        value: '#919191'
      },
      {
        id: 'videoduration',
        label: 'Video duration',
        type: 'text',
        value: '15'
      }
    ],
    videos: {
      '1920x1080': {
        date: null,
        file: null
      }
    }
  },
  season: '2022',
  event: {
    selectedTeamId: 'ea68amhsn28ijs7bzjuzeqrz6',
    competitionId: '2a8elwzsufmguwymxbshcx756',
    competitionName: '2022 Qatar',
    type: 'match',
    homeTeamId: 'ea68amhsn28ijs7bzjuzeqrz6',
    awayTeamId: '2j2402oabiovxw24cnjk9m369',
    side: 'home',
    eventId: 'ak5kkxvpxf1url15gci42ly7e',
    dateObj: '202130203023',
    date: '20.11.2022',
    start_date: null,
    time: '17:00'
  }
};
