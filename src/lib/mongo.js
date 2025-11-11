const mongoose = require('mongoose');
const loadModels = require('../models');
// const { MongoMemoryServer } = require('mongodb-memory-server');
// const mongoMemory = require('../../test/functions/db/mongo_memory');
// const instance = new mongoMemory();

const connect = async () => {
  mongoose.connection
    .on('error', error => {
      LOGGER.error(error, '###MONGO error')
    })
    .on('open', () => {
      LOGGER.info('###MONGO CONNECTED###');
    })
    .on('connecting', () => {
      LOGGER.info('###MONGO CONNECTING...### %s', process.env.MONGO_URI);
    })
    .on('disconnected', () => {
      LOGGER.info('###MONGO DISCONNECTED###');
    });
  // mongoose.pluralize(null);
  const connection = mongoose
    .connect(process.env.MONGO_URI, {
      autoIndex: true,
      maxPoolSize: 200,
      socketTimeoutMS: 15000
    })
    .catch(err => {
      LOGGER.error(err, 'Mongo connection error')
      let dbStatus = '';
      if (err) {
        dbStatus = `*    Error connecting to DB: ${err}\n****************************\n`;
      }
      dbStatus = `*    DB Connection: OK\n****************************\n`;
      if (process.env.NODE_ENV !== 'test') {
        // Prints initialization
        console.log('****************************');
        console.log('*    Starting Server');
        console.log(`*    Port: ${process.env.PORT || 3000}`);
        console.log(`*    NODE_ENV: ${process.env.NODE_ENV}`);
        console.log(`*    Database: MongoDB`);
        console.log(dbStatus);
      }
    });
};

module.exports = async () => {
  return new Promise(async (resolve, reject) => {
    if (mongoose.connection.readyState >= 1) {
      resolve(mongoose);
      return;
    }

    if (process.env.NODE_ENV === 'test') {
      //memory db
      // await instance.start().catch((err) => {
      //   console.log('##err', err);
      //   reject();
      // });

      //real db
      await connect();
    } else {
      await connect();
    }

    loadModels();

    resolve(mongoose);
  });
};
