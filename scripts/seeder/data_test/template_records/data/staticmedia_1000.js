const { v1: uuidv1 } = require('uuid');
const keywords = [
  {
    name: 'staticmedia',
    keyword: 'Spieltagsflyer'
  },
  {
    name: 'staticmedia',
    keyword: 'Merch'
  },
  // {
  //   name: 'staticmedia',
  //   keyword: 'WLAN'
  // },
  // {
  //   name: 'staticmedia',
  //   keyword: 'Social Wall'
  // },
  // {
  //   name: 'staticmedia',
  //   keyword: 'Auf Wiedersehen'
  // },
  // {
  //   name: 'staticmedia',
  //   keyword: 'Tippspiel Ankündigung'
  // },
  // {
  //   name: 'staticmedia',
  //   keyword: 'VIP Shop'
  // },
  // {
  //   name: 'staticmedia',
  //   keyword: '7x Merch'
  // }
];

class NumberInt {
  constructor(s) {
    return parseInt(s);
  }
}

const records = keywords.map(e => {
  return {
    uuid: uuidv1(),
    template_name: e.name,
    name: 'Static Media',
    data: {
      dynamic: {
        teamSide: 'home',
        game: {
          actualTimeName: 'Ende',
          actualTimeAlias: 'K',
          stadium: 'SAP Arena',
          numberOfViewers: new NumberInt('13600'),
          teamBilance: {
            homeWin: new NumberInt('8'),
            visitorWin: new NumberInt('6')
          },
          results: {
            extra_time: false,
            shooting: false,
            contumacy: false,
            score: {
              final: {
                score_home: new NumberInt('4'),
                score_guest: new NumberInt('3')
              },
              first_period: {
                score_home: new NumberInt('0'),
                score_guest: new NumberInt('0')
              },
              second_period: {
                score_home: new NumberInt('1'),
                score_guest: new NumberInt('3')
              },
              third_period: {
                score_home: new NumberInt('3'),
                score_guest: new NumberInt('0')
              }
            }
          },
          home: {
            id: new NumberInt('2'),
            name: 'Adler Mannheim',
            shortcut: 'MAN'
          },
          away: {
            id: new NumberInt('11'),
            name: 'Kölner Haie',
            shortcut: 'KEC'
          },
          side: 'home',
          referees: {
            headReferee1: {
              id: new NumberInt('120'),
              name: 'Marc Iwert'
            },
            headReferee2: {
              id: new NumberInt('191'),
              name: 'Andre Schrader'
            },
            lineReferee1: {
              id: new NumberInt('202'),
              name: 'Patrick Laguzov'
            },
            lineReferee2: {
              id: new NumberInt('254'),
              name: 'Jan Philipp Priebsch'
            }
          }
        },
        assets: {
          teamHome: {
            uuid: '72a41c99-0ddf-11ee-85e1-25ef887624b9',
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
            size: new NumberInt('0')
          },
          teamAway: {
            uuid: '72a41c92-0ddf-11ee-85e1-25ef887624b9',
            label: 'Kölner Haie',
            type: 'image',
            group: 'teams',
            url: '/predefined/media/image/teams/adler/logo-koeln.png',
            data: {
              name: 'Kölner Haie',
              short: 'KEC',
              id: '11'
            },
            extension: 'png',
            mime: 'image/png',
            content_type: 'image',
            size: new NumberInt('0')
          }
        }
      },
      fields: [
        {
          id: 'background',
          label: 'Background',
          type: 'media',
          dragResize: false,
          allowedActions: ['resize', 'move'],
          allowedMediaTypes: ['image', 'video'],
          value: {
            label: e.keyword,
            type: 'video',
            group: 'backgrounds',
            url: '/predefined/media/video/backgrounds/hockey1.webm',
            extension: 'webm',
            mime: 'video/webm',
            content_type: 'video',
            size: '0'
          }
        }
      ],
      options: [
        {
          id: 'name',
          label: 'Name',
          type: 'text',
          value: 'Static media'
        },
        {
          id: 'color1',
          label: 'Color 1',
          type: 'color',
          value: '#000000'
        },
        {
          id: 'videoduration',
          label: 'Video duration',
          type: 'text',
          value: '15'
        }
      ]
    },
    season: '2022',
    event: {
      selectedTeamId: '2',
      competitionId: '3',
      competitionName: 'DEL Playoffs',
      type: 'match',
      homeTeamId: '2',
      awayTeamId: '11',
      side: 'home',
      eventId: '3030',
      dateObj: '202130203023',
      date: '24.03.2023',
      time: '19:30',
      start_date: '2023-03-24 19:30:00'
    }
  };
});

module.exports = records;
