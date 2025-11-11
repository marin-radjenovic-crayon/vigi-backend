module.exports = {
  uuid: '0',
  template_name: 'adlerresults',
  name: 'Results',
  data: {
    dynamic: {
      teamSide: 'home',
      game: {
        actualTimeName: 'Ende',
        actualTimeAlias: 'K',
        stadium: 'SAP-Arena',
        numberOfViewers: 0,
        teamBilance: {
          homeWin: 9,
          visitorWin: 9
        },
        results: {
          extra_time: true,
          shooting: true,
          contumacy: false,
          score: {
            final: {
              score_home: 3,
              score_guest: 2
            },
            first_period: {
              score_home: 0,
              score_guest: 2
            },
            second_period: {
              score_home: 0,
              score_guest: 1
            },
            third_period: {
              score_home: 1,
              score_guest: 1
            },
            overtime: {
              score_home: 1,
              score_guest: 1
            },
            shootout: {
              score_home: 2,
              score_guest: 1
            }
          }
        },
        home: {
          id: 2,
          name: 'Adler Mannheim',
          shortcut: 'MAN'
        },
        away: {
          id: 3,
          name: 'Eisbären Berlin',
          shortcut: 'EBB'
        }
      },
      goals: {
        home: [
          {
            playerId: 487,
            matchPlayerId: 120921,
            jersey: 22,
            name: 'Matthias',
            surname: 'Plachta',
            scoreboardTime: ['57.']
          }
        ],
        visitor: [
          {
            playerId: 1464,
            matchPlayerId: 120964,
            jersey: 87,
            name: 'Fabian',
            surname: 'Dietz',
            scoreboardTime: ['10.']
          },
          {
            playerId: 1172,
            matchPlayerId: 120957,
            jersey: 97,
            name: 'Matthew',
            surname: 'White',
            scoreboardTime: ['10.']
          },
          {
            playerId: 1615,
            matchPlayerId: 120970,
            jersey: 10,
            name: 'Parker',
            surname: 'Tuomie',
            scoreboardTime: ['39.']
          },
          {
            playerId: 1172,
            matchPlayerId: 120957,
            jersey: 97,
            name: 'Matthew',
            surname: 'White',
            scoreboardTime: ['45.']
          }
        ]
      },
      assets: {
        teamHome: {
          label: 'Adler Mannheim',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/adler/logo-mannheim.png',
          data: {
            name: 'Adler Mannheim',
            short: 'MAN',
            id: '2'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        teamAway: {
          label: 'Krefeld Pinguine',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/adler/logo-krefeld-2020.png',
          data: {
            name: 'Krefeld Pinguine',
            short: 'KEV',
            id: '5'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        }
      }
    },
    fields: [
      {
        id: 'background',
        label: 'Background',
        type: 'media',
        dragResize: true,
        allowedActions: ['resize', 'move'],
        allowedMediaTypes: ['image', 'video'],
        value: {
          label: 'Test',
          type: 'image',
          group: 'backgrounds',
          url: '/predefined/media/image/backgrounds/adler/custom/adlerresults_1920.jpg',
          data: {},
          extension: 'jpg',
          mime: 'image/jpeg',
          content_type: 'image',
          size: '0'
        }
      },
      {
        id: 'homeScorer1',
        label: 'Home Scorer 1',
        type: 'text',
        value: ''
      },
      {
        id: 'homeScorer2',
        label: 'Home Scorer 2',
        type: 'text',
        value: ''
      },
      {
        id: 'homeScorer3',
        label: 'Home Scorer 3',
        type: 'text',
        value: ''
      },
      {
        id: 'homeScorer4',
        label: 'Home Scorer 4',
        type: 'text',
        value: ''
      },
      {
        id: 'homeScorer5',
        label: 'Home Scorer 5',
        type: 'text',
        value: ''
      },
      {
        id: 'homeScorer6',
        label: 'Home Scorer 6',
        type: 'text',
        value: ''
      },
      {
        id: 'homeScorer7',
        label: 'Home Scorer 7',
        type: 'text',
        value: ''
      },
      {
        id: 'homeScorer8',
        label: 'Home Scorer 8',
        type: 'text',
        value: ''
      },
      {
        id: 'homeScorer9',
        label: 'Home Scorer 9',
        type: 'text',
        value: ''
      },
      {
        id: 'homeScorer10',
        label: 'Home Scorer 10',
        type: 'text',
        value: ''
      },
      {
        id: 'awayScorer1',
        label: 'Away Scorer 1',
        type: 'text',
        value: ''
      },
      {
        id: 'awayScorer2',
        label: 'Away Scorer 2',
        type: 'text',
        value: ''
      },
      {
        id: 'awayScorer3',
        label: 'Away Scorer 3',
        type: 'text',
        value: ''
      },
      {
        id: 'awayScorer4',
        label: 'Away Scorer 4',
        type: 'text',
        value: ''
      },
      {
        id: 'awayScorer5',
        label: 'Away Scorer 5',
        type: 'text',
        value: ''
      },
      {
        id: 'awayScorer6',
        label: 'Away Scorer 6',
        type: 'text',
        value: ''
      },
      {
        id: 'awayScorer7',
        label: 'Away Scorer 7',
        type: 'text',
        value: ''
      },
      {
        id: 'awayScorer8',
        label: 'Away Scorer 8',
        type: 'text',
        value: ''
      },
      {
        id: 'AwayScorer9',
        label: 'Away Scorer 9',
        type: 'text',
        value: ''
      },
      {
        id: 'awayScorer10',
        label: 'Away Scorer 10',
        type: 'text',
        value: ''
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Player Stats'
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
        id: 'defaultBackground',
        label: 'Basic background',
        type: 'media',
        value: {
          uuid: '3000'
        }
      },
      {
        id: 'defaultBackgroundMask',
        label: 'Overlay background (transparent)',
        type: 'media',
        value: {
          uuid: '3001'
        }
      },
      {
        id: 'videoduration',
        label: 'Video duration',
        type: 'text',
        value: '15'
      }
    ],
    videos: {
      '1080x1080': {
        date: null,
        file: null
      }
    }
  },
  season: '2021',
  event: {
    competitionId: '5',
    competitionName: 'Bundesliga',
    type: 'match',
    homeTeamId: '10',
    awayTeamId: '20',
    side: 'home',
    eventId: '1000',
    date: '202130203023'
  }
};
