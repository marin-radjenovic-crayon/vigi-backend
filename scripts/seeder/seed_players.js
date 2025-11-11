require('../../src/config');
const initMongo = require(`${APP_ROOT_PATH}/src/lib/mongo`);

const path = require('path');
const _ = require('lodash');
const chalk = require('chalk');

const newPlayers = require('./data/media/adler_players_2022');

const runner = async () => {
  const mongoInstance = await initMongo().catch((err) => {
    console.log('#mongoInstance err', err);
  });

  const models = mongoInstance.models;

  return new Promise(async (resolve, reject) => {
    try {
      console.log('mongoInstance.db.collection', mongoInstance.models.media);
      await models.media.insertMany(newPlayers);

      await mongoInstance.connection.close();
      resolve();
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};


runner();
