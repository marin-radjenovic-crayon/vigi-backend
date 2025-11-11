const seed = require('./seed');
require('module-alias/register');
// Define globals across the app
global.MAINCONFIG = require('../../src/config');
global.LOGGER = require('../../src/middleware/utils/logger').logger;

(async () => {
  try {
    await seed();
    console.log('Seed complete!');
  } catch (err) {
    console.error('Seed error:', err);
  }
})();
