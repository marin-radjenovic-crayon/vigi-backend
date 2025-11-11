module.exports = {
  uuid: '0',
  template_name: 'bild_static_facts',
  name: 'Static facts',
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
        id: 'imageSide',
        label: 'Image Side',
        type: 'select',
        selectData: [
          {
            label: 'Left',
            value: 'left'
          },
          {
            label: 'Right',
            value: 'right'
          },
        ],
        value: 'right'
      },
      {
        id: 'selectedSide',
        label: 'Team side',
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
      // {
      //   id: 'facts_country',
      //   label: 'Select Country',
      //   type: 'select',
      //   selectData: [],
      //   value: ''
      // },
      // {
      //   id: 'facts_discipline',
      //   label: 'Discipline',
      //   type: 'text',
      //   value: ''
      // },
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
          url: '/predefined/media/image/backgrounds/football/2.jpg',
          data: {},
          extension: 'jpg',
          mime: 'image/jpeg',
          content_type: 'image',
          size: '0'
        }
      },
      {
        id: 'headline',
        label: 'Headline',
        type: 'text',
        value: 'Top Facts'
      },
      {
        id: 'fact1',
        label: 'Fact 1',
        type: 'html',
        drag: false,
        value: '<p><b>Der WM-Gastgeber hat noch nie ein Eröffnungsspiel verloren.</b></p>',
        styles: {}
      },
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
