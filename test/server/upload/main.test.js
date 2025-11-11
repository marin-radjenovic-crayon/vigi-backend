/* eslint handle-callback-err: "off"*/

const path = require('path');
const faker = require('faker');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require(APP_ROOT_PATH + '/src/server');
// eslint-disable-next-line no-unused-vars
const should = chai.should();
const expect = chai.expect;
const fsExtra = require('fs-extra');
const fs = require('fs');

chai.use(chaiHttp);

// const getLoginToken = () => {
//   return new Promise((resolve, reject) => {
//     chai
//       .request(server)
//       .post('/auth/login')
//       .send(loginDetails)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.an('object');
//         res.body.should.have.property('token');
//         resolve(res.body.token);
//       });
//   });
// };

describe('*********** TEMPLATES ***********', () => {

  const MediaM = require('../../../src/models/media');
  const DB = require('../../../src/middleware/db');

  beforeEach = async () => {

  };

  describe('/POST upload some files', () => {
    it('it should POST a file to group players , check db record', async () => {

      const image1 = path.resolve(__dirname, './files/image1.jpg');
      const image2 = path.resolve(__dirname, './files/image2.jpg');

      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {};

          chai
            .request(server)
            .post('/upload/players')
            .attach('image1', fs.readFileSync(image1), 'image1.jpg')
            .field('label', 'image_label')
            .end(async (err, res) => {

              res.should.have.status(200);
              res.body.should.be.a('object');
              expect(res.body.files).to.have.lengthOf(1);

              console.log('res.body', res.body);

              expect(res.body.files[0].content_type).to.be.equal('image');
              expect(res.body.files[0].extension).to.be.equal('jpeg');

              res.body.files.map((file) => {
                const url = file.url;
                const toDelete = url.replace(APP_FULLURL, '');
                const publicDir = path.resolve(APP_ROOT_PATH + '/public');
                // console.log("toDelete", path.join(publicDir, toDelete));
                fsExtra.removeSync(path.join(publicDir, toDelete));
              });

              const dbRecord = await DB.getItem({ label: 'image_label' }, MediaM);
              expect(dbRecord.label).to.be.equal('image_label');
              expect(dbRecord.size).to.be.equal(0.055);

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });
    });

    it('it should POST a files to general group ', async () => {

      const image1 = path.resolve(__dirname, './files/image1.jpg');
      const image2 = path.resolve(__dirname, './files/image2.jpg');

      console.log('image1', image1);

      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {};

          chai
            .request(server)
            .post('/upload')
            .attach('image1', fs.readFileSync(image1), 'image1.jpg')
            .attach('image2', fs.readFileSync(image2), 'image2.jpg')
            .end((err, res) => {

              console.log('res.body', res.body);
              res.should.have.status(200);
              res.body.should.be.a('object');
              expect(res.body.files[0].content_type).to.be.equal('image');
              expect(res.body.files[0].extension).to.be.equal('jpeg');

              res.body.files.map((file) => {
                const url = file.url;
                const toDelete = url.replace(APP_FULLURL, '');
                const publicDir = path.resolve(APP_ROOT_PATH + '/public');
                // console.log("toDelete", path.join(publicDir, toDelete));
                fsExtra.removeSync(path.join(publicDir, toDelete));
              });

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });
    });
    it('it should POST an audio to general group ', async () => {

      const audio = path.resolve(__dirname, '../../../public/predefined/media/audio/seven_nation_army.mp3');

      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {};

          chai
            .request(server)
            .post('/upload')
            .attach('audio', fs.readFileSync(audio), 'audio_label.mp3')
            .field('label', 'label data')
            .field('description', 'audio some extra data')
            .end((err, res) => {

              console.log('res.body', res.body);
              res.should.have.status(200);
              res.body.should.be.a('object');

              expect(res.body.files[0].content_type).to.be.equal('audio');
              expect(res.body.files[0].extension).to.be.equal('mp3');
              expect(res.body.files[0].group).to.be.equal('_default');
              expect(res.body.files[0].data.description).to.be.equal('audio some extra data');

              res.body.files.map((file) => {
                const url = file.url;
                const toDelete = url.replace(APP_FULLURL, '');
                const publicDir = path.resolve(APP_ROOT_PATH + '/public');
                // console.log("toDelete", path.join(publicDir, toDelete));
                // fsExtra.removeSync(path.join(publicDir, toDelete))
              });

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });
    });

  });

  describe('/PATCH update existing file', () => {

    it('it should update only DATA, without replacing file', async () => {

      // const image1 = path.resolve(__dirname, './files/image1.jpg');
      // const image2 = path.resolve(__dirname, './files/image2.jpg');

      // console.log("image1", image1)

      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {};

          chai
            .request(server)
            .patch('/upload/2000')
            .field('label', 'updated_label')
            .field('firstname', 'Roberto')
            // .attach('image1', fs.readFileSync(image1), 'image1.jpg')
            // .attach('image2', fs.readFileSync(image2), 'image2.jpg')
            .end((err, res) => {

              // console.log("res.body", res.body)
              res.should.have.status(200);
              res.body.should.be.a('object');
              expect(res.body.dbRecord.label).to.be.equal('updated_label');
              expect(res.body.dbRecord.data.firstname).to.be.equal('Roberto');

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });
    });

    it('it should update only DATA, with replacing file with group included', async () => {

      const image1 = path.resolve(__dirname, './files/image1.jpg');
      // const image2 = path.resolve(__dirname, './files/image2.jpg');

      const doRequest = () => {
        return new Promise((resolve, reject) => {
          const postData = {};

          chai
            .request(server)
            .patch('/upload/2000/teams')
            .attach('image1', fs.readFileSync(image1), 'image1.jpg')
            .field('label', 'image1.jpg')
            // .field('firstname', 'Roberto')
            .end((err, res) => {

              // console.log("res.body", res.body)
              // console.log("res.err", err)
              res.should.have.status(200);
              res.body.should.be.a('object');
              expect(res.body.dbRecord.label).to.be.equal('image1.jpg');
              expect(res.body.dbRecord.url).to.be.equal('/upload/teams/image/2000.jpeg');

              resolve();
            });
        });
      };

      await doRequest().catch((err) => {
        console.log(err);
      });
    });

  });


  describe('/GET uploaded files', () => {
    it('it should get files by group', (done) => {
      chai
        .request(server)
        .get('/upload?filter={"label":"Hannover 96"}')
        .end(async (err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');

          // console.log("res.body.docs[0]", res.body.docs[0]);

          expect(res.body.docs[0].label).to.be.equal('Hannover 96');
          expect(res.body.docs[0].size).to.be.equal('0.055');
          expect(res.body.docs[0].mime).to.be.equal('image/png');

          done();
        });
    });
  });

  describe('/DELETE uploaded files', (done) => {
    it('it should delete multiple files by id', (done) => {
      const postData = {
        uuid: ['2000', '2001']
      };
      chai
        .request(server)
        .delete(`/upload`)
        .send(postData)
        .end((err, res) => {
          // console.log('res.body', res.body)
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('meta').eql('DELETED');
          expect(res.body.data.deletedCount).to.be.equal(2);
          done();
        });
    });
  });
});
