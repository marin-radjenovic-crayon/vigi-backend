module.exports = {
  uuid: '0',
  template_name: 'tm_top_10',
  name: 'Deal',
  data: {
    dynamic: {
      teamSide: 'home'
    },
    fields: [
      {
        id: 'lang',
        label: 'Language',
        type: 'select',
        selectData: [
          {
            label: 'English',
            value: 'en'
          },
          {
            label: 'German',
            value: 'de'
          }
        ],
        value: 'de'
      },
      {
        id: 'title',
        label: 'Title',
        type: 'text',
        value: 'MOST PENALTIES SCORED'
      },
      {
        id: 'desc',
        label: 'Description',
        type: 'text',
        value: 'premier league 2022/23'
      },
      {
        id: 'logo',
        label: 'Headline image',
        type: 'media',
        dragResize: true,
        allowedActions: ['resize', 'move'],
        allowedMediaTypes: ['image'],
        value: {
          label: 'Test',
          type: 'image',
          group: 'backgrounds',
          url: '/predefined/media/image/backgrounds/transfermarkt/transfer_from.png',
          data: {},
          extension: 'jpg',
          mime: 'image/jpeg',
          content_type: 'image',
          size: '0'
        }
      },
      {
        id: 'player',
        label: 'Player',
        type: 'media',
        dragResize: true,
        allowedActions: ['resize', 'move'],
        allowedMediaTypes: ['image'],
        value: {
          label: 'Test',
          type: 'image',
          group: 'backgrounds',
          url: '/predefined/media/image/players/tm/top_1.png',
          data: {},
          extension: 'jpg',
          mime: 'image/jpeg',
          content_type: 'image',
          size: '0'
        }
      },
      {
        id: 'background',
        label: 'Background',
        type: 'select',
        selectData: [
          {
            label: 'Done Deal',
            value: '/predefined/media/video/transfermarkt/done.webm'
          },
          {
            label: 'Default',
            value: '/predefined/media/video/transfermarkt/default.webm'
          },
          {
            label: 'Rumour',
            value: '/predefined/media/video/transfermarkt/rumours.webm'
          },
          {
            label: 'MVU',
            value: '/predefined/media/video/transfermarkt/mvu.webm'
          },
          {
            label: 'World',
            value: '/predefined/media/video/transfermarkt/world.webm'
          }
        ],
        value: '/predefined/media/video/transfermarkt/done.webm'
      },
      {
        id: 'players',
        label: 'Players List',
        type: 'multiple',
        value: [
          {
            uuid: 'd7181eaz-ad9a-4572-847b-2d1cf61b510e',
            team: {
              id: 'logo',
              label: 'Team Logo',
              type: 'media',
              dragResize: true,
              allowedActions: ['resize', 'move'],
              allowedMediaTypes: ['image'],
              value: {
                label: 'Test',
                type: 'image',
                group: 'backgrounds',
                url: '/predefined/media/image/backgrounds/transfermarkt/transfer_from.png',
                data: {},
                extension: 'jpg',
                mime: 'image/jpeg',
                content_type: 'image',
                size: '0'
              }
            },
            player: 'Haaland',
            age: '22',
            marketValue: '$22M'
          },
          {
            uuid: 'd7181eax-ad9a-4572-847b-2d1cf61b510e',
            team: {
              id: 'logo',
              label: 'Team Logo',
              type: 'media',
              dragResize: true,
              allowedActions: ['resize', 'move'],
              allowedMediaTypes: ['image'],
              value: {
                label: 'Test',
                type: 'image',
                group: 'backgrounds',
                url: '/predefined/media/image/backgrounds/transfermarkt/transfer_from.png',
                data: {},
                extension: 'jpg',
                mime: 'image/jpeg',
                content_type: 'image',
                size: '0'
              }
            },
            player: 'kane',
            age: '22',
            marketValue: '$22M'
          }
        ]
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Facts'
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
    videos: {}
  },
  season: '2023',
  event: {
    selectedTeamId: 'cf8plcmeniaen0fc5emyb5j93',
    competitionId: 'eaf2z13av1rs0jbwnnxfapdec',
    competitionName: 'tbi.',
    type: 'match',
    homeTeamId: 'cf8plcmeniaen0fc5emyb5j93',
    awayTeamId: '66bsnl0zjb7l5akwo00h0y5me',
    eventId: '9m65855s9loatlkjih5j7yluc',
    date: '19.09.2023',
    time: '21:00',
    start_date: null,
    home: {
      name: 'Shakhtar Donetsk',
      id: 'cf8plcmeniaen0fc5emyb5j93',
      shortcut: 'SHK'
    },
    away: {
      name: 'Porto',
      id: '66bsnl0zjb7l5akwo00h0y5me',
      shortcut: 'POR'
    },
    side: 'home'
  }
};
