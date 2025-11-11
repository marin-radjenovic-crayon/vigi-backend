const { v1: uuidv1 } = require('uuid');
module.exports = {
  uuid: '0',
  template_name: 'adlergoal',
  name: 'Goal',
  data: {
    dynamic: {
      teamSide: 'home',
      goal: {
        playerId: 487,
        matchPlayerId: 120921,
        jersey: 22,
        name: 'Markus',
        surname: 'Eisenschmid',
        teamSide: 'home',
        eventId: '11494',
        realTime: '2021-04-11 16:33:54',
        currentScore: '2:0',
        scoreboardTime: '03:01',
        period: '2',
        shooting: false
      },
      assets: {
        player: {
          label: 'Sinan Akdag',
          type: 'image',
          group: 'players',
          url: '/predefined/media/image/players/adler/Akdag.png',
          data: {
            id: '23',
            firstname: 'Sinan',
            lastname: 'Akdag',
            position: 'DE',
            shirtNumber: '7'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        teamHome: {
          label: 'Adler Mannheim',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/adler/logo-mannheim.png',
          data: {
            name: 'Adler Mannheim',
            short: 'MAN',
            id: '2'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        },
        teamAway: {
          label: 'Nürnberg Ice Tigers',
          type: 'image',
          group: 'teams',
          url: '/predefined/media/image/teams/adler/logo-nuernberg-2020.png',
          data: {
            name: 'Nürnberg Ice Tigers',
            short: 'NIT',
            id: '14'
          },
          extension: 'png',
          mime: 'image/png',
          content_type: 'image',
          size: '0'
        }
      }
    },
    fields: [
      {
        id: 'playerOverride',
        label: 'Goal Player override',
        type: 'media',
        initialActiveGroup: 'players',
        allowedMediaTypes: ['image'],
        value: null,
        styles: {}
      },
      {
        id: 'scoreHome',
        label: 'Score Home',
        type: 'text',
        value: ''
      },
      {
        id: 'scoreAway',
        label: 'Score Away',
        type: 'text',
        value: ''
      },
      {
        id: 'periodTime',
        label: 'Period Time',
        type: 'text',
        value: ''
      },
      {
        id: 'periodName',
        label: 'Period Name',
        type: 'text',
        value: ''
      }
    ],
    options: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        value: 'Goal'
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
