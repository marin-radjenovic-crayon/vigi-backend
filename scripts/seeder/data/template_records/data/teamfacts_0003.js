module.exports = {
  uuid: '0003',
  template_name: 'teamfacts',
  name: 'Team facts',
  data: {
    dynamic: {
      stadium: 'Some stadion name',
      weather: 'Etc.'
    },
    fields: [
      {
        id: 'headline',
        label: 'Headline',
        type: 'text',
        value: 'Headline'
      },
      {
        id: 'subheadline',
        label: 'Subheadline',
        type: 'text',
        value: 'Subheadline'
      },
      {
        id: 'team',
        label: 'Team Logo',
        type: 'media',
        dragResize: false,
        allowedActions: [
          'resize',
          'move'
        ],
        allowedMediaTypes: [
          'image',
          'video'
        ],
        value: {
          uuid: '2000',
          label: 'FC Nürnberg',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/1fck.png',
          data: {
            name: 'FC Nürnberg',
            short: 'FCN'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0.055'
        }
      },
      {
        id: 'photo',
        label: 'Team photo',
        type: 'media',
        dragResize: true,
        allowedActions: [
          'resize',
          'move'
        ],
        allowedMediaTypes: [
          'image'
        ],
        value: {
          uuid: '2000',
          label: 'FC Nürnberg',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/1fck.png',
          data: {
            name: 'FC Nürnberg',
            short: 'FCN'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0.055'
        },
        animation: {
          delay: '500',
          effect_duration: '1000',
          type: 'fade',
          out: false
        },
        styles: {}
      },
      {
        id: 'facts',
        label: 'Facts',
        type: 'html',
        value: '<p>The earliest versions of the game can be traced back 3,000 years.</p>\n<p>Soccer is the most popular game in the world. In many countries it is known as “football”.</p>\n<p>Football made its television debut in 1937, featuring Arsenal in England.</p>',
        styles: {
          left: '100px',
          right: 'auto',
          top: '10px',
          bottom: '50px'
        }
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Team facts'
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
        }
      },
      {
        id: 'defaultBackgroundMask',
        label: 'Overlay background (transparent)',
        type: 'media',
        value: {
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
      {
        id: 'videoduration',
        label: 'Video duration',
        type: 'text',
        value: '15'
      }
    ]
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
