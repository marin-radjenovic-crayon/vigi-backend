module.exports = {
  uuid: '0',
  template_name: 'playerstats',
  name: 'Player Stats',
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
        id: 'team',
        label: 'Team Logo',
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
            nameShort: 'FCN'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0.055'
        }
      },
      {
        id: 'player',
        label: 'Player image',
        type: 'media',
        dragResize: true,
        allowedActions: ['resize', 'move'],
        initialActiveGroup: 'players',
        allowedMediaTypes: ['image'],
        value: {
          uuid: '1000',
          label: 'Robert Lewandowski',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/lewandowski.png',
          data: {
            id: '1',
            firstname: 'Robert',
            lastname: 'Lewandowski',
            position: 'Attacker',
            shirtNumber: '7'
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
        id: 'stat1Label',
        label: 'Stat 1 Label',
        type: 'text',
        value: 'Shots'
      },
      {
        id: 'stat1Value',
        label: 'Stat 1 value',
        type: 'text',
        value: '54'
      },
      {
        id: 'stat2Label',
        label: 'Stat 2 Label (%)',
        type: 'text',
        value: 'Possesion (%)'
      },
      {
        id: 'stat2Value',
        label: 'Stat 2 value',
        type: 'text',
        value: '21'
      },
      {
        id: 'stat3Label',
        label: 'Stat 3 Label',
        type: 'text',
        value: 'Fouls'
      },
      {
        id: 'stat3Value',
        label: 'Stat 3 value',
        type: 'text',
        value: '21'
      },
      {
        id: 'stat4Label',
        label: 'Stat 4 Label',
        type: 'text',
        value: 'Passes'
      },
      {
        id: 'stat4Value',
        label: 'Stat 4 value',
        type: 'text',
        value: '21'
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Player Stats'
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
