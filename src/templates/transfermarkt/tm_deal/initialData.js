module.exports = {
  uuid: '0',
  template_name: 'tm_deal',
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

      // Deal Type
      {
        id: 'type',
        label: 'Type',
        type: 'select',
        selectData: [
          {
            label: 'Rumour',
            value: 'rumour'
          },
          {
            label: 'Done Deal',
            value: 'done'
          },
          {
            label: 'Failed Deal',
            value: 'failed'
          }
        ],
        value: 'rumour'
      },
      {
        id: 'typeText',
        label: 'Deal Type(Edited)',
        type: 'text',
        value: 'Rumour'
      },

      {
        id: 'title',
        label: 'Title',
        type: 'html',
        drag: false,
        value: '<p><b>VINICIUS JR.</b>(22)</p>',
        styles: {}
      },
      {
        id: 'marketValue',
        label: 'Market Value',
        type: 'text',
        value: ''
      },
      {
        id: 'fee',
        label: 'Fee',
        type: 'text',
        value: ''
      },
      {
        id: 'addOns',
        label: 'Add-Ons',
        type: 'text',
        value: ''
      },
      {
        id: 'position',
        label: 'Position',
        type: 'text',
        value: 'Left Winger'
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
          url: '/predefined/media/image/players/tm/player1.png',
          data: {},
          extension: 'jpg',
          mime: 'image/jpeg',
          content_type: 'image',
          size: '0'
        }
      },
      {
        id: 'transfer_from',
        label: 'Transfer From',
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
        id: 'transfer_to',
        label: 'Transfer To',
        type: 'media',
        dragResize: true,
        allowedActions: ['resize', 'move'],
        allowedMediaTypes: ['image'],
        value: {
          label: 'Test',
          type: 'image',
          group: 'backgrounds',
          url: '/predefined/media/image/backgrounds/transfermarkt/transfer_to.png',
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
