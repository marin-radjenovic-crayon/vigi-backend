module.exports = {
  uuid: '0005',
  template_name: 'teamcompare',
  name: 'Team Compare',
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
        id: 'teamHome',
        label: 'Team Home Logo',
        type: 'media',
        dragResize: false,
        allowedActions: ['resize', 'move'],
        allowedMediaTypes: ['image', 'video'],
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
        id: 'teamAway',
        label: 'Team Away Logo',
        type: 'media',
        dragResize: false,
        allowedActions: ['resize', 'move'],
        allowedMediaTypes: ['image', 'video'],
        value: {
          uuid: '2001',
          label: 'Hannover 96',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/96.png',
          data: {
            name: 'Hannover 96',
            short: 'HSV'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0.055'
        }
      },
      {
        id: 'homeScore',
        label: 'Home score',
        type: 'text',
        value: '4'
      },
      {
        id: 'awayScore',
        label: 'Away score',
        type: 'text',
        value: '2'
      },
      {
        id: 'stat1Label',
        label: 'Stat 1 Label',
        type: 'text',
        value: 'Shots'
      },
      {
        id: 'stat1Home',
        label: 'Stat 1 Home value',
        type: 'text',
        value: '54'
      },
      {
        id: 'stat1Away',
        label: 'Stat 1 Away value',
        type: 'text',
        value: '22'
      },
      {
        id: 'stat2Label',
        label: 'Stat 2 Label (%)',
        type: 'text',
        value: 'Possesion (%)'
      },
      {
        id: 'stat2Home',
        label: 'Stat 2 Home value',
        type: 'text',
        value: '21'
      },
      {
        id: 'stat2Away',
        label: 'Stat 2 Away value',
        type: 'text',
        value: '62'
      },

      {
        id: 'stat3Label',
        label: 'Stat 3 Label',
        type: 'text',
        value: 'Fouls'
      },
      {
        id: 'stat3Home',
        label: 'Stat 3 Home value',
        type: 'text',
        value: '21'
      },
      {
        id: 'stat3Away',
        label: 'Stat 3 Away value',
        type: 'text',
        value: '62'
      },

      {
        id: 'stat4Label',
        label: 'Stat 4 Label',
        type: 'text',
        value: 'Passes'
      },
      {
        id: 'stat4Home',
        label: 'Stat 4 Home value',
        type: 'text',
        value: '21'
      },
      {
        id: 'stat4Away',
        label: 'Stat 4 Away value',
        type: 'text',
        value: '62'
      },
      {
        id: 'stat5Label',
        label: 'Stat 5 Label',
        type: 'text',
        value: 'Minutes played'
      },
      {
        id: 'stat5Home',
        label: 'Stat 5 Home value',
        type: 'text',
        value: '12'
      },
      {
        id: 'stat5Away',
        label: 'Stat 5 Away value',
        type: 'text',
        value: '18'
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Team Compare'
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
