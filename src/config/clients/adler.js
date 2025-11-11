const { CLIENTS } = require('@/src/constants/config');
const toMerge = {
  client: CLIENTS.ADLER,
  logToFile: true,
  liveUpdateOn: true,
  prepareMatchAndTimelineOn: false,
  feeds: {
    feedType: 'del',
    del: require('../del/feedCfg'),
    wiseHockey: require('../wisehockey/feedCfg')
  },
  season: '2024'
};

module.exports = toMerge;
