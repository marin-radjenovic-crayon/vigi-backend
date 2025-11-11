module.exports = {
  uuid: '0',
  template_name: 'adlergameday',
  name: 'Gameday',
  data: {
    dynamic: {
      teamSide: 'away',
      game: {
        actualTimeName: 'Ende',
        actualTimeAlias: 'K',
        stadium: 'Eisstadion Straubing',
        numberOfViewers: 3789,
        teamBilance: {
          homeWin: 12,
          visitorWin: 12
        },
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
              score_home: 2,
              score_guest: 1
            },
            second_period: {
              score_home: 1,
              score_guest: 1
            },
            third_period: {
              score_home: 1,
              score_guest: 0
            }
          }
        },
        home: {
          id: 6,
          name: 'Straubing Tigers',
          shortcut: 'STR'
        },
        away: {
          id: 2,
          name: 'Adler Mannheim',
          shortcut: 'MAN'
        },
        side: 'away',
        referees: {
          headReferee1: {
            id: 60,
            name: 'Sirko Hunnius'
          },
          headReferee2: {
            id: 65,
            name: 'Lasse Kopitz'
          },
          lineReferee1: {
            id: 230,
            name: 'Jakub Klima'
          },
          lineReferee2: {
            id: 203,
            name: 'Tobias Schwenk'
          }
        }
      },
      thisGame: {
        id: 2120,
        start_date: '2021-09-10 19:30:00',
        real_end_date: '2021-09-10 21:49:00',
        league_id: 1,
        league: 'DEL',
        season: '2021',
        round: '1',
        home: {
          id: 6,
          name: 'Straubing Tigers',
          shortcut: 'STR'
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
              score_home: 4,
              score_guest: 2
            },
            first_period: {
              score_home: 2,
              score_guest: 1
            },
            second_period: {
              score_home: 1,
              score_guest: 1
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
      nextGame: {
        id: 2134,
        start_date: '2021-09-17 19:30:00',
        real_end_date: '0000-00-00 00:00:00',
        league_id: 1,
        league: 'DEL',
        season: '2021',
        round: '3',
        home: {
          id: 2,
          name: 'Adler Mannheim',
          shortcut: 'MAN'
        },
        guest: {
          id: 14,
          name: 'Nürnberg Ice Tigers',
          shortcut: 'NIT'
        },
        status: 'BEFORE_MATCH',
        overtimeCount: null,
        results: {
          extra_time: false,
          shooting: false,
          contumacy: false,
          score: {
            final: {
              score_home: 0,
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
              score_home: 0,
              score_guest: 0
            }
          }
        },
        actual_time_name: 'vor dem Spiel',
        actual_time_alias: '0',
        last_event_time: 0
      },
      assets: {
        teamHome: {
          uuid: '3a39299d-14df-11ec-89c3-0d617762fc45',
          label: 'Straubing Tigers',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/adler/logo-straubing-21.png',
          data: {
            name: 'Straubing',
            short: 'STR',
            id: '6'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: 0
        },
        teamAway: {
          uuid: '3a392999-14df-11ec-89c3-0d617762fc45',
          label: 'Adler Mannheim',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/adler/logo-mannheim.png',
          data: {
            name: 'Mannheim',
            short: 'MAN',
            id: '2'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: 0
        }
      }
    },
    fields: [
      {
        id: 'background',
        label: 'Background',
        type: 'media',
        dragResize: true,
        allowedActions: ['resize', 'move'],
        allowedMediaTypes: ['image', 'video'],
        value: {
          label: 'Test',
          type: 'image',
          group: 'backgrounds',
          url: '/predefined/media/image/backgrounds/adler/custom/adlerresults_1920.jpg',
          data: {},
          extension: 'jpg',
          mime: 'image/jpeg',
          content_type: 'image',
          size: '0'
        }
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Gameday'
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
