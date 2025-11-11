const VodFeedClass = require('../../src/controllers/feeds/opta/vod-feed');
const tokenManager = require('../../src/lib/0auth');
const initMongo = require('../../src/lib/mongo');
const logger = require('../../src/middleware/utils/logger').logger;
global.LOGGER = logger;
require('module-alias/register');
global.MAINCONFIG = require('../../src/config');
const MediaM = require('../../src/models/media');
const { processMatchVideos } = require('../../src/controllers/vod/perform-stats');
const _ = require('lodash');
const { cleanUpVideos } = require('../../src/controllers/vod/perform-stats');

async function runVod(eventId = '3l33ewrflesuzst2hc2ddbfv8') {
  try {
    await initMongo();
    const { token } = await tokenManager.authenticate('vod');
    const tokenData = await tokenManager.authenticate('data');
    console.log('Authenticated with token:', token);
    console.log('Authenticated with tokenOpta:', tokenData.token);

    // const VodFeed = new VodFeedClass({ target: { eventId } });

    const VodFeed = new VodFeedClass({ target: { eventId } });
    const matchVideos = await VodFeed.getMatchVideos();

    // knownName: 'UEFA Champions League',
    //   tournamentCalendarId: 'eaf2z13av1rs0jbwnnxfapdec',
    //   id: '4oogyu6o156iphvdvphwpck10'

    //US MLS
    //MIAMI VS SAINT LOUIS 2.06.2024
    //EVENTID: d2pikh7uihqma5tcma5kgqt5g
    //CID: 287tckirbfj9nb8ar2k9r60vn


    //SWITZ VS GERMANY 1:1 UEFA 2024
    // a53ye9l1m8s40qeww82ivx6hg
    const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, {
      competitionId: '4lp7vq583c95jwjhaohqbl9g4'
    });
    await processMatchVideos(['a53ye9l1m8s40qeww82ivx6hg'], competitionConfig).catch(err => {
      console.error('processMatchVideos err', err);
    });

    // await cleanUpVideos({days: 5})

  } catch (err) {
    console.error('Error processing match videos:', err);
  }
}

runVod().then(() => process.exit(0));
