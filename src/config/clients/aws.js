const baseConfig = require('./opta_opta_dynamic');
const { CLIENTS } = require('@/src/constants/config');

module.exports = {
  ...baseConfig,
  client: CLIENTS.AWS
};
