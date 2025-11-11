module.exports = {
  uuid: '0',
  template_name: 'staticslide',
  name: 'Static Slide',
  data: {
    dynamic: {},
    fields: [
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
        id: 'timelineType',
        label: 'Timeline type',
        type: 'select',
        selectData: [
          {
            label: 'PRE-MATCH',
            value: 'pre'
          },
          {
            label: 'LIVE-MATCH',
            value: 'live'
          },
          {
            label: 'POST-MATCH',
            value: 'post'
          },
          {
            label: 'GLOBAL',
            value: 'global'
          }
        ],
        value: 'global'
      },
      {
        id: 'slides',
        label: 'Slides',
        type: 'slide',
        dragResize: false,
        allowedActions: ['resize', 'move'],
        allowedMediaTypes: ['image'],
        value: [
          {
            label: 'Test',
            type: 'image',
            group: 'backgrounds',
            url: '/predefined/media/image/slide/placeholder.jpeg',
            data: {},
            extension: 'jpeg',
            mime: 'image/jpeg',
            content_type: 'image',
            size: '0',
            uuid: 'd7181eaz-ad9a-4572-847b-2d1cf61b510e'
          }
        ]
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Static slide'
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
