module.exports = {
  uuid: '0',
  template_name: 'adlertopscorer',
  name: 'Top scorer',
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
              score_home: 4,
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
      topScorersHome: [
        {
          id: 1172,
          name: 'Matthew White',
          firstname: 'Matthew',
          surname: 'White',
          dateOfBirth: '1989-08-23',
          active: true,
          position: 'FO',
          stick: 'left',
          weight: 83,
          height: 180,
          jersey: 97,
          birthCountry: 'Los Angeles, CA, USA',
          nationality: 'USA',
          nationalityShort: 'USA',
          statistics: {
            teamShortcut: 'EBB',
            games: 1,
            goals: {
              home: 3,
              away: 2
            },
            assists: {
              home: 2,
              away: 4
            },
            points: {
              home: 1,
              away: 4
            },
            penaltyMinutes: 0,
            positive: 2,
            negative: 0,
            pointsPerGame: 2,
            shotEfficiency: 40,
            penaltyMinutesPerGame: 0,
            ppGoals: 0,
            shGoals: 1,
            gwGoals: 1,
            shotsAttempts: 6,
            shotsOnGoal: {
              home: 0,
              away: 5
            },
            shotsMissed: 1,
            shotsBlocked: 0,
            blockedShotsByPlayer: 0,
            faceoffsWin: 0,
            faceoffsLosses: 1,
            faceoffsCount: 1,
            timeOnIce: 1338,
            timeOnIcePP: 258,
            timeOnIceSH: 285,
            timeOnIcePerGame: 1338,
            shifts: 28,
            shiftsPerGame: 28
          }
        },
        {
          id: 1711,
          name: 'Zachary Boychuk',
          firstname: 'Zachary',
          surname: 'Boychuk',
          dateOfBirth: '1989-10-04',
          active: true,
          position: 'FO',
          stick: 'left',
          weight: 84,
          height: 178,
          jersey: 89,
          birthCountry: 'Airdrie, AB, CAN',
          nationality: 'Canada',
          nationalityShort: 'CAN',
          statistics: {
            teamShortcut: 'EBB',
            games: 1,
            goals: {
              home: 1,
              away: 2
            },
            assists: {
              home: 2,
              away: 4
            },
            points: {
              home: 3,
              away: 4
            },
            penaltyMinutes: 2,
            positive: 2,
            negative: 0,
            pointsPerGame: 2,
            shotEfficiency: 0,
            penaltyMinutesPerGame: 2,
            ppGoals: 0,
            shGoals: 0,
            gwGoals: 0,
            shotsAttempts: 2,
            shotsOnGoal: {
              home: 0,
              away: 1
            },
            shotsMissed: 1,
            shotsBlocked: 0,
            blockedShotsByPlayer: 2,
            faceoffsWin: 7,
            faceoffsLosses: 15,
            faceoffsCount: 22,
            timeOnIce: 1144,
            timeOnIcePP: 273,
            timeOnIceSH: 181,
            timeOnIcePerGame: 1144,
            shifts: 26,
            shiftsPerGame: 26
          }
        },
        {
          id: 6,
          name: 'Frank Hördler',
          firstname: 'Frank',
          surname: 'Hördler',
          dateOfBirth: '1985-01-26',
          active: true,
          position: 'DE',
          stick: 'left',
          weight: 88,
          height: 185,
          jersey: 7,
          birthCountry: 'Bad Muskau, GER',
          nationality: 'Germany',
          nationalityShort: 'GER',
          statistics: {
            teamShortcut: 'EBB',
            games: 1,
            goals: {
              home: 3,
              away: 2
            },
            assists: {
              home: 2,
              away: 4
            },
            points: {
              home: 1,
              away: 4
            },
            penaltyMinutes: 2,
            positive: 1,
            negative: 0,
            pointsPerGame: 1,
            shotEfficiency: 0,
            penaltyMinutesPerGame: 2,
            ppGoals: 0,
            shGoals: 0,
            gwGoals: 0,
            shotsAttempts: 3,
            shotsOnGoal: {
              home: 0,
              away: 0
            },
            shotsMissed: 1,
            shotsBlocked: 2,
            blockedShotsByPlayer: 0,
            faceoffsWin: 0,
            faceoffsLosses: 0,
            faceoffsCount: 0,
            timeOnIce: 1328,
            timeOnIcePP: 267,
            timeOnIceSH: 184,
            timeOnIcePerGame: 1328,
            shifts: 27,
            shiftsPerGame: 27
          }
        }
      ],
      topScorersAway: [
        {
          id: 1172,
          name: 'Matthew White',
          firstname: 'Matthew',
          surname: 'White',
          dateOfBirth: '1989-08-23',
          active: true,
          position: 'FO',
          stick: 'left',
          weight: 83,
          height: 180,
          jersey: 97,
          birthCountry: 'Los Angeles, CA, USA',
          nationality: 'USA',
          nationalityShort: 'USA',
          statistics: {
            teamShortcut: 'EBB',
            games: 1,
            goals: {
              home: 1,
              away: 2
            },
            assists: {
              home: 2,
              away: 4
            },
            points: {
              home: 3,
              away: 4
            },
            penaltyMinutes: 0,
            positive: 2,
            negative: 0,
            pointsPerGame: 2,
            shotEfficiency: 40,
            penaltyMinutesPerGame: 0,
            ppGoals: 0,
            shGoals: 1,
            gwGoals: 1,
            shotsAttempts: 6,
            shotsOnGoal: {
              home: 0,
              away: 5
            },
            shotsMissed: 1,
            shotsBlocked: 0,
            blockedShotsByPlayer: 0,
            faceoffsWin: 0,
            faceoffsLosses: 1,
            faceoffsCount: 1,
            timeOnIce: 1338,
            timeOnIcePP: 258,
            timeOnIceSH: 285,
            timeOnIcePerGame: 1338,
            shifts: 28,
            shiftsPerGame: 28
          }
        },
        {
          id: 1711,
          name: 'Zachary Boychuk',
          firstname: 'Zachary',
          surname: 'Boychuk',
          dateOfBirth: '1989-10-04',
          active: true,
          position: 'FO',
          stick: 'left',
          weight: 84,
          height: 178,
          jersey: 89,
          birthCountry: 'Airdrie, AB, CAN',
          nationality: 'Canada',
          nationalityShort: 'CAN',
          statistics: {
            teamShortcut: 'EBB',
            games: 1,
            goals: {
              home: 3,
              away: 2
            },
            assists: {
              home: 2,
              away: 4
            },
            points: {
              home: 1,
              away: 4
            },
            penaltyMinutes: 2,
            positive: 2,
            negative: 0,
            pointsPerGame: 2,
            shotEfficiency: 0,
            penaltyMinutesPerGame: 2,
            ppGoals: 0,
            shGoals: 0,
            gwGoals: 0,
            shotsAttempts: 2,
            shotsOnGoal: {
              home: 0,
              away: 1
            },
            shotsMissed: 1,
            shotsBlocked: 0,
            blockedShotsByPlayer: 2,
            faceoffsWin: 7,
            faceoffsLosses: 15,
            faceoffsCount: 22,
            timeOnIce: 1144,
            timeOnIcePP: 273,
            timeOnIceSH: 181,
            timeOnIcePerGame: 1144,
            shifts: 26,
            shiftsPerGame: 26
          }
        },
        {
          id: 6,
          name: 'Frank Hördler',
          firstname: 'Frank',
          surname: 'Hördler',
          dateOfBirth: '1985-01-26',
          active: true,
          position: 'DE',
          stick: 'left',
          weight: 88,
          height: 185,
          jersey: 7,
          birthCountry: 'Bad Muskau, GER',
          nationality: 'Germany',
          nationalityShort: 'GER',
          statistics: {
            teamShortcut: 'EBB',
            games: 1,
            goals: {
              home: 3,
              away: 2
            },
            assists: {
              home: 2,
              away: 4
            },
            points: {
              home: 1,
              away: 4
            },
            penaltyMinutes: 2,
            positive: 1,
            negative: 0,
            pointsPerGame: 1,
            shotEfficiency: 0,
            penaltyMinutesPerGame: 2,
            ppGoals: 0,
            shGoals: 0,
            gwGoals: 0,
            shotsAttempts: 3,
            shotsOnGoal: {
              home: 0,
              away: 0
            },
            shotsMissed: 1,
            shotsBlocked: 2,
            blockedShotsByPlayer: 0,
            faceoffsWin: 0,
            faceoffsLosses: 0,
            faceoffsCount: 0,
            timeOnIce: 1328,
            timeOnIcePP: 267,
            timeOnIceSH: 184,
            timeOnIcePerGame: 1328,
            shifts: 27,
            shiftsPerGame: 27
          }
        }
      ],
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
        },
        p_1172: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '1172',
            firstname: 'Sinan1',
            lastname: 'Akdag3',
            position: 'DE',
            shirtNumber: '5'
          }
        },
        p_1711: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '1711',
            firstname: 'Sinan2',
            lastname: 'Akdag2',
            position: 'DE',
            shirtNumber: '6'
          }
        },
        p_6: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '6',
            firstname: 'Sinan3',
            lastname: 'Akdag3',
            position: 'DE',
            shirtNumber: '7'
          }
        }
      }
    },
    fields: [
      {
        id: 'topScorer1',
        label: 'Top scorer 1',
        type: 'media',
        // dragResize: false,
        // allowedActions: ['resize', 'move'],
        initialActiveGroup: 'players',
        allowedMediaTypes: ['image'],
        value: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '1702',
            firstname: 'Top',
            lastname: 'Scorer',
            position: 'DE',
            shirtNumber: '7'
          }
        },
        animation: {
          delay: '500',
          effect_duration: '1000',
          type: 'fade',
          out: false
        },
        styles: {}
      },
      {
        id: 'topScorer1Tore',
        label: 'Tore',
        type: 'text',
        value: '5'
      },
      {
        id: 'topScorer1Vorlagen',
        label: 'Vorlagen',
        type: 'text',
        value: '7'
      },
      {
        id: 'topScorer1Punkte',
        label: 'Punkte',
        type: 'text',
        value: '3'
      },
      {
        id: 'topScorer2',
        label: 'Top scorer 2',
        type: 'media',
        // dragResize: false,
        // allowedActions: ['resize', 'move'],
        initialActiveGroup: 'players',
        allowedMediaTypes: ['image'],
        value: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '1702',
            firstname: 'Top',
            lastname: 'Scorer',
            position: 'DE',
            shirtNumber: '7'
          }
        },
        animation: {
          delay: '500',
          effect_duration: '1000',
          type: 'fade',
          out: false
        },
        styles: {}
      },
      {
        id: 'topScorer2Tore',
        label: 'Tore',
        type: 'text',
        value: '5'
      },
      {
        id: 'topScorer2Vorlagen',
        label: 'Vorlagen',
        type: 'text',
        value: '7'
      },
      {
        id: 'topScorer2Punkte',
        label: 'Punkte',
        type: 'text',
        value: '3'
      },
      {
        id: 'topScorer3',
        label: 'Top scorer 3',
        type: 'media',
        // dragResize: false,
        // allowedActions: ['resize', 'move'],
        initialActiveGroup: 'players',
        allowedMediaTypes: ['image'],
        value: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '1702',
            firstname: 'Top',
            lastname: 'Scorer',
            position: 'DE',
            shirtNumber: '7'
          }
        },
        animation: {
          delay: '500',
          effect_duration: '1000',
          type: 'fade',
          out: false
        },
        styles: {}
      },
      {
        id: 'topScorer3Tore',
        label: 'Tore',
        type: 'text',
        value: '5'
      },
      {
        id: 'topScorer3Vorlagen',
        label: 'Vorlagen',
        type: 'text',
        value: '7'
      },
      {
        id: 'topScorer3Punkte',
        label: 'Punkte',
        type: 'text',
        value: '3'
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Top scorer'
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
    selectedTeamId: '2',
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
