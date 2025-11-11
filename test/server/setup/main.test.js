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

describe('*********** SETUP ***********', () => {

  beforeEach = async () => {
    await clean();
    await seed();
  };

  describe('/POST template', () => {
    it('it should POST a setup ', async () => {

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            id: 2,
            name: 'Some new setup',
            data: {
              param1: 'test1',
              param2: 'test2'
            }
          };

          chai
            .request(server)
            .post('/setup')
            .set('Authorization', `Bearer ${token}`)
            .send(postData)
            .end((err, res) => {
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


    });

  })
  ;

  describe('/GET/:id template', () => {
    it('it should SETUP by the id - user', async () => {

      const token = await getLoginToken().catch((err) => {
        console.log('err', err);
      });
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const id = '1';
          chai
            .request(server)
            .get(`/setup/1`)
            .set('Authorization', `Bearer ${token}`)
            .end((error, res) => {

              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('name');
              res.body.should.have.property('id').eql(id);
              res.body.should.have.property('data');

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });


    });
  });

  describe('/PATCH/:id setup', () => {
    it('it should UPDATE a SETUP given the id', (done) => {
      const id = '1';
      const newName = 'General updated';
      chai
        .request(server)
        .patch(`/setup/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: newName
        })
        .end((error, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('id').eql(id);
          res.body.should.have.property('name').eql(newName);
          done();
        });
    });
    it('it should return and error when item not exist', (done) => {
      const id = '55';
      const newName = 'Setup updated';
      chai
        .request(server)
        .patch(`/setup/${id}`)
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

    it('it should UPDATE some deeper property without lossing any data', (done) => {
      const id = '1';
      const data = {
        design: {
          defaultColor1: '#00000'
        }
      };
      chai
        .request(server)
        .patch(`/setup/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          data: data
        })
        .end((error, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('id').eql(id);
          expect(res.body.data.design.defaultColor1).to.be.equal('#00000');
          expect(res.body.data.design.defaultColor2).to.exist;
          done();
        });
    });
  });

  describe('/DELETE template', () => {
    it('it should DELETE a template by req.body = only one', async () => {

      const token = await getLoginToken();
      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            id: '1'
          };
          chai
            .request(server)
            .delete('/setup')
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
  });
})
;
