require('module-alias/register');
// Define globals across the app
global.MAINCONFIG = require('@/src/config');
global.LOGGER = require('@/src/middleware/utils/logger').logger;

const initMongo = require('../../../../src/lib/mongo');

module.exports = async job => {
  try {
    await initMongo();
    const data = job?.data;
    const updaterClass = require('../../../controllers/updater/optaUpdater');

    const instance = new updaterClass();

    return await instance.processCompetitionVods(data.competition, {});
  } catch (error) {
    LOGGER.error(error, 'Error PSVideos');
    throw error;
  }
};
