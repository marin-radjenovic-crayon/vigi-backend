const VodFeedClass = require('../../src/controllers/feeds/heimspiel/vod-feed');
const tokenManager = require('../../src/lib/0auth');
const initMongo = require('../../src/lib/mongo');
const logger = require('../../src/middleware/utils/logger').logger;
global.LOGGER = logger;
require('module-alias/register');
global.MAINCONFIG = require('../../src/config');
const MediaM = require('../../src/models/media');
const { processMatchVideos, cleanUpVideos } = require('../../src/controllers/vod/heimspiel');
const _ = require('lodash');

async function runVod(eventId = '3l33ewrflesuzst2hc2ddbfv8') {
  try {
    await initMongo();
    const { token } = await tokenManager.authenticate('vod');
    const tokenData = await tokenManager.authenticate('data');
    console.log('Authenticated with token:', token);
    console.log('Authenticated with tokenOpta:', tokenData.token);

    // const VodFeed = new VodFeedClass({ target: { eventId } });

    // const VodFeed = new VodFeedClass({ target: {} });
    // const matchVideos = await VodFeed.getOlympicsVideos();
    //
    // console.log('##matchVideos', matchVideos);

    await processMatchVideos().catch(err => {
      console.error('processMatchVideos err', err);
    });

    // await cleanUpVideos({days: 5})
  } catch (err) {
    console.error('Error processing match videos:', err);
  }
}

runVod().then(() => process.exit(0));
