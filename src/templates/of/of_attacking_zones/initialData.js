module.exports = {
  uuid: '0',
  template_name: 'of_attacking_zones',
  name: 'Attacking zones',
  data: {
    dynamic: {
      teamSide: "home",
      matchInfo: {
        id: 'd1j10kvsyig3f3raum4lwpwr8',
        coverageLevel: '15',
        date: '2023-12-03Z',
        time: '14:00:00Z',
        localDate: '2023-12-03',
        localTime: '14:00:00',
        week: '14',
        numberOfPeriods: 2,
        periodLength: 45,
        lastUpdated: '2024-04-12T21:01:32Z',
        description: 'Chelsea vs Brighton & Hove Albion',
        sport: { id: '289u5typ3vp4ifwh5thalohmq', name: 'Soccer' },
        ruleset: { id: '79plas4983031idr6vw83nuel', name: 'Men' },
        competition: {
          id: '2kwbbcootiqqgmrzs6o5inle5',
          name: 'Premier League',
          knownName: 'English Premier League',
          competitionCode: 'EPL',
          competitionFormat: 'Domestic league',
          country: { id: '1fk5l4hkqk12i7zske6mcqju6', name: 'England' }
        },
        tournamentCalendar: {
          id: '1jt5mxgn4q5r6mknmlqv5qjh0',
          startDate: '2023-08-11Z',
          endDate: '2024-05-19Z',
          name: '2023/2024'
        },
        stage: {
          id: '1koyooce1nvm4acve9afu0lck',
          formatId: 'e2q01r9o9jwiq1fls93d1sslx',
          startDate: '2023-08-11Z',
          endDate: '2024-05-19Z',
          name: 'Regular Season'
        },
        contestant: [
          {
            id: '9q0arba2kbnywth8bkxlhgmdr',
            name: 'Chelsea',
            shortName: 'Chelsea',
            officialName: 'Chelsea FC',
            code: 'CHE',
            position: 'home',
            country: { id: '1fk5l4hkqk12i7zske6mcqju6', name: 'England' }
          },
          {
            id: 'e5p0ehyguld7egzhiedpdnc3w',
            name: 'Brighton & Hove Albion',
            shortName: 'Brighton',
            officialName: 'Brighton & Hove Albion FC',
            code: 'BHA',
            position: 'away',
            country: { id: '1fk5l4hkqk12i7zske6mcqju6', name: 'England' }
          }
        ],
        venue: {
          id: '3lnmxkrbtsvdffns96nqkggeg',
          neutral: 'no',
          longName: 'Stamford Bridge',
          shortName: 'Stamford Bridge'
        }
      },
      matchDetails: {
        periodId: 14,
        matchStatus: 'Played',
        winner: 'home',
        matchLengthMin: 111,
        matchLengthSec: 11,
        period: [
          {
            id: 1,
            start: '2023-12-03T14:00:40Z',
            end: '2023-12-03T14:52:11Z',
            lengthMin: 51,
            lengthSec: 31,
            announcedInjuryTime: 300
          },
          {
            id: 2,
            start: '2023-12-03T15:08:00Z',
            end: '2023-12-03T16:07:40Z',
            lengthMin: 59,
            lengthSec: 40,
            announcedInjuryTime: 600
          }
        ],
        scores: { ht: { home: 2, away: 1 }, ft: { home: 3, away: 2 }, total: { home: 3, away: 2 } }
      },
      attackingZones: {
        leftZone: 36.36,
        centralZone: 18.18,
        rightZone: 45.45
      }
    },
    fields: [
      {
        id: 'selectedSide',
        label: 'Team side',
        type: 'select',
        selectData: [
          {
            label: 'Home',
            value: 'home'
          },
          {
            label: 'Away',
            value: 'away'
          }
        ],
        value: 'home'
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Attacking zones'
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
  },
  season: '2023',
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
