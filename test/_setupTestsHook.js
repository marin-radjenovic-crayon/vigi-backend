process.env.NODE_ENV = 'test';
process.env.CLIENT_CFG = 'tests';
process.env.MONGO_URI = 'mongodb://localhost:27017/spovizz-api-test';
// process.env.MONGOMS_DEBUG=1

// assuming mongoose@5.x
const { MongoMemoryServer } = require('mongodb-memory-server');
const initMongo = require('../src/lib/mongo');
const mongoose = require('mongoose');

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const path = require('path');

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

const handleDelData = (url) => {
  const splitted = url.split('/');
  let dataPath = './ajaxMocker/feeds/del/' + url;
  let outputData = null;
  try {
    outputData = require(dataPath);
  } catch (err) {
    console.error("handleDelData", err);
  }

  return [200, outputData];
};

const handlePerformFeedsData = (url) => {
  const splitted = url.split('/');
  let dataPath = './ajaxMocker/feeds/performfeeds/' + url;
  let outputData = null;
  try {
    outputData = require(dataPath);
  } catch (err) {
    console.error("handle performfeeds", err);
  }

  return [200, outputData];
};

const handleOptaData = (url) => {
  const splitted = url.split('/');
  let dataPath = './ajaxMocker/feeds/opta/' + url;
  let outputData = null;
  try {
    outputData = require(dataPath);
  } catch (err) {
    console.error("handleOptaData", err);
  }

  return [200, outputData];
};

const handleWiseHockeyData = (url) => {
  const splitted = url.split('/');
  let dataPath = './ajaxMocker/feeds/wisehockey/' + url;
  let outputData = null;
  try {
    outputData = require(dataPath);
  } catch (err) {
    console.error("handleWiseHockeyData", err);
  }

  return [200, outputData];
};

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onPost('http://localhost:8100/v1/videos').reply(200, {
  id: '12-06-2021_15-23-32_0074-4565-afe5-b4e3f023a176',
  webhook: 'http://localhost:8100/v1/videos',
  pid: 425718,
  worker: 'bvr1',
  queue: 0
});

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('http://localhost:8100/v1/videos/TEST-VIDEO-0001').reply(200, [
  {
    'preview': null,
    'file': 'http:/localhost:8100/data/videos/10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426/production.mp4',
    'thumbnail': 'http:/localhost:8100/data/videos/10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426/thumbnail.png',
    'location': '10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426',
    'data': {
      '_date': '2021-06-10T20:15:08.935Z',
      '_call': 'run.sh -u "https://frontend.adler.scsv3.vigitalsolutions.com/frontend/#/videoproduction/template/adlerstartingsixlive/55?view=facebook&t=1610410988440" -s https://ia800201.us.archive.org/6/items/WeWillRockYou_95/08.Queen-WeWillRockYou-weAreTheChampions.mp3 -l 25 -i 10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426 -x 1080 -y 1080 -d 1'
    }
  }
]);

mock.onGet('http://localhost:8100/v1/videos/TEST-VIDEO-0002').reply(200, [
  {
    'preview': null,
    'file': 'http:/localhost:8100/data/videos/10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426/production.mp4',
    'thumbnail': 'http:/localhost:8100/data/videos/10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426/thumbnail.png',
    'location': '10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426',
    'data': {
      '_date': '2021-06-10T20:15:08.935Z',
      '_call': 'run.sh -u "https://frontend.adler.scsv3.vigitalsolutions.com/frontend/#/videoproduction/template/adlerstartingsixlive/55?view=facebook&t=1610410988440" -s https://ia800201.us.archive.org/6/items/WeWillRockYou_95/08.Queen-WeWillRockYou-weAreTheChampions.mp3 -l 25 -i 10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426 -x 1080 -y 1080 -d 1'
    }
  }
]);


// mock.onGet("https://s3-eu-west-1.amazonaws.com/de.hokejovyzapis.cz/tables/19.json").reply(200, [
//   {
//     "preview": null,
//     "file": "http:/localhost:8100/data/videos/10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426/production.mp4",
//     "thumbnail": "http:/localhost:8100/data/videos/10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426/thumbnail.png",
//     "location": "10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426",
//     "data": {
//       "_date": "2021-06-10T20:15:08.935Z",
//       "_call": "run.sh -u \"https://frontend.adler.scsv3.vigitalsolutions.com/frontend/#/videoproduction/template/adlerstartingsixlive/55?view=facebook&t=1610410988440\" -s https://ia800201.us.archive.org/6/items/WeWillRockYou_95/08.Queen-WeWillRockYou-weAreTheChampions.mp3 -l 25 -i 10-06-2021_20-13-05_3196-4a83-b959-fdacc75e0426 -x 1080 -y 1080 -d 1"
//     }
//   }
// ]);

mock.onAny().reply((config) => {
  console.log(`# MOCK CALL # [${config.method.toUpperCase()}]`, config.baseURL + config.url);
  if (config.baseURL === 'https://s3-eu-west-1.amazonaws.com/de.hokejovyzapis.cz/') {
    return handleDelData(config.url);
  }

  if (config.baseURL === 'https://origin-e57831uw2d12r5v4-cf.cdn.nativewaves.com/ext/') {
    return handleOptaData(config.url);
  }

  if (config.baseURL === 'https://api.del.wisehockey.com/v4.1/') {
    return handleWiseHockeyData(config.url);
  }

  if (config.baseURL === 'http://api.performfeeds.com/' || config.baseURL === 'https://api.performfeeds.com/') {
    return handlePerformFeedsData(config.url);
  }

  console.error('Feed URL handler not implemented', config.baseURL)


  return [204, { result: 'Not implemented' }];
});


// const mongoMemory = require('./functions/db/mongo_memory');
// const mongoMemoryClass = new mongoMemory();

global.LOGGER = require('../src/middleware/utils/logger').logger;
global.MAINCONFIG = require('../src/config');

exports.mochaHooks = {
  async beforeAll() {
    const unexpectedErrorHandler = (error) => {
      // throw error;
      LOGGER.error(error);
    };


    global._ = require('lodash');

    // console.log = ()=> {};

    process.on('uncaughtException', unexpectedErrorHandler);
    process.on('unhandledRejection', unexpectedErrorHandler);

    // LOGGER.info('beforeAll TEST');

    await initMongo();
    const seed = require('../scripts/seeder/seed');
    const clean = require('../scripts/seeder/clean');
    // await clean();
    // await seed();

    // await mongoMemoryClass.start();
    // loadModels();
    // await mongoMemoryClass.deleteAllCollections();
    // await mongoMemoryClass.createTestData();
    // process.env.APP_ROOT_PATH = require('path').resolve('.');
    // process.env.LOG_LEVEL = 'debug';
    // global.APP_ROOT_PATH = process.env.APP_ROOT_PATH;
    // global.APPURL = config.appUrl + ":" + config.port;


    // skip all tests for bob
    // if (require('os').userInfo().username === 'bob') {
    //   return this.skip();
    // }
  },
  async beforeEach() {
    // LOGGER.info('beforeEach TEST');
  },
  async afterAll() {
    // LOGGER.info('afterAll TEST');

    await mongoose.disconnect();
  },
  afterEach(done) {
    // LOGGER.info('afterEach TEST');
    done();
  }
};
