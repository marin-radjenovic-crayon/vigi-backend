module.exports = {
  uuid: '0',
  template_name: 'adlerstartingsix',
  name: 'Starting Six',
  data: {
    dynamic: {
      teamSide: 'away',
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
        referees: {
          headReferee1: {
            id: 122,
            name: 'Lukas Kohlmüller'
          },
          headReferee2: {
            id: 66,
            name: 'Gordon Schukies'
          },
          lineReferee1: {
            id: 200,
            name: 'Wayne Gerth'
          },
          lineReferee2: {
            id: 127,
            name: 'Jonas Merten'
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
      startingSixHome: [
        {
          playerId: 1365,
          matchPlayerId: 121597,
          name: 'Mark',
          surname: 'Katic',
          jersey: 95,
          position: 'DE',
          captain: false,
          startingSix: true,
          roster: '211'
        },
        {
          playerId: 1364,
          matchPlayerId: 121596,
          name: 'Markus',
          surname: 'Eisenschmid',
          jersey: 16,
          position: 'FO',
          captain: false,
          startingSix: true,
          roster: '311'
        },
        {
          playerId: 1359,
          matchPlayerId: 121593,
          name: 'Benjamin',
          surname: 'Smith',
          jersey: 18,
          position: 'FO',
          captain: true,
          startingSix: true,
          roster: '312'
        },
        {
          playerId: 1579,
          matchPlayerId: 121604,
          name: 'Brendan',
          surname: 'Shinnimin',
          jersey: 24,
          position: 'FO',
          captain: false,
          startingSix: true,
          roster: '313'
        },
        {
          playerId: 1702,
          matchPlayerId: 121607,
          name: 'Craig',
          surname: 'Schira',
          jersey: 64,
          position: 'DE',
          captain: false,
          startingSix: true,
          roster: '212'
        },
        {
          playerId: 516,
          matchPlayerId: 121586,
          name: 'Felix',
          surname: 'Brückmann',
          jersey: 90,
          position: 'GK',
          captain: false,
          startingSix: true,
          roster: '101'
        }
      ],
      startingSixAway: [
        {
          playerId: 1365,
          matchPlayerId: 121597,
          name: 'Mark',
          surname: 'Katic',
          jersey: 95,
          position: 'DE',
          captain: false,
          startingSix: true,
          roster: '211'
        },
        {
          playerId: 1364,
          matchPlayerId: 121596,
          name: 'Markus',
          surname: 'Eisenschmid',
          jersey: 16,
          position: 'FO',
          captain: false,
          startingSix: true,
          roster: '311'
        },
        {
          playerId: 1359,
          matchPlayerId: 121593,
          name: 'Benjamin',
          surname: 'Smith',
          jersey: 18,
          position: 'FO',
          captain: true,
          startingSix: true,
          roster: '312'
        },
        {
          playerId: 1579,
          matchPlayerId: 121604,
          name: 'Brendan',
          surname: 'Shinnimin',
          jersey: 24,
          position: 'FO',
          captain: false,
          startingSix: true,
          roster: '313'
        },
        {
          playerId: 1702,
          matchPlayerId: 121607,
          name: 'Craig',
          surname: 'Schira',
          jersey: 64,
          position: 'DE',
          captain: false,
          startingSix: true,
          roster: '212'
        },
        {
          playerId: 516,
          matchPlayerId: 121586,
          name: 'Felix',
          surname: 'Brückmann',
          jersey: 90,
          position: 'GK',
          captain: false,
          startingSix: true,
          roster: '101'
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
        p_1365: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '1365',
            firstname: 'Sinan',
            lastname: 'Akdag',
            position: 'DE',
            shirtNumber: '7'
          }
        },
        p_1364: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '1364',
            firstname: 'Sinan',
            lastname: 'Akdag',
            position: 'DE',
            shirtNumber: '7'
          }
        },
        p_1359: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '1359',
            firstname: 'Sinan',
            lastname: 'Akdag',
            position: 'DE',
            shirtNumber: '7'
          }
        },
        p_1579: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '1579',
            firstname: 'Sinan',
            lastname: 'Akdag',
            position: 'DE',
            shirtNumber: '7'
          }
        },
        p_1702: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '1702',
            firstname: 'Sinan',
            lastname: 'Akdag',
            position: 'DE',
            shirtNumber: '7'
          }
        },
        p_516: {
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '516',
            firstname: 'Sinan',
            lastname: 'Akdag',
            position: 'DE',
            shirtNumber: '7'
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
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Starting Six'
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
