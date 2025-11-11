module.exports = {
  uuid: '0',
  template_name: 'wc_matchup',
  name: 'Matchup',
  data: {
    dynamic: {
      assets: {},
      matchday: {
        id: 'd7jq17znw97xt4hbghsq4q4no',
        coverageLevel: '15',
        optaBetting: '1',
        date: '2022-08-05Z',
        time: '18:30:00Z',
        localDate: '2022-08-05',
        localTime: '20:30:00',
        homeContestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
        awayContestantId: 'apoawtpvac4zqlancmvw4nk4o',
        homeContestantName: 'Eintracht Frankfurt',
        awayContestantName: 'Bayern München',
        homeContestantOfficialName: 'Eintracht Frankfurt',
        awayContestantOfficialName: 'FC Bayern München',
        homeContestantShortName: 'Frankfurt',
        awayContestantShortName: 'Bayern München',
        homeContestantCode: 'SGE',
        awayContestantCode: 'FCB',
        numberOfPeriods: 2,
        periodLength: 45,
        _round: 1
      },
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
      matchStats: {
        liveData: {
          matchDetails: {
            periodId: 14,
            matchStatus: 'Played',
            winner: 'away',
            matchLengthMin: 92,
            matchLengthSec: 4,
            period: [
              {
                id: 1,
                start: '2022-08-05T18:34:56Z',
                end: '2022-08-05T19:21:57Z',
                lengthMin: 47,
                lengthSec: 1
              },
              {
                id: 2,
                start: '2022-08-05T19:37:17Z',
                end: '2022-08-05T20:22:20Z',
                lengthMin: 45,
                lengthSec: 3
              }
            ],
            scores: {
              ht: {
                home: 0,
                away: 5
              },
              ft: {
                home: 1,
                away: 6
              },
              total: {
                home: 1,
                away: 6
              }
            }
          },
          goal: [
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 1,
              timeMin: 5,
              timeMinSec: '4:17',
              lastUpdated: '2022-09-13T15:38:02Z',
              timestamp: '2022-08-05T18:39:14Z',
              type: 'G',
              scorerId: '97nv3y9z2ajz6b4ynoo0jn3kl',
              scorerName: 'J. Kimmich',
              optaEventId: '2442224095',
              homeScore: 0,
              awayScore: 1
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 1,
              timeMin: 10,
              timeMinSec: '10:00',
              lastUpdated: '2022-08-05T18:45:13Z',
              timestamp: '2022-08-05T18:44:57Z',
              type: 'G',
              scorerId: 'yq0cm7vwr0tkv7nvt9vo77bp',
              scorerName: 'B. Pavard',
              optaEventId: '2442227505',
              homeScore: 0,
              awayScore: 2
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 1,
              timeMin: 29,
              timeMinSec: '28:56',
              lastUpdated: '2022-08-05T19:04:13Z',
              timestamp: '2022-08-05T19:03:53Z',
              type: 'G',
              scorerId: 'cotiiu6mjkfx5xa63nhfbdf4l',
              scorerName: 'S. Mané',
              assistPlayerId: '4ysxvym6ww4f9d3hflkqsbf11',
              assistPlayerName: 'S. Gnabry',
              secondAssistPlayerId: '97nv3y9z2ajz6b4ynoo0jn3kl',
              ocSecondAssistPlayerId: '260016',
              opSecondAssistPlayerId: '165687',
              secondAssistPlayerName: 'J. Kimmich',
              optaEventId: '2442235791',
              homeScore: 0,
              awayScore: 3
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 1,
              timeMin: 35,
              timeMinSec: '34:43',
              lastUpdated: '2022-08-05T19:09:57Z',
              timestamp: '2022-08-05T19:09:40Z',
              type: 'G',
              scorerId: 'bhsdzppop8jwjsxwftizot1t6',
              scorerName: 'J. Musiala',
              assistPlayerId: '4fq74wp7xzwm214veuxqpdz9x',
              assistPlayerName: 'T. Müller',
              secondAssistPlayerId: 'cotiiu6mjkfx5xa63nhfbdf4l',
              ocSecondAssistPlayerId: '201602',
              opSecondAssistPlayerId: '110979',
              secondAssistPlayerName: 'S. Mané',
              optaEventId: '2442240009',
              homeScore: 0,
              awayScore: 4
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 1,
              timeMin: 43,
              timeMinSec: '42:09',
              lastUpdated: '2022-08-05T19:17:31Z',
              timestamp: '2022-08-05T19:17:06Z',
              type: 'G',
              scorerId: '4ysxvym6ww4f9d3hflkqsbf11',
              scorerName: 'S. Gnabry',
              assistPlayerId: '4fq74wp7xzwm214veuxqpdz9x',
              assistPlayerName: 'T. Müller',
              optaEventId: '2442246757',
              homeScore: 0,
              awayScore: 5
            },
            {
              contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
              periodId: 2,
              timeMin: 64,
              timeMinSec: '63:15',
              lastUpdated: '2022-09-13T15:38:03Z',
              timestamp: '2022-08-05T19:55:33Z',
              type: 'G',
              scorerId: 'g3fgd752o63acmmuahdvppm1',
              scorerName: 'R. Kolo Muani',
              optaEventId: '2442275239',
              homeScore: 1,
              awayScore: 5
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 2,
              timeMin: 83,
              timeMinSec: '82:46',
              lastUpdated: '2022-08-05T20:15:25Z',
              timestamp: '2022-08-05T20:15:03Z',
              type: 'G',
              scorerId: 'bhsdzppop8jwjsxwftizot1t6',
              scorerName: 'J. Musiala',
              assistPlayerId: '4603xrdk721lqhd1ejn62x5n9',
              assistPlayerName: 'L. Sané',
              optaEventId: '2442284805',
              homeScore: 1,
              awayScore: 6
            }
          ],
          card: [
            {
              contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
              periodId: 2,
              timeMin: 59,
              timeMinSec: '58:03',
              lastUpdated: '2022-09-13T15:37:47Z',
              timestamp: '2022-08-05T19:50:20Z',
              type: 'YC',
              playerId: 'efzokrggje7s9wc6hg75yc6ax',
              playerName: 'E. Ndicka',
              optaEventId: '2442271535',
              cardReason: 'Foul'
            },
            {
              contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
              periodId: 2,
              timeMin: 71,
              timeMinSec: '70:01',
              lastUpdated: '2022-08-05T20:02:42Z',
              timestamp: '2022-08-05T20:02:18Z',
              type: 'YC',
              playerId: '555z9bynvux7oruirg67r8i51',
              playerName: 'F. Kostić',
              optaEventId: '2442278377',
              cardReason: 'Dissent'
            }
          ],
          substitute: [
            {
              contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
              periodId: 2,
              timeMin: 46,
              timeMinSec: '45:00',
              lastUpdated: '2022-08-05T19:36:39Z',
              timestamp: '2022-08-05T19:36:33Z',
              playerOnId: '3qy1qlzezgfkxeom5n1r9h13p',
              playerOnName: 'C. Lenz',
              playerOffId: '5ph2ln91ycq1qlq03cnqqs9re',
              playerOffName: 'J. Lindstrøm',
              subReason: 'Tactical'
            },
            {
              contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
              periodId: 2,
              timeMin: 46,
              timeMinSec: '45:00',
              lastUpdated: '2022-08-05T19:36:47Z',
              timestamp: '2022-08-05T19:36:42Z',
              playerOnId: 'a3ib09ji7qsz6cgj3vmz5qort',
              playerOnName: 'K. Jakić',
              playerOffId: '78e1qvft3ser2tyayjlmemdp1',
              playerOffName: 'S. Rode',
              subReason: 'Tactical'
            },
            {
              contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
              periodId: 2,
              timeMin: 46,
              timeMinSec: '45:00',
              lastUpdated: '2022-09-13T15:38:03Z',
              timestamp: '2022-08-05T19:36:42Z',
              playerOnId: 'g3fgd752o63acmmuahdvppm1',
              playerOnName: 'R. Kolo Muani',
              playerOffId: '2x5f35hk2urqlgoito1vgb3yt',
              playerOffName: 'R. Borré',
              subReason: 'Tactical'
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 2,
              timeMin: 57,
              timeMinSec: '56:38',
              lastUpdated: '2022-08-05T19:49:06Z',
              timestamp: '2022-08-05T19:48:55Z',
              playerOnId: '5ga7g20wsa7oqjbh4ijoeknl6',
              playerOnName: 'R. Gravenberch',
              playerOffId: '8cho2d1nz18i5o0zt6aysd68l',
              playerOffName: 'M. Sabitzer',
              subReason: 'Tactical'
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 2,
              timeMin: 65,
              timeMinSec: '64:55',
              lastUpdated: '2022-09-13T15:38:03Z',
              timestamp: '2022-08-05T19:57:12Z',
              playerOnId: '4603xrdk721lqhd1ejn62x5n9',
              playerOnName: 'L. Sané',
              playerOffId: '4fq74wp7xzwm214veuxqpdz9x',
              playerOffName: 'T. Müller',
              subReason: 'Tactical'
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 2,
              timeMin: 65,
              timeMinSec: '64:56',
              lastUpdated: '2022-08-05T19:57:25Z',
              timestamp: '2022-08-05T19:57:14Z',
              playerOnId: 'cv1d56d42wujfuc4kt6bn53x0',
              playerOnName: 'M. Tel',
              playerOffId: '4ysxvym6ww4f9d3hflkqsbf11',
              playerOffName: 'S. Gnabry',
              subReason: 'Tactical'
            },
            {
              contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
              periodId: 2,
              timeMin: 74,
              timeMinSec: '73:55',
              lastUpdated: '2022-08-06T00:48:54Z',
              timestamp: '2022-08-05T20:06:13Z',
              playerOnId: '9ed74dfr9aeuedaf63l0i7aei',
              playerOnName: 'F. Alidou',
              playerOffId: '555z9bynvux7oruirg67r8i51',
              playerOffName: 'F. Kostić',
              subReason: 'Tactical'
            },
            {
              contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
              periodId: 2,
              timeMin: 81,
              timeMinSec: '80:56',
              lastUpdated: '2022-08-06T00:48:54Z',
              timestamp: '2022-08-05T20:13:13Z',
              playerOnId: '8kqmsuo668wpuzoyyxf4o2vo5',
              playerOnName: 'M. Hasebe',
              playerOffId: 'bd4p670s36cp1dh4fadv84qcq',
              playerOffName: 'Tuta',
              subReason: 'Tactical'
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 2,
              timeMin: 82,
              timeMinSec: '81:04',
              lastUpdated: '2022-08-05T20:13:35Z',
              timestamp: '2022-08-05T20:13:21Z',
              playerOnId: '10zt8rbgbmyqxr1m13wm5gfs9',
              playerOnName: 'M. de Ligt',
              playerOffId: 'c80tzy7t4hoa8fpbek1od4lw5',
              playerOffName: 'L. Hernández',
              subReason: 'Tactical'
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              periodId: 2,
              timeMin: 82,
              timeMinSec: '81:14',
              lastUpdated: '2022-08-05T20:13:44Z',
              timestamp: '2022-08-05T20:13:31Z',
              playerOnId: '7vhnftizqlyu31st2vsmgh6tx',
              playerOnName: 'N. Mazraoui',
              playerOffId: 'yq0cm7vwr0tkv7nvt9vo77bp',
              playerOffName: 'B. Pavard',
              subReason: 'Tactical'
            }
          ],
          lineUp: [
            {
              contestantId: '3dwlvz6cl4lcavvrg0y2dycrt',
              formationUsed: '3421',
              player: [
                {
                  playerId: '7obuhegyo1qcoikt23egcsr85',
                  firstName: 'Kevin',
                  lastName: 'Trapp',
                  shortFirstName: 'Kevin',
                  shortLastName: 'Trapp',
                  matchName: 'K. Trapp',
                  shirtNumber: 1,
                  position: 'Goalkeeper',
                  positionSide: 'Centre',
                  formationPlace: '1',
                  stat: [
                    {
                      type: 'accuratePass',
                      value: '20'
                    },
                    {
                      type: 'totalLaunches',
                      value: '5'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '1'
                    },
                    {
                      type: 'totalClearance',
                      value: '1'
                    },
                    {
                      type: 'accurateKeeperThrows',
                      value: '3'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '10'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '8'
                    },
                    {
                      type: 'passesLeft',
                      value: '3'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '9'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '5'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '10'
                    },
                    {
                      type: 'savedIbox',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'savedObox',
                      value: '3'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '5'
                    },
                    {
                      type: 'divingSave',
                      value: '3'
                    },
                    {
                      type: 'keeperPickUp',
                      value: '5'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '17'
                    },
                    {
                      type: 'openPlayPass',
                      value: '13'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '36'
                    },
                    {
                      type: 'goalsConceded',
                      value: '6'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '4'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '4'
                    },
                    {
                      type: 'goalKicks',
                      value: '9'
                    },
                    {
                      type: 'accurateGoalKicks',
                      value: '8'
                    },
                    {
                      type: 'diveSave',
                      value: '2'
                    },
                    {
                      type: 'fwdPass',
                      value: '15'
                    },
                    {
                      type: 'possLostAll',
                      value: '8'
                    },
                    {
                      type: 'keeperThrows',
                      value: '3'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '2'
                    },
                    {
                      type: 'rightsidePass',
                      value: '11'
                    },
                    {
                      type: 'leftsidePass',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '5'
                    },
                    {
                      type: 'lostCorners',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '5'
                    },
                    {
                      type: 'saves',
                      value: '4'
                    },
                    {
                      type: 'totalPass',
                      value: '27'
                    },
                    {
                      type: 'punches',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '9'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '12'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '16'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '14'
                    },
                    {
                      type: 'accurateLaunches',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '1'
                    }
                  ]
                },
                {
                  playerId: 'efzokrggje7s9wc6hg75yc6ax',
                  firstName: 'Obite Evan',
                  lastName: 'Ndicka',
                  shortFirstName: 'Evan',
                  shortLastName: 'Ndicka',
                  matchName: 'E. Ndicka',
                  shirtNumber: 2,
                  position: 'Defender',
                  positionSide: 'Left/Centre',
                  formationPlace: '4',
                  stat: [
                    {
                      type: 'fiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'headClearance',
                      value: '3'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '14'
                    },
                    {
                      type: 'backwardPass',
                      value: '6'
                    },
                    {
                      type: 'yellowCard',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '9'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '2'
                    },
                    {
                      type: 'blockedCross',
                      value: '1'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '31'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '2'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '2'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '38'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '2'
                    },
                    {
                      type: 'effectiveBlockedCross',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '11'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '4'
                    },
                    {
                      type: 'ballRecovery',
                      value: '6'
                    },
                    {
                      type: 'lostCorners',
                      value: '2'
                    },
                    {
                      type: 'putThrough',
                      value: '2'
                    },
                    {
                      type: 'rightsidePass',
                      value: '10'
                    },
                    {
                      type: 'possLostAll',
                      value: '3'
                    },
                    {
                      type: 'offsideProvoked',
                      value: '2'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '5'
                    },
                    {
                      type: 'passesRight',
                      value: '1'
                    },
                    {
                      type: 'interception',
                      value: '2'
                    },
                    {
                      type: 'duelLost',
                      value: '3'
                    },
                    {
                      type: 'fwdPass',
                      value: '11'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '4'
                    },
                    {
                      type: 'touches',
                      value: '51'
                    },
                    {
                      type: 'goalsConceded',
                      value: '6'
                    },
                    {
                      type: 'outfielderBlock',
                      value: '3'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '33'
                    },
                    {
                      type: 'openPlayPass',
                      value: '34'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '2'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '2'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'headPass',
                      value: '3'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'aerialWon',
                      value: '1'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '31'
                    },
                    {
                      type: 'passesLeft',
                      value: '2'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '3'
                    },
                    {
                      type: 'effectiveHeadClearance',
                      value: '3'
                    },
                    {
                      type: 'blockedPass',
                      value: '2'
                    },
                    {
                      type: 'fouls',
                      value: '2'
                    },
                    {
                      type: 'interceptionWon',
                      value: '2'
                    },
                    {
                      type: 'accuratePass',
                      value: '35'
                    },
                    {
                      type: 'totalLaunches',
                      value: '1'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '2'
                    },
                    {
                      type: 'totalClearance',
                      value: '5'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '5'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '4'
                    }
                  ]
                },
                {
                  playerId: 'bd4p670s36cp1dh4fadv84qcq',
                  firstName: 'Lucas',
                  lastName: 'Silva Melo',
                  shortFirstName: 'Lucas',
                  shortLastName: 'Silva Melo',
                  knownName: 'Tuta',
                  matchName: 'Tuta',
                  shirtNumber: 35,
                  position: 'Defender',
                  positionSide: 'Centre',
                  formationPlace: '5',
                  stat: [
                    {
                      type: 'interception',
                      value: '3'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '1'
                    },
                    {
                      type: 'duelLost',
                      value: '2'
                    },
                    {
                      type: 'fwdPass',
                      value: '10'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '3'
                    },
                    {
                      type: 'passesRight',
                      value: '2'
                    },
                    {
                      type: 'possLostAll',
                      value: '4'
                    },
                    {
                      type: 'rightsidePass',
                      value: '14'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '10'
                    },
                    {
                      type: 'leftsidePass',
                      value: '10'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '9'
                    },
                    {
                      type: 'totalPass',
                      value: '36'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '5'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '25'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '6'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '4'
                    },
                    {
                      type: 'backwardPass',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '13'
                    },
                    {
                      type: 'headClearance',
                      value: '2'
                    },
                    {
                      type: 'hitWoodwork',
                      value: '1'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '3'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '10'
                    },
                    {
                      type: 'accuratePass',
                      value: '32'
                    },
                    {
                      type: 'totalClearance',
                      value: '3'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '1'
                    },
                    {
                      type: 'attBxCentre',
                      value: '1'
                    },
                    {
                      type: 'shotOffTarget',
                      value: '1'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'interceptionWon',
                      value: '3'
                    },
                    {
                      type: 'effectiveHeadClearance',
                      value: '2'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '4'
                    },
                    {
                      type: 'attHdTotal',
                      value: '1'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '2'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '9'
                    },
                    {
                      type: 'aerialWon',
                      value: '1'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'passesLeft',
                      value: '1'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '32'
                    },
                    {
                      type: 'minsPlayed',
                      value: '81'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '4'
                    },
                    {
                      type: 'headPass',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '1'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '2'
                    },
                    {
                      type: 'duelWon',
                      value: '1'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'attPostHigh',
                      value: '1'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '1'
                    },
                    {
                      type: 'totalSubOff',
                      value: '1'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '26'
                    },
                    {
                      type: 'openPlayPass',
                      value: '36'
                    },
                    {
                      type: 'attHdPost',
                      value: '1'
                    },
                    {
                      type: 'goalsConceded',
                      value: '5'
                    },
                    {
                      type: 'outfielderBlock',
                      value: '2'
                    },
                    {
                      type: 'postScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '47'
                    },
                    {
                      type: 'attCorner',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '6'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '7'
                    },
                    {
                      type: 'attIboxPost',
                      value: '1'
                    },
                    {
                      type: 'interceptionsInBox',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '5'
                    }
                  ]
                },
                {
                  playerId: 'abuvjv3bhb402yf8p92kucez9',
                  firstName: 'Almamy',
                  lastName: 'Touré',
                  shortFirstName: 'Almamy',
                  shortLastName: 'Touré',
                  matchName: 'A. Touré',
                  shirtNumber: 18,
                  position: 'Defender',
                  positionSide: 'Centre/Right',
                  formationPlace: '6',
                  stat: [
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '6'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '28'
                    },
                    {
                      type: 'openPlayPass',
                      value: '45'
                    },
                    {
                      type: 'challengeLost',
                      value: '2'
                    },
                    {
                      type: 'duelWon',
                      value: '4'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '11'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '4'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '1'
                    },
                    {
                      type: 'wonContest',
                      value: '2'
                    },
                    {
                      type: 'outfielderBlock',
                      value: '2'
                    },
                    {
                      type: 'goalsConceded',
                      value: '6'
                    },
                    {
                      type: 'touches',
                      value: '59'
                    },
                    {
                      type: 'possWonAtt3rd',
                      value: '1'
                    },
                    {
                      type: 'interceptionWon',
                      value: '3'
                    },
                    {
                      type: 'blockedPass',
                      value: '3'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '15'
                    },
                    {
                      type: 'totalThrows',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '18'
                    },
                    {
                      type: 'totalLaunches',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '33'
                    },
                    {
                      type: 'totalClearance',
                      value: '1'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '9'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'headPass',
                      value: '3'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'totalContest',
                      value: '2'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '8'
                    },
                    {
                      type: 'turnover',
                      value: '1'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '1'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'aerialWon',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'passesLeft',
                      value: '1'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '32'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '10'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '22'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '3'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '9'
                    },
                    {
                      type: 'overrun',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '46'
                    },
                    {
                      type: 'totalTackle',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '4'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '3'
                    },
                    {
                      type: 'backwardPass',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '14'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '14'
                    },
                    {
                      type: 'wonTackle',
                      value: '1'
                    },
                    {
                      type: 'successfulPutThrough',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '15'
                    },
                    {
                      type: 'interception',
                      value: '3'
                    },
                    {
                      type: 'fwdPass',
                      value: '25'
                    },
                    {
                      type: 'accurateThrows',
                      value: '1'
                    },
                    {
                      type: 'duelLost',
                      value: '2'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '1'
                    },
                    {
                      type: 'putThrough',
                      value: '3'
                    },
                    {
                      type: 'lostCorners',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '8'
                    },
                    {
                      type: 'wonCorners',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '6'
                    },
                    {
                      type: 'leftsidePass',
                      value: '13'
                    },
                    {
                      type: 'totalOffside',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '6'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '6'
                    }
                  ]
                },
                {
                  playerId: '555z9bynvux7oruirg67r8i51',
                  firstName: 'Filip',
                  lastName: 'Kostić',
                  shortFirstName: 'Filip',
                  shortLastName: 'Kostic',
                  matchName: 'F. Kostić',
                  shirtNumber: 10,
                  position: 'Midfielder',
                  positionSide: 'Left',
                  formationPlace: '3',
                  stat: [
                    {
                      type: 'penAreaEntries',
                      value: '12'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '19'
                    },
                    {
                      type: 'totalCrossNocorner',
                      value: '2'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'interceptionWon',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '18'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '4'
                    },
                    {
                      type: 'totalThrows',
                      value: '6'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '24'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'cornerTaken',
                      value: '5'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '4'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'passesLeft',
                      value: '6'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '16'
                    },
                    {
                      type: 'minsPlayed',
                      value: '74'
                    },
                    {
                      type: 'totalContest',
                      value: '2'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '8'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '9'
                    },
                    {
                      type: 'openPlayPass',
                      value: '24'
                    },
                    {
                      type: 'accurateCross',
                      value: '1'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'dispossessed',
                      value: '1'
                    },
                    {
                      type: 'attBxLeft',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '5'
                    },
                    {
                      type: 'totalSubOff',
                      value: '1'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '1'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '4'
                    },
                    {
                      type: 'totalCornersIntobox',
                      value: '5'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '5'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '11'
                    },
                    {
                      type: 'touches',
                      value: '48'
                    },
                    {
                      type: 'attIboxBlocked',
                      value: '1'
                    },
                    {
                      type: 'goalsConceded',
                      value: '5'
                    },
                    {
                      type: 'wonContest',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '19'
                    },
                    {
                      type: 'attLfTotal',
                      value: '1'
                    },
                    {
                      type: 'attOpenplay',
                      value: '1'
                    },
                    {
                      type: 'accurateCornersIntobox',
                      value: '1'
                    },
                    {
                      type: 'interception',
                      value: '1'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '4'
                    },
                    {
                      type: 'accurateThrows',
                      value: '4'
                    },
                    {
                      type: 'duelLost',
                      value: '3'
                    },
                    {
                      type: 'fwdPass',
                      value: '11'
                    },
                    {
                      type: 'attAssistSetplay',
                      value: '1'
                    },
                    {
                      type: 'totalPullBack',
                      value: '1'
                    },
                    {
                      type: 'blockedScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '2'
                    },
                    {
                      type: 'totalCross',
                      value: '7'
                    },
                    {
                      type: 'wonCorners',
                      value: '1'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '3'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '12'
                    },
                    {
                      type: 'crosses18yard',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '5'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '5'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '8'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '10'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '4'
                    },
                    {
                      type: 'totalPass',
                      value: '26'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '1'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'totalTackle',
                      value: '2'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '13'
                    },
                    {
                      type: 'offtargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '3'
                    },
                    {
                      type: 'freekickCross',
                      value: '1'
                    },
                    {
                      type: 'yellowCard',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '2'
                    },
                    {
                      type: 'formationPlace',
                      value: '3'
                    }
                  ]
                },
                {
                  playerId: '7cdiijsvnfc7tafy0zkf4uz9',
                  firstName: 'Mohameth Djibril Ibrahima',
                  lastName: 'Sow',
                  shortFirstName: 'Djibril',
                  shortLastName: 'Sow',
                  matchName: 'D. Sow',
                  shirtNumber: 8,
                  position: 'Midfielder',
                  positionSide: 'Left/Centre',
                  formationPlace: '8',
                  stat: [
                    {
                      type: 'fiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '14'
                    },
                    {
                      type: 'backwardPass',
                      value: '6'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '9'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '3'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '11'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '17'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '3'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '4'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '35'
                    },
                    {
                      type: 'leftsidePass',
                      value: '8'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '3'
                    },
                    {
                      type: 'ballRecovery',
                      value: '7'
                    },
                    {
                      type: 'rightsidePass',
                      value: '6'
                    },
                    {
                      type: 'possLostAll',
                      value: '5'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '2'
                    },
                    {
                      type: 'interception',
                      value: '2'
                    },
                    {
                      type: 'duelLost',
                      value: '3'
                    },
                    {
                      type: 'fwdPass',
                      value: '15'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '13'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '4'
                    },
                    {
                      type: 'touches',
                      value: '40'
                    },
                    {
                      type: 'goalsConceded',
                      value: '6'
                    },
                    {
                      type: 'wonContest',
                      value: '1'
                    },
                    {
                      type: 'openPlayPass',
                      value: '35'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '20'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '11'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '3'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'headPass',
                      value: '1'
                    },
                    {
                      type: 'passesLeft',
                      value: '5'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '30'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'totalContest',
                      value: '1'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '3'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '5'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '5'
                    },
                    {
                      type: 'fouls',
                      value: '2'
                    },
                    {
                      type: 'interceptionWon',
                      value: '2'
                    },
                    {
                      type: 'accuratePass',
                      value: '30'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '5'
                    },
                    {
                      type: 'totalClearance',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '15'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '8'
                    }
                  ]
                },
                {
                  playerId: '78e1qvft3ser2tyayjlmemdp1',
                  firstName: 'Sebastian',
                  lastName: 'Rode',
                  shortFirstName: 'Sebastian',
                  shortLastName: 'Rode',
                  matchName: 'S. Rode',
                  shirtNumber: 17,
                  position: 'Midfielder',
                  positionSide: 'Centre/Right',
                  formationPlace: '7',
                  captain: 'yes',
                  stat: [
                    {
                      type: 'fiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '12'
                    },
                    {
                      type: 'backwardPass',
                      value: '4'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '5'
                    },
                    {
                      type: 'totalLayoffs',
                      value: '1'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '7'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '4'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '2'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '14'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalTackle',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '2'
                    },
                    {
                      type: 'ballRecovery',
                      value: '3'
                    },
                    {
                      type: 'rightsidePass',
                      value: '5'
                    },
                    {
                      type: 'wonTackle',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '4'
                    },
                    {
                      type: 'passesRight',
                      value: '3'
                    },
                    {
                      type: 'interception',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '3'
                    },
                    {
                      type: 'duelLost',
                      value: '3'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '8'
                    },
                    {
                      type: 'touches',
                      value: '20'
                    },
                    {
                      type: 'goalsConceded',
                      value: '5'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '4'
                    },
                    {
                      type: 'openPlayPass',
                      value: '13'
                    },
                    {
                      type: 'dispossessed',
                      value: '1'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'totalSubOff',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '6'
                    },
                    {
                      type: 'duelWon',
                      value: '2'
                    },
                    {
                      type: 'accurateLayoffs',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '4'
                    },
                    {
                      type: 'headPass',
                      value: '2'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'minsPlayed',
                      value: '45'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '11'
                    },
                    {
                      type: 'passesLeft',
                      value: '1'
                    },
                    {
                      type: 'totalContest',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '4'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'interceptionWon',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '12'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '3'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '10'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '2'
                    },
                    {
                      type: 'formationPlace',
                      value: '7'
                    }
                  ]
                },
                {
                  playerId: 'byn8dfwg5zdefrca7wgn32qne',
                  firstName: 'Ansgar',
                  lastName: 'Knauff',
                  shortFirstName: 'Ansgar',
                  shortLastName: 'Knauff',
                  matchName: 'A. Knauff',
                  shirtNumber: 36,
                  position: 'Midfielder',
                  positionSide: 'Right',
                  formationPlace: '2',
                  stat: [
                    {
                      type: 'fwdPass',
                      value: '17'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '4'
                    },
                    {
                      type: 'duelLost',
                      value: '4'
                    },
                    {
                      type: 'attOboxMiss',
                      value: '1'
                    },
                    {
                      type: 'accurateThrows',
                      value: '5'
                    },
                    {
                      type: 'attMissRight',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '12'
                    },
                    {
                      type: 'attOboxTarget',
                      value: '1'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '1'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '3'
                    },
                    {
                      type: 'attObxCentre',
                      value: '2'
                    },
                    {
                      type: 'attOpenplay',
                      value: '2'
                    },
                    {
                      type: 'wonTackle',
                      value: '2'
                    },
                    {
                      type: 'attLfTotal',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '33'
                    },
                    {
                      type: 'attIboxMiss',
                      value: '1'
                    },
                    {
                      type: 'crosses18yard',
                      value: '3'
                    },
                    {
                      type: 'putThrough',
                      value: '2'
                    },
                    {
                      type: 'ballRecovery',
                      value: '2'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '3'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '1'
                    },
                    {
                      type: 'totalCross',
                      value: '4'
                    },
                    {
                      type: 'wonCorners',
                      value: '2'
                    },
                    {
                      type: 'leftsidePass',
                      value: '12'
                    },
                    {
                      type: 'attSvLowLeft',
                      value: '1'
                    },
                    {
                      type: 'totalTackle',
                      value: '4'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '40'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '6'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '7'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '15'
                    },
                    {
                      type: 'overrun',
                      value: '1'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '6'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '9'
                    },
                    {
                      type: 'crosses18yardplus',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '11'
                    },
                    {
                      type: 'offtargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'headClearance',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '14'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '30'
                    },
                    {
                      type: 'totalThrows',
                      value: '7'
                    },
                    {
                      type: 'shotOffTarget',
                      value: '2'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '6'
                    },
                    {
                      type: 'totalClearance',
                      value: '3'
                    },
                    {
                      type: 'accuratePass',
                      value: '19'
                    },
                    {
                      type: 'totalLaunches',
                      value: '1'
                    },
                    {
                      type: 'attemptsObox',
                      value: '2'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'totalCrossNocorner',
                      value: '4'
                    },
                    {
                      type: 'blockedPass',
                      value: '2'
                    },
                    {
                      type: 'attCmissRight',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '33'
                    },
                    {
                      type: 'effectiveHeadClearance',
                      value: '2'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '2'
                    },
                    {
                      type: 'turnover',
                      value: '4'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '10'
                    },
                    {
                      type: 'totalContest',
                      value: '4'
                    },
                    {
                      type: 'accurateCrossNocorner',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '19'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'headPass',
                      value: '3'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'totalFlickOn',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '6'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '1'
                    },
                    {
                      type: 'attMissLeft',
                      value: '1'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '7'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'accurateCross',
                      value: '1'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '14'
                    },
                    {
                      type: 'openPlayPass',
                      value: '40'
                    },
                    {
                      type: 'ontargetScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'wonContest',
                      value: '2'
                    },
                    {
                      type: 'goalsConceded',
                      value: '6'
                    },
                    {
                      type: 'attCorner',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '72'
                    },
                    {
                      type: 'attRfTarget',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '2'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '13'
                    },
                    {
                      type: 'attRfTotal',
                      value: '2'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '4'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '2'
                    },
                    {
                      type: 'formationPlace',
                      value: '2'
                    }
                  ]
                },
                {
                  playerId: 'eqtsanns36za56h4pfqhbnh05',
                  firstName: 'Mario',
                  lastName: 'Götze',
                  shortFirstName: 'Mario',
                  shortLastName: 'Götze',
                  matchName: 'M. Götze',
                  shirtNumber: 27,
                  position: 'Attacking Midfielder',
                  positionSide: 'Left/Centre',
                  formationPlace: '11',
                  stat: [
                    {
                      type: 'accurateBackZonePass',
                      value: '5'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '16'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '9'
                    },
                    {
                      type: 'totalTackle',
                      value: '3'
                    },
                    {
                      type: 'totalPass',
                      value: '30'
                    },
                    {
                      type: 'wasFouled',
                      value: '4'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '3'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '1'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '3'
                    },
                    {
                      type: 'crosses18yardplus',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '5'
                    },
                    {
                      type: 'offtargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '14'
                    },
                    {
                      type: 'passesRight',
                      value: '11'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '1'
                    },
                    {
                      type: 'successfulPutThrough',
                      value: '1'
                    },
                    {
                      type: 'wonTackle',
                      value: '2'
                    },
                    {
                      type: 'possLostAll',
                      value: '16'
                    },
                    {
                      type: 'fwdPass',
                      value: '15'
                    },
                    {
                      type: 'duelLost',
                      value: '6'
                    },
                    {
                      type: 'putThrough',
                      value: '4'
                    },
                    {
                      type: 'ballRecovery',
                      value: '9'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '1'
                    },
                    {
                      type: 'accurateThroughBall',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '5'
                    },
                    {
                      type: 'totalCross',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '2'
                    },
                    {
                      type: 'totalOffside',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '8'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '11'
                    },
                    {
                      type: 'dispossessed',
                      value: '1'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '8'
                    },
                    {
                      type: 'openPlayPass',
                      value: '29'
                    },
                    {
                      type: 'duelWon',
                      value: '8'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '1'
                    },
                    {
                      type: 'totalThroughBall',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '5'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '16'
                    },
                    {
                      type: 'wonContest',
                      value: '1'
                    },
                    {
                      type: 'goalsConceded',
                      value: '6'
                    },
                    {
                      type: 'touches',
                      value: '46'
                    },
                    {
                      type: 'possWonAtt3rd',
                      value: '1'
                    },
                    {
                      type: 'totalCrossNocorner',
                      value: '1'
                    },
                    {
                      type: 'blockedPass',
                      value: '4'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '16'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '2'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '23'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '5'
                    },
                    {
                      type: 'accuratePass',
                      value: '21'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '7'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '1'
                    },
                    {
                      type: 'totalContest',
                      value: '5'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '20'
                    },
                    {
                      type: 'passesLeft',
                      value: '2'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '5'
                    },
                    {
                      type: 'formationPlace',
                      value: '11'
                    }
                  ]
                },
                {
                  playerId: '5ph2ln91ycq1qlq03cnqqs9re',
                  firstName: 'Jesper',
                  lastName: 'Grænge Lindstrøm',
                  shortFirstName: 'Jesper',
                  shortLastName: 'Lindstrøm',
                  matchName: 'J. Lindstrøm',
                  shirtNumber: 29,
                  position: 'Attacking Midfielder',
                  positionSide: 'Centre/Right',
                  formationPlace: '10',
                  stat: [
                    {
                      type: 'penAreaEntries',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '6'
                    },
                    {
                      type: 'attCmissLeft',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '6'
                    },
                    {
                      type: 'accuratePass',
                      value: '10'
                    },
                    {
                      type: 'shotOffTarget',
                      value: '1'
                    },
                    {
                      type: 'attBxCentre',
                      value: '1'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '1'
                    },
                    {
                      type: 'headPass',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '4'
                    },
                    {
                      type: 'totalFlickOn',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'totalContest',
                      value: '3'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'aerialWon',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '45'
                    },
                    {
                      type: 'passesLeft',
                      value: '2'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '7'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'totalSubOff',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '2'
                    },
                    {
                      type: 'openPlayPass',
                      value: '9'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '6'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '1'
                    },
                    {
                      type: 'attMissLeft',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '1'
                    },
                    {
                      type: 'accurateLayoffs',
                      value: '1'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '5'
                    },
                    {
                      type: 'attRfTotal',
                      value: '1'
                    },
                    {
                      type: 'goalsConceded',
                      value: '5'
                    },
                    {
                      type: 'touches',
                      value: '18'
                    },
                    {
                      type: 'attOpenplay',
                      value: '1'
                    },
                    {
                      type: 'bigChanceMissed',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '2'
                    },
                    {
                      type: 'possLostAll',
                      value: '6'
                    },
                    {
                      type: 'fwdPass',
                      value: '1'
                    },
                    {
                      type: 'duelLost',
                      value: '5'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '2'
                    },
                    {
                      type: 'ballRecovery',
                      value: '1'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '1'
                    },
                    {
                      type: 'totalPullBack',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '3'
                    },
                    {
                      type: 'attIboxMiss',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '2'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '3'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '5'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '5'
                    },
                    {
                      type: 'totalLayoffs',
                      value: '1'
                    },
                    {
                      type: 'overrun',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '12'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '1'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'backwardPass',
                      value: '6'
                    },
                    {
                      type: 'aerialLost',
                      value: '2'
                    },
                    {
                      type: 'accurateFlickOn',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '12'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '3'
                    },
                    {
                      type: 'formationPlace',
                      value: '10'
                    }
                  ]
                },
                {
                  playerId: '2x5f35hk2urqlgoito1vgb3yt',
                  firstName: 'Rafael Santos',
                  lastName: 'Borré Maury',
                  shortFirstName: 'Rafael',
                  shortLastName: 'Borré',
                  matchName: 'R. Borré',
                  shirtNumber: 19,
                  position: 'Striker',
                  positionSide: 'Centre',
                  formationPlace: '9',
                  stat: [
                    {
                      type: 'touches',
                      value: '18'
                    },
                    {
                      type: 'wonContest',
                      value: '3'
                    },
                    {
                      type: 'goalsConceded',
                      value: '5'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '3'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '4'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '4'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '1'
                    },
                    {
                      type: 'openPlayPass',
                      value: '7'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '4'
                    },
                    {
                      type: 'totalSubOff',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '2'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '45'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '6'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '1'
                    },
                    {
                      type: 'turnover',
                      value: '3'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '1'
                    },
                    {
                      type: 'totalContest',
                      value: '4'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'headPass',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '4'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '8'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '5'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '5'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '1'
                    },
                    {
                      type: 'interceptionWon',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '12'
                    },
                    {
                      type: 'backwardPass',
                      value: '6'
                    },
                    {
                      type: 'aerialLost',
                      value: '1'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '1'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '9'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '5'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '3'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '4'
                    },
                    {
                      type: 'rightsidePass',
                      value: '2'
                    },
                    {
                      type: 'totalOffside',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '1'
                    },
                    {
                      type: 'duelLost',
                      value: '2'
                    },
                    {
                      type: 'interception',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '5'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '1'
                    },
                    {
                      type: 'formationPlace',
                      value: '9'
                    }
                  ]
                },
                {
                  playerId: 'bgtnbojs8g884mbksh6o4wu6t',
                  firstName: 'Lucas Nicolás',
                  lastName: 'Alario',
                  shortFirstName: 'Lucas',
                  shortLastName: 'Alario',
                  matchName: 'L. Alario',
                  shirtNumber: 21,
                  position: 'Substitute',
                  subPosition: 'Attacker',
                  stat: [
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: '9ed74dfr9aeuedaf63l0i7aei',
                  firstName: 'Faride',
                  lastName: 'Alidou',
                  shortFirstName: 'Faride',
                  shortLastName: 'Alidou',
                  matchName: 'F. Alidou',
                  shirtNumber: 11,
                  position: 'Substitute',
                  subPosition: 'Attacker',
                  stat: [
                    {
                      type: 'accuratePass',
                      value: '3'
                    },
                    {
                      type: 'headPass',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '16'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '3'
                    },
                    {
                      type: 'openPlayPass',
                      value: '3'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '3'
                    },
                    {
                      type: 'touches',
                      value: '3'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '2'
                    },
                    {
                      type: 'ballRecovery',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '4'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '3'
                    },
                    {
                      type: 'totalPass',
                      value: '3'
                    },
                    {
                      type: 'totalSubOn',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: '7gni45coa4swn1i66wzpzug9h',
                  firstName: 'Timothy',
                  lastName: 'Chandler',
                  shortFirstName: 'Timothy',
                  shortLastName: 'Chandler',
                  matchName: 'T. Chandler',
                  shirtNumber: 22,
                  position: 'Substitute',
                  subPosition: 'Midfielder',
                  stat: [
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: '8kqmsuo668wpuzoyyxf4o2vo5',
                  firstName: 'Makoto',
                  lastName: 'Hasebe',
                  shortFirstName: 'Makoto',
                  shortLastName: 'Hasebe',
                  matchName: 'M. Hasebe',
                  shirtNumber: 20,
                  position: 'Substitute',
                  subPosition: 'Defender',
                  stat: [
                    {
                      type: 'touches',
                      value: '7'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '1'
                    },
                    {
                      type: 'interceptionsInBox',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '1'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'openPlayPass',
                      value: '3'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '3'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'aerialWon',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '9'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '2'
                    },
                    {
                      type: 'turnover',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '2'
                    },
                    {
                      type: 'totalClearance',
                      value: '1'
                    },
                    {
                      type: 'effectiveHeadClearance',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '3'
                    },
                    {
                      type: 'interceptionWon',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '1'
                    },
                    {
                      type: 'headClearance',
                      value: '1'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'totalSubOn',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '3'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '2'
                    },
                    {
                      type: 'rightsidePass',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '1'
                    },
                    {
                      type: 'lostCorners',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '1'
                    },
                    {
                      type: 'interception',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '2'
                    },
                    {
                      type: 'duelLost',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '3'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: 'a3ib09ji7qsz6cgj3vmz5qort',
                  firstName: 'Kristijan',
                  lastName: 'Jakić',
                  shortFirstName: 'Kristijan',
                  shortLastName: 'Jakic',
                  matchName: 'K. Jakić',
                  shirtNumber: 6,
                  position: 'Substitute',
                  subPosition: 'Midfielder',
                  stat: [
                    {
                      type: 'touches',
                      value: '17'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '4'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '3'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '3'
                    },
                    {
                      type: 'openPlayPass',
                      value: '10'
                    },
                    {
                      type: 'ontargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '3'
                    },
                    {
                      type: 'minsPlayed',
                      value: '45'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '6'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '2'
                    },
                    {
                      type: 'headPass',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '1'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '2'
                    },
                    {
                      type: 'totalLaunches',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '7'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '8'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '4'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '1'
                    },
                    {
                      type: 'interceptionWon',
                      value: '1'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '2'
                    },
                    {
                      type: 'backwardPass',
                      value: '1'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '4'
                    },
                    {
                      type: 'totalSubOn',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '1'
                    },
                    {
                      type: 'totalTackle',
                      value: '2'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '1'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '11'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '4'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '6'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '3'
                    },
                    {
                      type: 'rightsidePass',
                      value: '2'
                    },
                    {
                      type: 'totalOffside',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '4'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '4'
                    },
                    {
                      type: 'duelLost',
                      value: '2'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '1'
                    },
                    {
                      type: 'interception',
                      value: '1'
                    },
                    {
                      type: 'wonTackle',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '4'
                    },
                    {
                      type: 'passesRight',
                      value: '3'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: 'az15xx7m923srf9gdbwmiyga1',
                  firstName: 'Daichi',
                  lastName: 'Kamada',
                  shortFirstName: 'Daichi',
                  shortLastName: 'Kamada',
                  matchName: 'D. Kamada',
                  shirtNumber: 15,
                  position: 'Substitute',
                  subPosition: 'Midfielder',
                  stat: [
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: 'g3fgd752o63acmmuahdvppm1',
                  firstName: 'Randal',
                  lastName: 'Kolo Muani',
                  shortFirstName: 'Randal',
                  shortLastName: 'Kolo Muani',
                  matchName: 'R. Kolo Muani',
                  shirtNumber: 9,
                  position: 'Substitute',
                  subPosition: 'Attacker',
                  stat: [
                    {
                      type: 'attObxCentre',
                      value: '1'
                    },
                    {
                      type: 'attOpenplay',
                      value: '2'
                    },
                    {
                      type: 'passesRight',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '10'
                    },
                    {
                      type: 'attGoalLowCentre',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '1'
                    },
                    {
                      type: 'duelLost',
                      value: '5'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '2'
                    },
                    {
                      type: 'attMissRight',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '2'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '2'
                    },
                    {
                      type: 'wonCorners',
                      value: '1'
                    },
                    {
                      type: 'totalCross',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '1'
                    },
                    {
                      type: 'crosses18yard',
                      value: '1'
                    },
                    {
                      type: 'attIboxMiss',
                      value: '1'
                    },
                    {
                      type: 'attOboxGoal',
                      value: '1'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '3'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '4'
                    },
                    {
                      type: 'totalLayoffs',
                      value: '1'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '7'
                    },
                    {
                      type: 'goalsOpenplay',
                      value: '1'
                    },
                    {
                      type: 'totalSubOn',
                      value: '1'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '4'
                    },
                    {
                      type: 'backwardPass',
                      value: '5'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '2'
                    },
                    {
                      type: 'totalCrossNocorner',
                      value: '1'
                    },
                    {
                      type: 'possWonAtt3rd',
                      value: '2'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '10'
                    },
                    {
                      type: 'goals',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '5'
                    },
                    {
                      type: 'attemptsObox',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '5'
                    },
                    {
                      type: 'shotOffTarget',
                      value: '1'
                    },
                    {
                      type: 'attBxCentre',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '1'
                    },
                    {
                      type: 'headPass',
                      value: '1'
                    },
                    {
                      type: 'totalContest',
                      value: '3'
                    },
                    {
                      type: 'turnover',
                      value: '2'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'aerialWon',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '45'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '4'
                    },
                    {
                      type: 'passesLeft',
                      value: '2'
                    },
                    {
                      type: 'dispossessed',
                      value: '2'
                    },
                    {
                      type: 'bigChanceScored',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '3'
                    },
                    {
                      type: 'attRfGoal',
                      value: '1'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '3'
                    },
                    {
                      type: 'openPlayPass',
                      value: '6'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '2'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '3'
                    },
                    {
                      type: 'attRfTotal',
                      value: '2'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '2'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'ontargetScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '18'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '5'
                    },
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: '3qy1qlzezgfkxeom5n1r9h13p',
                  firstName: 'Christopher',
                  lastName: 'Lenz',
                  shortFirstName: 'Christopher',
                  shortLastName: 'Lenz',
                  matchName: 'C. Lenz',
                  shirtNumber: 25,
                  position: 'Substitute',
                  subPosition: 'Defender',
                  stat: [
                    {
                      type: 'minsPlayed',
                      value: '45'
                    },
                    {
                      type: 'passesLeft',
                      value: '5'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '20'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '2'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '2'
                    },
                    {
                      type: 'accurateCrossNocorner',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededIbox',
                      value: '1'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '3'
                    },
                    {
                      type: 'totalLaunches',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '20'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '11'
                    },
                    {
                      type: 'totalThrows',
                      value: '1'
                    },
                    {
                      type: 'blockedPass',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '3'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '2'
                    },
                    {
                      type: 'possWonAtt3rd',
                      value: '1'
                    },
                    {
                      type: 'interceptionWon',
                      value: '2'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'totalCrossNocorner',
                      value: '2'
                    },
                    {
                      type: 'touches',
                      value: '32'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'interceptionsInBox',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '8'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '4'
                    },
                    {
                      type: 'accurateCross',
                      value: '1'
                    },
                    {
                      type: 'openPlayPass',
                      value: '22'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '13'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '7'
                    },
                    {
                      type: 'rightsidePass',
                      value: '10'
                    },
                    {
                      type: 'crosses18yard',
                      value: '2'
                    },
                    {
                      type: 'totalCross',
                      value: '2'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '2'
                    },
                    {
                      type: 'putThrough',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '4'
                    },
                    {
                      type: 'lostCorners',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '6'
                    },
                    {
                      type: 'duelLost',
                      value: '1'
                    },
                    {
                      type: 'accurateThrows',
                      value: '1'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '1'
                    },
                    {
                      type: 'interception',
                      value: '2'
                    },
                    {
                      type: 'offsideProvoked',
                      value: '1'
                    },
                    {
                      type: 'wonTackle',
                      value: '2'
                    },
                    {
                      type: 'successfulPutThrough',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '3'
                    },
                    {
                      type: 'passesRight',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '2'
                    },
                    {
                      type: 'backwardPass',
                      value: '6'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'accurateLaunches',
                      value: '1'
                    },
                    {
                      type: 'totalSubOn',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '1'
                    },
                    {
                      type: 'totalTackle',
                      value: '3'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '1'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '22'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '3'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '4'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '9'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '13'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: 'f2ibn3ej2doay3b4u8ezeix62',
                  firstName: 'Diant',
                  lastName: 'Ramaj',
                  shortFirstName: 'Diant',
                  shortLastName: 'Ramaj',
                  matchName: 'D. Ramaj',
                  shirtNumber: 40,
                  position: 'Substitute',
                  subPosition: 'Goalkeeper',
                  stat: [
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                }
              ],
              teamOfficial: {
                id: 'ca7rw68rknknvsdxxb1e7huqd',
                firstName: 'Oliver',
                lastName: 'Glasner',
                type: 'manager'
              },
              stat: [
                {
                  fh: '285',
                  sh: '247',
                  type: 'touches',
                  value: '532'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'attCorner',
                  value: '2'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attIboxBlocked',
                  value: '1'
                },
                {
                  fh: '5',
                  sh: '2',
                  type: 'outfielderBlock',
                  value: '7'
                },
                {
                  fh: '6',
                  sh: '4',
                  type: 'wonContest',
                  value: '10'
                },
                {
                  fh: '5',
                  sh: '1',
                  type: 'goalsConceded',
                  value: '6'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'postScoringAtt',
                  value: '1'
                },
                {
                  fh: '0',
                  sh: '2',
                  type: 'ontargetScoringAtt',
                  value: '2'
                },
                {
                  fh: '1',
                  sh: '4',
                  type: 'attRfTotal',
                  value: '5'
                },
                {
                  fh: '7',
                  sh: '3',
                  type: 'fkFoulLost',
                  value: '10'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attIboxPost',
                  value: '1'
                },
                {
                  fh: '8',
                  sh: '3',
                  type: 'unsuccessfulTouch',
                  value: '11'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'interceptionsInBox',
                  value: '3'
                },
                {
                  fh: '1',
                  sh: '4',
                  type: 'totalCornersIntobox',
                  value: '5'
                },
                {
                  fh: '64',
                  sh: '47',
                  type: 'accurateFwdZonePass',
                  value: '111'
                },
                {
                  fh: '21',
                  sh: '12',
                  type: 'longPassOwnToOppSuccess',
                  value: '33'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attRfTarget',
                  value: '1'
                },
                {
                  fh: '7',
                  sh: '2',
                  type: 'goalKicks',
                  value: '9'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'totalThroughBall',
                  value: '1'
                },
                {
                  fh: '3',
                  sh: '2',
                  type: 'attemptsIbox',
                  value: '5'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'attMissLeft',
                  value: '2'
                },
                {
                  fh: '4',
                  sh: '5',
                  type: 'challengeLost',
                  value: '9'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attPostHigh',
                  value: '1'
                },
                {
                  fh: '22',
                  sh: '21',
                  type: 'duelWon',
                  value: '43'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'accurateLayoffs',
                  value: '2'
                },
                {
                  fh: '8',
                  sh: '9',
                  type: 'accurateChippedPass',
                  value: '17'
                },
                {
                  fh: '2',
                  sh: '1',
                  type: 'divingSave',
                  value: '3'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attRfGoal',
                  value: '1'
                },
                {
                  fh: '169',
                  sh: '160',
                  type: 'openPlayPass',
                  value: '329'
                },
                {
                  fh: '94',
                  sh: '100',
                  type: 'totalBackZonePass',
                  value: '194'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attHdPost',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'accurateCross',
                  value: '3'
                },
                {
                  fh: '3',
                  sh: '2',
                  type: 'dispossessed',
                  value: '5'
                },
                {
                  fh: '5',
                  sh: '6',
                  type: 'fkFoulWon',
                  value: '11'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'ontargetAttAssist',
                  value: '1'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'bigChanceScored',
                  value: '1'
                },
                {
                  fh: '37',
                  sh: '30',
                  type: 'successfulFinalThirdPasses',
                  value: '67'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attBxLeft',
                  value: '1'
                },
                {
                  fh: '9',
                  sh: '5',
                  type: 'successfulFiftyFifty',
                  value: '14'
                },
                {
                  fh: '3',
                  sh: '3',
                  type: 'aerialWon',
                  value: '6'
                },
                {
                  fh: '13',
                  sh: '17',
                  type: 'passesLeft',
                  value: '30'
                },
                {
                  fh: '126',
                  sh: '122',
                  type: 'successfulOpenPlayPass',
                  value: '248'
                },
                {
                  fh: '17',
                  sh: '8',
                  type: 'totalContest',
                  value: '25'
                },
                {
                  fh: '0',
                  sh: '2',
                  type: 'accurateCrossNocorner',
                  value: '2'
                },
                {
                  fh: '39',
                  sh: '25',
                  type: 'longPassOwnToOpp',
                  value: '64'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'savedIbox',
                  value: '1'
                },
                {
                  fh: '9',
                  sh: '8',
                  type: 'accurateLongBalls',
                  value: '17'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attHdTotal',
                  value: '1'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'totalFlickOn',
                  value: '2'
                },
                {
                  fh: '2',
                  sh: '1',
                  type: 'savedObox',
                  value: '3'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'goalsConcededObox',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '4',
                  type: 'cornerTaken',
                  value: '5'
                },
                {
                  fh: '4',
                  sh: '1',
                  type: 'goalsConcededIbox',
                  value: '5'
                },
                {
                  fh: '4',
                  sh: '6',
                  type: 'totalLaunches',
                  value: '10'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'attemptsObox',
                  value: '3'
                },
                {
                  fh: '144',
                  sh: '131',
                  type: 'accuratePass',
                  value: '275'
                },
                {
                  fh: '3',
                  sh: '2',
                  type: 'shotOffTarget',
                  value: '5'
                },
                {
                  fh: '2',
                  sh: '1',
                  type: 'attBxCentre',
                  value: '3'
                },
                {
                  fh: '25',
                  sh: '18',
                  type: 'finalThirdEntries',
                  value: '43'
                },
                {
                  fh: '6',
                  sh: '9',
                  type: 'totalClearance',
                  value: '15'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attCmissLeft',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'accurateKeeperThrows',
                  value: '3'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'goals',
                  value: '1'
                },
                {
                  fh: '0',
                  sh: '2',
                  type: 'totalYellowCard',
                  value: '2'
                },
                {
                  fh: '100',
                  sh: '80',
                  type: 'totalFwdZonePass',
                  value: '180'
                },
                {
                  fh: '10',
                  sh: '5',
                  type: 'totalThrows',
                  value: '15'
                },
                {
                  fh: '9',
                  sh: '14',
                  type: 'penAreaEntries',
                  value: '23'
                },
                {
                  fh: '6',
                  sh: '6',
                  type: 'blockedPass',
                  value: '12'
                },
                {
                  fh: '78',
                  sh: '60',
                  type: 'possLostCtrl',
                  value: '138'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attCmissRight',
                  value: '1'
                },
                {
                  fh: '2',
                  sh: '6',
                  type: 'effectiveHeadClearance',
                  value: '8'
                },
                {
                  fh: '3',
                  sh: '7',
                  type: 'totalCrossNocorner',
                  value: '10'
                },
                {
                  fh: '1',
                  sh: '4',
                  type: 'possWonAtt3rd',
                  value: '5'
                },
                {
                  fh: '10',
                  sh: '7',
                  type: 'interceptionWon',
                  value: '17'
                },
                {
                  fh: '2',
                  sh: '6',
                  type: 'headClearance',
                  value: '8'
                },
                {
                  fh: '12',
                  sh: '2',
                  type: 'attemptsConcededIbox',
                  value: '14'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'offtargetAttAssist',
                  value: '3'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'hitWoodwork',
                  value: '1'
                },
                {
                  fh: '34',
                  sh: '30',
                  type: 'backwardPass',
                  value: '64'
                },
                {
                  fh: '1',
                  sh: '1',
                  type: 'crosses18yardplus',
                  value: '2'
                },
                {
                  fh: '3',
                  sh: '0',
                  type: 'aerialLost',
                  value: '3'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'accurateFlickOn',
                  value: '1'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'freekickCross',
                  value: '1'
                },
                {
                  fh: '16',
                  sh: '15',
                  type: 'fiftyFifty',
                  value: '31'
                },
                {
                  fh: '1',
                  sh: '1',
                  type: 'accurateLaunches',
                  value: '2'
                },
                {
                  fh: '2',
                  sh: '2',
                  type: 'saves',
                  value: '4'
                },
                {
                  fh: '18',
                  sh: '17',
                  type: 'totalChippedPass',
                  value: '35'
                },
                {
                  fh: '12',
                  sh: '6',
                  type: 'possWonMid3rd',
                  value: '18'
                },
                {
                  fh: '4',
                  sh: '3',
                  type: 'attemptedTackleFoul',
                  value: '7'
                },
                {
                  fh: '190',
                  sh: '169',
                  type: 'totalPass',
                  value: '359'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'goalsOpenplay',
                  value: '1'
                },
                {
                  fh: '8',
                  sh: '8',
                  type: 'totalTackle',
                  value: '16'
                },
                {
                  fh: '25',
                  sh: '19',
                  type: 'totalLongBalls',
                  value: '44'
                },
                {
                  fh: '5',
                  sh: '4',
                  type: 'attemptsConcededObox',
                  value: '9'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'punches',
                  value: '1'
                },
                {
                  fh: '2',
                  sh: '1',
                  type: 'totalLayoffs',
                  value: '3'
                },
                {
                  fh: '2',
                  sh: '1',
                  type: 'overrun',
                  value: '3'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'blockedCross',
                  value: '1'
                },
                {
                  fh: '51',
                  sh: '46',
                  type: 'totalFinalThirdPasses',
                  value: '97'
                },
                {
                  fh: '81',
                  sh: '86',
                  type: 'accurateBackZonePass',
                  value: '167'
                },
                {
                  fh: '39.6',
                  sh: '34.3',
                  type: 'possessionPercentage',
                  value: '36.8'
                },
                {
                  fh: '52',
                  sh: '37',
                  type: 'rightsidePass',
                  value: '89'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attOboxGoal',
                  value: '1'
                },
                {
                  fh: '2',
                  sh: '5',
                  type: 'crosses18yard',
                  value: '7'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'attIboxMiss',
                  value: '3'
                },
                {
                  fh: '1',
                  sh: '3',
                  type: 'totalOffside',
                  value: '4'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'effectiveBlockedCross',
                  value: '1'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attSvLowLeft',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '4',
                  type: 'wonCorners',
                  value: '5'
                },
                {
                  fh: '4',
                  sh: '11',
                  type: 'totalCross',
                  value: '15'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'accurateThroughBall',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'blockedScoringAtt',
                  value: '1'
                },
                {
                  fh: '14',
                  sh: '22',
                  type: 'possWonDef3rd',
                  value: '36'
                },
                {
                  fh: '1',
                  sh: '1',
                  type: 'totalPullBack',
                  value: '2'
                },
                {
                  fh: '35',
                  sh: '34',
                  type: 'leftsidePass',
                  value: '69'
                },
                {
                  fh: '6',
                  sh: '6',
                  type: 'putThrough',
                  value: '12'
                },
                {
                  fh: '1',
                  sh: '3',
                  type: 'totalAttAssist',
                  value: '4'
                },
                {
                  fh: '30',
                  sh: '34',
                  type: 'ballRecovery',
                  value: '64'
                },
                {
                  fh: '4',
                  sh: '4',
                  type: 'totalScoringAtt',
                  value: '8'
                },
                {
                  fh: '3',
                  sh: '3',
                  type: 'lostCorners',
                  value: '6'
                },
                {
                  fh: '0',
                  sh: '5',
                  type: 'subsMade',
                  value: '5'
                },
                {
                  fh: '6',
                  sh: '2',
                  type: 'accurateGoalKicks',
                  value: '8'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'accurateCornersIntobox',
                  value: '1'
                },
                {
                  fh: '0',
                  sh: '2',
                  type: 'attMissRight',
                  value: '2'
                },
                {
                  fh: '10',
                  sh: '7',
                  type: 'interception',
                  value: '17'
                },
                {
                  fh: '69',
                  sh: '68',
                  type: 'fwdPass',
                  value: '137'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attAssistSetplay',
                  value: '1'
                },
                {
                  fh: '28',
                  sh: '14',
                  type: 'duelLost',
                  value: '42'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attOboxMiss',
                  value: '1'
                },
                {
                  fh: '6',
                  sh: '5',
                  type: 'accurateThrows',
                  value: '11'
                },
                {
                  fh: '7',
                  sh: '9',
                  type: 'touchesInOppBox',
                  value: '16'
                },
                {
                  fh: '3',
                  sh: '6',
                  type: 'wonTackle',
                  value: '9'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'attLfTotal',
                  value: '2'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'successfulPutThrough',
                  value: '3'
                },
                {
                  fh: '78',
                  sh: '60',
                  type: 'possLostAll',
                  value: '138'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attGoalLowCentre',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'keeperThrows',
                  value: '3'
                },
                {
                  fh: '6',
                  sh: '9',
                  type: 'effectiveClearance',
                  value: '15'
                },
                {
                  fh: '0',
                  sh: '3',
                  type: 'attAssistOpenplay',
                  value: '3'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'attObxCentre',
                  value: '3'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'bigChanceMissed',
                  value: '1'
                },
                {
                  fh: '2',
                  sh: '4',
                  type: 'attOpenplay',
                  value: '6'
                },
                {
                  fh: '27',
                  sh: '27',
                  type: 'passesRight',
                  value: '54'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attOboxTarget',
                  value: '1'
                },
                {
                  type: 'formationUsed',
                  value: '3421'
                }
              ],
              kit: {
                id: '14121',
                colour1: '#FFFFFF',
                type: 'home'
              }
            },
            {
              contestantId: 'apoawtpvac4zqlancmvw4nk4o',
              formationUsed: '442',
              player: [
                {
                  playerId: '64pzn3jdqo6y2izlpm8n3tvpx',
                  firstName: 'Manuel Peter',
                  lastName: 'Neuer',
                  shortFirstName: 'Manuel',
                  shortLastName: 'Neuer',
                  matchName: 'M. Neuer',
                  shirtNumber: 1,
                  position: 'Goalkeeper',
                  positionSide: 'Centre',
                  formationPlace: '1',
                  captain: 'yes',
                  stat: [
                    {
                      type: 'rightsidePass',
                      value: '7'
                    },
                    {
                      type: 'leftsidePass',
                      value: '15'
                    },
                    {
                      type: 'ballRecovery',
                      value: '9'
                    },
                    {
                      type: 'accurateGoalKicks',
                      value: '4'
                    },
                    {
                      type: 'fwdPass',
                      value: '15'
                    },
                    {
                      type: 'possLostAll',
                      value: '4'
                    },
                    {
                      type: 'passesRight',
                      value: '1'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '1'
                    },
                    {
                      type: 'keeperThrows',
                      value: '8'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'accurateLaunches',
                      value: '1'
                    },
                    {
                      type: 'saves',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '5'
                    },
                    {
                      type: 'errorLeadToGoal',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '37'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '7'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '34'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '25'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '4'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '3'
                    },
                    {
                      type: 'turnover',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'savedObox',
                      value: '1'
                    },
                    {
                      type: 'headPass',
                      value: '1'
                    },
                    {
                      type: 'totalClearance',
                      value: '1'
                    },
                    {
                      type: 'totalLaunches',
                      value: '2'
                    },
                    {
                      type: 'accuratePass',
                      value: '34'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '3'
                    },
                    {
                      type: 'accurateKeeperThrows',
                      value: '8'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '4'
                    },
                    {
                      type: 'touches',
                      value: '48'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '1'
                    },
                    {
                      type: 'totalKeeperSweeper',
                      value: '1'
                    },
                    {
                      type: 'goalKicks',
                      value: '4'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '3'
                    },
                    {
                      type: 'divingSave',
                      value: '1'
                    },
                    {
                      type: 'keeperPickUp',
                      value: '9'
                    },
                    {
                      type: 'openPlayPass',
                      value: '28'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '34'
                    },
                    {
                      type: 'accurateKeeperSweeper',
                      value: '1'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '1'
                    }
                  ]
                },
                {
                  playerId: '582uvj0i3dvm0zwbou9q68pgp',
                  firstName: 'Alphonso',
                  lastName: 'Boyle Davies',
                  shortFirstName: 'Alphonso',
                  shortLastName: 'Davies',
                  matchName: 'A. Davies',
                  shirtNumber: 19,
                  position: 'Defender',
                  positionSide: 'Left',
                  formationPlace: '3',
                  stat: [
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'totalContest',
                      value: '5'
                    },
                    {
                      type: 'turnover',
                      value: '2'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '3'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '2'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '3'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'passesLeft',
                      value: '7'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '45'
                    },
                    {
                      type: 'interceptionWon',
                      value: '3'
                    },
                    {
                      type: 'blockedPass',
                      value: '2'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '14'
                    },
                    {
                      type: 'totalThrows',
                      value: '4'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '20'
                    },
                    {
                      type: 'accuratePass',
                      value: '45'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '5'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '3'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '16'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '2'
                    },
                    {
                      type: 'wonContest',
                      value: '1'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '79'
                    },
                    {
                      type: 'dispossessed',
                      value: '2'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '6'
                    },
                    {
                      type: 'openPlayPass',
                      value: '50'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '30'
                    },
                    {
                      type: 'duelWon',
                      value: '4'
                    },
                    {
                      type: 'putThrough',
                      value: '2'
                    },
                    {
                      type: 'lostCorners',
                      value: '2'
                    },
                    {
                      type: 'ballRecovery',
                      value: '7'
                    },
                    {
                      type: 'effectiveBlockedCross',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '3'
                    },
                    {
                      type: 'leftsidePass',
                      value: '2'
                    },
                    {
                      type: 'rightsidePass',
                      value: '25'
                    },
                    {
                      type: 'successfulPutThrough',
                      value: '2'
                    },
                    {
                      type: 'wonTackle',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '14'
                    },
                    {
                      type: 'offsideProvoked',
                      value: '2'
                    },
                    {
                      type: 'interception',
                      value: '3'
                    },
                    {
                      type: 'fwdPass',
                      value: '7'
                    },
                    {
                      type: 'accurateThrows',
                      value: '4'
                    },
                    {
                      type: 'duelLost',
                      value: '7'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '3'
                    },
                    {
                      type: 'backwardPass',
                      value: '16'
                    },
                    {
                      type: 'aerialLost',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'blockedCross',
                      value: '1'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '29'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '10'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'overrun',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '50'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '4'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'totalTackle',
                      value: '2'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '6'
                    },
                    {
                      type: 'formationPlace',
                      value: '3'
                    }
                  ]
                },
                {
                  playerId: 'c80tzy7t4hoa8fpbek1od4lw5',
                  firstName: 'Lucas François Bernard',
                  lastName: 'Hernández',
                  shortFirstName: 'Lucas',
                  shortLastName: 'Hernández',
                  matchName: 'L. Hernández',
                  shirtNumber: 21,
                  position: 'Defender',
                  positionSide: 'Left/Centre',
                  formationPlace: '6',
                  stat: [
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '12'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '19'
                    },
                    {
                      type: 'touches',
                      value: '92'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '60'
                    },
                    {
                      type: 'openPlayPass',
                      value: '82'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '3'
                    },
                    {
                      type: 'ontargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'totalSubOff',
                      value: '1'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '4'
                    },
                    {
                      type: 'duelWon',
                      value: '2'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'headPass',
                      value: '2'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '78'
                    },
                    {
                      type: 'passesLeft',
                      value: '7'
                    },
                    {
                      type: 'minsPlayed',
                      value: '82'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '5'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '14'
                    },
                    {
                      type: 'effectiveHeadClearance',
                      value: '2'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '5'
                    },
                    {
                      type: 'fouls',
                      value: '2'
                    },
                    {
                      type: 'accuratePass',
                      value: '78'
                    },
                    {
                      type: 'totalLaunches',
                      value: '1'
                    },
                    {
                      type: 'totalClearance',
                      value: '5'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '3'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '22'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'headClearance',
                      value: '2'
                    },
                    {
                      type: 'backwardPass',
                      value: '5'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '6'
                    },
                    {
                      type: 'blockedCross',
                      value: '1'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '59'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '4'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '4'
                    },
                    {
                      type: 'totalPass',
                      value: '82'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '2'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '3'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'totalTackle',
                      value: '1'
                    },
                    {
                      type: 'effectiveBlockedCross',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '14'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '3'
                    },
                    {
                      type: 'ballRecovery',
                      value: '6'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '38'
                    },
                    {
                      type: 'possLostAll',
                      value: '5'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '1'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '5'
                    },
                    {
                      type: 'passesRight',
                      value: '4'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '1'
                    },
                    {
                      type: 'duelLost',
                      value: '2'
                    },
                    {
                      type: 'fwdPass',
                      value: '25'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '6'
                    }
                  ]
                },
                {
                  playerId: 'x4qyxhfr2vi007sazoqe5vit',
                  firstName: 'Dayotchanculle Oswald',
                  lastName: 'Upamecano',
                  shortFirstName: 'Dayot',
                  shortLastName: 'Upamecano',
                  matchName: 'D. Upamecano',
                  shirtNumber: 2,
                  position: 'Defender',
                  positionSide: 'Centre/Right',
                  formationPlace: '5',
                  stat: [
                    {
                      type: 'totalLaunches',
                      value: '2'
                    },
                    {
                      type: 'accuratePass',
                      value: '85'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '7'
                    },
                    {
                      type: 'totalClearance',
                      value: '2'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '37'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '12'
                    },
                    {
                      type: 'effectiveHeadClearance',
                      value: '1'
                    },
                    {
                      type: 'aerialWon',
                      value: '2'
                    },
                    {
                      type: 'passesLeft',
                      value: '2'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '84'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '5'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '27'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'headPass',
                      value: '4'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '1'
                    },
                    {
                      type: 'challengeLost',
                      value: '3'
                    },
                    {
                      type: 'duelWon',
                      value: '7'
                    },
                    {
                      type: 'openPlayPass',
                      value: '96'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '60'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '3'
                    },
                    {
                      type: 'ontargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '107'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '28'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '20'
                    },
                    {
                      type: 'duelLost',
                      value: '4'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '30'
                    },
                    {
                      type: 'possLostAll',
                      value: '12'
                    },
                    {
                      type: 'wonTackle',
                      value: '4'
                    },
                    {
                      type: 'offsideProvoked',
                      value: '1'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '2'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '14'
                    },
                    {
                      type: 'rightsidePass',
                      value: '19'
                    },
                    {
                      type: 'leftsidePass',
                      value: '39'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '8'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '14'
                    },
                    {
                      type: 'lostCorners',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '5'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '6'
                    },
                    {
                      type: 'totalPass',
                      value: '97'
                    },
                    {
                      type: 'totalTackle',
                      value: '5'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'lastManTackle',
                      value: '1'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '10'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '9'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '57'
                    },
                    {
                      type: 'headClearance',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'aerialLost',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '9'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '5'
                    }
                  ]
                },
                {
                  playerId: 'yq0cm7vwr0tkv7nvt9vo77bp',
                  firstName: 'Benjamin Jacques',
                  lastName: 'Marcel Pavard',
                  shortFirstName: 'Benjamin',
                  shortLastName: 'Pavard',
                  matchName: 'B. Pavard',
                  shirtNumber: 5,
                  position: 'Defender',
                  positionSide: 'Right',
                  formationPlace: '2',
                  stat: [
                    {
                      type: 'crosses18yardplus',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '6'
                    },
                    {
                      type: 'aerialLost',
                      value: '1'
                    },
                    {
                      type: 'headClearance',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '6'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '2'
                    },
                    {
                      type: 'totalPass',
                      value: '58'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '1'
                    },
                    {
                      type: 'totalTackle',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '1'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '30'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '9'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'crosses18yard',
                      value: '4'
                    },
                    {
                      type: 'totalOffside',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '5'
                    },
                    {
                      type: 'putThrough',
                      value: '1'
                    },
                    {
                      type: 'attGoalLowLeft',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '3'
                    },
                    {
                      type: 'lostCorners',
                      value: '1'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '2'
                    },
                    {
                      type: 'wonCorners',
                      value: '1'
                    },
                    {
                      type: 'totalCross',
                      value: '5'
                    },
                    {
                      type: 'leftsidePass',
                      value: '28'
                    },
                    {
                      type: 'interception',
                      value: '4'
                    },
                    {
                      type: 'fwdPass',
                      value: '19'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '2'
                    },
                    {
                      type: 'duelLost',
                      value: '4'
                    },
                    {
                      type: 'accurateThrows',
                      value: '6'
                    },
                    {
                      type: 'attIboxGoal',
                      value: '1'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '17'
                    },
                    {
                      type: 'wonTackle',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '14'
                    },
                    {
                      type: 'outfielderBlock',
                      value: '1'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'ontargetScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '81'
                    },
                    {
                      type: 'attCorner',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '7'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '21'
                    },
                    {
                      type: 'attRfTotal',
                      value: '1'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '1'
                    },
                    {
                      type: 'interceptionsInBox',
                      value: '1'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '2'
                    },
                    {
                      type: 'dispossessed',
                      value: '1'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'totalSubOff',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '6'
                    },
                    {
                      type: 'openPlayPass',
                      value: '58'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '33'
                    },
                    {
                      type: 'attRfGoal',
                      value: '1'
                    },
                    {
                      type: 'accurateCross',
                      value: '1'
                    },
                    {
                      type: 'accurateCrossNocorner',
                      value: '1'
                    },
                    {
                      type: 'turnover',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '9'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '4'
                    },
                    {
                      type: 'minsPlayed',
                      value: '82'
                    },
                    {
                      type: 'passesLeft',
                      value: '1'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '50'
                    },
                    {
                      type: 'headPass',
                      value: '2'
                    },
                    {
                      type: 'totalFlickOn',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'goals',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '30'
                    },
                    {
                      type: 'totalThrows',
                      value: '6'
                    },
                    {
                      type: 'accuratePass',
                      value: '50'
                    },
                    {
                      type: 'totalLaunches',
                      value: '1'
                    },
                    {
                      type: 'attBxCentre',
                      value: '1'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '6'
                    },
                    {
                      type: 'totalClearance',
                      value: '1'
                    },
                    {
                      type: 'fouls',
                      value: '2'
                    },
                    {
                      type: 'totalCrossNocorner',
                      value: '5'
                    },
                    {
                      type: 'interceptionWon',
                      value: '4'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '5'
                    },
                    {
                      type: 'blockedPass',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '14'
                    },
                    {
                      type: 'effectiveHeadClearance',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '1'
                    },
                    {
                      type: 'timesTackled',
                      value: '1'
                    },
                    {
                      type: 'formationPlace',
                      value: '2'
                    }
                  ]
                },
                {
                  playerId: 'bhsdzppop8jwjsxwftizot1t6',
                  firstName: 'Jamal',
                  lastName: 'Musiala',
                  shortFirstName: 'Jamal',
                  shortLastName: 'Musiala',
                  matchName: 'J. Musiala',
                  shirtNumber: 42,
                  position: 'Midfielder',
                  positionSide: 'Left',
                  formationPlace: '11',
                  stat: [
                    {
                      type: 'ballRecovery',
                      value: '4'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '5'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '2'
                    },
                    {
                      type: 'putThrough',
                      value: '1'
                    },
                    {
                      type: 'attLfGoal',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '7'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '2'
                    },
                    {
                      type: 'attIboxMiss',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '10'
                    },
                    {
                      type: 'attObxCentre',
                      value: '2'
                    },
                    {
                      type: 'attOpenplay',
                      value: '5'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '2'
                    },
                    {
                      type: 'attOboxTarget',
                      value: '2'
                    },
                    {
                      type: 'passesRight',
                      value: '3'
                    },
                    {
                      type: 'possLostAll',
                      value: '16'
                    },
                    {
                      type: 'successfulPutThrough',
                      value: '1'
                    },
                    {
                      type: 'attLfTotal',
                      value: '2'
                    },
                    {
                      type: 'attGoalLowCentre',
                      value: '1'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '5'
                    },
                    {
                      type: 'duelLost',
                      value: '7'
                    },
                    {
                      type: 'fwdPass',
                      value: '11'
                    },
                    {
                      type: 'attIboxGoal',
                      value: '2'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '3'
                    },
                    {
                      type: 'aerialLost',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '6'
                    },
                    {
                      type: 'accurateFlickOn',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'hitWoodwork',
                      value: '1'
                    },
                    {
                      type: 'offtargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '6'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '21'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '34'
                    },
                    {
                      type: 'wasFouled',
                      value: '2'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '1'
                    },
                    {
                      type: 'goalsOpenplay',
                      value: '2'
                    },
                    {
                      type: 'totalTackle',
                      value: '2'
                    },
                    {
                      type: 'attGoalLowRight',
                      value: '1'
                    },
                    {
                      type: 'totalFlickOn',
                      value: '3'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'totalContest',
                      value: '6'
                    },
                    {
                      type: 'turnover',
                      value: '4'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '2'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '27'
                    },
                    {
                      type: 'passesLeft',
                      value: '6'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'possWonAtt3rd',
                      value: '1'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '16'
                    },
                    {
                      type: 'blockedPass',
                      value: '1'
                    },
                    {
                      type: 'attSvLowCentre',
                      value: '1'
                    },
                    {
                      type: 'attCmissLeft',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '28'
                    },
                    {
                      type: 'goals',
                      value: '2'
                    },
                    {
                      type: 'accuratePass',
                      value: '27'
                    },
                    {
                      type: 'attemptsObox',
                      value: '2'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '8'
                    },
                    {
                      type: 'attBxCentre',
                      value: '1'
                    },
                    {
                      type: 'shotOffTarget',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '21'
                    },
                    {
                      type: 'attRfTarget',
                      value: '2'
                    },
                    {
                      type: 'attRfTotal',
                      value: '3'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '4'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'wonContest',
                      value: '5'
                    },
                    {
                      type: 'ontargetScoringAtt',
                      value: '4'
                    },
                    {
                      type: 'touches',
                      value: '60'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'attSvLowRight',
                      value: '1'
                    },
                    {
                      type: 'dispossessed',
                      value: '3'
                    },
                    {
                      type: 'bigChanceScored',
                      value: '2'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '16'
                    },
                    {
                      type: 'ontargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'openPlayPass',
                      value: '34'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '6'
                    },
                    {
                      type: 'attRfGoal',
                      value: '1'
                    },
                    {
                      type: 'attMissLeft',
                      value: '1'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '3'
                    },
                    {
                      type: 'duelWon',
                      value: '9'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '4'
                    },
                    {
                      type: 'formationPlace',
                      value: '11'
                    }
                  ]
                },
                {
                  playerId: '8cho2d1nz18i5o0zt6aysd68l',
                  firstName: 'Marcel',
                  lastName: 'Sabitzer',
                  shortFirstName: 'Marcel',
                  shortLastName: 'Sabitzer',
                  matchName: 'M. Sabitzer',
                  shirtNumber: 18,
                  position: 'Midfielder',
                  positionSide: 'Left/Centre',
                  formationPlace: '8',
                  stat: [
                    {
                      type: 'accurateBackZonePass',
                      value: '9'
                    },
                    {
                      type: 'attFastbreak',
                      value: '1'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '6'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '29'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '6'
                    },
                    {
                      type: 'totalTackle',
                      value: '6'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '4'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '3'
                    },
                    {
                      type: 'attOpenplay',
                      value: '1'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '4'
                    },
                    {
                      type: 'possLostAll',
                      value: '2'
                    },
                    {
                      type: 'wonTackle',
                      value: '2'
                    },
                    {
                      type: 'attLfTotal',
                      value: '1'
                    },
                    {
                      type: 'interception',
                      value: '1'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '2'
                    },
                    {
                      type: 'fwdPass',
                      value: '8'
                    },
                    {
                      type: 'ballRecovery',
                      value: '7'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '7'
                    },
                    {
                      type: 'blockedScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '1'
                    },
                    {
                      type: 'wonCorners',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '10'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'shotFastbreak',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '5'
                    },
                    {
                      type: 'attBxLeft',
                      value: '1'
                    },
                    {
                      type: 'totalSubOff',
                      value: '1'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '9'
                    },
                    {
                      type: 'openPlayPass',
                      value: '28'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '6'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '3'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '18'
                    },
                    {
                      type: 'touches',
                      value: '39'
                    },
                    {
                      type: 'attIboxBlocked',
                      value: '1'
                    },
                    {
                      type: 'interceptionWon',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '2'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '20'
                    },
                    {
                      type: 'accuratePass',
                      value: '27'
                    },
                    {
                      type: 'totalClearance',
                      value: '1'
                    },
                    {
                      type: 'totalFastbreak',
                      value: '1'
                    },
                    {
                      type: 'headPass',
                      value: '2'
                    },
                    {
                      type: 'totalFlickOn',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '3'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '26'
                    },
                    {
                      type: 'passesLeft',
                      value: '6'
                    },
                    {
                      type: 'minsPlayed',
                      value: '57'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '8'
                    }
                  ]
                },
                {
                  playerId: '97nv3y9z2ajz6b4ynoo0jn3kl',
                  firstName: 'Joshua Walter',
                  lastName: 'Kimmich',
                  shortFirstName: 'Joshua',
                  shortLastName: 'Kimmich',
                  matchName: 'J. Kimmich',
                  shirtNumber: 6,
                  position: 'Midfielder',
                  positionSide: 'Centre/Right',
                  formationPlace: '4',
                  stat: [
                    {
                      type: 'interception',
                      value: '2'
                    },
                    {
                      type: 'attAssistSetplay',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '35'
                    },
                    {
                      type: 'duelLost',
                      value: '3'
                    },
                    {
                      type: 'accurateCornersIntobox',
                      value: '2'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '3'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '1'
                    },
                    {
                      type: 'attObxCentre',
                      value: '2'
                    },
                    {
                      type: 'attOpenplay',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '11'
                    },
                    {
                      type: 'attOboxTarget',
                      value: '1'
                    },
                    {
                      type: 'wonTackle',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '15'
                    },
                    {
                      type: 'crosses18yard',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '25'
                    },
                    {
                      type: 'attOboxGoal',
                      value: '1'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '3'
                    },
                    {
                      type: 'ballRecovery',
                      value: '5'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '2'
                    },
                    {
                      type: 'wonCorners',
                      value: '1'
                    },
                    {
                      type: 'totalCross',
                      value: '7'
                    },
                    {
                      type: 'accurateThroughBall',
                      value: '2'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '9'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '4'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '79'
                    },
                    {
                      type: 'totalTackle',
                      value: '2'
                    },
                    {
                      type: 'attGoalLowRight',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '12'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '22'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '27'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '11'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'backwardPass',
                      value: '10'
                    },
                    {
                      type: 'aerialLost',
                      value: '1'
                    },
                    {
                      type: 'freekickCross',
                      value: '1'
                    },
                    {
                      type: 'headClearance',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'bigChanceCreated',
                      value: '1'
                    },
                    {
                      type: 'offtargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '4'
                    },
                    {
                      type: 'secondGoalAssist',
                      value: '1'
                    },
                    {
                      type: 'attSvLowCentre',
                      value: '1'
                    },
                    {
                      type: 'goals',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '58'
                    },
                    {
                      type: 'attemptsObox',
                      value: '2'
                    },
                    {
                      type: 'accuratePass',
                      value: '68'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '16'
                    },
                    {
                      type: 'totalClearance',
                      value: '3'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'totalCrossNocorner',
                      value: '2'
                    },
                    {
                      type: 'interceptionWon',
                      value: '2'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '13'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '15'
                    },
                    {
                      type: 'effectiveHeadClearance',
                      value: '1'
                    },
                    {
                      type: 'accurateCrossNocorner',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '16'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '7'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'aerialWon',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '63'
                    },
                    {
                      type: 'passesLeft',
                      value: '4'
                    },
                    {
                      type: 'cornerTaken',
                      value: '6'
                    },
                    {
                      type: 'headPass',
                      value: '3'
                    },
                    {
                      type: 'attFreekickTotal',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'attFreekickGoal',
                      value: '1'
                    },
                    {
                      type: 'totalThroughBall',
                      value: '4'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '4'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '8'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'ontargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '15'
                    },
                    {
                      type: 'attRfGoal',
                      value: '1'
                    },
                    {
                      type: 'openPlayPass',
                      value: '73'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '28'
                    },
                    {
                      type: 'accurateCross',
                      value: '3'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'ontargetScoringAtt',
                      value: '2'
                    },
                    {
                      type: 'touches',
                      value: '97'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '44'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '12'
                    },
                    {
                      type: 'attRfTarget',
                      value: '1'
                    },
                    {
                      type: 'attRfTotal',
                      value: '2'
                    },
                    {
                      type: 'totalCornersIntobox',
                      value: '5'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '4'
                    }
                  ]
                },
                {
                  playerId: '4fq74wp7xzwm214veuxqpdz9x',
                  firstName: 'Thomas',
                  lastName: 'Müller',
                  shortFirstName: 'Thomas',
                  shortLastName: 'Müller',
                  matchName: 'T. Müller',
                  shirtNumber: 25,
                  position: 'Midfielder',
                  positionSide: 'Right',
                  formationPlace: '7',
                  stat: [
                    {
                      type: 'attIboxBlocked',
                      value: '2'
                    },
                    {
                      type: 'attCorner',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '47'
                    },
                    {
                      type: 'sixYardBlock',
                      value: '1'
                    },
                    {
                      type: 'postScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'attIboxPost',
                      value: '1'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '1'
                    },
                    {
                      type: 'attRfTotal',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '19'
                    },
                    {
                      type: 'duelWon',
                      value: '1'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'accurateLayoffs',
                      value: '1'
                    },
                    {
                      type: 'totalThroughBall',
                      value: '2'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '3'
                    },
                    {
                      type: 'goalAssist',
                      value: '2'
                    },
                    {
                      type: 'assistBlockedShot',
                      value: '1'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '8'
                    },
                    {
                      type: 'openPlayPass',
                      value: '33'
                    },
                    {
                      type: 'ontargetAttAssist',
                      value: '3'
                    },
                    {
                      type: 'totalSubOff',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '12'
                    },
                    {
                      type: 'dispossessed',
                      value: '1'
                    },
                    {
                      type: 'shotFastbreak',
                      value: '1'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '65'
                    },
                    {
                      type: 'passesLeft',
                      value: '1'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '24'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'turnover',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'totalFastbreak',
                      value: '1'
                    },
                    {
                      type: 'headPass',
                      value: '1'
                    },
                    {
                      type: 'goalAssistIntentional',
                      value: '2'
                    },
                    {
                      type: 'attBxCentre',
                      value: '3'
                    },
                    {
                      type: 'shotOffTarget',
                      value: '1'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '5'
                    },
                    {
                      type: 'accuratePass',
                      value: '24'
                    },
                    {
                      type: 'totalLaunches',
                      value: '1'
                    },
                    {
                      type: 'totalThrows',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '26'
                    },
                    {
                      type: 'blockedPass',
                      value: '2'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '13'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '4'
                    },
                    {
                      type: 'possWonAtt3rd',
                      value: '1'
                    },
                    {
                      type: 'totalCrossNocorner',
                      value: '1'
                    },
                    {
                      type: 'hitWoodwork',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '3'
                    },
                    {
                      type: 'bigChanceCreated',
                      value: '3'
                    },
                    {
                      type: 'crosses18yardplus',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '9'
                    },
                    {
                      type: 'goalAssistOpenplay',
                      value: '2'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '5'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '2'
                    },
                    {
                      type: 'totalPass',
                      value: '33'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '2'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'totalLayoffs',
                      value: '1'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '3'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '5'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '17'
                    },
                    {
                      type: 'attFastbreak',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '5'
                    },
                    {
                      type: 'accurateThroughBall',
                      value: '1'
                    },
                    {
                      type: 'blockedScoringAtt',
                      value: '2'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '1'
                    },
                    {
                      type: 'wonCorners',
                      value: '1'
                    },
                    {
                      type: 'totalCross',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '11'
                    },
                    {
                      type: 'putThrough',
                      value: '2'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '3'
                    },
                    {
                      type: 'ballRecovery',
                      value: '4'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '3'
                    },
                    {
                      type: 'fwdPass',
                      value: '8'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '7'
                    },
                    {
                      type: 'accurateThrows',
                      value: '1'
                    },
                    {
                      type: 'duelLost',
                      value: '2'
                    },
                    {
                      type: 'attPostRight',
                      value: '1'
                    },
                    {
                      type: 'successfulPutThrough',
                      value: '1'
                    },
                    {
                      type: 'attLfTotal',
                      value: '2'
                    },
                    {
                      type: 'possLostAll',
                      value: '13'
                    },
                    {
                      type: 'passesRight',
                      value: '4'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '1'
                    },
                    {
                      type: 'bigChanceMissed',
                      value: '1'
                    },
                    {
                      type: 'attOpenplay',
                      value: '2'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '1'
                    },
                    {
                      type: 'formationPlace',
                      value: '7'
                    }
                  ]
                },
                {
                  playerId: '4ysxvym6ww4f9d3hflkqsbf11',
                  firstName: 'Serge David',
                  lastName: 'Gnabry',
                  shortFirstName: 'Serge',
                  shortLastName: 'Gnabry',
                  matchName: 'S. Gnabry',
                  shirtNumber: 7,
                  position: 'Striker',
                  positionSide: 'Left/Centre',
                  formationPlace: '9',
                  stat: [
                    {
                      type: 'attLfTotal',
                      value: '1'
                    },
                    {
                      type: 'wonTackle',
                      value: '1'
                    },
                    {
                      type: 'successfulPutThrough',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '8'
                    },
                    {
                      type: 'passesRight',
                      value: '3'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '2'
                    },
                    {
                      type: 'attObxCentre',
                      value: '2'
                    },
                    {
                      type: 'attOpenplay',
                      value: '3'
                    },
                    {
                      type: 'attIboxGoal',
                      value: '1'
                    },
                    {
                      type: 'fouledFinalThird',
                      value: '1'
                    },
                    {
                      type: 'attMissRight',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '4'
                    },
                    {
                      type: 'duelLost',
                      value: '3'
                    },
                    {
                      type: 'attOboxMiss',
                      value: '1'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '6'
                    },
                    {
                      type: 'blockedScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'possWonDef3rd',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '11'
                    },
                    {
                      type: 'putThrough',
                      value: '1'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '3'
                    },
                    {
                      type: 'ballRecovery',
                      value: '4'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '3'
                    },
                    {
                      type: 'rightsidePass',
                      value: '9'
                    },
                    {
                      type: 'totalOffside',
                      value: '1'
                    },
                    {
                      type: 'assistFreeKickWon',
                      value: '1'
                    },
                    {
                      type: 'totalLayoffs',
                      value: '1'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '13'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '6'
                    },
                    {
                      type: 'attGoalLowRight',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '3'
                    },
                    {
                      type: 'totalTackle',
                      value: '1'
                    },
                    {
                      type: 'goalsOpenplay',
                      value: '1'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '2'
                    },
                    {
                      type: 'totalPass',
                      value: '30'
                    },
                    {
                      type: 'goalAssistOpenplay',
                      value: '1'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'offtargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'bigChanceCreated',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '3'
                    },
                    {
                      type: 'backwardPass',
                      value: '6'
                    },
                    {
                      type: 'blockedPass',
                      value: '1'
                    },
                    {
                      type: 'attCmissRight',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '8'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '1'
                    },
                    {
                      type: 'possWonAtt3rd',
                      value: '1'
                    },
                    {
                      type: 'shotOffTarget',
                      value: '1'
                    },
                    {
                      type: 'attBxCentre',
                      value: '1'
                    },
                    {
                      type: 'goalAssistIntentional',
                      value: '1'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '2'
                    },
                    {
                      type: 'attemptsObox',
                      value: '2'
                    },
                    {
                      type: 'totalLaunches',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '25'
                    },
                    {
                      type: 'goals',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '23'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '65'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '25'
                    },
                    {
                      type: 'passesLeft',
                      value: '1'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '2'
                    },
                    {
                      type: 'turnover',
                      value: '1'
                    },
                    {
                      type: 'attRfGoal',
                      value: '1'
                    },
                    {
                      type: 'openPlayPass',
                      value: '30'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '7'
                    },
                    {
                      type: 'totalSubOff',
                      value: '1'
                    },
                    {
                      type: 'ontargetAttAssist',
                      value: '2'
                    },
                    {
                      type: 'bigChanceScored',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '11'
                    },
                    {
                      type: 'dispossessed',
                      value: '2'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'challengeLost',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '2'
                    },
                    {
                      type: 'attOboxBlocked',
                      value: '1'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '1'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '1'
                    },
                    {
                      type: 'goalAssist',
                      value: '1'
                    },
                    {
                      type: 'attRfTotal',
                      value: '2'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '19'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '42'
                    },
                    {
                      type: 'ontargetScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '2'
                    },
                    {
                      type: 'formationPlace',
                      value: '9'
                    }
                  ]
                },
                {
                  playerId: 'cotiiu6mjkfx5xa63nhfbdf4l',
                  firstName: 'Sadio',
                  lastName: 'Mané',
                  shortFirstName: 'Sadio',
                  shortLastName: 'Mané',
                  matchName: 'S. Mané',
                  shirtNumber: 17,
                  position: 'Striker',
                  positionSide: 'Centre/Right',
                  formationPlace: '10',
                  stat: [
                    {
                      type: 'totalFinalThirdPasses',
                      value: '13'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '5'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '3'
                    },
                    {
                      type: 'goalsOpenplay',
                      value: '1'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '4'
                    },
                    {
                      type: 'totalPass',
                      value: '23'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalChippedPass',
                      value: '2'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '3'
                    },
                    {
                      type: 'secondGoalAssist',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '8'
                    },
                    {
                      type: 'attHdMiss',
                      value: '1'
                    },
                    {
                      type: 'hitWoodwork',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '5'
                    },
                    {
                      type: 'passesRight',
                      value: '1'
                    },
                    {
                      type: 'effectiveClearance',
                      value: '1'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '1'
                    },
                    {
                      type: 'bigChanceMissed',
                      value: '3'
                    },
                    {
                      type: 'attOpenplay',
                      value: '4'
                    },
                    {
                      type: 'attLfTotal',
                      value: '2'
                    },
                    {
                      type: 'successfulPutThrough',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '9'
                    },
                    {
                      type: 'fwdPass',
                      value: '5'
                    },
                    {
                      type: 'duelLost',
                      value: '6'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '7'
                    },
                    {
                      type: 'attIboxGoal',
                      value: '1'
                    },
                    {
                      type: 'attIboxTarget',
                      value: '1'
                    },
                    {
                      type: 'putThrough',
                      value: '2'
                    },
                    {
                      type: 'attGoalLowLeft',
                      value: '1'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '1'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '5'
                    },
                    {
                      type: 'ballRecovery',
                      value: '5'
                    },
                    {
                      type: 'wonCorners',
                      value: '1'
                    },
                    {
                      type: 'totalCross',
                      value: '1'
                    },
                    {
                      type: 'blockedScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '2'
                    },
                    {
                      type: 'attIboxMiss',
                      value: '1'
                    },
                    {
                      type: 'totalOffside',
                      value: '1'
                    },
                    {
                      type: 'crosses18yard',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '8'
                    },
                    {
                      type: 'ontargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '9'
                    },
                    {
                      type: 'bigChanceScored',
                      value: '1'
                    },
                    {
                      type: 'attMissHighRight',
                      value: '1'
                    },
                    {
                      type: 'gameStarted',
                      value: '1'
                    },
                    {
                      type: 'accurateCross',
                      value: '1'
                    },
                    {
                      type: 'openPlayPass',
                      value: '21'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '5'
                    },
                    {
                      type: 'challengeLost',
                      value: '3'
                    },
                    {
                      type: 'attPostHigh',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '1'
                    },
                    {
                      type: 'accurateChippedPass',
                      value: '1'
                    },
                    {
                      type: 'attemptsIbox',
                      value: '5'
                    },
                    {
                      type: 'attRfTarget',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '14'
                    },
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '1'
                    },
                    {
                      type: 'attIboxPost',
                      value: '1'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '2'
                    },
                    {
                      type: 'attRfTotal',
                      value: '1'
                    },
                    {
                      type: 'ontargetScoringAtt',
                      value: '2'
                    },
                    {
                      type: 'postScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'wonContest',
                      value: '1'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'attIboxBlocked',
                      value: '1'
                    },
                    {
                      type: 'attCorner',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '38'
                    },
                    {
                      type: 'possWonAtt3rd',
                      value: '1'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'totalCrossNocorner',
                      value: '1'
                    },
                    {
                      type: 'attOneOnOne',
                      value: '1'
                    },
                    {
                      type: 'blockedPass',
                      value: '2'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '9'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '5'
                    },
                    {
                      type: 'goals',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '19'
                    },
                    {
                      type: 'attHdGoal',
                      value: '1'
                    },
                    {
                      type: 'attSvLowCentre',
                      value: '1'
                    },
                    {
                      type: 'shotOffTarget',
                      value: '2'
                    },
                    {
                      type: 'attBxCentre',
                      value: '3'
                    },
                    {
                      type: 'totalClearance',
                      value: '1'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '2'
                    },
                    {
                      type: 'accuratePass',
                      value: '18'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '1'
                    },
                    {
                      type: 'turnover',
                      value: '2'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '1'
                    },
                    {
                      type: 'attHdTotal',
                      value: '2'
                    },
                    {
                      type: 'totalContest',
                      value: '3'
                    },
                    {
                      type: 'accurateCrossNocorner',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '90'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '16'
                    },
                    {
                      type: 'passesLeft',
                      value: '2'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '2'
                    },
                    {
                      type: 'formationPlace',
                      value: '10'
                    }
                  ]
                },
                {
                  playerId: '5ga7g20wsa7oqjbh4ijoeknl6',
                  firstName: 'Ryan Jiro',
                  lastName: 'Gravenberch',
                  shortFirstName: 'Ryan',
                  shortLastName: 'Gravenberch',
                  matchName: 'R. Gravenberch',
                  shirtNumber: 38,
                  position: 'Substitute',
                  subPosition: 'Midfielder',
                  stat: [
                    {
                      type: 'finalThirdEntries',
                      value: '3'
                    },
                    {
                      type: 'accuratePass',
                      value: '29'
                    },
                    {
                      type: 'attemptsObox',
                      value: '1'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '20'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '3'
                    },
                    {
                      type: 'blockedPass',
                      value: '1'
                    },
                    {
                      type: 'possWonAtt3rd',
                      value: '1'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '29'
                    },
                    {
                      type: 'passesLeft',
                      value: '1'
                    },
                    {
                      type: 'minsPlayed',
                      value: '33'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'turnover',
                      value: '1'
                    },
                    {
                      type: 'totalContest',
                      value: '1'
                    },
                    {
                      type: 'goalsConcededObox',
                      value: '1'
                    },
                    {
                      type: 'attOboxBlocked',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '1'
                    },
                    {
                      type: 'openPlayPass',
                      value: '31'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '11'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '7'
                    },
                    {
                      type: 'touches',
                      value: '35'
                    },
                    {
                      type: 'goalsConceded',
                      value: '1'
                    },
                    {
                      type: 'wonContest',
                      value: '1'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '1'
                    },
                    {
                      type: 'attRfTotal',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '18'
                    },
                    {
                      type: 'fwdPass',
                      value: '4'
                    },
                    {
                      type: 'possLostAll',
                      value: '3'
                    },
                    {
                      type: 'successfulPutThrough',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '3'
                    },
                    {
                      type: 'attOpenplay',
                      value: '1'
                    },
                    {
                      type: 'attObxCentre',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '9'
                    },
                    {
                      type: 'leftsidePass',
                      value: '10'
                    },
                    {
                      type: 'blockedScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'lostCorners',
                      value: '1'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'ballRecovery',
                      value: '3'
                    },
                    {
                      type: 'putThrough',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '31'
                    },
                    {
                      type: 'possWonMid3rd',
                      value: '2'
                    },
                    {
                      type: 'attemptsConcededObox',
                      value: '2'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '11'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '8'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '2'
                    },
                    {
                      type: 'backwardPass',
                      value: '8'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'totalSubOn',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: '7vhnftizqlyu31st2vsmgh6tx',
                  firstName: 'Noussair',
                  lastName: 'Mazraoui',
                  shortFirstName: 'Noussair',
                  shortLastName: 'Mazraoui',
                  matchName: 'N. Mazraoui',
                  shirtNumber: 40,
                  position: 'Substitute',
                  subPosition: 'Defender',
                  stat: [
                    {
                      type: 'duelWon',
                      value: '1'
                    },
                    {
                      type: 'attMissHigh',
                      value: '1'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '3'
                    },
                    {
                      type: 'openPlayPass',
                      value: '8'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '10'
                    },
                    {
                      type: 'attRfTotal',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '5'
                    },
                    {
                      type: 'shotOffTarget',
                      value: '1'
                    },
                    {
                      type: 'attemptsObox',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '8'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '5'
                    },
                    {
                      type: 'fouls',
                      value: '2'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '8'
                    },
                    {
                      type: 'minsPlayed',
                      value: '8'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '8'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '1'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '3'
                    },
                    {
                      type: 'backwardPass',
                      value: '1'
                    },
                    {
                      type: 'totalSubOn',
                      value: '1'
                    },
                    {
                      type: 'attOboxMiss',
                      value: '1'
                    },
                    {
                      type: 'duelLost',
                      value: '2'
                    },
                    {
                      type: 'fwdPass',
                      value: '1'
                    },
                    {
                      type: 'offsideProvoked',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '3'
                    },
                    {
                      type: 'attOpenplay',
                      value: '1'
                    },
                    {
                      type: 'attObxCentre',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '2'
                    },
                    {
                      type: 'leftsidePass',
                      value: '4'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: '2lwjtphx3bkjty9sds520l1ey',
                  firstName: 'Tanguy-Austin',
                  lastName: 'Nianzou Kouassi',
                  shortFirstName: 'Tanguy',
                  shortLastName: 'Nianzou',
                  matchName: 'T. Nianzou',
                  shirtNumber: 23,
                  position: 'Substitute',
                  subPosition: 'Defender',
                  stat: [
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: '4603xrdk721lqhd1ejn62x5n9',
                  firstName: 'Leroy Aziz',
                  lastName: 'Sané',
                  shortFirstName: 'Leroy',
                  shortLastName: 'Sané',
                  matchName: 'L. Sané',
                  shirtNumber: 10,
                  position: 'Substitute',
                  subPosition: 'Attacker',
                  stat: [
                    {
                      type: 'totalFwdZonePass',
                      value: '10'
                    },
                    {
                      type: 'accuratePass',
                      value: '13'
                    },
                    {
                      type: 'attemptsObox',
                      value: '1'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '1'
                    },
                    {
                      type: 'goalAssistIntentional',
                      value: '1'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'penAreaEntries',
                      value: '2'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '4'
                    },
                    {
                      type: 'totalContest',
                      value: '1'
                    },
                    {
                      type: 'turnover',
                      value: '2'
                    },
                    {
                      type: 'successfulFiftyFifty',
                      value: '1'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '13'
                    },
                    {
                      type: 'minsPlayed',
                      value: '25'
                    },
                    {
                      type: 'goalAssist',
                      value: '1'
                    },
                    {
                      type: 'totalThroughBall',
                      value: '1'
                    },
                    {
                      type: 'attOboxBlocked',
                      value: '1'
                    },
                    {
                      type: 'duelWon',
                      value: '2'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '6'
                    },
                    {
                      type: 'ontargetAttAssist',
                      value: '1'
                    },
                    {
                      type: 'openPlayPass',
                      value: '15'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '5'
                    },
                    {
                      type: 'wonContest',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '20'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '8'
                    },
                    {
                      type: 'unsuccessfulTouch',
                      value: '2'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '1'
                    },
                    {
                      type: 'duelLost',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '3'
                    },
                    {
                      type: 'fouledFinalThird',
                      value: '1'
                    },
                    {
                      type: 'attObxCentre',
                      value: '1'
                    },
                    {
                      type: 'bigChanceMissed',
                      value: '1'
                    },
                    {
                      type: 'attOpenplay',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '1'
                    },
                    {
                      type: 'possLostAll',
                      value: '4'
                    },
                    {
                      type: 'attLfTotal',
                      value: '1'
                    },
                    {
                      type: 'rightsidePass',
                      value: '3'
                    },
                    {
                      type: 'totalScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '1'
                    },
                    {
                      type: 'leftsidePass',
                      value: '4'
                    },
                    {
                      type: 'blockedScoringAtt',
                      value: '1'
                    },
                    {
                      type: 'accurateThroughBall',
                      value: '1'
                    },
                    {
                      type: 'wonCorners',
                      value: '1'
                    },
                    {
                      type: 'attemptedTackleFoul',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '15'
                    },
                    {
                      type: 'wasFouled',
                      value: '1'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '5'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '8'
                    },
                    {
                      type: 'backwardPass',
                      value: '5'
                    },
                    {
                      type: 'bigChanceCreated',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '2'
                    },
                    {
                      type: 'totalSubOn',
                      value: '1'
                    },
                    {
                      type: 'fiftyFifty',
                      value: '2'
                    },
                    {
                      type: 'goalAssistOpenplay',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: '4skrm2y64va3y5jk70gz4ylpm',
                  firstName: 'Josip',
                  lastName: 'Stanišić',
                  shortFirstName: 'Josip',
                  shortLastName: 'Stanisic',
                  matchName: 'J. Stanišić',
                  shirtNumber: 44,
                  position: 'Substitute',
                  subPosition: 'Defender',
                  stat: [
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: 'cv1d56d42wujfuc4kt6bn53x0',
                  firstName: 'Mathys',
                  lastName: 'Tel',
                  shortFirstName: 'Mathys',
                  shortLastName: 'Tel',
                  matchName: 'M. Tel',
                  shirtNumber: 39,
                  position: 'Substitute',
                  subPosition: 'Attacker',
                  stat: [
                    {
                      type: 'accurateLayoffs',
                      value: '1'
                    },
                    {
                      type: 'ontargetAttAssist',
                      value: '2'
                    },
                    {
                      type: 'successfulFinalThirdPasses',
                      value: '5'
                    },
                    {
                      type: 'openPlayPass',
                      value: '11'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '1'
                    },
                    {
                      type: 'touches',
                      value: '12'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '8'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '10'
                    },
                    {
                      type: 'finalThirdEntries',
                      value: '2'
                    },
                    {
                      type: 'accuratePass',
                      value: '9'
                    },
                    {
                      type: 'blockedPass',
                      value: '1'
                    },
                    {
                      type: 'possLostCtrl',
                      value: '3'
                    },
                    {
                      type: 'minsPlayed',
                      value: '25'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '9'
                    },
                    {
                      type: 'totalFlickOn',
                      value: '1'
                    },
                    {
                      type: 'totalPass',
                      value: '11'
                    },
                    {
                      type: 'totalFinalThirdPasses',
                      value: '7'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '1'
                    },
                    {
                      type: 'totalLayoffs',
                      value: '1'
                    },
                    {
                      type: 'overrun',
                      value: '1'
                    },
                    {
                      type: 'backwardPass',
                      value: '6'
                    },
                    {
                      type: 'aerialLost',
                      value: '1'
                    },
                    {
                      type: 'attemptsConcededIbox',
                      value: '2'
                    },
                    {
                      type: 'totalSubOn',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '1'
                    },
                    {
                      type: 'duelLost',
                      value: '1'
                    },
                    {
                      type: 'touchesInOppBox',
                      value: '1'
                    },
                    {
                      type: 'passesRight',
                      value: '2'
                    },
                    {
                      type: 'attAssistOpenplay',
                      value: '2'
                    },
                    {
                      type: 'possLostAll',
                      value: '3'
                    },
                    {
                      type: 'rightsidePass',
                      value: '3'
                    },
                    {
                      type: 'putThrough',
                      value: '1'
                    },
                    {
                      type: 'totalAttAssist',
                      value: '2'
                    },
                    {
                      type: 'leftsidePass',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: 'br2uswvdgoj7ndkx7mnbwgyd',
                  firstName: 'Sven',
                  lastName: 'Ulreich',
                  shortFirstName: 'Sven',
                  shortLastName: 'Ulreich',
                  matchName: 'S. Ulreich',
                  shirtNumber: 26,
                  position: 'Substitute',
                  subPosition: 'Goalkeeper',
                  stat: [
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: '56bidwsegakrtx3z1qbbpnc6i',
                  firstName: 'Joshua Orobosa',
                  lastName: 'Zirkzee',
                  shortFirstName: 'Joshua',
                  shortLastName: 'Zirkzee',
                  matchName: 'J. Zirkzee',
                  shirtNumber: 32,
                  position: 'Substitute',
                  subPosition: 'Attacker',
                  stat: [
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                },
                {
                  playerId: '10zt8rbgbmyqxr1m13wm5gfs9',
                  firstName: 'Matthijs',
                  lastName: 'de Ligt',
                  shortFirstName: 'Matthijs',
                  shortLastName: 'de Ligt',
                  matchName: 'M. de Ligt',
                  shirtNumber: 4,
                  position: 'Substitute',
                  subPosition: 'Defender',
                  stat: [
                    {
                      type: 'longPassOwnToOppSuccess',
                      value: '1'
                    },
                    {
                      type: 'accurateFwdZonePass',
                      value: '2'
                    },
                    {
                      type: 'touches',
                      value: '9'
                    },
                    {
                      type: 'openPlayPass',
                      value: '8'
                    },
                    {
                      type: 'totalBackZonePass',
                      value: '6'
                    },
                    {
                      type: 'minsPlayed',
                      value: '8'
                    },
                    {
                      type: 'successfulOpenPlayPass',
                      value: '8'
                    },
                    {
                      type: 'longPassOwnToOpp',
                      value: '1'
                    },
                    {
                      type: 'accurateLongBalls',
                      value: '1'
                    },
                    {
                      type: 'interceptionWon',
                      value: '1'
                    },
                    {
                      type: 'fouls',
                      value: '1'
                    },
                    {
                      type: 'accuratePass',
                      value: '8'
                    },
                    {
                      type: 'totalFwdZonePass',
                      value: '2'
                    },
                    {
                      type: 'totalSubOn',
                      value: '1'
                    },
                    {
                      type: 'totalLongBalls',
                      value: '1'
                    },
                    {
                      type: 'accurateBackZonePass',
                      value: '6'
                    },
                    {
                      type: 'totalPass',
                      value: '8'
                    },
                    {
                      type: 'leftsidePass',
                      value: '4'
                    },
                    {
                      type: 'rightsidePass',
                      value: '2'
                    },
                    {
                      type: 'passesRight',
                      value: '1'
                    },
                    {
                      type: 'fwdPass',
                      value: '2'
                    },
                    {
                      type: 'duelLost',
                      value: '1'
                    },
                    {
                      type: 'interception',
                      value: '1'
                    },
                    {
                      type: 'winningGoal',
                      value: '0'
                    },
                    {
                      type: 'timesTackled',
                      value: '0'
                    },
                    {
                      type: 'formationPlace',
                      value: '0'
                    }
                  ]
                }
              ],
              teamOfficial: {
                id: 'f2rowpxtzxo95i30vevs5pt5h',
                firstName: 'Julian',
                lastName: 'Nagelsmann',
                type: 'manager'
              },
              stat: [
                {
                  fh: '6',
                  sh: '4',
                  type: 'wonTackle',
                  value: '10'
                },
                {
                  fh: '7',
                  sh: '2',
                  type: 'attLfTotal',
                  value: '9'
                },
                {
                  fh: '5',
                  sh: '2',
                  type: 'successfulPutThrough',
                  value: '7'
                },
                {
                  fh: '66',
                  sh: '56',
                  type: 'possLostAll',
                  value: '122'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attPostRight',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attGoalLowCentre',
                  value: '1'
                },
                {
                  fh: '3',
                  sh: '5',
                  type: 'keeperThrows',
                  value: '8'
                },
                {
                  fh: '7',
                  sh: '7',
                  type: 'effectiveClearance',
                  value: '14'
                },
                {
                  fh: '9',
                  sh: '2',
                  type: 'attAssistOpenplay',
                  value: '11'
                },
                {
                  fh: '5',
                  sh: '4',
                  type: 'attObxCentre',
                  value: '9'
                },
                {
                  fh: '13',
                  sh: '6',
                  type: 'attOpenplay',
                  value: '19'
                },
                {
                  fh: '3',
                  sh: '2',
                  type: 'bigChanceMissed',
                  value: '5'
                },
                {
                  fh: '30',
                  sh: '42',
                  type: 'passesRight',
                  value: '72'
                },
                {
                  fh: '2',
                  sh: '1',
                  type: 'attOboxTarget',
                  value: '3'
                },
                {
                  fh: '1',
                  sh: '3',
                  type: 'accurateGoalKicks',
                  value: '4'
                },
                {
                  type: 'firstHalfGoals',
                  value: '5'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'accurateCornersIntobox',
                  value: '2'
                },
                {
                  fh: '4',
                  sh: '1',
                  type: 'attIboxGoal',
                  value: '5'
                },
                {
                  fh: '1',
                  sh: '1',
                  type: 'fouledFinalThird',
                  value: '2'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attMissRight',
                  value: '1'
                },
                {
                  fh: '8',
                  sh: '3',
                  type: 'interception',
                  value: '11'
                },
                {
                  fh: '95',
                  sh: '83',
                  type: 'fwdPass',
                  value: '178'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attAssistSetplay',
                  value: '1'
                },
                {
                  fh: '22',
                  sh: '21',
                  type: 'duelLost',
                  value: '43'
                },
                {
                  fh: '1',
                  sh: '1',
                  type: 'attOboxMiss',
                  value: '2'
                },
                {
                  fh: '6',
                  sh: '5',
                  type: 'accurateThrows',
                  value: '11'
                },
                {
                  fh: '25',
                  sh: '8',
                  type: 'touchesInOppBox',
                  value: '33'
                },
                {
                  fh: '0',
                  sh: '2',
                  type: 'effectiveBlockedCross',
                  value: '2'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attLfGoal',
                  value: '1'
                },
                {
                  fh: '3',
                  sh: '3',
                  type: 'wonCorners',
                  value: '6'
                },
                {
                  fh: '7',
                  sh: '7',
                  type: 'totalCross',
                  value: '14'
                },
                {
                  fh: '15',
                  sh: '7',
                  type: 'possWonDef3rd',
                  value: '22'
                },
                {
                  fh: '5',
                  sh: '2',
                  type: 'blockedScoringAtt',
                  value: '7'
                },
                {
                  fh: '2',
                  sh: '2',
                  type: 'accurateThroughBall',
                  value: '4'
                },
                {
                  fh: '69',
                  sh: '99',
                  type: 'leftsidePass',
                  value: '168'
                },
                {
                  fh: '7',
                  sh: '4',
                  type: 'putThrough',
                  value: '11'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'attGoalLowLeft',
                  value: '2'
                },
                {
                  fh: '13',
                  sh: '4',
                  type: 'totalAttAssist',
                  value: '17'
                },
                {
                  fh: '40',
                  sh: '31',
                  type: 'ballRecovery',
                  value: '71'
                },
                {
                  fh: '17',
                  sh: '6',
                  type: 'totalScoringAtt',
                  value: '23'
                },
                {
                  fh: '1',
                  sh: '4',
                  type: 'lostCorners',
                  value: '5'
                },
                {
                  fh: '0',
                  sh: '5',
                  type: 'subsMade',
                  value: '5'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attIboxTarget',
                  value: '1'
                },
                {
                  fh: '60.4',
                  sh: '65.7',
                  type: 'possessionPercentage',
                  value: '63.2'
                },
                {
                  fh: '78',
                  sh: '102',
                  type: 'rightsidePass',
                  value: '180'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attOboxGoal',
                  value: '1'
                },
                {
                  fh: '3',
                  sh: '3',
                  type: 'crosses18yard',
                  value: '6'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'attIboxMiss',
                  value: '2'
                },
                {
                  fh: '2',
                  sh: '1',
                  type: 'totalOffside',
                  value: '3'
                },
                {
                  fh: '27',
                  sh: '17',
                  type: 'totalLongBalls',
                  value: '44'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'attemptsConcededObox',
                  value: '3'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'lastManTackle',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'totalLayoffs',
                  value: '3'
                },
                {
                  fh: '2',
                  sh: '1',
                  type: 'midfielderGoals',
                  value: '3'
                },
                {
                  fh: '0',
                  sh: '2',
                  type: 'overrun',
                  value: '2'
                },
                {
                  fh: '0',
                  sh: '2',
                  type: 'blockedCross',
                  value: '2'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'attFastbreak',
                  value: '2'
                },
                {
                  fh: '61',
                  sh: '87',
                  type: 'totalFinalThirdPasses',
                  value: '148'
                },
                {
                  fh: '144',
                  sh: '149',
                  type: 'accurateBackZonePass',
                  value: '293'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'saves',
                  value: '1'
                },
                {
                  fh: '2',
                  sh: '1',
                  type: 'attGoalLowRight',
                  value: '3'
                },
                {
                  fh: '24',
                  sh: '11',
                  type: 'totalChippedPass',
                  value: '35'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'forwardGoals',
                  value: '2'
                },
                {
                  fh: '19',
                  sh: '16',
                  type: 'possWonMid3rd',
                  value: '35'
                },
                {
                  fh: '5',
                  sh: '4',
                  type: 'attemptedTackleFoul',
                  value: '9'
                },
                {
                  fh: '288',
                  sh: '337',
                  type: 'totalPass',
                  value: '625'
                },
                {
                  fh: '14',
                  sh: '6',
                  type: 'totalTackle',
                  value: '20'
                },
                {
                  fh: '3',
                  sh: '1',
                  type: 'goalsOpenplay',
                  value: '4'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'errorLeadToGoal',
                  value: '1'
                },
                {
                  fh: '16',
                  sh: '15',
                  type: 'fiftyFifty',
                  value: '31'
                },
                {
                  fh: '3',
                  sh: '1',
                  type: 'goalAssistOpenplay',
                  value: '4'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'accurateLaunches',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '4',
                  type: 'headClearance',
                  value: '5'
                },
                {
                  fh: '5',
                  sh: '2',
                  type: 'bigChanceCreated',
                  value: '7'
                },
                {
                  fh: '3',
                  sh: '2',
                  type: 'attemptsConcededIbox',
                  value: '5'
                },
                {
                  fh: '3',
                  sh: '0',
                  type: 'offtargetAttAssist',
                  value: '3'
                },
                {
                  fh: '3',
                  sh: '0',
                  type: 'hitWoodwork',
                  value: '3'
                },
                {
                  fh: '46',
                  sh: '53',
                  type: 'backwardPass',
                  value: '99'
                },
                {
                  fh: '1',
                  sh: '1',
                  type: 'crosses18yardplus',
                  value: '2'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attHdMiss',
                  value: '1'
                },
                {
                  fh: '3',
                  sh: '3',
                  type: 'aerialLost',
                  value: '6'
                },
                {
                  fh: '1',
                  sh: '1',
                  type: 'accurateFlickOn',
                  value: '2'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'freekickCross',
                  value: '1'
                },
                {
                  fh: '16',
                  sh: '16',
                  type: 'penAreaEntries',
                  value: '32'
                },
                {
                  fh: '7',
                  sh: '4',
                  type: 'blockedPass',
                  value: '11'
                },
                {
                  fh: '66',
                  sh: '56',
                  type: 'possLostCtrl',
                  value: '122'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attCmissRight',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '4',
                  type: 'effectiveHeadClearance',
                  value: '5'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attOneOnOne',
                  value: '1'
                },
                {
                  fh: '4',
                  sh: '5',
                  type: 'totalCrossNocorner',
                  value: '9'
                },
                {
                  fh: '2',
                  sh: '3',
                  type: 'possWonAtt3rd',
                  value: '5'
                },
                {
                  fh: '8',
                  sh: '3',
                  type: 'interceptionWon',
                  value: '11'
                },
                {
                  fh: '6',
                  sh: '2',
                  type: 'totalLaunches',
                  value: '8'
                },
                {
                  fh: '5',
                  sh: '4',
                  type: 'attemptsObox',
                  value: '9'
                },
                {
                  fh: '243',
                  sh: '305',
                  type: 'accuratePass',
                  value: '548'
                },
                {
                  fh: '5',
                  sh: '1',
                  type: 'shotOffTarget',
                  value: '6'
                },
                {
                  fh: '8',
                  sh: '1',
                  type: 'attBxCentre',
                  value: '9'
                },
                {
                  fh: '3',
                  sh: '1',
                  type: 'goalAssistIntentional',
                  value: '4'
                },
                {
                  fh: '28',
                  sh: '32',
                  type: 'finalThirdEntries',
                  value: '60'
                },
                {
                  fh: '7',
                  sh: '7',
                  type: 'totalClearance',
                  value: '14'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attCmissLeft',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'attSvLowCentre',
                  value: '3'
                },
                {
                  fh: '3',
                  sh: '5',
                  type: 'accurateKeeperThrows',
                  value: '8'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'defenderGoals',
                  value: '1'
                },
                {
                  fh: '5',
                  sh: '1',
                  type: 'goals',
                  value: '6'
                },
                {
                  fh: '141',
                  sh: '192',
                  type: 'totalFwdZonePass',
                  value: '333'
                },
                {
                  fh: '6',
                  sh: '5',
                  type: 'totalThrows',
                  value: '11'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attHdGoal',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attFreekickTotal',
                  value: '1'
                },
                {
                  fh: '3',
                  sh: '3',
                  type: 'totalFlickOn',
                  value: '6'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'savedObox',
                  value: '1'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'goalsConcededObox',
                  value: '1'
                },
                {
                  fh: '3',
                  sh: '3',
                  type: 'cornerTaken',
                  value: '6'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'totalFastbreak',
                  value: '2'
                },
                {
                  fh: '7',
                  sh: '10',
                  type: 'successfulFiftyFifty',
                  value: '17'
                },
                {
                  fh: '3',
                  sh: '0',
                  type: 'aerialWon',
                  value: '3'
                },
                {
                  fh: '235',
                  sh: '295',
                  type: 'successfulOpenPlayPass',
                  value: '530'
                },
                {
                  fh: '17',
                  sh: '21',
                  type: 'passesLeft',
                  value: '38'
                },
                {
                  fh: '7',
                  sh: '9',
                  type: 'totalContest',
                  value: '16'
                },
                {
                  fh: '0',
                  sh: '3',
                  type: 'accurateCrossNocorner',
                  value: '3'
                },
                {
                  fh: '42',
                  sh: '40',
                  type: 'longPassOwnToOpp',
                  value: '82'
                },
                {
                  fh: '13',
                  sh: '12',
                  type: 'accurateLongBalls',
                  value: '25'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'attHdTotal',
                  value: '2'
                },
                {
                  fh: '4',
                  sh: '0',
                  type: 'attRfGoal',
                  value: '4'
                },
                {
                  fh: '279',
                  sh: '327',
                  type: 'openPlayPass',
                  value: '606'
                },
                {
                  fh: '154',
                  sh: '152',
                  type: 'totalBackZonePass',
                  value: '306'
                },
                {
                  fh: '2',
                  sh: '3',
                  type: 'accurateCross',
                  value: '5'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'attMissHigh',
                  value: '1'
                },
                {
                  fh: '5',
                  sh: '4',
                  type: 'dispossessed',
                  value: '9'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attSvLowRight',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'accurateKeeperSweeper',
                  value: '1'
                },
                {
                  fh: '7',
                  sh: '3',
                  type: 'fkFoulWon',
                  value: '10'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'shotFastbreak',
                  value: '2'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attMissHighRight',
                  value: '1'
                },
                {
                  fh: '10',
                  sh: '3',
                  type: 'ontargetAttAssist',
                  value: '13'
                },
                {
                  fh: '3',
                  sh: '1',
                  type: 'bigChanceScored',
                  value: '4'
                },
                {
                  fh: '40',
                  sh: '65',
                  type: 'successfulFinalThirdPasses',
                  value: '105'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attBxLeft',
                  value: '1'
                },
                {
                  fh: '3',
                  sh: '4',
                  type: 'totalThroughBall',
                  value: '7'
                },
                {
                  fh: '12',
                  sh: '2',
                  type: 'attemptsIbox',
                  value: '14'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attMissLeft',
                  value: '1'
                },
                {
                  fh: '6',
                  sh: '4',
                  type: 'challengeLost',
                  value: '10'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attPostHigh',
                  value: '1'
                },
                {
                  fh: '28',
                  sh: '14',
                  type: 'duelWon',
                  value: '42'
                },
                {
                  fh: '0',
                  sh: '2',
                  type: 'accurateLayoffs',
                  value: '2'
                },
                {
                  fh: '14',
                  sh: '4',
                  type: 'accurateChippedPass',
                  value: '18'
                },
                {
                  fh: '1',
                  sh: '2',
                  type: 'attOboxBlocked',
                  value: '3'
                },
                {
                  fh: '3',
                  sh: '1',
                  type: 'goalAssist',
                  value: '4'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'divingSave',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'attFreekickGoal',
                  value: '1'
                },
                {
                  fh: '8',
                  sh: '4',
                  type: 'attRfTotal',
                  value: '12'
                },
                {
                  fh: '5',
                  sh: '6',
                  type: 'fkFoulLost',
                  value: '11'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'attIboxPost',
                  value: '2'
                },
                {
                  fh: '6',
                  sh: '9',
                  type: 'unsuccessfulTouch',
                  value: '15'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'interceptionsInBox',
                  value: '1'
                },
                {
                  fh: '3',
                  sh: '2',
                  type: 'totalCornersIntobox',
                  value: '5'
                },
                {
                  fh: '101',
                  sh: '159',
                  type: 'accurateFwdZonePass',
                  value: '260'
                },
                {
                  fh: '26',
                  sh: '35',
                  type: 'longPassOwnToOppSuccess',
                  value: '61'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'totalKeeperSweeper',
                  value: '1'
                },
                {
                  fh: '2',
                  sh: '2',
                  type: 'attRfTarget',
                  value: '4'
                },
                {
                  fh: '1',
                  sh: '3',
                  type: 'goalKicks',
                  value: '4'
                },
                {
                  fh: '397',
                  sh: '419',
                  type: 'touches',
                  value: '816'
                },
                {
                  fh: '3',
                  sh: '0',
                  type: 'attCorner',
                  value: '3'
                },
                {
                  fh: '4',
                  sh: '0',
                  type: 'attIboxBlocked',
                  value: '4'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'outfielderBlock',
                  value: '1'
                },
                {
                  fh: '4',
                  sh: '5',
                  type: 'wonContest',
                  value: '9'
                },
                {
                  fh: '0',
                  sh: '1',
                  type: 'goalsConceded',
                  value: '1'
                },
                {
                  fh: '1',
                  sh: '0',
                  type: 'sixYardBlock',
                  value: '1'
                },
                {
                  fh: '2',
                  sh: '0',
                  type: 'postScoringAtt',
                  value: '2'
                },
                {
                  fh: '7',
                  sh: '3',
                  type: 'ontargetScoringAtt',
                  value: '10'
                },
                {
                  type: 'formationUsed',
                  value: '442'
                }
              ],
              kit: {
                id: '2699',
                colour1: '#FF0000',
                type: 'home'
              }
            }
          ]
        }
      },
      last10GamesStandings: [
        {
          apoawtpvac4zqlancmvw4nk4o: 1,
          c5hderjlkcoaze51e5wgvptk: 2,
          '7ad69ngbpjuyzv96drf8d9sn2': 3,
          '6k5zscdm9ufw0tguvzyjlp5hq': 4,
          go76xxm0xyfgqt1h6tcrtimm: 5,
          '1c7qokc1j5z50cjj4tcu32haa': 6,
          dt4pinj0vw0t0cvz7za6mhmzy: 7,
          '9gefq4dz9b2hl8rqrxwrlrzmp': 8,
          '3dwlvz6cl4lcavvrg0y2dycrt': 9,
          a8l3w3n0j99qjlsxj3jnmgkz1: 10,
          cu0eztmjcsbydyp53aleznorw: 11,
          ex3psl8e3ajeypwjy4xfltpx6: 12,
          a8d2gb2nag8fy0itbuxmcibh2: 13,
          '85jtaw5dcxxx1yp8te6axh3p8': 14,
          '4l9mrqzmajz5crzlz50mtbt6x': 15,
          eq1oq6y61xnzq88zu0cnw131z: 16,
          '3xcg7xikgrn2x8oa65sopb2is': 17,
          '6zwg0wxjie31da2i4wwh2h4ho': 18,
          f0w62l8zql3tukxsy8fqwp72x: 19,
          '4lauow63npvttmvxgh2koqb0r': 20
        },
        {
          apoawtpvac4zqlancmvw4nk4o: 1,
          c5hderjlkcoaze51e5wgvptk: 2,
          '7ad69ngbpjuyzv96drf8d9sn2': 3,
          '6k5zscdm9ufw0tguvzyjlp5hq': 4,
          '1c7qokc1j5z50cjj4tcu32haa': 5,
          go76xxm0xyfgqt1h6tcrtimm: 6,
          '9gefq4dz9b2hl8rqrxwrlrzmp': 7,
          '3dwlvz6cl4lcavvrg0y2dycrt': 8,
          a8l3w3n0j99qjlsxj3jnmgkz1: 9,
          dt4pinj0vw0t0cvz7za6mhmzy: 10,
          cu0eztmjcsbydyp53aleznorw: 11,
          ex3psl8e3ajeypwjy4xfltpx6: 12,
          a8d2gb2nag8fy0itbuxmcibh2: 13,
          '85jtaw5dcxxx1yp8te6axh3p8': 14,
          '4l9mrqzmajz5crzlz50mtbt6x': 15,
          '3xcg7xikgrn2x8oa65sopb2is': 16,
          '6zwg0wxjie31da2i4wwh2h4ho': 17,
          eq1oq6y61xnzq88zu0cnw131z: 18,
          dvnjvad3p09dugr79gktlrtll: 19,
          f0w62l8zql3tukxsy8fqwp72x: 20,
          '121le8unjfzug3iu9pgkqa1c7': 21,
          '4lauow63npvttmvxgh2koqb0r': 22,
          '2b3mar72yy8d6uvat1ka6tn3r': 23,
          '8kpapuorr6hf0vosnovbreqqd': 24
        },
        {
          apoawtpvac4zqlancmvw4nk4o: 1,
          c5hderjlkcoaze51e5wgvptk: 2,
          '7ad69ngbpjuyzv96drf8d9sn2': 3,
          '6k5zscdm9ufw0tguvzyjlp5hq': 4,
          '1c7qokc1j5z50cjj4tcu32haa': 5,
          '9gefq4dz9b2hl8rqrxwrlrzmp': 6,
          go76xxm0xyfgqt1h6tcrtimm: 7,
          dt4pinj0vw0t0cvz7za6mhmzy: 8,
          '3dwlvz6cl4lcavvrg0y2dycrt': 9,
          cu0eztmjcsbydyp53aleznorw: 10,
          a8l3w3n0j99qjlsxj3jnmgkz1: 11,
          ex3psl8e3ajeypwjy4xfltpx6: 12,
          a8d2gb2nag8fy0itbuxmcibh2: 13,
          '4l9mrqzmajz5crzlz50mtbt6x': 14,
          '85jtaw5dcxxx1yp8te6axh3p8': 15,
          '3xcg7xikgrn2x8oa65sopb2is': 16,
          '6zwg0wxjie31da2i4wwh2h4ho': 17,
          eq1oq6y61xnzq88zu0cnw131z: 18,
          '81lpho34qr3dad0xzalq0abja': 19,
          dvnjvad3p09dugr79gktlrtll: 20,
          f0w62l8zql3tukxsy8fqwp72x: 21,
          '121le8unjfzug3iu9pgkqa1c7': 22,
          '4lauow63npvttmvxgh2koqb0r': 23,
          '2b3mar72yy8d6uvat1ka6tn3r': 24,
          '8kpapuorr6hf0vosnovbreqqd': 25,
          '75xi6hloabmnjn2kzgj1g8h1s': 26,
          '1hcbcuu846pa3iw6qskiws1cu': 27,
          cz4a6wmzx2obyisadhgaccx7b: 28,
          bonj6qc7po4anunhydmjmi6g5: 29
        },
        {
          c5hderjlkcoaze51e5wgvptk: 1,
          apoawtpvac4zqlancmvw4nk4o: 2,
          '7ad69ngbpjuyzv96drf8d9sn2': 3,
          '6k5zscdm9ufw0tguvzyjlp5hq': 4,
          '9gefq4dz9b2hl8rqrxwrlrzmp': 5,
          '1c7qokc1j5z50cjj4tcu32haa': 6,
          go76xxm0xyfgqt1h6tcrtimm: 7,
          dt4pinj0vw0t0cvz7za6mhmzy: 8,
          '3dwlvz6cl4lcavvrg0y2dycrt': 9,
          a8l3w3n0j99qjlsxj3jnmgkz1: 10,
          cu0eztmjcsbydyp53aleznorw: 11,
          ex3psl8e3ajeypwjy4xfltpx6: 12,
          a8d2gb2nag8fy0itbuxmcibh2: 13,
          '4l9mrqzmajz5crzlz50mtbt6x': 14,
          '85jtaw5dcxxx1yp8te6axh3p8': 15,
          '3xcg7xikgrn2x8oa65sopb2is': 16,
          '6zwg0wxjie31da2i4wwh2h4ho': 17,
          eq1oq6y61xnzq88zu0cnw131z: 18,
          '81lpho34qr3dad0xzalq0abja': 19,
          dvnjvad3p09dugr79gktlrtll: 20,
          f0w62l8zql3tukxsy8fqwp72x: 21,
          '121le8unjfzug3iu9pgkqa1c7': 22,
          '4lauow63npvttmvxgh2koqb0r': 23,
          '2b3mar72yy8d6uvat1ka6tn3r': 24,
          '8kpapuorr6hf0vosnovbreqqd': 25,
          '75xi6hloabmnjn2kzgj1g8h1s': 26,
          '1hcbcuu846pa3iw6qskiws1cu': 27,
          cz4a6wmzx2obyisadhgaccx7b: 28,
          '7vyubxg6fnmwwyo2nnyhp6j5d': 29,
          bonj6qc7po4anunhydmjmi6g5: 30
        },
        {
          apoawtpvac4zqlancmvw4nk4o: 1,
          c5hderjlkcoaze51e5wgvptk: 2,
          '7ad69ngbpjuyzv96drf8d9sn2': 3,
          '6k5zscdm9ufw0tguvzyjlp5hq': 4,
          '3dwlvz6cl4lcavvrg0y2dycrt': 5,
          '9gefq4dz9b2hl8rqrxwrlrzmp': 6,
          '1c7qokc1j5z50cjj4tcu32haa': 7,
          go76xxm0xyfgqt1h6tcrtimm: 8,
          a8l3w3n0j99qjlsxj3jnmgkz1: 9,
          dt4pinj0vw0t0cvz7za6mhmzy: 10,
          cu0eztmjcsbydyp53aleznorw: 11,
          ex3psl8e3ajeypwjy4xfltpx6: 12,
          a8d2gb2nag8fy0itbuxmcibh2: 13,
          '4l9mrqzmajz5crzlz50mtbt6x': 14,
          '85jtaw5dcxxx1yp8te6axh3p8': 15,
          '3xcg7xikgrn2x8oa65sopb2is': 16,
          '6zwg0wxjie31da2i4wwh2h4ho': 17,
          eq1oq6y61xnzq88zu0cnw131z: 18,
          '81lpho34qr3dad0xzalq0abja': 19,
          '26t6lvlpql4w5wu1ih73qpy36': 20,
          '8q1ul09cygzswb7tb456bmifv': 21,
          dvnjvad3p09dugr79gktlrtll: 22,
          bdlavlqj0dshxnepyfanzwu47: 23,
          f0w62l8zql3tukxsy8fqwp72x: 24,
          '3vo5mpj7catp66nrwwqiuhuup': 25,
          '121le8unjfzug3iu9pgkqa1c7': 26,
          '4lauow63npvttmvxgh2koqb0r': 27,
          '2b3mar72yy8d6uvat1ka6tn3r': 28,
          '8kpapuorr6hf0vosnovbreqqd': 29,
          '75xi6hloabmnjn2kzgj1g8h1s': 30,
          '59as3grjvj19voay31j3yfgni': 31,
          '62ljqd4za2a6svd9wgctg8b53': 32,
          '1hcbcuu846pa3iw6qskiws1cu': 33,
          cz4a6wmzx2obyisadhgaccx7b: 34,
          '7vyubxg6fnmwwyo2nnyhp6j5d': 35,
          d4p104ikzzt5hfwdzppbmp7e0: 36,
          bonj6qc7po4anunhydmjmi6g5: 37
        },
        {
          apoawtpvac4zqlancmvw4nk4o: 1,
          c5hderjlkcoaze51e5wgvptk: 2,
          '7ad69ngbpjuyzv96drf8d9sn2': 3,
          go76xxm0xyfgqt1h6tcrtimm: 4,
          '3dwlvz6cl4lcavvrg0y2dycrt': 5,
          '6k5zscdm9ufw0tguvzyjlp5hq': 6,
          '1c7qokc1j5z50cjj4tcu32haa': 7,
          a8l3w3n0j99qjlsxj3jnmgkz1: 8,
          dt4pinj0vw0t0cvz7za6mhmzy: 9,
          '9gefq4dz9b2hl8rqrxwrlrzmp': 10,
          cu0eztmjcsbydyp53aleznorw: 11,
          ex3psl8e3ajeypwjy4xfltpx6: 12,
          a8d2gb2nag8fy0itbuxmcibh2: 13,
          '4l9mrqzmajz5crzlz50mtbt6x': 14,
          '85jtaw5dcxxx1yp8te6axh3p8': 15,
          '3xcg7xikgrn2x8oa65sopb2is': 16,
          '6zwg0wxjie31da2i4wwh2h4ho': 17,
          eq1oq6y61xnzq88zu0cnw131z: 18,
          '81lpho34qr3dad0xzalq0abja': 19,
          '26t6lvlpql4w5wu1ih73qpy36': 20,
          '8q1ul09cygzswb7tb456bmifv': 21,
          dvnjvad3p09dugr79gktlrtll: 22,
          bdlavlqj0dshxnepyfanzwu47: 23,
          '9q0arba2kbnywth8bkxlhgmdr': 24,
          f0w62l8zql3tukxsy8fqwp72x: 25,
          '3vo5mpj7catp66nrwwqiuhuup': 26,
          '121le8unjfzug3iu9pgkqa1c7': 27,
          '4lauow63npvttmvxgh2koqb0r': 28,
          '2b3mar72yy8d6uvat1ka6tn3r': 29,
          '8kpapuorr6hf0vosnovbreqqd': 30,
          '75xi6hloabmnjn2kzgj1g8h1s': 31,
          '59as3grjvj19voay31j3yfgni': 32,
          '62ljqd4za2a6svd9wgctg8b53': 33,
          '1hcbcuu846pa3iw6qskiws1cu': 34,
          cz4a6wmzx2obyisadhgaccx7b: 35,
          '7vyubxg6fnmwwyo2nnyhp6j5d': 36,
          d4p104ikzzt5hfwdzppbmp7e0: 37,
          cf8plcmeniaen0fc5emyb5j93: 38,
          bonj6qc7po4anunhydmjmi6g5: 39
        },
        {
          apoawtpvac4zqlancmvw4nk4o: 1,
          c5hderjlkcoaze51e5wgvptk: 2,
          '7ad69ngbpjuyzv96drf8d9sn2': 3,
          '6k5zscdm9ufw0tguvzyjlp5hq': 4,
          go76xxm0xyfgqt1h6tcrtimm: 5,
          a8l3w3n0j99qjlsxj3jnmgkz1: 6,
          '3dwlvz6cl4lcavvrg0y2dycrt': 7,
          '9gefq4dz9b2hl8rqrxwrlrzmp': 8,
          '1c7qokc1j5z50cjj4tcu32haa': 9,
          cu0eztmjcsbydyp53aleznorw: 10,
          dt4pinj0vw0t0cvz7za6mhmzy: 11,
          ex3psl8e3ajeypwjy4xfltpx6: 12,
          a8d2gb2nag8fy0itbuxmcibh2: 13,
          '4l9mrqzmajz5crzlz50mtbt6x': 14,
          '85jtaw5dcxxx1yp8te6axh3p8': 15,
          '3xcg7xikgrn2x8oa65sopb2is': 16,
          '6zwg0wxjie31da2i4wwh2h4ho': 17,
          eq1oq6y61xnzq88zu0cnw131z: 18,
          '81lpho34qr3dad0xzalq0abja': 19,
          '26t6lvlpql4w5wu1ih73qpy36': 20,
          '8q1ul09cygzswb7tb456bmifv': 21,
          dvnjvad3p09dugr79gktlrtll: 22,
          bdlavlqj0dshxnepyfanzwu47: 23,
          '9q0arba2kbnywth8bkxlhgmdr': 24,
          f0w62l8zql3tukxsy8fqwp72x: 25,
          agh9ifb2mw3ivjusgedj7c3fe: 26,
          '3vo5mpj7catp66nrwwqiuhuup': 27,
          '121le8unjfzug3iu9pgkqa1c7': 28,
          '4lauow63npvttmvxgh2koqb0r': 29,
          '2b3mar72yy8d6uvat1ka6tn3r': 30,
          '8kpapuorr6hf0vosnovbreqqd': 31,
          '75xi6hloabmnjn2kzgj1g8h1s': 32,
          '59as3grjvj19voay31j3yfgni': 33,
          '62ljqd4za2a6svd9wgctg8b53': 34,
          '1hcbcuu846pa3iw6qskiws1cu': 35,
          cz4a6wmzx2obyisadhgaccx7b: 36,
          '7vyubxg6fnmwwyo2nnyhp6j5d': 37,
          d4p104ikzzt5hfwdzppbmp7e0: 38,
          cf8plcmeniaen0fc5emyb5j93: 39,
          '5fd9f9bti2cdgb6r1lf8l2bc7': 40,
          bonj6qc7po4anunhydmjmi6g5: 41
        },
        {
          apoawtpvac4zqlancmvw4nk4o: 1,
          '7ad69ngbpjuyzv96drf8d9sn2': 2,
          c5hderjlkcoaze51e5wgvptk: 3,
          a8l3w3n0j99qjlsxj3jnmgkz1: 4,
          '1c7qokc1j5z50cjj4tcu32haa': 5,
          '6k5zscdm9ufw0tguvzyjlp5hq': 6,
          '3dwlvz6cl4lcavvrg0y2dycrt': 7,
          go76xxm0xyfgqt1h6tcrtimm: 8,
          '9gefq4dz9b2hl8rqrxwrlrzmp': 9,
          cu0eztmjcsbydyp53aleznorw: 10,
          dt4pinj0vw0t0cvz7za6mhmzy: 11,
          ex3psl8e3ajeypwjy4xfltpx6: 12,
          a8d2gb2nag8fy0itbuxmcibh2: 13,
          '4l9mrqzmajz5crzlz50mtbt6x': 14,
          '85jtaw5dcxxx1yp8te6axh3p8': 15,
          '3xcg7xikgrn2x8oa65sopb2is': 16,
          '6zwg0wxjie31da2i4wwh2h4ho': 17,
          eq1oq6y61xnzq88zu0cnw131z: 18,
          bdlavlqj0dshxnepyfanzwu47: 19,
          '81lpho34qr3dad0xzalq0abja': 20,
          '26t6lvlpql4w5wu1ih73qpy36': 21,
          '8q1ul09cygzswb7tb456bmifv': 22,
          dvnjvad3p09dugr79gktlrtll: 23,
          '9q0arba2kbnywth8bkxlhgmdr': 24,
          f0w62l8zql3tukxsy8fqwp72x: 25,
          agh9ifb2mw3ivjusgedj7c3fe: 26,
          '3vo5mpj7catp66nrwwqiuhuup': 27,
          '121le8unjfzug3iu9pgkqa1c7': 28,
          '4lauow63npvttmvxgh2koqb0r': 29,
          '2b3mar72yy8d6uvat1ka6tn3r': 30,
          '8kpapuorr6hf0vosnovbreqqd': 31,
          '75xi6hloabmnjn2kzgj1g8h1s': 32,
          '59as3grjvj19voay31j3yfgni': 33,
          '62ljqd4za2a6svd9wgctg8b53': 34,
          aojwbjr39s1w2mcd9l2bf2dhk: 35,
          '1hcbcuu846pa3iw6qskiws1cu': 36,
          cz4a6wmzx2obyisadhgaccx7b: 37,
          '7vyubxg6fnmwwyo2nnyhp6j5d': 38,
          d4p104ikzzt5hfwdzppbmp7e0: 39,
          cf8plcmeniaen0fc5emyb5j93: 40,
          '5fd9f9bti2cdgb6r1lf8l2bc7': 41,
          bonj6qc7po4anunhydmjmi6g5: 42
        },
        {
          apoawtpvac4zqlancmvw4nk4o: 1,
          '7ad69ngbpjuyzv96drf8d9sn2': 2,
          c5hderjlkcoaze51e5wgvptk: 3,
          a8l3w3n0j99qjlsxj3jnmgkz1: 4,
          '1c7qokc1j5z50cjj4tcu32haa': 5,
          go76xxm0xyfgqt1h6tcrtimm: 6,
          '6k5zscdm9ufw0tguvzyjlp5hq': 7,
          '3dwlvz6cl4lcavvrg0y2dycrt': 8,
          '9gefq4dz9b2hl8rqrxwrlrzmp': 9,
          cu0eztmjcsbydyp53aleznorw: 10,
          dt4pinj0vw0t0cvz7za6mhmzy: 11,
          ex3psl8e3ajeypwjy4xfltpx6: 12,
          '85jtaw5dcxxx1yp8te6axh3p8': 13,
          a8d2gb2nag8fy0itbuxmcibh2: 14,
          '4l9mrqzmajz5crzlz50mtbt6x': 15,
          '3xcg7xikgrn2x8oa65sopb2is': 16,
          eq1oq6y61xnzq88zu0cnw131z: 17,
          '6zwg0wxjie31da2i4wwh2h4ho': 18,
          bdlavlqj0dshxnepyfanzwu47: 19,
          '121le8unjfzug3iu9pgkqa1c7': 20,
          '81lpho34qr3dad0xzalq0abja': 21,
          '26t6lvlpql4w5wu1ih73qpy36': 22,
          '8q1ul09cygzswb7tb456bmifv': 23,
          dvnjvad3p09dugr79gktlrtll: 24,
          '9q0arba2kbnywth8bkxlhgmdr': 25,
          '47njg6cmlx5q3fvdsupd2n6qu': 26,
          f0w62l8zql3tukxsy8fqwp72x: 27,
          agh9ifb2mw3ivjusgedj7c3fe: 28,
          b496gs285it6bheuikox6z9mj: 29,
          '3vo5mpj7catp66nrwwqiuhuup': 30,
          bpk1d09f7zqtmcp7cis2c1b7i: 31,
          '4lauow63npvttmvxgh2koqb0r': 32,
          '2b3mar72yy8d6uvat1ka6tn3r': 33,
          '8kpapuorr6hf0vosnovbreqqd': 34,
          '75xi6hloabmnjn2kzgj1g8h1s': 35,
          '59as3grjvj19voay31j3yfgni': 36,
          '62ljqd4za2a6svd9wgctg8b53': 37,
          aojwbjr39s1w2mcd9l2bf2dhk: 38,
          '1hcbcuu846pa3iw6qskiws1cu': 39,
          cz4a6wmzx2obyisadhgaccx7b: 40,
          '7vyubxg6fnmwwyo2nnyhp6j5d': 41,
          d4p104ikzzt5hfwdzppbmp7e0: 42,
          cf8plcmeniaen0fc5emyb5j93: 43,
          '5fd9f9bti2cdgb6r1lf8l2bc7': 44,
          bonj6qc7po4anunhydmjmi6g5: 45
        },
        {
          apoawtpvac4zqlancmvw4nk4o: 1,
          '7ad69ngbpjuyzv96drf8d9sn2': 2,
          c5hderjlkcoaze51e5wgvptk: 3,
          '1c7qokc1j5z50cjj4tcu32haa': 4,
          '3dwlvz6cl4lcavvrg0y2dycrt': 5,
          a8l3w3n0j99qjlsxj3jnmgkz1: 6,
          '9gefq4dz9b2hl8rqrxwrlrzmp': 7,
          go76xxm0xyfgqt1h6tcrtimm: 8,
          '6k5zscdm9ufw0tguvzyjlp5hq': 9,
          cu0eztmjcsbydyp53aleznorw: 10,
          dt4pinj0vw0t0cvz7za6mhmzy: 11,
          ex3psl8e3ajeypwjy4xfltpx6: 12,
          '85jtaw5dcxxx1yp8te6axh3p8': 13,
          '4l9mrqzmajz5crzlz50mtbt6x': 14,
          a8d2gb2nag8fy0itbuxmcibh2: 15,
          '3xcg7xikgrn2x8oa65sopb2is': 16,
          eq1oq6y61xnzq88zu0cnw131z: 17,
          '6zwg0wxjie31da2i4wwh2h4ho': 18,
          bdlavlqj0dshxnepyfanzwu47: 19,
          '121le8unjfzug3iu9pgkqa1c7': 20,
          '81lpho34qr3dad0xzalq0abja': 21,
          '26t6lvlpql4w5wu1ih73qpy36': 22,
          '8q1ul09cygzswb7tb456bmifv': 23,
          dvnjvad3p09dugr79gktlrtll: 24,
          '9q0arba2kbnywth8bkxlhgmdr': 25,
          '47njg6cmlx5q3fvdsupd2n6qu': 26,
          f0w62l8zql3tukxsy8fqwp72x: 27,
          agh9ifb2mw3ivjusgedj7c3fe: 28,
          b496gs285it6bheuikox6z9mj: 29,
          '3vo5mpj7catp66nrwwqiuhuup': 30,
          bpk1d09f7zqtmcp7cis2c1b7i: 31,
          '4lauow63npvttmvxgh2koqb0r': 32,
          '2b3mar72yy8d6uvat1ka6tn3r': 33,
          '8kpapuorr6hf0vosnovbreqqd': 34,
          '75xi6hloabmnjn2kzgj1g8h1s': 35,
          '59as3grjvj19voay31j3yfgni': 36,
          '62ljqd4za2a6svd9wgctg8b53': 37,
          aojwbjr39s1w2mcd9l2bf2dhk: 38,
          '1y7e48j8swyafegsucvewse5a': 39,
          '1hcbcuu846pa3iw6qskiws1cu': 40,
          cz4a6wmzx2obyisadhgaccx7b: 41,
          '7vyubxg6fnmwwyo2nnyhp6j5d': 42,
          d4p104ikzzt5hfwdzppbmp7e0: 43,
          cf8plcmeniaen0fc5emyb5j93: 44,
          '5fd9f9bti2cdgb6r1lf8l2bc7': 45,
          bonj6qc7po4anunhydmjmi6g5: 46
        }
      ]
    },
    fields: [
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
        value: 'Team Compare'
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
