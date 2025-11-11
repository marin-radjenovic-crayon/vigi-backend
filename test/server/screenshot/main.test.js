/* eslint handle-callback-err: "off"*/

const faker = require('faker');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require(APP_ROOT_PATH + '/src/server');
// eslint-disable-next-line no-unused-vars
const should = chai.should();
const expect = chai.expect;

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

describe.skip('*********** SCREENSHOTS ***********', () => {

  beforeEach = async () => {

  };

  describe('/POST screenshot to take a screenshot', () => {
    it('it should POST a screenshots ', async () => {

      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {
            actions: [
              {
                templateId: '000000-0000-0000-0001',
                url: 'http://google.de',
                dir: 'playerfacts',
                format: '1920x1080',
                preview: true
              },
              {
                templateId: '000000-0000-0000-0002',
                url: 'http://wp.pl',
                dir: 'playerstats',
                format: '1080x1080',
                preview: false
              }
            ]
          };

          chai
            .request(server)
            .post('/screenshot')
            .send(postData)
            .end((err, res) => {

              res.should.have.status(200);
              res.body.should.be.a('object');
              expect(res.body.screenshots[0].url).to.be.equal('http://localhost:3000/screenshots/playerfacts/000000-0000-0000-0001/download_1920x1080.jpg');
              expect(res.body.screenshots[1].url).to.be.equal('http://localhost:3000/screenshots/playerstats/000000-0000-0000-0002/download_1080x1080.jpg');

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
