module.exports = {
  uuid: '0',
  template_name: 'staticmedia',
  name: 'Static media',
  data: {
    dynamic: {},
    fields: [
      {
        id: 'background',
        label: 'Background',
        type: 'media',
        dragResize: false,
        allowedActions: ['resize', 'move'],
        allowedMediaTypes: ['image', 'video'],
        value: {
          label: 'Test',
          type: 'video',
          group: 'backgrounds',
          url: '/predefined/media/video/backgrounds/hockey1.webm',
          data: {},
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
    ],
    videos: {}
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
