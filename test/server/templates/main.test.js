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

  beforeEach = async () => {
    await clean();
    await seed();
  };

  describe('/GET templates_records', () => {
    // it('it should NOT be able to consume the route since no token was sent', (done) => {
    //   chai
    //     .request(server)
    //     .get('/templates')
    //     .end((err, res) => {
    //       res.should.have.status(401);
    //       done();
    //     });
    // });
    it.skip('it should GET all the templates', (done) => {
      chai
        .request(server)
        .get('/templates/all')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.an('array').lengthOf(5);
          done();
        });
    });
    it('it should GET template by name', (done) => {
      chai
        .request(server)
        .get('/templates?filter={"name": "Player facts"}')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {

          console.log('res.body', res.body);
          console.log('err', err);

          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.docs.should.be.a('array');
          res.body.docs.should.have.lengthOf(1);
          res.body.docs[0].should.have.property('name').eql('Player facts');
          done();
        });
    });
  });

  describe('/POST template', () => {
    it('it should POST a template ', async () => {

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            'fields': {
              'headline': {
                'value': 'Headline test',
                'styles': {}
              },
              'team': {
                'value': {
                  'uuid': '1001'
                },
                'styles': {}
              },
              'player': {
                'value': {
                  'uuid': '1000'
                },
                'styles': {}
              },
              'facts': {
                'value': '<p>The earliest versions of the game can be traced back 3,000 years.</p>\n<p>Soccer is the most popular game in the world. In many countries it is known as “football”.</p>\n<p>Football made its television debut in 1937, featuring Arsenal in England.</p>',
                'styles': {}
              }
            },
            'options': {
              'name': {
                'value': 'Player facts 01 TEST'
              },
              'color1': {
                'value': '#00FDFF'
              },
              'color2': {
                'value': '#919191'
              },
              'defaultBackground': {
                'value': {
                  'uuid': '1000'
                }
              },
              'backgroundMask': {
                'value': {
                  'uuid': '1001'
                }
              },
              'videoduration': {
                'value': '5'
              }
            }
          };

          console.log('postData', postData.fields);

          chai
            .request(server)
            .post('/templates/playerfacts')
            .set('Authorization', `Bearer ${token}`)
            .send(postData)
            .end((err, res) => {
              // console.log("res.body", res.body)
              res.should.have.status(201);
              res.body.should.be.a('object');
              res.body.should.include.keys('_id', 'name', 'uuid');

              const checkPlayerMedia = _.find(res.body.data.fields, { id: 'player' });

              expect(checkPlayerMedia.value.url).to.be.equal('/predefined/media/image/players/lewandowski.png');
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

  describe('/GET/:id template', () => {
    it('it should TEMPLATE by the UUID id', (done) => {
      const id = '0001';
      const template = 'playerfacts';
      chai
        .request(server)
        .get(`/templates/${template}/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .end((error, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.should.have.property('uuid').eql(id);
          done();
        });
    });
    it('it should get a new template - preload data for playerfacts', (done) => {
      const id = '0';
      const template = 'playerfacts';
      chai
        .request(server)
        .get(`/templates/${template}/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .end((error, res) => {

          console.log('#res', res.body);
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          // res.body.should.have.property('uuid').eql(id);
          done();
        });
    });
  });

  describe('/PATCH/:id template', () => {
    it.skip('it should UPDATE a template given the id', async () => {
      const uuid = '0001';

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            'fields': {
              'headline': {
                'value': 'Headline test',
                'styles': {}
              },
              'team': {
                'value': {
                  'uuid': '1001'
                },
                'styles': {}
              },
              'player': {
                'value': {
                  'uuid': '1000'
                },
                'styles': {}
              },
              'facts': {
                'value': '<p>The earliest versions of the game can be traced back 3,000 years.</p>\n<p>Soccer is the most popular game in the world. In many countries it is known as “football”.</p>\n<p>Football made its television debut in 1937, featuring Arsenal in England.</p>',
                'styles': {}
              }
            }
          };

          chai
            .request(server)
            .patch(`/templates/playerfacts/${uuid}`)
            .set('Authorization', `Bearer ${token}`)
            .send(postData)
            .end((error, res) => {

              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('uuid').eql('0001');
              res.body.should.have.property('name').eql('Player facts');
              const checkPlayerMedia = _.find(res.body.data.fields, { id: 'player' });

              expect(checkPlayerMedia.value.url).to.be.equal('/predefined/media/image/players/lewandowski.png');
              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });

    });
    it('it should return and error when item not exist', (done) => {
      const id = '1050';
      const newName = 'Record 1 Updated';
      chai
        .request(server)
        .patch(`/templates/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: newName
        })
        .end((error, res) => {
          console.log('res.body', res.body);
          console.log('res.status', res.status);

          res.should.have.status(404);
          res.body.should.be.a('object');
          // console.log("res.body", res.body)
          expect(res.body).has.key('errors');
          done();
        });
    });
  });

  describe('/DELETE template', () => {
    it.skip('it should DELETE a template by req.body = only one', async () => {

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            uuid: '0001'
          };
          chai
            .request(server)
            .delete('/templates')
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

    it.skip('it should DELETE a template by req.body = by season', async () => {

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            season: '2021'
          };
          chai
            .request(server)
            .delete('/templates')
            .set('Authorization', `Bearer ${token}`)
            .send(postData)
            .end((err, res) => {
              console.log('res.body', res.body);
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('meta').eql('DELETED');
              expect(res.body.data.deletedCount).to.be.equal(5);
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
