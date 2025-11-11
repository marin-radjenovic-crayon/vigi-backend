const faker = require('faker');

const json = [
  {
    'event': {
      selectedTeamId: '2',
      competitionId: '1',
      competitionName: 'Del',
      type: 'match',
      homeTeamId: '2',
      awayTeamId: '14',
      side: 'home',
      eventId: '1821',
      dateObj: '202130203023'
    },
    'feedType': 'goals',
    'data': [{
      'playerId': 23,
      'matchPlayerId': 107511,
      'jersey': 61,
      'name': 'Tommi',
      'surname': 'Huhtala',
      'teamSide': 'home',
      'eventId': '10041',
      'realTime': '2020-12-19 16:56:07',
      'currentScore': '1:0',
      'scoreboardTime': '14:55',
      'period': '1',
      'shooting': false
    }, {
      'playerId': 23,
      'matchPlayerId': 107503,
      'jersey': 22,
      'name': 'Matthias',
      'surname': 'Plachta',
      'teamSide': 'home',
      'eventId': '10042',
      'realTime': '2020-12-19 16:57:58',
      'currentScore': '2:0',
      'scoreboardTime': '15:38',
      'period': '1',
      'shooting': false
    }, {
      'playerId': 23,
      'matchPlayerId': 107506,
      'jersey': 5,
      'name': 'Björn',
      'surname': 'Krupp',
      'teamSide': 'home',
      'eventId': '10043',
      'realTime': '2020-12-19 17:02:27',
      'currentScore': '3:0',
      'scoreboardTime': '17:46',
      'period': '1',
      'shooting': false
    }],
    'feedProvider': 'del',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
];

module.exports = json;
