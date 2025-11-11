const config = require('../../src/config');
const _ = require('lodash');
const FnFeedsClass = require('../../src/controllers/feeds/opta/functions');
const { Parser } = require('json2csv');
const { join, basename } = require('path');
const fs = require('fs');
const initMongo = require('../../src/lib/mongo');
const logger = require('../../src/middleware/utils/logger').logger;
global.LOGGER = logger;
const getCompetitions = async () => {
  try {
    await initMongo();
      const FnFeeds = new FnFeedsClass({});
      const apiCall = config.feeds.opta.data.tournament.active.url

      const callResults = await FnFeeds.apiCall({
        url: apiCall
      }).catch(err => {
        console.error('err', err);
      });

      const outputDir = join(__dirname, './output');

      const json = callResults?.contestant;

      const outputFilePathJson = join(
        outputDir,
        basename(`activated_competitions`) + '.json'
      );

      fs.writeFileSync(outputFilePathJson, JSON.stringify(callResults, null, 2), err => {
        if (err) {
          console.error(`Error writing the JSON file (${outputFilePathJson}):`, err);
        } else {
          console.log(`CSV file successfully saved as ${outputFilePathJson}`);
        }
      });
  } catch (err) {
    console.error(`Error parsing JSON data from file ():`, err);
  }

  process.exit(0);
};

getCompetitions();
