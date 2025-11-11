module.exports = {
  uuid: '0',
  template_name: 'of_teamcompare_season',
  name: 'Team Compare Season',
  data: {
    dynamic: {
      matchday: {
        id: '5rwmb91p8fs2zfjsf633fm3h0',
        coverageLevel: '15',
        optaBetting: '1',
        date: '2023-10-28Z',
        time: '13:30:00Z',
        localDate: '2023-10-28',
        localTime: '15:30:00',
        homeContestantId: 'ex3psl8e3ajeypwjy4xfltpx6',
        awayContestantId: 'a8l3w3n0j99qjlsxj3jnmgkz1',
        homeContestantName: 'Augsburg',
        awayContestantName: 'Wolfsburg',
        homeContestantOfficialName: 'FC Augsburg',
        awayContestantOfficialName: 'VfL Wolfsburg',
        homeContestantShortName: 'Augsburg',
        awayContestantShortName: 'Wolfsburg',
        homeContestantCode: 'FCA',
        awayContestantCode: 'WOB',
        numberOfPeriods: 2,
        periodLength: 45,
        _round: 26,
        _matchDateUtc: '2023-10-28Z'
      },
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
      },
      ranking: {
        home: [
          {
            type: 'total attempts conceded',
            value: '403'
          },
          {
            type: 'total claim',
            value: '23'
          },
          {
            type: 'total goals conceded',
            value: '46'
          },
          {
            type: 'total goals conceded ranking',
            value: '9'
          },
          {
            type: 'total touches in opposition box',
            value: '703'
          },
          {
            type: 'total goals conceded ibox',
            value: '42'
          },
          {
            type: 'total won tackle',
            value: '254'
          },
          {
            type: 'total clean sheet ranking',
            value: '16'
          },
          {
            type: 'total tackle',
            value: '414'
          },
          {
            type: 'total pass pct',
            value: '77'
          },
          {
            type: 'total accurate cross ranking',
            value: '4'
          },
          {
            type: 'total cross ranking',
            value: '7'
          },
          {
            type: 'total attempts conceded obox ranking',
            value: '4'
          },
          {
            type: 'total goals conceded ibox ranking',
            value: '8'
          },
          {
            type: 'total blocked scoring att ranking',
            value: '11'
          },
          {
            type: 'total lost corners ranking',
            value: '7'
          },
          {
            type: 'total scoring att',
            value: '366'
          },
          {
            type: 'total yellow card ranking',
            value: '7'
          },
          {
            type: 'total goals ranking',
            value: '8'
          },
          {
            type: 'total cross pct',
            value: '27'
          },
          {
            type: 'total yellow card',
            value: '58'
          },
          {
            type: 'total attempts conceded ibox ranking',
            value: '9'
          },
          {
            type: 'total ontarget scoring att ranking',
            value: '11'
          },
          {
            type: 'total pass pct ranking',
            value: '14'
          },
          {
            type: 'total scoring att ranking',
            value: '10'
          },
          {
            type: 'total clearance',
            value: '597'
          },
          {
            type: 'total ontarget scoring att',
            value: '120'
          },
          {
            type: 'total fouls ranking',
            value: '3'
          },
          {
            type: 'total duels won',
            value: '1405'
          },
          {
            type: 'total goal conversion',
            value: '17'
          },
          {
            type: 'total tackle ranking',
            value: '17'
          },
          {
            type: 'total goal conversion ranking',
            value: '8'
          },
          {
            type: 'total tackle pct ranking',
            value: '4'
          },
          {
            type: 'total games',
            value: '28'
          },
          {
            type: 'total offside',
            value: '69'
          },
          {
            type: 'total attempts conceded ranking',
            value: '9'
          },
          {
            type: 'total won corners ranking',
            value: '10'
          },
          {
            type: 'total offside ranking',
            value: '2'
          },
          {
            type: 'total clean sheet',
            value: '2'
          },
          {
            type: 'total touches in opposition box ranking',
            value: '6'
          },
          {
            type: 'total blocked scoring att',
            value: '98'
          },
          {
            type: 'total was fouled ranking',
            value: '11'
          },
          {
            type: 'total accurate cross',
            value: '143'
          },
          {
            type: 'total attempts conceded ibox',
            value: '258'
          },
          {
            type: 'total duels lost ranking',
            value: '4'
          },
          {
            type: 'total accurate pass',
            value: '8157'
          },
          {
            type: 'total claim ranking',
            value: '9'
          },
          {
            type: 'total attempts conceded obox',
            value: '147'
          },
          {
            type: 'total takeon',
            value: '405'
          },
          {
            type: 'total lost corners',
            value: '150'
          },
          {
            type: 'total scoring accuracy ranking',
            value: '11'
          },
          {
            type: 'total was fouled',
            value: '300'
          },
          {
            type: 'total clearance ranking',
            value: '8'
          },
          {
            type: 'total duels won ranking',
            value: '9'
          },
          {
            type: 'total cross',
            value: '524'
          },
          {
            type: 'total duels lost',
            value: '1478'
          },
          {
            type: 'total tackle pct',
            value: '61'
          },
          {
            type: 'total red card',
            value: '3'
          },
          {
            type: 'total cross pct ranking',
            value: '6'
          },
          {
            type: 'total scoring accuracy',
            value: '44.8'
          },
          {
            type: 'total card',
            value: '61'
          },
          {
            type: 'total card ranking',
            value: '7'
          },
          {
            type: 'total contest ranking',
            value: '11'
          },
          {
            type: 'total goals',
            value: '45'
          },
          {
            type: 'total won tackle ranking',
            value: '15'
          },
          {
            type: 'total won corners',
            value: '131'
          },
          {
            type: 'total contest',
            value: '405'
          },
          {
            type: 'total fouls',
            value: '369'
          },
          {
            type: 'total goals conceded obox ranking',
            value: '10'
          },
          {
            type: 'total accurate pass ranking',
            value: '16'
          },
          {
            type: 'total games ranking',
            value: '1'
          },
          {
            type: 'total goals conceded obox',
            value: '4'
          },
          {
            type: 'total takeon ranking',
            value: '11'
          },
          {
            type: 'total pass ranking',
            value: '16'
          },
          {
            type: 'total pass',
            value: '10626'
          },
          {
            type: 'total red card ranking',
            value: '7'
          }
        ],
        away: [
          {
            type: 'total attempts conceded ibox ranking',
            value: '12'
          },
          {
            type: 'total yellow card',
            value: '68'
          },
          {
            type: 'total ontarget scoring att ranking',
            value: '7'
          },
          {
            type: 'total cross pct',
            value: '24'
          },
          {
            type: 'total goals ranking',
            value: '13'
          },
          {
            type: 'total ontarget scoring att',
            value: '127'
          },
          {
            type: 'total clearance',
            value: '619'
          },
          {
            type: 'total fouls ranking',
            value: '6'
          },
          {
            type: 'total duels won',
            value: '1381'
          },
          {
            type: 'total pass pct ranking',
            value: '8'
          },
          {
            type: 'total scoring att ranking',
            value: '12'
          },
          {
            type: 'total clean sheet',
            value: '4'
          },
          {
            type: 'total touches in opposition box ranking',
            value: '12'
          },
          {
            type: 'total attempts conceded ranking',
            value: '12'
          },
          {
            type: 'total won corners ranking',
            value: '12'
          },
          {
            type: 'total offside ranking',
            value: '17'
          },
          {
            type: 'total goal conversion',
            value: '13'
          },
          {
            type: 'total games',
            value: '28'
          },
          {
            type: 'total tackle pct ranking',
            value: '18'
          },
          {
            type: 'total offside',
            value: '35'
          },
          {
            type: 'total tackle ranking',
            value: '11'
          },
          {
            type: 'total goal conversion ranking',
            value: '13'
          },
          {
            type: 'total duels lost ranking',
            value: '16'
          },
          {
            type: 'total accurate pass',
            value: '9936'
          },
          {
            type: 'total attempts conceded ibox',
            value: '235'
          },
          {
            type: 'total was fouled ranking',
            value: '1'
          },
          {
            type: 'total blocked scoring att',
            value: '87'
          },
          {
            type: 'total accurate cross',
            value: '120'
          },
          {
            type: 'total goals conceded',
            value: '47'
          },
          {
            type: 'total claim',
            value: '22'
          },
          {
            type: 'total attempts conceded',
            value: '363'
          },
          {
            type: 'total tackle',
            value: '445'
          },
          {
            type: 'total pass pct',
            value: '80'
          },
          {
            type: 'total won tackle',
            value: '246'
          },
          {
            type: 'total clean sheet ranking',
            value: '12'
          },
          {
            type: 'total accurate cross ranking',
            value: '15'
          },
          {
            type: 'total goals conceded ranking',
            value: '8'
          },
          {
            type: 'total touches in opposition box',
            value: '579'
          },
          {
            type: 'total goals conceded ibox',
            value: '41'
          },
          {
            type: 'total attempts conceded obox ranking',
            value: '9'
          },
          {
            type: 'total cross ranking',
            value: '9'
          },
          {
            type: 'total scoring att',
            value: '344'
          },
          {
            type: 'total yellow card ranking',
            value: '5'
          },
          {
            type: 'total goals conceded ibox ranking',
            value: '9'
          },
          {
            type: 'total lost corners ranking',
            value: '10'
          },
          {
            type: 'total blocked scoring att ranking',
            value: '14'
          },
          {
            type: 'total won corners',
            value: '123'
          },
          {
            type: 'total won tackle ranking',
            value: '17'
          },
          {
            type: 'total contest',
            value: '380'
          },
          {
            type: 'total contest ranking',
            value: '14'
          },
          {
            type: 'total goals',
            value: '34'
          },
          {
            type: 'total fouls',
            value: '356'
          },
          {
            type: 'total goals conceded obox ranking',
            value: '4'
          },
          {
            type: 'total goals conceded obox',
            value: '6'
          },
          {
            type: 'total takeon ranking',
            value: '14'
          },
          {
            type: 'total games ranking',
            value: '1'
          },
          {
            type: 'total accurate pass ranking',
            value: '9'
          },
          {
            type: 'total red card ranking',
            value: '2'
          },
          {
            type: 'total pass ranking',
            value: '9'
          },
          {
            type: 'total pass',
            value: '12389'
          },
          {
            type: 'total attempts conceded obox',
            value: '130'
          },
          {
            type: 'total claim ranking',
            value: '10'
          },
          {
            type: 'total takeon',
            value: '380'
          },
          {
            type: 'total lost corners',
            value: '146'
          },
          {
            type: 'total duels lost',
            value: '1338'
          },
          {
            type: 'total cross',
            value: '494'
          },
          {
            type: 'total was fouled',
            value: '339'
          },
          {
            type: 'total clearance ranking',
            value: '6'
          },
          {
            type: 'total scoring accuracy ranking',
            value: '8'
          },
          {
            type: 'total duels won ranking',
            value: '14'
          },
          {
            type: 'total card',
            value: '73'
          },
          {
            type: 'total scoring accuracy',
            value: '49.4'
          },
          {
            type: 'total cross pct ranking',
            value: '17'
          },
          {
            type: 'total card ranking',
            value: '5'
          },
          {
            type: 'total tackle pct',
            value: '55'
          },
          {
            type: 'total red card',
            value: '5'
          }
        ]
      },
      teamCompare: {
        home: [
          {
            name: 'Times Tackled',
            value: '406'
          },
          {
            name: 'Possession Percentage',
            value: '44'
          },
          {
            name: 'Total Red Cards',
            value: '3'
          },
          {
            name: 'Goals Conceded Outside Box',
            value: '4'
          },
          {
            name: 'Blocks',
            value: '109'
          },
          {
            name: 'Unsuccessful Short Passes',
            value: '1598'
          },
          {
            name: 'Set Pieces Goals',
            value: '1'
          },
          {
            name: 'Tackle Success',
            value: '61.35'
          },
          {
            name: 'Passing % Opp Half',
            value: '65.99'
          },
          {
            name: 'Attempts from Set Pieces',
            value: '9'
          },
          {
            name: 'Penalties Saved',
            value: '2'
          },
          {
            name: 'Throw Ins to Opposition Player',
            value: '211'
          },
          {
            name: 'Ground Duels won',
            value: '897'
          },
          {
            name: 'Corners Taken (incl short corners)',
            value: '131'
          },
          {
            name: 'Crossing Accuracy',
            value: '27.29'
          },
          {
            name: 'Passing Accuracy',
            value: '76.76'
          },
          {
            name: 'Goals from Inside Box',
            value: '42'
          },
          {
            name: 'Games Played',
            value: '28'
          },
          {
            name: 'Shots On Target ( inc goals )',
            value: '120'
          },
          {
            name: 'Total Fouls Won',
            value: '300'
          },
          {
            name: 'Unsuccessful Passes Opposition Half',
            value: '2253'
          },
          {
            name: 'Aerial Duels lost',
            value: '539'
          },
          {
            name: 'Shots On Conceded Outside Box',
            value: '38'
          },
          {
            name: 'Successful Long Passes',
            value: '695'
          },
          {
            name: 'Corners Won',
            value: '131'
          },
          {
            name: 'Ground Duels',
            value: '1836'
          },
          {
            name: 'Unsuccessful Crosses open play',
            value: '280'
          },
          {
            name: 'Unsuccessful lay-offs',
            value: '13'
          },
          {
            name: 'Throw Ins to Own Player',
            value: '381'
          },
          {
            name: 'Clearances Off the Line',
            value: '2'
          },
          {
            name: 'Total Successful Passes ( Excl Crosses & Corners ) ',
            value: '8157'
          },
          {
            name: 'Hit Woodwork',
            value: '12'
          },
          {
            name: 'Interceptions',
            value: '243'
          },
          {
            name: 'Total Shots Conceded',
            value: '403'
          },
          {
            name: 'Clean Sheets',
            value: '2'
          },
          {
            name: 'Own Goals Accrued',
            value: '1'
          },
          {
            name: 'Recoveries',
            value: '1589'
          },
          {
            name: 'Goal Kicks',
            value: '212'
          },
          {
            name: 'Points Dropped from Winning Positions',
            value: '12'
          },
          {
            name: 'Goals',
            value: '45'
          },
          {
            name: 'Own Goals Conceded',
            value: '2'
          },
          {
            name: 'Index',
            value: '742'
          },
          {
            name: 'Total Losses Of Possession',
            value: '4034'
          },
          {
            name: 'Duels lost',
            value: '1478'
          },
          {
            name: 'Shots On Conceded Inside Box',
            value: '108'
          },
          {
            name: 'Successful Crosses & Corners',
            value: '143'
          },
          {
            name: 'Left Foot Goals',
            value: '10'
          },
          {
            name: 'Duels',
            value: '2883'
          },
          {
            name: 'Successful Dribbles',
            value: '196'
          },
          {
            name: 'Foul Attempted Tackle',
            value: '284'
          },
          {
            name: 'Straight Red Cards',
            value: '2'
          },
          {
            name: 'Tackles Won',
            value: '254'
          },
          {
            name: 'Unsuccessful Dribbles',
            value: '209'
          },
          {
            name: 'Penalty Goals Conceded',
            value: '6'
          },
          {
            name: 'Successful Corners into Box',
            value: '40'
          },
          {
            name: 'Goals Conceded Inside Box',
            value: '42'
          },
          {
            name: 'PutThrough/Blocked Distribution',
            value: '515'
          },
          {
            name: 'PutThrough/Blocked Distribution Won',
            value: '251'
          },
          {
            name: 'Successful Passes Opposition Half',
            value: '3775'
          },
          {
            name: 'Shots Off Target (inc woodwork)',
            value: '148'
          },
          {
            name: 'Goals from Outside Box',
            value: '3'
          },
          {
            name: 'Penalty Goals',
            value: '5'
          },
          {
            name: 'Goal Assists',
            value: '30'
          },
          {
            name: 'Successful Lay-offs',
            value: '106'
          },
          {
            name: 'Total Fouls Conceded',
            value: '369'
          },
          {
            name: 'Successful Launches',
            value: '143'
          },
          {
            name: 'Catches',
            value: '20'
          },
          {
            name: 'Penalties Conceded',
            value: '9'
          },
          {
            name: 'Goals Conceded',
            value: '46'
          },
          {
            name: 'GK Successful Distribution',
            value: '236'
          },
          {
            name: 'Successful Short Passes',
            value: '7462'
          },
          {
            name: 'Goal Conversion',
            value: '16.79'
          },
          {
            name: 'Overruns',
            value: '40'
          },
          {
            name: 'Total Unsuccessful Passes ( Excl Crosses & Corners )',
            value: '2469'
          },
          {
            name: 'Drops',
            value: '3'
          },
          {
            name: 'Foul Won Penalty',
            value: '7'
          },
          {
            name: 'Total Passes',
            value: '10626'
          },
          {
            name: 'Red Card - 2nd Yellow',
            value: '1'
          },
          {
            name: 'Total Shots',
            value: '268'
          },
          {
            name: 'Total Clearances',
            value: '597'
          },
          {
            name: 'Yellow Cards',
            value: '58'
          },
          {
            name: 'Right Foot Goals',
            value: '29'
          },
          {
            name: 'Blocked Shots',
            value: '98'
          },
          {
            name: 'Shooting Accuracy',
            value: '44.78'
          },
          {
            name: 'Unsuccessful Crosses & Corners',
            value: '381'
          },
          {
            name: 'Headed Goals',
            value: '3'
          },
          {
            name: 'Unsuccessful Corners into Box',
            value: '77'
          },
          {
            name: 'Aerial Duels',
            value: '1047'
          },
          {
            name: 'Last Player Tackle',
            value: '3'
          },
          {
            name: 'Points Gained from Losing Positions',
            value: '23'
          },
          {
            name: 'GK Unsuccessful Distribution',
            value: '56'
          },
          {
            name: 'Successful Passes Own Half',
            value: '4525'
          },
          {
            name: 'Ground Duels lost',
            value: '939'
          },
          {
            name: 'Unsuccessful Passes Own Half',
            value: '597'
          },
          {
            name: 'Penalties Taken',
            value: '7'
          },
          {
            name: 'Offsides',
            value: '69'
          },
          {
            name: 'Successful Crosses open play',
            value: '90'
          },
          {
            name: 'Successful Open Play Passes',
            value: '7665'
          },
          {
            name: 'Aerial Duels won',
            value: '508'
          },
          {
            name: 'Unsuccessful Launches',
            value: '395'
          },
          {
            name: 'Handballs conceded',
            value: '15'
          },
          {
            name: 'Open Play Passes',
            value: '9971'
          },
          {
            name: 'Tackles Lost',
            value: '160'
          },
          {
            name: 'Unsuccessful Long Passes',
            value: '871'
          },
          {
            name: 'Key Passes (Attempt Assists)',
            value: '222'
          },
          {
            name: 'Other Goals',
            value: '2'
          },
          {
            name: 'Duels won',
            value: '1405'
          },
          {
            name: 'Home Goals',
            value: '24'
          },
          {
            name: 'Away Goals',
            value: '21'
          }
        ],
        away: [
          {
            name: 'Goals Conceded Inside Box',
            value: '41'
          },
          {
            name: 'Possession Percentage',
            value: '47'
          },
          {
            name: 'Duels lost',
            value: '1338'
          },
          {
            name: 'Offsides',
            value: '35'
          },
          {
            name: 'Total Passes',
            value: '12389'
          },
          {
            name: 'Tackles Won',
            value: '246'
          },
          {
            name: 'Straight Red Cards',
            value: '3'
          },
          {
            name: 'Open Play Passes',
            value: '11699'
          },
          {
            name: 'Yellow Cards',
            value: '68'
          },
          {
            name: 'Successful Corners into Box',
            value: '29'
          },
          {
            name: 'Total Fouls Won',
            value: '339'
          },
          {
            name: 'Attempts from Set Pieces',
            value: '13'
          },
          {
            name: 'Unsuccessful Crosses & Corners',
            value: '374'
          },
          {
            name: 'Total Fouls Conceded',
            value: '356'
          },
          {
            name: 'Goal Conversion',
            value: '13.23'
          },
          {
            name: 'Shots Off Target (inc woodwork)',
            value: '130'
          },
          {
            name: 'Ground Duels',
            value: '1903'
          },
          {
            name: 'Successful Crosses & Corners',
            value: '120'
          },
          {
            name: 'Points Dropped from Winning Positions',
            value: '23'
          },
          {
            name: 'Successful Dribbles',
            value: '182'
          },
          {
            name: 'Corners Won',
            value: '123'
          },
          {
            name: 'Crossing Accuracy',
            value: '24.29'
          },
          {
            name: 'Total Successful Passes ( Excl Crosses & Corners ) ',
            value: '9936'
          },
          {
            name: 'Clean Sheets',
            value: '4'
          },
          {
            name: 'GK Unsuccessful Distribution',
            value: '57'
          },
          {
            name: 'Unsuccessful Dribbles',
            value: '198'
          },
          {
            name: 'Games Played',
            value: '28'
          },
          {
            name: 'Foul Attempted Tackle',
            value: '261'
          },
          {
            name: 'Hit Woodwork',
            value: '10'
          },
          {
            name: 'Unsuccessful Launches',
            value: '445'
          },
          {
            name: 'Recoveries',
            value: '1508'
          },
          {
            name: 'Total Unsuccessful Passes ( Excl Crosses & Corners )',
            value: '2453'
          },
          {
            name: 'GK Successful Distribution',
            value: '297'
          },
          {
            name: 'Blocks',
            value: '84'
          },
          {
            name: 'Total Red Cards',
            value: '5'
          },
          {
            name: 'Unsuccessful lay-offs',
            value: '21'
          },
          {
            name: 'Goal Assists',
            value: '22'
          },
          {
            name: 'Penalty Goals Conceded',
            value: '2'
          },
          {
            name: 'Aerial Duels',
            value: '816'
          },
          {
            name: 'Duels won',
            value: '1381'
          },
          {
            name: 'PutThrough/Blocked Distribution Won',
            value: '263'
          },
          {
            name: 'Unsuccessful Crosses open play',
            value: '251'
          },
          {
            name: 'Throw Ins to Opposition Player',
            value: '56'
          },
          {
            name: 'Clearances Off the Line',
            value: '1'
          },
          {
            name: 'Foul Won Penalty',
            value: '3'
          },
          {
            name: 'Tackle Success',
            value: '55.28'
          },
          {
            name: 'Successful Long Passes',
            value: '690'
          },
          {
            name: 'Handballs conceded',
            value: '13'
          },
          {
            name: 'Overruns',
            value: '28'
          },
          {
            name: 'Penalties Taken',
            value: '3'
          },
          {
            name: 'Successful Launches',
            value: '132'
          },
          {
            name: 'Last Player Tackle',
            value: '2'
          },
          {
            name: 'Key Passes (Attempt Assists)',
            value: '241'
          },
          {
            name: 'Ground Duels lost',
            value: '950'
          },
          {
            name: 'Goals from Outside Box',
            value: '2'
          },
          {
            name: 'Times Tackled',
            value: '406'
          },
          {
            name: 'Duels',
            value: '2719'
          },
          {
            name: 'Successful Passes Opposition Half',
            value: '4530'
          },
          {
            name: 'Points Gained from Losing Positions',
            value: '7'
          },
          {
            name: 'Catches',
            value: '22'
          },
          {
            name: 'Headed Goals',
            value: '4'
          },
          {
            name: 'Unsuccessful Corners into Box',
            value: '86'
          },
          {
            name: 'Unsuccessful Passes Own Half',
            value: '666'
          },
          {
            name: 'Goals Conceded Outside Box',
            value: '6'
          },
          {
            name: 'Total Shots Conceded',
            value: '363'
          },
          {
            name: 'Total Shots',
            value: '257'
          },
          {
            name: 'Index',
            value: '695'
          },
          {
            name: 'PutThrough/Blocked Distribution',
            value: '542'
          },
          {
            name: 'Unsuccessful Passes Opposition Half',
            value: '2161'
          },
          {
            name: 'Successful Lay-offs',
            value: '160'
          },
          {
            name: 'Corners Taken (incl short corners)',
            value: '123'
          },
          {
            name: 'Aerial Duels won',
            value: '428'
          },
          {
            name: 'Total Clearances',
            value: '619'
          },
          {
            name: 'Blocked Shots',
            value: '87'
          },
          {
            name: 'Right Foot Goals',
            value: '17'
          },
          {
            name: 'Penalty Goals',
            value: '2'
          },
          {
            name: 'Successful Crosses open play',
            value: '79'
          },
          {
            name: 'Penalties Conceded',
            value: '2'
          },
          {
            name: 'Ground Duels won',
            value: '953'
          },
          {
            name: 'Interceptions',
            value: '234'
          },
          {
            name: 'Own Goals Conceded',
            value: '2'
          },
          {
            name: 'Goal Kicks',
            value: '217'
          },
          {
            name: 'Left Foot Goals',
            value: '13'
          },
          {
            name: 'Shots On Conceded Inside Box',
            value: '101'
          },
          {
            name: 'Shooting Accuracy',
            value: '49.42'
          },
          {
            name: 'Successful Open Play Passes',
            value: '9378'
          },
          {
            name: 'Tackles Lost',
            value: '199'
          },
          {
            name: 'Goals Conceded',
            value: '47'
          },
          {
            name: 'Shots On Conceded Outside Box',
            value: '33'
          },
          {
            name: 'Unsuccessful Long Passes',
            value: '866'
          },
          {
            name: 'Passing % Opp Half',
            value: '71.16'
          },
          {
            name: 'Red Card - 2nd Yellow',
            value: '2'
          },
          {
            name: 'Successful Passes Own Half',
            value: '5526'
          },
          {
            name: 'Goals',
            value: '34'
          },
          {
            name: 'Shots On Target ( inc goals )',
            value: '127'
          },
          {
            name: 'Successful Short Passes',
            value: '9246'
          },
          {
            name: 'Goals from Inside Box',
            value: '32'
          },
          {
            name: 'Total Losses Of Possession',
            value: '3783'
          },
          {
            name: 'Aerial Duels lost',
            value: '388'
          },
          {
            name: 'Unsuccessful Short Passes',
            value: '1587'
          },
          {
            name: 'Throw Ins to Own Player',
            value: '502'
          },
          {
            name: 'Passing Accuracy',
            value: '80.20'
          },
          {
            name: 'Home Goals',
            value: '20'
          },
          {
            name: 'Away Goals',
            value: '14'
          }
        ]
      }
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
        value: 'Team Compare Season'
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
        value: '10'
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
