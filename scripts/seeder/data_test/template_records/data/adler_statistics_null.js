module.exports = {
  'template_name': 'adlerstatistics',
  'name': 'Statistics-null-test',
  'data': {
    'dynamic': {
      'teamSide': 'home',
      'game': {
        'actualTimeName': 'vor dem Spiel',
        'actualTimeAlias': '0',
        'teamBilance': {
          'homeWin': 0,
          'visitorWin': 0
        },
        'results': {
          'extra_time': false,
          'shooting': false,
          'contumacy': false,
          'score': {
            'final': {
              'score_home': 0,
              'score_guest': 0
            },
            'first_period': {
              'score_home': 0,
              'score_guest': 0
            },
            'second_period': {
              'score_home': 0,
              'score_guest': 0
            },
            'third_period': {
              'score_home': 0,
              'score_guest': 0
            }
          }
        },
        'home': {
          'id': 2,
          'name': 'Adler Mannheim',
          'shortcut': 'MAN'
        },
        'away': {
          'id': 11,
          'name': 'Kölner Haie',
          'shortcut': 'KEC'
        },
        'side': 'home',
        'referees': {
          'headReferee1': null,
          'headReferee2': null,
          'lineReferee1': null,
          'lineReferee2': null
        }
      },
      'goals': {
        'home': [],
        'visitor': []
      },
      'teamStats': null,
      'assets': {
        'teamHome': {
          'uuid': '32039ec8-1aba-11ec-8184-f99439fc779f',
          'label': 'Adler Mannheim',
          'type': 'image',
          'group': 'teams',
          'url': '/predefined/media/image/teams/adler/logo-mannheim.png',
          'data': {
            'name': 'Mannheim',
            'short': 'MAN',
            'id': '2'
          },
          'extension': 'png',
          'mime': 'image/png',
          'content_type': 'image',
          'size': 0
        },
        'teamAway': {
          'uuid': '32039ec1-1aba-11ec-8184-f99439fc779f',
          'label': 'Kölner Haie',
          'type': 'image',
          'group': 'teams',
          'url': '/predefined/media/image/teams/adler/logo-koeln.png',
          'data': {
            'name': 'Köln',
            'short': 'KEC',
            'id': '11'
          },
          'extension': 'png',
          'mime': 'image/png',
          'content_type': 'image',
          'size': 0
        }
      }
    },
    'fields': [],
    'options': [{
      'id': 'name',
      'label': 'Name',
      'type': 'text',
      'value': 'Statistics (15_55_28 22/9)',
      'styles': null
    }, {
      'id': 'color1',
      'label': 'Color 1',
      'type': 'color',
      'value': '#00FDFF',
      'styles': null
    }, {
      'id': 'color2',
      'label': 'Color 2',
      'type': 'color',
      'value': '#919191',
      'styles': null
    }, {
      'id': 'defaultBackground',
      'label': 'Basic background',
      'type': 'media',
      'value': {
        'uuid': '3000',
        'label': 'default bg',
        'group': 'backgrounds',
        'url': '/predefined/media/image/backgrounds/others/defaultBackground.png',
        'extension': 'jpeg',
        'mime': 'image/jpeg',
        'size': 0,
        'content_type': 'image',
        'local_path': '/predefined/media/image/backgrounds/others'
      },
      'styles': null
    }, {
      'id': 'defaultBackgroundMask',
      'label': 'Overlay background (transparent)',
      'type': 'media',
      'value': {
        'uuid': '3001',
        'label': 'default bg mask',
        'group': 'backgrounds',
        'url': '/predefined/media/image/backgrounds/others/defaultBackgroundMask.png',
        'extension': 'jpeg',
        'mime': 'image/jpeg',
        'size': 0,
        'content_type': 'image',
        'local_path': '/predefined/media/image/backgrounds/others'
      },
      'styles': null
    }, {
      'id': 'videoduration',
      'label': 'Video duration',
      'type': 'text',
      'value': 15,
      'styles': null
    }],
    'videos': {
      '1080x1080': {
        'date': null,
        'file': null
      }
    }
  },
  'season': '2021',
  'event': {
    'selectedTeamId': '2',
    'competitionId': '1',
    'competitionName': 'DEL',
    'type': 'match',
    'homeTeamId': '2',
    'awayTeamId': '11',
    'side': 'home',
    'eventId': '2166',
    'dateObj': '202130203023',
    'date': '30.09.2021',
    'time': '19:30'
  }
};
