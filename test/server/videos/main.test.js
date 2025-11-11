/* eslint handle-callback-err: "off"*/

const faker = require('faker');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require(`${APP_ROOT_PATH}/src/server`);
// eslint-disable-next-line no-unused-vars
const should = chai.should();
const expect = chai.expect;
const loginDetails = {
  email: 'user@user.com',
  password: '12345'
};
const token = '';
const createdID = [];

const VideosM = require('../../../src/models/videos');
const TemplateRecordsM = require('../../../src/models/template_records');
const TimelineRecordsM = require('../../../src/models/timeline_records');
const DB = require('../../../src/middleware/db');
const clean = require('../../../scripts/seeder/clean');
const seed = require('../../../scripts/seeder/seed');

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

  before(async function () {
    await clean();
    await seed();
  });

  describe('/GET videos', () => {
    // it('it should NOT be able to consume the route since no token was sent', (done) => {
    //   chai
    //     .request(server)
    //     .get('/videos')
    //     .end((err, res) => {
    //       res.should.have.status(401);
    //       done();
    //     });
    // });
    it('it should GET all the videos', (done) => {
      chai
        .request(server)
        .get('/videos/all')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.an('array').length.above(2);
          done();
        });
    });
    it('it should GET the videos with filters', (done) => {
      chai
        .request(server)
        .get('/videos?filter={"uuid":"TEST-VIDEO-0002"}')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          console.log('res.body', res.body);
          console.log('err', err);

          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.docs.should.be.a('array');
          res.body.docs.should.have.lengthOf(1);
          res.body.docs[0].should.have.property('uuid').eql('TEST-VIDEO-0002');
          done();
        });
    });
  });

  describe('/POST video TEMPLATE', () => {
    it('it should POST a video TEMPLATE', async () => {
      const backendPostData = {
        template_uuid: '0001',
        template_name: 'playerfacts',
        name: 'Player Facts (04.06)',
        format: '1920x1080',
        event: {
          selectedTeamId: '11',
          competitionId: '1',
          competitionName: 'Bundesliga',
          type: 'match',
          homeTeamId: '11',
          awayTeamId: '20',
          side: 'home',
          eventId: '1000',
          dateObj: '202130203023'
        },
        videoquery: {
          url: 'http://localhost:3001/frontend/video/playerfacts/0001',
          seconds: 10,
          webhook: 'http://localhost:3000/webhook/videoproduction',
          sound: 'http://localhost:3000/upload/general/audio/queen_we_will_rock_you.mp3',
          width: 1920,
          height: 1080
        }
      };

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          chai
            .request(server)
            .post('/videos/template')
            .set('Authorization', `Bearer ${token}`)
            .send(backendPostData)
            .end(async (err, res) => {
              console.log('res.body', res.body);
              res.should.have.status(201);
              res.body.should.be.a('object');
              res.body.should.include.keys('_id', 'name');

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });

      const dbRecordTemplate = await DB.getItem({ uuid: backendPostData.template_uuid }, TemplateRecordsM);

      console.log('dbRecordTemplate.data', dbRecordTemplate.data);

      expect(dbRecordTemplate.data.videos['1920x1080'].uuid).to.be.not.empty;
      expect(dbRecordTemplate.data.videos['1920x1080'].status).to.be.equal('sent');
    });

    it('it should POST webhook from video server TEMPLATE', async () => {
      const videoProductionWebhook = {
        uuid: 'TEST-VIDEO-0001',
        info: {
          _date: '2021-06-04'
        },
        pid: '5435',
        worker: 'bvr1'
      };

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          chai
            .request(server)
            .post('/webhook/videoproduction')
            .set('Authorization', `Bearer ${token}`)
            .send(videoProductionWebhook)
            .end(async (err, res) => {
              console.log('res.body', res.body);
              res.should.have.status(200);
              expect(res.body.msg).to.be.equal('success');
              expect(res.body.data).should.be.a('object');

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });

      // const dbRecordTemplate = await DB.getItem({uuid: videoProductionWebhook.template_uuid}, TemplateRecordsM)
      //
      // expect(dbRecordTemplate.data.videos["1920x1080"].uuid).to.be.not.empty;
      // expect(dbRecordTemplate.data.videos["1920x1080"].status).to.be.equal('sent');
    });
  });

  describe('/POST video TIMELINE', () => {
    it('it should POST a video TIMELINE', async () => {
      const backendPostData = {
        timeline_uuid: '1000',
        name: 'Timeline First-Half',
        format: '1920x1080',
        event: {
          selectedTeamId: '11',
          competitionId: '1',
          competitionName: 'Bundesliga',
          type: 'match',
          homeTeamId: '11',
          awayTeamId: '20',
          side: 'home',
          eventId: '1000'
        },
        videoquery: {
          url: 'http://localhost:3001/frontend/video/timeline/1000',
          webhook: 'http://localhost:3000/webhook/videoproduction',
          width: 1920,
          height: 1080
        }
      };

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          chai
            .request(server)
            .post('/videos/timeline')
            .set('Authorization', `Bearer ${token}`)
            .send(backendPostData)
            .end(async (err, res) => {
              console.log('res.body', res.body);
              res.should.have.status(201);
              res.body.should.be.a('object');
              res.body.should.include.keys('_id', 'name');

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });

      const dbRecordTemplate = await DB.getItem({ uuid: backendPostData.timeline_uuid }, TimelineRecordsM);

      expect(dbRecordTemplate.data.videos['1920x1080'].uuid).to.be.not.empty;
      expect(dbRecordTemplate.data.videos['1920x1080'].status).to.be.equal('sent');
    });

    it('it should POST webhook from video server TIMELINE', async () => {
      const videoProductionWebhook = {
        uuid: 'TEST-VIDEO-0002',
        info: {
          _date: '2021-06-04'
        },
        pid: '5435',
        worker: 'bvr1'
      };

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          chai
            .request(server)
            .post('/webhook/videoproduction')
            .set('Authorization', `Bearer ${token}`)
            .send(videoProductionWebhook)
            .end(async (err, res) => {
              console.log('res.body', res.body);
              res.should.have.status(200);
              expect(res.body.msg).to.be.equal('success');
              expect(res.body.data).should.be.a('object');

              const dbRecordTemplate = await DB.getItem({ uuid: '1000' }, TimelineRecordsM);

              expect(dbRecordTemplate.templates).to.have.length.above(0);

              console.log('dbRecordTemplate.data', dbRecordTemplate.data);

              expect(dbRecordTemplate.data.videos['1920x1080'].status).to.be.equal('ready');

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });


    });
  });

  describe('/GET/:id template', () => {
    it('it should TEMPLATE by the UUID id', async () => {
      const id = 'TEST-VIDEO-0002';

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          chai
            .request(server)
            .get(`/videos/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .end((error, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('name');
              res.body.should.have.property('uuid').eql(id);
              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });
    });
  });

  describe('/PATCH/:id template', () => {
    it('it should UPDATE a template given the id', async () => {
      const id = 'TEST-VIDEO-0002';
      const newName = 'Video 1 Updated';


      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          chai
            .request(server)
            .patch(`/videos/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
              name: newName
            })
            .end((error, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('uuid').eql(id);
              res.body.should.have.property('name').eql(newName);
              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });
    });
    it('it should return and error when item not exist', async () => {
      const id = '000000-0000-0000-1000';
      const newName = 'Record 1 Updated';

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          chai
            .request(server)
            .patch(`/videos/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
              name: newName
            })
            .end((error, res) => {
              res.should.have.status(404);
              res.body.should.be.a('object');
              // console.log("res.body", res.body)
              expect(res.body).has.key('errors');
              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });
    });
  });

  describe('/DELETE template', () => {
    it('it should DELETE a template by req.body = only one', async () => {
      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            uuid: 'TEST-VIDEO-0002'
          };
          chai
            .request(server)
            .delete('/videos')
            .set('Authorization', `Bearer ${token}`)
            .send(postData)
            .end((err, res) => {
              console.log('res.body', res.body);
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('meta').eql('DELETED');
              expect(res.body.data.deletedCount).to.be.equal(1);
              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });
    });

    it('it should DELETE a template by req.body = by season', async () => {
      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            season: '2020'
          };
          chai
            .request(server)
            .delete('/videos')
            .set('Authorization', `Bearer ${token}`)
            .send(postData)
            .end((err, res) => {
              console.log('res.body', res.body);
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('meta').eql('DELETED');
              expect(res.body.data.deletedCount).to.be.equal(4);
              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });
    });
  });
});

