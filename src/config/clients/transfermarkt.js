const { CLIENTS } = require('@/src/constants/config');
const toMerge = {
  client: CLIENTS.TRANSFERMARKT,
  competitionId: '5mqc55tieqhbz2sech0fp70bu', // womansworldcup, AUTOUPDATER CALENDAR
  logToFile: false,
  liveUpdateOn: false,
  prepareMatchAndTimelineOn: false,
  feeds: {
    feedType: 'opta',
    opta: require('../transfermarkt/feedCfg')
  },
  season: '2024',
  templates: require('../transfermarkt/templates'),
  matchdayTemplatesToCreate: require('../transfermarkt/matchdayTemplatesToCreate'),
  matchdayTimelines: require('../transfermarkt/matchdayTimelines'),
  dynamicTimelines: require('../transfermarkt/dynamic_timelines')
};
module.exports = toMerge;
