const mainConfig = require('../../../src/config');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
_ = require('lodash');

const { Seeder } = require('mongo-seeding');
const path = require('path');
const loadModels = require('../../../src/models');

class DBManager {
  constructor() {
    this.documents = null;
    this.models = [];
    this.connection = null;
    this.uri = null;
  }

  async start() {
    const mongoServer = await MongoMemoryServer.create();
    this.uri = mongoServer.getUri();
    process.env.MONGO_URI = this.uri;
    // //dont show query logs
    mongoose.set('debug', true);

    this.connection = await mongoose.connect(this.uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }, (err) => {
      if (err) {
        LOGGER.error(err.message);
      }
    });
  }

  async stop() {
    await mongoose.disconnect();
    return await mongoServer.stop();
  }
}

module.exports = DBManager;
