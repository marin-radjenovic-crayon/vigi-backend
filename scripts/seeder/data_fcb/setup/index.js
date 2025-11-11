const json = [
  {
    id: '1',
    name: 'General',
    data: {
      timeline: {
        formats: ['1920x1080'],
        settings: {
          playMode: 'auto'
        }
      },
      templates: require('../../../../src/config/fcb/templates'),
      mediaLibrary: {
        accept: {
          image: '.png, .jpg, .jpeg, .gif',
          video: '.mp4, .webm, .ogv',
          audio: '.mp3'
        },
        groups: {
          image: {
            _default: {
              id: '_default',
              name: '_default',
              label: 'All',
              type: 'images',
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text'
                }
              ]
            },
            players: {
              id: '0001',
              name: 'players',
              label: 'Players',
              type: 'images',
              fields: [
                {
                  name: 'id',
                  label: 'ID',
                  type: 'text'
                },
                {
                  name: 'firstname',
                  label: 'Firstname',
                  type: 'text'
                },
                {
                  name: 'lastname',
                  label: 'Lastname',
                  type: 'text'
                },
                {
                  name: 'position',
                  label: 'Position',
                  type: 'text'
                },
                {
                  name: 'shirtNumber',
                  label: 'Shirt',
                  type: 'text'
                }
              ]
            },
            teams: {
              id: '0002',
              name: 'teams',
              label: 'Teams',
              type: 'images',
              fields: [
                {
                  name: 'name',
                  label: 'Name',
                  type: 'text'
                },
                {
                  name: 'short',
                  label: 'Short',
                  type: 'text'
                },
                {
                  name: 'id',
                  label: 'ID',
                  type: 'text'
                }
              ]
            },
            backgrounds: {
              id: '0003',
              name: 'backgrounds',
              label: 'Backgrounds',
              type: 'images',
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text'
                }
              ]
            }
          },
          video: {
            _default: {
              id: '_default',
              name: '_default',
              label: 'All',
              type: 'video',
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text'
                }
              ]
            }
          },
          audio: {
            _default: {
              id: '_default',
              name: '_default',
              label: 'All',
              type: 'audio',
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text'
                }
              ]
            }
          }
        }
      },
      design: {
        backendBackground: {
          label: 'football1',
          data: {},
          group: 'backgrounds',
          url: '/predefined/media/image/backgrounds/football/1.jpg',
          extension: 'jpeg',
          mime: 'image/jpeg',
          size: 0,
          content_type: 'image',
          local_path: '/predefined/media/image/backgrounds/football'
        },
        defaultColor1: '#00FDFF',
        defaultColor2: '#919191',
        defaultBackground: {
          uuid: '3000',
          label: 'default bg',
          data: {},
          group: 'backgrounds',
          url: '/predefined/media/image/backgrounds/others/defaultBackground.png',
          extension: 'jpeg',
          mime: 'image/jpeg',
          size: 0,
          content_type: 'image',
          local_path: '/predefined/media/image/backgrounds/others'
        },
        defaultBackgroundMask: {
          uuid: '3001',
          label: 'default bg mask',
          data: {},
          group: 'backgrounds',
          url: '/predefined/media/image/backgrounds/others/defaultBackgroundMask.png',
          extension: 'jpeg',
          mime: 'image/jpeg',
          size: 0,
          content_type: 'image',
          local_path: '/predefined/media/image/backgrounds/others'
        }
      },
      video: {
        videoServer: 'https://video.spovizz.com',
        templateaudio: {
          content_type: 'audio',
          createdAt: '2021-04-06T14:33:51.644Z',
          extension: 'mp3',
          group: '_default',
          label: 'Seven Nation Army',
          local_path: '/predefined/media/audio',
          mime: 'audio/mpeg',
          size: 0,
          updatedAt: '2021-04-06T14:33:51.644Z',
          url: '/predefined/media/audio/seven_nation_army.mp3',
          uuid: '159abfa2-e1b7-11eb-9d57-7bf8e65b1c20'
        },
        timelineaudio: {
          content_type: 'audio',
          createdAt: '2021-04-06T14:33:51.644Z',
          extension: 'mp3',
          group: '_default',
          label: 'Chumbawamba - I Get Knocked Down',
          local_path: '/predefined/media/audio',
          mime: 'audio/mpeg',
          size: 0,
          updatedAt: '2021-04-06T14:33:51.644Z',
          url: '/predefined/media/audio/chumbawamba_i_get_knocked_down.mp3',
          uuid: '159abfa1-e1b7-11eb-9d57-7bf8e65b1c20'
        },
        addSoundToTemplate: false,
        addSoundToTimeline: false
      }
    }
  },
  {
    id: '2',
    name: 'Global event',
    data: {
      season: '2023',
      event: {
        selectedTeamId: '185xqd7s06sm2t85sxzfkrl',
        competitionId: '5mqc55tieqhbz2sech0fp70bu',
        competitionName: "FIFA Women's World Cup",
        type: 'match',
        homeTeamId: '185xqd7s06sm2t85sxzfkrl',
        awayTeamId: '6a6z9hvqktu4ug8p15kdbov7x',
        side: 'home',
        eventId: 'gq7483fcdlvtmgi8sqemprmc',
        dateObj: '202130203023',
        date: '23.07.2023',
        time: '12:00',
        start_date: null
      }
    }
  }
];

module.exports = json;
