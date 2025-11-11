module.exports = {
  uuid: '0',
  template_name: 'adlerlineup',
  name: 'Lineup',
  data: {
    dynamic: {
      teamSide: 'home',
      game: {
        actualTimeName: 'Ende',
        actualTimeAlias: 'K',
        stadium: 'SAP Arena',
        numberOfViewers: 13600,
        teamBilance: {
          homeWin: 8,
          visitorWin: 5
        },
        results: {
          extra_time: false,
          shooting: false,
          contumacy: false,
          score: {
            final: {
              score_home: 3,
              score_guest: 6
            },
            first_period: {
              score_home: 0,
              score_guest: 1
            },
            second_period: {
              score_home: 2,
              score_guest: 1
            },
            third_period: {
              score_home: 1,
              score_guest: 4
            }
          }
        },
        home: {
          id: 2,
          name: 'Adler Mannheim',
          shortcut: 'MAN'
        },
        away: {
          id: 1,
          name: 'ERC Ingolstadt',
          shortcut: 'ING'
        },
        side: 'home',
        referees: {
          headReferee1: {
            id: 60,
            name: 'Sirko Hunnius'
          },
          headReferee2: {
            id: 134,
            name: 'Marian Rohatsch'
          },
          lineReferee1: {
            id: 202,
            name: 'Patrick Laguzov'
          },
          lineReferee2: {
            id: 254,
            name: 'Jan Philipp Priebsch'
          }
        }
      },
      assets: {
        teamHome: {
          uuid: '9f183548-aeb9-11ed-8d34-096a2a905c42',
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
          size: 0
        },
        teamAway: {
          uuid: '9f18354d-aeb9-11ed-8d34-096a2a905c42',
          label: 'ERC Ingolstadt',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/adler/logo-ingolstadt-neu.png',
          data: {
            name: 'ERC Ingolstadt',
            short: 'ING',
            id: '1'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: 0
        },
        p_23: {
          uuid: '9f183520-aeb9-11ed-8d34-096a2a905c42',
          label: 'Sinan Akdag',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '23',
            firstname: 'Sinan',
            lastname: 'Akdag',
            position: 'DE',
            shirtNumber: '7'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_1377: {
          uuid: '9f183522-aeb9-11ed-8d34-096a2a905c42',
          label: 'Lean Bergmann',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Bergmann.png',
          data: {
            id: '1377',
            firstname: 'Lean',
            lastname: 'Bergmann',
            position: 'FO',
            shirtNumber: '19'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_516: {
          uuid: '9f183523-aeb9-11ed-8d34-096a2a905c42',
          label: 'Felix Brückmann',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Brueckmann.png',
          data: {
            id: '516',
            firstname: 'Felix',
            lastname: 'Brückmann',
            position: 'GK',
            shirtNumber: '90'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_1364: {
          uuid: '9f183527-aeb9-11ed-8d34-096a2a905c42',
          label: 'Markus Eisenschmid',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Eisenschmid.png',
          data: {
            id: '1364',
            firstname: 'Markus',
            lastname: 'Eisenschmid',
            position: 'FO',
            shirtNumber: '16'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_143: {
          uuid: '9f18352f-aeb9-11ed-8d34-096a2a905c42',
          label: 'Nicolas Krämmer',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Kraemmer.png',
          data: {
            id: '143',
            firstname: 'Nicolas',
            lastname: 'Krämmer',
            position: 'DE',
            shirtNumber: '21'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_656: {
          uuid: '9f183530-aeb9-11ed-8d34-096a2a905c42',
          label: 'Thomas Larkin',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Larkin.png',
          data: {
            id: '656',
            firstname: 'Thomas',
            lastname: 'Larkin',
            position: 'DE',
            shirtNumber: '37'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_1362: {
          uuid: '9f183531-aeb9-11ed-8d34-096a2a905c42',
          label: 'Joonas Lehtivuori',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Lehtivouri.png',
          data: {
            id: '1362',
            firstname: 'Joonas',
            lastname: 'Lehtivuori',
            position: 'DE',
            shirtNumber: '6'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_487: {
          uuid: '9f183534-aeb9-11ed-8d34-096a2a905c42',
          label: 'Matthias Plachta',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Plachta.png',
          data: {
            id: '487',
            firstname: 'Matthias',
            lastname: 'Plachta',
            position: 'FO',
            shirtNumber: '22'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_1506: {
          uuid: '9f183536-aeb9-11ed-8d34-096a2a905c42',
          label: 'Borna Rendulic',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Rendulic.png',
          data: {
            id: '1506',
            firstname: 'Borna',
            lastname: 'Rendulic',
            position: 'FO',
            shirtNumber: '33'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_25: {
          uuid: '9f183537-aeb9-11ed-8d34-096a2a905c42',
          label: 'Denis Reul',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Reul.png',
          data: {
            id: '25',
            firstname: 'Denis',
            lastname: 'Reul',
            position: 'DE',
            shirtNumber: '29'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_1670: {
          uuid: '9f183539-aeb9-11ed-8d34-096a2a905c42',
          label: 'Simon Thiel',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Thiel.png',
          data: {
            id: '1670',
            firstname: 'Simon',
            lastname: 'Thiel',
            position: 'FO',
            shirtNumber: '96'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_1557: {
          uuid: '9f18353a-aeb9-11ed-8d34-096a2a905c42',
          label: 'Arno Tiefensee',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Tiefensee.png',
          data: {
            id: '1557',
            firstname: 'Arno',
            lastname: 'Tiefensee',
            position: 'GK',
            shirtNumber: '30'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_1306: {
          uuid: '9f18353d-aeb9-11ed-8d34-096a2a905c42',
          label: 'Tim Wohlgemuth',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Wohlgemuth.png',
          data: {
            id: '1306',
            firstname: 'Tim',
            lastname: 'Wohlgemuth',
            position: 'FO',
            shirtNumber: '33'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        p_493: {
          uuid: '9f18353e-aeb9-11ed-8d34-096a2a905c42',
          label: 'David Wolf',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Wolf.png',
          data: {
            id: '493',
            firstname: 'David',
            lastname: 'Wolf',
            position: 'FO',
            shirtNumber: '89'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        }
      },
      lineupHome: {
        line1: [
          {
            playerId: 493,
            matchPlayerId: 176387,
            name: 'David',
            surname: 'Wolf',
            jersey: 89,
            position: 'FO',
            captain: false,
            startingSix: true,
            roster: '311'
          },
          {
            playerId: 1846,
            matchPlayerId: 176407,
            name: 'Tyler',
            surname: 'Gaudet',
            jersey: 58,
            position: 'FO',
            captain: false,
            startingSix: true,
            roster: '312'
          },
          {
            playerId: 487,
            matchPlayerId: 176386,
            name: 'Matthias',
            surname: 'Plachta',
            jersey: 22,
            position: 'FO',
            captain: false,
            startingSix: true,
            roster: '313'
          },
          {
            playerId: 1362,
            matchPlayerId: 176391,
            name: 'Joonas',
            surname: 'Lehtivuori',
            jersey: 6,
            position: 'DE',
            captain: false,
            startingSix: true,
            roster: '211'
          },
          {
            playerId: 25,
            matchPlayerId: 176383,
            name: 'Denis',
            surname: 'Reul',
            jersey: 29,
            position: 'DE',
            captain: true,
            startingSix: true,
            roster: '212'
          }
        ],
        line2: [
          {
            playerId: 1306,
            matchPlayerId: 176390,
            name: 'Tim',
            surname: 'Wohlgemuth',
            jersey: 33,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '321'
          },
          {
            playerId: 143,
            matchPlayerId: 176385,
            name: 'Nicolas',
            surname: 'Krämmer',
            jersey: 21,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '322'
          },
          {
            playerId: 1377,
            matchPlayerId: 176394,
            name: 'Lean',
            surname: 'Bergmann',
            jersey: 19,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '323'
          },
          {
            playerId: 23,
            matchPlayerId: 176382,
            name: 'Sinan',
            surname: 'Akdag',
            jersey: 7,
            position: 'DE',
            captain: false,
            startingSix: false,
            roster: '221'
          },
          {
            playerId: 1768,
            matchPlayerId: 176404,
            name: 'Korbinian',
            surname: 'Holzer',
            jersey: 4,
            position: 'DE',
            captain: false,
            startingSix: false,
            roster: '222'
          }
        ],
        line3: [
          {
            playerId: 1655,
            matchPlayerId: 176398,
            name: 'Taro',
            surname: 'Jentzsch',
            jersey: 11,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '331'
          },
          {
            playerId: 2172,
            matchPlayerId: 176409,
            name: 'Ryan',
            surname: 'MacInnis',
            jersey: 74,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '332'
          },
          {
            playerId: 1506,
            matchPlayerId: 176396,
            name: 'Borna',
            surname: 'Rendulic',
            jersey: 71,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '333'
          },
          {
            playerId: 656,
            matchPlayerId: 176389,
            name: 'Thomas',
            surname: 'Larkin',
            jersey: 37,
            position: 'DE',
            captain: false,
            startingSix: false,
            roster: '231'
          },
          {
            playerId: 2118,
            matchPlayerId: 176408,
            name: 'Matthew',
            surname: 'Donovan',
            jersey: 46,
            position: 'DE',
            captain: false,
            startingSix: false,
            roster: '232'
          }
        ],
        line4: [
          {
            playerId: 1364,
            matchPlayerId: 176392,
            name: 'Markus',
            surname: 'Eisenschmid',
            jersey: 16,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '341'
          },
          {
            playerId: 59,
            matchPlayerId: 176384,
            name: 'Stefan',
            surname: 'Loibl',
            jersey: 13,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '342'
          },
          {
            playerId: 1670,
            matchPlayerId: 176399,
            name: 'Simon',
            surname: 'Thiel',
            jersey: 96,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '343'
          },
          {
            playerId: 1764,
            matchPlayerId: 176402,
            name: 'Fabrizio',
            surname: 'Pilu',
            jersey: 68,
            position: 'DE',
            captain: false,
            startingSix: false,
            roster: '242'
          }
        ],
        lineGoalie: [
          {
            playerId: 1557,
            matchPlayerId: 176397,
            name: 'Arno',
            surname: 'Tiefensee',
            jersey: 30,
            position: 'GK',
            captain: false,
            startingSix: true,
            roster: '101'
          },
          {
            playerId: 2214,
            matchPlayerId: 176415,
            name: 'Evan',
            surname: 'Buitenhuis',
            jersey: 32,
            position: 'GK',
            captain: false,
            startingSix: false,
            roster: '102'
          },
          {
            playerId: 516,
            matchPlayerId: 176388,
            name: 'Felix',
            surname: 'Brückmann',
            jersey: 90,
            position: 'GK',
            captain: false,
            startingSix: false,
            roster: '103'
          }
        ]
      },
      lineupAway: {
        line1: [
          {
            playerId: 1644,
            matchPlayerId: 176433,
            name: 'Frederik',
            surname: 'Storm',
            jersey: 9,
            position: 'FO',
            captain: false,
            startingSix: true,
            roster: '311'
          },
          {
            playerId: 885,
            matchPlayerId: 176424,
            name: 'Justin',
            surname: 'Feser',
            jersey: 71,
            position: 'FO',
            captain: false,
            startingSix: true,
            roster: '312'
          },
          {
            playerId: 2190,
            matchPlayerId: 176443,
            name: 'Stefan',
            surname: 'Matteau',
            jersey: 17,
            position: 'FO',
            captain: false,
            startingSix: true,
            roster: '313'
          },
          {
            playerId: 16,
            matchPlayerId: 176416,
            name: 'Fabio',
            surname: 'Wagner',
            jersey: 5,
            position: 'DE',
            captain: true,
            startingSix: true,
            roster: '211'
          },
          {
            playerId: 52,
            matchPlayerId: 176418,
            name: 'Maurice',
            surname: 'Edwards',
            jersey: 23,
            position: 'DE',
            captain: false,
            startingSix: true,
            roster: '212'
          }
        ],
        line2: [
          {
            playerId: 1657,
            matchPlayerId: 176435,
            name: 'Enrico',
            surname: 'Henriquez Morales',
            jersey: 52,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '321'
          },
          {
            playerId: 27,
            matchPlayerId: 176417,
            name: 'Mirko',
            surname: 'Höfflin',
            jersey: 10,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '322'
          },
          {
            playerId: 547,
            matchPlayerId: 176422,
            name: 'Jerome',
            surname: 'Flaake',
            jersey: 90,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '323'
          },
          {
            playerId: 1656,
            matchPlayerId: 176434,
            name: 'Mathew',
            surname: 'Bodie',
            jersey: 22,
            position: 'DE',
            captain: false,
            startingSix: false,
            roster: '221'
          },
          {
            playerId: 57,
            matchPlayerId: 176419,
            name: 'Colton',
            surname: 'Jobke',
            jersey: 7,
            position: 'DE',
            captain: false,
            startingSix: false,
            roster: '222'
          }
        ],
        line3: [
          {
            playerId: 2209,
            matchPlayerId: 176446,
            name: 'Ty',
            surname: 'Ronning',
            jersey: 26,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '331'
          },
          {
            playerId: 252,
            matchPlayerId: 176420,
            name: 'Daniel',
            surname: 'Pietta',
            jersey: 86,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '332'
          },
          {
            playerId: 1706,
            matchPlayerId: 176436,
            name: 'Tye',
            surname: 'McGinn',
            jersey: 16,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '333'
          },
          {
            playerId: 604,
            matchPlayerId: 176423,
            name: 'Emil',
            surname: 'Quaas',
            jersey: 20,
            position: 'DE',
            captain: false,
            startingSix: false,
            roster: '231'
          },
          {
            playerId: 1750,
            matchPlayerId: 176438,
            name: 'Leon',
            surname: 'Hüttl',
            jersey: 25,
            position: 'DE',
            captain: false,
            startingSix: false,
            roster: '232'
          }
        ],
        line4: [
          {
            playerId: 1458,
            matchPlayerId: 176427,
            name: 'Wayne',
            surname: 'Simpson',
            jersey: 21,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '341'
          },
          {
            playerId: 1554,
            matchPlayerId: 176429,
            name: 'Wojciech',
            surname: 'Stachowiak',
            jersey: 19,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '342'
          },
          {
            playerId: 1897,
            matchPlayerId: 176441,
            name: 'Charles',
            surname: 'Bertrand',
            jersey: 33,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '343'
          },
          {
            playerId: 1896,
            matchPlayerId: 176440,
            name: 'Philipp',
            surname: 'Krauß',
            jersey: 8,
            position: 'FO',
            captain: false,
            startingSix: false,
            roster: '242'
          }
        ],
        lineGoalie: [
          {
            playerId: 1169,
            matchPlayerId: 176425,
            name: 'Kevin',
            surname: 'Reich',
            jersey: 35,
            position: 'GK',
            captain: false,
            startingSix: true,
            roster: '101'
          },
          {
            playerId: 1459,
            matchPlayerId: 176428,
            name: 'Jonas',
            surname: 'Stettmer',
            jersey: 1,
            position: 'GK',
            captain: false,
            startingSix: false,
            roster: '102'
          }
        ]
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
        id: 'attachOutro',
        label: 'Attach outro 1920x1080 (on single video)',
        type: 'select',
        selectData: [
          {
            label: 'Yes',
            value: true
          },
          {
            label: 'No',
            value: false
          }
        ],
        value: false
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Lineup'
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
