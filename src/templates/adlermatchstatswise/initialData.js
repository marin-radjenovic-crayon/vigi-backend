module.exports = {
  uuid: '0',
  template_name: 'adlermatchstatswise',
  name: 'Match Stats (Wise)',
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
      },
      matchStats: {
        faceoffs: {
          faceoffs: [
            {
              spot: 'Center',
              homePlayer: '1846',
              awayPlayer: '648',
              winner: 'Home',
              period: 1,
              secondsFromPeriodStart: 0,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '1846',
              awayPlayer: '648',
              winner: 'Away',
              period: 1,
              secondsFromPeriodStart: 22,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '1655',
              awayPlayer: '1882',
              winner: 'Home',
              period: 1,
              secondsFromPeriodStart: 61,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightBottom',
              homePlayer: '1846',
              awayPlayer: '648',
              winner: 'Home',
              period: 1,
              secondsFromPeriodStart: 354,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralLeftBottom',
              homePlayer: '1846',
              awayPlayer: '648',
              winner: 'Home',
              period: 1,
              secondsFromPeriodStart: 367,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralRightBottom',
              homePlayer: '2172',
              awayPlayer: '1882',
              winner: 'Home',
              period: 1,
              secondsFromPeriodStart: 427,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '143',
              awayPlayer: '555',
              winner: 'Away',
              period: 1,
              secondsFromPeriodStart: 485,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightBottom',
              homePlayer: '143',
              awayPlayer: '555',
              winner: 'Home',
              period: 1,
              secondsFromPeriodStart: 492,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '1306',
              awayPlayer: '648',
              winner: 'Away',
              period: 1,
              secondsFromPeriodStart: 500,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '1846',
              awayPlayer: '1449',
              winner: 'Home',
              period: 1,
              secondsFromPeriodStart: 612,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '2172',
              awayPlayer: '1882',
              winner: 'Away',
              period: 1,
              secondsFromPeriodStart: 675,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '2172',
              awayPlayer: '648',
              winner: 'Away',
              period: 1,
              secondsFromPeriodStart: 750,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '2172',
              awayPlayer: '1882',
              winner: 'Away',
              period: 1,
              secondsFromPeriodStart: 793,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralRightTop',
              homePlayer: '1846',
              awayPlayer: '555',
              winner: 'Home',
              period: 1,
              secondsFromPeriodStart: 942,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '59',
              awayPlayer: '1882',
              winner: 'Home',
              period: 1,
              secondsFromPeriodStart: 990,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralLeftTop',
              homePlayer: '1306',
              awayPlayer: '555',
              winner: 'Away',
              period: 1,
              secondsFromPeriodStart: 1134,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '1655',
              awayPlayer: '648',
              winner: 'Away',
              period: 1,
              secondsFromPeriodStart: 1146,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '1655',
              awayPlayer: '1882',
              winner: 'Away',
              period: 1,
              secondsFromPeriodStart: 1197,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'Center',
              homePlayer: '59',
              awayPlayer: '648',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 0,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftTop',
              homePlayer: '1846',
              awayPlayer: '1882',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 64,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '2172',
              awayPlayer: '555',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 91,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftTop',
              homePlayer: '1306',
              awayPlayer: '1882',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 245,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftTop',
              homePlayer: '1306',
              awayPlayer: '1882',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 252,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'Center',
              homePlayer: '2172',
              awayPlayer: '555',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 300,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '1846',
              awayPlayer: '555',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 337,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '1846',
              awayPlayer: '1449',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 346,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralRightTop',
              homePlayer: '2172',
              awayPlayer: '1882',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 387,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'Center',
              homePlayer: '1846',
              awayPlayer: '648',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 511,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '2172',
              awayPlayer: '1882',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 554,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralLeftBottom',
              homePlayer: '1506',
              awayPlayer: '1882',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 563,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '1655',
              awayPlayer: '1449',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 576,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '1846',
              awayPlayer: '555',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 611,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralRightBottom',
              homePlayer: '1846',
              awayPlayer: '555',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 623,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '59',
              awayPlayer: '555',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 638,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftTop',
              homePlayer: '1846',
              awayPlayer: '648',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 670,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '1846',
              awayPlayer: '1882',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 697,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'Center',
              homePlayer: '2172',
              awayPlayer: '1449',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 728,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '1655',
              awayPlayer: '1449',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 890,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'Center',
              homePlayer: '1306',
              awayPlayer: '648',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 1025,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralRightBottom',
              homePlayer: '1846',
              awayPlayer: '1882',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 1129,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralRightTop',
              homePlayer: '59',
              awayPlayer: '555',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 1170,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '59',
              awayPlayer: '555',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 1183,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '59',
              awayPlayer: '1449',
              winner: 'Home',
              period: 2,
              secondsFromPeriodStart: 1187,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralRightTop',
              homePlayer: '59',
              awayPlayer: '1449',
              winner: 'Away',
              period: 2,
              secondsFromPeriodStart: 1199,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerPositions: null
            },
            {
              spot: 'Center',
              homePlayer: '1846',
              awayPlayer: '1882',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 0,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightBottom',
              homePlayer: '2172',
              awayPlayer: '1449',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 56,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '2172',
              awayPlayer: '648',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 330,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '2172',
              awayPlayer: '648',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 335,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '2172',
              awayPlayer: '1882',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 342,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'NeutralLeftTop',
              homePlayer: '2172',
              awayPlayer: '648',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 447,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '1846',
              awayPlayer: '1882',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 485,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '59',
              awayPlayer: '648',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 657,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'Center',
              homePlayer: '2172',
              awayPlayer: '1449',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 746,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightBottom',
              homePlayer: '59',
              awayPlayer: '648',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 801,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneRightTop',
              homePlayer: '2172',
              awayPlayer: '648',
              winner: 'Away',
              period: 3,
              secondsFromPeriodStart: 815,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '2172',
              awayPlayer: '648',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 985,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftTop',
              homePlayer: '1846',
              awayPlayer: '1449',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 1146,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerPositions: null
            },
            {
              spot: 'Center',
              homePlayer: '2172',
              awayPlayer: '1882',
              winner: 'Home',
              period: 3,
              secondsFromPeriodStart: 1168,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            },
            {
              spot: 'Center',
              homePlayer: '1846',
              awayPlayer: '648',
              winner: 'Away',
              period: 3,
              secondsFromPeriodStart: 1181,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerPositions: null
            },
            {
              spot: 'EndZoneLeftBottom',
              homePlayer: '1846',
              awayPlayer: '648',
              winner: 'Away',
              period: 3,
              secondsFromPeriodStart: 1190,
              teamStrength: {
                type: 'FullStrength'
              },
              playerPositions: null
            }
          ],
          dataRestrictions: []
        },
        puckcontrol: {
          periodPuckControlStatistics: [
            {
              period: 1,
              totalPuckControlStatistics: {
                homeTeamControlDuration: 374.94,
                awayTeamControlDuration: 283.1,
                contestedControlDuration: 38.52,
                looseDuration: 492.46
              },
              zonePuckControlStatistics: [
                {
                  zone: 'NeutralZone',
                  puckControlStatistics: {
                    homeTeamControlDuration: 63.92,
                    awayTeamControlDuration: 59.72,
                    contestedControlDuration: 5.78,
                    looseDuration: 65.42
                  }
                },
                {
                  zone: 'AwayTeamZone',
                  puckControlStatistics: {
                    homeTeamControlDuration: 127.98,
                    awayTeamControlDuration: 151.24,
                    contestedControlDuration: 20.48,
                    looseDuration: 235.56
                  }
                },
                {
                  zone: 'HomeTeamZone',
                  puckControlStatistics: {
                    homeTeamControlDuration: 183.04,
                    awayTeamControlDuration: 72.14,
                    contestedControlDuration: 12.26,
                    looseDuration: 191.48
                  }
                }
              ]
            },
            {
              period: 2,
              totalPuckControlStatistics: {
                homeTeamControlDuration: 363.62,
                awayTeamControlDuration: 236.04,
                contestedControlDuration: 54.14,
                looseDuration: 546.1
              },
              zonePuckControlStatistics: [
                {
                  zone: 'HomeTeamZone',
                  puckControlStatistics: {
                    homeTeamControlDuration: 162.04,
                    awayTeamControlDuration: 72.7,
                    contestedControlDuration: 23.86,
                    looseDuration: 221.4
                  }
                },
                {
                  zone: 'NeutralZone',
                  puckControlStatistics: {
                    homeTeamControlDuration: 77.96,
                    awayTeamControlDuration: 44.6,
                    contestedControlDuration: 6.62,
                    looseDuration: 99.4
                  }
                },
                {
                  zone: 'AwayTeamZone',
                  puckControlStatistics: {
                    homeTeamControlDuration: 123.62,
                    awayTeamControlDuration: 118.74,
                    contestedControlDuration: 23.66,
                    looseDuration: 225.3
                  }
                }
              ]
            },
            {
              period: 3,
              totalPuckControlStatistics: {
                homeTeamControlDuration: 412.8,
                awayTeamControlDuration: 233.86,
                contestedControlDuration: 35.3,
                looseDuration: 510.6
              },
              zonePuckControlStatistics: [
                {
                  zone: 'NeutralZone',
                  puckControlStatistics: {
                    homeTeamControlDuration: 55.82,
                    awayTeamControlDuration: 33.74,
                    contestedControlDuration: 2.66,
                    looseDuration: 76.6
                  }
                },
                {
                  zone: 'AwayTeamZone',
                  puckControlStatistics: {
                    homeTeamControlDuration: 184.28,
                    awayTeamControlDuration: 130.78,
                    contestedControlDuration: 23.16,
                    looseDuration: 281.6
                  }
                },
                {
                  zone: 'HomeTeamZone',
                  puckControlStatistics: {
                    homeTeamControlDuration: 172.7,
                    awayTeamControlDuration: 69.34,
                    contestedControlDuration: 9.48,
                    looseDuration: 152.4
                  }
                }
              ]
            }
          ],
          dataRestrictions: []
        },
        goals: {
          goals: [
            {
              team: 'Away',
              homeScore: 0,
              awayScore: 1,
              period: 2,
              secondsFromPeriodStart: 300,
              shot: {
                team: 'Away',
                period: 2,
                secondsFromPeriodStart: 299,
                startXPosition: -14.04,
                startYPosition: -4.25,
                speed: 0,
                result: 'Goal',
                shooter: '2115',
                blocker: null,
                saver: '1557',
                screeningPlayers: ['143'],
                shotAreaId: 3,
                fromLateralPass: false,
                shotDirection: {
                  horizontal: [-1, -0.33],
                  vertical: [0, 0.5],
                  goalHorizontalLimits: [-1, 1],
                  goalVerticalLimits: [0, 1]
                },
                royalRoadCrossed: false,
                teamStrength: {
                  type: 'FullStrength'
                },
                playerStartPositions: null,
                expectedGoals: 0.02,
                shooterSpeed: 4.8
              },
              playersOnIce: ['1306', '1377', '2118', '656', '143', '1557', '146', '2112', '1882', '291', '2115', '486'],
              scorer: '2115',
              assist1: '1882',
              assist2: null,
              teamStrength: {
                type: 'FullStrength'
              }
            },
            {
              team: 'Away',
              homeScore: 0,
              awayScore: 2,
              period: 2,
              secondsFromPeriodStart: 511,
              shot: {
                team: 'Away',
                period: 2,
                secondsFromPeriodStart: 509,
                startXPosition: -20.83,
                startYPosition: -4.45,
                speed: 19.52,
                result: 'Goal',
                shooter: '1694',
                blocker: null,
                saver: '1557',
                screeningPlayers: [],
                shotAreaId: 2,
                fromLateralPass: true,
                shotDirection: {
                  horizontal: [-1, -0.33],
                  vertical: [0, 0.5],
                  goalHorizontalLimits: [-1, 1],
                  goalVerticalLimits: [0, 1]
                },
                royalRoadCrossed: true,
                teamStrength: {
                  type: 'FullStrength'
                },
                playerStartPositions: null,
                expectedGoals: 0.11,
                shooterSpeed: 5.35
              },
              playersOnIce: ['143', '1377', '23', '1768', '1306', '1557', '115', '1481', '1694', '2112', '486', '648'],
              scorer: '1694',
              assist1: '648',
              assist2: '115',
              teamStrength: {
                type: 'FullStrength'
              }
            },
            {
              team: 'Away',
              homeScore: 0,
              awayScore: 3,
              period: 2,
              secondsFromPeriodStart: 728,
              shot: {
                team: 'Away',
                period: 2,
                secondsFromPeriodStart: 727,
                startXPosition: -16.24,
                startYPosition: -3.47,
                speed: 29.82,
                result: 'Goal',
                shooter: '2113',
                blocker: null,
                saver: '1557',
                screeningPlayers: ['25'],
                shotAreaId: 2,
                fromLateralPass: true,
                shotDirection: {
                  horizontal: [-1, -0.33],
                  vertical: [0.5, 1],
                  goalHorizontalLimits: [-1, 1],
                  goalVerticalLimits: [0, 1]
                },
                royalRoadCrossed: true,
                teamStrength: {
                  type: 'FullStrength'
                },
                playerStartPositions: null,
                expectedGoals: 0.05,
                shooterSpeed: 3.18
              },
              playersOnIce: ['1362', '25', '493', '487', '1846', '1557', '291', '1004', '1694', '2113', '1882', '486'],
              scorer: '2113',
              assist1: '1004',
              assist2: '1882',
              teamStrength: {
                type: 'FullStrength'
              }
            },
            {
              team: 'Home',
              homeScore: 1,
              awayScore: 3,
              period: 2,
              secondsFromPeriodStart: 1025,
              shot: {
                team: 'Home',
                period: 2,
                secondsFromPeriodStart: 1024,
                startXPosition: 24.07,
                startYPosition: -0.8,
                speed: 0,
                result: 'Goal',
                shooter: '493',
                blocker: null,
                saver: '486',
                screeningPlayers: [],
                shotAreaId: 1,
                fromLateralPass: false,
                shotDirection: null,
                royalRoadCrossed: false,
                teamStrength: {
                  type: 'FullStrength'
                },
                playerStartPositions: null,
                expectedGoals: 0.21,
                shooterSpeed: 0
              },
              playersOnIce: ['1846', '23', '1764', '487', '493', '1557', '146', '2115', '1882', '2112', '1542', '486'],
              scorer: '493',
              assist1: '1846',
              assist2: '1764',
              teamStrength: {
                type: 'FullStrength'
              }
            },
            {
              team: 'Home',
              homeScore: 2,
              awayScore: 3,
              period: 3,
              secondsFromPeriodStart: 746,
              shot: {
                team: 'Home',
                period: 3,
                secondsFromPeriodStart: 745,
                startXPosition: 13.54,
                startYPosition: 9.23,
                speed: 36.26,
                result: 'Goal',
                shooter: '487',
                blocker: null,
                saver: '486',
                screeningPlayers: ['2216'],
                shotAreaId: 4,
                fromLateralPass: false,
                shotDirection: {
                  horizontal: [0.33, 1],
                  vertical: [0, 0.5],
                  goalHorizontalLimits: [-1, 1],
                  goalVerticalLimits: [0, 1]
                },
                royalRoadCrossed: false,
                teamStrength: {
                  type: 'FullStrength'
                },
                playerStartPositions: null,
                expectedGoals: 0.01,
                shooterSpeed: 5.67
              },
              playersOnIce: ['23', '487', '1846', '493', '1768', '1557', '555', '1542', '2216', '2115', '1447', '486'],
              scorer: '487',
              assist1: '1846',
              assist2: '493',
              teamStrength: {
                type: 'FullStrength'
              }
            },
            {
              team: 'Home',
              homeScore: 3,
              awayScore: 3,
              period: 3,
              secondsFromPeriodStart: 1168,
              shot: {
                team: 'Home',
                period: 3,
                secondsFromPeriodStart: 1168,
                startXPosition: 24.9,
                startYPosition: 0.36,
                speed: 0,
                result: 'Goal',
                shooter: '493',
                blocker: null,
                saver: '486',
                screeningPlayers: [],
                shotAreaId: 1,
                fromLateralPass: false,
                shotDirection: null,
                royalRoadCrossed: true,
                teamStrength: {
                  type: 'EqualStrength'
                },
                playerStartPositions: null,
                expectedGoals: 0.59,
                shooterSpeed: 2.98
              },
              playersOnIce: [
                '493',
                '1506',
                '487',
                '1362',
                '1846',
                '1364',
                '2113',
                '1449',
                '1542',
                '1481',
                '146',
                '486'
              ],
              scorer: '493',
              assist1: '1506',
              assist2: null,
              teamStrength: {
                type: 'EqualStrength'
              }
            },
            {
              team: 'Home',
              homeScore: 4,
              awayScore: 3,
              period: 3,
              secondsFromPeriodStart: 1181,
              shot: {
                team: 'Home',
                period: 3,
                secondsFromPeriodStart: 1179,
                startXPosition: 21.03,
                startYPosition: 9.67,
                speed: 32.11,
                result: 'Goal',
                shooter: '143',
                blocker: null,
                saver: '486',
                screeningPlayers: [],
                shotAreaId: 4,
                fromLateralPass: false,
                shotDirection: {
                  horizontal: [-0.33, 0.33],
                  vertical: [0, 0.5],
                  goalHorizontalLimits: [-1, 1],
                  goalVerticalLimits: [0, 1]
                },
                royalRoadCrossed: false,
                teamStrength: {
                  type: 'FullStrength'
                },
                playerStartPositions: null,
                expectedGoals: 0.03,
                shooterSpeed: 1.61
              },
              playersOnIce: ['25', '23', '2172', '143', '59', '1557', '2216', '1520', '291', '1882', '1004', '486'],
              scorer: '143',
              assist1: '59',
              assist2: null,
              teamStrength: {
                type: 'FullStrength'
              }
            }
          ],
          dataRestrictions: []
        },
        shots: {
          shots: [
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 58,
              startXPosition: -11.88,
              startYPosition: -8.02,
              speed: 22.02,
              result: 'Saved',
              shooter: '1004',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [0.33, 1],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 4.19
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 88,
              startXPosition: -14.68,
              startYPosition: 11.39,
              speed: 35.26,
              result: 'Saved',
              shooter: '2113',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [0.33, 1],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 6.3
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 123,
              startXPosition: 11.61,
              startYPosition: 0.27,
              speed: 25.81,
              result: 'Missed',
              shooter: '1306',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [1, 2],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 6.29
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 131,
              startXPosition: -17.54,
              startYPosition: -6.05,
              speed: 32.27,
              result: 'Saved',
              shooter: '555',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [0.33, 1],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.03,
              shooterSpeed: 8.57
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 162,
              startXPosition: -15.87,
              startYPosition: -14.92,
              speed: 29.2,
              result: 'Blocked',
              shooter: '1449',
              blocker: '59',
              saver: '1557',
              screeningPlayers: ['59'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 3.03
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 187,
              startXPosition: 13.08,
              startYPosition: -12.59,
              speed: 26.75,
              result: 'Saved',
              shooter: '487',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 3.78
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 202,
              startXPosition: 9.71,
              startYPosition: 14.7,
              speed: 0,
              result: 'Blocked',
              shooter: '1362',
              blocker: '1449',
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 0.71
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 283,
              startXPosition: -0.13,
              startYPosition: -13.63,
              speed: 33.83,
              result: 'Saved',
              shooter: '146',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [1, 2],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 7.58
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 298,
              startXPosition: -21.74,
              startYPosition: -0.12,
              speed: 35.91,
              result: 'Saved',
              shooter: '291',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.17,
              shooterSpeed: 0.17
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 301,
              startXPosition: -14.99,
              startYPosition: -12.4,
              speed: 26.82,
              result: 'Saved',
              shooter: '2115',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 5.54
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 352,
              startXPosition: -10.68,
              startYPosition: 13.91,
              speed: 18.85,
              result: 'Saved',
              shooter: '1694',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-0.33, 0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 2.28
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 377,
              startXPosition: 16.8,
              startYPosition: 5.71,
              speed: 0,
              result: 'Saved',
              shooter: '1846',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-0.33, 0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.06,
              shooterSpeed: 6.79
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 406,
              startXPosition: 10.3,
              startYPosition: -14.41,
              speed: 24.34,
              result: 'Missed',
              shooter: '25',
              blocker: null,
              saver: '486',
              screeningPlayers: ['1846'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 0.54
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 481,
              startXPosition: -13.11,
              startYPosition: -1.07,
              speed: 29.5,
              result: 'Missed',
              shooter: '555',
              blocker: null,
              saver: '1557',
              screeningPlayers: ['1542'],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 4.7
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 486,
              startXPosition: -15.5,
              startYPosition: -8.53,
              speed: 22.65,
              result: 'Blocked',
              shooter: '2115',
              blocker: '656',
              saver: '1557',
              screeningPlayers: ['1377'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 1.74
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 504,
              startXPosition: -17.23,
              startYPosition: 9.04,
              speed: 0,
              result: 'Missed',
              shooter: '2216',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-1, 1],
                vertical: [1, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 3.78
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 580,
              startXPosition: -10.36,
              startYPosition: -6.83,
              speed: 32.72,
              result: 'Blocked',
              shooter: '2112',
              blocker: '59',
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 2.8
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 604,
              startXPosition: 15.29,
              startYPosition: 0.67,
              speed: 29.62,
              result: 'Missed',
              shooter: '487',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [1, 2],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.08,
              shooterSpeed: 7.42
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 636,
              startXPosition: 18.21,
              startYPosition: 6.05,
              speed: 0,
              result: 'Blocked',
              shooter: '1846',
              blocker: '2216',
              saver: '486',
              screeningPlayers: ['2216'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: true,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.06,
              shooterSpeed: 0.48
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 650,
              startXPosition: 16.57,
              startYPosition: 8.07,
              speed: 0,
              result: 'Blocked',
              shooter: '1846',
              blocker: '2216',
              saver: '486',
              screeningPlayers: ['2216'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 3.27
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 652,
              startXPosition: 13.19,
              startYPosition: 4.56,
              speed: 0,
              result: 'Blocked',
              shooter: '2118',
              blocker: '1449',
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 3,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 2.39
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 658,
              startXPosition: 17.77,
              startYPosition: -4.15,
              speed: 36.18,
              result: 'Missed',
              shooter: '487',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [1, 2],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.07,
              shooterSpeed: 3.18
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 672,
              startXPosition: 8.86,
              startYPosition: 7.44,
              speed: 28.42,
              result: 'Saved',
              shooter: '2118',
              blocker: null,
              saver: '486',
              screeningPlayers: ['1677', '2216'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [0.33, 1],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 1.04
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 694,
              startXPosition: -16.81,
              startYPosition: -3.22,
              speed: 34.56,
              result: 'Missed',
              shooter: '291',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.1,
              shooterSpeed: 8.86
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 738,
              startXPosition: 25.03,
              startYPosition: -3.58,
              speed: 34.16,
              result: 'Saved',
              shooter: '143',
              blocker: '1694',
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.11,
              shooterSpeed: 4.32
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 747,
              startXPosition: 24.53,
              startYPosition: -13.39,
              speed: 0,
              result: 'Saved',
              shooter: '656',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 6
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 754,
              startXPosition: -15.62,
              startYPosition: 7.85,
              speed: 29.43,
              result: 'Saved',
              shooter: '2115',
              blocker: null,
              saver: '1557',
              screeningPlayers: ['25'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-0.33, 0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 3.06
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 755,
              startXPosition: -24.58,
              startYPosition: -0.6,
              speed: 0,
              result: 'Saved',
              shooter: '1481',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.49,
              shooterSpeed: 1.35
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 791,
              startXPosition: -16.93,
              startYPosition: 7.28,
              speed: 35.66,
              result: 'Saved',
              shooter: '2115',
              blocker: null,
              saver: '1557',
              screeningPlayers: ['648'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [0.33, 1],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.04,
              shooterSpeed: 3.31
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 808,
              startXPosition: -16.74,
              startYPosition: 5.66,
              speed: 0,
              result: 'Blocked',
              shooter: '2112',
              blocker: '656',
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: true,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.05,
              shooterSpeed: 3.5
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 826,
              startXPosition: 14.88,
              startYPosition: 2.12,
              speed: 0,
              result: 'Saved',
              shooter: '2172',
              blocker: '146',
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.07,
              shooterSpeed: 9.05
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 921,
              startXPosition: 7.83,
              startYPosition: -5.72,
              speed: 35.26,
              result: 'Blocked',
              shooter: '1362',
              blocker: '2113',
              saver: '486',
              screeningPlayers: ['1449'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 1.3
            },
            {
              team: 'Home',
              period: 1,
              secondsFromPeriodStart: 935,
              startXPosition: 0.66,
              startYPosition: -12.9,
              speed: 22.13,
              result: 'Saved',
              shooter: '656',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 3.66
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 1144,
              startXPosition: -25.92,
              startYPosition: -1.53,
              speed: 0,
              result: 'Saved',
              shooter: '2115',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.23,
              shooterSpeed: 6.94
            },
            {
              team: 'Away',
              period: 1,
              secondsFromPeriodStart: 1198,
              startXPosition: -15.91,
              startYPosition: -6.25,
              speed: 21.77,
              result: 'Blocked',
              shooter: '1542',
              blocker: '2172',
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.04,
              shooterSpeed: 2.54
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 20,
              startXPosition: -9.95,
              startYPosition: 3.52,
              speed: 41.63,
              result: 'Blocked',
              shooter: '2112',
              blocker: '143',
              saver: '1557',
              screeningPlayers: ['648'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 2.86
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 26,
              startXPosition: -11.94,
              startYPosition: -4.26,
              speed: 22.93,
              result: 'Blocked',
              shooter: '1481',
              blocker: '25',
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: true,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 1.02
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 51,
              startXPosition: -24.12,
              startYPosition: 1.01,
              speed: 24,
              result: 'Saved',
              shooter: '648',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.21,
              shooterSpeed: 4.13
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 62,
              startXPosition: -11.14,
              startYPosition: 6.99,
              speed: 31.29,
              result: 'Saved',
              shooter: '2112',
              blocker: null,
              saver: '1557',
              screeningPlayers: ['25', '648'],
              shotAreaId: 3,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 4.78
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 89,
              startXPosition: 17.01,
              startYPosition: 3.01,
              speed: 38.17,
              result: 'Saved',
              shooter: '1362',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.06,
              shooterSpeed: 5.86
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 110,
              startXPosition: 25.22,
              startYPosition: -1.4,
              speed: 0,
              result: 'Saved',
              shooter: '656',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.05,
              shooterSpeed: 3.35
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 118,
              startXPosition: 8.9,
              startYPosition: -8.11,
              speed: 0,
              result: 'Blocked',
              shooter: '656',
              blocker: '1542',
              saver: '486',
              screeningPlayers: ['1506', '2216'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 0.33
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 157,
              startXPosition: 14,
              startYPosition: 9.12,
              speed: 0,
              result: 'Blocked',
              shooter: '493',
              blocker: '1677',
              saver: '486',
              screeningPlayers: ['1677'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 6.43
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 195,
              startXPosition: -8.16,
              startYPosition: 10.68,
              speed: 38.11,
              result: 'Saved',
              shooter: '1447',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0.5, 1],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 7.02
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 252,
              startXPosition: -24.85,
              startYPosition: 0.23,
              speed: 0,
              result: 'Saved',
              shooter: '1882',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.44,
              shooterSpeed: 2.43
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 299,
              startXPosition: -14.04,
              startYPosition: -4.25,
              speed: 0,
              result: 'Goal',
              shooter: '2115',
              blocker: null,
              saver: '1557',
              screeningPlayers: ['143'],
              shotAreaId: 3,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 4.8
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 334,
              startXPosition: -1.82,
              startYPosition: 12.99,
              speed: 25.98,
              result: 'Saved',
              shooter: '23',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [1, 2],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0,
              shooterSpeed: 4.1
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 377,
              startXPosition: 22.8,
              startYPosition: -2.91,
              speed: 0,
              result: 'Missed',
              shooter: '487',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.05,
              shooterSpeed: 6.45
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 424,
              startXPosition: 23.73,
              startYPosition: -2.71,
              speed: 24.38,
              result: 'Missed',
              shooter: '1506',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.16,
              shooterSpeed: 1.08
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 457,
              startXPosition: 12.23,
              startYPosition: 3.41,
              speed: 0,
              result: 'Blocked',
              shooter: '1364',
              blocker: '1542',
              saver: '486',
              screeningPlayers: ['2113'],
              shotAreaId: 3,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 6.92
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 509,
              startXPosition: -20.83,
              startYPosition: -4.45,
              speed: 19.52,
              result: 'Goal',
              shooter: '1694',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.11,
              shooterSpeed: 5.35
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 535,
              startXPosition: 15.47,
              startYPosition: 5.7,
              speed: 0,
              result: 'Blocked',
              shooter: '25',
              blocker: '648',
              saver: '486',
              screeningPlayers: ['493'],
              shotAreaId: 2,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: true,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.04,
              shooterSpeed: 2.96
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 553,
              startXPosition: 14.79,
              startYPosition: 3.97,
              speed: 23.7,
              result: 'Missed',
              shooter: '493',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-1, 1],
                vertical: [1, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.03,
              shooterSpeed: 7.37
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 565,
              startXPosition: -0.05,
              startYPosition: -8.16,
              speed: 32.92,
              result: 'Saved',
              shooter: '2113',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 2.3
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 613,
              startXPosition: 10.79,
              startYPosition: 14.31,
              speed: 29.33,
              result: 'Blocked',
              shooter: '23',
              blocker: '555',
              saver: '486',
              screeningPlayers: ['1846', '146', '555'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 2.25
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 685,
              startXPosition: -0.1,
              startYPosition: -14.52,
              speed: 28.49,
              result: 'Saved',
              shooter: '1520',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 3.98
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 712,
              startXPosition: -7.3,
              startYPosition: -5.55,
              speed: 15.96,
              result: 'Missed',
              shooter: '1004',
              blocker: '25',
              saver: '1557',
              screeningPlayers: ['291'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-1, 1],
                vertical: [1, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 2.92
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 718,
              startXPosition: -10.45,
              startYPosition: -12.79,
              speed: 27.47,
              result: 'Missed',
              shooter: '2113',
              blocker: null,
              saver: '1557',
              screeningPlayers: ['291'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-1, 1],
                vertical: [1, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 0.89
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 727,
              startXPosition: -16.24,
              startYPosition: -3.47,
              speed: 29.82,
              result: 'Goal',
              shooter: '2113',
              blocker: null,
              saver: '1557',
              screeningPlayers: ['25'],
              shotAreaId: 2,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0.5, 1],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.05,
              shooterSpeed: 3.18
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 832,
              startXPosition: 12.33,
              startYPosition: 6.71,
              speed: 26.23,
              result: 'Missed',
              shooter: '2118',
              blocker: null,
              saver: '486',
              screeningPlayers: ['1542'],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-1, 1],
                vertical: [1, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 1.87
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 860,
              startXPosition: -19.95,
              startYPosition: 0.62,
              speed: 0,
              result: 'Saved',
              shooter: '1481',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [0.33, 1],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.17,
              shooterSpeed: 8.25
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 910,
              startXPosition: -9.55,
              startYPosition: 2.13,
              speed: 24.16,
              result: 'Blocked',
              shooter: '488',
              blocker: '23',
              saver: '1557',
              screeningPlayers: ['1677'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 1.06
            },
            {
              team: 'Away',
              period: 2,
              secondsFromPeriodStart: 922,
              startXPosition: -1.48,
              startYPosition: -13.84,
              speed: 25.86,
              result: 'Saved',
              shooter: '1449',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [1, 2],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0,
              shooterSpeed: 4.46
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 962,
              startXPosition: 9,
              startYPosition: 13.43,
              speed: 0,
              result: 'Blocked',
              shooter: '656',
              blocker: '1004',
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 1.15
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 985,
              startXPosition: 10.03,
              startYPosition: 10.27,
              speed: 33.84,
              result: 'Saved',
              shooter: '23',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 4.29
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 1018,
              startXPosition: 17.96,
              startYPosition: 3.09,
              speed: 0,
              result: 'Saved',
              shooter: '1764',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.04,
              shooterSpeed: 5.04
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 1024,
              startXPosition: 24.07,
              startYPosition: -0.8,
              speed: 0,
              result: 'Goal',
              shooter: '493',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.21,
              shooterSpeed: 0
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 1075,
              startXPosition: 8.8,
              startYPosition: -6.39,
              speed: 37.42,
              result: 'Blocked',
              shooter: '1768',
              blocker: '648',
              saver: '486',
              screeningPlayers: ['1655', '2216'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 3.66
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 1089,
              startXPosition: 13.24,
              startYPosition: 9.97,
              speed: 31.82,
              result: 'Blocked',
              shooter: '23',
              blocker: '115',
              saver: '486',
              screeningPlayers: ['115'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 1.28
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 1107,
              startXPosition: 14.44,
              startYPosition: 10.97,
              speed: 29.64,
              result: 'Saved',
              shooter: '1506',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 3.97
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 1185,
              startXPosition: 11.39,
              startYPosition: 7.81,
              speed: 25.07,
              result: 'Saved',
              shooter: '2118',
              blocker: '2112',
              saver: '486',
              screeningPlayers: ['143', '2112'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 1.19
            },
            {
              team: 'Home',
              period: 2,
              secondsFromPeriodStart: 1190,
              startXPosition: 9.17,
              startYPosition: 13.39,
              speed: 25.35,
              result: 'Blocked',
              shooter: '2118',
              blocker: '1449',
              saver: '486',
              screeningPlayers: ['59', '1449'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 2.01
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 54,
              startXPosition: -12,
              startYPosition: 3.31,
              speed: 11.72,
              result: 'Missed',
              shooter: '1542',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 3,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 8.8
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 84,
              startXPosition: -12.4,
              startYPosition: -3.69,
              speed: 32.92,
              result: 'Blocked',
              shooter: '2113',
              blocker: '656',
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 2.4
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 134,
              startXPosition: 10.11,
              startYPosition: -13.06,
              speed: 26.3,
              result: 'Blocked',
              shooter: '25',
              blocker: '648',
              saver: '486',
              screeningPlayers: ['2216'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 0.55
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 259,
              startXPosition: 10.48,
              startYPosition: 6.47,
              speed: 24.41,
              result: 'Saved',
              shooter: '1364',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 7.38
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 307,
              startXPosition: 7.54,
              startYPosition: 4.82,
              speed: 17.09,
              result: 'Saved',
              shooter: '1362',
              blocker: null,
              saver: '486',
              screeningPlayers: ['1677'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 4.84
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 321,
              startXPosition: 8.16,
              startYPosition: 12.66,
              speed: 21.05,
              result: 'Blocked',
              shooter: '1362',
              blocker: '1449',
              saver: '486',
              screeningPlayers: ['1846', '1520'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 2.32
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 357,
              startXPosition: 18.26,
              startYPosition: 5.91,
              speed: 12.88,
              result: 'Saved',
              shooter: '1364',
              blocker: null,
              saver: '486',
              screeningPlayers: ['146'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.03,
              shooterSpeed: 3.79
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 365,
              startXPosition: 14.15,
              startYPosition: 6.03,
              speed: 34.9,
              result: 'Blocked',
              shooter: '1364',
              blocker: '146',
              saver: '486',
              screeningPlayers: ['146'],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: true,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 1.64
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 437,
              startXPosition: 15.17,
              startYPosition: -8.09,
              speed: 37.96,
              result: 'Saved',
              shooter: '487',
              blocker: '1520',
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [0.33, 1],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'HomePowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 0.99
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 482,
              startXPosition: 10.44,
              startYPosition: 14.95,
              speed: 28.42,
              result: 'Saved',
              shooter: '1362',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 1.13
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 486,
              startXPosition: 11.59,
              startYPosition: 13.52,
              speed: 21.79,
              result: 'Missed',
              shooter: '23',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 2.94
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 508,
              startXPosition: 8.18,
              startYPosition: -8.85,
              speed: 28.02,
              result: 'Saved',
              shooter: '1768',
              blocker: null,
              saver: '486',
              screeningPlayers: ['1004'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 2.52
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 517,
              startXPosition: 23.67,
              startYPosition: 3.23,
              speed: 0,
              result: 'Saved',
              shooter: '23',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.06,
              shooterSpeed: 4.37
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 518,
              startXPosition: 24.5,
              startYPosition: 0.96,
              speed: 0,
              result: 'Saved',
              shooter: '23',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [0.33, 1],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.43,
              shooterSpeed: 3.7
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 530,
              startXPosition: 21.08,
              startYPosition: 13.96,
              speed: 33.79,
              result: 'Saved',
              shooter: '1768',
              blocker: null,
              saver: '486',
              screeningPlayers: ['493'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 2.46
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 572,
              startXPosition: 19.29,
              startYPosition: -10.83,
              speed: 24.18,
              result: 'Blocked',
              shooter: '656',
              blocker: '1542',
              saver: '486',
              screeningPlayers: ['555'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 4.23
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 613,
              startXPosition: -7,
              startYPosition: -13.72,
              speed: 21.07,
              result: 'Saved',
              shooter: '1449',
              blocker: '25',
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 4.8
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 745,
              startXPosition: 13.54,
              startYPosition: 9.23,
              speed: 36.26,
              result: 'Goal',
              shooter: '487',
              blocker: null,
              saver: '486',
              screeningPlayers: ['2216'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [0.33, 1],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 5.67
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 772,
              startXPosition: 19.01,
              startYPosition: -7.07,
              speed: 27.16,
              result: 'Saved',
              shooter: '2172',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-0.33, 0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.03,
              shooterSpeed: 4.23
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 799,
              startXPosition: -12.23,
              startYPosition: 2.4,
              speed: 0,
              result: 'Blocked',
              shooter: '1481',
              blocker: '1506',
              saver: '1557',
              screeningPlayers: ['1506'],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 5.99
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 809,
              startXPosition: -8.75,
              startYPosition: 9.53,
              speed: 27.86,
              result: 'Saved',
              shooter: '1694',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0.5, 1],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 3.68
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 825,
              startXPosition: -8.15,
              startYPosition: -6.85,
              speed: 30.5,
              result: 'Blocked',
              shooter: '2112',
              blocker: '25',
              saver: '1557',
              screeningPlayers: ['25'],
              shotAreaId: 4,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 4.31
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 838,
              startXPosition: -16.2,
              startYPosition: 5.63,
              speed: 42.62,
              result: 'Missed',
              shooter: '2112',
              blocker: null,
              saver: '1557',
              screeningPlayers: ['143'],
              shotAreaId: 2,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [1, 2],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.07,
              shooterSpeed: 3.5
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 849,
              startXPosition: -10.98,
              startYPosition: -1.89,
              speed: 29.35,
              result: 'Saved',
              shooter: '1481',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-0.33, 0.33],
                vertical: [0.5, 1],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 1.72
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 883,
              startXPosition: -14.15,
              startYPosition: 1.75,
              speed: 35.78,
              result: 'Missed',
              shooter: '291',
              blocker: null,
              saver: '1557',
              screeningPlayers: ['59', '1362'],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-2, -1],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: true,
              teamStrength: {
                type: 'AwayPowerPlay'
              },
              playerStartPositions: null,
              expectedGoals: 0.03,
              shooterSpeed: 4.53
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 982,
              startXPosition: 14.29,
              startYPosition: 5.23,
              speed: 0,
              result: 'Blocked',
              shooter: '2118',
              blocker: '1004',
              saver: '486',
              screeningPlayers: ['59'],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: true,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 5.7
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 986,
              startXPosition: 20.23,
              startYPosition: 1.27,
              speed: 0,
              result: 'Saved',
              shooter: '1364',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 2,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.14,
              shooterSpeed: 0.2
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 998,
              startXPosition: -23.57,
              startYPosition: -7.52,
              speed: 32.19,
              result: 'Saved',
              shooter: '648',
              blocker: null,
              saver: '1557',
              screeningPlayers: ['2118'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.05,
              shooterSpeed: 5.82
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 1040,
              startXPosition: -19.75,
              startYPosition: -13,
              speed: 27.84,
              result: 'Missed',
              shooter: '291',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [1, 2],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 7.94
            },
            {
              team: 'Away',
              period: 3,
              secondsFromPeriodStart: 1057,
              startXPosition: -15.93,
              startYPosition: -6.55,
              speed: 29.6,
              result: 'Saved',
              shooter: '291',
              blocker: null,
              saver: '1557',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [1, 2],
                vertical: [0, 2],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.05,
              shooterSpeed: 6.66
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 1122,
              startXPosition: 22.99,
              startYPosition: 0.93,
              speed: 0,
              result: 'Saved',
              shooter: '1846',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: true,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.2,
              shooterSpeed: 0.7
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 1132,
              startXPosition: 12.8,
              startYPosition: -5.22,
              speed: 0,
              result: 'Blocked',
              shooter: '487',
              blocker: '1520',
              saver: '486',
              screeningPlayers: ['1846', '1520'],
              shotAreaId: 3,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: true,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 3.27
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 1135,
              startXPosition: 7.37,
              startYPosition: -2.87,
              speed: 0,
              result: 'Blocked',
              shooter: '487',
              blocker: '648',
              saver: '486',
              screeningPlayers: ['1846'],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.01,
              shooterSpeed: 2.23
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 1141,
              startXPosition: 12.67,
              startYPosition: 3.33,
              speed: 27.9,
              result: 'Saved',
              shooter: '2118',
              blocker: null,
              saver: '486',
              screeningPlayers: ['1846', '648'],
              shotAreaId: 3,
              fromLateralPass: true,
              shotDirection: {
                horizontal: [-1, -0.33],
                vertical: [0.5, 1],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.02,
              shooterSpeed: 2.97
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 1143,
              startXPosition: 25.02,
              startYPosition: 0.88,
              speed: 0,
              result: 'Saved',
              shooter: '1506',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.26,
              shooterSpeed: 1.08
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 1146,
              startXPosition: 25.18,
              startYPosition: -1.58,
              speed: 0,
              result: 'Saved',
              shooter: '1846',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: false,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.17,
              shooterSpeed: 0.8
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 1168,
              startXPosition: 24.9,
              startYPosition: 0.36,
              speed: 0,
              result: 'Goal',
              shooter: '493',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 1,
              fromLateralPass: false,
              shotDirection: null,
              royalRoadCrossed: true,
              teamStrength: {
                type: 'EqualStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.59,
              shooterSpeed: 2.98
            },
            {
              team: 'Home',
              period: 3,
              secondsFromPeriodStart: 1179,
              startXPosition: 21.03,
              startYPosition: 9.67,
              speed: 32.11,
              result: 'Goal',
              shooter: '143',
              blocker: null,
              saver: '486',
              screeningPlayers: [],
              shotAreaId: 4,
              fromLateralPass: false,
              shotDirection: {
                horizontal: [-0.33, 0.33],
                vertical: [0, 0.5],
                goalHorizontalLimits: [-1, 1],
                goalVerticalLimits: [0, 1]
              },
              royalRoadCrossed: false,
              teamStrength: {
                type: 'FullStrength'
              },
              playerStartPositions: null,
              expectedGoals: 0.03,
              shooterSpeed: 1.61
            }
          ],
          dataRestrictions: []
        },
        skaterstatistics: {
          skaterStatistics: [
            {
              player: '1306',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.48,
                  timeOnIce: 387.92,
                  distanceTravelled: 1663.16,
                  averageSpeedWithPuck: 5.21,
                  accelerations: 24,
                  decelerations: 24
                },
                shiftStatisticsSummary: {
                  shifts: 11,
                  averageShiftDuration: 35.27
                },
                passStatistics: {
                  successfulPasses: 2,
                  allPasses: 6,
                  receivedPasses: 4,
                  totalPassDistance: 14.43,
                  forwardPassDistance: 5.47
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 2,
                  total: -2
                },
                puckControlStatistics: {
                  puckControlTime: 6.2,
                  puckControlDistance: 32.32,
                  puckControlForwardDistance: 19.18
                },
                puckContestStatistics: {
                  puckContestsWon: 1,
                  puckContestsLost: 0,
                  puckContestParticipations: 1
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 39.92
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 59
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 71.3
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 105.74
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 81.62
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 30.34
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 3,
                  corsiAgainst: 11,
                  corsiForPercentage: 0.21,
                  relativeCorsiForPercentage: -0.46,
                  fenwickForPercentage: 0.17,
                  relativeFenwickForPercentage: -0.47,
                  pdo: 0.75,
                  fullStrengthSavePercentage: 0.75,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.93,
                      timeOnIce: 178.06,
                      distanceTravelled: 785.13,
                      averageSpeedWithPuck: 4.86,
                      accelerations: 9,
                      decelerations: 13
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 25.44
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 3,
                      receivedPasses: 2,
                      totalPassDistance: 14.43,
                      forwardPassDistance: 5.47
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 3.44,
                      puckControlDistance: 16.7,
                      puckControlForwardDistance: 10.74
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 15.24
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 24.98
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 35.2
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 50.1
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 36.46
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 16.08
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 2,
                      corsiAgainst: 8,
                      corsiForPercentage: 0.2,
                      relativeCorsiForPercentage: -0.42,
                      fenwickForPercentage: 0.22,
                      relativeFenwickForPercentage: -0.44,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.48,
                      timeOnIce: 169.56,
                      distanceTravelled: 688.85,
                      averageSpeedWithPuck: 4.7,
                      accelerations: 13,
                      decelerations: 9
                    },
                    shiftStatisticsSummary: {
                      shifts: 3,
                      averageShiftDuration: 56.52
                    },
                    passStatistics: {
                      successfulPasses: 0,
                      allPasses: 2,
                      receivedPasses: 0,
                      totalPassDistance: 0,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 2,
                      total: -2
                    },
                    puckControlStatistics: {
                      puckControlTime: 1.62,
                      puckControlDistance: 7.61,
                      puckControlForwardDistance: 0.5
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 21.9
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 30.28
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 30.74
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 41.42
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 32.78
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 12.44
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 3,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.67,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.56,
                      pdo: 0.33,
                      fullStrengthSavePercentage: 0.33,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.02,
                      timeOnIce: 40.3,
                      distanceTravelled: 189.18,
                      averageSpeedWithPuck: 7.02,
                      accelerations: 2,
                      decelerations: 2
                    },
                    shiftStatisticsSummary: {
                      shifts: 1,
                      averageShiftDuration: 40.3
                    },
                    passStatistics: {
                      successfulPasses: 0,
                      allPasses: 1,
                      receivedPasses: 2,
                      totalPassDistance: 0,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 1.14,
                      puckControlDistance: 8.01,
                      puckControlForwardDistance: 7.94
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 0,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 2.78
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 3.74
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 5.36
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 14.22
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 12.38
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 1.82
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.29,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.71,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1362',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.59,
                  timeOnIce: 1092.82,
                  distanceTravelled: 4015.18,
                  averageSpeedWithPuck: 3.91,
                  accelerations: 69,
                  decelerations: 66
                },
                shiftStatisticsSummary: {
                  shifts: 25,
                  averageShiftDuration: 43.71
                },
                passStatistics: {
                  successfulPasses: 25,
                  allPasses: 30,
                  receivedPasses: 24,
                  totalPassDistance: 281.02,
                  forwardPassDistance: 144.47
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 1,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 99.64,
                  puckControlDistance: 389.62,
                  puckControlForwardDistance: 202.58
                },
                puckContestStatistics: {
                  puckContestsWon: 5,
                  puckContestsLost: 3,
                  puckContestParticipations: 8
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 150.2
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 235.12
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 255
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 259.34
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 140.1
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 53.06
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 11,
                  corsiAgainst: 13,
                  corsiForPercentage: 0.46,
                  relativeCorsiForPercentage: -0.19,
                  fenwickForPercentage: 0.39,
                  relativeFenwickForPercentage: -0.22,
                  pdo: 0.89,
                  fullStrengthSavePercentage: 0.89,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.16,
                      timeOnIce: 362.22,
                      distanceTravelled: 1318.08,
                      averageSpeedWithPuck: 3.81,
                      accelerations: 29,
                      decelerations: 23
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 51.75
                    },
                    passStatistics: {
                      successfulPasses: 12,
                      allPasses: 14,
                      receivedPasses: 9,
                      totalPassDistance: 126.74,
                      forwardPassDistance: 63.31
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 46.72,
                      puckControlDistance: 177.89,
                      puckControlForwardDistance: 110.85
                    },
                    puckContestStatistics: {
                      puckContestsWon: 3,
                      puckContestsLost: 1,
                      puckContestParticipations: 4
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 47.9
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 84.64
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 83.42
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 83
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 49.26
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 14
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.67,
                      relativeCorsiForPercentage: 0.38,
                      fenwickForPercentage: 0.67,
                      relativeFenwickForPercentage: 0.33,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.42,
                      timeOnIce: 327.96,
                      distanceTravelled: 1249.21,
                      averageSpeedWithPuck: 4.73,
                      accelerations: 16,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 46.85
                    },
                    passStatistics: {
                      successfulPasses: 8,
                      allPasses: 9,
                      receivedPasses: 6,
                      totalPassDistance: 108.67,
                      forwardPassDistance: 54.6
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 30.4,
                      puckControlDistance: 143.85,
                      puckControlForwardDistance: 62.28
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 43.2
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 65.96
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 72.1
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 78.52
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 52.08
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 16.1
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 6,
                      corsiForPercentage: 0.14,
                      relativeCorsiForPercentage: -0.6,
                      fenwickForPercentage: 0.14,
                      relativeFenwickForPercentage: -0.5,
                      pdo: 0.75,
                      fullStrengthSavePercentage: 0.75,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.59,
                      timeOnIce: 402.64,
                      distanceTravelled: 1447.89,
                      averageSpeedWithPuck: 3.01,
                      accelerations: 24,
                      decelerations: 23
                    },
                    shiftStatisticsSummary: {
                      shifts: 11,
                      averageShiftDuration: 36.6
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 7,
                      receivedPasses: 9,
                      totalPassDistance: 45.61,
                      forwardPassDistance: 26.56
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 22.52,
                      puckControlDistance: 67.89,
                      puckControlForwardDistance: 29.45
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 1,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 59.1
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 84.52
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 99.48
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 97.82
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 38.76
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 22.96
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: -0.36,
                      fenwickForPercentage: 0.4,
                      relativeFenwickForPercentage: -0.43,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1364',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.32,
                  timeOnIce: 1033.6,
                  distanceTravelled: 3668.08,
                  averageSpeedWithPuck: 3.53,
                  accelerations: 76,
                  decelerations: 68
                },
                shiftStatisticsSummary: {
                  shifts: 22,
                  averageShiftDuration: 46.98
                },
                passStatistics: {
                  successfulPasses: 24,
                  allPasses: 33,
                  receivedPasses: 23,
                  totalPassDistance: 236.01,
                  forwardPassDistance: 42.08
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 0,
                  total: 1
                },
                puckControlStatistics: {
                  puckControlTime: 42.72,
                  puckControlDistance: 150.69,
                  puckControlForwardDistance: 68.95
                },
                puckContestStatistics: {
                  puckContestsWon: 8,
                  puckContestsLost: 3,
                  puckContestParticipations: 11
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 171.1
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 238.86
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 218.26
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 224.2
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 129.14
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 52.04
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 9,
                  corsiAgainst: 7,
                  corsiForPercentage: 0.56,
                  relativeCorsiForPercentage: -0.03,
                  fenwickForPercentage: 0.5,
                  relativeFenwickForPercentage: -0.04,
                  pdo: 1,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.94,
                      timeOnIce: 289.34,
                      distanceTravelled: 1110.53,
                      averageSpeedWithPuck: 3.17,
                      accelerations: 21,
                      decelerations: 15
                    },
                    shiftStatisticsSummary: {
                      shifts: 6,
                      averageShiftDuration: 48.22
                    },
                    passStatistics: {
                      successfulPasses: 9,
                      allPasses: 13,
                      receivedPasses: 8,
                      totalPassDistance: 68.61,
                      forwardPassDistance: 16.36
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 11.24,
                      puckControlDistance: 35.64,
                      puckControlForwardDistance: 17.4
                    },
                    puckContestStatistics: {
                      puckContestsWon: 3,
                      puckContestsLost: 0,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 38.46
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 55.1
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 67.98
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 67.58
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 42
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 18.22
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.25,
                      relativeCorsiForPercentage: -0.22,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.47,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.32,
                      timeOnIce: 329.86,
                      distanceTravelled: 1186.16,
                      averageSpeedWithPuck: 3.01,
                      accelerations: 24,
                      decelerations: 25
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 47.12
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 10,
                      receivedPasses: 7,
                      totalPassDistance: 76.12,
                      forwardPassDistance: 16.16
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 14.66,
                      puckControlDistance: 44.08,
                      puckControlForwardDistance: 10.68
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 2,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 51.16
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 75.26
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 70.12
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 77.28
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 39.58
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 16.46
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.67,
                      relativeCorsiForPercentage: 0.08,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: 0.03,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.81,
                      timeOnIce: 414.4,
                      distanceTravelled: 1371.39,
                      averageSpeedWithPuck: 4.22,
                      accelerations: 31,
                      decelerations: 28
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 46.04
                    },
                    passStatistics: {
                      successfulPasses: 8,
                      allPasses: 10,
                      receivedPasses: 8,
                      totalPassDistance: 91.29,
                      forwardPassDistance: 9.56
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 16.82,
                      puckControlDistance: 70.97,
                      puckControlForwardDistance: 40.87
                    },
                    puckContestStatistics: {
                      puckContestsWon: 4,
                      puckContestsLost: 1,
                      puckContestParticipations: 5
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 81.48
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 108.5
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 80.16
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 79.34
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 47.56
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 17.36
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.67,
                      relativeCorsiForPercentage: -0.08,
                      fenwickForPercentage: 0.67,
                      relativeFenwickForPercentage: -0.05,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1377',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 10,
                  timeOnIce: 650.34,
                  distanceTravelled: 3078.2,
                  averageSpeedWithPuck: 4.62,
                  accelerations: 36,
                  decelerations: 27
                },
                shiftStatisticsSummary: {
                  shifts: 19,
                  averageShiftDuration: 34.23
                },
                passStatistics: {
                  successfulPasses: 6,
                  allPasses: 10,
                  receivedPasses: 8,
                  totalPassDistance: 77.73,
                  forwardPassDistance: 20.44
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 2,
                  total: -2
                },
                puckControlStatistics: {
                  puckControlTime: 19.16,
                  puckControlDistance: 88.52,
                  puckControlForwardDistance: 45.22
                },
                puckContestStatistics: {
                  puckContestsWon: 8,
                  puckContestsLost: 0,
                  puckContestParticipations: 8
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 41.26
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 73.86
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 121.9
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 182.84
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 148.32
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 82.16
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 10,
                  corsiAgainst: 13,
                  corsiForPercentage: 0.43,
                  relativeCorsiForPercentage: -0.22,
                  fenwickForPercentage: 0.29,
                  relativeFenwickForPercentage: -0.35,
                  pdo: 0.78,
                  fullStrengthSavePercentage: 0.78,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.91,
                      timeOnIce: 195.56,
                      distanceTravelled: 921.45,
                      averageSpeedWithPuck: 4.22,
                      accelerations: 16,
                      decelerations: 10
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 24.44
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 3,
                      receivedPasses: 2,
                      totalPassDistance: 7.1,
                      forwardPassDistance: 6.44
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 5.24,
                      puckControlDistance: 22.13,
                      puckControlForwardDistance: 6.18
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 0,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 11.12
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 23.74
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 40.92
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 54.2
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 38.92
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 26.66
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 8,
                      corsiForPercentage: 0.33,
                      relativeCorsiForPercentage: -0.21,
                      fenwickForPercentage: 0.36,
                      relativeFenwickForPercentage: -0.21,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 10,
                      timeOnIce: 259.46,
                      distanceTravelled: 1214.31,
                      averageSpeedWithPuck: 5.53,
                      accelerations: 11,
                      decelerations: 11
                    },
                    shiftStatisticsSummary: {
                      shifts: 6,
                      averageShiftDuration: 43.24
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 2,
                      receivedPasses: 3,
                      totalPassDistance: 14,
                      forwardPassDistance: 14
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 2,
                      total: -2
                    },
                    puckControlStatistics: {
                      puckControlTime: 4.34,
                      puckControlDistance: 24,
                      puckControlForwardDistance: 19.62
                    },
                    puckContestStatistics: {
                      puckContestsWon: 4,
                      puckContestsLost: 0,
                      puckContestParticipations: 4
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 21.52
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 32.7
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 43.6
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 65.18
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 63.18
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 33.28
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: -0.12,
                      fenwickForPercentage: 0.25,
                      relativeFenwickForPercentage: -0.28,
                      pdo: 0.33,
                      fullStrengthSavePercentage: 0.33,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.69,
                      timeOnIce: 195.32,
                      distanceTravelled: 942.45,
                      averageSpeedWithPuck: 4.42,
                      accelerations: 9,
                      decelerations: 6
                    },
                    shiftStatisticsSummary: {
                      shifts: 5,
                      averageShiftDuration: 39.06
                    },
                    passStatistics: {
                      successfulPasses: 4,
                      allPasses: 5,
                      receivedPasses: 3,
                      totalPassDistance: 56.64,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.58,
                      puckControlDistance: 42.39,
                      puckControlForwardDistance: 19.41
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 0,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 8.62
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 17.42
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 37.38
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 63.46
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 46.22
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 22.22
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.6,
                      relativeCorsiForPercentage: -0.16,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.8,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '143',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.97,
                  timeOnIce: 667.2,
                  distanceTravelled: 2942.18,
                  averageSpeedWithPuck: 3.96,
                  accelerations: 41,
                  decelerations: 38
                },
                shiftStatisticsSummary: {
                  shifts: 21,
                  averageShiftDuration: 31.77
                },
                passStatistics: {
                  successfulPasses: 5,
                  allPasses: 10,
                  receivedPasses: 5,
                  totalPassDistance: 53.11,
                  forwardPassDistance: 7.39
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 2,
                  total: -1
                },
                puckControlStatistics: {
                  puckControlTime: 14.86,
                  puckControlDistance: 58.87,
                  puckControlForwardDistance: 38.08
                },
                puckContestStatistics: {
                  puckContestsWon: 1,
                  puckContestsLost: 1,
                  puckContestParticipations: 2
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 72.78
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 101.16
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 114.02
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 151.62
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 151.3
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 76.32
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 1,
                  blockedShots: 1
                },
                traditionalStatistics: {
                  corsiFor: 10,
                  corsiAgainst: 11,
                  corsiForPercentage: 0.48,
                  relativeCorsiForPercentage: -0.15,
                  fenwickForPercentage: 0.44,
                  relativeFenwickForPercentage: -0.13,
                  pdo: 0.88,
                  fullStrengthSavePercentage: 0.71,
                  fullStrengthShootingPercentage: 0.17
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.97,
                      timeOnIce: 211.98,
                      distanceTravelled: 1019.45,
                      averageSpeedWithPuck: 4.83,
                      accelerations: 17,
                      decelerations: 10
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 26.5
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 3,
                      receivedPasses: 2,
                      totalPassDistance: 15.36,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 7.14,
                      puckControlDistance: 34.48,
                      puckControlForwardDistance: 25.18
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 14.94
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 25.2
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 34.8
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 46.24
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 62.66
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 28.14
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 5,
                      corsiForPercentage: 0.44,
                      relativeCorsiForPercentage: 0.02,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: 0.1,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.38,
                      timeOnIce: 258.54,
                      distanceTravelled: 1063.28,
                      averageSpeedWithPuck: 3.25,
                      accelerations: 11,
                      decelerations: 18
                    },
                    shiftStatisticsSummary: {
                      shifts: 6,
                      averageShiftDuration: 43.09
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 6,
                      receivedPasses: 3,
                      totalPassDistance: 37.75,
                      forwardPassDistance: 7.39
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 2,
                      total: -2
                    },
                    puckControlStatistics: {
                      puckControlTime: 6.06,
                      puckControlDistance: 19.67,
                      puckControlForwardDistance: 10.12
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 35.14
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 46.58
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 45.04
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 60.66
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 44.74
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 26.38
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: -0.12,
                      fenwickForPercentage: 0.4,
                      relativeFenwickForPercentage: -0.1,
                      pdo: 0.33,
                      fullStrengthSavePercentage: 0.33,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.58,
                      timeOnIce: 196.68,
                      distanceTravelled: 859.45,
                      averageSpeedWithPuck: 2.85,
                      accelerations: 13,
                      decelerations: 10
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 28.1
                    },
                    passStatistics: {
                      successfulPasses: 0,
                      allPasses: 1,
                      receivedPasses: 0,
                      totalPassDistance: 0,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 1.66,
                      puckControlDistance: 4.73,
                      puckControlForwardDistance: 2.78
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 22.7
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 29.38
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 34.18
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 44.72
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 43.9
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 21.8
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: -0.31,
                      fenwickForPercentage: 0.4,
                      relativeFenwickForPercentage: -0.43,
                      pdo: 1.5,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.5
                    }
                  }
                }
              ]
            },
            {
              player: '1506',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 10.23,
                  timeOnIce: 1238.52,
                  distanceTravelled: 5300.66,
                  averageSpeedWithPuck: 4.91,
                  accelerations: 83,
                  decelerations: 66
                },
                shiftStatisticsSummary: {
                  shifts: 23,
                  averageShiftDuration: 53.85
                },
                passStatistics: {
                  successfulPasses: 24,
                  allPasses: 34,
                  receivedPasses: 22,
                  totalPassDistance: 266.81,
                  forwardPassDistance: 58.12
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 0,
                  total: 1
                },
                puckControlStatistics: {
                  puckControlTime: 82.12,
                  puckControlDistance: 403.14,
                  puckControlForwardDistance: 261.31
                },
                puckContestStatistics: {
                  puckContestsWon: 5,
                  puckContestsLost: 3,
                  puckContestParticipations: 8
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 147.38
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 194.36
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 222.56
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 276.64
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 279.8
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 117.78
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 1,
                  blockedShots: 1
                },
                traditionalStatistics: {
                  corsiFor: 9,
                  corsiAgainst: 8,
                  corsiForPercentage: 0.53,
                  relativeCorsiForPercentage: -0.07,
                  fenwickForPercentage: 0.5,
                  relativeFenwickForPercentage: -0.05,
                  pdo: 1,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.5,
                      timeOnIce: 402.48,
                      distanceTravelled: 1733.56,
                      averageSpeedWithPuck: 4.52,
                      accelerations: 32,
                      decelerations: 22
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 57.5
                    },
                    passStatistics: {
                      successfulPasses: 8,
                      allPasses: 11,
                      receivedPasses: 7,
                      totalPassDistance: 75.37,
                      forwardPassDistance: 38.05
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 28.44,
                      puckControlDistance: 128.42,
                      puckControlForwardDistance: 77.9
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 2,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 48.38
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 60.78
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 66.9
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 88.82
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 105.54
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 32.06
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.33,
                      relativeCorsiForPercentage: -0.12,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.5,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 10.23,
                      timeOnIce: 372.96,
                      distanceTravelled: 1701.09,
                      averageSpeedWithPuck: 6.22,
                      accelerations: 25,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 53.28
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 11,
                      receivedPasses: 6,
                      totalPassDistance: 82.93,
                      forwardPassDistance: 6.41
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 30.04,
                      puckControlDistance: 186.99,
                      puckControlForwardDistance: 132.48
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 31.18
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 49.56
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 77.92
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 85.92
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 82.88
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 45.5
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 5,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.62,
                      relativeCorsiForPercentage: 0.03,
                      fenwickForPercentage: 0.6,
                      relativeFenwickForPercentage: 0.16,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.78,
                      timeOnIce: 463.08,
                      distanceTravelled: 1866.01,
                      averageSpeedWithPuck: 3.71,
                      accelerations: 26,
                      decelerations: 24
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 51.45
                    },
                    passStatistics: {
                      successfulPasses: 9,
                      allPasses: 12,
                      receivedPasses: 9,
                      totalPassDistance: 108.52,
                      forwardPassDistance: 13.66
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 23.64,
                      puckControlDistance: 87.73,
                      puckControlForwardDistance: 50.93
                    },
                    puckContestStatistics: {
                      puckContestsWon: 4,
                      puckContestsLost: 1,
                      puckContestParticipations: 5
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 67.82
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 84.02
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 77.74
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 101.9
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 91.38
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 40.22
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: -0.31,
                      fenwickForPercentage: 0.6,
                      relativeFenwickForPercentage: -0.15,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1655',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.69,
                  timeOnIce: 1115.04,
                  distanceTravelled: 4465.18,
                  averageSpeedWithPuck: 4.06,
                  accelerations: 63,
                  decelerations: 57
                },
                shiftStatisticsSummary: {
                  shifts: 24,
                  averageShiftDuration: 46.46
                },
                passStatistics: {
                  successfulPasses: 13,
                  allPasses: 20,
                  receivedPasses: 18,
                  totalPassDistance: 145.26,
                  forwardPassDistance: 37.22
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 0,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 29.66,
                  puckControlDistance: 120.47,
                  puckControlForwardDistance: 82.63
                },
                puckContestStatistics: {
                  puckContestsWon: 5,
                  puckContestsLost: 3,
                  puckContestParticipations: 8
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 159.7
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 176.14
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 216.86
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 281.96
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 203.26
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 77.12
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 1,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 12,
                  corsiAgainst: 7,
                  corsiForPercentage: 0.63,
                  relativeCorsiForPercentage: 0.06,
                  fenwickForPercentage: 0.57,
                  relativeFenwickForPercentage: 0.05,
                  pdo: 1,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.69,
                      timeOnIce: 353.14,
                      distanceTravelled: 1546.43,
                      averageSpeedWithPuck: 5.58,
                      accelerations: 20,
                      decelerations: 22
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 44.14
                    },
                    passStatistics: {
                      successfulPasses: 6,
                      allPasses: 8,
                      receivedPasses: 6,
                      totalPassDistance: 80.21,
                      forwardPassDistance: 29.11
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 12.16,
                      puckControlDistance: 67.91,
                      puckControlForwardDistance: 50.48
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 43.9
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 40.76
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 58.3
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 93.32
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 87.3
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 29.56
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.6,
                      relativeCorsiForPercentage: 0.21,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: 0.07,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.68,
                      timeOnIce: 385.2,
                      distanceTravelled: 1547.32,
                      averageSpeedWithPuck: 3.3,
                      accelerations: 26,
                      decelerations: 15
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 48.15
                    },
                    passStatistics: {
                      successfulPasses: 4,
                      allPasses: 7,
                      receivedPasses: 7,
                      totalPassDistance: 47.83,
                      forwardPassDistance: 0.76
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 11.34,
                      puckControlDistance: 37.46,
                      puckControlForwardDistance: 20.67
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 1,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 51.46
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 58.9
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 83
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 102.36
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 59.68
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 29.8
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.67,
                      relativeCorsiForPercentage: 0.1,
                      fenwickForPercentage: 0.6,
                      relativeFenwickForPercentage: 0.16,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.23,
                      timeOnIce: 376.7,
                      distanceTravelled: 1371.44,
                      averageSpeedWithPuck: 2.45,
                      accelerations: 17,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 47.09
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 5,
                      receivedPasses: 5,
                      totalPassDistance: 17.21,
                      forwardPassDistance: 7.35
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 6.16,
                      puckControlDistance: 15.1,
                      puckControlForwardDistance: 11.49
                    },
                    puckContestStatistics: {
                      puckContestsWon: 3,
                      puckContestsLost: 1,
                      puckContestParticipations: 4
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 64.34
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 76.48
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 75.56
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 86.28
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 56.28
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 17.76
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.6,
                      relativeCorsiForPercentage: -0.16,
                      fenwickForPercentage: 0.6,
                      relativeFenwickForPercentage: -0.15,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1670',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.8,
                  timeOnIce: 165.56,
                  distanceTravelled: 767.32,
                  averageSpeedWithPuck: 0,
                  accelerations: 11,
                  decelerations: 13
                },
                shiftStatisticsSummary: {
                  shifts: 4,
                  averageShiftDuration: 41.39
                },
                passStatistics: {
                  successfulPasses: 1,
                  allPasses: 1,
                  receivedPasses: 0,
                  totalPassDistance: 6.7,
                  forwardPassDistance: 0
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 0,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 0,
                  puckControlDistance: 0,
                  puckControlForwardDistance: 0
                },
                puckContestStatistics: {
                  puckContestsWon: 0,
                  puckContestsLost: 0,
                  puckContestParticipations: 0
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 8.88
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 16.62
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 34.56
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 55.78
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 34.3
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 15.42
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 0,
                  corsiAgainst: 4,
                  corsiForPercentage: 0,
                  relativeCorsiForPercentage: -0.57,
                  fenwickForPercentage: 0,
                  relativeFenwickForPercentage: -0.49,
                  pdo: 1,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.8,
                      timeOnIce: 129.46,
                      distanceTravelled: 578.32,
                      averageSpeedWithPuck: 0,
                      accelerations: 8,
                      decelerations: 11
                    },
                    shiftStatisticsSummary: {
                      shifts: 3,
                      averageShiftDuration: 43.15
                    },
                    passStatistics: {
                      successfulPasses: 0,
                      allPasses: 0,
                      receivedPasses: 0,
                      totalPassDistance: 0,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 0,
                      puckControlDistance: 0,
                      puckControlForwardDistance: 0
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 8.14
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 13.98
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 26.58
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 49.12
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 22.14
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 9.5
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 3,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.5,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.47,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.85,
                      timeOnIce: 36.1,
                      distanceTravelled: 189,
                      averageSpeedWithPuck: 0,
                      accelerations: 3,
                      decelerations: 2
                    },
                    shiftStatisticsSummary: {
                      shifts: 1,
                      averageShiftDuration: 36.1
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 1,
                      receivedPasses: 0,
                      totalPassDistance: 6.7,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 0,
                      puckControlDistance: 0,
                      puckControlForwardDistance: 0
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 0.74
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 2.64
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 7.98
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 6.66
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 12.16
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 5.92
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 1,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.62,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.5,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 0,
                      timeOnIce: 0,
                      distanceTravelled: 0,
                      averageSpeedWithPuck: 0,
                      accelerations: 0,
                      decelerations: 0
                    },
                    shiftStatisticsSummary: {
                      shifts: 0,
                      averageShiftDuration: 0
                    },
                    passStatistics: {
                      successfulPasses: 0,
                      allPasses: 0,
                      receivedPasses: 0,
                      totalPassDistance: 0,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 0,
                      puckControlDistance: 0,
                      puckControlForwardDistance: 0
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 0
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 0
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 0
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 0
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 0
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 0
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 0,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: 0,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: 0,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1764',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.47,
                  timeOnIce: 224.98,
                  distanceTravelled: 777.58,
                  averageSpeedWithPuck: 3.56,
                  accelerations: 10,
                  decelerations: 9
                },
                shiftStatisticsSummary: {
                  shifts: 6,
                  averageShiftDuration: 37.5
                },
                passStatistics: {
                  successfulPasses: 6,
                  allPasses: 9,
                  receivedPasses: 5,
                  totalPassDistance: 49.98,
                  forwardPassDistance: 33.71
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 0,
                  total: 1
                },
                puckControlStatistics: {
                  puckControlTime: 33.76,
                  puckControlDistance: 120.23,
                  puckControlForwardDistance: 40.8
                },
                puckContestStatistics: {
                  puckContestsWon: 1,
                  puckContestsLost: 2,
                  puckContestParticipations: 3
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 32.38
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 53.2
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 57.9
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 54.5
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 21.28
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 5.72
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 5,
                  corsiAgainst: 2,
                  corsiForPercentage: 0.71,
                  relativeCorsiForPercentage: 0.14,
                  fenwickForPercentage: 0.8,
                  relativeFenwickForPercentage: 0.29,
                  pdo: 1.25,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0.25
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.47,
                      timeOnIce: 93.08,
                      distanceTravelled: 361.96,
                      averageSpeedWithPuck: 3.36,
                      accelerations: 3,
                      decelerations: 4
                    },
                    shiftStatisticsSummary: {
                      shifts: 2,
                      averageShiftDuration: 46.54
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 5,
                      receivedPasses: 3,
                      totalPassDistance: 6.92,
                      forwardPassDistance: 3.42
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 12.94,
                      puckControlDistance: 43.43,
                      puckControlForwardDistance: 10.3
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 2,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 10.98
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 15.38
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 22.92
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 28.38
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 11.06
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 4.36
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 2,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.48,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.47,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 6.07,
                      timeOnIce: 78.88,
                      distanceTravelled: 229.66,
                      averageSpeedWithPuck: 3.98,
                      accelerations: 5,
                      decelerations: 4
                    },
                    shiftStatisticsSummary: {
                      shifts: 3,
                      averageShiftDuration: 26.29
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 1,
                      receivedPasses: 0,
                      totalPassDistance: 5.62,
                      forwardPassDistance: 4.86
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 4.04,
                      puckControlDistance: 16.06,
                      puckControlForwardDistance: 7.67
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 14.22
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 25.7
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 20.98
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 13.98
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 3.18
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 0.82
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.46,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.61,
                      pdo: 1.33,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.33
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 6.01,
                      timeOnIce: 53.02,
                      distanceTravelled: 185.96,
                      averageSpeedWithPuck: 3.62,
                      accelerations: 2,
                      decelerations: 1
                    },
                    shiftStatisticsSummary: {
                      shifts: 1,
                      averageShiftDuration: 53.02
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 3,
                      receivedPasses: 2,
                      totalPassDistance: 37.43,
                      forwardPassDistance: 25.42
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 16.78,
                      puckControlDistance: 60.75,
                      puckControlForwardDistance: 22.82
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 0,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 7.18
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 12.12
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 14
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 12.14
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 7.04
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 0.54
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.29,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.31,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1768',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 7.73,
                  timeOnIce: 918.8,
                  distanceTravelled: 3596.01,
                  averageSpeedWithPuck: 3.32,
                  accelerations: 67,
                  decelerations: 49
                },
                shiftStatisticsSummary: {
                  shifts: 23,
                  averageShiftDuration: 39.95
                },
                passStatistics: {
                  successfulPasses: 15,
                  allPasses: 17,
                  receivedPasses: 15,
                  totalPassDistance: 185.38,
                  forwardPassDistance: 102.72
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 1,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 40.92,
                  puckControlDistance: 136.03,
                  puckControlForwardDistance: 61.91
                },
                puckContestStatistics: {
                  puckContestsWon: 0,
                  puckContestsLost: 3,
                  puckContestParticipations: 3
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 99.6
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 143.44
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 231.24
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 275.8
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 138.94
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 29.78
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 17,
                  corsiAgainst: 6,
                  corsiForPercentage: 0.74,
                  relativeCorsiForPercentage: 0.22,
                  fenwickForPercentage: 0.76,
                  relativeFenwickForPercentage: 0.33,
                  pdo: 0.84,
                  fullStrengthSavePercentage: 0.75,
                  fullStrengthShootingPercentage: 0.09
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.26,
                      timeOnIce: 329.48,
                      distanceTravelled: 1256.77,
                      averageSpeedWithPuck: 2.81,
                      accelerations: 31,
                      decelerations: 17
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 36.61
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 1,
                      receivedPasses: 2,
                      totalPassDistance: 10.07,
                      forwardPassDistance: 3.68
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.2,
                      puckControlDistance: 25.85,
                      puckControlForwardDistance: 14.42
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 39.24
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 53.84
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 83.7
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 97.88
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 42.46
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 12.36
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: 0.09,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: 0.08,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.73,
                      timeOnIce: 256.1,
                      distanceTravelled: 990.61,
                      averageSpeedWithPuck: 3.24,
                      accelerations: 15,
                      decelerations: 10
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 36.59
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 7,
                      receivedPasses: 5,
                      totalPassDistance: 67.24,
                      forwardPassDistance: 49.47
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 18.1,
                      puckControlDistance: 58.58,
                      puckControlForwardDistance: 21.84
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 28.5
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 41.76
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 68.78
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 70.22
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 42.22
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 4.62
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 5,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.71,
                      relativeCorsiForPercentage: 0.15,
                      fenwickForPercentage: 0.67,
                      relativeFenwickForPercentage: 0.22,
                      pdo: 0,
                      fullStrengthSavePercentage: 0,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.71,
                      timeOnIce: 333.22,
                      distanceTravelled: 1348.63,
                      averageSpeedWithPuck: 3.79,
                      accelerations: 21,
                      decelerations: 22
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 47.6
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 9,
                      receivedPasses: 8,
                      totalPassDistance: 108.07,
                      forwardPassDistance: 49.57
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 13.62,
                      puckControlDistance: 51.61,
                      puckControlForwardDistance: 25.65
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 31.86
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 47.84
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 78.76
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 107.7
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 54.26
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 12.8
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 9,
                      corsiAgainst: 1,
                      corsiForPercentage: 0.9,
                      relativeCorsiForPercentage: 0.32,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.56,
                      pdo: 1.14,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.14
                    }
                  }
                }
              ]
            },
            {
              player: '1846',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.7,
                  timeOnIce: 1250.02,
                  distanceTravelled: 5308.26,
                  averageSpeedWithPuck: 4.92,
                  accelerations: 64,
                  decelerations: 54
                },
                shiftStatisticsSummary: {
                  shifts: 28,
                  averageShiftDuration: 44.64
                },
                passStatistics: {
                  successfulPasses: 29,
                  allPasses: 35,
                  receivedPasses: 28,
                  totalPassDistance: 332.2,
                  forwardPassDistance: 57.37
                },
                plusMinusStatistics: {
                  plus: 3,
                  minus: 1,
                  total: 2
                },
                puckControlStatistics: {
                  puckControlTime: 87.24,
                  puckControlDistance: 429.16,
                  puckControlForwardDistance: 232.42
                },
                puckContestStatistics: {
                  puckContestsWon: 8,
                  puckContestsLost: 7,
                  puckContestParticipations: 15
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 153.88
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 176.24
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 239.44
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 317.1
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 241.6
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 121.76
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 6,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 21,
                  corsiAgainst: 5,
                  corsiForPercentage: 0.81,
                  relativeCorsiForPercentage: 0.34,
                  fenwickForPercentage: 0.76,
                  relativeFenwickForPercentage: 0.36,
                  pdo: 0.83,
                  fullStrengthSavePercentage: 0.67,
                  fullStrengthShootingPercentage: 0.17
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.54,
                      timeOnIce: 375.36,
                      distanceTravelled: 1632.58,
                      averageSpeedWithPuck: 4.45,
                      accelerations: 25,
                      decelerations: 16
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 46.92
                    },
                    passStatistics: {
                      successfulPasses: 8,
                      allPasses: 9,
                      receivedPasses: 7,
                      totalPassDistance: 109.52,
                      forwardPassDistance: 29.7
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 24.26,
                      puckControlDistance: 107.94,
                      puckControlForwardDistance: 67.01
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 2,
                      puckContestParticipations: 4
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 37.02
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 58.54
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 68.2
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 93.86
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 79
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 38.74
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 5,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.72,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.71,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.04,
                      timeOnIce: 390.3,
                      distanceTravelled: 1650.98,
                      averageSpeedWithPuck: 5.11,
                      accelerations: 17,
                      decelerations: 19
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 43.37
                    },
                    passStatistics: {
                      successfulPasses: 9,
                      allPasses: 12,
                      receivedPasses: 10,
                      totalPassDistance: 96.09,
                      forwardPassDistance: 9.88
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 1,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 25.16,
                      puckControlDistance: 128.67,
                      puckControlForwardDistance: 72.4
                    },
                    puckContestStatistics: {
                      puckContestsWon: 4,
                      puckContestsLost: 4,
                      puckContestParticipations: 8
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 47.34
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 51.32
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 74.52
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 108.88
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 77.66
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 30.58
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 8,
                      corsiAgainst: 5,
                      corsiForPercentage: 0.62,
                      relativeCorsiForPercentage: 0.03,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: 0.05,
                      pdo: 0.92,
                      fullStrengthSavePercentage: 0.67,
                      fullStrengthShootingPercentage: 0.25
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.7,
                      timeOnIce: 484.36,
                      distanceTravelled: 2024.7,
                      averageSpeedWithPuck: 5.09,
                      accelerations: 22,
                      decelerations: 19
                    },
                    shiftStatisticsSummary: {
                      shifts: 11,
                      averageShiftDuration: 44.03
                    },
                    passStatistics: {
                      successfulPasses: 12,
                      allPasses: 14,
                      receivedPasses: 11,
                      totalPassDistance: 126.59,
                      forwardPassDistance: 17.79
                    },
                    plusMinusStatistics: {
                      plus: 2,
                      minus: 0,
                      total: 2
                    },
                    puckControlStatistics: {
                      puckControlTime: 37.82,
                      puckControlDistance: 192.56,
                      puckControlForwardDistance: 93.01
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 1,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 69.52
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 66.38
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 96.72
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 114.36
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 84.94
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 52.44
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 4,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 8,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.43,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.5,
                      pdo: 1.17,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.17
                    }
                  }
                }
              ]
            },
            {
              player: '2118',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.96,
                  timeOnIce: 1156.84,
                  distanceTravelled: 4250.63,
                  averageSpeedWithPuck: 3.83,
                  accelerations: 68,
                  decelerations: 53
                },
                shiftStatisticsSummary: {
                  shifts: 27,
                  averageShiftDuration: 42.85
                },
                passStatistics: {
                  successfulPasses: 26,
                  allPasses: 31,
                  receivedPasses: 24,
                  totalPassDistance: 353.54,
                  forwardPassDistance: 204.24
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 1,
                  total: -1
                },
                puckControlStatistics: {
                  puckControlTime: 104.28,
                  puckControlDistance: 399.23,
                  puckControlForwardDistance: 144.05
                },
                puckContestStatistics: {
                  puckContestsWon: 2,
                  puckContestsLost: 1,
                  puckContestParticipations: 3
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 149.22
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 235.22
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 295.46
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 280.22
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 166.94
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 29.78
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 9,
                  corsiAgainst: 9,
                  corsiForPercentage: 0.5,
                  relativeCorsiForPercentage: -0.11,
                  fenwickForPercentage: 0.33,
                  relativeFenwickForPercentage: -0.26,
                  pdo: 0.83,
                  fullStrengthSavePercentage: 0.83,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.96,
                      timeOnIce: 357.78,
                      distanceTravelled: 1193.83,
                      averageSpeedWithPuck: 3.08,
                      accelerations: 22,
                      decelerations: 22
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 39.75
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 7,
                      receivedPasses: 5,
                      totalPassDistance: 54.92,
                      forwardPassDistance: 24.92
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 26.12,
                      puckControlDistance: 80.58,
                      puckControlForwardDistance: 29.92
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 53.12
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 87.74
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 103.52
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 75.24
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 28.42
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 9.74
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 4,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.53,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.53,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.41,
                      timeOnIce: 451.1,
                      distanceTravelled: 1746.44,
                      averageSpeedWithPuck: 3.79,
                      accelerations: 25,
                      decelerations: 11
                    },
                    shiftStatisticsSummary: {
                      shifts: 10,
                      averageShiftDuration: 45.11
                    },
                    passStatistics: {
                      successfulPasses: 9,
                      allPasses: 11,
                      receivedPasses: 7,
                      totalPassDistance: 133.59,
                      forwardPassDistance: 103.77
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 36.78,
                      puckControlDistance: 139.49,
                      puckControlForwardDistance: 62.22
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 52.36
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 92.76
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 93.54
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 114.66
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 84.4
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 13.38
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.6,
                      relativeCorsiForPercentage: 0,
                      fenwickForPercentage: 0.43,
                      relativeFenwickForPercentage: -0.07,
                      pdo: 0.75,
                      fullStrengthSavePercentage: 0.75,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.78,
                      timeOnIce: 347.96,
                      distanceTravelled: 1310.36,
                      averageSpeedWithPuck: 4.33,
                      accelerations: 21,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 43.49
                    },
                    passStatistics: {
                      successfulPasses: 12,
                      allPasses: 13,
                      receivedPasses: 12,
                      totalPassDistance: 165.03,
                      forwardPassDistance: 75.56
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 41.38,
                      puckControlDistance: 179.16,
                      puckControlForwardDistance: 51.92
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 0,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 43.74
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 54.72
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 98.4
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 90.32
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 54.12
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 6.66
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 1,
                      corsiForPercentage: 0.75,
                      relativeCorsiForPercentage: 0.03,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: -0.23,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '2172',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.17,
                  timeOnIce: 1237.36,
                  distanceTravelled: 4946.77,
                  averageSpeedWithPuck: 4.69,
                  accelerations: 83,
                  decelerations: 72
                },
                shiftStatisticsSummary: {
                  shifts: 25,
                  averageShiftDuration: 49.49
                },
                passStatistics: {
                  successfulPasses: 20,
                  allPasses: 21,
                  receivedPasses: 19,
                  totalPassDistance: 224.04,
                  forwardPassDistance: 21.17
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 0,
                  total: 1
                },
                puckControlStatistics: {
                  puckControlTime: 47.68,
                  puckControlDistance: 223.47,
                  puckControlForwardDistance: 150.18
                },
                puckContestStatistics: {
                  puckContestsWon: 4,
                  puckContestsLost: 3,
                  puckContestParticipations: 7
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 168.18
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 186.06
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 254.72
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 330.74
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 233.6
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 64.06
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 1
                },
                traditionalStatistics: {
                  corsiFor: 11,
                  corsiAgainst: 10,
                  corsiForPercentage: 0.52,
                  relativeCorsiForPercentage: -0.09,
                  fenwickForPercentage: 0.44,
                  relativeFenwickForPercentage: -0.14,
                  pdo: 1.14,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0.14
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.67,
                      timeOnIce: 424.74,
                      distanceTravelled: 1754.89,
                      averageSpeedWithPuck: 4.93,
                      accelerations: 29,
                      decelerations: 25
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 47.19
                    },
                    passStatistics: {
                      successfulPasses: 8,
                      allPasses: 8,
                      receivedPasses: 11,
                      totalPassDistance: 104.06,
                      forwardPassDistance: 12.6
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 20,
                      puckControlDistance: 98.51,
                      puckControlForwardDistance: 61.82
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 50.64
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 57.6
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 90.36
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 115.7
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 84.76
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 25.68
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 5,
                      corsiForPercentage: 0.17,
                      relativeCorsiForPercentage: -0.36,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.62,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.98,
                      timeOnIce: 387.06,
                      distanceTravelled: 1608.48,
                      averageSpeedWithPuck: 4.47,
                      accelerations: 28,
                      decelerations: 21
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 55.29
                    },
                    passStatistics: {
                      successfulPasses: 6,
                      allPasses: 6,
                      receivedPasses: 4,
                      totalPassDistance: 48.27,
                      forwardPassDistance: 4.75
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 12.88,
                      puckControlDistance: 57.61,
                      puckControlForwardDistance: 47.06
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 1,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 39.22
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 57.32
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 81.54
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 112.86
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 73.98
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 22.14
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.67,
                      relativeCorsiForPercentage: 0.1,
                      fenwickForPercentage: 0.6,
                      relativeFenwickForPercentage: 0.16,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.17,
                      timeOnIce: 425.56,
                      distanceTravelled: 1583.41,
                      averageSpeedWithPuck: 4.55,
                      accelerations: 26,
                      decelerations: 26
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 47.28
                    },
                    passStatistics: {
                      successfulPasses: 6,
                      allPasses: 7,
                      receivedPasses: 4,
                      totalPassDistance: 71.71,
                      forwardPassDistance: 3.82
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 14.8,
                      puckControlDistance: 67.36,
                      puckControlForwardDistance: 41.29
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 78.32
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 71.14
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 82.82
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 102.18
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 74.86
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 16.24
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.67,
                      relativeCorsiForPercentage: -0.08,
                      fenwickForPercentage: 0.67,
                      relativeFenwickForPercentage: -0.06,
                      pdo: 1.25,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.25
                    }
                  }
                }
              ]
            },
            {
              player: '23',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.36,
                  timeOnIce: 1112.64,
                  distanceTravelled: 3958.56,
                  averageSpeedWithPuck: 4.41,
                  accelerations: 58,
                  decelerations: 46
                },
                shiftStatisticsSummary: {
                  shifts: 25,
                  averageShiftDuration: 44.51
                },
                passStatistics: {
                  successfulPasses: 13,
                  allPasses: 22,
                  receivedPasses: 16,
                  totalPassDistance: 153.76,
                  forwardPassDistance: 49.94
                },
                plusMinusStatistics: {
                  plus: 3,
                  minus: 1,
                  total: 2
                },
                puckControlStatistics: {
                  puckControlTime: 50.94,
                  puckControlDistance: 224.61,
                  puckControlForwardDistance: 93.71
                },
                puckContestStatistics: {
                  puckContestsWon: 6,
                  puckContestsLost: 5,
                  puckContestParticipations: 11
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 134.38
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 257.06
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 313.4
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 257.24
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 116.62
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 33.94
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 1
                },
                traditionalStatistics: {
                  corsiFor: 20,
                  corsiAgainst: 9,
                  corsiForPercentage: 0.69,
                  relativeCorsiForPercentage: 0.17,
                  fenwickForPercentage: 0.65,
                  relativeFenwickForPercentage: 0.2,
                  pdo: 1.11,
                  fullStrengthSavePercentage: 0.86,
                  fullStrengthShootingPercentage: 0.25
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.36,
                      timeOnIce: 296.8,
                      distanceTravelled: 1049.12,
                      averageSpeedWithPuck: 5.79,
                      accelerations: 9,
                      decelerations: 14
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 42.4
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 6,
                      receivedPasses: 3,
                      totalPassDistance: 7.88,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.16,
                      puckControlDistance: 53.04,
                      puckControlForwardDistance: 30.46
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 2,
                      puckContestParticipations: 4
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 34.42
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 67.62
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 89.92
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 72.48
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 20
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 12.36
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 5,
                      corsiForPercentage: 0.17,
                      relativeCorsiForPercentage: -0.36,
                      fenwickForPercentage: 0.17,
                      relativeFenwickForPercentage: -0.42,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.14,
                      timeOnIce: 441.96,
                      distanceTravelled: 1541.04,
                      averageSpeedWithPuck: 3.92,
                      accelerations: 28,
                      decelerations: 19
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 49.11
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 9,
                      receivedPasses: 9,
                      totalPassDistance: 71.33,
                      forwardPassDistance: 21.2
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 1,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 15.98,
                      puckControlDistance: 62.58,
                      puckControlForwardDistance: 17.81
                    },
                    puckContestStatistics: {
                      puckContestsWon: 4,
                      puckContestsLost: 2,
                      puckContestParticipations: 6
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 68.26
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 104.04
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 103.66
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 100.5
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 52.52
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 12.98
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 11,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.85,
                      relativeCorsiForPercentage: 0.43,
                      fenwickForPercentage: 0.86,
                      relativeFenwickForPercentage: 0.57,
                      pdo: 0.2,
                      fullStrengthSavePercentage: 0,
                      fullStrengthShootingPercentage: 0.2
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.76,
                      timeOnIce: 373.88,
                      distanceTravelled: 1368.4,
                      averageSpeedWithPuck: 4.22,
                      accelerations: 21,
                      decelerations: 13
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 41.54
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 7,
                      receivedPasses: 4,
                      totalPassDistance: 74.55,
                      forwardPassDistance: 28.75
                    },
                    plusMinusStatistics: {
                      plus: 2,
                      minus: 0,
                      total: 2
                    },
                    puckControlStatistics: {
                      puckControlTime: 25.8,
                      puckControlDistance: 108.98,
                      puckControlForwardDistance: 45.44
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 31.7
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 85.4
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 119.82
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 84.26
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 44.1
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 8.6
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 8,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.8,
                      relativeCorsiForPercentage: 0.13,
                      fenwickForPercentage: 0.8,
                      relativeFenwickForPercentage: 0.23,
                      pdo: 1.29,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.29
                    }
                  }
                }
              ]
            },
            {
              player: '25',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.32,
                  timeOnIce: 1174.78,
                  distanceTravelled: 4187.49,
                  averageSpeedWithPuck: 3.46,
                  accelerations: 66,
                  decelerations: 47
                },
                shiftStatisticsSummary: {
                  shifts: 24,
                  averageShiftDuration: 48.95
                },
                passStatistics: {
                  successfulPasses: 11,
                  allPasses: 19,
                  receivedPasses: 15,
                  totalPassDistance: 114.95,
                  forwardPassDistance: 43.58
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 1,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 47.14,
                  puckControlDistance: 163.14,
                  puckControlForwardDistance: 55.62
                },
                puckContestStatistics: {
                  puckContestsWon: 5,
                  puckContestsLost: 4,
                  puckContestParticipations: 9
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 146.16
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 249.82
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 342.18
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 293.52
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 107.14
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 35.96
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 2
                },
                traditionalStatistics: {
                  corsiFor: 12,
                  corsiAgainst: 13,
                  corsiForPercentage: 0.48,
                  relativeCorsiForPercentage: -0.16,
                  fenwickForPercentage: 0.4,
                  relativeFenwickForPercentage: -0.21,
                  pdo: 1.14,
                  fullStrengthSavePercentage: 0.89,
                  fullStrengthShootingPercentage: 0.25
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 6.94,
                      timeOnIce: 451.02,
                      distanceTravelled: 1615.64,
                      averageSpeedWithPuck: 2.83,
                      accelerations: 34,
                      decelerations: 24
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 56.38
                    },
                    passStatistics: {
                      successfulPasses: 6,
                      allPasses: 10,
                      receivedPasses: 6,
                      totalPassDistance: 69.17,
                      forwardPassDistance: 27.26
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 18.3,
                      puckControlDistance: 51.87,
                      puckControlForwardDistance: 15.83
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 48.08
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 97.42
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 135.22
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 120.56
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 41.5
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 8.24
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 5,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.56,
                      relativeCorsiForPercentage: 0.2,
                      fenwickForPercentage: 0.57,
                      relativeFenwickForPercentage: 0.21,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.7,
                      timeOnIce: 337.58,
                      distanceTravelled: 1161.03,
                      averageSpeedWithPuck: 3.92,
                      accelerations: 15,
                      decelerations: 8
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 48.23
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 5,
                      receivedPasses: 4,
                      totalPassDistance: 21.8,
                      forwardPassDistance: 11
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 16.88,
                      puckControlDistance: 66.24,
                      puckControlForwardDistance: 25.76
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 0,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 49.42
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 72.74
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 97.66
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 81.68
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 27.24
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 8.84
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 6,
                      corsiForPercentage: 0.33,
                      relativeCorsiForPercentage: -0.38,
                      fenwickForPercentage: 0.25,
                      relativeFenwickForPercentage: -0.37,
                      pdo: 0.75,
                      fullStrengthSavePercentage: 0.75,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.32,
                      timeOnIce: 386.18,
                      distanceTravelled: 1410.82,
                      averageSpeedWithPuck: 3.76,
                      accelerations: 17,
                      decelerations: 15
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 42.91
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 4,
                      receivedPasses: 5,
                      totalPassDistance: 23.98,
                      forwardPassDistance: 5.33
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 11.96,
                      puckControlDistance: 45.03,
                      puckControlForwardDistance: 14.03
                    },
                    puckContestStatistics: {
                      puckContestsWon: 4,
                      puckContestsLost: 3,
                      puckContestParticipations: 7
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 48.66
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 79.66
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 109.3
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 91.28
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 38.4
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 18.88
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.57,
                      relativeCorsiForPercentage: -0.23,
                      fenwickForPercentage: 0.4,
                      relativeFenwickForPercentage: -0.43,
                      pdo: 1.5,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.5
                    }
                  }
                }
              ]
            },
            {
              player: '487',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.2,
                  timeOnIce: 1233.18,
                  distanceTravelled: 4995.05,
                  averageSpeedWithPuck: 4.52,
                  accelerations: 78,
                  decelerations: 73
                },
                shiftStatisticsSummary: {
                  shifts: 30,
                  averageShiftDuration: 41.11
                },
                passStatistics: {
                  successfulPasses: 28,
                  allPasses: 36,
                  receivedPasses: 25,
                  totalPassDistance: 345.54,
                  forwardPassDistance: 72.2
                },
                plusMinusStatistics: {
                  plus: 3,
                  minus: 1,
                  total: 2
                },
                puckControlStatistics: {
                  puckControlTime: 81.92,
                  puckControlDistance: 370.11,
                  puckControlForwardDistance: 200.43
                },
                puckContestStatistics: {
                  puckContestsWon: 3,
                  puckContestsLost: 2,
                  puckContestParticipations: 5
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 126
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 200.2
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 302.24
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 323.96
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 204.26
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 76.52
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 20,
                  corsiAgainst: 5,
                  corsiForPercentage: 0.8,
                  relativeCorsiForPercentage: 0.32,
                  fenwickForPercentage: 0.75,
                  relativeFenwickForPercentage: 0.33,
                  pdo: 0.85,
                  fullStrengthSavePercentage: 0.67,
                  fullStrengthShootingPercentage: 0.18
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.88,
                      timeOnIce: 381.7,
                      distanceTravelled: 1419.46,
                      averageSpeedWithPuck: 3.4,
                      accelerations: 26,
                      decelerations: 18
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 42.41
                    },
                    passStatistics: {
                      successfulPasses: 8,
                      allPasses: 11,
                      receivedPasses: 6,
                      totalPassDistance: 75.96,
                      forwardPassDistance: 11.3
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 21.62,
                      puckControlDistance: 73.42,
                      puckControlForwardDistance: 43.75
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 56.32
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 71.3
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 86.02
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 96.22
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 58.48
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 13.36
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 5,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.72,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.71,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.9,
                      timeOnIce: 395.34,
                      distanceTravelled: 1693.29,
                      averageSpeedWithPuck: 5.63,
                      accelerations: 29,
                      decelerations: 24
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 43.93
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 9,
                      receivedPasses: 9,
                      totalPassDistance: 88.54,
                      forwardPassDistance: 32.1
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 1,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 19.68,
                      puckControlDistance: 110.89,
                      puckControlForwardDistance: 75.23
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 32.22
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 53.46
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 96.68
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 109.76
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 74.4
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 28.82
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 7,
                      corsiAgainst: 5,
                      corsiForPercentage: 0.58,
                      relativeCorsiForPercentage: -0.03,
                      fenwickForPercentage: 0.44,
                      relativeFenwickForPercentage: -0.06,
                      pdo: 1,
                      fullStrengthSavePercentage: 0.67,
                      fullStrengthShootingPercentage: 0.33
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.2,
                      timeOnIce: 456.14,
                      distanceTravelled: 1882.3,
                      averageSpeedWithPuck: 4.57,
                      accelerations: 23,
                      decelerations: 31
                    },
                    shiftStatisticsSummary: {
                      shifts: 12,
                      averageShiftDuration: 38.01
                    },
                    passStatistics: {
                      successfulPasses: 13,
                      allPasses: 16,
                      receivedPasses: 10,
                      totalPassDistance: 181.04,
                      forwardPassDistance: 28.8
                    },
                    plusMinusStatistics: {
                      plus: 2,
                      minus: 0,
                      total: 2
                    },
                    puckControlStatistics: {
                      puckControlTime: 40.62,
                      puckControlDistance: 185.81,
                      puckControlForwardDistance: 81.45
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 0,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 37.46
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 75.44
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 119.54
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 117.98
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 71.38
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 34.34
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 8,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.43,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.5,
                      pdo: 1.17,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.17
                    }
                  }
                }
              ]
            },
            {
              player: '493',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.02,
                  timeOnIce: 971.04,
                  distanceTravelled: 3965.26,
                  averageSpeedWithPuck: 3.86,
                  accelerations: 60,
                  decelerations: 44
                },
                shiftStatisticsSummary: {
                  shifts: 25,
                  averageShiftDuration: 38.84
                },
                passStatistics: {
                  successfulPasses: 18,
                  allPasses: 25,
                  receivedPasses: 19,
                  totalPassDistance: 172.22,
                  forwardPassDistance: 39.37
                },
                plusMinusStatistics: {
                  plus: 3,
                  minus: 1,
                  total: 2
                },
                puckControlStatistics: {
                  puckControlTime: 24.28,
                  puckControlDistance: 93.83,
                  puckControlForwardDistance: 46.14
                },
                puckContestStatistics: {
                  puckContestsWon: 1,
                  puckContestsLost: 2,
                  puckContestParticipations: 3
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 96.04
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 183.68
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 229.4
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 235.02
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 152.14
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 74.76
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 2,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 21,
                  corsiAgainst: 4,
                  corsiForPercentage: 0.84,
                  relativeCorsiForPercentage: 0.38,
                  fenwickForPercentage: 0.8,
                  relativeFenwickForPercentage: 0.41,
                  pdo: 0.67,
                  fullStrengthSavePercentage: 0.5,
                  fullStrengthShootingPercentage: 0.17
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.02,
                      timeOnIce: 341.52,
                      distanceTravelled: 1386.29,
                      averageSpeedWithPuck: 3.63,
                      accelerations: 16,
                      decelerations: 13
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 42.69
                    },
                    passStatistics: {
                      successfulPasses: 8,
                      allPasses: 11,
                      receivedPasses: 6,
                      totalPassDistance: 68.52,
                      forwardPassDistance: 1.13
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.78,
                      puckControlDistance: 35.51,
                      puckControlForwardDistance: 11.55
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 32.42
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 70.78
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 82.56
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 75.96
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 49.56
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 30.24
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 5,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.72,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.71,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.86,
                      timeOnIce: 335.1,
                      distanceTravelled: 1334.04,
                      averageSpeedWithPuck: 5.04,
                      accelerations: 25,
                      decelerations: 17
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 37.23
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 7,
                      receivedPasses: 6,
                      totalPassDistance: 22.43,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 1,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 5.42,
                      puckControlDistance: 27.32,
                      puckControlForwardDistance: 20.2
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 38.36
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 61.9
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 77.9
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 86.96
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 51.56
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 18.42
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 8,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.67,
                      relativeCorsiForPercentage: 0.11,
                      fenwickForPercentage: 0.56,
                      relativeFenwickForPercentage: 0.14,
                      pdo: 0.75,
                      fullStrengthSavePercentage: 0.5,
                      fullStrengthShootingPercentage: 0.25
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.71,
                      timeOnIce: 294.42,
                      distanceTravelled: 1244.94,
                      averageSpeedWithPuck: 3.41,
                      accelerations: 19,
                      decelerations: 14
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 36.8
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 7,
                      receivedPasses: 7,
                      totalPassDistance: 81.27,
                      forwardPassDistance: 38.24
                    },
                    plusMinusStatistics: {
                      plus: 2,
                      minus: 0,
                      total: 2
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.08,
                      puckControlDistance: 31,
                      puckControlForwardDistance: 14.39
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 25.26
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 51
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 68.94
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 72.1
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 51.02
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 26.1
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 8,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.43,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.5,
                      pdo: 1.17,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.17
                    }
                  }
                }
              ]
            },
            {
              player: '59',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.5,
                  timeOnIce: 924.1,
                  distanceTravelled: 3729.39,
                  averageSpeedWithPuck: 4.28,
                  accelerations: 55,
                  decelerations: 49
                },
                shiftStatisticsSummary: {
                  shifts: 24,
                  averageShiftDuration: 38.5
                },
                passStatistics: {
                  successfulPasses: 11,
                  allPasses: 19,
                  receivedPasses: 11,
                  totalPassDistance: 108.27,
                  forwardPassDistance: 29.68
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 0,
                  total: 1
                },
                puckControlStatistics: {
                  puckControlTime: 21.18,
                  puckControlDistance: 90.59,
                  puckControlForwardDistance: 39.12
                },
                puckContestStatistics: {
                  puckContestsWon: 4,
                  puckContestsLost: 4,
                  puckContestParticipations: 8
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 105.76
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 166.38
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 205.8
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 223.12
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 151.18
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 71.86
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 2,
                  blockedShots: 2
                },
                traditionalStatistics: {
                  corsiFor: 8,
                  corsiAgainst: 8,
                  corsiForPercentage: 0.5,
                  relativeCorsiForPercentage: -0.11,
                  fenwickForPercentage: 0.44,
                  relativeFenwickForPercentage: -0.11,
                  pdo: 1.33,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0.33
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.34,
                      timeOnIce: 290.06,
                      distanceTravelled: 1080.01,
                      averageSpeedWithPuck: 3.59,
                      accelerations: 15,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 41.44
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 5,
                      receivedPasses: 4,
                      totalPassDistance: 41.67,
                      forwardPassDistance: 9.75
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 8,
                      puckControlDistance: 28.74,
                      puckControlForwardDistance: 18.61
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 45.72
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 60.64
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 56.04
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 70.62
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 41.28
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 15.76
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 2
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 3,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.5,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.47,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.5,
                      timeOnIce: 311.12,
                      distanceTravelled: 1220.57,
                      averageSpeedWithPuck: 4.45,
                      accelerations: 20,
                      decelerations: 10
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 38.89
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 8,
                      receivedPasses: 4,
                      totalPassDistance: 13.86,
                      forwardPassDistance: 7.79
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 6.36,
                      puckControlDistance: 28.3,
                      puckControlForwardDistance: 11.19
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 2,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 34.4
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 57
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 81.4
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 75.22
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 42.08
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 21.02
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 1,
                      corsiForPercentage: 0.8,
                      relativeCorsiForPercentage: 0.24,
                      fenwickForPercentage: 0.67,
                      relativeFenwickForPercentage: 0.22,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.08,
                      timeOnIce: 322.92,
                      distanceTravelled: 1428.81,
                      averageSpeedWithPuck: 4.92,
                      accelerations: 20,
                      decelerations: 19
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 35.88
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 6,
                      receivedPasses: 3,
                      totalPassDistance: 52.74,
                      forwardPassDistance: 12.14
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 6.82,
                      puckControlDistance: 33.56,
                      puckControlForwardDistance: 9.32
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 1,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 25.64
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 48.74
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 68.36
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 77.28
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 67.82
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 35.08
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: -0.36,
                      fenwickForPercentage: 0.4,
                      relativeFenwickForPercentage: -0.43,
                      pdo: 1.5,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.5
                    }
                  }
                }
              ]
            },
            {
              player: '656',
              team: 'Home',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.72,
                  timeOnIce: 1039.02,
                  distanceTravelled: 4124.14,
                  averageSpeedWithPuck: 4.13,
                  accelerations: 85,
                  decelerations: 54
                },
                shiftStatisticsSummary: {
                  shifts: 28,
                  averageShiftDuration: 37.11
                },
                passStatistics: {
                  successfulPasses: 11,
                  allPasses: 21,
                  receivedPasses: 15,
                  totalPassDistance: 92.8,
                  forwardPassDistance: 63.49
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 1,
                  total: -1
                },
                puckControlStatistics: {
                  puckControlTime: 44.16,
                  puckControlDistance: 182.57,
                  puckControlForwardDistance: 77.49
                },
                puckContestStatistics: {
                  puckContestsWon: 2,
                  puckContestsLost: 2,
                  puckContestParticipations: 4
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 102.22
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 191.14
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 243.54
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 279.68
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 186.7
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 35.74
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 3
                },
                traditionalStatistics: {
                  corsiFor: 12,
                  corsiAgainst: 10,
                  corsiForPercentage: 0.55,
                  relativeCorsiForPercentage: -0.06,
                  fenwickForPercentage: 0.5,
                  relativeFenwickForPercentage: -0.05,
                  pdo: 0.83,
                  fullStrengthSavePercentage: 0.83,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.04,
                      timeOnIce: 359.16,
                      distanceTravelled: 1435.75,
                      averageSpeedWithPuck: 4.38,
                      accelerations: 31,
                      decelerations: 19
                    },
                    shiftStatisticsSummary: {
                      shifts: 10,
                      averageShiftDuration: 35.92
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 9,
                      receivedPasses: 5,
                      totalPassDistance: 28.64,
                      forwardPassDistance: 12.6
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 18.62,
                      puckControlDistance: 81.64,
                      puckControlForwardDistance: 33.58
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 22.24
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 70.38
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 91.78
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 109.84
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 57.98
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 6.94
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 2
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 5,
                      corsiForPercentage: 0.44,
                      relativeCorsiForPercentage: 0.02,
                      fenwickForPercentage: 0.57,
                      relativeFenwickForPercentage: 0.21,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.72,
                      timeOnIce: 404.44,
                      distanceTravelled: 1649.03,
                      averageSpeedWithPuck: 4.59,
                      accelerations: 30,
                      decelerations: 15
                    },
                    shiftStatisticsSummary: {
                      shifts: 11,
                      averageShiftDuration: 36.77
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 5,
                      receivedPasses: 3,
                      totalPassDistance: 13.95,
                      forwardPassDistance: 13.81
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.18,
                      puckControlDistance: 42.15,
                      puckControlForwardDistance: 3.71
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 49.36
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 66.32
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 84.62
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 95.12
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 86.14
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 22.88
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.6,
                      relativeCorsiForPercentage: 0,
                      fenwickForPercentage: 0.43,
                      relativeFenwickForPercentage: -0.07,
                      pdo: 0.75,
                      fullStrengthSavePercentage: 0.75,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.05,
                      timeOnIce: 275.42,
                      distanceTravelled: 1039.36,
                      averageSpeedWithPuck: 3.59,
                      accelerations: 24,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 39.35
                    },
                    passStatistics: {
                      successfulPasses: 6,
                      allPasses: 7,
                      receivedPasses: 7,
                      totalPassDistance: 50.21,
                      forwardPassDistance: 37.08
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 16.36,
                      puckControlDistance: 58.78,
                      puckControlForwardDistance: 40.2
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 30.62
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 54.44
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 67.14
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 74.72
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 42.58
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 5.92
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 2,
                      corsiAgainst: 1,
                      corsiForPercentage: 0.67,
                      relativeCorsiForPercentage: -0.07,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: -0.23,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1004',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.77,
                  timeOnIce: 724.32,
                  distanceTravelled: 3001.98,
                  averageSpeedWithPuck: 3.56,
                  accelerations: 45,
                  decelerations: 42
                },
                shiftStatisticsSummary: {
                  shifts: 18,
                  averageShiftDuration: 40.24
                },
                passStatistics: {
                  successfulPasses: 10,
                  allPasses: 15,
                  receivedPasses: 12,
                  totalPassDistance: 127.76,
                  forwardPassDistance: 29
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 1,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 26.56,
                  puckControlDistance: 94.63,
                  puckControlForwardDistance: 33.46
                },
                puckContestStatistics: {
                  puckContestsWon: 3,
                  puckContestsLost: 2,
                  puckContestParticipations: 5
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 67.92
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 108.06
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 169.24
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 210.1
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 120.58
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 48.42
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 2
                },
                traditionalStatistics: {
                  corsiFor: 10,
                  corsiAgainst: 10,
                  corsiForPercentage: 0.5,
                  relativeCorsiForPercentage: 0.12,
                  fenwickForPercentage: 0.53,
                  relativeFenwickForPercentage: 0.09,
                  pdo: 1,
                  fullStrengthSavePercentage: 0.83,
                  fullStrengthShootingPercentage: 0.17
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.77,
                      timeOnIce: 264.44,
                      distanceTravelled: 1042.55,
                      averageSpeedWithPuck: 3.03,
                      accelerations: 17,
                      decelerations: 17
                    },
                    shiftStatisticsSummary: {
                      shifts: 5,
                      averageShiftDuration: 52.89
                    },
                    passStatistics: {
                      successfulPasses: 4,
                      allPasses: 7,
                      receivedPasses: 3,
                      totalPassDistance: 48.9,
                      forwardPassDistance: 15.31
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 13.66,
                      puckControlDistance: 41.41,
                      puckControlForwardDistance: 27.6
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 1,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 31.22
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 40.08
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 62.1
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 77.64
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 44.4
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 9
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.5,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.5,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.56,
                      timeOnIce: 255.14,
                      distanceTravelled: 1112.6,
                      averageSpeedWithPuck: 4.93,
                      accelerations: 15,
                      decelerations: 10
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 36.45
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 7,
                      receivedPasses: 6,
                      totalPassDistance: 69.35,
                      forwardPassDistance: 8.09
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 8.18,
                      puckControlDistance: 40.29,
                      puckControlForwardDistance: 3.14
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 18.6
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 33.34
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 63.92
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 69.12
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 46.62
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 23.54
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 5,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.62,
                      relativeCorsiForPercentage: 0.31,
                      fenwickForPercentage: 0.71,
                      relativeFenwickForPercentage: 0.29,
                      pdo: 1.33,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.33
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.84,
                      timeOnIce: 204.74,
                      distanceTravelled: 846.84,
                      averageSpeedWithPuck: 2.74,
                      accelerations: 13,
                      decelerations: 15
                    },
                    shiftStatisticsSummary: {
                      shifts: 6,
                      averageShiftDuration: 34.12
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 1,
                      receivedPasses: 3,
                      totalPassDistance: 9.51,
                      forwardPassDistance: 5.6
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 4.72,
                      puckControlDistance: 12.93,
                      puckControlForwardDistance: 2.71
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 18.1
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 34.64
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 43.22
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 63.34
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 29.56
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 15.88
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 2,
                      corsiAgainst: 7,
                      corsiForPercentage: 0.22,
                      relativeCorsiForPercentage: -0.09,
                      fenwickForPercentage: 0.25,
                      relativeFenwickForPercentage: -0.08,
                      pdo: 0.8,
                      fullStrengthSavePercentage: 0.8,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '115',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.61,
                  timeOnIce: 940.84,
                  distanceTravelled: 3819.52,
                  averageSpeedWithPuck: 4.59,
                  accelerations: 56,
                  decelerations: 60
                },
                shiftStatisticsSummary: {
                  shifts: 20,
                  averageShiftDuration: 47.04
                },
                passStatistics: {
                  successfulPasses: 10,
                  allPasses: 15,
                  receivedPasses: 20,
                  totalPassDistance: 96.37,
                  forwardPassDistance: 21.71
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 0,
                  total: 1
                },
                puckControlStatistics: {
                  puckControlTime: 25.3,
                  puckControlDistance: 116.25,
                  puckControlForwardDistance: 69.47
                },
                puckContestStatistics: {
                  puckContestsWon: 2,
                  puckContestsLost: 2,
                  puckContestParticipations: 4
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 93.14
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 157.1
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 218
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 254.62
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 167.3
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 50.68
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 1
                },
                traditionalStatistics: {
                  corsiFor: 7,
                  corsiAgainst: 9,
                  corsiForPercentage: 0.44,
                  relativeCorsiForPercentage: 0.03,
                  fenwickForPercentage: 0.55,
                  relativeFenwickForPercentage: 0.1,
                  pdo: 1.2,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0.2
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.08,
                      timeOnIce: 374.94,
                      distanceTravelled: 1559.92,
                      averageSpeedWithPuck: 4.54,
                      accelerations: 25,
                      decelerations: 29
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 46.87
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 3,
                      receivedPasses: 7,
                      totalPassDistance: 18.12,
                      forwardPassDistance: 7.95
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 8.4,
                      puckControlDistance: 38.16,
                      puckControlForwardDistance: 27.15
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 0,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 26.1
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 58.64
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 93.42
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 115.88
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 62
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 18.9
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.25,
                      relativeCorsiForPercentage: -0.38,
                      fenwickForPercentage: 0.25,
                      relativeFenwickForPercentage: -0.39,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.37,
                      timeOnIce: 288.42,
                      distanceTravelled: 1176.45,
                      averageSpeedWithPuck: 4.49,
                      accelerations: 11,
                      decelerations: 16
                    },
                    shiftStatisticsSummary: {
                      shifts: 5,
                      averageShiftDuration: 57.68
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 4,
                      receivedPasses: 7,
                      totalPassDistance: 30.88,
                      forwardPassDistance: 13.76
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.34,
                      puckControlDistance: 41.93,
                      puckControlForwardDistance: 18.76
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 33.76
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 35.6
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 71.96
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 82.34
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 46.96
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 17.8
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: 0.12,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.56,
                      pdo: 1.33,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.33
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.61,
                      timeOnIce: 277.48,
                      distanceTravelled: 1083.15,
                      averageSpeedWithPuck: 4.78,
                      accelerations: 20,
                      decelerations: 15
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 39.64
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 8,
                      receivedPasses: 6,
                      totalPassDistance: 47.36,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 7.56,
                      puckControlDistance: 36.16,
                      puckControlForwardDistance: 23.56
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 33.28
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 62.86
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 52.62
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 56.4
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 58.34
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 13.98
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: 0.31,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: 0.27,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1447',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.27,
                  timeOnIce: 394.18,
                  distanceTravelled: 1381.14,
                  averageSpeedWithPuck: 4.57,
                  accelerations: 24,
                  decelerations: 27
                },
                shiftStatisticsSummary: {
                  shifts: 9,
                  averageShiftDuration: 43.8
                },
                passStatistics: {
                  successfulPasses: 8,
                  allPasses: 9,
                  receivedPasses: 6,
                  totalPassDistance: 93.27,
                  forwardPassDistance: 42.8
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 1,
                  total: -1
                },
                puckControlStatistics: {
                  puckControlTime: 19.8,
                  puckControlDistance: 90.55,
                  puckControlForwardDistance: 26.75
                },
                puckContestStatistics: {
                  puckContestsWon: 0,
                  puckContestsLost: 0,
                  puckContestParticipations: 0
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 53.66
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 91.42
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 113.14
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 80.3
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 39.16
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 16.5
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 7,
                  corsiAgainst: 3,
                  corsiForPercentage: 0.7,
                  relativeCorsiForPercentage: 0.33,
                  fenwickForPercentage: 0.71,
                  relativeFenwickForPercentage: 0.29,
                  pdo: 0.5,
                  fullStrengthSavePercentage: 0.5,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.27,
                      timeOnIce: 193.6,
                      distanceTravelled: 600.42,
                      averageSpeedWithPuck: 4.49,
                      accelerations: 9,
                      decelerations: 13
                    },
                    shiftStatisticsSummary: {
                      shifts: 4,
                      averageShiftDuration: 48.4
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 3,
                      receivedPasses: 2,
                      totalPassDistance: 42.44,
                      forwardPassDistance: 17.99
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 10.84,
                      puckControlDistance: 48.65,
                      puckControlForwardDistance: 5
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 41.12
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 51.66
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 44.5
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 35.98
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 16.14
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 4.2
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 2,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: -0.08,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: -0.06,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.14,
                      timeOnIce: 141.34,
                      distanceTravelled: 578.17,
                      averageSpeedWithPuck: 5.03,
                      accelerations: 11,
                      decelerations: 11
                    },
                    shiftStatisticsSummary: {
                      shifts: 3,
                      averageShiftDuration: 47.11
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 6,
                      receivedPasses: 4,
                      totalPassDistance: 50.84,
                      forwardPassDistance: 24.8
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 8.02,
                      puckControlDistance: 40.31,
                      puckControlForwardDistance: 21.47
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 9.62
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 24.32
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 44.32
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 32.06
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 18.96
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 12.06
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.69,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.56,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 5.35,
                      timeOnIce: 59.24,
                      distanceTravelled: 202.55,
                      averageSpeedWithPuck: 1.68,
                      accelerations: 4,
                      decelerations: 3
                    },
                    shiftStatisticsSummary: {
                      shifts: 2,
                      averageShiftDuration: 29.62
                    },
                    passStatistics: {
                      successfulPasses: 0,
                      allPasses: 0,
                      receivedPasses: 0,
                      totalPassDistance: 0,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 0.94,
                      puckControlDistance: 1.58,
                      puckControlForwardDistance: 0.28
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 2.92
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 15.44
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 24.32
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 12.26
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 4.06
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 0.24
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 1,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: 0.25,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: 0.23,
                      pdo: 0,
                      fullStrengthSavePercentage: 0,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1449',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.67,
                  timeOnIce: 951.66,
                  distanceTravelled: 3500.59,
                  averageSpeedWithPuck: 3.05,
                  accelerations: 53,
                  decelerations: 59
                },
                shiftStatisticsSummary: {
                  shifts: 19,
                  averageShiftDuration: 50.09
                },
                passStatistics: {
                  successfulPasses: 9,
                  allPasses: 18,
                  receivedPasses: 9,
                  totalPassDistance: 93.83,
                  forwardPassDistance: 21.95
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 1,
                  total: -1
                },
                puckControlStatistics: {
                  puckControlTime: 20.18,
                  puckControlDistance: 61.53,
                  puckControlForwardDistance: 20.4
                },
                puckContestStatistics: {
                  puckContestsWon: 2,
                  puckContestsLost: 7,
                  puckContestParticipations: 9
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 128.78
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 224.62
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 228.54
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 180.84
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 128
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 60.88
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 4
                },
                traditionalStatistics: {
                  corsiFor: 7,
                  corsiAgainst: 12,
                  corsiForPercentage: 0.37,
                  relativeCorsiForPercentage: -0.06,
                  fenwickForPercentage: 0.44,
                  relativeFenwickForPercentage: -0.02,
                  pdo: 1,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.67,
                      timeOnIce: 239.7,
                      distanceTravelled: 844.47,
                      averageSpeedWithPuck: 2.9,
                      accelerations: 14,
                      decelerations: 18
                    },
                    shiftStatisticsSummary: {
                      shifts: 4,
                      averageShiftDuration: 59.93
                    },
                    passStatistics: {
                      successfulPasses: 0,
                      allPasses: 2,
                      receivedPasses: 2,
                      totalPassDistance: 0,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 4.46,
                      puckControlDistance: 12.94,
                      puckControlForwardDistance: 5.26
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 4,
                      puckContestParticipations: 4
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 40.94
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 61.42
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 49.2
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 41.06
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 33.94
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 13.14
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 2
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.25,
                      relativeCorsiForPercentage: -0.38,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.59,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.08,
                      timeOnIce: 277.08,
                      distanceTravelled: 1075.09,
                      averageSpeedWithPuck: 3.95,
                      accelerations: 16,
                      decelerations: 13
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 39.58
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 10,
                      receivedPasses: 4,
                      totalPassDistance: 78.34,
                      forwardPassDistance: 21.95
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 7.44,
                      puckControlDistance: 29.42,
                      puckControlForwardDistance: 13.48
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 2,
                      puckContestParticipations: 4
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 34.18
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 61.54
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 64.78
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 48.32
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 45.5
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 22.76
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.43,
                      relativeCorsiForPercentage: 0.04,
                      fenwickForPercentage: 0.67,
                      relativeFenwickForPercentage: 0.17,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.73,
                      timeOnIce: 434.88,
                      distanceTravelled: 1581.03,
                      averageSpeedWithPuck: 2.32,
                      accelerations: 23,
                      decelerations: 28
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 54.36
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 6,
                      receivedPasses: 3,
                      totalPassDistance: 15.49,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 8.28,
                      puckControlDistance: 19.17,
                      puckControlForwardDistance: 1.66
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 53.66
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 101.66
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 114.56
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 91.46
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 48.56
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 24.98
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 5,
                      corsiForPercentage: 0.38,
                      relativeCorsiForPercentage: 0.16,
                      fenwickForPercentage: 0.4,
                      relativeFenwickForPercentage: 0.15,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '146',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.07,
                  timeOnIce: 1344.74,
                  distanceTravelled: 4563.91,
                  averageSpeedWithPuck: 3.51,
                  accelerations: 77,
                  decelerations: 72
                },
                shiftStatisticsSummary: {
                  shifts: 31,
                  averageShiftDuration: 43.38
                },
                passStatistics: {
                  successfulPasses: 24,
                  allPasses: 29,
                  receivedPasses: 23,
                  totalPassDistance: 256.79,
                  forwardPassDistance: 114.87
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 2,
                  total: -1
                },
                puckControlStatistics: {
                  puckControlTime: 48.74,
                  puckControlDistance: 170.93,
                  puckControlForwardDistance: 70.66
                },
                puckContestStatistics: {
                  puckContestsWon: 5,
                  puckContestsLost: 3,
                  puckContestParticipations: 8
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 213.24
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 308.12
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 354.92
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 301.4
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 143.34
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 23.72
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 1
                },
                traditionalStatistics: {
                  corsiFor: 9,
                  corsiAgainst: 16,
                  corsiForPercentage: 0.36,
                  relativeCorsiForPercentage: -0.08,
                  fenwickForPercentage: 0.41,
                  relativeFenwickForPercentage: -0.08,
                  pdo: 1.03,
                  fullStrengthSavePercentage: 0.89,
                  fullStrengthShootingPercentage: 0.14
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.85,
                      timeOnIce: 443.68,
                      distanceTravelled: 1626.08,
                      averageSpeedWithPuck: 4.4,
                      accelerations: 27,
                      decelerations: 19
                    },
                    shiftStatisticsSummary: {
                      shifts: 10,
                      averageShiftDuration: 44.37
                    },
                    passStatistics: {
                      successfulPasses: 13,
                      allPasses: 15,
                      receivedPasses: 12,
                      totalPassDistance: 154.83,
                      forwardPassDistance: 67.27
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 19.5,
                      puckControlDistance: 85.77,
                      puckControlForwardDistance: 42.22
                    },
                    puckContestStatistics: {
                      puckContestsWon: 3,
                      puckContestsLost: 0,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 56.2
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 88.08
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 114.52
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 120.28
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 54.2
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 10.4
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 7,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.78,
                      relativeCorsiForPercentage: 0.35,
                      fenwickForPercentage: 0.71,
                      relativeFenwickForPercentage: 0.26,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.25,
                      timeOnIce: 435.38,
                      distanceTravelled: 1504.66,
                      averageSpeedWithPuck: 3.35,
                      accelerations: 26,
                      decelerations: 23
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 48.38
                    },
                    passStatistics: {
                      successfulPasses: 6,
                      allPasses: 7,
                      receivedPasses: 7,
                      totalPassDistance: 56.13,
                      forwardPassDistance: 40.29
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 1,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 15.56,
                      puckControlDistance: 52.2,
                      puckControlForwardDistance: 11.22
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 2,
                      puckContestParticipations: 4
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 53.52
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 98.34
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 136.1
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 97.34
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 44.78
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 5.3
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 9,
                      corsiForPercentage: 0.1,
                      relativeCorsiForPercentage: -0.45,
                      fenwickForPercentage: 0.17,
                      relativeFenwickForPercentage: -0.5,
                      pdo: 1.8,
                      fullStrengthSavePercentage: 0.8,
                      fullStrengthShootingPercentage: 1
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.07,
                      timeOnIce: 465.68,
                      distanceTravelled: 1433.17,
                      averageSpeedWithPuck: 2.41,
                      accelerations: 24,
                      decelerations: 30
                    },
                    shiftStatisticsSummary: {
                      shifts: 12,
                      averageShiftDuration: 38.81
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 7,
                      receivedPasses: 4,
                      totalPassDistance: 45.84,
                      forwardPassDistance: 7.32
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 13.68,
                      puckControlDistance: 32.96,
                      puckControlForwardDistance: 17.23
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 103.52
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 121.7
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 104.3
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 83.78
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 44.36
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 8.02
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 5,
                      corsiForPercentage: 0.17,
                      relativeCorsiForPercentage: -0.15,
                      fenwickForPercentage: 0.25,
                      relativeFenwickForPercentage: -0.06,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1481',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.48,
                  timeOnIce: 1056.82,
                  distanceTravelled: 3765.42,
                  averageSpeedWithPuck: 3.17,
                  accelerations: 64,
                  decelerations: 54
                },
                shiftStatisticsSummary: {
                  shifts: 24,
                  averageShiftDuration: 44.03
                },
                passStatistics: {
                  successfulPasses: 16,
                  allPasses: 20,
                  receivedPasses: 17,
                  totalPassDistance: 155.84,
                  forwardPassDistance: 72.75
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 1,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 33.54,
                  puckControlDistance: 106.32,
                  puckControlForwardDistance: 66.08
                },
                puckContestStatistics: {
                  puckContestsWon: 1,
                  puckContestsLost: 7,
                  puckContestParticipations: 8
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 144.52
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 234.86
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 271.66
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 252.68
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 120.38
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 32.72
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 7,
                  corsiAgainst: 13,
                  corsiForPercentage: 0.35,
                  relativeCorsiForPercentage: -0.09,
                  fenwickForPercentage: 0.43,
                  relativeFenwickForPercentage: -0.05,
                  pdo: 1.2,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0.2
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.2,
                      timeOnIce: 403.94,
                      distanceTravelled: 1472.15,
                      averageSpeedWithPuck: 3.08,
                      accelerations: 22,
                      decelerations: 19
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 44.88
                    },
                    passStatistics: {
                      successfulPasses: 6,
                      allPasses: 7,
                      receivedPasses: 6,
                      totalPassDistance: 79.01,
                      forwardPassDistance: 44.75
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 10.34,
                      puckControlDistance: 31.85,
                      puckControlForwardDistance: 20.72
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 46.04
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 83.98
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 117.9
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 99.32
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 45.5
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 11.2
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 6,
                      corsiForPercentage: 0.14,
                      relativeCorsiForPercentage: -0.61,
                      fenwickForPercentage: 0.17,
                      relativeFenwickForPercentage: -0.58,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.48,
                      timeOnIce: 327.86,
                      distanceTravelled: 1173.82,
                      averageSpeedWithPuck: 5.39,
                      accelerations: 25,
                      decelerations: 18
                    },
                    shiftStatisticsSummary: {
                      shifts: 6,
                      averageShiftDuration: 54.64
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 4,
                      receivedPasses: 3,
                      totalPassDistance: 15.29,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 4.26,
                      puckControlDistance: 22.95,
                      puckControlForwardDistance: 18.16
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 3,
                      puckContestParticipations: 4
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 51.04
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 72.42
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 71.62
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 83.36
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 35.36
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 14.06
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: 0.12,
                      fenwickForPercentage: 0.75,
                      relativeFenwickForPercentage: 0.28,
                      pdo: 1.33,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.33
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.68,
                      timeOnIce: 325.02,
                      distanceTravelled: 1119.45,
                      averageSpeedWithPuck: 2.72,
                      accelerations: 17,
                      decelerations: 17
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 36.11
                    },
                    passStatistics: {
                      successfulPasses: 8,
                      allPasses: 9,
                      receivedPasses: 8,
                      totalPassDistance: 61.55,
                      forwardPassDistance: 28
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 18.94,
                      puckControlDistance: 51.53,
                      puckControlForwardDistance: 27.19
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 3,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 47.44
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 78.46
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 82.14
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 70
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 39.52
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 7.46
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.43,
                      relativeCorsiForPercentage: 0.23,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: 0.27,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1520',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.69,
                  timeOnIce: 1281.94,
                  distanceTravelled: 4408.08,
                  averageSpeedWithPuck: 4.21,
                  accelerations: 72,
                  decelerations: 63
                },
                shiftStatisticsSummary: {
                  shifts: 24,
                  averageShiftDuration: 53.41
                },
                passStatistics: {
                  successfulPasses: 14,
                  allPasses: 23,
                  receivedPasses: 10,
                  totalPassDistance: 225.94,
                  forwardPassDistance: 73.63
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 1,
                  total: -1
                },
                puckControlStatistics: {
                  puckControlTime: 39.38,
                  puckControlDistance: 165.91,
                  puckControlForwardDistance: 46.38
                },
                puckContestStatistics: {
                  puckContestsWon: 1,
                  puckContestsLost: 3,
                  puckContestParticipations: 4
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 177.8
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 294.94
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 372.02
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 285.78
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 123.12
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 28.28
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 1
                },
                traditionalStatistics: {
                  corsiFor: 4,
                  corsiAgainst: 20,
                  corsiForPercentage: 0.17,
                  relativeCorsiForPercentage: -0.36,
                  fenwickForPercentage: 0.24,
                  relativeFenwickForPercentage: -0.33,
                  pdo: 0.89,
                  fullStrengthSavePercentage: 0.89,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.32,
                      timeOnIce: 394.24,
                      distanceTravelled: 1372.42,
                      averageSpeedWithPuck: 3.46,
                      accelerations: 25,
                      decelerations: 19
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 56.32
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 10,
                      receivedPasses: 4,
                      totalPassDistance: 81.16,
                      forwardPassDistance: 21.47
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 10.12,
                      puckControlDistance: 35.02,
                      puckControlForwardDistance: 1.73
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 63.42
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 85.96
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 102.5
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 89.2
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 40.48
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 12.68
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.25,
                      relativeCorsiForPercentage: -0.38,
                      fenwickForPercentage: 0.33,
                      relativeFenwickForPercentage: -0.27,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.69,
                      timeOnIce: 381.2,
                      distanceTravelled: 1358.35,
                      averageSpeedWithPuck: 4.52,
                      accelerations: 18,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 54.46
                    },
                    passStatistics: {
                      successfulPasses: 4,
                      allPasses: 6,
                      receivedPasses: 4,
                      totalPassDistance: 48.38,
                      forwardPassDistance: 25.06
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 14.78,
                      puckControlDistance: 66.83,
                      puckControlForwardDistance: 28.41
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 34.78
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 84.92
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 128.42
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 90.42
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 35.86
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 6.8
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 7,
                      corsiForPercentage: 0.3,
                      relativeCorsiForPercentage: -0.15,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: -0.03,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.07,
                      timeOnIce: 506.5,
                      distanceTravelled: 1677.31,
                      averageSpeedWithPuck: 4.42,
                      accelerations: 29,
                      decelerations: 24
                    },
                    shiftStatisticsSummary: {
                      shifts: 10,
                      averageShiftDuration: 50.65
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 7,
                      receivedPasses: 2,
                      totalPassDistance: 96.4,
                      forwardPassDistance: 27.1
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 14.48,
                      puckControlDistance: 64.06,
                      puckControlForwardDistance: 16.24
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 2,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 79.6
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 124.06
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 141.1
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 106.16
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 46.78
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 8.8
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 10,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.5,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.56,
                      pdo: 0.86,
                      fullStrengthSavePercentage: 0.86,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1542',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.6,
                  timeOnIce: 858.78,
                  distanceTravelled: 3132.15,
                  averageSpeedWithPuck: 5.07,
                  accelerations: 59,
                  decelerations: 47
                },
                shiftStatisticsSummary: {
                  shifts: 23,
                  averageShiftDuration: 37.34
                },
                passStatistics: {
                  successfulPasses: 5,
                  allPasses: 12,
                  receivedPasses: 8,
                  totalPassDistance: 54.17,
                  forwardPassDistance: 6.31
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 3,
                  total: -3
                },
                puckControlStatistics: {
                  puckControlTime: 19.86,
                  puckControlDistance: 100.61,
                  puckControlForwardDistance: 82.92
                },
                puckContestStatistics: {
                  puckContestsWon: 1,
                  puckContestsLost: 0,
                  puckContestParticipations: 1
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 113.28
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 207.5
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 207.38
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 179.76
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 99.52
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 51.34
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 1,
                  blockedShots: 3
                },
                traditionalStatistics: {
                  corsiFor: 6,
                  corsiAgainst: 13,
                  corsiForPercentage: 0.32,
                  relativeCorsiForPercentage: -0.13,
                  fenwickForPercentage: 0.33,
                  relativeFenwickForPercentage: -0.18,
                  pdo: 0.75,
                  fullStrengthSavePercentage: 0.75,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.84,
                      timeOnIce: 200.8,
                      distanceTravelled: 783.01,
                      averageSpeedWithPuck: 3.94,
                      accelerations: 18,
                      decelerations: 13
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 25.1
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 3,
                      receivedPasses: 3,
                      totalPassDistance: 3.62,
                      forwardPassDistance: 3.24
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 6.14,
                      puckControlDistance: 24.21,
                      puckControlForwardDistance: 19.55
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 26.12
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 40.9
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 45.66
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 40.24
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 31.78
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 16.1
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 5,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.71,
                      relativeCorsiForPercentage: 0.21,
                      fenwickForPercentage: 0.67,
                      relativeFenwickForPercentage: 0.17,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.6,
                      timeOnIce: 345.3,
                      distanceTravelled: 1283.66,
                      averageSpeedWithPuck: 5.96,
                      accelerations: 25,
                      decelerations: 16
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 49.33
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 4,
                      receivedPasses: 3,
                      totalPassDistance: 11.84,
                      forwardPassDistance: 3.07
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 4.46,
                      puckControlDistance: 26.6,
                      puckControlForwardDistance: 23.49
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 37.68
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 88.5
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 83.88
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 73.4
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 39.34
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 22.5
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 2
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 9,
                      corsiForPercentage: 0.1,
                      relativeCorsiForPercentage: -0.45,
                      fenwickForPercentage: 0.12,
                      relativeFenwickForPercentage: -0.64,
                      pdo: 0.83,
                      fullStrengthSavePercentage: 0.83,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.29,
                      timeOnIce: 312.68,
                      distanceTravelled: 1065.48,
                      averageSpeedWithPuck: 5.38,
                      accelerations: 16,
                      decelerations: 18
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 39.08
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 5,
                      receivedPasses: 2,
                      totalPassDistance: 38.72,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 2,
                      total: -2
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.26,
                      puckControlDistance: 49.79,
                      puckControlForwardDistance: 39.88
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 0,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 49.48
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 78.1
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 77.84
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 66.12
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 28.4
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 12.74
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 2,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.3,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.31,
                      pdo: 0,
                      fullStrengthSavePercentage: 0,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1677',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.32,
                  timeOnIce: 654.46,
                  distanceTravelled: 2235.81,
                  averageSpeedWithPuck: 3.75,
                  accelerations: 44,
                  decelerations: 37
                },
                shiftStatisticsSummary: {
                  shifts: 13,
                  averageShiftDuration: 50.34
                },
                passStatistics: {
                  successfulPasses: 8,
                  allPasses: 11,
                  receivedPasses: 8,
                  totalPassDistance: 51.75,
                  forwardPassDistance: 1.69
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 0,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 10.64,
                  puckControlDistance: 39.91,
                  puckControlForwardDistance: 22.44
                },
                puckContestStatistics: {
                  puckContestsWon: 5,
                  puckContestsLost: 5,
                  puckContestParticipations: 10
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 100.12
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 166.46
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 157.06
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 144.08
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 66.38
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 20.36
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 1,
                  blockedShots: 1
                },
                traditionalStatistics: {
                  corsiFor: 4,
                  corsiAgainst: 10,
                  corsiForPercentage: 0.29,
                  relativeCorsiForPercentage: -0.16,
                  fenwickForPercentage: 0.29,
                  relativeFenwickForPercentage: -0.2,
                  pdo: 1,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.32,
                      timeOnIce: 186.42,
                      distanceTravelled: 574.97,
                      averageSpeedWithPuck: 3.09,
                      accelerations: 7,
                      decelerations: 7
                    },
                    shiftStatisticsSummary: {
                      shifts: 3,
                      averageShiftDuration: 62.14
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 2,
                      receivedPasses: 1,
                      totalPassDistance: 12.77,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 2.16,
                      puckControlDistance: 6.67,
                      puckControlForwardDistance: 0.99
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 2,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 37.68
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 50.86
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 44.86
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 33.22
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 16.2
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 3.6
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.25,
                      relativeCorsiForPercentage: -0.38,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.59,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8,
                      timeOnIce: 251.08,
                      distanceTravelled: 932.51,
                      averageSpeedWithPuck: 4.26,
                      accelerations: 24,
                      decelerations: 21
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 35.87
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 7,
                      receivedPasses: 7,
                      totalPassDistance: 38.97,
                      forwardPassDistance: 1.69
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 6.74,
                      puckControlDistance: 28.72,
                      puckControlForwardDistance: 19.45
                    },
                    puckContestStatistics: {
                      puckContestsWon: 4,
                      puckContestsLost: 1,
                      puckContestParticipations: 5
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 34.12
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 52
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 59.4
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 61.12
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 32.54
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 11.9
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 2,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.4,
                      relativeCorsiForPercentage: 0,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: -0.03,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.11,
                      timeOnIce: 216.96,
                      distanceTravelled: 728.33,
                      averageSpeedWithPuck: 2.6,
                      accelerations: 13,
                      decelerations: 9
                    },
                    shiftStatisticsSummary: {
                      shifts: 3,
                      averageShiftDuration: 72.32
                    },
                    passStatistics: {
                      successfulPasses: 0,
                      allPasses: 2,
                      receivedPasses: 0,
                      totalPassDistance: 0,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 1.74,
                      puckControlDistance: 4.52,
                      puckControlForwardDistance: 2
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 2,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 28.32
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 63.6
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 52.8
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 49.74
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 17.64
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 4.86
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.2,
                      relativeCorsiForPercentage: -0.09,
                      fenwickForPercentage: 0.25,
                      relativeFenwickForPercentage: -0.06,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1694',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.68,
                  timeOnIce: 390.54,
                  distanceTravelled: 1447.46,
                  averageSpeedWithPuck: 3.4,
                  accelerations: 34,
                  decelerations: 25
                },
                shiftStatisticsSummary: {
                  shifts: 12,
                  averageShiftDuration: 32.55
                },
                passStatistics: {
                  successfulPasses: 6,
                  allPasses: 9,
                  receivedPasses: 8,
                  totalPassDistance: 67.5,
                  forwardPassDistance: 28.01
                },
                plusMinusStatistics: {
                  plus: 2,
                  minus: 0,
                  total: 2
                },
                puckControlStatistics: {
                  puckControlTime: 13.68,
                  puckControlDistance: 46.46,
                  puckControlForwardDistance: 3.59
                },
                puckContestStatistics: {
                  puckContestsWon: 3,
                  puckContestsLost: 1,
                  puckContestParticipations: 4
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 37.06
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 90.1
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 103.9
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 100.66
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 49.58
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 9.24
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 11,
                  corsiAgainst: 5,
                  corsiForPercentage: 0.69,
                  relativeCorsiForPercentage: 0.35,
                  fenwickForPercentage: 0.67,
                  relativeFenwickForPercentage: 0.28,
                  pdo: 1.29,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0.29
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 6.65,
                      timeOnIce: 123.9,
                      distanceTravelled: 455,
                      averageSpeedWithPuck: 1.82,
                      accelerations: 10,
                      decelerations: 9
                    },
                    shiftStatisticsSummary: {
                      shifts: 4,
                      averageShiftDuration: 30.98
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 2,
                      receivedPasses: 2,
                      totalPassDistance: 22.44,
                      forwardPassDistance: 0.18
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 2.6,
                      puckControlDistance: 4.74,
                      puckControlForwardDistance: 1.07
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 0,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 14.08
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 27.6
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 29.52
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 34.72
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 15.68
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 2.3
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: -0.09,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: -0.08,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.28,
                      timeOnIce: 143.82,
                      distanceTravelled: 572.48,
                      averageSpeedWithPuck: 3.7,
                      accelerations: 14,
                      decelerations: 8
                    },
                    shiftStatisticsSummary: {
                      shifts: 4,
                      averageShiftDuration: 35.96
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 4,
                      receivedPasses: 4,
                      totalPassDistance: 22.08,
                      forwardPassDistance: 8.64
                    },
                    plusMinusStatistics: {
                      plus: 2,
                      minus: 0,
                      total: 2
                    },
                    puckControlStatistics: {
                      puckControlTime: 7.92,
                      puckControlDistance: 29.28,
                      puckControlForwardDistance: 2.46
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 10.22
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 28.92
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 37.52
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 36.38
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 27.56
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 3.22
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.67,
                      relativeCorsiForPercentage: 0.33,
                      fenwickForPercentage: 0.67,
                      relativeFenwickForPercentage: 0.2,
                      pdo: 2,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 1
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.68,
                      timeOnIce: 122.82,
                      distanceTravelled: 419.98,
                      averageSpeedWithPuck: 3.94,
                      accelerations: 10,
                      decelerations: 8
                    },
                    shiftStatisticsSummary: {
                      shifts: 4,
                      averageShiftDuration: 30.7
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 3,
                      receivedPasses: 2,
                      totalPassDistance: 22.98,
                      forwardPassDistance: 19.18
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 3.16,
                      puckControlDistance: 12.45,
                      puckControlForwardDistance: 0.06
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 0,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 12.76
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 33.58
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 36.86
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 29.56
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 6.34
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 3.72
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 4,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.89,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.86,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '1882',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.02,
                  timeOnIce: 1039.22,
                  distanceTravelled: 4303.25,
                  averageSpeedWithPuck: 4.12,
                  accelerations: 65,
                  decelerations: 45
                },
                shiftStatisticsSummary: {
                  shifts: 25,
                  averageShiftDuration: 41.57
                },
                passStatistics: {
                  successfulPasses: 14,
                  allPasses: 23,
                  receivedPasses: 7,
                  totalPassDistance: 99.71,
                  forwardPassDistance: 21.08
                },
                plusMinusStatistics: {
                  plus: 2,
                  minus: 2,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 19.12,
                  puckControlDistance: 78.83,
                  puckControlForwardDistance: 29.83
                },
                puckContestStatistics: {
                  puckContestsWon: 4,
                  puckContestsLost: 9,
                  puckContestParticipations: 13
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 102.26
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 157.36
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 230.86
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 285.68
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 208.32
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 54.74
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 13,
                  corsiAgainst: 12,
                  corsiForPercentage: 0.52,
                  relativeCorsiForPercentage: 0.16,
                  fenwickForPercentage: 0.52,
                  relativeFenwickForPercentage: 0.1,
                  pdo: 1,
                  fullStrengthSavePercentage: 0.78,
                  fullStrengthShootingPercentage: 0.22
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.09,
                      timeOnIce: 363.98,
                      distanceTravelled: 1535.39,
                      averageSpeedWithPuck: 3.62,
                      accelerations: 13,
                      decelerations: 13
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 45.5
                    },
                    passStatistics: {
                      successfulPasses: 4,
                      allPasses: 5,
                      receivedPasses: 1,
                      totalPassDistance: 34.5,
                      forwardPassDistance: 1.01
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 2.26,
                      puckControlDistance: 8.19,
                      puckControlForwardDistance: 0.85
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 2,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 37.58
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 53.96
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 79.32
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 94.56
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 67.94
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 30.62
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 0,
                      corsiForPercentage: 1,
                      relativeCorsiForPercentage: 0.59,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.62,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.02,
                      timeOnIce: 372.04,
                      distanceTravelled: 1524.81,
                      averageSpeedWithPuck: 4.12,
                      accelerations: 27,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 46.51
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 9,
                      receivedPasses: 3,
                      totalPassDistance: 39.98,
                      forwardPassDistance: 13.87
                    },
                    plusMinusStatistics: {
                      plus: 2,
                      minus: 1,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 7.7,
                      puckControlDistance: 31.72,
                      puckControlForwardDistance: 7.26
                    },
                    puckContestStatistics: {
                      puckContestsWon: 3,
                      puckContestsLost: 4,
                      puckContestParticipations: 7
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 36.48
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 58.72
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 81.34
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 103.12
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 77.48
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 14.9
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 6,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: 0.17,
                      fenwickForPercentage: 0.55,
                      relativeFenwickForPercentage: 0.05,
                      pdo: 1.25,
                      fullStrengthSavePercentage: 0.75,
                      fullStrengthShootingPercentage: 0.5
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.43,
                      timeOnIce: 303.2,
                      distanceTravelled: 1243.05,
                      averageSpeedWithPuck: 4.25,
                      accelerations: 25,
                      decelerations: 12
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 33.69
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 9,
                      receivedPasses: 3,
                      totalPassDistance: 25.23,
                      forwardPassDistance: 6.21
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.16,
                      puckControlDistance: 38.93,
                      puckControlForwardDistance: 21.72
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 3,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 28.2
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 44.68
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 70.2
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 88
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 62.9
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 9.22
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 6,
                      corsiForPercentage: 0.14,
                      relativeCorsiForPercentage: -0.19,
                      fenwickForPercentage: 0.14,
                      relativeFenwickForPercentage: -0.26,
                      pdo: 0.8,
                      fullStrengthSavePercentage: 0.8,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '2112',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.71,
                  timeOnIce: 1239.24,
                  distanceTravelled: 4378.12,
                  averageSpeedWithPuck: 3.65,
                  accelerations: 79,
                  decelerations: 53
                },
                shiftStatisticsSummary: {
                  shifts: 30,
                  averageShiftDuration: 41.31
                },
                passStatistics: {
                  successfulPasses: 35,
                  allPasses: 41,
                  receivedPasses: 38,
                  totalPassDistance: 483.41,
                  forwardPassDistance: 208.34
                },
                plusMinusStatistics: {
                  plus: 2,
                  minus: 1,
                  total: 1
                },
                puckControlStatistics: {
                  puckControlTime: 83.38,
                  puckControlDistance: 304.28,
                  puckControlForwardDistance: 120.16
                },
                puckContestStatistics: {
                  puckContestsWon: 4,
                  puckContestsLost: 4,
                  puckContestParticipations: 8
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 194.18
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 249.18
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 311.94
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 296.44
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 156.44
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 31.06
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 9,
                  corsiAgainst: 17,
                  corsiForPercentage: 0.35,
                  relativeCorsiForPercentage: -0.1,
                  fenwickForPercentage: 0.42,
                  relativeFenwickForPercentage: -0.07,
                  pdo: 1.15,
                  fullStrengthSavePercentage: 0.9,
                  fullStrengthShootingPercentage: 0.25
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.47,
                      timeOnIce: 496.1,
                      distanceTravelled: 1807.81,
                      averageSpeedWithPuck: 3.9,
                      accelerations: 26,
                      decelerations: 22
                    },
                    shiftStatisticsSummary: {
                      shifts: 11,
                      averageShiftDuration: 45.1
                    },
                    passStatistics: {
                      successfulPasses: 19,
                      allPasses: 22,
                      receivedPasses: 16,
                      totalPassDistance: 253.03,
                      forwardPassDistance: 85.49
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 49.38,
                      puckControlDistance: 192.59,
                      puckControlForwardDistance: 83.41
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 1,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 73.14
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 94.76
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 120.98
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 122.34
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 73.42
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 11.46
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.6,
                      relativeCorsiForPercentage: 0.06,
                      fenwickForPercentage: 0.56,
                      relativeFenwickForPercentage: 0,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.9,
                      timeOnIce: 457.36,
                      distanceTravelled: 1595.92,
                      averageSpeedWithPuck: 3.4,
                      accelerations: 27,
                      decelerations: 17
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 50.82
                    },
                    passStatistics: {
                      successfulPasses: 10,
                      allPasses: 11,
                      receivedPasses: 11,
                      totalPassDistance: 148.78,
                      forwardPassDistance: 85.75
                    },
                    plusMinusStatistics: {
                      plus: 2,
                      minus: 1,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 24.6,
                      puckControlDistance: 83.58,
                      puckControlForwardDistance: 26.42
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 3,
                      puckContestParticipations: 5
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 68.86
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 95.46
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 122.8
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 106.8
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 51.2
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 12.24
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 2,
                      corsiAgainst: 9,
                      corsiForPercentage: 0.18,
                      relativeCorsiForPercentage: -0.34,
                      fenwickForPercentage: 0.29,
                      relativeFenwickForPercentage: -0.36,
                      pdo: 1.8,
                      fullStrengthSavePercentage: 0.8,
                      fullStrengthShootingPercentage: 1
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.71,
                      timeOnIce: 285.78,
                      distanceTravelled: 974.39,
                      averageSpeedWithPuck: 2.99,
                      accelerations: 26,
                      decelerations: 14
                    },
                    shiftStatisticsSummary: {
                      shifts: 10,
                      averageShiftDuration: 28.58
                    },
                    passStatistics: {
                      successfulPasses: 6,
                      allPasses: 8,
                      receivedPasses: 11,
                      totalPassDistance: 81.61,
                      forwardPassDistance: 37.11
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.4,
                      puckControlDistance: 28.11,
                      puckControlForwardDistance: 10.33
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 52.18
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 58.96
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 68.16
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 67.3
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 31.82
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 7.36
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.2,
                      relativeCorsiForPercentage: -0.09,
                      fenwickForPercentage: 0.33,
                      relativeFenwickForPercentage: 0.05,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '2113',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.38,
                  timeOnIce: 1136.96,
                  distanceTravelled: 4127.1,
                  averageSpeedWithPuck: 4.07,
                  accelerations: 78,
                  decelerations: 50
                },
                shiftStatisticsSummary: {
                  shifts: 30,
                  averageShiftDuration: 37.9
                },
                passStatistics: {
                  successfulPasses: 13,
                  allPasses: 18,
                  receivedPasses: 17,
                  totalPassDistance: 137.64,
                  forwardPassDistance: 64.98
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 1,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 41.04,
                  puckControlDistance: 166.85,
                  puckControlForwardDistance: 95.52
                },
                puckContestStatistics: {
                  puckContestsWon: 1,
                  puckContestsLost: 6,
                  puckContestParticipations: 7
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 162.66
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 247.62
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 264.28
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 268.66
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 144.08
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 49.66
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 1
                },
                traditionalStatistics: {
                  corsiFor: 18,
                  corsiAgainst: 8,
                  corsiForPercentage: 0.69,
                  relativeCorsiForPercentage: 0.43,
                  fenwickForPercentage: 0.7,
                  relativeFenwickForPercentage: 0.37,
                  pdo: 1.1,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0.1
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.98,
                      timeOnIce: 365.06,
                      distanceTravelled: 1388.27,
                      averageSpeedWithPuck: 4.77,
                      accelerations: 24,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 10,
                      averageShiftDuration: 36.51
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 5,
                      receivedPasses: 5,
                      totalPassDistance: 2.95,
                      forwardPassDistance: 2.95
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 13.92,
                      puckControlDistance: 66.4,
                      puckControlForwardDistance: 44.04
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 2,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 39.3
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 85.48
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 79.68
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 91.14
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 47.78
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 21.68
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 5,
                      corsiForPercentage: 0.55,
                      relativeCorsiForPercentage: -0.04,
                      fenwickForPercentage: 0.57,
                      relativeFenwickForPercentage: 0.03,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.38,
                      timeOnIce: 350.96,
                      distanceTravelled: 1268.34,
                      averageSpeedWithPuck: 3.15,
                      accelerations: 23,
                      decelerations: 12
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 39
                    },
                    passStatistics: {
                      successfulPasses: 4,
                      allPasses: 5,
                      receivedPasses: 5,
                      totalPassDistance: 45.84,
                      forwardPassDistance: 25.19
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 11.84,
                      puckControlDistance: 37.29,
                      puckControlForwardDistance: 10.45
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 46.36
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 74.9
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 87.3
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 91.1
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 41.44
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 9.86
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 7,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.78,
                      relativeCorsiForPercentage: 0.54,
                      fenwickForPercentage: 0.75,
                      relativeFenwickForPercentage: 0.37,
                      pdo: 1.25,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.25
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.12,
                      timeOnIce: 420.94,
                      distanceTravelled: 1470.49,
                      averageSpeedWithPuck: 4.13,
                      accelerations: 31,
                      decelerations: 18
                    },
                    shiftStatisticsSummary: {
                      shifts: 11,
                      averageShiftDuration: 38.27
                    },
                    passStatistics: {
                      successfulPasses: 8,
                      allPasses: 8,
                      receivedPasses: 7,
                      totalPassDistance: 88.85,
                      forwardPassDistance: 36.84
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 15.28,
                      puckControlDistance: 63.16,
                      puckControlForwardDistance: 41.03
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 4,
                      puckContestParticipations: 5
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 77
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 87.24
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 97.3
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 86.42
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 54.86
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 18.12
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 5,
                      corsiAgainst: 1,
                      corsiForPercentage: 0.83,
                      relativeCorsiForPercentage: 0.77,
                      fenwickForPercentage: 0.8,
                      relativeFenwickForPercentage: 0.72,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '2115',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.15,
                  timeOnIce: 775.72,
                  distanceTravelled: 2811.61,
                  averageSpeedWithPuck: 3.57,
                  accelerations: 62,
                  decelerations: 45
                },
                shiftStatisticsSummary: {
                  shifts: 22,
                  averageShiftDuration: 35.26
                },
                passStatistics: {
                  successfulPasses: 21,
                  allPasses: 23,
                  receivedPasses: 13,
                  totalPassDistance: 219.06,
                  forwardPassDistance: 46.18
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 2,
                  total: -1
                },
                puckControlStatistics: {
                  puckControlTime: 37.78,
                  puckControlDistance: 134.75,
                  puckControlForwardDistance: 87.74
                },
                puckContestStatistics: {
                  puckContestsWon: 1,
                  puckContestsLost: 0,
                  puckContestParticipations: 1
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 88.78
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 166.04
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 225.88
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 183.92
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 83
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 28.1
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 8,
                  corsiAgainst: 11,
                  corsiForPercentage: 0.42,
                  relativeCorsiForPercentage: 0.01,
                  fenwickForPercentage: 0.47,
                  relativeFenwickForPercentage: 0,
                  pdo: 0.83,
                  fullStrengthSavePercentage: 0.67,
                  fullStrengthShootingPercentage: 0.17
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.15,
                      timeOnIce: 285.64,
                      distanceTravelled: 1131.04,
                      averageSpeedWithPuck: 4.37,
                      accelerations: 19,
                      decelerations: 16
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 31.74
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 7,
                      receivedPasses: 4,
                      totalPassDistance: 74.29,
                      forwardPassDistance: 19.91
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 16.56,
                      puckControlDistance: 72.36,
                      puckControlForwardDistance: 45.21
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 25.52
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 46.66
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 81.3
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 77.52
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 40.84
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 13.8
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 7,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.78,
                      relativeCorsiForPercentage: 0.35,
                      fenwickForPercentage: 0.75,
                      relativeFenwickForPercentage: 0.35,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.3,
                      timeOnIce: 313.18,
                      distanceTravelled: 1089.79,
                      averageSpeedWithPuck: 2.4,
                      accelerations: 24,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 39.15
                    },
                    passStatistics: {
                      successfulPasses: 9,
                      allPasses: 10,
                      receivedPasses: 6,
                      totalPassDistance: 98.99,
                      forwardPassDistance: 25.67
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 1,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 12.62,
                      puckControlDistance: 30.31,
                      puckControlForwardDistance: 20.81
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 0,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 40.84
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 77.84
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 88.1
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 62.94
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 32.7
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 10.76
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 7,
                      corsiForPercentage: 0.12,
                      relativeCorsiForPercentage: -0.38,
                      fenwickForPercentage: 0.17,
                      relativeFenwickForPercentage: -0.5,
                      pdo: 1.8,
                      fullStrengthSavePercentage: 0.8,
                      fullStrengthShootingPercentage: 1
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.78,
                      timeOnIce: 176.9,
                      distanceTravelled: 590.78,
                      averageSpeedWithPuck: 3.73,
                      accelerations: 19,
                      decelerations: 9
                    },
                    shiftStatisticsSummary: {
                      shifts: 5,
                      averageShiftDuration: 35.38
                    },
                    passStatistics: {
                      successfulPasses: 5,
                      allPasses: 6,
                      receivedPasses: 3,
                      totalPassDistance: 45.77,
                      forwardPassDistance: 0.61
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 8.6,
                      puckControlDistance: 32.08,
                      puckControlForwardDistance: 21.73
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 22.42
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 41.54
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 56.48
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 43.46
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 9.46
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 3.54
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 2,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.3,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.31,
                      pdo: 0,
                      fullStrengthSavePercentage: 0,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '2216',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 7.49,
                  timeOnIce: 1150.74,
                  distanceTravelled: 3617.07,
                  averageSpeedWithPuck: 3.58,
                  accelerations: 71,
                  decelerations: 65
                },
                shiftStatisticsSummary: {
                  shifts: 24,
                  averageShiftDuration: 47.95
                },
                passStatistics: {
                  successfulPasses: 8,
                  allPasses: 14,
                  receivedPasses: 11,
                  totalPassDistance: 107.59,
                  forwardPassDistance: 46.63
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 2,
                  total: -2
                },
                puckControlStatistics: {
                  puckControlTime: 36.62,
                  puckControlDistance: 130.97,
                  puckControlForwardDistance: 28.18
                },
                puckContestStatistics: {
                  puckContestsWon: 2,
                  puckContestsLost: 2,
                  puckContestParticipations: 4
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 206.44
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 283.9
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 330.14
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 241.7
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 82.56
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 6
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 2
                },
                traditionalStatistics: {
                  corsiFor: 4,
                  corsiAgainst: 20,
                  corsiForPercentage: 0.17,
                  relativeCorsiForPercentage: -0.36,
                  fenwickForPercentage: 0.22,
                  relativeFenwickForPercentage: -0.36,
                  pdo: 0.8,
                  fullStrengthSavePercentage: 0.8,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.12,
                      timeOnIce: 304.06,
                      distanceTravelled: 953.91,
                      averageSpeedWithPuck: 3.11,
                      accelerations: 20,
                      decelerations: 19
                    },
                    shiftStatisticsSummary: {
                      shifts: 6,
                      averageShiftDuration: 50.68
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 3,
                      receivedPasses: 3,
                      totalPassDistance: 19.12,
                      forwardPassDistance: 17.08
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 10.82,
                      puckControlDistance: 33.62,
                      puckControlForwardDistance: 12.54
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 0,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 59.36
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 72.74
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 84.6
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 60.36
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 24.66
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 2.34
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 2
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.33,
                      relativeCorsiForPercentage: -0.27,
                      fenwickForPercentage: 0.33,
                      relativeFenwickForPercentage: -0.27,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 6.65,
                      timeOnIce: 427.28,
                      distanceTravelled: 1383.59,
                      averageSpeedWithPuck: 3.46,
                      accelerations: 24,
                      decelerations: 24
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 61.04
                    },
                    passStatistics: {
                      successfulPasses: 4,
                      allPasses: 8,
                      receivedPasses: 3,
                      totalPassDistance: 51.88,
                      forwardPassDistance: 11.23
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 9.82,
                      puckControlDistance: 34.02,
                      puckControlForwardDistance: 3.95
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 68.6
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 104.96
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 117.64
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 103.98
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 30.38
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 1.72
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 7,
                      corsiForPercentage: 0.3,
                      relativeCorsiForPercentage: -0.15,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: -0.03,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.49,
                      timeOnIce: 419.4,
                      distanceTravelled: 1279.57,
                      averageSpeedWithPuck: 3.96,
                      accelerations: 27,
                      decelerations: 22
                    },
                    shiftStatisticsSummary: {
                      shifts: 11,
                      averageShiftDuration: 38.13
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 3,
                      receivedPasses: 5,
                      totalPassDistance: 36.59,
                      forwardPassDistance: 18.32
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 2,
                      total: -2
                    },
                    puckControlStatistics: {
                      puckControlTime: 15.98,
                      puckControlDistance: 63.34,
                      puckControlForwardDistance: 11.69
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 78.48
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 106.2
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 127.9
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 77.36
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 27.52
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 1.94
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 11,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.55,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.62,
                      pdo: 0.75,
                      fullStrengthSavePercentage: 0.75,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '291',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 10.42,
                  timeOnIce: 1092,
                  distanceTravelled: 4614.29,
                  averageSpeedWithPuck: 4.84,
                  accelerations: 82,
                  decelerations: 67
                },
                shiftStatisticsSummary: {
                  shifts: 24,
                  averageShiftDuration: 45.5
                },
                passStatistics: {
                  successfulPasses: 10,
                  allPasses: 15,
                  receivedPasses: 11,
                  totalPassDistance: 97.9,
                  forwardPassDistance: 19.96
                },
                plusMinusStatistics: {
                  plus: 2,
                  minus: 1,
                  total: 1
                },
                puckControlStatistics: {
                  puckControlTime: 37.32,
                  puckControlDistance: 180.65,
                  puckControlForwardDistance: 135.54
                },
                puckContestStatistics: {
                  puckContestsWon: 2,
                  puckContestsLost: 3,
                  puckContestParticipations: 5
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 102.72
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 151.12
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 244.4
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 307.46
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 232.4
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 53.9
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 2,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 14,
                  corsiAgainst: 10,
                  corsiForPercentage: 0.58,
                  relativeCorsiForPercentage: 0.25,
                  fenwickForPercentage: 0.59,
                  relativeFenwickForPercentage: 0.21,
                  pdo: 1.03,
                  fullStrengthSavePercentage: 0.83,
                  fullStrengthShootingPercentage: 0.2
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.07,
                      timeOnIce: 411.56,
                      distanceTravelled: 1731.27,
                      averageSpeedWithPuck: 4.27,
                      accelerations: 28,
                      decelerations: 24
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 51.44
                    },
                    passStatistics: {
                      successfulPasses: 6,
                      allPasses: 7,
                      receivedPasses: 4,
                      totalPassDistance: 52.32,
                      forwardPassDistance: 7.86
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 13.28,
                      puckControlDistance: 56.76,
                      puckControlForwardDistance: 37.95
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 35.3
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 60.76
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 93.22
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 117.34
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 88.06
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 16.88
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 1,
                      corsiForPercentage: 0.86,
                      relativeCorsiForPercentage: 0.42,
                      fenwickForPercentage: 0.83,
                      relativeFenwickForPercentage: 0.42,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.44,
                      timeOnIce: 314.64,
                      distanceTravelled: 1305.96,
                      averageSpeedWithPuck: 4.35,
                      accelerations: 29,
                      decelerations: 20
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 39.33
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 3,
                      receivedPasses: 3,
                      totalPassDistance: 14.43,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 2,
                      minus: 0,
                      total: 2
                    },
                    puckControlStatistics: {
                      puckControlTime: 4.98,
                      puckControlDistance: 21.68,
                      puckControlForwardDistance: 20.31
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 28.5
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 43.1
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 72.24
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 99.7
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 59.54
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 11.56
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 2,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 6,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.67,
                      relativeCorsiForPercentage: 0.38,
                      fenwickForPercentage: 0.75,
                      relativeFenwickForPercentage: 0.37,
                      pdo: 1.5,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.5
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 10.42,
                      timeOnIce: 365.8,
                      distanceTravelled: 1577.06,
                      averageSpeedWithPuck: 5.36,
                      accelerations: 25,
                      decelerations: 23
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 45.73
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 5,
                      receivedPasses: 4,
                      totalPassDistance: 31.14,
                      forwardPassDistance: 12.1
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 19.06,
                      puckControlDistance: 102.21,
                      puckControlForwardDistance: 77.27
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 2,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 38.92
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 47.26
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 78.94
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 90.42
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 84.8
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 25.46
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 2,
                      corsiAgainst: 6,
                      corsiForPercentage: 0.25,
                      relativeCorsiForPercentage: -0.04,
                      fenwickForPercentage: 0.25,
                      relativeFenwickForPercentage: -0.08,
                      pdo: 0.8,
                      fullStrengthSavePercentage: 0.8,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '488',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 8.42,
                  timeOnIce: 705.86,
                  distanceTravelled: 2814.16,
                  averageSpeedWithPuck: 3.31,
                  accelerations: 50,
                  decelerations: 43
                },
                shiftStatisticsSummary: {
                  shifts: 16,
                  averageShiftDuration: 44.12
                },
                passStatistics: {
                  successfulPasses: 3,
                  allPasses: 3,
                  receivedPasses: 6,
                  totalPassDistance: 22.19,
                  forwardPassDistance: 7.57
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 0,
                  total: 0
                },
                puckControlStatistics: {
                  puckControlTime: 5.02,
                  puckControlDistance: 16.63,
                  puckControlForwardDistance: 4.98
                },
                puckContestStatistics: {
                  puckContestsWon: 1,
                  puckContestsLost: 3,
                  puckContestParticipations: 4
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 77.78
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 138.68
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 160.68
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 158.22
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 121.28
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 49.22
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 0
                },
                traditionalStatistics: {
                  corsiFor: 6,
                  corsiAgainst: 11,
                  corsiForPercentage: 0.35,
                  relativeCorsiForPercentage: -0.08,
                  fenwickForPercentage: 0.4,
                  relativeFenwickForPercentage: -0.08,
                  pdo: 1,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.11,
                      timeOnIce: 108.58,
                      distanceTravelled: 429.23,
                      averageSpeedWithPuck: 3.36,
                      accelerations: 12,
                      decelerations: 8
                    },
                    shiftStatisticsSummary: {
                      shifts: 3,
                      averageShiftDuration: 36.19
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 2,
                      receivedPasses: 0,
                      totalPassDistance: 17.28,
                      forwardPassDistance: 3.76
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 1.48,
                      puckControlDistance: 4.97,
                      puckControlForwardDistance: 1.32
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 17.94
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 17.78
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 16.22
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 26.96
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 24.06
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 5.62
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 2,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: -0.08,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: -0.06,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.42,
                      timeOnIce: 264.84,
                      distanceTravelled: 1157.49,
                      averageSpeedWithPuck: 3.17,
                      accelerations: 18,
                      decelerations: 18
                    },
                    shiftStatisticsSummary: {
                      shifts: 7,
                      averageShiftDuration: 37.83
                    },
                    passStatistics: {
                      successfulPasses: 1,
                      allPasses: 1,
                      receivedPasses: 6,
                      totalPassDistance: 4.91,
                      forwardPassDistance: 3.81
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 3.08,
                      puckControlDistance: 9.77,
                      puckControlForwardDistance: 2.9
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 1,
                      puckContestParticipations: 2
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 20.48
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 47.56
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 54.26
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 58.4
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 53.98
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 30.16
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 3,
                      corsiAgainst: 5,
                      corsiForPercentage: 0.38,
                      relativeCorsiForPercentage: -0.03,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: -0.03,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.72,
                      timeOnIce: 332.44,
                      distanceTravelled: 1227.44,
                      averageSpeedWithPuck: 4.11,
                      accelerations: 20,
                      decelerations: 17
                    },
                    shiftStatisticsSummary: {
                      shifts: 6,
                      averageShiftDuration: 55.41
                    },
                    passStatistics: {
                      successfulPasses: 0,
                      allPasses: 0,
                      receivedPasses: 0,
                      totalPassDistance: 0,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 0.46,
                      puckControlDistance: 1.89,
                      puckControlForwardDistance: 0.76
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 1,
                      puckContestParticipations: 1
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 39.36
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 73.34
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 90.2
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 72.86
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 43.24
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 13.44
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.2,
                      relativeCorsiForPercentage: -0.09,
                      fenwickForPercentage: 0.25,
                      relativeFenwickForPercentage: -0.06,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '555',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.57,
                  timeOnIce: 708.88,
                  distanceTravelled: 3044.36,
                  averageSpeedWithPuck: 4.22,
                  accelerations: 56,
                  decelerations: 48
                },
                shiftStatisticsSummary: {
                  shifts: 20,
                  averageShiftDuration: 35.44
                },
                passStatistics: {
                  successfulPasses: 8,
                  allPasses: 14,
                  receivedPasses: 7,
                  totalPassDistance: 58.06,
                  forwardPassDistance: 9.68
                },
                plusMinusStatistics: {
                  plus: 0,
                  minus: 1,
                  total: -1
                },
                puckControlStatistics: {
                  puckControlTime: 14.46,
                  puckControlDistance: 61.05,
                  puckControlForwardDistance: 32.23
                },
                puckContestStatistics: {
                  puckContestsWon: 6,
                  puckContestsLost: 3,
                  puckContestParticipations: 9
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 95.02
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 96.48
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 119.48
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 176.6
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 154.6
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 66.7
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 0,
                  blockedShots: 1
                },
                traditionalStatistics: {
                  corsiFor: 6,
                  corsiAgainst: 11,
                  corsiForPercentage: 0.35,
                  relativeCorsiForPercentage: -0.08,
                  fenwickForPercentage: 0.38,
                  relativeFenwickForPercentage: -0.1,
                  pdo: 0.8,
                  fullStrengthSavePercentage: 0.8,
                  fullStrengthShootingPercentage: 0
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.93,
                      timeOnIce: 271.54,
                      distanceTravelled: 1215.82,
                      averageSpeedWithPuck: 3.97,
                      accelerations: 20,
                      decelerations: 17
                    },
                    shiftStatisticsSummary: {
                      shifts: 9,
                      averageShiftDuration: 30.17
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 7,
                      receivedPasses: 4,
                      totalPassDistance: 13.04,
                      forwardPassDistance: 0.68
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 8.68,
                      puckControlDistance: 34.49,
                      puckControlForwardDistance: 17.56
                    },
                    puckContestStatistics: {
                      puckContestsWon: 4,
                      puckContestsLost: 2,
                      puckContestParticipations: 6
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 37.68
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 29.5
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 48.32
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 60.5
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 63.16
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 32.38
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 5,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.62,
                      relativeCorsiForPercentage: 0.09,
                      fenwickForPercentage: 0.57,
                      relativeFenwickForPercentage: 0.03,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.57,
                      timeOnIce: 275.58,
                      distanceTravelled: 1109.85,
                      averageSpeedWithPuck: 4.53,
                      accelerations: 21,
                      decelerations: 21
                    },
                    shiftStatisticsSummary: {
                      shifts: 6,
                      averageShiftDuration: 45.93
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 5,
                      receivedPasses: 1,
                      totalPassDistance: 23.87,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 5.38,
                      puckControlDistance: 24.35,
                      puckControlForwardDistance: 14.59
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 1,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 44.34
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 47.96
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 43
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 64.5
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 47.86
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 27.92
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 1
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 6,
                      corsiForPercentage: 0.14,
                      relativeCorsiForPercentage: -0.34,
                      fenwickForPercentage: 0.2,
                      relativeFenwickForPercentage: -0.43,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 7.52,
                      timeOnIce: 161.76,
                      distanceTravelled: 718.68,
                      averageSpeedWithPuck: 5.54,
                      accelerations: 15,
                      decelerations: 10
                    },
                    shiftStatisticsSummary: {
                      shifts: 5,
                      averageShiftDuration: 32.35
                    },
                    passStatistics: {
                      successfulPasses: 2,
                      allPasses: 2,
                      receivedPasses: 2,
                      totalPassDistance: 21.14,
                      forwardPassDistance: 9
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 1,
                      total: -1
                    },
                    puckControlStatistics: {
                      puckControlTime: 0.4,
                      puckControlDistance: 2.21,
                      puckControlForwardDistance: 0.08
                    },
                    puckContestStatistics: {
                      puckContestsWon: 0,
                      puckContestsLost: 0,
                      puckContestParticipations: 0
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 13
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 19.02
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 28.16
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 51.6
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 43.58
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 6.4
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 0,
                      corsiAgainst: 2,
                      corsiForPercentage: 0,
                      relativeCorsiForPercentage: -0.3,
                      fenwickForPercentage: 0,
                      relativeFenwickForPercentage: -0.31,
                      pdo: 0,
                      fullStrengthSavePercentage: 0,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            },
            {
              player: '648',
              team: 'Away',
              totalStatistics: {
                skatingStatistics: {
                  topSpeed: 9.21,
                  timeOnIce: 953.52,
                  distanceTravelled: 3612.4,
                  averageSpeedWithPuck: 4.81,
                  accelerations: 67,
                  decelerations: 47
                },
                shiftStatisticsSummary: {
                  shifts: 21,
                  averageShiftDuration: 45.41
                },
                passStatistics: {
                  successfulPasses: 14,
                  allPasses: 24,
                  receivedPasses: 12,
                  totalPassDistance: 94.62,
                  forwardPassDistance: 11.87
                },
                plusMinusStatistics: {
                  plus: 1,
                  minus: 0,
                  total: 1
                },
                puckControlStatistics: {
                  puckControlTime: 17.18,
                  puckControlDistance: 82.6,
                  puckControlForwardDistance: 55.56
                },
                puckContestStatistics: {
                  puckContestsWon: 7,
                  puckContestsLost: 7,
                  puckContestParticipations: 14
                },
                speedZoneStatistics: [
                  {
                    minSpeed: 0,
                    maxSpeed: 5,
                    secondsInZone: 146.76
                  },
                  {
                    minSpeed: 5,
                    maxSpeed: 10,
                    secondsInZone: 162.66
                  },
                  {
                    minSpeed: 10,
                    maxSpeed: 15,
                    secondsInZone: 212.24
                  },
                  {
                    minSpeed: 15,
                    maxSpeed: 20,
                    secondsInZone: 238.3
                  },
                  {
                    minSpeed: 20,
                    maxSpeed: 25,
                    secondsInZone: 146.38
                  },
                  {
                    minSpeed: 25,
                    maxSpeed: null,
                    secondsInZone: 47.18
                  }
                ],
                shotScreenStatistics: {
                  offensiveScreens: 3,
                  blockedShots: 4
                },
                traditionalStatistics: {
                  corsiFor: 5,
                  corsiAgainst: 9,
                  corsiForPercentage: 0.36,
                  relativeCorsiForPercentage: -0.07,
                  fenwickForPercentage: 0.45,
                  relativeFenwickForPercentage: -0.01,
                  pdo: 1.25,
                  fullStrengthSavePercentage: 1,
                  fullStrengthShootingPercentage: 0.25
                }
              },
              periodStatistics: [
                {
                  period: 1,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.27,
                      timeOnIce: 325.26,
                      distanceTravelled: 1310.39,
                      averageSpeedWithPuck: 5.53,
                      accelerations: 28,
                      decelerations: 22
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 40.66
                    },
                    passStatistics: {
                      successfulPasses: 3,
                      allPasses: 7,
                      receivedPasses: 5,
                      totalPassDistance: 18.23,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 7.5,
                      puckControlDistance: 41.44,
                      puckControlForwardDistance: 23.42
                    },
                    puckContestStatistics: {
                      puckContestsWon: 2,
                      puckContestsLost: 1,
                      puckContestParticipations: 3
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 35.58
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 50.18
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 79.5
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 87.34
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 51.44
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 21.22
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 1,
                      blockedShots: 0
                    },
                    traditionalStatistics: {
                      corsiFor: 1,
                      corsiAgainst: 4,
                      corsiForPercentage: 0.2,
                      relativeCorsiForPercentage: -0.47,
                      fenwickForPercentage: 0.2,
                      relativeFenwickForPercentage: -0.49,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                },
                {
                  period: 2,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 8.54,
                      timeOnIce: 251.56,
                      distanceTravelled: 989.01,
                      averageSpeedWithPuck: 2.81,
                      accelerations: 16,
                      decelerations: 15
                    },
                    shiftStatisticsSummary: {
                      shifts: 5,
                      averageShiftDuration: 50.31
                    },
                    passStatistics: {
                      successfulPasses: 4,
                      allPasses: 5,
                      receivedPasses: 2,
                      totalPassDistance: 19.56,
                      forwardPassDistance: 0
                    },
                    plusMinusStatistics: {
                      plus: 1,
                      minus: 0,
                      total: 1
                    },
                    puckControlStatistics: {
                      puckControlTime: 4.64,
                      puckControlDistance: 13.06,
                      puckControlForwardDistance: 6.45
                    },
                    puckContestStatistics: {
                      puckContestsWon: 1,
                      puckContestsLost: 3,
                      puckContestParticipations: 4
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 35.7
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 37.88
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 52.16
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 70.48
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 44.16
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 11.18
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 2,
                      blockedShots: 2
                    },
                    traditionalStatistics: {
                      corsiFor: 2,
                      corsiAgainst: 2,
                      corsiForPercentage: 0.5,
                      relativeCorsiForPercentage: 0.12,
                      fenwickForPercentage: 1,
                      relativeFenwickForPercentage: 0.53,
                      pdo: 1.5,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0.5
                    }
                  }
                },
                {
                  period: 3,
                  statistics: {
                    skatingStatistics: {
                      topSpeed: 9.21,
                      timeOnIce: 376.7,
                      distanceTravelled: 1312.99,
                      averageSpeedWithPuck: 5.58,
                      accelerations: 23,
                      decelerations: 10
                    },
                    shiftStatisticsSummary: {
                      shifts: 8,
                      averageShiftDuration: 47.09
                    },
                    passStatistics: {
                      successfulPasses: 7,
                      allPasses: 12,
                      receivedPasses: 5,
                      totalPassDistance: 56.83,
                      forwardPassDistance: 11.87
                    },
                    plusMinusStatistics: {
                      plus: 0,
                      minus: 0,
                      total: 0
                    },
                    puckControlStatistics: {
                      puckControlTime: 5.04,
                      puckControlDistance: 28.11,
                      puckControlForwardDistance: 25.7
                    },
                    puckContestStatistics: {
                      puckContestsWon: 4,
                      puckContestsLost: 3,
                      puckContestParticipations: 7
                    },
                    speedZoneStatistics: [
                      {
                        minSpeed: 0,
                        maxSpeed: 5,
                        secondsInZone: 75.48
                      },
                      {
                        minSpeed: 5,
                        maxSpeed: 10,
                        secondsInZone: 74.6
                      },
                      {
                        minSpeed: 10,
                        maxSpeed: 15,
                        secondsInZone: 80.58
                      },
                      {
                        minSpeed: 15,
                        maxSpeed: 20,
                        secondsInZone: 80.48
                      },
                      {
                        minSpeed: 20,
                        maxSpeed: 25,
                        secondsInZone: 50.78
                      },
                      {
                        minSpeed: 25,
                        maxSpeed: null,
                        secondsInZone: 14.78
                      }
                    ],
                    shotScreenStatistics: {
                      offensiveScreens: 0,
                      blockedShots: 2
                    },
                    traditionalStatistics: {
                      corsiFor: 2,
                      corsiAgainst: 3,
                      corsiForPercentage: 0.4,
                      relativeCorsiForPercentage: 0.16,
                      fenwickForPercentage: 0.5,
                      relativeFenwickForPercentage: 0.27,
                      pdo: 1,
                      fullStrengthSavePercentage: 1,
                      fullStrengthShootingPercentage: 0
                    }
                  }
                }
              ]
            }
          ],
          dataRestrictions: []
        },
        teamstatistics: {
          homeTeamStatistics: {
            totalStatistics: {
              skatingStatistics: {
                distanceTravelled: 69739.12,
                distanceTravelledWithPuck: 3676.6,
                forwardDistanceTravelledWithPuck: 1859.81,
                accelerations: 1097,
                highAccelerations: 90,
                decelerations: 909
              },
              shotStatistics: {
                shots: 63,
                shotsOnGoal: 33,
                shotsWithScreen: 28,
                goals: 4,
                saves: 24,
                expectedGoalsSum: 3.53
              },
              passStatistics: {
                successfulPasses: 302,
                allPasses: 417,
                totalPassDistance: 3347.17,
                forwardPassDistance: 1121.96
              },
              puckContestStatistics: {
                puckContestsWon: 55,
                puckContestsLost: 40,
                totalPuckContests: 95
              },
              faceoffStatistics: {
                faceoffWins: 34,
                faceoffCount: 60
              },
              traditionalStatistics: {
                corsiFor: 44,
                corsiAgainst: 31,
                corsiForPercentage: 0.59,
                fenwickFor: 30,
                fenwickAgainst: 26,
                fenwickForPercentage: 0.54,
                pdo: 0.98
              },
              speedZoneStatistics: [
                {
                  minSpeed: 0,
                  maxSpeed: 5,
                  secondsInZone: 2105.04
                },
                {
                  minSpeed: 5,
                  maxSpeed: 10,
                  secondsInZone: 3137.56
                },
                {
                  minSpeed: 10,
                  maxSpeed: 15,
                  secondsInZone: 3969.78
                },
                {
                  minSpeed: 15,
                  maxSpeed: 20,
                  secondsInZone: 4409.02
                },
                {
                  minSpeed: 20,
                  maxSpeed: 25,
                  secondsInZone: 2888.24
                },
                {
                  minSpeed: 25,
                  maxSpeed: null,
                  secondsInZone: 1084.12
                }
              ]
            },
            periodStatistics: [
              {
                period: 1,
                statistics: {
                  skatingStatistics: {
                    distanceTravelled: 23199.24,
                    distanceTravelledWithPuck: 1163.69,
                    forwardDistanceTravelledWithPuck: 635.97,
                    accelerations: 393,
                    highAccelerations: 31,
                    decelerations: 318
                  },
                  shotStatistics: {
                    shots: 16,
                    shotsOnGoal: 7,
                    shotsWithScreen: 5,
                    goals: 0,
                    saves: 11,
                    expectedGoalsSum: 0.58
                  },
                  passStatistics: {
                    successfulPasses: 96,
                    allPasses: 141,
                    totalPassDistance: 968.45,
                    forwardPassDistance: 295.45
                  },
                  puckContestStatistics: {
                    puckContestsWon: 13,
                    puckContestsLost: 15,
                    totalPuckContests: 28
                  },
                  faceoffStatistics: {
                    faceoffWins: 9,
                    faceoffCount: 18
                  },
                  traditionalStatistics: {
                    corsiFor: 10,
                    corsiAgainst: 13,
                    corsiForPercentage: 0.43,
                    fenwickFor: 8,
                    fenwickAgainst: 10,
                    fenwickForPercentage: 0.44,
                    pdo: 1
                  },
                  speedZoneStatistics: [
                    {
                      minSpeed: 0,
                      maxSpeed: 5,
                      secondsInZone: 658.28
                    },
                    {
                      minSpeed: 5,
                      maxSpeed: 10,
                      secondsInZone: 1040.42
                    },
                    {
                      minSpeed: 10,
                      maxSpeed: 15,
                      secondsInZone: 1324.34
                    },
                    {
                      minSpeed: 15,
                      maxSpeed: 20,
                      secondsInZone: 1489.12
                    },
                    {
                      minSpeed: 20,
                      maxSpeed: 25,
                      secondsInZone: 958.78
                    },
                    {
                      minSpeed: 25,
                      maxSpeed: null,
                      secondsInZone: 352
                    }
                  ]
                }
              },
              {
                period: 2,
                statistics: {
                  skatingStatistics: {
                    distanceTravelled: 23664.39,
                    distanceTravelledWithPuck: 1201.51,
                    forwardDistanceTravelledWithPuck: 621.44,
                    accelerations: 366,
                    highAccelerations: 30,
                    decelerations: 278
                  },
                  shotStatistics: {
                    shots: 21,
                    shotsOnGoal: 8,
                    shotsWithScreen: 10,
                    goals: 1,
                    saves: 8,
                    expectedGoalsSum: 0.78
                  },
                  passStatistics: {
                    successfulPasses: 96,
                    allPasses: 138,
                    totalPassDistance: 1064.02,
                    forwardPassDistance: 434.52
                  },
                  puckContestStatistics: {
                    puckContestsWon: 22,
                    puckContestsLost: 15,
                    totalPuckContests: 37
                  },
                  faceoffStatistics: {
                    faceoffWins: 12,
                    faceoffCount: 26
                  },
                  traditionalStatistics: {
                    corsiFor: 18,
                    corsiAgainst: 12,
                    corsiForPercentage: 0.6,
                    fenwickFor: 10,
                    fenwickAgainst: 11,
                    fenwickForPercentage: 0.48,
                    pdo: 0.79
                  },
                  speedZoneStatistics: [
                    {
                      minSpeed: 0,
                      maxSpeed: 5,
                      secondsInZone: 709.96
                    },
                    {
                      minSpeed: 5,
                      maxSpeed: 10,
                      secondsInZone: 1046.2
                    },
                    {
                      minSpeed: 10,
                      maxSpeed: 15,
                      secondsInZone: 1311.78
                    },
                    {
                      minSpeed: 15,
                      maxSpeed: 20,
                      secondsInZone: 1487.84
                    },
                    {
                      minSpeed: 20,
                      maxSpeed: 25,
                      secondsInZone: 1002.46
                    },
                    {
                      minSpeed: 25,
                      maxSpeed: null,
                      secondsInZone: 370.38
                    }
                  ]
                }
              },
              {
                period: 3,
                statistics: {
                  skatingStatistics: {
                    distanceTravelled: 22875.48,
                    distanceTravelledWithPuck: 1311.4,
                    forwardDistanceTravelledWithPuck: 602.4,
                    accelerations: 338,
                    highAccelerations: 29,
                    decelerations: 313
                  },
                  shotStatistics: {
                    shots: 26,
                    shotsOnGoal: 18,
                    shotsWithScreen: 13,
                    goals: 3,
                    saves: 5,
                    expectedGoalsSum: 2.16
                  },
                  passStatistics: {
                    successfulPasses: 110,
                    allPasses: 138,
                    totalPassDistance: 1314.7,
                    forwardPassDistance: 391.99
                  },
                  puckContestStatistics: {
                    puckContestsWon: 20,
                    puckContestsLost: 10,
                    totalPuckContests: 30
                  },
                  faceoffStatistics: {
                    faceoffWins: 13,
                    faceoffCount: 16
                  },
                  traditionalStatistics: {
                    corsiFor: 16,
                    corsiAgainst: 6,
                    corsiForPercentage: 0.73,
                    fenwickFor: 12,
                    fenwickAgainst: 5,
                    fenwickForPercentage: 0.71,
                    pdo: 1.18
                  },
                  speedZoneStatistics: [
                    {
                      minSpeed: 0,
                      maxSpeed: 5,
                      secondsInZone: 736.8
                    },
                    {
                      minSpeed: 5,
                      maxSpeed: 10,
                      secondsInZone: 1050.94
                    },
                    {
                      minSpeed: 10,
                      maxSpeed: 15,
                      secondsInZone: 1333.66
                    },
                    {
                      minSpeed: 15,
                      maxSpeed: 20,
                      secondsInZone: 1432.06
                    },
                    {
                      minSpeed: 20,
                      maxSpeed: 25,
                      secondsInZone: 927
                    },
                    {
                      minSpeed: 25,
                      maxSpeed: null,
                      secondsInZone: 361.74
                    }
                  ]
                }
              }
            ]
          },
          awayTeamStatistics: {
            totalStatistics: {
              skatingStatistics: {
                distanceTravelled: 64578.4,
                distanceTravelledWithPuck: 2149.74,
                forwardDistanceTravelledWithPuck: 1031.89,
                accelerations: 1138,
                highAccelerations: 90,
                decelerations: 949
              },
              shotStatistics: {
                shots: 47,
                shotsOnGoal: 27,
                shotsWithScreen: 17,
                goals: 3,
                saves: 29,
                expectedGoalsSum: 2.69
              },
              passStatistics: {
                successfulPasses: 246,
                allPasses: 349,
                totalPassDistance: 2611.48,
                forwardPassDistance: 888.74
              },
              puckContestStatistics: {
                puckContestsWon: 40,
                puckContestsLost: 55,
                totalPuckContests: 95
              },
              faceoffStatistics: {
                faceoffWins: 26,
                faceoffCount: 60
              },
              traditionalStatistics: {
                corsiFor: 31,
                corsiAgainst: 44,
                corsiForPercentage: 0.41,
                fenwickFor: 26,
                fenwickAgainst: 30,
                fenwickForPercentage: 0.46,
                pdo: 1.02
              },
              speedZoneStatistics: [
                {
                  minSpeed: 0,
                  maxSpeed: 5,
                  secondsInZone: 2306.12
                },
                {
                  minSpeed: 5,
                  maxSpeed: 10,
                  secondsInZone: 3536.22
                },
                {
                  minSpeed: 10,
                  maxSpeed: 15,
                  secondsInZone: 4295.76
                },
                {
                  minSpeed: 15,
                  maxSpeed: 20,
                  secondsInZone: 4147.2
                },
                {
                  minSpeed: 20,
                  maxSpeed: 25,
                  secondsInZone: 2386.42
                },
                {
                  minSpeed: 25,
                  maxSpeed: null,
                  secondsInZone: 728.7
                }
              ]
            },
            periodStatistics: [
              {
                period: 1,
                statistics: {
                  skatingStatistics: {
                    distanceTravelled: 21834.13,
                    distanceTravelledWithPuck: 840.23,
                    forwardDistanceTravelledWithPuck: 417.6,
                    accelerations: 364,
                    highAccelerations: 26,
                    decelerations: 324
                  },
                  shotStatistics: {
                    shots: 19,
                    shotsOnGoal: 11,
                    shotsWithScreen: 5,
                    goals: 0,
                    saves: 7,
                    expectedGoalsSum: 1.29
                  },
                  passStatistics: {
                    successfulPasses: 85,
                    allPasses: 121,
                    totalPassDistance: 955.86,
                    forwardPassDistance: 317.93
                  },
                  puckContestStatistics: {
                    puckContestsWon: 15,
                    puckContestsLost: 13,
                    totalPuckContests: 28
                  },
                  faceoffStatistics: {
                    faceoffWins: 9,
                    faceoffCount: 18
                  },
                  traditionalStatistics: {
                    corsiFor: 13,
                    corsiAgainst: 10,
                    corsiForPercentage: 0.57,
                    fenwickFor: 10,
                    fenwickAgainst: 8,
                    fenwickForPercentage: 0.56,
                    pdo: 1
                  },
                  speedZoneStatistics: [
                    {
                      minSpeed: 0,
                      maxSpeed: 5,
                      secondsInZone: 744.32
                    },
                    {
                      minSpeed: 5,
                      maxSpeed: 10,
                      secondsInZone: 1101
                    },
                    {
                      minSpeed: 10,
                      maxSpeed: 15,
                      secondsInZone: 1387.32
                    },
                    {
                      minSpeed: 15,
                      maxSpeed: 20,
                      secondsInZone: 1425.6
                    },
                    {
                      minSpeed: 20,
                      maxSpeed: 25,
                      secondsInZone: 841.68
                    },
                    {
                      minSpeed: 25,
                      maxSpeed: null,
                      secondsInZone: 257.52
                    }
                  ]
                }
              },
              {
                period: 2,
                statistics: {
                  skatingStatistics: {
                    distanceTravelled: 22192.53,
                    distanceTravelledWithPuck: 664.3,
                    forwardDistanceTravelledWithPuck: 273.19,
                    accelerations: 394,
                    highAccelerations: 32,
                    decelerations: 323
                  },
                  shotStatistics: {
                    shots: 16,
                    shotsOnGoal: 11,
                    shotsWithScreen: 7,
                    goals: 3,
                    saves: 7,
                    expectedGoalsSum: 1.11
                  },
                  passStatistics: {
                    successfulPasses: 91,
                    allPasses: 122,
                    totalPassDistance: 886.98,
                    forwardPassDistance: 314.49
                  },
                  puckContestStatistics: {
                    puckContestsWon: 15,
                    puckContestsLost: 22,
                    totalPuckContests: 37
                  },
                  faceoffStatistics: {
                    faceoffWins: 14,
                    faceoffCount: 26
                  },
                  traditionalStatistics: {
                    corsiFor: 12,
                    corsiAgainst: 18,
                    corsiForPercentage: 0.4,
                    fenwickFor: 11,
                    fenwickAgainst: 10,
                    fenwickForPercentage: 0.52,
                    pdo: 1.21
                  },
                  speedZoneStatistics: [
                    {
                      minSpeed: 0,
                      maxSpeed: 5,
                      secondsInZone: 707.68
                    },
                    {
                      minSpeed: 5,
                      maxSpeed: 10,
                      secondsInZone: 1168.28
                    },
                    {
                      minSpeed: 10,
                      maxSpeed: 15,
                      secondsInZone: 1480.76
                    },
                    {
                      minSpeed: 15,
                      maxSpeed: 20,
                      secondsInZone: 1434.88
                    },
                    {
                      minSpeed: 20,
                      maxSpeed: 25,
                      secondsInZone: 812.22
                    },
                    {
                      minSpeed: 25,
                      maxSpeed: null,
                      secondsInZone: 270.24
                    }
                  ]
                }
              },
              {
                period: 3,
                statistics: {
                  skatingStatistics: {
                    distanceTravelled: 20551.74,
                    distanceTravelledWithPuck: 645.21,
                    forwardDistanceTravelledWithPuck: 341.1,
                    accelerations: 380,
                    highAccelerations: 32,
                    decelerations: 302
                  },
                  shotStatistics: {
                    shots: 12,
                    shotsOnGoal: 5,
                    shotsWithScreen: 5,
                    goals: 0,
                    saves: 15,
                    expectedGoalsSum: 0.29
                  },
                  passStatistics: {
                    successfulPasses: 70,
                    allPasses: 106,
                    totalPassDistance: 768.64,
                    forwardPassDistance: 256.32
                  },
                  puckContestStatistics: {
                    puckContestsWon: 10,
                    puckContestsLost: 20,
                    totalPuckContests: 30
                  },
                  faceoffStatistics: {
                    faceoffWins: 3,
                    faceoffCount: 16
                  },
                  traditionalStatistics: {
                    corsiFor: 6,
                    corsiAgainst: 16,
                    corsiForPercentage: 0.27,
                    fenwickFor: 5,
                    fenwickAgainst: 12,
                    fenwickForPercentage: 0.29,
                    pdo: 0.82
                  },
                  speedZoneStatistics: [
                    {
                      minSpeed: 0,
                      maxSpeed: 5,
                      secondsInZone: 854.12
                    },
                    {
                      minSpeed: 5,
                      maxSpeed: 10,
                      secondsInZone: 1266.94
                    },
                    {
                      minSpeed: 10,
                      maxSpeed: 15,
                      secondsInZone: 1427.68
                    },
                    {
                      minSpeed: 15,
                      maxSpeed: 20,
                      secondsInZone: 1286.72
                    },
                    {
                      minSpeed: 20,
                      maxSpeed: 25,
                      secondsInZone: 732.52
                    },
                    {
                      minSpeed: 25,
                      maxSpeed: null,
                      secondsInZone: 200.94
                    }
                  ]
                }
              }
            ]
          },
          dataRestrictions: []
        }
      },
      players: [
        {
          id: '516',
          name: 'Felix Brückmann',
          firstname: 'Felix',
          surname: 'Brückmann',
          position: 'Goalkeeper',
          jersey: 90,
          nationality: null
        },
        {
          id: '1504',
          name: 'Florian Mnich',
          firstname: 'Florian',
          surname: 'Mnich',
          position: 'Goalkeeper',
          jersey: 72,
          nationality: null
        },
        {
          id: '1682',
          name: 'Moritz Elias',
          firstname: 'Moritz',
          surname: 'Elias',
          position: 'Center',
          jersey: 64,
          nationality: null
        },
        {
          id: '1705',
          name: 'Arkadiusz Dziambor',
          firstname: 'Arkadiusz',
          surname: 'Dziambor',
          position: 'DefenseLeft',
          jersey: 76,
          nationality: null
        },
        {
          id: '1767',
          name: 'Nigel Dawes',
          firstname: 'Nigel',
          surname: 'Dawes',
          position: 'Center',
          jersey: 9,
          nationality: null
        },
        {
          id: '1772',
          name: 'Jordan Szwarz',
          firstname: 'Jordan',
          surname: 'Szwarz',
          position: 'Center',
          jersey: 14,
          nationality: null
        },
        {
          id: '1773',
          name: 'Luca Tosto',
          firstname: 'Luca',
          surname: 'Tosto',
          position: 'Center',
          jersey: 18,
          nationality: null
        },
        {
          id: '2181',
          name: 'Julius Schulte',
          firstname: 'Julius',
          surname: 'Schulte',
          position: 'Goalkeeper',
          jersey: 35,
          nationality: null
        },
        {
          id: '2182',
          name: 'Justus Roth',
          firstname: 'Justus',
          surname: 'Roth',
          position: 'Goalkeeper',
          jersey: 1,
          nationality: null
        },
        {
          id: '2189',
          name: 'Kevin Bicker',
          firstname: 'Kevin',
          surname: 'Bicker',
          position: 'Center',
          jersey: 78,
          nationality: null
        },
        {
          id: '2201',
          name: 'Paul Mayer',
          firstname: 'Paul',
          surname: 'Mayer',
          position: 'DefenseLeft',
          jersey: 59,
          nationality: null
        },
        {
          id: '1557',
          name: 'Arno Tiefensee',
          firstname: 'Arno',
          surname: 'Tiefensee',
          position: 'Goalkeeper',
          jersey: 30,
          nationality: null
        },
        {
          id: '1768',
          name: 'Korbinian Holzer',
          firstname: 'Korbinian',
          surname: 'Holzer',
          position: 'DefenseLeft',
          jersey: 4,
          nationality: null
        },
        {
          id: '1377',
          name: 'Lean Bergmann',
          firstname: 'Lean',
          surname: 'Bergmann',
          position: 'Center',
          jersey: 19,
          nationality: null
        },
        {
          id: '143',
          name: 'Nicolas Krämmer',
          firstname: 'Nicolas',
          surname: 'Krämmer',
          position: 'Center',
          jersey: 21,
          nationality: null
        },
        {
          id: '1364',
          name: 'Markus Eisenschmid',
          firstname: 'Markus',
          surname: 'Eisenschmid',
          position: 'Center',
          jersey: 16,
          nationality: null
        },
        {
          id: '59',
          name: 'Stefan Loibl',
          firstname: 'Stefan',
          surname: 'Loibl',
          position: 'Center',
          jersey: 13,
          nationality: null
        },
        {
          id: '1670',
          name: 'Simon Thiel',
          firstname: 'Simon',
          surname: 'Thiel',
          position: 'Center',
          jersey: 96,
          nationality: null
        },
        {
          id: '1365',
          name: 'Mark Katic',
          firstname: 'Mark',
          surname: 'Katic',
          position: 'DefenseLeft',
          jersey: 95,
          nationality: null
        },
        {
          id: '2204',
          name: 'Joseph Cramarossa',
          firstname: 'Joseph',
          surname: 'Cramarossa',
          position: 'Center',
          jersey: 91,
          nationality: null
        },
        {
          id: '2214',
          name: 'Evan Buitenhuis',
          firstname: 'Evan',
          surname: 'Buitenhuis',
          position: 'Goalkeeper',
          jersey: 32,
          nationality: null
        },
        {
          id: '1362',
          name: 'Joonas Lehtivuori',
          firstname: 'Joonas',
          surname: 'Lehtivuori',
          position: 'DefenseLeft',
          jersey: 6,
          nationality: null
        },
        {
          id: '25',
          name: 'Denis Reul',
          firstname: 'Denis',
          surname: 'Reul',
          position: 'DefenseLeft',
          jersey: 29,
          nationality: null
        },
        {
          id: '2118',
          name: 'Matthew Donovan',
          firstname: 'Matthew',
          surname: 'Donovan',
          position: 'DefenseLeft',
          jersey: 46,
          nationality: null
        },
        {
          id: '656',
          name: 'Thomas Larkin',
          firstname: 'Thomas',
          surname: 'Larkin',
          position: 'DefenseLeft',
          jersey: 37,
          nationality: null
        },
        {
          id: '23',
          name: 'Sinan Akdag',
          firstname: 'Sinan',
          surname: 'Akdag',
          position: 'DefenseLeft',
          jersey: 7,
          nationality: null
        },
        {
          id: '1764',
          name: 'Fabrizio Pilu',
          firstname: 'Fabrizio',
          surname: 'Pilu',
          position: 'DefenseLeft',
          jersey: 68,
          nationality: null
        },
        {
          id: '493',
          name: 'David Wolf',
          firstname: 'David',
          surname: 'Wolf',
          position: 'Center',
          jersey: 89,
          nationality: null
        },
        {
          id: '1846',
          name: 'Tyler Gaudet',
          firstname: 'Tyler',
          surname: 'Gaudet',
          position: 'Center',
          jersey: 58,
          nationality: null
        },
        {
          id: '487',
          name: 'Matthias Plachta',
          firstname: 'Matthias',
          surname: 'Plachta',
          position: 'Center',
          jersey: 22,
          nationality: null
        },
        {
          id: '1655',
          name: 'Taro Jentzsch',
          firstname: 'Taro',
          surname: 'Jentzsch',
          position: 'Center',
          jersey: 11,
          nationality: null
        },
        {
          id: '2172',
          name: 'Ryan MacInnis',
          firstname: 'Ryan',
          surname: 'MacInnis',
          position: 'Center',
          jersey: 74,
          nationality: null
        },
        {
          id: '1506',
          name: 'Borna Rendulic',
          firstname: 'Borna',
          surname: 'Rendulic',
          position: 'Center',
          jersey: 71,
          nationality: null
        },
        {
          id: '1306',
          name: 'Tim Wohlgemuth',
          firstname: 'Tim',
          surname: 'Wohlgemuth',
          position: 'Center',
          jersey: 33,
          nationality: null
        }
      ]
    },
    fields: [
      {
        id: 'header',
        label: 'Header',
        type: 'text',
        value: ''
      },
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
