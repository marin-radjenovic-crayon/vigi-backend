module.exports = {
  uuid: '0',
  template_name: 'wc_tournamentranking',
  name: 'Tournament ranking',
  data: {
    dynamic: {
      teamRanking: [
        {
          rank: 1,
          name: 'FC Bayern München',
          id: 'apoawtpvac4zqlancmvw4nk4o',
          additionalStats: [
            {
              type: 'total scoring att',
              value: 556
            },
            {
              type: 'total goals',
              value: 80
            }
          ],
          calcStats: [
            {
              type: 'total games',
              value: 28
            }
          ]
        },
        {
          rank: 2,
          name: 'Bayer 04 Leverkusen',
          id: '7ad69ngbpjuyzv96drf8d9sn2',
          additionalStats: [
            {
              type: 'total scoring att',
              value: 514
            },
            {
              type: 'total goals',
              value: 69
            }
          ],
          calcStats: [
            {
              type: 'total games',
              value: 28
            }
          ]
        },
        {
          rank: 3,
          name: 'RasenBallsport Leipzig',
          id: '9gefq4dz9b2hl8rqrxwrlrzmp',
          additionalStats: [
            {
              type: 'total scoring att',
              value: 456
            },
            {
              type: 'total goals',
              value: 64
            }
          ],
          calcStats: [
            {
              type: 'total games',
              value: 28
            }
          ]
        },
        {
          rank: 4,
          name: 'VfB Stuttgart 1893',
          id: '3dwlvz6cl4lcavvrg0y2dycrt',
          additionalStats: [
            {
              type: 'total scoring att',
              value: 438
            },
            {
              type: 'total goals',
              value: 64
            }
          ],
          calcStats: [
            {
              type: 'total games',
              value: 28
            }
          ]
        },
        {
          rank: 5,
          name: 'BV Borussia 09 Dortmund',
          id: 'dt4pinj0vw0t0cvz7za6mhmzy',
          additionalStats: [
            {
              type: 'total scoring att',
              value: 429
            },
            {
              type: 'total goals',
              value: 55
            }
          ],
          calcStats: [
            {
              type: 'total games',
              value: 28
            }
          ]
        }
      ],
      matchInfo: {
        id: '5rwmb91p8fs2zfjsf633fm3h0',
        coverageLevel: '15',
        date: '2023-10-28Z',
        time: '13:30:00Z',
        localDate: '2023-10-28',
        localTime: '15:30:00',
        week: '9',
        numberOfPeriods: 2,
        periodLength: 45,
        lastUpdated: '2024-03-30T13:43:48Z',
        description: 'Augsburg vs Wolfsburg',
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
          knownName: 'German Bundesliga',
          competitionCode: 'BUN',
          competitionFormat: 'Domestic league',
          country: {
            id: '36min0qztu8eydwvpv8t1is0m',
            name: 'Germany'
          }
        },
        tournamentCalendar: {
          id: '9b9nvvpz477r8yrzmorx8w6qc',
          startDate: '2023-08-18Z',
          endDate: '2024-05-18Z',
          name: '2023/2024'
        },
        stage: {
          id: '9bygpthbfowvlhz0fijbs20b8',
          formatId: 'e2q01r9o9jwiq1fls93d1sslx',
          startDate: '2023-08-18Z',
          endDate: '2024-05-18Z',
          name: 'Regular Season'
        },
        contestant: [
          {
            id: 'ex3psl8e3ajeypwjy4xfltpx6',
            name: 'Augsburg',
            shortName: 'Augsburg',
            officialName: 'FC Augsburg',
            code: 'FCA',
            position: 'home',
            country: {
              id: '36min0qztu8eydwvpv8t1is0m',
              name: 'Germany'
            }
          },
          {
            id: 'a8l3w3n0j99qjlsxj3jnmgkz1',
            name: 'Wolfsburg',
            shortName: 'Wolfsburg',
            officialName: 'VfL Wolfsburg',
            code: 'WOB',
            position: 'away',
            country: {
              id: '36min0qztu8eydwvpv8t1is0m',
              name: 'Germany'
            }
          }
        ],
        venue: {
          id: '2hmegahk0ne8p900crfrh495o',
          neutral: 'no',
          longName: 'WWK Arena',
          shortName: 'WWK Arena'
        }
      }
    },
    fields: [
      {
        id: 'target',
        label: 'Target',
        type: 'select',
        selectData: [
          {
            label: 'Players',
            value: 'player'
          },
          {
            label: 'Teams',
            value: 'team'
          }
        ],
        value: 'team'
      },
      {
        id: 'rankingTeamType',
        label: 'Team Ranking Type',
        type: 'select',
        selectData: [
          {
            label: 'Goals',
            value: 'goals'
          },
          {
            label: 'Passquote',
            value: 'passquote'
          }
        ],
        value: 'goals'
      },
      {
        id: 'rankingPlayerType',
        label: 'Player Ranking Type',
        type: 'select',
        selectData: [
          {
            label: 'Goals',
            value: 'goals'
          },
          {
            label: 'Assists',
            value: 'assists'
          },
          {
            label: 'Total points',
            value: 'totalpoints'
          },
          {
            label: 'GK Saves',
            value: 'saves'
          },
          {
            label: 'GK? Clean Sheet',
            value: 'cleanSheet'
          }
        ],
        value: 'goals'
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Tournament ranking (11_27_16 8/1)',
        styles: null
      },
      {
        id: 'color1',
        label: 'Color 1',
        type: 'color',
        value: '#00FDFF',
        styles: null
      },
      {
        id: 'color2',
        label: 'Color 2',
        type: 'color',
        value: '#919191',
        styles: null
      },
      {
        id: 'videoduration',
        label: 'Video duration',
        type: 'text',
        value: 15,
        styles: null
      }
    ],
    videos: {
      '1920x1080': {
        date: null,
        file: null
      }
    }
  },
  season: '2023',
  event: {
    selectedTeamId: '9q0arba2kbnywth8bkxlhgmdr',
    competitionId: '1jt5mxgn4q5r6mknmlqv5qjh0',
    competitionName: 'tbi.',
    type: 'match',
    homeTeamId: 'aksa492u5hf93giwcn2zt1nzz',
    awayTeamId: '9q0arba2kbnywth8bkxlhgmdr',
    eventId: 'dgkrq9eyvsx47c60652bv9mok',
    date: '30.12.2023',
    time: '13:30',
    start_date: null,
    side: 'away'
  }
};
