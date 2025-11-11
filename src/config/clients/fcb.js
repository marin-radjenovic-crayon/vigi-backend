const { CLIENTS } = require('@/src/constants/config');
const toMerge = {
  client: CLIENTS.FCB,
  competitionId: '5mqc55tieqhbz2sech0fp70bu', // womansworldcup, AUTOUPDATER CALENDAR
  logToFile: false,
  liveUpdateOn: true,
  prepareMatchAndTimelineOn: false,
  feeds: {
    feedType: 'opta',
    opta: require('../fcb/feedCfg')
  },
  season: '2024',
  templates: require('../fcb/templates'),
  matchdayTemplatesToCreate: require('../fcb/matchdayTemplatesToCreate'),
  matchdayTimelines: require('../fcb/matchdayTimelines'),
  dynamicTimelines: require('../fcb/dynamic_timelines')
};
module.exports = toMerge;
