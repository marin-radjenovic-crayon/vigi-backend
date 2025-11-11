module.exports = {
  uuid: '0',
  template_name: 'of_lastgames',
  name: 'Last Games',
  data: {
    dynamic: {
      assets: {},
      matchInfo: {
        id: 'ak5kkxvpxf1url15gci42ly7e',
        coverageLevel: '15',
        date: '2022-11-20Z',
        time: '16:00:00Z',
        localDate: '2022-11-20',
        localTime: '19:00:00',
        week: '1',
        numberOfPeriods: 2,
        periodLength: 45,
        lastUpdated: '2022-10-24T14:36:42Z',
        description: 'Qatar vs Ecuador',
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
          id: '2b0dqo56ran2uw0m2lddm63qi',
          formatId: 'choy4837jf63m90uh34q2jmxh',
          name: 'Group A'
        },
        contestant: [
          {
            id: 'ea68amhsn28ijs7bzjuzeqrz6',
            name: 'France',
            shortName: 'France',
            officialName: 'France',
            code: 'QAT',
            position: 'home',
            country: {
              id: '1evdpix889bnpu5wgh6ae7kng',
              name: 'Qatar'
            }
          },
          {
            id: '2j2402oabiovxw24cnjk9m369',
            name: 'Ecuador',
            shortName: 'Ecuador',
            officialName: 'Ecuador',
            code: 'ECU',
            position: 'away',
            country: {
              id: '6pyj2bytt2osbjk69owzfehcg',
              name: 'Ecuador'
            }
          }
        ],
        venue: {
          id: '4qp4xb6wue95zgjwkt9tx0rmx',
          neutral: 'yes',
          longName: 'Al Bayt Stadium',
          shortName: 'Al Bayt Stadium'
        }
      },
      lastGames: [
        {
          competition: 'WM 2022',
          date: '11/26/2022',
          homeName: 'France',
          awayName: 'Denmark',
          scoreHome: 2,
          scoreAway: 1
        },
        {
          competition: 'WM 2022',
          date: '11/22/2022',
          homeName: 'France',
          awayName: 'Australia',
          scoreHome: 4,
          scoreAway: 1
        },
        {
          competition: 'UEFA Nations League',
          date: '9/25/2022',
          homeName: 'Denmark',
          awayName: 'France',
          scoreHome: '2',
          scoreAway: '0'
        },
        {
          competition: 'UEFA Nations League',
          date: '9/22/2022',
          homeName: 'France',
          awayName: 'Austria',
          scoreHome: '2',
          scoreAway: '0'
        },
        {
          competition: 'UEFA Nations League',
          date: '6/13/2022',
          homeName: 'France',
          awayName: 'Croatia',
          scoreHome: '0',
          scoreAway: '1'
        }
      ]
    },
    fields: [
      {
        id: 'gameType',
        label: 'Game type',
        type: 'select',
        selectData: [
          {
            label: 'Next games',
            value: 'next'
          },
          {
            label: 'Last games',
            value: 'last'
          }
        ],
        value: 'last'
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Last games'
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
        value: '10'
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
