/* eslint handle-callback-err: "off"*/

const seed = require('../../../scripts/seeder/seed');
const clean = require('../../../scripts/seeder/clean');

const faker = require('faker');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require(APP_ROOT_PATH + '/src/server');
const path = require('path');
const { Seeder } = require('mongo-seeding');
const SetupM = require('../../../src/models/setup');
const { upsertItem } = require('../../../src/middleware/db');
const TemplatesRecordsM = require('../../../src/models/template_records');

// eslint-disable-next-line no-unused-vars
const should = chai.should();
const expect = chai.expect;
const loginDetails = {
  email: 'user@user.com',
  password: '12345'
};
let token = '';
const createdID = [];
const name = faker.random.words();
const newName = faker.random.words();
const repeatedName = faker.random.words();

chai.use(chaiHttp);

const getLoginToken = () => {
  return new Promise((resolve, reject) => {
    chai
      .request(server)
      .post('/auth/login')
      .send(loginDetails)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('token');
        resolve(res.body.token);
      });
  });
};

describe('*********** TEMPLATES ***********', () => {

  before(async () => {
    MAINCONFIG.feeds.feedType = 'del';
  });

  beforeEach(async () => {
    await clean();
    await seed();



    const prepareAdlerPLayOffsSeasonGame = await upsertItem({ id: 2 }, SetupM, {
      body: {
        season: '2022',
        data: { 'season': '2022',
          'event': {
            "selectedTeamId": "2",
            "competitionId": "3",
            "competitionName": "DEL Playoffs",
            "type": "match",
            "homeTeamId": "2",
            "awayTeamId": "11",
            "side": "home",
            "eventId": "3030",
            "dateObj": "202130203023",
            "date": "24.03.2023",
            "time": "19:30",
            "start_date": "2023-03-24 19:30:00"
          }
        }
      }
    });

    //seed opta setup extra
    // const config = {
    //   database: process.env.MONGO_URI,
    //   inputPath: path.resolve(`${APP_ROOT_PATH}/scripts/seeder/data_opta`),
    //   dropDatabase: false,
    //   dropCollections: true
    // };
    //
    // const seeder = new Seeder(config);
    // let collections = seeder.readCollectionsFromPath(path.resolve(`${APP_ROOT_PATH}/scripts/seeder/data_opta`));
    // await seeder.import(collections).catch((err) => {
    //   console.log('Seed error!');
    // });
  });

  it('it should create all templates for whole matchday and pre-create timeline', async () => {
    const token = await getLoginToken().catch((err) => {
      console.log('err', err);
    });
    const doRequest = () => {
      return new Promise((resolve, reject) => {
        chai
          .request(server)
          .post('/actions/prepareMatchday')
          .set('Authorization', `Bearer ${token}`)
          .send('')
          .end((err, res) => {
            console.log('res.body', res.body);
            resolve();
          });
      });
    };

    await doRequest().catch((err) => {
      console.log(err);
    });


  }).timeout(45*1000);


  it('it prepare matchday timelines', async () => {

    const token = await getLoginToken().catch((err) => {
      console.log('err', err);
    });
    const doRequest = () => {
      return new Promise((resolve, reject) => {
        chai
          .request(server)
          .post('/actions/syncMatchdayTimelines')
          .set('Authorization', `Bearer ${token}`)
          .send('')
          .end((err, res) => {
            console.log('res.body', res.body);
            resolve();
          });
      });
    };

    await doRequest().catch((err) => {
      console.log(err);
    });


  });

  it('should get closest match', async () => {

    const token = await getLoginToken().catch((err) => {
      console.log('err', err);
    });
    const doRequest = () => {
      return new Promise((resolve, reject) => {
        chai
          .request(server)
          .get('/actions/closestMatch')
          .set('Authorization', `Bearer ${token}`)
          .send('')
          .end((err, res) => {
            console.log('res.body', res.body);

            expect(res.body).to.have.keys(['liveMatchDetails', 'matchdayTimelines', 'closestMatch'])
            resolve();
          });
      });
    };

    await doRequest().catch((err) => {
      console.log(err);
    });


  });
})
;
