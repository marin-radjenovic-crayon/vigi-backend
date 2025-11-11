const { CLIENTS } = require('@/src/constants/config');
const toMerge = {
  client: CLIENTS.ADLER,
  logToFile: false,
  liveUpdateOn: false,
  prepareMatchAndTimelineOn: false,
  feeds: {
    feedType: 'del',
    del: require('../del/feedCfg'),
    wiseHockey: require('../wisehockey/feedCfg')
  },
  season: '2024'
  // templates: require('../opta_goldcup/templates'),
  // matchdayTemplatesToCreate: require('../opta_goldcup/matchdayTemplatesToCreate'),
  // matchdayTimelines: require('../opta_goldcup/matchdayTimelines')
};

module.exports = toMerge;
