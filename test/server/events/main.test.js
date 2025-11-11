/* eslint handle-callback-err: "off"*/

const seed = require('../../../scripts/seeder/seed');
const clean = require('../../../scripts/seeder/clean');

const faker = require('faker');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require(APP_ROOT_PATH + '/src/server');
// eslint-disable-next-line no-unused-vars
const should = chai.should();
const expect = chai.expect;
const loginDetails = {
  email: 'user@user.com',
  password: '12345'
};
let token = '';
const createdID = [];

chai.use(chaiHttp);

const getLoginToken = () => {
  return new Promise((resolve, reject) => {
    chai
      .request(server)
      .post('/auth/login')
      .send(loginDetails)
      .end((err, res) => {
        // res.should.have.status(200);
        // res.body.should.be.an('object');
        // res.body.should.have.property('token');

        // resolve(res.body.token);

        if (res.body.token) {
          resolve(res.body.token);
        }
        else {
          resolve(res.body);
        }


      });
  });
};

describe('*********** EVENTS DEL ***********', () => {

  beforeEach = async () => {
    await clean();
    await seed();
  };


  describe('getEvents', () => {
    it('it should return default entry from setup when no params defined', async () => {

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const id = '1';
          chai
            .request(server)
            .get(`/events`)
            .set('Authorization', `Bearer ${token}`)
            .end((error, res) => {

              // console.log({error, res: res.body});

              // console.log('res.body', res.body);

              // res.should.have.status(200);
              expect(res.body.match.eventId).to.be.equal('1821');
              expect(res.body.competitions).to.have.lengthOf(2);
              expect(res.body.matches).to.have.lengthOf(38);

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });


    });

    it('it should return teams when CID is defined, check logo', async () => {

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const cid = '1';
          chai
            .request(server)
            .get(`/events/${cid}`)
            .set('Authorization', `Bearer ${token}`)
            .end((error, res) => {
              console.log('res.body', res.body);

              res.should.have.status(200);

              expect(res.body.competitions).to.have.lengthOf(2);
              expect(res.body.teams).to.have.length.above(5);
              // console.log("res.body.teams[0]", res.body.teams[0]);

              expect(res.body.teams[0].logo).to.not.be.empty;
              expect(res.body.matches).to.have.lengthOf(0);
              expect(res.body.match).to.be.undefined;

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });


    });

    it('it should return matches when CID/TID is defined', async () => {

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const cid = '1';
          const tid = '2';
          chai
            .request(server)
            .get(`/events/${cid}/${tid}`)
            .set('Authorization', `Bearer ${token}`)
            .end((error, res) => {
              res.should.have.status(200);
              expect(res.body.competitions).to.have.lengthOf(2);
              expect(res.body.teams).to.have.length.above(5);
              expect(res.body.matches).to.have.length.above(15);
              expect(res.body.match).to.be.undefined;

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });


    });


    it('it should return selected match when CID/TID/MID is defined', async () => {

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const cid = '1';
          const tid = '2';
          const mid = '1821';
          chai
            .request(server)
            .get(`/events/${cid}/${tid}/${mid}`)
            .set('Authorization', `Bearer ${token}`)
            .end((error, res) => {
              console.log('res.body', res.body);

              res.should.have.status(200);

              expect(res.body.competitions).to.have.lengthOf(2);
              expect(res.body.teams).to.have.length.above(10);
              expect(res.body.matches).to.have.length.above(4);
              expect(res.body.match.eventId).to.be.equal(mid);

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });

    });
  });
})
;
describe.only('*********** EVENTS OPTA ***********', () => {

  before(async () => {
    MAINCONFIG.feeds.feedType = 'opta'
  });

  beforeEach = async () => {
    await clean();
    await seed();
  };


  describe('getEvents', () => {
    it('it should return default entry from setup when no params defined', async () => {

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const id = '1';
          chai
            .request(server)
            .get(`/events`)
            .set('Authorization', `Bearer ${token}`)
            .end((error, res) => {

              console.log({error, res: res.body});

              console.log('res.body', res.body);

              // res.should.have.status(200);
              expect(res.body.match.eventId).to.be.equal('1821');
              expect(res.body.competitions).to.have.lengthOf(1);
              expect(res.body.matches).to.have.lengthOf(38);

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });


    });

    it('it should return teams when CID is defined, check logo', async () => {

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const cid = '1';
          chai
            .request(server)
            .get(`/events/${cid}`)
            .set('Authorization', `Bearer ${token}`)
            .end((error, res) => {
              console.log('res.body', res.body);

              res.should.have.status(200);

              expect(res.body.competitions).to.have.lengthOf(1);
              expect(res.body.teams).to.have.length.above(5);
              // console.log("res.body.teams[0]", res.body.teams[0]);

              expect(res.body.teams[0].logo).to.not.be.empty;
              expect(res.body.matches).to.have.lengthOf(0);
              expect(res.body.match).to.be.undefined;

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });


    });

    it('it should return matches when CID/TID is defined', async () => {

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const cid = '1';
          const tid = '2';
          chai
            .request(server)
            .get(`/events/${cid}/${tid}`)
            .set('Authorization', `Bearer ${token}`)
            .end((error, res) => {
              res.should.have.status(200);
              expect(res.body.competitions).to.have.lengthOf(2);
              expect(res.body.teams).to.have.length.above(5);
              expect(res.body.matches).to.have.length.above(15);
              expect(res.body.match).to.be.undefined;

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });


    });


    it('it should return selected match when CID/TID/MID is defined', async () => {

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const cid = '1';
          const tid = '2';
          const mid = '1821';
          chai
            .request(server)
            .get(`/events/${cid}/${tid}/${mid}`)
            .set('Authorization', `Bearer ${token}`)
            .end((error, res) => {
              console.log('res.body', res.body);

              res.should.have.status(200);

              expect(res.body.competitions).to.have.lengthOf(2);
              expect(res.body.teams).to.have.length.above(10);
              expect(res.body.matches).to.have.length.above(4);
              expect(res.body.match.eventId).to.be.equal(mid);

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });

    });
  });
})
;
