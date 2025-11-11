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

    const FnFeeds = new FnFeedsClass({});

    for (const competition of competitions) {
      const apiCall = config.feeds.opta.data.tournament.contestants.url.replace(
        '[[LEAGUE]]',
        competition.competitionId
      );

      const callResults = await FnFeeds.apiCall({
        url: apiCall
      }).catch(err => {
        console.error('err', err);
      });

      const outputDir = join(__dirname, './output');

      const json = callResults?.contestant;

      const outputFilePathJson = join(
        outputDir,
        basename(`teams_${competition.competitionName.replaceAll(' ', '_')}_${competition.competitionId}`) + '.json'
      );

      fs.writeFileSync(outputFilePathJson, JSON.stringify(callResults, null, 2), err => {
        if (err) {
          console.error(`Error writing the JSON file (${outputFilePathJson}):`, err);
        } else {
          console.log(`CSV file successfully saved as ${outputFilePathJson}`);
        }
      });

      const parser = new Parser();
      const csv = parser.parse(json);

      const outputFilePath = join(
        outputDir,
        basename(`teams_${competition.competitionName.replaceAll(' ', '_')}_${competition.competitionId}`) + '.csv'
      );

      fs.writeFileSync(outputFilePath, csv, err => {
        if (err) {
          console.error(`Error writing the CSV file (${outputFilePath}):`, err);
        } else {
          console.log(`CSV file successfully saved as ${outputFilePath}`);
        }
      });
    }
  } catch (err) {
    console.error(`Error parsing JSON data from file ():`, err);
  }

  process.exit(0);
};

getTeamIds();
