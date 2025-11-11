module.exports = {
  uuid: '0',
  template_name: 'of_momentum',
  name: 'Momentum',
  data: {
    dynamic: {
      assets: {},
      matchInfo: {
        id: 'deyxzy47iahr9lr8vyermy32s',
        coverageLevel: '13',
        date: '2025-10-18Z',
        time: '16:30:00Z',
        localDate: '2025-10-18',
        localTime: '18:30:00',
        week: '7',
        numberOfPeriods: 2,
        periodLength: 45,
        var: '1',
        lastUpdated: '2025-10-18T22:00:15Z',
        description: 'Bayern München vs Borussia Dortmund',
        sport: { id: '289u5typ3vp4ifwh5thalohmq', name: 'Soccer' },
        ruleset: { id: '79plas4983031idr6vw83nuel', name: 'Men' },
        competition: {
          id: '6by3h89i2eykc341oz7lv1ddd',
          name: 'Bundesliga',
          knownName: 'German Bundesliga',
          competitionCode: 'BUN',
          competitionFormat: 'Domestic league',
          country: { id: '36min0qztu8eydwvpv8t1is0m', name: 'Germany' }
        },
        tournamentCalendar: {
          id: '2bchmrj23l9u42d68ntcekob8',
          startDate: '2025-08-22Z',
          endDate: '2026-05-16Z',
          name: '2025/2026'
        },
        stage: {
          id: '2c9ew9ajvsxgd2huek1yz6wpg',
          formatId: 'e2q01r9o9jwiq1fls93d1sslx',
          startDate: '2025-08-22Z',
          endDate: '2026-05-16Z',
          name: 'Regular Season'
        },
        contestant: [
          {
            id: 'apoawtpvac4zqlancmvw4nk4o',
            name: 'Bayern München',
            shortName: 'Bayern München',
            officialName: 'FC Bayern München',
            code: 'FCB',
            position: 'home',
            country: [Object]
          },
          {
            id: 'dt4pinj0vw0t0cvz7za6mhmzy',
            name: 'Borussia Dortmund',
            shortName: 'Dortmund',
            officialName: 'BV Borussia 09 Dortmund',
            code: 'BVB',
            position: 'away',
            country: [Object]
          }
        ],
        venue: {
          id: 'ck5ov6mmj3vpet5zygnqzri4i',
          neutral: 'no',
          longName: 'Allianz Arena',
          shortName: 'Allianz Arena',
          latitude: '48.218779054',
          longitude: '11.624743491'
        }
      },
      goalData: [
        { range: '1-5', teamA: 4640.93, teamB: 0 },
        { range: '6-10', teamA: 4429.36, teamB: 0 },
        { range: '11-15', teamA: 3447.05, teamB: 0 },
        { range: '16-20', teamA: 0, teamB: 3796.77 },
        { range: '21-25', teamA: 4138.69, teamB: 0 },
        { range: '26-30', teamA: 754.83, teamB: 0 },
        { range: '31-35', teamA: 6482.45, teamB: 0 },
        { range: '36-40', teamA: 3969.24, teamB: 0 },
        { range: '41-45', teamA: 5523.91, teamB: 0 },
        { range: '46-50', teamA: 0, teamB: 7127.91 },
        { range: '51-55', teamA: 0, teamB: 4032.96 },
        { range: '56-60', teamA: 0, teamB: 9906.08 },
        { range: '61-65', teamA: 0, teamB: 5742.89 },
        { range: '66-70', teamA: 0, teamB: 5815.21 },
        { range: '71-75', teamA: 0, teamB: 7063.95 },
        { range: '76-80', teamA: 3176.27, teamB: 0 },
        { range: '81-85', teamA: 0, teamB: 13531.13 },
        { range: '86-97', teamA: 0, teamB: 10521.8 }
      ],
      goal: [
        {
          contestantId: 'apoawtpvac4zqlancmvw4nk4o',
          periodId: 1,
          timeMin: 22,
          timeMinSec: '21:03',
          lastUpdated: '2025-10-18T16:53:22Z',
          timestamp: '2025-10-18T16:52:16Z',
          type: 'G',
          scorerId: 'b9g4qurpll4wizajo95c406hh',
          scorerName: 'H. Kane',
          assistPlayerId: '97nv3y9z2ajz6b4ynoo0jn3kl',
          assistPlayerName: 'J. Kimmich',
          optaEventId: '2860647201',
          homeScore: 1,
          awayScore: 0
        },
        {
          contestantId: 'apoawtpvac4zqlancmvw4nk4o',
          periodId: 2,
          timeMin: 78,
          timeMinSec: '77:57',
          lastUpdated: '2025-10-18T18:08:23Z',
          timestamp: '2025-10-18T18:06:59Z',
          type: 'G',
          scorerId: 'm2c4lckkcr7yilnqxrrsgh2i',
          scorerName: 'M. Olise',
          optaEventId: '2860726009',
          homeScore: 2,
          awayScore: 0
        },
        {
          contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
          periodId: 2,
          timeMin: 84,
          timeMinSec: '83:46',
          lastUpdated: '2025-10-18T18:13:37Z',
          timestamp: '2025-10-18T18:12:48Z',
          type: 'G',
          scorerId: 'f4qcgzveslklfi8601tep77x1',
          scorerName: 'J. Brandt',
          assistPlayerId: 'cl6720rdjeubt0bc3su0qg3qh',
          assistPlayerName: 'J. Ryerson',
          optaEventId: '2860732825',
          homeScore: 2,
          awayScore: 1
        }
      ]
    },
    fields: [ ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Opener'
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
