const { transport } = require('./src/middleware/utils/logger');

module.exports = async () => {
  // Close the logger transport to ensure Jest doesn't hang
  console.log('Global teardown: Closing logger transport...');
  if (transport) {
    await transport.end();
  }
};
