module.exports = {
  uuid: '0',
  template_name: 'bild_topperformers',
  name: 'Top Performers',
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
            name: 'Qatar',
            shortName: 'Qatar',
            officialName: 'Qatar',
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
      topScorers: [
        {
          contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
          contestantName: 'Argentina',
          id: '1j0a3ml1zglc9s31yentfckb9',
          firstName: 'Christopher Alan',
          lastName: 'Nkunku',
          shortFirstName: 'Christopher',
          shortLastName: 'Nkunku',
          matchName: 'C. Nkunku',
          rank: 1,
          value: 11
        },
        {
          contestantId: 'cu0eztmjcsbydyp53aleznorw',
          contestantName: 'Germany',
          id: 'cjq9g6zgcxk1ceo2xzpe1qnyt',
          firstName: 'Niclas',
          lastName: 'Füllkrug',
          shortFirstName: 'Niclas',
          shortLastName: 'Füllkrug',
          matchName: 'N. Füllkrug',
          rank: 2,
          value: 10
        },
        {
          contestantId: 'go76xxm0xyfgqt1h6tcrtimm',
          contestantName: 'Poland',
          id: '66nvc8a4kd3cyeyj3i474cudx',
          firstName: 'Marcus Lilian',
          lastName: 'Thuram-Ulien',
          shortFirstName: 'Marcus',
          shortLastName: 'Thuram',
          matchName: 'M. Thuram',
          rank: 3,
          value: 9
        },
        {
          contestantId: 'apoawtpvac4zqlancmvw4nk4o',
          contestantName: 'Qatar',
          id: 'bhsdzppop8jwjsxwftizot1t6',
          firstName: 'Jamal',
          lastName: 'Musiala',
          shortFirstName: 'Jamal',
          shortLastName: 'Musiala',
          matchName: 'J. Musiala',
          rank: 4,
          value: 8
        },
        {
          contestantId: 'c5hderjlkcoaze51e5wgvptk',
          contestantName: 'England',
          id: 'az15xx7m923srf9gdbwmiyga1',
          firstName: 'Daichi',
          lastName: 'Kamada',
          shortFirstName: 'Daichi',
          shortLastName: 'Kamada',
          matchName: 'D. Kamada',
          rank: 5,
          value: 7
        }
      ]
    },
    fields: [
      {
        id: 'rankingType',
        label: 'Ranking Type',
        type: 'select',
        selectData: [
          {
            label: 'Goals',
            value: 'Goals'
          },
          {
            label: 'Assists',
            value: 'Assists'
          },
          {
            label: 'YellowCards',
            value: 'YellowCards'
          },
          {
            label: 'TotalGames',
            value: 'TotalGames'
          },
          {
            label: 'RedCards',
            value: 'RedCards'
          },
          {
            label: 'TotalGamesOverall',
            value: 'TotalGamesOverall'
          },
          {
            label: 'GoalsOverall',
            value: 'GoalsOverall'
          },
          {
            label: 'YellowCardsOverall',
            value: 'YellowCardsOverall'
          },
          {
            label: 'RedCardsOverall',
            value: 'RedCardsOverall'
          },
          {
            label: 'SubOnOverall',
            value: 'SubOnOverall'
          },
          {
            label: 'SubOffOverall',
            value: 'SubOffOverall'
          },
          {
            label: 'AssistsOverall',
            value: 'AssistsOverall'
          }
        ],
        value: 'Goals'
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Top Performers'
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
