require('module-alias/register');
// Define globals across the app
global.MAINCONFIG = require('@/src/config');
global.LOGGER = require('@/src/middleware/utils/logger').logger;

const initMongo = require('../../../../src/lib/mongo');
const { processMatchVideos } = require('@/src/controllers/vod/heimspiel');

module.exports = async job => {
  await initMongo();
  // Do something with job
  const data = job?.data;

  return await processMatchVideos();
};
