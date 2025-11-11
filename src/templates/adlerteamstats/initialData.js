module.exports = {
  uuid: '0',
  template_name: 'adlerteamstats',
  name: 'Team stats',
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
      standing: [
        {
          id: 7,
          partTeamId: 234,
          name: 'Iserlohn Roosters',
          shortcut: 'IEC',
          position: 1,
          points: 3,
          games: 1,
          wins: 1,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 0,
          score1: 4,
          score2: 1,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 3
        },
        {
          id: 10,
          partTeamId: 232,
          name: 'EHC Red Bull München',
          shortcut: 'RBM',
          position: 2,
          points: 3,
          games: 1,
          wins: 1,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 0,
          score1: 4,
          score2: 1,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 3
        },
        {
          id: 4,
          partTeamId: 226,
          name: 'Düsseldorfer EG',
          shortcut: 'DEG',
          position: 3,
          points: 3,
          games: 1,
          wins: 1,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 0,
          score1: 6,
          score2: 4,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 3
        },
        {
          id: 6,
          partTeamId: 228,
          name: 'Straubing Tigers',
          shortcut: 'STR',
          position: 4,
          points: 3,
          games: 1,
          wins: 1,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 0,
          score1: 4,
          score2: 2,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 3
        },
        {
          id: 22,
          partTeamId: 238,
          name: 'SC Bietigheim Steelers',
          shortcut: 'SCB',
          position: 5,
          points: 3,
          games: 1,
          wins: 1,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 0,
          score1: 5,
          score2: 4,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 3
        },
        {
          id: 9,
          partTeamId: 230,
          name: 'Pinguins Bremerhaven',
          shortcut: 'BHV',
          position: 6,
          points: 2,
          games: 1,
          wins: 0,
          winsOt: 1,
          ties: 0,
          lossesOt: 0,
          losses: 0,
          score1: 4,
          score2: 3,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 1,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 2
        },
        {
          id: 11,
          partTeamId: 231,
          name: 'Kölner Haie',
          shortcut: 'KEC',
          position: 7,
          points: 2,
          games: 1,
          wins: 0,
          winsOt: 1,
          ties: 0,
          lossesOt: 0,
          losses: 0,
          score1: 2,
          score2: 1,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 1,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 2
        },
        {
          id: 15,
          partTeamId: 236,
          name: 'Schwenninger Wild Wings',
          shortcut: 'SWW',
          position: 8,
          points: 1,
          games: 1,
          wins: 0,
          winsOt: 0,
          ties: 0,
          lossesOt: 1,
          losses: 0,
          score1: 3,
          score2: 4,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 1,
          bonus: 0,
          ppg: 1
        },
        {
          id: 8,
          partTeamId: 229,
          name: 'Grizzlys Wolfsburg',
          shortcut: 'WOB',
          position: 9,
          points: 1,
          games: 1,
          wins: 0,
          winsOt: 0,
          ties: 0,
          lossesOt: 1,
          losses: 0,
          score1: 1,
          score2: 2,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 1,
          bonus: 0,
          ppg: 1
        },
        {
          id: 13,
          partTeamId: 233,
          name: 'Augsburger Panther',
          shortcut: 'AEV',
          position: 10,
          points: 0,
          games: 0,
          wins: 0,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 0,
          score1: 0,
          score2: 0,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 0
        },
        {
          id: 1,
          partTeamId: 223,
          name: 'ERC Ingolstadt',
          shortcut: 'ING',
          position: 11,
          points: 0,
          games: 1,
          wins: 0,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 1,
          score1: 4,
          score2: 5,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 0
        },
        {
          id: 5,
          partTeamId: 227,
          name: 'Krefeld Pinguine',
          shortcut: 'KEV',
          position: 12,
          points: 0,
          games: 1,
          wins: 0,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 1,
          score1: 4,
          score2: 6,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 0
        },
        {
          id: 2,
          partTeamId: 224,
          name: 'Adler Mannheim',
          shortcut: 'MAN',
          position: 13,
          points: 0,
          games: 1,
          wins: 0,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 1,
          score1: 2,
          score2: 4,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 0
        },
        {
          id: 14,
          partTeamId: 235,
          name: 'Nürnberg Ice Tigers',
          shortcut: 'NIT',
          position: 14,
          points: 0,
          games: 1,
          wins: 0,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 1,
          score1: 1,
          score2: 4,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 0
        },
        {
          id: 3,
          partTeamId: 225,
          name: 'Eisbären Berlin',
          shortcut: 'EBB',
          position: 15,
          points: 0,
          games: 1,
          wins: 0,
          winsOt: 0,
          ties: 0,
          lossesOt: 0,
          losses: 1,
          score1: 1,
          score2: 4,
          onlySOwins: 0,
          onlySOlosts: 0,
          onlyOTwins: 0,
          onlyOTlosts: 0,
          bonus: 0,
          ppg: 0
        }
      ],
      teamStats: {
        home: {
          teamId: '2',
          teamName: 'Adler Mannheim',
          eurohockeyId: 14,
          coach_id: 100009,
          coach: 'Pavel Gross',
          arena: 'SAP-Arena',
          games: 38,
          regularWins: {
            home: 13,
            away: 10
          },
          regularLosses: {
            home: 3,
            away: 2
          },
          overtimeWins: {
            home: 2,
            away: 2
          },
          overtimeLosses: {
            home: 0,
            away: 2
          },
          shootoutWins: {
            home: 1,
            away: 3
          },
          shootoutLosses: {
            home: 0,
            away: 0
          },
          goalScored: {
            home: 55,
            away: 61
          },
          goalsAgainst: {
            home: 27,
            away: 44
          },
          shots: 1161,
          faceOffs: 2160,
          faceOffsWins: 1150,
          faceOffsWinsPercent: 53.24,
          numberOfPowerPlays: 154,
          powerPlayGoalsScored: 22,
          powerPlayEfficiency: 14.29,
          powerPlaySeconds: 13765,
          numberOfPenaltyKills: 155,
          shorthandedGoalsReceived: 11,
          penaltyKillingEfficiency: 92.9,
          penaltyCount: {
            2: 169,
            5: 1,
            10: 2,
            20: 1,
            25: 0
          },
          saves: 875,
          zeros: 6,
          sumAttendance: 0,
          avgAttendance: 0,
          rank: '2',
          last10: '6-4',
          bilance: '34-18'
        },
        away: {
          teamId: '3',
          teamName: 'Eisbären Berlin',
          eurohockeyId: 37,
          coach_id: 100042,
          coach: 'Serge Aubin',
          arena: 'Mercedes-Benz Arena',
          games: 38,
          regularWins: {
            home: 14,
            away: 9
          },
          regularLosses: {
            home: 2,
            away: 7
          },
          overtimeWins: {
            home: 0,
            away: 0
          },
          overtimeLosses: {
            home: 1,
            away: 1
          },
          shootoutWins: {
            home: 1,
            away: 0
          },
          shootoutLosses: {
            home: 1,
            away: 2
          },
          goalScored: {
            home: 68,
            away: 69
          },
          goalsAgainst: {
            home: 34,
            away: 57
          },
          shots: 1357,
          faceOffs: 2318,
          faceOffsWins: 1126,
          faceOffsWinsPercent: 48.58,
          numberOfPowerPlays: 157,
          powerPlayGoalsScored: 37,
          powerPlayEfficiency: 23.57,
          powerPlaySeconds: 13783,
          numberOfPenaltyKills: 167,
          shorthandedGoalsReceived: 31,
          penaltyKillingEfficiency: 81.44,
          penaltyCount: {
            2: 175,
            5: 0,
            10: 2,
            20: 1,
            25: 0
          },
          saves: 979,
          zeros: 5,
          sumAttendance: 0,
          avgAttendance: 0,
          rank: '4',
          last10: '7-3',
          bilance: '32-20'
        }
      },
      previousMatchdays: {
        home: [
          {
            id: 2035,
            start_date: '2021-04-01 19:30:00',
            real_end_date: '2021-04-01 21:48:00',
            league_id: 1,
            league: 'DEL',
            season: '2020',
            round: '34',
            home: {
              id: 7,
              name: 'Iserlohn Roosters',
              shortcut: 'IEC'
            },
            guest: {
              id: 2,
              name: 'Adler Mannheim',
              shortcut: 'MAN'
            },
            status: 'AFTER_MATCH',
            overtimeCount: null,
            results: {
              extra_time: false,
              shooting: false,
              contumacy: false,
              score: {
                final: {
                  score_home: 2,
                  score_guest: 4
                },
                first_period: {
                  score_home: 1,
                  score_guest: 1
                },
                second_period: {
                  score_home: 0,
                  score_guest: 2
                },
                third_period: {
                  score_home: 1,
                  score_guest: 1
                }
              }
            },
            actual_time_name: 'Ende',
            actual_time_alias: 'K',
            last_event_time: 3600
          },
          {
            id: 2040,
            start_date: '2021-04-03 17:30:00',
            real_end_date: '2021-04-03 19:42:00',
            league_id: 1,
            league: 'DEL',
            season: '2020',
            round: '35',
            home: {
              id: 2,
              name: 'Adler Mannheim',
              shortcut: 'MAN'
            },
            guest: {
              id: 11,
              name: 'Kölner Haie',
              shortcut: 'KEC'
            },
            status: 'AFTER_MATCH',
            overtimeCount: null,
            results: {
              extra_time: false,
              shooting: false,
              contumacy: false,
              score: {
                final: {
                  score_home: 5,
                  score_guest: 1
                },
                first_period: {
                  score_home: 1,
                  score_guest: 0
                },
                second_period: {
                  score_home: 1,
                  score_guest: 0
                },
                third_period: {
                  score_home: 3,
                  score_guest: 1
                }
              }
            },
            actual_time_name: 'Ende',
            actual_time_alias: 'K',
            last_event_time: 3600
          },
          {
            id: 2049,
            start_date: '2021-04-05 18:30:00',
            real_end_date: '2021-04-05 20:47:00',
            league_id: 1,
            league: 'DEL',
            season: '2020',
            round: '36',
            home: {
              id: 2,
              name: 'Adler Mannheim',
              shortcut: 'MAN'
            },
            guest: {
              id: 9,
              name: 'Pinguins Bremerhaven',
              shortcut: 'BHV'
            },
            status: 'AFTER_MATCH',
            overtimeCount: null,
            results: {
              extra_time: false,
              shooting: false,
              contumacy: false,
              score: {
                final: {
                  score_home: 1,
                  score_guest: 2
                },
                first_period: {
                  score_home: 1,
                  score_guest: 1
                },
                second_period: {
                  score_home: 0,
                  score_guest: 1
                },
                third_period: {
                  score_home: 0,
                  score_guest: 0
                }
              }
            },
            actual_time_name: 'Ende',
            actual_time_alias: 'K',
            last_event_time: 3600
          },
          {
            id: 2059,
            start_date: '2021-04-08 18:30:00',
            real_end_date: '2021-04-08 21:02:00',
            league_id: 1,
            league: 'DEL',
            season: '2020',
            round: '37',
            home: {
              id: 11,
              name: 'Kölner Haie',
              shortcut: 'KEC'
            },
            guest: {
              id: 2,
              name: 'Adler Mannheim',
              shortcut: 'MAN'
            },
            status: 'AFTER_MATCH',
            overtimeCount: 1,
            results: {
              extra_time: true,
              shooting: true,
              contumacy: false,
              score: {
                final: {
                  score_home: 2,
                  score_guest: 3
                },
                first_period: {
                  score_home: 2,
                  score_guest: 1
                },
                second_period: {
                  score_home: 0,
                  score_guest: 0
                },
                third_period: {
                  score_home: 0,
                  score_guest: 1
                },
                overtime: {
                  score_home: 0,
                  score_guest: 0
                },
                shootout: {
                  score_home: 0,
                  score_guest: 1
                }
              }
            },
            actual_time_name: 'Ende n. Penaltyschießen',
            actual_time_alias: 'KN',
            last_event_time: 3900
          },
          {
            id: 2063,
            start_date: '2021-04-09 19:30:00',
            real_end_date: '2021-04-09 21:43:00',
            league_id: 1,
            league: 'DEL',
            season: '2020',
            round: '38',
            home: {
              id: 4,
              name: 'Düsseldorfer EG',
              shortcut: 'DEG'
            },
            guest: {
              id: 2,
              name: 'Adler Mannheim',
              shortcut: 'MAN'
            },
            status: 'AFTER_MATCH',
            overtimeCount: 1,
            results: {
              extra_time: true,
              shooting: false,
              contumacy: false,
              score: {
                final: {
                  score_home: 2,
                  score_guest: 3
                },
                first_period: {
                  score_home: 1,
                  score_guest: 1
                },
                second_period: {
                  score_home: 0,
                  score_guest: 0
                },
                third_period: {
                  score_home: 1,
                  score_guest: 1
                },
                overtime: {
                  score_home: 0,
                  score_guest: 1
                }
              }
            },
            actual_time_name: 'Ende n. Verlängerung',
            actual_time_alias: 'KP',
            last_event_time: 3781
          }
        ],
        away: [
          {
            id: 2031,
            start_date: '2021-03-31 18:30:00',
            real_end_date: '2021-03-31 20:42:00',
            league_id: 1,
            league: 'DEL',
            season: '2020',
            round: '34',
            home: {
              id: 3,
              name: 'Eisbären Berlin',
              shortcut: 'EBB'
            },
            guest: {
              id: 6,
              name: 'Straubing Tigers',
              shortcut: 'STR'
            },
            status: 'AFTER_MATCH',
            overtimeCount: null,
            results: {
              extra_time: false,
              shooting: false,
              contumacy: false,
              score: {
                final: {
                  score_home: 1,
                  score_guest: 0
                },
                first_period: {
                  score_home: 0,
                  score_guest: 0
                },
                second_period: {
                  score_home: 0,
                  score_guest: 0
                },
                third_period: {
                  score_home: 1,
                  score_guest: 0
                }
              }
            },
            actual_time_name: 'Ende',
            actual_time_alias: 'K',
            last_event_time: 3600
          },
          {
            id: 2045,
            start_date: '2021-04-04 14:30:00',
            real_end_date: '2021-04-04 16:43:00',
            league_id: 1,
            league: 'DEL',
            season: '2020',
            round: '35',
            home: {
              id: 12,
              name: 'EHC Red Bull München',
              shortcut: 'RBM'
            },
            guest: {
              id: 3,
              name: 'Eisbären Berlin',
              shortcut: 'EBB'
            },
            status: 'AFTER_MATCH',
            overtimeCount: null,
            results: {
              extra_time: false,
              shooting: false,
              contumacy: false,
              score: {
                final: {
                  score_home: 4,
                  score_guest: 1
                },
                first_period: {
                  score_home: 1,
                  score_guest: 1
                },
                second_period: {
                  score_home: 2,
                  score_guest: 0
                },
                third_period: {
                  score_home: 1,
                  score_guest: 0
                }
              }
            },
            actual_time_name: 'Ende',
            actual_time_alias: 'K',
            last_event_time: 3600
          },
          {
            id: 2051,
            start_date: '2021-04-06 18:30:00',
            real_end_date: '2021-04-06 20:47:00',
            league_id: 1,
            league: 'DEL',
            season: '2020',
            round: '36',
            home: {
              id: 3,
              name: 'Eisbären Berlin',
              shortcut: 'EBB'
            },
            guest: {
              id: 12,
              name: 'EHC Red Bull München',
              shortcut: 'RBM'
            },
            status: 'AFTER_MATCH',
            overtimeCount: null,
            results: {
              extra_time: false,
              shooting: false,
              contumacy: false,
              score: {
                final: {
                  score_home: 0,
                  score_guest: 5
                },
                first_period: {
                  score_home: 0,
                  score_guest: 2
                },
                second_period: {
                  score_home: 0,
                  score_guest: 2
                },
                third_period: {
                  score_home: 0,
                  score_guest: 1
                }
              }
            },
            actual_time_name: 'Ende',
            actual_time_alias: 'K',
            last_event_time: 3600
          },
          {
            id: 2054,
            start_date: '2021-04-07 18:30:00',
            real_end_date: '2021-04-07 20:59:00',
            league_id: 1,
            league: 'DEL',
            season: '2020',
            round: '37',
            home: {
              id: 3,
              name: 'Eisbären Berlin',
              shortcut: 'EBB'
            },
            guest: {
              id: 15,
              name: 'Schwenninger Wild Wings',
              shortcut: 'SWW'
            },
            status: 'AFTER_MATCH',
            overtimeCount: null,
            results: {
              extra_time: false,
              shooting: false,
              contumacy: false,
              score: {
                final: {
                  score_home: 6,
                  score_guest: 2
                },
                first_period: {
                  score_home: 2,
                  score_guest: 2
                },
                second_period: {
                  score_home: 2,
                  score_guest: 0
                },
                third_period: {
                  score_home: 2,
                  score_guest: 0
                }
              }
            },
            actual_time_name: 'Ende',
            actual_time_alias: 'K',
            last_event_time: 3600
          },
          {
            id: 2067,
            start_date: '2021-04-10 14:30:00',
            real_end_date: '2021-04-10 16:54:00',
            league_id: 1,
            league: 'DEL',
            season: '2020',
            round: '38',
            home: {
              id: 15,
              name: 'Schwenninger Wild Wings',
              shortcut: 'SWW'
            },
            guest: {
              id: 3,
              name: 'Eisbären Berlin',
              shortcut: 'EBB'
            },
            status: 'AFTER_MATCH',
            overtimeCount: null,
            results: {
              extra_time: false,
              shooting: false,
              contumacy: false,
              score: {
                final: {
                  score_home: 4,
                  score_guest: 2
                },
                first_period: {
                  score_home: 1,
                  score_guest: 0
                },
                second_period: {
                  score_home: 2,
                  score_guest: 1
                },
                third_period: {
                  score_home: 1,
                  score_guest: 1
                }
              }
            },
            actual_time_name: 'Ende',
            actual_time_alias: 'K',
            last_event_time: 3600
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
          label: 'Eisbären Berlin',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/adler/logo-berlin-neu.png',
          data: {
            name: 'Eisbären Berlin',
            short: 'EBB',
            id: '3'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        t_12: {
          url: '/predefined/media/image/teams/adler/logo-muenchen.png',
          data: {
            name: 'EHC München',
            short: 'EHC',
            id: '12'
          }
        },
        t_22: {
          url: '/predefined/media/image/teams/adler/logo-muenchen.png',
          data: {
            name: 'Bietigheim',
            short: 'SCC',
            id: '22'
          }
        },
        t_11: {
          url: '/predefined/media/image/teams/adler/logo-koeln.png',
          data: {
            name: 'Kölner Haie',
            short: 'KEC',
            id: '11'
          }
        },
        t_13: {
          url: '/predefined/media/image/teams/adler/logo-augsburg.png',
          data: {
            name: 'Panther',
            short: 'AEV',
            id: '13'
          }
        },
        t_14: {
          url: '/predefined/media/image/teams/adler/logo-nuernberg-2020.png',
          data: {
            name: 'Ice Tigers',
            short: 'NIT',
            id: '14'
          }
        },
        t_15: {
          url: '/predefined/media/image/teams/adler/logo-schwenningen.png',
          data: {
            name: 'Wild Wings',
            short: 'SWW',
            id: '15'
          }
        },
        t_9: {
          url: '/predefined/media/image/teams/adler/logo-bremerhaven.png',
          data: {
            name: 'Bremerhaven',
            short: 'BHV',
            id: '9'
          }
        },
        t_8: {
          url: '/predefined/media/image/teams/adler/logo-wolfsburg.png',
          data: {
            name: 'Wolfsburg',
            short: 'WOB',
            id: '8'
          }
        },
        t_3: {
          url: '/predefined/media/image/teams/adler/logo-berlin-neu.png',
          data: {
            name: 'Berlin',
            short: 'EBB',
            id: '3'
          }
        },
        t_2: {
          url: '/predefined/media/image/teams/adler/logo-mannheim.png',
          data: {
            name: 'Mannheim',
            short: 'MAN',
            id: '2'
          }
        },
        t_4: {
          url: '/predefined/media/image/teams/adler/logo-krefeld-2020.png',
          data: {
            name: 'Düsseldorfer EG',
            short: 'DEG',
            id: '4'
          }
        },
        t_5: {
          url: '/predefined/media/image/teams/adler/logo-krefeld-2020.png',
          data: {
            name: 'Krefeld',
            short: 'KEV',
            id: '5'
          }
        },
        t_7: {
          url: '/predefined/media/image/teams/adler/logo-iserlohn.png',
          data: {
            name: 'Iserlohn',
            short: 'IEC',
            id: '7'
          }
        },
        t_6: {
          url: '/predefined/media/image/teams/adler/logo-straubing-21.png',
          data: {
            name: 'Tigers',
            short: 'STR',
            id: '6'
          }
        },
        t_1: {
          url: '/predefined/media/image/teams/adler/logo-ingolstadt-neu.png',
          data: {
            name: 'Ingolstadt',
            short: 'ING',
            id: '1'
          }
        }
      }
    },
    fields: [
      {
        id: 'statsSide',
        label: 'Stats side',
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
      },
      {
        id: 'lastGamesCustom',
        label: 'Last games results (custom)',
        type: 'text',
        value: ''
      },
      {
        id: 'placeCustom',
        label: 'Place',
        type: 'text',
        value: ''
      },
      {
        id: 'gamesCustom',
        label: 'Games',
        type: 'text',
        value: ''
      },
      {
        id: 'pointsCustom',
        label: 'Points (Regular)',
        type: 'text',
        value: ''
      },
      {
        id: 'ppgCustom',
        label: 'PPG (Regular)',
        type: 'text',
        value: ''
      },
      {
        id: 'lossesCustom',
        label: 'Losses (PlayOffs)',
        type: 'text',
        value: ''
      },
      {
        id: 'winsCustom',
        label: 'Wins (PlayOffs)',
        type: 'text',
        value: ''
      },
      {
        id: 'goalsCustom',
        label: 'Goals',
        type: 'text',
        value: ''
      },
      {
        id: 'goalsConcededCustom',
        label: 'Goals conceded',
        type: 'text',
        value: ''
      },
      {
        id: 'unterzahlCustom',
        label: 'Unterzahl',
        type: 'text',
        value: ''
      },
      {
        id: 'ueberzahlCustom',
        label: 'Überzahl',
        type: 'text',
        value: ''
      },
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
    selectedTeamId: '2',
    competitionId: '5',
    competitionName: 'Bundesliga',
    type: 'match',
    homeTeamId: '2',
    awayTeamId: '3',
    side: 'home',
    eventId: '1000',
    date: '202130203023'
  }
};
