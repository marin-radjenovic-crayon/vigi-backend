module.exports = {
  uuid: '0',
  template_name: 'wc_customranking',
  name: 'Custom Ranking',
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
        id: 'lang',
        label: 'Language',
        type: 'select',
        selectData: [
          {
            label: 'English',
            value: 'en'
          },
          {
            label: 'German',
            value: 'de'
          }
        ],
        value: 'de'
      },
      {
        id: 'headline',
        label: 'Headline',
        type: 'text',
        value: 'Die meisten WM-Spiele Ecuador',
        styles: {}
      },
      {
        id: 'col0Name',
        label: 'Col 0 Name',
        type: 'text',
        value: 'LP',
        styles: {}
      },
      {
        id: 'col1Name',
        label: 'Col 1 Name',
        type: 'text',
        value: 'Name',
        styles: {}
      },
      {
        id: 'col2Name',
        label: 'Col 2 Name',
        type: 'text',
        value: 'WM-Spiele',
        styles: {}
      },
      {
        id: 'col3Name',
        label: 'Col 3 Name',
        type: 'text',
        value: 'Teilnahmen',
        styles: {}
      },
      {
        id: 'col4Name',
        label: 'Col 4 Name',
        type: 'text',
        value: '',
        styles: {}
      },
      {
        id: 'row10',
        label: 'Row 1 Col 1',
        type: 'text',
        value: '1',
        styles: {}
      },
      {
        id: 'row11',
        label: 'Row 1 Col 1',
        type: 'text',
        value: 'Edison Mendez',
        styles: {}
      },
      {
        id: 'row12',
        label: 'Row 1 Col 2',
        type: 'text',
        value: '8',
        styles: {}
      },
      {
        id: 'row13',
        label: 'Row 1 Col 3',
        type: 'text',
        value: '3',
        styles: {}
      },
      {
        id: 'row14',
        label: 'Row 1 Col 4',
        type: 'text',
        value: '',
        styles: {}
      },
      {
        id: 'row20',
        label: 'Row 2 Col 0',
        type: 'text',
        value: '2',
        styles: {}
      },
      {
        id: 'row21',
        label: 'Row 2 Col 1',
        type: 'text',
        value: 'Antonio Valencia',
        styles: {}
      },
      {
        id: 'row22',
        label: 'Row 2 Col 2',
        type: 'text',
        value: '7',
        styles: {}
      },
      {
        id: 'row23',
        label: 'Row 2 Col 3',
        type: 'text',
        value: '2',
        styles: {}
      },
      {
        id: 'row24',
        label: 'Row 2 Col 4',
        type: 'text',
        value: '',
        styles: {}
      },
      {
        id: 'row30',
        label: 'Row 3 Col 0',
        type: 'text',
        value: '2',
        styles: {}
      },
      {
        id: 'row31',
        label: 'Row 3 Col 1',
        type: 'text',
        value: ' Ulises De la Cruz',
        styles: {}
      },
      {
        id: 'row32',
        label: 'Row 3 Col 2',
        type: 'text',
        value: '7',
        styles: {}
      },
      {
        id: 'row33',
        label: 'Row 3 Col 3',
        type: 'text',
        value: '2',
        styles: {}
      },
      {
        id: 'row34',
        label: 'Row 3 Col 4',
        type: 'text',
        value: '',
        styles: {}
      },
      {
        id: 'row40',
        label: 'Row 4 Col 0',
        type: 'text',
        value: '3',
        styles: {}
      },
      {
        id: 'row41',
        label: 'Row 4 Col 1',
        type: 'text',
        value: 'Jorge Guagua',
        styles: {}
      },
      {
        id: 'row42',
        label: 'Row 4 Col 2',
        type: 'text',
        value: '6',
        styles: {}
      },
      {
        id: 'row43',
        label: 'Row 4 Col 3',
        type: 'text',
        value: '2',
        styles: {}
      },
      {
        id: 'row44',
        label: 'Row 4 Col 4',
        type: 'text',
        value: '',
        styles: {}
      },
      {
        id: 'row50',
        label: 'Row 5 Col 0',
        type: 'text',
        value: '4',
        styles: {}
      },
      {
        id: 'row51',
        label: 'Row 5 Col 1',
        type: 'text',
        value: 'Agustin Delgado',
        styles: {}
      },
      {
        id: 'row52',
        label: 'Row 5 Col 2',
        type: 'text',
        value: '6',
        styles: {}
      },
      {
        id: 'row53',
        label: 'Row 5 Col 3',
        type: 'text',
        value: '2',
        styles: {}
      },
      {
        id: 'row54',
        label: 'Row 5 Col 4',
        type: 'text',
        value: '',
        styles: {}
      },
      {
        id: 'row60',
        label: 'Row 6 Col 0',
        type: 'text',
        value: '5',
        styles: {}
      },
      {
        id: 'row61',
        label: 'Row 6 Col 1',
        type: 'text',
        value: 'Ivan Hurtado',
        styles: {}
      },
      {
        id: 'row62',
        label: 'Row 6 Col 2',
        type: 'text',
        value: '6',
        styles: {}
      },
      {
        id: 'row63',
        label: 'Row 6 Col 3',
        type: 'text',
        value: '2',
        styles: {}
      },
      {
        id: 'row64',
        label: 'Row 6 Col 4',
        type: 'text',
        value: '',
        styles: {}
      },
      {
        id: 'tableFooter',
        label: 'Table footer',
        type: 'text',
        value: '*inklusive 2022',
        styles: {}
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Custom Ranking'
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
