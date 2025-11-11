const { CLIENTS } = require('@/src/constants/config');
const toMerge = {
  client: CLIENTS.PERFORM_STATS,
  competitionId: '5mqc55tieqhbz2sech0fp70bu', // womansworldcup, AUTOUPDATER CALENDAR
  logToFile: true,
  liveUpdateOn: true,
  prepareMatchAndTimelineOn: false,
  feeds: {
    feedType: 'opta',
    opta: require('../samsung/feedCfg'),
    heimspiel: require('../samsung/heimspiel_de/config')
  },
  season: '2023',
  templates: require('../samsung/templates'),
  matchdayTemplatesToCreate: require('../samsung/matchdayTemplatesToCreate'),
  matchdayTimelines: require('../samsung/matchdayTimelines'),
  dynamicTimelines: require('../samsung/dynamic_timelines')
};
module.exports = toMerge;
