const { CLIENTS } = require('@/src/constants/config');
const toMerge = {
  client: CLIENTS.SHOWCASE,
  competitionId: '5mqc55tieqhbz2sech0fp70bu', // womansworldcup, AUTOUPDATER CALENDAR
  logToFile: false,
  liveUpdateOn: false,
  prepareMatchAndTimelineOn: false,
  feeds: {
    feedType: 'opta',
    opta: require('../showcase/feedCfg')
  },
  season: '2023',
  templates: require('../showcase/templates'),
  matchdayTemplatesToCreate: require('../showcase/matchdayTemplatesToCreate'),
  matchdayTimelines: require('../showcase/matchdayTimelines'),
  dynamicTimelines: require('../showcase/dynamic_timelines')
};
module.exports = toMerge;
