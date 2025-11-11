const { CLIENTS } = require('@/src/constants/config');
const toMerge = {
  client: CLIENTS.BILD,
  competitionId: '5mqc55tieqhbz2sech0fp70bu', // womansworldcup, AUTOUPDATER CALENDAR
  logToFile: false,
  liveUpdateOn: false,
  prepareMatchAndTimelineOn: false,
  feeds: {
    feedType: 'opta',
    opta: require('../bild/feedCfg')
  },
  season: '2024',
  templates: require('../bild/templates'),
  matchdayTemplatesToCreate: require('../bild/matchdayTemplatesToCreate'),
  matchdayTimelines: require('../bild/matchdayTimelines'),
  dynamicTimelines: require('../bild/dynamic_timelines')
};
module.exports = toMerge;
