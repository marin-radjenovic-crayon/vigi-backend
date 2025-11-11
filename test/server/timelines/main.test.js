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

const MainModel = require('../../../src/models/timeline_records');
const DB = require('../../../src/middleware/db');

chai.use(chaiHttp);

const getLoginToken = () => {
  return new Promise((resolve, reject) => {
    chai
      .request(server)
      .post('/auth/login')
      .send(loginDetails)
      .end((err, res) => {


        console.log('res', res.body);
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('token');
        resolve(res.body.token);
      });
  });
};

const routeBase = 'timelines';

describe('*********** TIMELINE ***********', () => {

  beforeEach = async () => {
    await clean();
    await seed();
  };

  describe('/GET timelines', () => {
    // it('it should NOT be able to consume the route since no token was sent', (done) => {
    //   chai
    //     .request(server)
    //     .get('/videos')
    //     .end((err, res) => {
    //       res.should.have.status(401);
    //       done();
    //     });
    // });
    it('it should GET all the timelines', (done) => {
      chai
        .request(server)
        .get(`/${routeBase}/all`)
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.an('array').lengthOf(3);
          done();
        });
    });
    it('it should GET the videos with filters', (done) => {
      chai
        .request(server)
        .get(`/${routeBase}?filter={"name": "Timeline First-Half"}`)
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {

          // console.log('res.body', res.body)
          // console.log('err', err);

          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.docs.should.be.a('array');
          res.body.docs.should.have.lengthOf(1);
          res.body.docs[0].should.have.property('name').eql('Timeline First-Half');
          done();
        });
    });
  });

  describe('/POST timeline', () => {
    it('it should POST a timeline ', async () => {

      const postData = {
        uuid: '5000',
        name: 'Timeline post test',
        format: '1920x1080',
        options: {
          mode: 'automatic'
        },
        templates: [
          {
            templateId: '0002',
            template: 'playerstats'
          },
          {
            templateId: '0003',
            template: 'teamfacts'
          },
          {
            templateId: '0004',
            template: 'playercompare'
          },
          {
            templateId: '0005',
            template: 'teamcompare'
          }
        ],
        usedTemplates: [
          'playerfacts',
          'playerstats',
          'teamfacts',
          'teamcompare',
          'playercompare'
        ],
        event: {
          'selectedTeamId': '11',
          'competitionId': '1',
          'competitionName': 'Bundesliga',
          'type': 'match',
          'homeTeamId': '11',
          'awayTeamId': '20',
          'side': 'home',
          'id': '10001',
          'date': '202130203023'
        }
      };

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {

          chai
            .request(server)
            .post(`/${routeBase}`)
            .set('Authorization', `Bearer ${token}`)
            .send(postData)
            .end(async (err, res) => {
              console.log('res.body', res.body);
              res.should.have.status(201);
              res.body.should.be.a('object');
              res.body.should.include.keys('_id', 'name');

              createdID.push(res.body._id);

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });

      const dbRecord = await DB.getItem({ uuid: postData.uuid }, MainModel);

      expect(dbRecord.name).to.be.equal('Timeline post test');
      expect(dbRecord.event).to.be.an('object');
      expect(dbRecord.templates[0]).to.deep.equal({
        templateId: '0002',
        template: 'playerstats'
      });
      // console.log('dbRecord', dbRecord)


    });

  })
  ;

  describe('/GET/:id timeline', () => {
    it('it should TEMPLATE by the UUID id', (done) => {
      const id = '2000';
      chai
        .request(server)
        .get(`/${routeBase}/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .end((error, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.should.have.property('uuid').eql(id);
          done();
        });
    });
  });

  describe('/PATCH/:id timeline', () => {
    it('it should UPDATE a timeline given the id', async () => {
      const id = '1000';
      const newName = 'Timeline 1 Updated';

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            uuid: '3000'
          };
          chai
            .request(server)
            .patch(`/${routeBase}/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
              name: newName,
              templates: [
                {
                  templateId: '0004',
                  template: 'playercompare'
                },
                {
                  templateId: '0005',
                  template: 'teamcompare'
                }
              ]
            })
            .end((error, res) => {
              // console.log("error", error);
              console.log('res', res.body);

              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('uuid').eql(id);
              res.body.should.have.property('name').eql(newName);

              console.log('2021-04-22T07:45:30.943Z', res.body.updatedAt);
              expect(res.body.updatedAt).to.not.be.equal('2021-04-22T07:45:30.943Z');
              // console.log("res.body", res.body.updatedAt);

              expect(res.body.templates).has.lengthOf(2);
              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });

    });
    it('it should return and error when item not exist', async () => {
      const token = await getLoginToken();

      const id = '000000-0000-0000-1000';
      const newName = 'Timeline 1 Updated';

      const doRequest = () => {
        return new Promise((resolve, reject) => {
          chai
            .request(server)
            .patch(`/${routeBase}/${id}`)
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
            uuid: '3000'
          };
          chai
            .request(server)
            .delete(`/${routeBase}`)
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

    it('it should DELETE a timeline by req.body = by names', async () => {
      await clean();
      await seed();

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            uuid: ['1000', '2000']
          };
          chai
            .request(server)
            .delete(`/${routeBase}`)
            .set('Authorization', `Bearer ${token}`)
            .send(postData)
            .end((err, res) => {
              console.log('res.body', res.body);
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('meta').eql('DELETED');
              expect(res.body.data.deletedCount).to.be.equal(2);
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
