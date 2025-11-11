const { CLIENTS } = require('@/src/constants/config');
const toMerge = {
  client: CLIENTS.PERFORM_STATS,
  competitionId: '5mqc55tieqhbz2sech0fp70bu', // womansworldcup, AUTOUPDATER CALENDAR
  logToFile: true,
  liveUpdateOn: true,
  prepareMatchAndTimelineOn: true,
  feeds: {
    feedType: 'opta',
    opta: require('../opta_opta_dynamic/feedCfg'),
    heimspiel: require('../opta_opta_dynamic/heimspiel_de/config')
  },
  season: '2023',
  templates: require('../opta_opta_dynamic/templates'),
  matchdayTemplatesToCreate: require('../opta_opta_dynamic/matchdayTemplatesToCreate'),
  matchdayTimelines: require('../opta_opta_dynamic/matchdayTimelines'),
  dynamicTimelines: require('../opta_opta_dynamic/dynamic_timelines')
};
module.exports = toMerge;
