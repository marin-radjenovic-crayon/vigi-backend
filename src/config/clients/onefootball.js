const { CLIENTS } = require('@/src/constants/config');
const toMerge = {
  client: CLIENTS.OF,
  competitionId: '5mqc55tieqhbz2sech0fp70bu', // womansworldcup, AUTOUPDATER CALENDAR
  logToFile: true,
  liveUpdateOn: true,
  prepareMatchAndTimelineOn: false,
  feeds: {
    feedType: 'opta',
    opta: require('../onefootball/feedCfg'),
    heimspiel: require('../onefootball/heimspiel_de/config')
  },
  season: '2023',
  templates: require('../onefootball/templates'),
  matchdayTemplatesToCreate: require('../onefootball/matchdayTemplatesToCreate'),
  matchdayTimelines: require('../onefootball/matchdayTimelines'),
  dynamicTimelines: require('../onefootball/dynamic_timelines')
};
module.exports = toMerge;
