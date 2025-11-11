require('../../src/config');
const initMongo = require(`${APP_ROOT_PATH}/src/lib/mongo`);

const { Seeder } = require('mongo-seeding');
const path = require('path');
const _ = require('lodash');

module.exports = async (clientType, targetCollections) => {
  const chalkModule = (await import('chalk')).Chalk;
  const chalk = new chalkModule();

  console.log('chalk', chalk);

  const mongoInstance = await initMongo().catch(err => {
    console.log('#mongoInstance err', err);
  });

  const argv = {};
  process.argv.forEach((val, index, array) => {
    if (index > 1) {
      const splitted = val.split('=');
      argv[splitted[0]] = splitted[1];
    }
  });

  let dataLocation = process.env.NODE_ENV === 'test' ? 'data_test' : 'data';

  console.log('clientType', clientType);

  if (argv.client) {
    dataLocation = 'data_' + argv.client;
  }

  if (clientType) {
    dataLocation = 'data_' + clientType;
  }

  console.log('###dataLocation### ->', dataLocation);

  const config = {
    database: process.env.MONGO_URI,
    inputPath: path.resolve(`${APP_ROOT_PATH}/scripts/seeder/${dataLocation}`),
    dropDatabase: false,
    dropCollections: false
  };

  const seeder = new Seeder(config);
  let collections = seeder.readCollectionsFromPath(path.resolve(`${APP_ROOT_PATH}/scripts/seeder/${dataLocation}`));

  //select which collection to seed
  if (argv.collections) {
    collections = _.filter(collections, item => {
      if (argv.collections.indexOf(item.name) > -1) {
        console.log(chalk.green('SEED SELECTED:', item.name));
        return true;
      }
      return false;
    });
  } else {
    console.log(chalk.green('SEED ALL'));
  }

  if (targetCollections) {
    collections = _.filter(collections, item => {
      if (targetCollections.indexOf(item.name) > -1) {
        console.log(chalk.green('SEED SELECTED:', item.name));
        return true;
      }
      return false;
    });
  }

  return new Promise(async (resolve, reject) => {
    const isInTest = typeof global.it === 'function';
    try {
      await seeder.import(collections).catch(err => {
        console.log('Seed error!');
        reject(err);
      });
      console.log('Seed complete!');
      if (!isInTest) {
        await mongoInstance.connection.close();
      }
      resolve();
    } catch (err) {
      console.log(err);
      if (!isInTest) {
        await mongoInstance.connection.close();
      }
      reject(err);
    }
  });
};
