const config = require('../../src/config');
const _ = require('lodash');
const FnFeedsClass = require('../../src/controllers/feeds/opta/functions');
const { Parser } = require('json2csv');
const { join, basename } = require('path');
const fs = require('fs');
const initMongo = require('../../src/lib/mongo');
const logger = require('../../src/middleware/utils/logger').logger;
global.LOGGER = logger;
const getTeamIds = async () => {
  try {
    await initMongo();
    const competitions = config.feeds.opta.competitions;
    const competition = competitions[0];

    //bundesliga 09.03.2024 Bayern MUnchen vs Mainz 05
    const FnFeeds = new FnFeedsClass({
      eventId: '6t4qgfp3vbyw6q4xa1pvx7ifo'
    });

    const indicator = config.feeds.opta.data.fixtures.matchevent;
    const dataCall = indicator.url.replace('[[EVENTID]]', '6t4qgfp3vbyw6q4xa1pvx7ifo');

    console.log('dataCall',dataCall)

    const dataRes = await FnFeeds.apiCall(
      {
        url: dataCall
      }
    );


    const outputDir = join(__dirname, './output');
    const outputFilePath = join(
      outputDir,
      basename('09_03_2024_Bayern_vs_Mainz_05.json')
    );
    fs.writeFileSync(outputFilePath, JSON.stringify(dataRes), err => {
      if (err) {
        console.error(`Error writing the CSV file (${outputFilePath}):`, err);
      } else {
        console.log(`CSV file successfully saved as ${outputFilePath}`);
      }
    });
  } catch (err) {
    console.error(`Error parsing JSON data from file ():`, err);
  }

  process.exit(0);
};

getTeamIds();
