const faker = require('faker');
module.exports = {
  uuid: '2000',
  name: 'Timeline Welcome',
  format: '1920x1080',
  options: {
    mode: 'automatic'
  },
  data: {},
  templates: [
    {
      templateId: '0003',
      template: 'teamfacts',
      name: require('../../template_records/data/teamfacts_0003').name
    },
    {
      templateId: '0004',
      template: 'playercompare',
      name: require('../../template_records/data/playercompare_0004').name
    },
    {
      templateId: '0005',
      template: 'teamcompare',
      name: require('../../template_records/data/teamcompare_0005').name
    }
  ],
  usedTemplates: [
    'playerfacts',
    'playerstats',
    'teamfacts',
    'teamcompare',
    'playercompare'
  ],
  event: {
    'selectedTeamId': '11',
    'competitionId': '1',
    'competitionName': 'Bundesliga',
    'type': 'match',
    'homeTeamId': '11',
    'awayTeamId': '20',
    'side': 'home',
    'eventId': '1000',
    'date': '202130203023'
  },
  createdAt: new Date('2021-04-22T07:45:30.943Z'),
  updatedAt: new Date('2021-04-22T07:45:30.943Z')
};
