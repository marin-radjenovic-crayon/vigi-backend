const baseConfig = require('./samsung');
const { CLIENTS } = require('@/src/constants/config');

module.exports = {
  ...baseConfig,
  client: CLIENTS.PERFORM_STATS,
  liveUpdateOn: false
};
