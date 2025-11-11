module.exports = {
  uuid: '0',
  template_name: 'wc_seasontotals',
  name: 'Season Totals',
  data: {
    dynamic: {
      assets: {},
      matchInfo: {
        id: 'd7jq17znw97xt4hbghsq4q4no',
        coverageLevel: '15',
        date: '2022-08-05Z',
        time: '18:30:00Z',
        localDate: '2022-08-05',
        localTime: '20:30:00',
        week: '1',
        postMatch: '1',
        numberOfPeriods: 2,
        periodLength: 45,
        lastUpdated: '2022-10-22T12:47:31Z',
        description: 'Eintracht Frankfurt vs Bayern München',
        sport: {
          id: '289u5typ3vp4ifwh5thalohmq',
          name: 'Soccer'
        },
        ruleset: {
          id: '79plas4983031idr6vw83nuel',
          name: 'Men'
        },
        competition: {
          id: '6by3h89i2eykc341oz7lv1ddd',
          name: 'Bundesliga',
          competitionCode: 'BUN',
          competitionFormat: 'Domestic league',
          country: {
            id: '36min0qztu8eydwvpv8t1is0m',
            name: 'Germany'
          }
        },
        tournamentCalendar: {
          id: 'eg8fn8zof4ps7z12vlxa6efx0',
          startDate: '2022-08-05Z',
          endDate: '2023-05-27Z',
          name: '2022/2023'
        },
        stage: {
          id: 'egi94n9ib3cq1ejjwp52nrcb8',
          formatId: 'e2q01r9o9jwiq1fls93d1sslx',
          startDate: '2022-08-05Z',
          endDate: '2023-05-27Z',
          name: 'Regular Season'
        },
        contestant: [
          {
            id: 'c5hderjlkcoaze51e5wgvptk',
            name: 'Qatar',
            shortName: 'Frankfurt',
            officialName: 'Eintracht Frankfurt',
            code: 'SGE',
            position: 'home',
            country: {
              id: '36min0qztu8eydwvpv8t1is0m',
              name: 'Germany'
            }
          },
          {
            id: 'apoawtpvac4zqlancmvw4nk4o',
            name: 'Brazil',
            shortName: 'Bayern München',
            officialName: 'FC Bayern München',
            code: 'FCB',
            position: 'away',
            country: {
              id: '36min0qztu8eydwvpv8t1is0m',
              name: 'Germany'
            }
          }
        ],
        venue: {
          id: '6a9rbm0r7b7dgp0zz0je0l4lj',
          neutral: 'no',
          longName: 'Deutsche Bank Park',
          shortName: 'Deutsche Bank Park'
        }
      },
      seasonTotals: {
        defensive: {
          'Games Played': 64,
          Goals: 81,
          'Clean Sheets': 24,
          Catches: 47,
          Duels: 6019,
          'Yellow Cards': 111,
          Offsides: 120,
          'Total Red Cards': 1
        },
        offensive: {
          'Games Played': 64,
          Goals: 81,
          'Goals Conceded Inside Box': 75,
          'Goals Conceded Outside Box': 6,
          'Headed Goals': 16,
          'Total Shots': 505,
          'Shots On Target ( inc goals )': 225,
          'Corners Taken (incl short corners)': 302
        }
      }
    },
    fields: [
      {
        id: 'headline',
        label: 'Headline',
        type: 'text',
        value: 'Statistics'
      },
      {
        id: 'statsType',
        label: 'Stats type',
        type: 'select',
        selectData: [
          {
            label: 'Offensive',
            value: 'offensive'
          },
          {
            label: 'Defensive',
            value: 'defensive'
          }
        ],
        value: 'offensive'
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Season Totals'
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
