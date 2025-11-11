module.exports = {
  uuid: '0',
  template_name: 'wc_livematchday',
  name: 'Live Matchday',
  data: {
    dynamic: {
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
      },
      matchday: [
        {
          matchInfo: {
            id: '5rmz7jov2mom6ktsx31yov0us',
            coverageLevel: '15',
            date: '2023-10-27Z',
            time: '18:30:00Z',
            localDate: '2023-10-27',
            localTime: '20:30:00',
            week: '9',
            numberOfPeriods: 2,
            periodLength: 45,
            lastUpdated: '2024-01-31T14:57:43Z',
            description: 'Bochum vs Mainz 05',
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
                id: 'eq1oq6y61xnzq88zu0cnw131z',
                name: 'Bochum',
                shortName: 'Bochum',
                officialName: 'VfL Bochum 1848',
                code: 'BOC',
                position: 'home',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              },
              {
                id: '1c7qokc1j5z50cjj4tcu32haa',
                name: 'Mainz 05',
                shortName: 'Mainz 05',
                officialName: '1. FSV Mainz 05',
                code: 'M05',
                position: 'away',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              }
            ],
            venue: {
              id: '1dnqg5rzoonyrj8g0x1tlg7gd',
              neutral: 'no',
              longName: 'Vonovia Ruhrstadion',
              shortName: 'Vonovia Ruhrstadion'
            }
          },
          liveData: {
            matchDetails: {
              periodId: 14,
              matchStatus: 'Played',
              winner: 'draw',
              matchLengthMin: 101,
              matchLengthSec: 11,
              period: [
                {
                  id: 1,
                  start: '2023-10-27T18:30:23Z',
                  end: '2023-10-27T19:20:23Z',
                  lengthMin: 50,
                  lengthSec: 0,
                  announcedInjuryTime: 180
                },
                {
                  id: 2,
                  start: '2023-10-27T19:36:34Z',
                  end: '2023-10-27T20:27:45Z',
                  lengthMin: 51,
                  lengthSec: 11,
                  announcedInjuryTime: 300
                }
              ],
              scores: {
                ht: {
                  home: 1,
                  away: 0
                },
                ft: {
                  home: 2,
                  away: 2
                },
                total: {
                  home: 2,
                  away: 2
                }
              }
            },
            goal: [
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 1,
                timeMin: 21,
                timeMinSec: '20:25',
                lastUpdated: '2023-10-27T18:51:21Z',
                timestamp: '2023-10-27T18:50:49Z',
                type: 'PG',
                scorerId: 'f2o5hj0e2k3kw0fj1xzom0cet',
                scorerName: 'K. Stöger',
                optaEventId: '2609082999',
                homeScore: 1,
                awayScore: 0
              },
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 2,
                timeMin: 59,
                timeMinSec: '58:24',
                lastUpdated: '2023-10-27T19:51:19Z',
                timestamp: '2023-10-27T19:49:59Z',
                type: 'OG',
                scorerId: '6qujoqysad60h70f3ac5n9ch6',
                scorerName: 'K. Schlotterbeck',
                optaEventId: '2609142361',
                homeScore: 1,
                awayScore: 1
              },
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 2,
                timeMin: 82,
                timeMinSec: '81:25',
                lastUpdated: '2023-10-27T20:13:57Z',
                timestamp: '2023-10-27T20:12:59Z',
                type: 'G',
                scorerId: '6qujoqysad60h70f3ac5n9ch6',
                scorerName: 'K. Schlotterbeck',
                assistPlayerId: 'f2o5hj0e2k3kw0fj1xzom0cet',
                assistPlayerName: 'K. Stöger',
                optaEventId: '2609159507',
                homeScore: 2,
                awayScore: 1
              },
              {
                contestantId: '1c7qokc1j5z50cjj4tcu32haa',
                periodId: 2,
                timeMin: 96,
                timeMinSec: '95:36',
                lastUpdated: '2023-10-27T20:27:42Z',
                timestamp: '2023-10-27T20:27:10Z',
                type: 'G',
                scorerId: 'dgysidzshgxqm3jegaihwi5wq',
                scorerName: 'T. Krauß',
                assistPlayerId: 'dzolxp2oixtakcrqfyibpu76d',
                assistPlayerName: 'K. Onisiwo',
                optaEventId: '2609167979',
                homeScore: 2,
                awayScore: 2
              }
            ],
            card: [
              {
                contestantId: '1c7qokc1j5z50cjj4tcu32haa',
                periodId: 1,
                timeMin: 15,
                timeMinSec: '14:24',
                lastUpdated: '2023-10-27T18:45:06Z',
                timestamp: '2023-10-27T18:44:48Z',
                type: 'YC',
                playerId: 'l469vtpe0jbgg5sq1v2e67e1',
                playerName: 'L. Barreiro',
                optaEventId: '2609075767',
                cardReason: 'Foul'
              },
              {
                contestantId: '1c7qokc1j5z50cjj4tcu32haa',
                periodId: 1,
                timeMin: 20,
                timeMinSec: '19:42',
                lastUpdated: '2023-10-27T18:50:47Z',
                timestamp: '2023-10-27T18:50:06Z',
                type: 'YC',
                playerId: 'd608s0948uh3owqee7t0en7px',
                playerName: 'D. Kohr',
                optaEventId: '2609082741',
                cardReason: 'Dissent'
              },
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 2,
                timeMin: 51,
                timeMinSec: '50:39',
                lastUpdated: '2023-10-27T19:42:41Z',
                timestamp: '2023-10-27T19:42:13Z',
                type: 'YC',
                playerId: '55la79k6l8zifz8o9vbp20991',
                playerName: 'Bernardo',
                optaEventId: '2609134797',
                cardReason: 'Handball'
              },
              {
                contestantId: '1c7qokc1j5z50cjj4tcu32haa',
                periodId: 2,
                timeMin: 71,
                timeMinSec: '70:17',
                lastUpdated: '2024-01-03T11:29:59Z',
                timestamp: '2023-10-27T20:01:51Z',
                type: 'YC',
                playerId: 'bwqqecmqm76v5b83v1cz891p1',
                playerName: 'Lee Jae-Sung',
                optaEventId: '2609152225',
                cardReason: 'Time wasting'
              },
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 2,
                timeMin: 88,
                timeMinSec: '87:20',
                lastUpdated: '2023-10-27T20:19:07Z',
                timestamp: '2023-10-27T20:18:54Z',
                type: 'YC',
                playerId: '2aumz6rtq4ufba7z7zn5v8frp',
                playerName: 'Gonçalo Paciência',
                optaEventId: '2609163285',
                cardReason: 'Not Retreating'
              },
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 2,
                timeMin: 95,
                timeMinSec: '94:48',
                lastUpdated: '2023-10-27T20:26:37Z',
                timestamp: '2023-10-27T20:26:22Z',
                type: 'YC',
                playerId: '82r0liyptyapc8rfuo32qcqtx',
                playerName: 'A. Losilla',
                optaEventId: '2609167549',
                cardReason: 'Foul'
              }
            ],
            substitute: [
              {
                contestantId: '1c7qokc1j5z50cjj4tcu32haa',
                periodId: 1,
                timeMin: 33,
                timeMinSec: '32:37',
                lastUpdated: '2023-10-27T19:03:08Z',
                timestamp: '2023-10-27T19:03:01Z',
                playerOnId: 'dgysidzshgxqm3jegaihwi5wq',
                playerOnName: 'T. Krauß',
                playerOffId: 'd608s0948uh3owqee7t0en7px',
                playerOffName: 'D. Kohr',
                subReason: 'Tactical'
              },
              {
                contestantId: '1c7qokc1j5z50cjj4tcu32haa',
                periodId: 1,
                timeMin: 33,
                timeMinSec: '32:39',
                lastUpdated: '2024-01-03T11:29:59Z',
                timestamp: '2023-10-27T19:03:03Z',
                playerOnId: 'bwqqecmqm76v5b83v1cz891p1',
                playerOnName: 'Lee Jae-Sung',
                playerOffId: 'bvifdvoxv9e8nq8qe37c0gvrp',
                playerOffName: 'S. Bell',
                subReason: 'Tactical'
              },
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 1,
                timeMin: 34,
                timeMinSec: '33:14',
                lastUpdated: '2023-10-27T19:03:45Z',
                timestamp: '2023-10-27T19:03:37Z',
                playerOnId: '8ksi5s9he1uxai3lfcq46grf9',
                playerOnName: 'E. Mašović',
                playerOffId: '8gnpf9kwx2n2rqwf1gixc4bth',
                playerOffName: 'I. Ordets',
                subReason: 'Injury'
              },
              {
                contestantId: '1c7qokc1j5z50cjj4tcu32haa',
                periodId: 2,
                timeMin: 46,
                timeMinSec: '45:00',
                lastUpdated: '2023-10-27T19:36:26Z',
                timestamp: '2023-10-27T19:36:17Z',
                playerOnId: '2w76r8guf9sacoriu0ivytyax',
                playerOnName: 'A. Barkok',
                playerOffId: 'am0pcyvtaws1i69jt09dgnsnp',
                playerOffName: 'L. Ajorque',
                subReason: 'Tactical'
              },
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 2,
                timeMin: 67,
                timeMinSec: '66:39',
                lastUpdated: '2023-10-27T19:58:26Z',
                timestamp: '2023-10-27T19:58:13Z',
                playerOnId: '2aumz6rtq4ufba7z7zn5v8frp',
                playerOnName: 'Gonçalo Paciência',
                playerOffId: '98e7uohj6lcvf59sfssff2y8l',
                playerOffName: 'P. Förster',
                subReason: 'Tactical'
              },
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 2,
                timeMin: 67,
                timeMinSec: '66:56',
                lastUpdated: '2023-10-27T19:58:26Z',
                timestamp: '2023-10-27T19:58:30Z',
                playerOnId: 'd2pco79bmi3f9x3zahtf9q2mt',
                playerOnName: 'P. Hofmann',
                playerOffId: '8vfi7j34a5veeyswn5g5h4tbe',
                playerOffName: 'M. Broschinski',
                subReason: 'Tactical'
              },
              {
                contestantId: '1c7qokc1j5z50cjj4tcu32haa',
                periodId: 2,
                timeMin: 75,
                timeMinSec: '74:06',
                lastUpdated: '2023-10-27T20:05:47Z',
                timestamp: '2023-10-27T20:05:40Z',
                playerOnId: 'bjhgmcai5irlexe7oa1g0e5sl',
                playerOnName: 'J. Guilavogui',
                playerOffId: '90wsjxdc3ibvah5gm9tnsjwbu',
                playerOffName: 'B. Gruda',
                subReason: 'Tactical'
              },
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 2,
                timeMin: 84,
                timeMinSec: '83:46',
                lastUpdated: '2023-10-28T09:18:12Z',
                timestamp: '2023-10-27T20:15:20Z',
                playerOnId: '281f7899ialr1z6l51mitpp7t',
                playerOnName: 'L. Daschner',
                playerOffId: '2bzdn7cqqonejqmlq85w8z6qd',
                playerOffName: 'T. Asano',
                subReason: 'Tactical'
              },
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 2,
                timeMin: 85,
                timeMinSec: '84:05',
                lastUpdated: '2023-10-27T20:15:47Z',
                timestamp: '2023-10-27T20:15:39Z',
                playerOnId: '6f589mla2tu7udti1jxnw3it',
                playerOnName: 'N. Loosli',
                playerOffId: '6qujoqysad60h70f3ac5n9ch6',
                playerOffName: 'K. Schlotterbeck',
                subReason: 'Tactical'
              },
              {
                contestantId: '1c7qokc1j5z50cjj4tcu32haa',
                periodId: 2,
                timeMin: 87,
                timeMinSec: '86:17',
                lastUpdated: '2023-10-27T20:18:02Z',
                timestamp: '2023-10-27T20:17:52Z',
                playerOnId: '6uurhe88nry4hyelll8ifzd91',
                playerOnName: 'E. Fernandes',
                playerOffId: '58ixsja4yf7pskmshzo7ohwfe',
                playerOffName: 'S. van den Berg',
                subReason: 'Tactical'
              }
            ],
            VAR: [
              {
                contestantId: 'eq1oq6y61xnzq88zu0cnw131z',
                periodId: 1,
                timeMin: 19,
                timeMinSec: '18:29',
                lastUpdated: '2023-10-27T18:49:24Z',
                timestamp: '2023-10-27T18:48:51Z',
                type: 'Penalty not awarded',
                decision: 'Cancelled',
                outcome: 'Penalty',
                playerId: '6qujoqysad60h70f3ac5n9ch6',
                playerName: 'K. Schlotterbeck',
                optaEventId: '2609081481'
              }
            ],
            matchDetailsExtra: {
              attendance: '26000',
              matchOfficial: [
                {
                  id: 'cdmdcg1ti733mibkanptgi6dx',
                  type: 'Main',
                  firstName: 'Patrick',
                  lastName: 'Ittrich',
                  shortFirstName: 'Patrick',
                  shortLastName: 'Ittrich'
                },
                {
                  id: '35x0pf2gyqr34ia082h07jkd1',
                  type: 'Assistant referee 1',
                  firstName: 'Sascha',
                  lastName: 'Thielert',
                  shortFirstName: 'Sascha',
                  shortLastName: 'Thielert'
                },
                {
                  id: '5idwmmnze5cuzwo1qnea6crmd',
                  type: 'Assistant referee 2',
                  firstName: 'Thomas',
                  lastName: 'Gorniak',
                  shortFirstName: 'Thomas',
                  shortLastName: 'Gorniak'
                },
                {
                  id: 'cwrdnliugka4ylud2f7uz0o2d',
                  type: 'Fourth official',
                  firstName: 'Florian',
                  lastName: 'Heft',
                  shortFirstName: 'Florian',
                  shortLastName: 'Heft'
                },
                {
                  id: '22hrm37wnuzohx7cv2kn5blxx',
                  type: 'Video Assistant Referee',
                  firstName: 'Felix',
                  lastName: 'Brych',
                  shortFirstName: 'Dr. Felix',
                  shortLastName: 'Brych'
                },
                {
                  id: '5jvevmjzmni04vi5l5x0oiy1h',
                  type: 'Assistant VAR Official',
                  firstName: 'Rafael',
                  lastName: 'Foltyn',
                  shortFirstName: 'Rafael',
                  shortLastName: 'Foltyn'
                }
              ]
            }
          }
        },
        {
          matchInfo: {
            id: '5q1o2hsca1hxf3inb45bhj9xw',
            coverageLevel: '15',
            date: '2023-10-28Z',
            time: '13:30:00Z',
            localDate: '2023-10-28',
            localTime: '15:30:00',
            week: '9',
            numberOfPeriods: 2,
            periodLength: 45,
            lastUpdated: '2024-02-28T14:26:22Z',
            description: 'Bayern München vs Darmstadt 98',
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
                id: 'apoawtpvac4zqlancmvw4nk4o',
                name: 'Bayern München',
                shortName: 'Bayern München',
                officialName: 'FC Bayern München',
                code: 'FCB',
                position: 'home',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              },
              {
                id: '1y7e48j8swyafegsucvewse5a',
                name: 'Darmstadt 98',
                shortName: 'Darmstadt 98',
                officialName: 'SV Darmstadt 1898',
                code: 'D98',
                position: 'away',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              }
            ],
            venue: {
              id: 'ck5ov6mmj3vpet5zygnqzri4i',
              neutral: 'no',
              longName: 'Allianz Arena',
              shortName: 'Allianz Arena'
            }
          },
          liveData: {
            matchDetails: {
              periodId: 14,
              matchStatus: 'Played',
              winner: 'home',
              matchLengthMin: 96,
              matchLengthSec: 0,
              period: [
                {
                  id: 1,
                  start: '2023-10-28T13:30:11Z',
                  end: '2023-10-28T14:19:11Z',
                  lengthMin: 49,
                  lengthSec: 0,
                  announcedInjuryTime: 180
                },
                {
                  id: 2,
                  start: '2023-10-28T14:34:16Z',
                  end: '2023-10-28T15:21:16Z',
                  lengthMin: 47,
                  lengthSec: 0,
                  announcedInjuryTime: 120
                }
              ],
              scores: {
                ht: {
                  home: 0,
                  away: 0
                },
                ft: {
                  home: 8,
                  away: 0
                },
                total: {
                  home: 8,
                  away: 0
                }
              }
            },
            goal: [
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 51,
                timeMinSec: '50:54',
                lastUpdated: '2023-10-28T14:41:05Z',
                timestamp: '2023-10-28T14:40:10Z',
                type: 'G',
                scorerId: 'b9g4qurpll4wizajo95c406hh',
                scorerName: 'H. Kane',
                assistPlayerId: '7vhnftizqlyu31st2vsmgh6tx',
                assistPlayerName: 'N. Mazraoui',
                optaEventId: '2609580115',
                homeScore: 1,
                awayScore: 0
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 56,
                timeMinSec: '55:35',
                lastUpdated: '2023-10-28T14:45:56Z',
                timestamp: '2023-10-28T14:44:51Z',
                type: 'G',
                scorerId: '4603xrdk721lqhd1ejn62x5n9',
                scorerName: 'L. Sané',
                assistPlayerId: '1qthvf5krys0pzk24h8wtr9at',
                assistPlayerName: 'K. Laimer',
                optaEventId: '2609593275',
                homeScore: 2,
                awayScore: 0
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 60,
                timeMinSec: '59:55',
                lastUpdated: '2023-10-28T14:51:12Z',
                timestamp: '2023-10-28T14:49:11Z',
                type: 'G',
                scorerId: 'bhsdzppop8jwjsxwftizot1t6',
                scorerName: 'J. Musiala',
                assistPlayerId: 'b9g4qurpll4wizajo95c406hh',
                assistPlayerName: 'H. Kane',
                optaEventId: '2609603073',
                homeScore: 3,
                awayScore: 0
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 64,
                timeMinSec: '63:47',
                lastUpdated: '2023-10-28T14:54:00Z',
                timestamp: '2023-10-28T14:53:03Z',
                type: 'G',
                scorerId: '4603xrdk721lqhd1ejn62x5n9',
                scorerName: 'L. Sané',
                assistPlayerId: '1u1u438ql6xrordkb65wsxo7p',
                assistPlayerName: 'K. Coman',
                optaEventId: '2609608799',
                homeScore: 4,
                awayScore: 0
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 69,
                timeMinSec: '68:13',
                lastUpdated: '2023-10-28T14:58:56Z',
                timestamp: '2023-10-28T14:57:29Z',
                type: 'G',
                scorerId: 'b9g4qurpll4wizajo95c406hh',
                scorerName: 'H. Kane',
                assistPlayerId: '4fq74wp7xzwm214veuxqpdz9x',
                assistPlayerName: 'T. Müller',
                optaEventId: '2609613335',
                homeScore: 5,
                awayScore: 0
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 71,
                timeMinSec: '70:42',
                lastUpdated: '2023-10-28T15:01:21Z',
                timestamp: '2023-10-28T14:59:58Z',
                type: 'G',
                scorerId: '4fq74wp7xzwm214veuxqpdz9x',
                scorerName: 'T. Müller',
                assistPlayerId: '7vhnftizqlyu31st2vsmgh6tx',
                assistPlayerName: 'N. Mazraoui',
                optaEventId: '2609615223',
                homeScore: 6,
                awayScore: 0
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 76,
                timeMinSec: '75:18',
                lastUpdated: '2023-10-28T15:05:30Z',
                timestamp: '2023-10-28T15:04:34Z',
                type: 'G',
                scorerId: 'bhsdzppop8jwjsxwftizot1t6',
                scorerName: 'J. Musiala',
                assistPlayerId: '4fq74wp7xzwm214veuxqpdz9x',
                assistPlayerName: 'T. Müller',
                optaEventId: '2609620841',
                homeScore: 7,
                awayScore: 0
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 88,
                timeMinSec: '87:14',
                lastUpdated: '2023-10-28T15:17:43Z',
                timestamp: '2023-10-28T15:16:30Z',
                type: 'G',
                scorerId: 'b9g4qurpll4wizajo95c406hh',
                scorerName: 'H. Kane',
                assistPlayerId: '4603xrdk721lqhd1ejn62x5n9',
                assistPlayerName: 'L. Sané',
                optaEventId: '2609648793',
                homeScore: 8,
                awayScore: 0
              }
            ],
            card: [
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 1,
                timeMin: 4,
                timeMinSec: '3:50',
                lastUpdated: '2023-10-28T13:34:38Z',
                timestamp: '2023-10-28T13:34:01Z',
                type: 'RC',
                playerId: '97nv3y9z2ajz6b4ynoo0jn3kl',
                playerName: 'J. Kimmich',
                optaEventId: '2609460421',
                cardReason: 'Professional Foul Last Man'
              },
              {
                contestantId: '1y7e48j8swyafegsucvewse5a',
                periodId: 1,
                timeMin: 21,
                timeMinSec: '20:35',
                lastUpdated: '2023-10-28T13:51:44Z',
                timestamp: '2023-10-28T13:50:46Z',
                type: 'RC',
                playerId: '9u30xoqj9hu7fa1avdycptnf9',
                playerName: 'K. Gjasula',
                optaEventId: '2609478069',
                cardReason: 'Professional Foul Last Man'
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 1,
                timeMin: 38,
                timeMinSec: '37:43',
                lastUpdated: '2023-10-28T14:08:09Z',
                timestamp: '2023-10-28T14:07:54Z',
                type: 'YC',
                playerId: '10zt8rbgbmyqxr1m13wm5gfs9',
                playerName: 'M. de Ligt',
                optaEventId: '2609502735',
                cardReason: 'Foul'
              },
              {
                contestantId: '1y7e48j8swyafegsucvewse5a',
                periodId: 1,
                timeMin: 41,
                timeMinSec: '40:38',
                lastUpdated: '2023-10-28T14:11:26Z',
                timestamp: '2023-10-28T14:10:49Z',
                type: 'RC',
                playerId: '46m4igreax3tpbx65yqs7fvv8',
                playerName: 'M. Maglica',
                optaEventId: '2609510205',
                cardReason: 'Professional Foul Last Man'
              },
              {
                contestantId: '1y7e48j8swyafegsucvewse5a',
                periodId: 2,
                timeMin: 49,
                timeMinSec: '48:07',
                lastUpdated: '2023-10-28T14:37:37Z',
                timestamp: '2023-10-28T14:37:23Z',
                type: 'YC',
                playerId: '4in9eb4sw3h3k4ng5wn3q5vit',
                playerName: 'M. Bader',
                optaEventId: '2609572407',
                cardReason: 'Foul'
              },
              {
                contestantId: '1y7e48j8swyafegsucvewse5a',
                periodId: 2,
                timeMin: 69,
                timeMinSec: '68:28',
                lastUpdated: '2023-10-28T15:00:51Z',
                timestamp: '2023-10-28T14:57:45Z',
                type: 'YC',
                playerId: 'bqwy2zxpy11uas3l6fsbnrh4a',
                playerName: 'F. Nürnberger',
                optaEventId: '2609614975',
                cardReason: 'Dissent'
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 1,
                timeMin: 7,
                timeMinSec: '6:33',
                lastUpdated: '2023-10-28T13:36:56Z',
                timestamp: '2023-10-28T13:36:44Z',
                type: 'YC',
                teamOfficialId: 'ct6uptb7n4hiejohdvs6jkic5',
                officialName: 'T. Tuchel',
                optaEventId: '2609463277',
                cardReason: 'Dissent'
              }
            ],
            substitute: [
              {
                contestantId: '1y7e48j8swyafegsucvewse5a',
                periodId: 1,
                timeMin: 47,
                timeMinSec: '46:17',
                lastUpdated: '2023-10-28T14:16:35Z',
                timestamp: '2023-10-28T14:16:28Z',
                playerOnId: 'cy8xr24x4d4jd5vsqs2d9jcut',
                playerOnName: 'C. Zimmermann',
                playerOffId: '4nn6rxyzy97wl4ppqqnhhxyax',
                playerOffName: 'L. Pfeiffer',
                subReason: 'Tactical'
              },
              {
                contestantId: '1y7e48j8swyafegsucvewse5a',
                periodId: 2,
                timeMin: 46,
                timeMinSec: '45:00',
                lastUpdated: '2023-10-28T14:34:27Z',
                timestamp: '2023-10-28T14:34:14Z',
                playerOnId: 'euywniqwcq40dqoo55xni961h',
                playerOnName: 'M. Honsak',
                playerOffId: '7mgipsmicxrsjyr1q8rubv00l',
                playerOffName: 'F. Schnellhardt',
                subReason: 'Tactical'
              },
              {
                contestantId: '1y7e48j8swyafegsucvewse5a',
                periodId: 2,
                timeMin: 62,
                timeMinSec: '61:01',
                lastUpdated: '2023-10-28T14:52:07Z',
                timestamp: '2023-10-28T14:50:17Z',
                playerOnId: 'en0a6a574x1yvnk8kdxwub949',
                playerOnName: 'B. Franjić',
                playerOffId: '9aqzi05rzxjcberb53718z5xx',
                playerOffName: 'M. Mehlem',
                subReason: 'Tactical'
              },
              {
                contestantId: '1y7e48j8swyafegsucvewse5a',
                periodId: 2,
                timeMin: 62,
                timeMinSec: '61:02',
                lastUpdated: '2023-10-28T14:52:36Z',
                timestamp: '2023-10-28T14:50:18Z',
                playerOnId: '858v4l57yp58pp6hzxds35cdl',
                playerOnName: 'E. Karić',
                playerOffId: 'a75o4ettpu6eutbhptgtk7phx',
                playerOffName: 'T. Kempe',
                subReason: 'Tactical'
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 65,
                timeMinSec: '65:00',
                lastUpdated: '2023-10-28T14:56:07Z',
                timestamp: '2023-10-28T14:54:17Z',
                playerOnId: '4fq74wp7xzwm214veuxqpdz9x',
                playerOnName: 'T. Müller',
                playerOffId: '1u1u438ql6xrordkb65wsxo7p',
                playerOffName: 'K. Coman',
                subReason: 'Tactical'
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 66,
                timeMinSec: '65:02',
                lastUpdated: '2023-10-28T14:54:34Z',
                timestamp: '2023-10-28T14:54:18Z',
                playerOnId: '72gykk4phjme27eiribg0xwfe',
                playerOnName: 'F. Krätzig',
                playerOffId: '582uvj0i3dvm0zwbou9q68pgp',
                playerOffName: 'A. Davies',
                subReason: 'Tactical'
              },
              {
                contestantId: '1y7e48j8swyafegsucvewse5a',
                periodId: 2,
                timeMin: 72,
                timeMinSec: '71:30',
                lastUpdated: '2023-10-28T15:02:35Z',
                timestamp: '2023-10-28T15:00:46Z',
                playerOnId: 'eqfhoh81e8uj2as95ev3yfnx1',
                playerOnName: 'T. Isherwood',
                playerOffId: '5yo9doazzlnrrz27gtu27uqjt',
                playerOffName: 'C. Klarer',
                subReason: 'Tactical'
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 77,
                timeMinSec: '76:22',
                lastUpdated: '2023-12-27T23:39:02Z',
                timestamp: '2023-10-28T15:05:38Z',
                playerOnId: '9u0jnvttp25l5bp2pvx7pces',
                playerOnName: 'A. Pavlović',
                playerOffId: '10zt8rbgbmyqxr1m13wm5gfs9',
                playerOffName: 'M. de Ligt',
                subReason: 'Tactical'
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 77,
                timeMinSec: '76:28',
                lastUpdated: '2023-10-28T16:33:51Z',
                timestamp: '2023-10-28T15:05:44Z',
                playerOnId: 'cv1d56d42wujfuc4kt6bn53x0',
                playerOnName: 'M. Tel',
                playerOffId: '1qthvf5krys0pzk24h8wtr9at',
                playerOffName: 'K. Laimer',
                subReason: 'Tactical'
              },
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 2,
                timeMin: 77,
                timeMinSec: '76:33',
                lastUpdated: '2023-10-28T16:33:51Z',
                timestamp: '2023-10-28T15:05:49Z',
                playerOnId: 'e5mjphb52suw89189nyca72z9',
                playerOnName: 'E. Choupo-Moting',
                playerOffId: 'bhsdzppop8jwjsxwftizot1t6',
                playerOffName: 'J. Musiala',
                subReason: 'Tactical'
              }
            ],
            VAR: [
              {
                contestantId: 'apoawtpvac4zqlancmvw4nk4o',
                periodId: 1,
                timeMin: 20,
                timeMinSec: '19:46',
                lastUpdated: '2023-10-28T13:50:30Z',
                timestamp: '2023-10-28T13:49:57Z',
                type: 'Penalty awarded',
                decision: 'Cancelled',
                outcome: 'No penalty',
                playerId: '1qthvf5krys0pzk24h8wtr9at',
                playerName: 'K. Laimer',
                optaEventId: '2609477513'
              },
              {
                contestantId: '1y7e48j8swyafegsucvewse5a',
                periodId: 1,
                timeMin: 21,
                timeMinSec: '20:34',
                lastUpdated: '2023-10-28T13:51:10Z',
                timestamp: '2023-10-28T13:50:43Z',
                type: 'Card upgrade',
                decision: 'Cancelled',
                outcome: 'Card upgraded',
                playerId: '9u30xoqj9hu7fa1avdycptnf9',
                playerName: 'K. Gjasula',
                optaEventId: '2609477953'
              }
            ],
            matchDetailsExtra: {
              attendance: '75000',
              matchOfficial: [
                {
                  id: '8l5qfg209b8avyl7uweaghmmt',
                  type: 'Main',
                  firstName: 'Martin',
                  lastName: 'Petersen',
                  shortFirstName: 'Martin',
                  shortLastName: 'Petersen'
                },
                {
                  id: '1jhsmxr7rrhoqf3mbf98jdcr9',
                  type: 'Assistant referee 1',
                  firstName: 'Alexander',
                  lastName: 'Sather',
                  shortFirstName: 'Alexander',
                  shortLastName: 'Sather'
                },
                {
                  id: '3lbrlhfi5u4oor0gztofcz3kl',
                  type: 'Assistant referee 2',
                  firstName: 'Robert Edgar',
                  lastName: 'Wessel',
                  shortFirstName: 'Robert',
                  shortLastName: 'Wessel'
                },
                {
                  id: 'dklhp3meedvpmy4g3yn1cukt1',
                  type: 'Fourth official',
                  firstName: 'Jonas',
                  lastName: 'Weickenmeier',
                  shortFirstName: 'Jonas',
                  shortLastName: 'Weickenmeier'
                },
                {
                  id: 'cczw9ar4c6wjz5xus0a0cauhh',
                  type: 'Video Assistant Referee',
                  firstName: 'Marco',
                  lastName: 'Fritz',
                  shortFirstName: 'Marco',
                  shortLastName: 'Fritz'
                },
                {
                  id: '54ipv99qng1e6q6ndh8y6khqt',
                  type: 'Assistant VAR Official',
                  firstName: 'Markus',
                  lastName: 'Sinn',
                  shortFirstName: 'Markus',
                  shortLastName: 'Sinn'
                }
              ]
            }
          }
        },
        {
          matchInfo: {
            id: '5r3zo2ekschoox29frgkzwl5g',
            coverageLevel: '15',
            date: '2023-10-28Z',
            time: '13:30:00Z',
            localDate: '2023-10-28',
            localTime: '15:30:00',
            week: '9',
            numberOfPeriods: 2,
            periodLength: 45,
            lastUpdated: '2024-01-31T00:12:18Z',
            description: "Borussia M'gladbach vs Heidenheim",
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
                id: 'go76xxm0xyfgqt1h6tcrtimm',
                name: "Borussia M'gladbach",
                shortName: "M'gladbach",
                officialName: 'Borussia VfL Mönchengladbach',
                code: 'BMG',
                position: 'home',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              },
              {
                id: '3xcg7xikgrn2x8oa65sopb2is',
                name: 'Heidenheim',
                shortName: 'Heidenheim',
                officialName: '1. FC Heidenheim 1846',
                code: 'HDH',
                position: 'away',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              }
            ],
            venue: {
              id: 'ayp7gab35979ru4znhduznj1f',
              neutral: 'no',
              longName: 'BORUSSIA-PARK',
              shortName: 'BORUSSIA-PARK'
            }
          },
          liveData: {
            matchDetails: {
              periodId: 14,
              matchStatus: 'Played',
              winner: 'home',
              matchLengthMin: 98,
              matchLengthSec: 45,
              period: [
                {
                  id: 1,
                  start: '2023-10-28T13:30:15Z',
                  end: '2023-10-28T14:17:55Z',
                  lengthMin: 47,
                  lengthSec: 40,
                  announcedInjuryTime: 120
                },
                {
                  id: 2,
                  start: '2023-10-28T14:34:56Z',
                  end: '2023-10-28T15:26:01Z',
                  lengthMin: 51,
                  lengthSec: 5,
                  announcedInjuryTime: 360
                }
              ],
              scores: {
                ht: {
                  home: 1,
                  away: 1
                },
                ft: {
                  home: 2,
                  away: 1
                },
                total: {
                  home: 2,
                  away: 1
                }
              }
            },
            goal: [
              {
                contestantId: 'go76xxm0xyfgqt1h6tcrtimm',
                periodId: 1,
                timeMin: 3,
                timeMinSec: '3:00',
                lastUpdated: '2023-12-21T02:00:38Z',
                timestamp: '2023-10-28T13:33:15Z',
                type: 'G',
                scorerId: '7tj7eobo7kmk8egcbfrabe8d1',
                scorerName: 'A. Pléa',
                optaEventId: '2609460045',
                homeScore: 1,
                awayScore: 0
              },
              {
                contestantId: '3xcg7xikgrn2x8oa65sopb2is',
                periodId: 1,
                timeMin: 37,
                timeMinSec: '37:00',
                lastUpdated: '2023-10-28T14:08:34Z',
                timestamp: '2023-10-28T14:07:16Z',
                type: 'G',
                scorerId: '630sqbiu7utmkg8yw0h4ky8a2',
                scorerName: 'E. Dinkçi',
                optaEventId: '2609501279',
                homeScore: 1,
                awayScore: 1
              },
              {
                contestantId: '3xcg7xikgrn2x8oa65sopb2is',
                periodId: 2,
                timeMin: 51,
                timeMinSec: '50:59',
                lastUpdated: '2023-10-28T14:55:22Z',
                timestamp: '2023-10-28T14:40:55Z',
                type: 'OG',
                scorerId: '5dcemmjwbguvnz7sz0m8uomad',
                scorerName: 'J. Föhrenbach',
                optaEventId: '2609583011',
                homeScore: 2,
                awayScore: 1
              }
            ],
            card: [
              {
                contestantId: '3xcg7xikgrn2x8oa65sopb2is',
                periodId: 1,
                timeMin: 47,
                timeMinSec: '46:53',
                lastUpdated: '2023-10-28T14:17:25Z',
                timestamp: '2023-10-28T14:17:09Z',
                type: 'YC',
                playerId: '630sqbiu7utmkg8yw0h4ky8a2',
                playerName: 'E. Dinkçi',
                optaEventId: '2609526083',
                cardReason: 'Foul'
              },
              {
                contestantId: '3xcg7xikgrn2x8oa65sopb2is',
                periodId: 2,
                timeMin: 61,
                timeMinSec: '60:22',
                lastUpdated: '2023-10-28T14:52:10Z',
                timestamp: '2023-10-28T14:50:18Z',
                type: 'YC',
                playerId: '2wt5rzeldnz8qdechenaifrv9',
                playerName: 'F. Pick',
                optaEventId: '2609605181',
                cardReason: 'Foul'
              },
              {
                contestantId: '3xcg7xikgrn2x8oa65sopb2is',
                periodId: 2,
                timeMin: 77,
                timeMinSec: '76:36',
                lastUpdated: '2023-10-28T15:07:02Z',
                timestamp: '2023-10-28T15:06:32Z',
                type: 'YC',
                playerId: 'dgubl900t52nssngev6atayju',
                playerName: 'M. Pieringer',
                optaEventId: '2609624345',
                cardReason: 'Foul'
              }
            ],
            substitute: [
              {
                contestantId: '3xcg7xikgrn2x8oa65sopb2is',
                periodId: 2,
                timeMin: 46,
                timeMinSec: '45:00',
                lastUpdated: '2023-10-28T14:33:52Z',
                timestamp: '2023-10-28T14:33:39Z',
                playerOnId: '2wt5rzeldnz8qdechenaifrv9',
                playerOnName: 'F. Pick',
                playerOffId: '6x4ywqmispidw0tznzpjwd1hx',
                playerOffName: 'A. Beck',
                subReason: 'Tactical'
              },
              {
                contestantId: '3xcg7xikgrn2x8oa65sopb2is',
                periodId: 2,
                timeMin: 46,
                timeMinSec: '45:00',
                lastUpdated: '2023-10-28T14:34:49Z',
                timestamp: '2023-10-28T14:34:44Z',
                playerOnId: '98glpci54ztzmd3yn1kttlvpx',
                playerOnName: 'M. Busch',
                playerOffId: '6dg2ztkkig9alktiq5zakbm5l',
                playerOffName: 'O. Traoré',
                subReason: 'Tactical'
              },
              {
                contestantId: '3xcg7xikgrn2x8oa65sopb2is',
                periodId: 2,
                timeMin: 70,
                timeMinSec: '69:46',
                lastUpdated: '2023-10-28T14:59:58Z',
                timestamp: '2023-10-28T14:59:42Z',
                playerOnId: 'dgubl900t52nssngev6atayju',
                playerOnName: 'M. Pieringer',
                playerOffId: '6a0w73agnkslcc6gea1jxxzvt',
                playerOffName: 'J. Beste',
                subReason: 'Tactical'
              },
              {
                contestantId: '3xcg7xikgrn2x8oa65sopb2is',
                periodId: 2,
                timeMin: 70,
                timeMinSec: '69:50',
                lastUpdated: '2023-10-28T15:40:49Z',
                timestamp: '2023-10-28T14:59:46Z',
                playerOnId: '1ulkva22y6r9j9jdatyhr2bbp',
                playerOnName: 'D. Thomalla',
                playerOffId: '7p3wqcwzd2d6a2pc6e0o43il1',
                playerOffName: 'N. Theuerkauf',
                subReason: 'Tactical'
              },
              {
                contestantId: 'go76xxm0xyfgqt1h6tcrtimm',
                periodId: 2,
                timeMin: 75,
                timeMinSec: '74:11',
                lastUpdated: '2023-10-28T15:04:21Z',
                timestamp: '2023-10-28T15:04:07Z',
                playerOnId: 'l8bphgwl3llcckvf9zr6ptqt',
                playerOnName: 'P. Herrmann',
                playerOffId: 'e0hk5aepnpo7cne006zwahfx1',
                playerOffName: 'F. Honorat',
                subReason: 'Tactical'
              },
              {
                contestantId: 'go76xxm0xyfgqt1h6tcrtimm',
                periodId: 2,
                timeMin: 75,
                timeMinSec: '74:12',
                lastUpdated: '2023-10-28T15:04:21Z',
                timestamp: '2023-10-28T15:04:08Z',
                playerOnId: '5nbk2xeyrs7pxdye1jtqudhpl',
                playerOnName: 'R. Hack',
                playerOffId: 'd0qyia80j5079xq5olbttqfl6',
                playerOffName: 'N. Ngoumou',
                subReason: 'Tactical'
              },
              {
                contestantId: 'go76xxm0xyfgqt1h6tcrtimm',
                periodId: 2,
                timeMin: 77,
                timeMinSec: '76:02',
                lastUpdated: '2023-10-28T15:06:08Z',
                timestamp: '2023-10-28T15:05:58Z',
                playerOnId: '1mkbxdrj3myvt6jm4tx8sywgl',
                playerOnName: 'C. Kramer',
                playerOffId: '7tj7eobo7kmk8egcbfrabe8d1',
                playerOffName: 'A. Pléa',
                subReason: 'Tactical'
              },
              {
                contestantId: '3xcg7xikgrn2x8oa65sopb2is',
                periodId: 2,
                timeMin: 85,
                timeMinSec: '84:27',
                lastUpdated: '2023-10-28T15:14:40Z',
                timestamp: '2023-10-28T15:14:23Z',
                playerOnId: '4v1bqelw9bk1gftvzwzk6w6w9',
                playerOnName: 'S. Schimmer',
                playerOffId: 'ay6pvdyj5pjgwvjsqdfsrbw4q',
                playerOffName: 'L. Maloney',
                subReason: 'Tactical'
              },
              {
                contestantId: 'go76xxm0xyfgqt1h6tcrtimm',
                periodId: 2,
                timeMin: 86,
                timeMinSec: '85:40',
                lastUpdated: '2023-11-12T10:35:02Z',
                timestamp: '2023-10-28T15:15:36Z',
                playerOnId: '3h6q9lkwovcu4pynltgnzhy50',
                playerOnName: 'F. Chiarodia',
                playerOffId: 'bc5vmdnoyshdi5hcgu8dgqxyi',
                playerOffName: 'R. Reitz',
                subReason: 'Tactical'
              },
              {
                contestantId: 'go76xxm0xyfgqt1h6tcrtimm',
                periodId: 2,
                timeMin: 87,
                timeMinSec: '86:06',
                lastUpdated: '2023-10-28T15:16:17Z',
                timestamp: '2023-10-28T15:16:02Z',
                playerOnId: 'dp217lcujazwh6x67xxws4fai',
                playerOnName: 'T. Čvančara',
                playerOffId: '5xhjvappzv6swoof5qpi0yj9',
                playerOffName: 'J. Siebatcheu',
                subReason: 'Injury'
              }
            ],
            matchDetailsExtra: {
              attendance: '51541',
              matchOfficial: [
                {
                  id: '4uo0hodgtzmr1amg6giiov3rp',
                  type: 'Main',
                  firstName: 'Robert',
                  lastName: 'Hartmann',
                  shortFirstName: 'Robert',
                  shortLastName: 'Hartmann'
                },
                {
                  id: '5hsbsuo40e9hb4wkvyio20w5x',
                  type: 'Assistant referee 1',
                  firstName: 'Christian',
                  lastName: 'Leicher',
                  shortFirstName: 'Christian',
                  shortLastName: 'Leicher'
                },
                {
                  id: '4g9wdhbfdr9ecv9fo782fmdhx',
                  type: 'Assistant referee 2',
                  firstName: 'Martin',
                  lastName: 'Thomsen',
                  shortFirstName: 'Dr. Martin',
                  shortLastName: 'Thomsen'
                },
                {
                  id: '7r0k3z1u6pmnsbyj17188rzkl',
                  type: 'Fourth official',
                  firstName: 'Nicolas',
                  lastName: 'Winter',
                  shortFirstName: 'Nicolas',
                  shortLastName: 'Winter'
                },
                {
                  id: 'dkuvyqaqop5u2jv91fr5jbnx1',
                  type: 'Video Assistant Referee',
                  firstName: 'Sascha',
                  lastName: 'Stegemann',
                  shortFirstName: 'Sascha',
                  shortLastName: 'Stegemann'
                },
                {
                  id: '4zrsf56yzgkhfivx7d7tohlud',
                  type: 'Assistant VAR Official',
                  firstName: 'Frederick',
                  lastName: 'Assmuth',
                  shortFirstName: 'Frederick',
                  shortLastName: 'Assmuth'
                }
              ]
            }
          }
        },
        {
          matchInfo: {
            id: '5rdhdgvg5ap0tqtf8glpnuvis',
            coverageLevel: '15',
            date: '2023-10-28Z',
            time: '13:30:00Z',
            localDate: '2023-10-28',
            localTime: '15:30:00',
            week: '9',
            numberOfPeriods: 2,
            periodLength: 45,
            lastUpdated: '2024-03-06T12:49:16Z',
            description: 'Werder Bremen vs Union Berlin',
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
                id: 'cu0eztmjcsbydyp53aleznorw',
                name: 'Werder Bremen',
                shortName: 'Bremen',
                officialName: 'SV Werder Bremen',
                code: 'SVW',
                position: 'home',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              },
              {
                id: 'a8d2gb2nag8fy0itbuxmcibh2',
                name: 'Union Berlin',
                shortName: 'Union Berlin',
                officialName: '1. FC Union Berlin',
                code: 'FCU',
                position: 'away',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              }
            ],
            venue: {
              id: '6yd5re1u172o6zxkrivudbn17',
              neutral: 'no',
              longName: 'wohninvest WESERSTADION',
              shortName: 'wohninvest WESERSTADION'
            }
          },
          liveData: {
            matchDetails: {
              periodId: 14,
              matchStatus: 'Played',
              winner: 'home',
              matchLengthMin: 99,
              matchLengthSec: 23,
              period: [
                {
                  id: 1,
                  start: '2023-10-28T13:31:13Z',
                  end: '2023-10-28T14:18:25Z',
                  lengthMin: 47,
                  lengthSec: 12,
                  announcedInjuryTime: 120
                },
                {
                  id: 2,
                  start: '2023-10-28T14:34:22Z',
                  end: '2023-10-28T15:26:33Z',
                  lengthMin: 52,
                  lengthSec: 11,
                  announcedInjuryTime: 420
                }
              ],
              scores: {
                ht: {
                  home: 1,
                  away: 0
                },
                ft: {
                  home: 2,
                  away: 0
                },
                total: {
                  home: 2,
                  away: 0
                }
              }
            },
            goal: [
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 1,
                timeMin: 38,
                timeMinSec: '37:38',
                lastUpdated: '2023-10-28T14:10:11Z',
                timestamp: '2023-10-28T14:08:52Z',
                type: 'OG',
                scorerId: 'cab22ojcuhdzdwmbtl20n8i51',
                scorerName: 'R. Knoche',
                optaEventId: '2609505387',
                homeScore: 1,
                awayScore: 0
              },
              {
                contestantId: 'cu0eztmjcsbydyp53aleznorw',
                periodId: 2,
                timeMin: 75,
                timeMinSec: '74:31',
                lastUpdated: '2023-10-28T15:04:57Z',
                timestamp: '2023-10-28T15:03:53Z',
                type: 'G',
                scorerId: '5ndmhtdu5jfgvzuddd7fu2fh1',
                scorerName: 'M. Ducksch',
                assistPlayerId: '6kge6vcoa9ocnh6tb8qznfzkl',
                assistPlayerName: 'M. Veljković',
                optaEventId: '2609619711',
                homeScore: 2,
                awayScore: 0
              }
            ],
            card: [
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 2,
                timeMin: 56,
                timeMinSec: '55:12',
                lastUpdated: '2023-10-28T14:44:51Z',
                timestamp: '2023-10-28T14:44:34Z',
                type: 'YC',
                playerId: '9qow77e16pvlb3860yjpydryt',
                playerName: 'R. Gosens',
                optaEventId: '2609592239',
                cardReason: 'Foul'
              },
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 2,
                timeMin: 60,
                timeMinSec: '59:56',
                lastUpdated: '2023-10-28T14:50:49Z',
                timestamp: '2023-10-28T14:49:18Z',
                type: 'RC',
                playerId: '1vv29mash2uijx542ssjk666t',
                playerName: 'R. Khedira',
                optaEventId: '2609603317',
                cardReason: 'Serious Foul'
              },
              {
                contestantId: 'cu0eztmjcsbydyp53aleznorw',
                periodId: 2,
                timeMin: 73,
                timeMinSec: '72:40',
                lastUpdated: '2023-10-28T15:19:32Z',
                timestamp: '2023-10-28T15:02:03Z',
                type: 'YC',
                playerId: '14fw7p4fzaxprndgxnx0gxgbt',
                playerName: 'J. Stage',
                optaEventId: '2609619119',
                cardReason: 'Foul'
              },
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 2,
                timeMin: 80,
                timeMinSec: '79:14',
                lastUpdated: '2023-10-28T15:10:47Z',
                timestamp: '2023-10-28T15:08:36Z',
                type: 'YC',
                playerId: '3g9riero16s160evc28u3q3u1',
                playerName: 'Diogo Leite',
                optaEventId: '2609633537',
                cardReason: 'Foul'
              },
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 2,
                timeMin: 85,
                timeMinSec: '84:24',
                lastUpdated: '2023-10-28T15:14:03Z',
                timestamp: '2023-10-28T15:13:47Z',
                type: 'YC',
                playerId: '280u0x6o94auqt5e8ff89xune',
                playerName: 'B. Hollerbach',
                optaEventId: '2609642151',
                cardReason: 'Foul'
              },
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 2,
                timeMin: 96,
                timeMinSec: '95:36',
                lastUpdated: '2024-01-06T14:54:22Z',
                timestamp: '2023-10-28T15:24:59Z',
                type: 'YC',
                playerId: 'a2l72iohmbq6rjr3rzrsvnwt1',
                playerName: 'A. Laïdouni',
                optaEventId: '2609668947',
                cardReason: 'Foul'
              }
            ],
            substitute: [
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 2,
                timeMin: 60,
                timeMinSec: '59:19',
                lastUpdated: '2024-01-06T14:54:22Z',
                timestamp: '2023-10-28T14:48:42Z',
                playerOnId: 'a2l72iohmbq6rjr3rzrsvnwt1',
                playerOnName: 'A. Laïdouni',
                playerOffId: '8rrcscn29rs1gk8mi1pwpu92i',
                playerOffName: 'B. Aaronson',
                subReason: 'Tactical'
              },
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 2,
                timeMin: 65,
                timeMinSec: '64:24',
                lastUpdated: '2023-11-15T14:52:19Z',
                timestamp: '2023-10-28T14:53:47Z',
                playerOnId: '9taxidttdt94nmvc3mqhqq0ut',
                playerOnName: 'A. Král',
                playerOffId: '24vavcwn4hco5je9kdu9ciwgl',
                playerOffName: 'J. Haberer',
                subReason: 'Tactical'
              },
              {
                contestantId: 'cu0eztmjcsbydyp53aleznorw',
                periodId: 2,
                timeMin: 76,
                timeMinSec: '75:53',
                lastUpdated: '2023-10-28T15:05:32Z',
                timestamp: '2023-10-28T15:05:16Z',
                playerOnId: '39tod1iad3ztq17qveh8pwp9l',
                playerOnName: 'S. Lynen',
                playerOffId: '26nfmfc8p2doisd9p8vtd33dh',
                playerOffName: 'L. Bittencourt',
                subReason: 'Tactical'
              },
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 2,
                timeMin: 78,
                timeMinSec: '77:34',
                lastUpdated: '2023-10-28T15:07:30Z',
                timestamp: '2023-10-28T15:06:57Z',
                playerOnId: '40rzvcdss138e6futx3bht3o5',
                playerOnName: 'J. Roussillon',
                playerOffId: '9qow77e16pvlb3860yjpydryt',
                playerOffName: 'R. Gosens',
                subReason: 'Tactical'
              },
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 2,
                timeMin: 78,
                timeMinSec: '77:37',
                lastUpdated: '2023-10-28T15:07:24Z',
                timestamp: '2023-10-28T15:07:00Z',
                playerOnId: 'etfmz143p0d2yowiiijd8g6sq',
                playerOnName: 'M. Kaufmann',
                playerOffId: '7424gvk9hiq5up61dj181y66t',
                playerOffName: 'K. Behrens',
                subReason: 'Tactical'
              },
              {
                contestantId: 'a8d2gb2nag8fy0itbuxmcibh2',
                periodId: 2,
                timeMin: 78,
                timeMinSec: '77:47',
                lastUpdated: '2023-10-28T15:07:24Z',
                timestamp: '2023-10-28T15:07:10Z',
                playerOnId: '280u0x6o94auqt5e8ff89xune',
                playerOnName: 'B. Hollerbach',
                playerOffId: 'cywgibmici8hwp1ad1nhk3ufp',
                playerOffName: 'S. Becker',
                subReason: 'Tactical'
              },
              {
                contestantId: 'cu0eztmjcsbydyp53aleznorw',
                periodId: 2,
                timeMin: 84,
                timeMinSec: '83:09',
                lastUpdated: '2023-10-28T15:12:47Z',
                timestamp: '2023-10-28T15:12:32Z',
                playerOnId: '2kd2kqh0ykd5iuziic6590gve',
                playerOnName: 'N. Woltemade',
                playerOffId: '5ndmhtdu5jfgvzuddd7fu2fh1',
                playerOffName: 'M. Ducksch',
                subReason: 'Tactical'
              },
              {
                contestantId: 'cu0eztmjcsbydyp53aleznorw',
                periodId: 2,
                timeMin: 89,
                timeMinSec: '88:16',
                lastUpdated: '2023-10-29T01:40:46Z',
                timestamp: '2023-10-28T15:17:38Z',
                playerOnId: '68rs7juin2mmdok00hw6uvre2',
                playerOnName: 'J. Njinmah',
                playerOffId: 'b4q9q0qgmtz959rygieg9ln1l',
                playerOffName: 'R. Schmid',
                subReason: 'Injury'
              },
              {
                contestantId: 'cu0eztmjcsbydyp53aleznorw',
                periodId: 2,
                timeMin: 89,
                timeMinSec: '88:18',
                lastUpdated: '2023-10-28T15:17:51Z',
                timestamp: '2023-10-28T15:17:40Z',
                playerOnId: 'f14n6d52p37nkvoo5n3i52x2h',
                playerOnName: 'F. Agu',
                playerOffId: '5wn1xudozb4s78x0m8ch7vn8q',
                playerOffName: 'O. Deman',
                subReason: 'Tactical'
              }
            ],
            matchDetailsExtra: {
              attendance: '42100',
              matchOfficial: [
                {
                  id: 'ccp1oxsy2nciu7pmjuc8mou6t',
                  type: 'Main',
                  firstName: 'Tobias',
                  lastName: 'Stieler',
                  shortFirstName: 'Tobias',
                  shortLastName: 'Stieler'
                },
                {
                  id: '4z97bx1lcyi1l921exurt4jit',
                  type: 'Assistant referee 1',
                  firstName: 'Christian',
                  lastName: 'Gittelmann',
                  shortFirstName: 'Christian',
                  shortLastName: 'Gittelmann'
                },
                {
                  id: '244fpx0hh5z5065e4mo197utx',
                  type: 'Assistant referee 2',
                  firstName: 'Mark',
                  lastName: 'Borsch',
                  shortFirstName: 'Mark',
                  shortLastName: 'Borsch'
                },
                {
                  id: '9qsg6ewudy9foq3uyxqcge50p',
                  type: 'Fourth official',
                  firstName: 'Patrick',
                  lastName: 'Schwengers',
                  shortFirstName: 'Patrick',
                  shortLastName: 'Schwengers'
                },
                {
                  id: '332hs8ojvmjxz2gqh3z9gzaol',
                  type: 'Video Assistant Referee',
                  firstName: 'Pascal',
                  lastName: 'Müller',
                  shortFirstName: 'Pascal',
                  shortLastName: 'Müller'
                },
                {
                  id: '8l1ywzawbdal4rws6zedyc0r9',
                  type: 'Assistant VAR Official',
                  firstName: 'Christian',
                  lastName: 'Dietz',
                  shortFirstName: 'Christian',
                  shortLastName: 'Dietz'
                }
              ]
            }
          }
        },
        {
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
          },
          liveData: {
            matchDetails: {
              periodId: 14,
              matchStatus: 'Played',
              winner: 'home',
              matchLengthMin: 102,
              matchLengthSec: 26,
              period: [
                {
                  id: 1,
                  start: '2023-10-28T13:30:08Z',
                  end: '2023-10-28T14:21:34Z',
                  lengthMin: 51,
                  lengthSec: 26,
                  announcedInjuryTime: 240
                },
                {
                  id: 2,
                  start: '2023-10-28T14:36:50Z',
                  end: '2023-10-28T15:27:50Z',
                  lengthMin: 51,
                  lengthSec: 0,
                  announcedInjuryTime: 360
                }
              ],
              scores: {
                ht: {
                  home: 1,
                  away: 2
                },
                ft: {
                  home: 3,
                  away: 2
                },
                total: {
                  home: 3,
                  away: 2
                }
              }
            },
            goal: [
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 1,
                timeMin: 17,
                timeMinSec: '16:33',
                lastUpdated: '2023-10-28T13:47:55Z',
                timestamp: '2023-10-28T13:46:42Z',
                type: 'G',
                scorerId: 'dg6vrx8k026l7f8ytbu1xxj9x',
                scorerName: 'P. Tietz',
                optaEventId: '2609474311',
                homeScore: 1,
                awayScore: 0
              },
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 1,
                timeMin: 35,
                timeMinSec: '34:27',
                lastUpdated: '2023-10-28T14:05:01Z',
                timestamp: '2023-10-28T14:04:35Z',
                type: 'G',
                scorerId: 'eswxx8pxqyuj7rnpvqawpej1l',
                scorerName: 'J. Wind',
                optaEventId: '2609494151',
                homeScore: 1,
                awayScore: 1
              },
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 1,
                timeMin: 45,
                timeMinSec: '44:50',
                lastUpdated: '2023-10-28T14:15:06Z',
                timestamp: '2023-10-28T14:14:58Z',
                type: 'PG',
                scorerId: '3hd9nxdb54zn4fhbf7qa7x0q1',
                scorerName: 'L. Majer',
                optaEventId: '2609520609',
                homeScore: 1,
                awayScore: 2
              },
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 2,
                timeMin: 79,
                timeMinSec: '78:21',
                lastUpdated: '2023-10-28T15:10:27Z',
                timestamp: '2023-10-28T15:10:11Z',
                type: 'OG',
                scorerId: 'fr9ac60188vlmtbrcddhxii1',
                scorerName: 'S. Bornauw',
                optaEventId: '2609633159',
                homeScore: 2,
                awayScore: 2
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 81,
                timeMinSec: '80:36',
                lastUpdated: '2023-10-28T15:13:48Z',
                timestamp: '2023-10-28T15:12:27Z',
                type: 'G',
                scorerId: 'b6woton2db3w4rm67vu69buy2',
                scorerName: 'A. Engels',
                assistPlayerId: '4gmknefwu0tt33z88tu75xmg9',
                assistPlayerName: 'Iago',
                optaEventId: '2609638739',
                homeScore: 3,
                awayScore: 2
              }
            ],
            card: [
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 1,
                timeMin: 6,
                timeMinSec: '5:40',
                lastUpdated: '2023-10-28T13:36:10Z',
                timestamp: '2023-10-28T13:35:49Z',
                type: 'YC',
                playerId: '6lfje6glfgycun47flgmc9jvt',
                playerName: 'J. Mæhle',
                optaEventId: '2609462339',
                cardReason: 'Simulation'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 1,
                timeMin: 50,
                timeMinSec: '49:04',
                lastUpdated: '2023-10-28T14:20:11Z',
                timestamp: '2023-10-28T14:19:12Z',
                type: 'YC',
                playerId: 'tedxo29s8xx0a71z6sidw7v9',
                playerName: 'J. Gouweleeuw',
                optaEventId: '2609532461',
                cardReason: 'Dissent'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 1,
                timeMin: 50,
                timeMinSec: '49:26',
                lastUpdated: '2023-10-28T14:21:30Z',
                timestamp: '2023-10-28T14:19:34Z',
                type: 'YC',
                playerId: 'egmcpa7j5clzga5m0zvg2f105',
                playerName: 'M. Pedersen',
                optaEventId: '2609535419',
                cardReason: 'Foul'
              },
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 2,
                timeMin: 66,
                timeMinSec: '65:16',
                lastUpdated: '2023-10-28T14:57:22Z',
                timestamp: '2023-10-28T14:57:07Z',
                type: 'YC',
                playerId: '9ic8hvnkzj9p0ikh6bwaeoqju',
                playerName: 'Tiago Tomás',
                optaEventId: '2609612941',
                cardReason: 'Foul'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 73,
                timeMinSec: '72:45',
                lastUpdated: '2023-10-28T15:09:17Z',
                timestamp: '2023-10-28T15:04:36Z',
                type: 'YC',
                playerId: '4kolmisdpprx0wrahisadl5n9',
                playerName: 'E. Rexhbeçaj',
                optaEventId: '2609629885',
                cardReason: 'Argument'
              },
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 2,
                timeMin: 73,
                timeMinSec: '72:50',
                lastUpdated: '2023-10-28T15:07:27Z',
                timestamp: '2023-10-28T15:04:40Z',
                type: 'YC',
                playerId: 'acxwc7xxrtyssiy390t859kgl',
                playerName: 'M. Arnold',
                optaEventId: '2609623385',
                cardReason: 'Argument'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 84,
                timeMinSec: '83:39',
                lastUpdated: '2023-10-28T15:16:18Z',
                timestamp: '2023-10-28T15:15:29Z',
                type: 'YC',
                playerId: '3j2pv0methgc8k8rtqbi079p1',
                playerName: 'F. Uduokhai',
                optaEventId: '2609646295',
                cardReason: 'Foul'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 85,
                timeMinSec: '84:50',
                lastUpdated: '2023-10-28T15:18:21Z',
                timestamp: '2023-10-28T15:16:41Z',
                type: 'YC',
                playerId: '1ic5mnwhm510mptrxz04zmtm2',
                playerName: 'D. Beljo',
                optaEventId: '2609652761',
                cardReason: 'Foul'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 87,
                timeMinSec: '86:30',
                lastUpdated: '2023-10-28T15:18:46Z',
                timestamp: '2023-10-28T15:18:20Z',
                type: 'Y2C',
                playerId: '3j2pv0methgc8k8rtqbi079p1',
                playerName: 'F. Uduokhai',
                optaEventId: '2609653285',
                cardReason: 'Foul'
              },
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 2,
                timeMin: 92,
                timeMinSec: '91:04',
                lastUpdated: '2023-10-28T15:23:25Z',
                timestamp: '2023-10-28T15:22:55Z',
                type: 'YC',
                playerId: 'fr9ac60188vlmtbrcddhxii1',
                playerName: 'S. Bornauw',
                optaEventId: '2609664353',
                cardReason: 'Foul'
              }
            ],
            substitute: [
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 2,
                timeMin: 52,
                timeMinSec: '51:24',
                lastUpdated: '2023-10-28T14:43:40Z',
                timestamp: '2023-10-28T14:43:15Z',
                playerOnId: '9ic8hvnkzj9p0ikh6bwaeoqju',
                playerOnName: 'Tiago Tomás',
                playerOffId: 'aplc9mad75h1k90o3qla9c7l6',
                playerOffName: 'P. Wimmer',
                subReason: 'Tactical'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 63,
                timeMinSec: '62:44',
                lastUpdated: '2023-10-28T14:54:45Z',
                timestamp: '2023-10-28T14:54:35Z',
                playerOnId: '4gmknefwu0tt33z88tu75xmg9',
                playerOnName: 'Iago',
                playerOffId: 'egmcpa7j5clzga5m0zvg2f105',
                playerOffName: 'M. Pedersen',
                subReason: 'Tactical'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 63,
                timeMinSec: '62:51',
                lastUpdated: '2024-03-21T14:27:03Z',
                timestamp: '2023-10-28T14:54:42Z',
                playerOnId: '4zrut521fzw9fddqt74pnl756',
                playerOnName: 'R. Vargas',
                playerOffId: '5pnfmmq8b8jxmp1qnf82d8out',
                playerOffName: 'S. Michel',
                subReason: 'Tactical'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 63,
                timeMinSec: '62:56',
                lastUpdated: '2023-10-28T14:56:35Z',
                timestamp: '2023-10-28T14:54:46Z',
                playerOnId: 'b6woton2db3w4rm67vu69buy2',
                playerOnName: 'A. Engels',
                playerOffId: '5q3ft0wiy6lsy937j7nw6msq1',
                playerOffName: 'N. Dorsch',
                subReason: 'Tactical'
              },
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 2,
                timeMin: 74,
                timeMinSec: '73:36',
                lastUpdated: '2023-10-28T15:05:54Z',
                timestamp: '2023-10-28T15:05:26Z',
                playerOnId: 'd2ykrr75737c8bzlwhjj90vkl',
                playerOnName: 'Y. Gerhardt',
                playerOffId: '3hd9nxdb54zn4fhbf7qa7x0q1',
                playerOffName: 'L. Majer',
                subReason: 'Tactical'
              },
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 2,
                timeMin: 74,
                timeMinSec: '73:40',
                lastUpdated: '2023-10-28T15:05:54Z',
                timestamp: '2023-10-28T15:05:30Z',
                playerOnId: 'fr9ac60188vlmtbrcddhxii1',
                playerOnName: 'S. Bornauw',
                playerOffId: '2dxsntw3djezptdjqzu0oxi7e',
                playerOffName: 'K. Paredes',
                subReason: 'Tactical'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 78,
                timeMinSec: '77:07',
                lastUpdated: '2023-10-28T16:47:38Z',
                timestamp: '2023-10-28T15:08:57Z',
                playerOnId: '1t3ye17day755v0y3k2er9kut',
                playerOnName: 'M. Okugawa',
                playerOffId: '5arng6g4ietx2jwgcd2kpqdpl',
                playerOffName: 'R. Gumny',
                subReason: 'Tactical'
              },
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 78,
                timeMinSec: '77:12',
                lastUpdated: '2023-10-28T16:47:38Z',
                timestamp: '2023-10-28T15:09:02Z',
                playerOnId: '1ic5mnwhm510mptrxz04zmtm2',
                playerOnName: 'D. Beljo',
                playerOffId: '9bzlvn0twr2b5z30k30gugw5x',
                playerOffName: 'F. Jensen',
                subReason: 'Tactical'
              },
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 2,
                timeMin: 87,
                timeMinSec: '86:03',
                lastUpdated: '2023-10-28T15:18:12Z',
                timestamp: '2023-10-28T15:17:54Z',
                playerOnId: '23l48u4w5nj4036whjm3s49gp',
                playerOnName: 'R. Baku',
                playerOffId: 'azcv772qzdbz1exafx3od6lt5',
                playerOffName: 'N. Cozza',
                subReason: 'Tactical'
              },
              {
                contestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
                periodId: 2,
                timeMin: 87,
                timeMinSec: '86:05',
                lastUpdated: '2023-10-28T15:18:22Z',
                timestamp: '2023-10-28T15:17:55Z',
                playerOnId: 'c1yctqdku2vzho2azsgcy5dcl',
                playerOnName: 'V. Černý',
                playerOffId: 'bm5w5xsbbflm26pdhmejwgvs9',
                playerOffName: 'M. Jenz',
                subReason: 'Tactical'
              }
            ],
            VAR: [
              {
                contestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
                periodId: 2,
                timeMin: 71,
                timeMinSec: '70:10',
                lastUpdated: '2023-10-28T15:03:08Z',
                timestamp: '2023-10-28T15:02:00Z',
                type: 'Goal awarded',
                decision: 'Cancelled',
                outcome: 'No goal',
                playerId: 'dg6vrx8k026l7f8ytbu1xxj9x',
                playerName: 'P. Tietz',
                optaEventId: '2609618125'
              }
            ],
            matchDetailsExtra: {
              attendance: '28000',
              matchOfficial: [
                {
                  id: 'efr9c2lmnhj0egh649gsrf2dx',
                  type: 'Main',
                  firstName: 'Daniel',
                  lastName: 'Schlager',
                  shortFirstName: 'Daniel',
                  shortLastName: 'Schlager'
                },
                {
                  id: '33qnbshoe8a54pcfe2xwtq47p',
                  type: 'Assistant referee 1',
                  firstName: 'Sven',
                  lastName: 'Waschitzki',
                  shortFirstName: 'Sven',
                  shortLastName: 'Waschitzki-Günther'
                },
                {
                  id: '61hoobzwp2e47k008dysh9oet',
                  type: 'Assistant referee 2',
                  firstName: 'Arno',
                  lastName: 'Blos',
                  shortFirstName: 'Arno',
                  shortLastName: 'Blos'
                },
                {
                  id: '540kjosa8d2k3j73ne89x7jrp',
                  type: 'Fourth official',
                  firstName: 'Matthias',
                  lastName: 'Jöllenbeck',
                  shortFirstName: 'Dr. Matthias',
                  shortLastName: 'Jöllenbeck'
                },
                {
                  id: 'cct879b08oub15w0kq7n36385',
                  type: 'Video Assistant Referee',
                  firstName: 'Guido',
                  lastName: 'Winkmann',
                  shortFirstName: 'Guido',
                  shortLastName: 'Winkmann'
                },
                {
                  id: 'dkeg582o9nch004am5gm57lcl',
                  type: 'Assistant VAR Official',
                  firstName: 'Thorben',
                  lastName: 'Siewer',
                  shortFirstName: 'Thorben',
                  shortLastName: 'Siewer'
                }
              ]
            }
          }
        },
        {
          matchInfo: {
            id: '5s67qy9333vhpgsmyar0ly8t0',
            coverageLevel: '15',
            date: '2023-10-28Z',
            time: '13:30:00Z',
            localDate: '2023-10-28',
            localTime: '15:30:00',
            week: '9',
            numberOfPeriods: 2,
            periodLength: 45,
            lastUpdated: '2024-03-20T04:55:29Z',
            description: 'Stuttgart vs Hoffenheim',
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
                id: '3dwlvz6cl4lcavvrg0y2dycrt',
                name: 'Stuttgart',
                shortName: 'Stuttgart',
                officialName: 'VfB Stuttgart 1893',
                code: 'VFB',
                position: 'home',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              },
              {
                id: '4l9mrqzmajz5crzlz50mtbt6x',
                name: 'Hoffenheim',
                shortName: 'Hoffenheim',
                officialName: 'TSG 1899 Hoffenheim',
                code: 'TSG',
                position: 'away',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              }
            ],
            venue: {
              id: '66xp0t98ig8nnn8r4yvenn6lp',
              neutral: 'no',
              longName: 'MHPArena',
              shortName: 'MHPArena'
            }
          },
          liveData: {
            matchDetails: {
              periodId: 14,
              matchStatus: 'Played',
              winner: 'away',
              matchLengthMin: 102,
              matchLengthSec: 8,
              period: [
                {
                  id: 1,
                  start: '2023-10-28T13:30:20Z',
                  end: '2023-10-28T14:20:21Z',
                  lengthMin: 50,
                  lengthSec: 1,
                  announcedInjuryTime: 300
                },
                {
                  id: 2,
                  start: '2023-10-28T14:38:12Z',
                  end: '2023-10-28T15:30:19Z',
                  lengthMin: 52,
                  lengthSec: 7,
                  announcedInjuryTime: 360
                }
              ],
              scores: {
                ht: {
                  home: 0,
                  away: 2
                },
                ft: {
                  home: 2,
                  away: 3
                },
                total: {
                  home: 2,
                  away: 3
                }
              }
            },
            goal: [
              {
                contestantId: '4l9mrqzmajz5crzlz50mtbt6x',
                periodId: 1,
                timeMin: 4,
                timeMinSec: '3:57',
                lastUpdated: '2023-10-28T13:34:45Z',
                timestamp: '2023-10-28T13:34:18Z',
                type: 'G',
                scorerId: '57c808184l80uuuv7z3flcu6t',
                scorerName: 'G. Prömel',
                optaEventId: '2609460653',
                homeScore: 0,
                awayScore: 1
              },
              {
                contestantId: '4l9mrqzmajz5crzlz50mtbt6x',
                periodId: 1,
                timeMin: 21,
                timeMinSec: '20:40',
                lastUpdated: '2023-10-28T13:51:10Z',
                timestamp: '2023-10-28T13:51:01Z',
                type: 'PG',
                scorerId: '57btqxe5sy3ygzxpp55p4umdx',
                scorerName: 'W. Weghorst',
                optaEventId: '2609477963',
                homeScore: 0,
                awayScore: 2
              },
              {
                contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
                periodId: 2,
                timeMin: 61,
                timeMinSec: '60:37',
                lastUpdated: '2023-10-28T14:54:46Z',
                timestamp: '2023-10-28T14:53:49Z',
                type: 'G',
                scorerId: '3havaatbnk8p6gc9srgajc25l',
                scorerName: 'C. Führich',
                assistPlayerId: '6rutvrgco8li4nyz7tfayxb6x',
                assistPlayerName: 'D. Undav',
                optaEventId: '2609609687',
                homeScore: 1,
                awayScore: 2
              },
              {
                contestantId: '4l9mrqzmajz5crzlz50mtbt6x',
                periodId: 2,
                timeMin: 66,
                timeMinSec: '65:37',
                lastUpdated: '2023-10-28T14:59:10Z',
                timestamp: '2023-10-28T14:58:49Z',
                type: 'G',
                scorerId: 'arwidogdfccsjv8fxa1veezf9',
                scorerName: 'R. Skov',
                optaEventId: '2609614359',
                homeScore: 1,
                awayScore: 3
              },
              {
                contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
                periodId: 2,
                timeMin: 73,
                timeMinSec: '72:47',
                lastUpdated: '2023-11-25T11:39:57Z',
                timestamp: '2023-10-28T15:05:59Z',
                type: 'G',
                scorerId: '6rutvrgco8li4nyz7tfayxb6x',
                scorerName: 'D. Undav',
                optaEventId: '2609623281',
                homeScore: 2,
                awayScore: 3
              }
            ],
            missedPen: [
              {
                contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
                periodId: 1,
                timeMin: 30,
                timeMinSec: '29:42',
                lastUpdated: '2023-11-25T11:39:57Z',
                timestamp: '2023-10-28T14:00:03Z',
                type: 'PM',
                playerId: '6rutvrgco8li4nyz7tfayxb6x',
                playerName: 'D. Undav',
                optaEventId: '2609484569'
              },
              {
                contestantId: '4l9mrqzmajz5crzlz50mtbt6x',
                periodId: 1,
                timeMin: 30,
                timeMinSec: '29:43',
                lastUpdated: '2023-10-28T14:00:53Z',
                timestamp: '2023-10-28T14:00:03Z',
                type: 'PS',
                playerId: 'cm8po8ez5w9ms01gid6w3kwk5',
                playerName: 'O. Baumann',
                optaEventId: '2609484559'
              }
            ],
            card: [
              {
                contestantId: '4l9mrqzmajz5crzlz50mtbt6x',
                periodId: 1,
                timeMin: 17,
                timeMinSec: '16:03',
                lastUpdated: '2023-12-21T07:30:33Z',
                timestamp: '2023-10-28T13:46:24Z',
                type: 'YC',
                playerId: '6yhylu5q0y924amgv7vlodkgl',
                playerName: 'K. Akpoguma',
                optaEventId: '2609473867',
                cardReason: 'Foul'
              },
              {
                contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
                periodId: 1,
                timeMin: 21,
                timeMinSec: '20:06',
                lastUpdated: '2023-10-28T13:52:34Z',
                timestamp: '2023-10-28T13:50:26Z',
                type: 'YC',
                playerId: '4c4ghf9zlkof83n5mnmva61d6',
                playerName: 'A. Rouault',
                optaEventId: '2609478429',
                cardReason: 'Foul'
              },
              {
                contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
                periodId: 2,
                timeMin: 80,
                timeMinSec: '79:28',
                lastUpdated: '2023-10-28T15:12:57Z',
                timestamp: '2023-10-28T15:12:40Z',
                type: 'YC',
                playerId: '3havaatbnk8p6gc9srgajc25l',
                playerName: 'C. Führich',
                optaEventId: '2609639213',
                cardReason: 'Foul'
              }
            ],
            substitute: [
              {
                contestantId: '4l9mrqzmajz5crzlz50mtbt6x',
                periodId: 1,
                timeMin: 32,
                timeMinSec: '31:26',
                lastUpdated: '2023-10-28T14:02:00Z',
                timestamp: '2023-10-28T14:01:46Z',
                playerOnId: 'az7owi5t4bclkamjsjuyxzv1l',
                playerOnName: 'A. Stach',
                playerOffId: '1ekkj2b713kjnugsk4dz50q1h',
                playerOffName: 'F. Grillitsch',
                subReason: 'Injury'
              },
              {
                contestantId: '4l9mrqzmajz5crzlz50mtbt6x',
                periodId: 2,
                timeMin: 52,
                timeMinSec: '51:40',
                lastUpdated: '2023-11-14T10:13:17Z',
                timestamp: '2023-10-28T14:44:52Z',
                playerOnId: 'bkbmygo5f1glcs6xssawl26z9',
                playerOnName: 'I. Bebou',
                playerOffId: 'shbxc528h0udd6rdf3ax2itx',
                playerOffName: 'P. Kadeřábek',
                subReason: 'Injury'
              },
              {
                contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
                periodId: 2,
                timeMin: 64,
                timeMinSec: '63:15',
                lastUpdated: '2023-10-28T14:56:36Z',
                timestamp: '2023-10-28T14:56:27Z',
                playerOnId: '4xhnmoqgxoheel005ek6ckfs9',
                playerOnName: 'D. Zagadou',
                playerOffId: '4c4ghf9zlkof83n5mnmva61d6',
                playerOffName: 'A. Rouault',
                subReason: 'Tactical'
              },
              {
                contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
                periodId: 2,
                timeMin: 67,
                timeMinSec: '66:31',
                lastUpdated: '2024-03-18T15:27:59Z',
                timestamp: '2023-10-28T14:59:43Z',
                playerOnId: 'arjwwth6yazptr851wu2u6e0a',
                playerOnName: 'Jeong Woo-Yeong',
                playerOffId: '7gzdg0j9usc3yq0dd1ad57sgl',
                playerOffName: 'P. Stenzel',
                subReason: 'Tactical'
              },
              {
                contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
                periodId: 2,
                timeMin: 67,
                timeMinSec: '66:33',
                lastUpdated: '2023-10-29T02:39:03Z',
                timestamp: '2023-10-28T14:59:45Z',
                playerOnId: 'bt35y17wl42b5t5tw6z68uwyy',
                playerOnName: 'J. Leweling',
                playerOffId: 'a4p1m3cqm6z2p1bw97s6k46ad',
                playerOffName: 'A. Karazor',
                subReason: 'Tactical'
              },
              {
                contestantId: '4l9mrqzmajz5crzlz50mtbt6x',
                periodId: 2,
                timeMin: 78,
                timeMinSec: '77:30',
                lastUpdated: '2023-10-28T15:10:50Z',
                timestamp: '2023-10-28T15:10:43Z',
                playerOnId: '6teffw7m19t1b3auxy22y4m0a',
                playerOnName: 'U. Tohumcu',
                playerOffId: '6sj31v61vtwwxe5hhwkj80g7o',
                playerOffName: 'T. Bischof',
                subReason: 'Tactical'
              },
              {
                contestantId: '4l9mrqzmajz5crzlz50mtbt6x',
                periodId: 2,
                timeMin: 78,
                timeMinSec: '77:39',
                lastUpdated: '2023-10-28T15:10:57Z',
                timestamp: '2023-10-28T15:10:51Z',
                playerOnId: '6b7p3ncup75mpop91n0u1mw2d',
                playerOnName: 'M. Bülter',
                playerOffId: 'xuk3qlmk4985hs8ocjjd49ka',
                playerOffName: 'M. Beier',
                subReason: 'Tactical'
              },
              {
                contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
                periodId: 2,
                timeMin: 83,
                timeMinSec: '82:25',
                lastUpdated: '2024-02-14T08:02:40Z',
                timestamp: '2023-10-28T15:15:38Z',
                playerOnId: 'acrwmucmu5zajj159f30of384',
                playerOnName: 'J. Milošević',
                playerOffId: '3havaatbnk8p6gc9srgajc25l',
                playerOffName: 'C. Führich',
                subReason: 'Tactical'
              },
              {
                contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
                periodId: 2,
                timeMin: 83,
                timeMinSec: '82:41',
                lastUpdated: '2023-10-28T15:16:21Z',
                timestamp: '2023-10-28T15:15:53Z',
                playerOnId: '80nniieqtuwjhomwjcebnxyzu',
                playerOnName: 'L. Egloff',
                playerOffId: '9fd19beamnr8qmhqdvzr7fcyy',
                playerOffName: 'S. Katompa Mvumpa',
                subReason: 'Tactical'
              }
            ],
            VAR: [
              {
                contestantId: '4l9mrqzmajz5crzlz50mtbt6x',
                periodId: 1,
                timeMin: 20,
                timeMinSec: '19:33',
                lastUpdated: '2023-10-29T02:39:01Z',
                timestamp: '2023-10-28T13:49:01Z',
                type: 'Penalty not awarded',
                decision: 'Cancelled',
                outcome: 'Penalty',
                playerId: 'xuk3qlmk4985hs8ocjjd49ka',
                playerName: 'M. Beier',
                optaEventId: '2609476771'
              }
            ],
            matchDetailsExtra: {
              attendance: '53200',
              matchOfficial: [
                {
                  id: 'cd7v1a5r8quc0cyixj5rhm95h',
                  type: 'Main',
                  firstName: 'Felix',
                  lastName: 'Zwayer',
                  shortFirstName: 'Felix',
                  shortLastName: 'Zwayer'
                },
                {
                  id: 'ctenznzqyajwm9w99cge76cph',
                  type: 'Assistant referee 1',
                  firstName: 'Stefan',
                  lastName: 'Lupp',
                  shortFirstName: 'Stefan',
                  shortLastName: 'Lupp'
                },
                {
                  id: '4uy3ze82wufh6y07516mjfro5',
                  type: 'Assistant referee 2',
                  firstName: 'Marco',
                  lastName: 'Achmüller',
                  shortFirstName: 'Marco',
                  shortLastName: 'Achmüller'
                },
                {
                  id: '5jncj8i1pzgcvmkp2zufh8dsl',
                  type: 'Fourth official',
                  firstName: 'Robert',
                  lastName: 'Kampka',
                  shortFirstName: 'Dr. Robert',
                  shortLastName: 'Kampka'
                },
                {
                  id: '9tg802g39j8f7j14amdw2w251',
                  type: 'Video Assistant Referee',
                  firstName: 'Sören',
                  lastName: 'Storks',
                  shortFirstName: 'Sören',
                  shortLastName: 'Storks'
                },
                {
                  id: '4sr7hvkk1utiejj1m6cwlqllh',
                  type: 'Assistant VAR Official',
                  firstName: 'Christian',
                  lastName: 'Fischer',
                  shortFirstName: 'Christian',
                  shortLastName: 'Fischer'
                }
              ]
            }
          }
        },
        {
          matchInfo: {
            id: '5qb5b3cqg04rqvo1l6xgcsob8',
            coverageLevel: '15',
            date: '2023-10-28Z',
            time: '16:30:00Z',
            localDate: '2023-10-28',
            localTime: '18:30:00',
            week: '9',
            numberOfPeriods: 2,
            periodLength: 45,
            lastUpdated: '2024-03-21T12:22:48Z',
            description: 'RB Leipzig vs Köln',
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
                id: '9gefq4dz9b2hl8rqrxwrlrzmp',
                name: 'RB Leipzig',
                shortName: 'Leipzig',
                officialName: 'RasenBallsport Leipzig',
                code: 'RBL',
                position: 'home',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              },
              {
                id: '8q1ul09cygzswb7tb456bmifv',
                name: 'Köln',
                shortName: 'Köln',
                officialName: '1. FC Köln',
                code: 'KOE',
                position: 'away',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              }
            ],
            venue: {
              id: '9mqy5x63u8ypvzpydw06lnje',
              neutral: 'no',
              longName: 'Red Bull Arena',
              shortName: 'Red Bull Arena'
            }
          },
          liveData: {
            matchDetails: {
              periodId: 14,
              matchStatus: 'Played',
              winner: 'home',
              matchLengthMin: 97,
              matchLengthSec: 7,
              period: [
                {
                  id: 1,
                  start: '2023-10-28T16:30:07Z',
                  end: '2023-10-28T17:19:08Z',
                  lengthMin: 49,
                  lengthSec: 1,
                  announcedInjuryTime: 240
                },
                {
                  id: 2,
                  start: '2023-10-28T17:35:13Z',
                  end: '2023-10-28T18:23:19Z',
                  lengthMin: 48,
                  lengthSec: 6,
                  announcedInjuryTime: 180
                }
              ],
              scores: {
                ht: {
                  home: 4,
                  away: 0
                },
                ft: {
                  home: 6,
                  away: 0
                },
                total: {
                  home: 6,
                  away: 0
                }
              }
            },
            goal: [
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 1,
                timeMin: 15,
                timeMinSec: '14:25',
                lastUpdated: '2023-10-28T16:44:44Z',
                timestamp: '2023-10-28T16:44:33Z',
                type: 'PG',
                scorerId: '2pjr6yz65f4uqvwniy4vphn85',
                scorerName: 'T. Werner',
                optaEventId: '2609787119',
                homeScore: 1,
                awayScore: 0
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 1,
                timeMin: 40,
                timeMinSec: '39:48',
                lastUpdated: '2023-10-28T17:10:54Z',
                timestamp: '2023-10-28T17:09:56Z',
                type: 'G',
                scorerId: '64ubq0xra74xaunooi8knyajt',
                scorerName: 'L. Openda',
                assistPlayerId: 'exhxdmdq49xj4dnguq03qnlgq',
                assistPlayerName: 'X. Simons',
                optaEventId: '2609813085',
                homeScore: 2,
                awayScore: 0
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 1,
                timeMin: 43,
                timeMinSec: '42:46',
                lastUpdated: '2023-10-28T17:43:51Z',
                timestamp: '2023-10-28T17:12:54Z',
                type: 'G',
                scorerId: '2uz1cmslnjjzsgfcgji26kqg9',
                scorerName: 'D. Raum',
                assistPlayerId: '3isbv9egu9vzxnna4ix8gcudx',
                assistPlayerName: 'B. Henrichs',
                optaEventId: '2609817587',
                homeScore: 3,
                awayScore: 0
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 1,
                timeMin: 48,
                timeMinSec: '47:03',
                lastUpdated: '2023-10-28T17:18:05Z',
                timestamp: '2023-10-28T17:17:11Z',
                type: 'G',
                scorerId: '64ubq0xra74xaunooi8knyajt',
                scorerName: 'L. Openda',
                assistPlayerId: 'exhxdmdq49xj4dnguq03qnlgq',
                assistPlayerName: 'X. Simons',
                optaEventId: '2609823405',
                homeScore: 4,
                awayScore: 0
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 2,
                timeMin: 88,
                timeMinSec: '87:06',
                lastUpdated: '2024-02-16T16:49:19Z',
                timestamp: '2023-10-28T18:17:20Z',
                type: 'G',
                scorerId: '4ynekiqwgd0l8h7cuyvdl28ve',
                scorerName: 'B. Šeško',
                optaEventId: '2609890993',
                homeScore: 5,
                awayScore: 0
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 2,
                timeMin: 91,
                timeMinSec: '90:54',
                lastUpdated: '2023-10-28T18:21:37Z',
                timestamp: '2023-10-28T18:21:07Z',
                type: 'G',
                scorerId: '5pousbiuqbus68yekd0mhc5pl',
                scorerName: 'C. Baumgartner',
                optaEventId: '2609895447',
                homeScore: 6,
                awayScore: 0
              }
            ],
            card: [
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 1,
                timeMin: 19,
                timeMinSec: '18:47',
                lastUpdated: '2023-10-28T16:49:19Z',
                timestamp: '2023-10-28T16:48:55Z',
                type: 'YC',
                playerId: '95gjm3yk75rmwyneb350zoktm',
                playerName: 'M. Simakan',
                optaEventId: '2609792349',
                cardReason: 'Foul'
              },
              {
                contestantId: '8q1ul09cygzswb7tb456bmifv',
                periodId: 1,
                timeMin: 29,
                timeMinSec: '28:08',
                lastUpdated: '2023-10-28T16:58:41Z',
                timestamp: '2023-10-28T16:58:16Z',
                type: 'YC',
                playerId: 'mgwgcv336wb93xvv0pfr6dih',
                playerName: 'J. Chabot',
                optaEventId: '2609799169',
                cardReason: 'Foul'
              },
              {
                contestantId: '8q1ul09cygzswb7tb456bmifv',
                periodId: 2,
                timeMin: 72,
                timeMinSec: '71:30',
                lastUpdated: '2024-01-23T12:42:09Z',
                timestamp: '2023-10-28T18:01:44Z',
                type: 'YC',
                playerId: '2hb1dyg1auzdfbi3lg9ysap9m',
                playerName: 'M. Olesen',
                optaEventId: '2609872793',
                cardReason: 'Foul'
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 2,
                timeMin: 79,
                timeMinSec: '78:13',
                lastUpdated: '2023-10-28T18:08:36Z',
                timestamp: '2023-10-28T18:08:27Z',
                type: 'YC',
                playerId: '3igg6gfmomgh1t5ohwzbpb5cl',
                playerName: 'L. Klostermann',
                optaEventId: '2609880291',
                cardReason: 'Foul'
              },
              {
                contestantId: '8q1ul09cygzswb7tb456bmifv',
                periodId: 2,
                timeMin: 80,
                timeMinSec: '79:43',
                lastUpdated: '2024-01-23T12:42:09Z',
                timestamp: '2023-10-28T18:09:57Z',
                type: 'Y2C',
                playerId: '2hb1dyg1auzdfbi3lg9ysap9m',
                playerName: 'M. Olesen',
                optaEventId: '2609882045',
                cardReason: 'Foul'
              },
              {
                contestantId: '8q1ul09cygzswb7tb456bmifv',
                periodId: 2,
                timeMin: 85,
                timeMinSec: '84:54',
                lastUpdated: '2023-10-28T18:15:28Z',
                timestamp: '2023-10-28T18:15:07Z',
                type: 'YC',
                playerId: '4w8nqkhp6v62vs319a7qckfs9',
                playerName: 'L. Kilian',
                optaEventId: '2609888177',
                cardReason: 'Persistent Infringement'
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 1,
                timeMin: 35,
                timeMinSec: '34:06',
                lastUpdated: '2023-10-28T17:04:30Z',
                timestamp: '2023-10-28T17:04:14Z',
                type: 'YC',
                teamOfficialId: '2wgiwv9ebw2hshnwjbvup4l3p',
                officialName: 'M. Rose',
                optaEventId: '2609805397',
                cardReason: 'Dissent'
              },
              {
                contestantId: '8q1ul09cygzswb7tb456bmifv',
                periodId: 2,
                timeMin: 82,
                timeMinSec: '81:13',
                lastUpdated: '2023-10-28T18:11:56Z',
                timestamp: '2023-10-28T18:11:26Z',
                type: 'YC',
                teamOfficialId: '14gqo1s8tw4hbze2m8kep45at',
                officialName: 'S. Baumgart',
                optaEventId: '2609884099',
                cardReason: 'Dissent'
              }
            ],
            substitute: [
              {
                contestantId: '8q1ul09cygzswb7tb456bmifv',
                periodId: 2,
                timeMin: 46,
                timeMinSec: '45:00',
                lastUpdated: '2023-10-28T17:35:07Z',
                timestamp: '2023-10-28T17:34:59Z',
                playerOnId: '9ed74dfr9aeuedaf63l0i7aei',
                playerOnName: 'F. Alidou',
                playerOffId: 'cnf7quyillyf560nh14taliw9',
                playerOffName: 'L. Maina',
                subReason: 'Tactical'
              },
              {
                contestantId: '8q1ul09cygzswb7tb456bmifv',
                periodId: 2,
                timeMin: 46,
                timeMinSec: '45:00',
                lastUpdated: '2023-10-28T17:35:16Z',
                timestamp: '2023-10-28T17:35:05Z',
                playerOnId: '4w8nqkhp6v62vs319a7qckfs9',
                playerOnName: 'L. Kilian',
                playerOffId: 'mgwgcv336wb93xvv0pfr6dih',
                playerOffName: 'J. Chabot',
                subReason: 'Tactical'
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 2,
                timeMin: 63,
                timeMinSec: '62:11',
                lastUpdated: '2023-10-28T17:52:42Z',
                timestamp: '2023-10-28T17:52:25Z',
                playerOnId: '5pousbiuqbus68yekd0mhc5pl',
                playerOnName: 'C. Baumgartner',
                playerOffId: '2pjr6yz65f4uqvwniy4vphn85',
                playerOffName: 'T. Werner',
                subReason: 'Injury'
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 2,
                timeMin: 63,
                timeMinSec: '62:26',
                lastUpdated: '2023-10-28T17:52:54Z',
                timestamp: '2023-10-28T17:52:40Z',
                playerOnId: '4gq1u1mqg0qzekh1u5djleeax',
                playerOnName: 'Dani Olmo',
                playerOffId: 'exhxdmdq49xj4dnguq03qnlgq',
                playerOffName: 'X. Simons',
                subReason: 'Tactical'
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 2,
                timeMin: 70,
                timeMinSec: '69:13',
                lastUpdated: '2024-01-05T09:50:56Z',
                timestamp: '2023-10-28T17:59:26Z',
                playerOnId: '6z1du1o69dgamvu2m8yi97dre',
                playerOnName: 'Fábio Carvalho',
                playerOffId: '4gq1u1mqg0qzekh1u5djleeax',
                playerOffName: 'Dani Olmo',
                subReason: 'Injury'
              },
              {
                contestantId: '8q1ul09cygzswb7tb456bmifv',
                periodId: 2,
                timeMin: 70,
                timeMinSec: '69:33',
                lastUpdated: '2024-01-23T12:42:09Z',
                timestamp: '2023-10-28T17:59:46Z',
                playerOnId: '2hb1dyg1auzdfbi3lg9ysap9m',
                playerOnName: 'M. Olesen',
                playerOffId: '3es8fg7y59lckypu11i68q6s5',
                playerOffName: 'L. Waldschmidt',
                subReason: 'Tactical'
              },
              {
                contestantId: '8q1ul09cygzswb7tb456bmifv',
                periodId: 2,
                timeMin: 70,
                timeMinSec: '69:53',
                lastUpdated: '2024-03-14T09:30:13Z',
                timestamp: '2023-10-28T18:00:07Z',
                playerOnId: '89s9fm31pcfq7l28kc2kad4kq',
                playerOnName: 'D. Huseinbašić',
                playerOffId: '55z0yap5tml66nes2cchg7ahh',
                playerOffName: 'F. Kainz',
                subReason: 'Tactical'
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 2,
                timeMin: 75,
                timeMinSec: '74:47',
                lastUpdated: '2024-02-16T16:49:19Z',
                timestamp: '2023-10-28T18:05:00Z',
                playerOnId: '4ynekiqwgd0l8h7cuyvdl28ve',
                playerOnName: 'B. Šeško',
                playerOffId: '64ubq0xra74xaunooi8knyajt',
                playerOffName: 'L. Openda',
                subReason: 'Tactical'
              },
              {
                contestantId: '9gefq4dz9b2hl8rqrxwrlrzmp',
                periodId: 2,
                timeMin: 75,
                timeMinSec: '74:54',
                lastUpdated: '2023-10-28T18:05:21Z',
                timestamp: '2023-10-28T18:05:08Z',
                playerOnId: '3qy1qlzezgfkxeom5n1r9h13p',
                playerOnName: 'C. Lenz',
                playerOffId: '2uz1cmslnjjzsgfcgji26kqg9',
                playerOffName: 'D. Raum',
                subReason: 'Tactical'
              },
              {
                contestantId: '8q1ul09cygzswb7tb456bmifv',
                periodId: 2,
                timeMin: 77,
                timeMinSec: '76:48',
                lastUpdated: '2023-10-28T18:07:11Z',
                timestamp: '2023-10-28T18:07:02Z',
                playerOnId: 'dcben7gqpal0986gn6n5ypsyd',
                playerOnName: 'M. Uth',
                playerOffId: '6yc09eth94qsachf595dyx6fp',
                playerOffName: 'D. Selke',
                subReason: 'Tactical'
              }
            ],
            matchDetailsExtra: {
              attendance: '46480',
              matchOfficial: [
                {
                  id: '6058skpse1mi4ocqxyrrzofrp',
                  type: 'Main',
                  firstName: 'Benjamin',
                  lastName: 'Brand',
                  shortFirstName: 'Benjamin',
                  shortLastName: 'Brand'
                },
                {
                  id: '5zy71cl95fcbxcfwgkyegdoet',
                  type: 'Assistant referee 1',
                  firstName: 'Thomas',
                  lastName: 'Stein',
                  shortFirstName: 'Thomas',
                  shortLastName: 'Stein'
                },
                {
                  id: '4g2ah5db5kkwvmsz9zj7usxxx',
                  type: 'Assistant referee 2',
                  firstName: 'Markus',
                  lastName: 'Schüller',
                  shortFirstName: 'Markus',
                  shortLastName: 'Schüller'
                },
                {
                  id: '2j1zcyw74sktrib4k0nf4a0h5',
                  type: 'Fourth official',
                  firstName: 'Richard',
                  lastName: 'Hempel',
                  shortFirstName: 'Richard',
                  shortLastName: 'Hempel'
                },
                {
                  id: 'ctry03fw6tw9lcqygrkbsiled',
                  type: 'Video Assistant Referee',
                  firstName: 'Tobias',
                  lastName: 'Welz',
                  shortFirstName: 'Tobias',
                  shortLastName: 'Welz'
                },
                {
                  id: '5j8tsa70dqdnupf0necsmtbdh',
                  type: 'Assistant VAR Official',
                  firstName: 'Eduard',
                  lastName: 'Beitinger',
                  shortFirstName: 'Eduard',
                  shortLastName: 'Beitinger'
                }
              ]
            }
          }
        },
        {
          matchInfo: {
            id: '5quhifimsolwf5kfom77chzis',
            coverageLevel: '15',
            date: '2023-10-29Z',
            time: '14:30:00Z',
            localDate: '2023-10-29',
            localTime: '15:30:00',
            week: '9',
            numberOfPeriods: 2,
            periodLength: 45,
            lastUpdated: '2024-03-20T07:54:43Z',
            description: 'Eintracht Frankfurt vs Borussia Dortmund',
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
                id: 'c5hderjlkcoaze51e5wgvptk',
                name: 'Eintracht Frankfurt',
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
                id: 'dt4pinj0vw0t0cvz7za6mhmzy',
                name: 'Borussia Dortmund',
                shortName: 'Dortmund',
                officialName: 'BV Borussia 09 Dortmund',
                code: 'BVB',
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
          liveData: {
            matchDetails: {
              periodId: 14,
              matchStatus: 'Played',
              winner: 'draw',
              matchLengthMin: 103,
              matchLengthSec: 36,
              period: [
                {
                  id: 1,
                  start: '2023-10-29T14:30:06Z',
                  end: '2023-10-29T15:23:19Z',
                  lengthMin: 53,
                  lengthSec: 13,
                  announcedInjuryTime: 480
                },
                {
                  id: 2,
                  start: '2023-10-29T15:39:33Z',
                  end: '2023-10-29T16:29:56Z',
                  lengthMin: 50,
                  lengthSec: 23,
                  announcedInjuryTime: 300
                }
              ],
              scores: {
                ht: {
                  home: 2,
                  away: 1
                },
                ft: {
                  home: 3,
                  away: 3
                },
                total: {
                  home: 3,
                  away: 3
                }
              }
            },
            goal: [
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 1,
                timeMin: 8,
                timeMinSec: '7:08',
                lastUpdated: '2024-01-06T09:46:03Z',
                timestamp: '2023-10-29T14:37:15Z',
                type: 'PG',
                scorerId: 'b8if5dg0k9prjik99aiutewh5',
                scorerName: 'Omar Marmoush',
                optaEventId: '2610454885',
                homeScore: 1,
                awayScore: 0
              },
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 1,
                timeMin: 24,
                timeMinSec: '23:24',
                lastUpdated: '2024-01-06T09:46:03Z',
                timestamp: '2023-10-29T14:53:31Z',
                type: 'G',
                scorerId: 'b8if5dg0k9prjik99aiutewh5',
                scorerName: 'Omar Marmoush',
                optaEventId: '2610472779',
                homeScore: 2,
                awayScore: 0
              },
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 1,
                timeMin: 46,
                timeMinSec: '45:40',
                lastUpdated: '2023-10-29T15:16:24Z',
                timestamp: '2023-10-29T15:15:47Z',
                type: 'G',
                scorerId: '8cho2d1nz18i5o0zt6aysd68l',
                scorerName: 'M. Sabitzer',
                assistPlayerId: 'cjq9g6zgcxk1ceo2xzpe1qnyt',
                assistPlayerName: 'N. Füllkrug',
                optaEventId: '2610493793',
                homeScore: 2,
                awayScore: 1
              },
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 2,
                timeMin: 54,
                timeMinSec: '53:57',
                lastUpdated: '2023-11-15T09:37:27Z',
                timestamp: '2023-10-29T15:48:30Z',
                type: 'G',
                scorerId: 'eguzzwxdm0fwocax6srpck48a',
                scorerName: 'Y. Moukoko',
                optaEventId: '2610530001',
                homeScore: 2,
                awayScore: 2
              },
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 2,
                timeMin: 68,
                timeMinSec: '67:44',
                lastUpdated: '2023-12-30T09:31:36Z',
                timestamp: '2023-10-29T16:02:18Z',
                type: 'G',
                scorerId: '684cguhktvth28ql6qgvvmcyc',
                scorerName: 'F. Chaïbi',
                assistPlayerId: 'ojqb7kv87o0cidbckgtg1rdh',
                assistPlayerName: 'E. Skhiri',
                optaEventId: '2610542639',
                homeScore: 3,
                awayScore: 2
              },
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 2,
                timeMin: 82,
                timeMinSec: '81:51',
                lastUpdated: '2023-10-29T16:17:16Z',
                timestamp: '2023-10-29T16:16:25Z',
                type: 'G',
                scorerId: 'f4qcgzveslklfi8601tep77x1',
                scorerName: 'J. Brandt',
                assistPlayerId: 'ebj6t5jqzixrnww1z7qofznu2',
                assistPlayerName: 'K. Adeyemi',
                optaEventId: '2610556431',
                homeScore: 3,
                awayScore: 3
              }
            ],
            card: [
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 1,
                timeMin: 11,
                timeMinSec: '10:44',
                lastUpdated: '2023-10-29T14:41:14Z',
                timestamp: '2023-10-29T14:40:51Z',
                type: 'YC',
                playerId: 'emvi36y613e4lqlat3wfdih9l',
                playerName: 'S. Özcan',
                optaEventId: '2610459441',
                cardReason: 'Foul'
              },
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 1,
                timeMin: 41,
                timeMinSec: '40:34',
                lastUpdated: '2024-01-06T09:46:03Z',
                timestamp: '2023-10-29T15:10:41Z',
                type: 'YC',
                playerId: 'b8if5dg0k9prjik99aiutewh5',
                playerName: 'Omar Marmoush',
                optaEventId: '2610488565',
                cardReason: 'Foul'
              },
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 1,
                timeMin: 53,
                timeMinSec: '52:39',
                lastUpdated: '2023-10-29T15:23:01Z',
                timestamp: '2023-10-29T15:22:46Z',
                type: 'YC',
                playerId: 'e91s5lp3fvfaav8w8xi7wdx3p',
                playerName: 'Aurélio Buta',
                optaEventId: '2610501831',
                cardReason: 'Time wasting'
              },
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 2,
                timeMin: 52,
                timeMinSec: '51:50',
                lastUpdated: '2023-10-29T15:46:34Z',
                timestamp: '2023-10-29T15:46:24Z',
                type: 'YC',
                playerId: 'ecwzzrkn1snbua5yu4gehxm2',
                playerName: 'W. Pacho',
                optaEventId: '2610527055',
                cardReason: 'Time wasting'
              },
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 2,
                timeMin: 76,
                timeMinSec: '75:58',
                lastUpdated: '2023-10-29T16:10:45Z',
                timestamp: '2023-10-29T16:10:32Z',
                type: 'YC',
                playerId: 'ebj6t5jqzixrnww1z7qofznu2',
                playerName: 'K. Adeyemi',
                optaEventId: '2610550613',
                cardReason: 'Foul'
              },
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 2,
                timeMin: 93,
                timeMinSec: '92:12',
                lastUpdated: '2023-10-29T16:26:51Z',
                timestamp: '2023-10-29T16:26:46Z',
                type: 'YC',
                teamOfficialId: '7ypm3aojojuoscoreian4zufp',
                officialName: 'E. Terzić',
                optaEventId: '2610566051',
                cardReason: 'Dissent'
              }
            ],
            substitute: [
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 1,
                timeMin: 26,
                timeMinSec: '25:11',
                lastUpdated: '2023-10-29T14:55:27Z',
                timestamp: '2023-10-29T14:55:18Z',
                playerOnId: '2jrntrq2x714pviioh3jnkted',
                playerOnName: 'A. Meyer',
                playerOffId: '9rjd95oqotnalxmv56v7p1r6d',
                playerOffName: 'G. Kobel',
                subReason: 'Injury'
              },
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 2,
                timeMin: 46,
                timeMinSec: '45:00',
                lastUpdated: '2023-11-15T09:37:27Z',
                timestamp: '2023-10-29T15:39:23Z',
                playerOnId: 'eguzzwxdm0fwocax6srpck48a',
                playerOnName: 'Y. Moukoko',
                playerOffId: '7q96z3aaee5jyccb8pjthi8kp',
                playerOffName: 'D. Malen',
                subReason: 'Tactical'
              },
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 2,
                timeMin: 46,
                timeMinSec: '45:00',
                lastUpdated: '2023-10-29T15:40:22Z',
                timestamp: '2023-10-29T15:39:23Z',
                playerOnId: 'ebj6t5jqzixrnww1z7qofznu2',
                playerOnName: 'K. Adeyemi',
                playerOffId: '2we9yak4ipkr1ljigj20puv6y',
                playerOffName: 'G. Reyna',
                subReason: 'Tactical'
              },
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 2,
                timeMin: 61,
                timeMinSec: '60:37',
                lastUpdated: '2023-10-29T15:55:21Z',
                timestamp: '2023-10-29T15:55:11Z',
                playerOnId: 'f5lfo1hz7u5bk494w53arcacq',
                playerOnName: 'J. Dina Ebimbe',
                playerOffId: 'e91s5lp3fvfaav8w8xi7wdx3p',
                playerOffName: 'Aurélio Buta',
                subReason: 'Tactical'
              },
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 2,
                timeMin: 65,
                timeMinSec: '64:29',
                lastUpdated: '2023-10-29T15:59:16Z',
                timestamp: '2023-10-29T15:59:03Z',
                playerOnId: 'f4qcgzveslklfi8601tep77x1',
                playerOnName: 'J. Brandt',
                playerOffId: 'btzfq6521zl3q5uqus8ltov6d',
                playerOffName: 'M. Reus',
                subReason: 'Tactical'
              },
              {
                contestantId: 'dt4pinj0vw0t0cvz7za6mhmzy',
                periodId: 2,
                timeMin: 70,
                timeMinSec: '69:12',
                lastUpdated: '2023-10-29T16:04:04Z',
                timestamp: '2023-10-29T16:03:45Z',
                playerOnId: '4vy3j1o829f561jf4fqum7ob9',
                playerOnName: 'N. Süle',
                playerOffId: 'cd6i7khi5wgsfsg19c9tcjydx',
                playerOffName: 'M. Hummels',
                subReason: 'Injury'
              },
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 2,
                timeMin: 73,
                timeMinSec: '72:06',
                lastUpdated: '2023-10-29T16:06:53Z',
                timestamp: '2023-10-29T16:06:39Z',
                playerOnId: 'eqtsanns36za56h4pfqhbnh05',
                playerOnName: 'M. Götze',
                playerOffId: 'byn8dfwg5zdefrca7wgn32qne',
                playerOffName: 'A. Knauff',
                subReason: 'Tactical'
              },
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 2,
                timeMin: 86,
                timeMinSec: '85:28',
                lastUpdated: '2024-02-26T17:33:58Z',
                timestamp: '2023-10-29T16:20:02Z',
                playerOnId: '3r1zsjvt43kg7aoudhh7o3rl6',
                playerOnName: 'N. Nkounkou',
                playerOffId: '5mbkc1nqmirbtfml9aklqr5xx',
                playerOffName: 'P. Max',
                subReason: 'Tactical'
              },
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 2,
                timeMin: 86,
                timeMinSec: '85:42',
                lastUpdated: '2023-10-29T16:20:28Z',
                timestamp: '2023-10-29T16:20:16Z',
                playerOnId: '7dnxkce4kn8qchaavv6e4tm21',
                playerOnName: 'J. Hauge',
                playerOffId: '684cguhktvth28ql6qgvvmcyc',
                playerOffName: 'F. Chaïbi',
                subReason: 'Tactical'
              }
            ],
            VAR: [
              {
                contestantId: 'c5hderjlkcoaze51e5wgvptk',
                periodId: 1,
                timeMin: 38,
                timeMinSec: '37:19',
                lastUpdated: '2024-01-06T09:46:03Z',
                timestamp: '2023-10-29T15:07:04Z',
                type: 'Penalty not awarded',
                decision: 'Confirmed',
                outcome: 'No penalty',
                playerId: 'b8if5dg0k9prjik99aiutewh5',
                playerName: 'Omar Marmoush',
                optaEventId: '2610484565'
              }
            ],
            matchDetailsExtra: {
              attendance: '56500',
              matchOfficial: [
                {
                  id: 'dl9k0yvysdt8c0fleoc9glihh',
                  type: 'Main',
                  firstName: 'Robert',
                  lastName: 'Schröder',
                  shortFirstName: 'Robert',
                  shortLastName: 'Schröder'
                },
                {
                  id: '4ucrew717r57cdhk3g14xx13p',
                  type: 'Assistant referee 1',
                  firstName: 'Norbert',
                  lastName: 'Grudzinski',
                  shortFirstName: 'Norbert',
                  shortLastName: 'Grudzinski'
                },
                {
                  id: '37w35rz2kev9lqza7ypyex1x',
                  type: 'Assistant referee 2',
                  firstName: 'Jan Clemens',
                  lastName: 'Neitzel',
                  shortFirstName: 'Jan',
                  shortLastName: 'Neitzel-Petersen'
                },
                {
                  id: 'efvjrgi8sxkc1n3xzb4iolg45',
                  type: 'Fourth official',
                  firstName: 'Tobias',
                  lastName: 'Reichel',
                  shortFirstName: 'Tobias',
                  shortLastName: 'Reichel'
                },
                {
                  id: '62gpt150mgqkhvo8aj0t42vo5',
                  type: 'Video Assistant Referee',
                  firstName: 'Bastian',
                  lastName: 'Dankert',
                  shortFirstName: 'Bastian',
                  shortLastName: 'Dankert'
                },
                {
                  id: '98w4tlajhsdmlyn31nz0814pg',
                  type: 'Assistant VAR Official',
                  firstName: 'Vanessa',
                  lastName: 'Kaminski',
                  shortFirstName: 'Vanessa',
                  shortLastName: 'Kaminski'
                }
              ]
            }
          }
        },
        {
          matchInfo: {
            id: '5qkwpz5antkgwr6cuwl1k5yj8',
            coverageLevel: '15',
            date: '2023-10-29Z',
            time: '16:30:00Z',
            localDate: '2023-10-29',
            localTime: '17:30:00',
            week: '9',
            numberOfPeriods: 2,
            periodLength: 45,
            lastUpdated: '2024-03-20T07:29:27Z',
            description: 'Bayer Leverkusen vs Freiburg',
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
                id: '7ad69ngbpjuyzv96drf8d9sn2',
                name: 'Bayer Leverkusen',
                shortName: 'Leverkusen',
                officialName: 'Bayer 04 Leverkusen',
                code: 'LEV',
                position: 'home',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              },
              {
                id: '6k5zscdm9ufw0tguvzyjlp5hq',
                name: 'Freiburg',
                shortName: 'Freiburg',
                officialName: 'SC Freiburg',
                code: 'SCF',
                position: 'away',
                country: {
                  id: '36min0qztu8eydwvpv8t1is0m',
                  name: 'Germany'
                }
              }
            ],
            venue: {
              id: '7tdenn61l0zwdi9xn39qc8zke',
              neutral: 'no',
              longName: 'BayArena',
              shortName: 'BayArena'
            }
          },
          liveData: {
            matchDetails: {
              periodId: 14,
              matchStatus: 'Played',
              winner: 'home',
              matchLengthMin: 96,
              matchLengthSec: 48,
              period: [
                {
                  id: 1,
                  start: '2023-10-29T16:30:06Z',
                  end: '2023-10-29T17:16:07Z',
                  lengthMin: 46,
                  lengthSec: 1,
                  announcedInjuryTime: 60
                },
                {
                  id: 2,
                  start: '2023-10-29T17:33:09Z',
                  end: '2023-10-29T18:23:56Z',
                  lengthMin: 50,
                  lengthSec: 47,
                  announcedInjuryTime: 300
                }
              ],
              scores: {
                ht: {
                  home: 1,
                  away: 0
                },
                ft: {
                  home: 2,
                  away: 1
                },
                total: {
                  home: 2,
                  away: 1
                }
              }
            },
            goal: [
              {
                contestantId: '7ad69ngbpjuyzv96drf8d9sn2',
                periodId: 1,
                timeMin: 36,
                timeMinSec: '35:57',
                lastUpdated: '2023-10-29T17:06:49Z',
                timestamp: '2023-10-29T17:06:04Z',
                type: 'G',
                scorerId: '2k5g68ywtr79lc45wozvifqlm',
                scorerName: 'F. Wirtz',
                assistPlayerId: '9qo448ueot8pfc5oqo378wag9',
                assistPlayerName: 'J. Frimpong',
                optaEventId: '2610608365',
                homeScore: 1,
                awayScore: 0
              },
              {
                contestantId: '7ad69ngbpjuyzv96drf8d9sn2',
                periodId: 2,
                timeMin: 60,
                timeMinSec: '59:52',
                lastUpdated: '2023-10-29T17:54:37Z',
                timestamp: '2023-10-29T17:48:01Z',
                type: 'G',
                scorerId: '7kjhx78gpi6m3r4j1b4jdyh91',
                scorerName: 'J. Hofmann',
                assistPlayerId: '2k5g68ywtr79lc45wozvifqlm',
                assistPlayerName: 'F. Wirtz',
                optaEventId: '2610655979',
                homeScore: 2,
                awayScore: 0
              },
              {
                contestantId: '6k5zscdm9ufw0tguvzyjlp5hq',
                periodId: 2,
                timeMin: 70,
                timeMinSec: '69:38',
                lastUpdated: '2023-10-29T17:58:33Z',
                timestamp: '2023-10-29T17:57:47Z',
                type: 'G',
                scorerId: 'e8dpcth2x1y0zbaovljbgk5hx',
                scorerName: 'M. Gulde',
                assistPlayerId: '2az0f39bhz2kvxhopalzi0h5h',
                assistPlayerName: 'V. Grifo',
                optaEventId: '2610666255',
                homeScore: 2,
                awayScore: 1
              }
            ],
            card: [
              {
                contestantId: '6k5zscdm9ufw0tguvzyjlp5hq',
                periodId: 1,
                timeMin: 14,
                timeMinSec: '13:15',
                lastUpdated: '2023-10-29T16:43:35Z',
                timestamp: '2023-10-29T16:43:22Z',
                type: 'YC',
                playerId: '2jk8zu0m0tf7if0pyrkbo82xh',
                playerName: 'L. Kübler',
                optaEventId: '2610584911',
                cardReason: 'Foul'
              },
              {
                contestantId: '6k5zscdm9ufw0tguvzyjlp5hq',
                periodId: 2,
                timeMin: 94,
                timeMinSec: '93:07',
                lastUpdated: '2023-10-29T18:21:28Z',
                timestamp: '2023-10-29T18:21:16Z',
                type: 'YC',
                playerId: 'bsyv3fmihshve4jcr11qmtmfp',
                playerName: 'L. Höler',
                optaEventId: '2610687025',
                cardReason: 'Foul'
              },
              {
                contestantId: '6k5zscdm9ufw0tguvzyjlp5hq',
                periodId: 2,
                timeMin: 93,
                timeMinSec: '92:13',
                lastUpdated: '2023-10-29T18:20:40Z',
                timestamp: '2023-10-29T18:20:22Z',
                type: 'YC',
                teamOfficialId: '2lv285vidsnscw6t8pgk18pn9',
                officialName: 'C. Streich',
                optaEventId: '2610686325',
                cardReason: 'Dissent'
              }
            ],
            substitute: [
              {
                contestantId: '6k5zscdm9ufw0tguvzyjlp5hq',
                periodId: 2,
                timeMin: 67,
                timeMinSec: '66:02',
                lastUpdated: '2023-10-29T17:54:43Z',
                timestamp: '2023-10-29T17:54:11Z',
                playerOnId: 'e8dpcth2x1y0zbaovljbgk5hx',
                playerOnName: 'M. Gulde',
                playerOffId: '6o2v57d92t1mejod24gmufcut',
                playerOffName: 'P. Lienhart',
                subReason: 'Tactical'
              },
              {
                contestantId: '6k5zscdm9ufw0tguvzyjlp5hq',
                periodId: 2,
                timeMin: 67,
                timeMinSec: '66:24',
                lastUpdated: '2023-10-29T17:54:37Z',
                timestamp: '2023-10-29T17:54:33Z',
                playerOnId: '7c6034wb3zsuq9nhxxiahiuol',
                playerOnName: 'M. Gregoritsch',
                playerOffId: 'f5ln82l8q7gvouj3zhsp5t4gl',
                playerOffName: 'M. Eggestein',
                subReason: 'Tactical'
              },
              {
                contestantId: '6k5zscdm9ufw0tguvzyjlp5hq',
                periodId: 2,
                timeMin: 81,
                timeMinSec: '80:21',
                lastUpdated: '2023-10-29T18:08:38Z',
                timestamp: '2023-10-29T18:08:30Z',
                playerOnId: '2es4ydlcwwasm6mu7rmey5r3e',
                playerOnName: 'N. Weißhaupt',
                playerOffId: '2az0f39bhz2kvxhopalzi0h5h',
                playerOffName: 'V. Grifo',
                subReason: 'Tactical'
              },
              {
                contestantId: '6k5zscdm9ufw0tguvzyjlp5hq',
                periodId: 2,
                timeMin: 81,
                timeMinSec: '80:22',
                lastUpdated: '2023-10-29T18:08:38Z',
                timestamp: '2023-10-29T18:08:31Z',
                playerOnId: 'ejuw5de99fjgrxdn79aulbm96',
                playerOnName: 'J. Adamu',
                playerOffId: '5n7vp6g13q7sxkzbygfbz27oq',
                playerOffName: 'M. Röhl',
                subReason: 'Tactical'
              },
              {
                contestantId: '7ad69ngbpjuyzv96drf8d9sn2',
                periodId: 2,
                timeMin: 85,
                timeMinSec: '84:38',
                lastUpdated: '2023-11-14T08:49:33Z',
                timestamp: '2023-10-29T18:12:47Z',
                playerOnId: 'dt8k9pwcj3zktd8xk3ai98vyt',
                playerOnName: 'N. Tella',
                playerOffId: '9qo448ueot8pfc5oqo378wag9',
                playerOffName: 'J. Frimpong',
                subReason: 'Tactical'
              },
              {
                contestantId: '7ad69ngbpjuyzv96drf8d9sn2',
                periodId: 2,
                timeMin: 85,
                timeMinSec: '84:42',
                lastUpdated: '2024-01-06T11:10:07Z',
                timestamp: '2023-10-29T18:12:51Z',
                playerOnId: '8mcf8c8ht32as6xxrf1gb51m2',
                playerOnName: 'A. Adli',
                playerOffId: '7kjhx78gpi6m3r4j1b4jdyh91',
                playerOffName: 'J. Hofmann',
                subReason: 'Tactical'
              },
              {
                contestantId: '7ad69ngbpjuyzv96drf8d9sn2',
                periodId: 2,
                timeMin: 90,
                timeMinSec: '89:35',
                lastUpdated: '2023-10-29T18:17:49Z',
                timestamp: '2023-10-29T18:17:44Z',
                playerOnId: 'e4vr28e9cbq3q5nux1jlpuuei',
                playerOnName: 'A. Hložek',
                playerOffId: '2k5g68ywtr79lc45wozvifqlm',
                playerOffName: 'F. Wirtz',
                subReason: 'Tactical'
              },
              {
                contestantId: '7ad69ngbpjuyzv96drf8d9sn2',
                periodId: 2,
                timeMin: 90,
                timeMinSec: '89:48',
                lastUpdated: '2023-10-29T18:17:49Z',
                timestamp: '2023-10-29T18:17:57Z',
                playerOnId: 'c0ewvrtk657uw4t5rlv87mq51',
                playerOnName: 'P. Schick',
                playerOffId: 'a6cke0ad2pvuyahweuch772ay',
                playerOffName: 'V. Boniface',
                subReason: 'Tactical'
              },
              {
                contestantId: '7ad69ngbpjuyzv96drf8d9sn2',
                periodId: 2,
                timeMin: 90,
                timeMinSec: '89:54',
                lastUpdated: '2023-10-29T18:18:04Z',
                timestamp: '2023-10-29T18:18:03Z',
                playerOnId: '4foax2b7unlkev1eq6py86lii',
                playerOnName: 'P. Hincapié',
                playerOffId: '12f4mz064elnxecq2srl7r6j9',
                playerOffName: 'Álex Grimaldo',
                subReason: 'Tactical'
              }
            ],
            matchDetailsExtra: {
              attendance: '30210',
              matchOfficial: [
                {
                  id: 'cdfuyw9toqeu7eoll2tce75cl',
                  type: 'Main',
                  firstName: 'Daniel',
                  lastName: 'Siebert',
                  shortFirstName: 'Daniel',
                  shortLastName: 'Siebert'
                },
                {
                  id: '8l2czp3q84vmaayf15ihd0mvp',
                  type: 'Assistant referee 1',
                  firstName: 'Jan',
                  lastName: 'Seidel',
                  shortFirstName: 'Jan',
                  shortLastName: 'Seidel'
                },
                {
                  id: '226iadhrsq330fpbl52f2hrrp',
                  type: 'Assistant referee 2',
                  firstName: 'Lasse',
                  lastName: 'Koslowski',
                  shortFirstName: 'Lasse',
                  shortLastName: 'Koslowski'
                },
                {
                  id: '3g7il2puah4fvhkyi8b355tcl',
                  type: 'Fourth official',
                  firstName: 'Florian',
                  lastName: 'Exner',
                  shortFirstName: 'Florian',
                  shortLastName: 'Exner'
                },
                {
                  id: '5iqrm68mkt2p7aenre7mvzmqd',
                  type: 'Video Assistant Referee',
                  firstName: 'Benjamin',
                  lastName: 'Cortus',
                  shortFirstName: 'Benjamin',
                  shortLastName: 'Cortus'
                },
                {
                  id: 'dysp37re5wymmowgddsfpdfit',
                  type: 'Assistant VAR Official',
                  firstName: 'Christof',
                  lastName: 'Günsch',
                  shortFirstName: 'Christof',
                  shortLastName: 'Günsch'
                }
              ]
            }
          }
        }
      ]
    },
    fields: [],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Live Matchday'
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
