require('../../src/config');

const initMongo = require(`${APP_ROOT_PATH}/src/lib/mongo`);
const fs = require('fs');
const modelsPath = `${APP_ROOT_PATH}/src/models`;
const { removeExtensionFromFile } = require(`${APP_ROOT_PATH}/src/middleware/utils`);

// Loop models path and loads every file as a model except index file
const models = fs.readdirSync(modelsPath).filter((file) => {
  return removeExtensionFromFile(file) !== 'index';
});

const deleteModelFromDB = (model) => {
  return new Promise((resolve, reject) => {

    model = require(`${APP_ROOT_PATH}/src/models/${model}`);
    model.deleteMany({}, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

module.exports = async () => {
  return new Promise(async (resolve, reject) => {
    const mongoInstance = await initMongo().catch((err)=> {
      console.log("#mongoInstance err", err);
    });

    try {
      const promiseArray = models.map(
        async (model) => await deleteModelFromDB(model)
      );
      await Promise.all(promiseArray).catch((err) => {
        console.log('err', err);
      });
      console.log('Cleanup complete!');

      const isInTest = typeof global.it === 'function';
      if (!isInTest) {
        await mongoInstance.connection.close();
      }
      resolve();
      // process.exit(0);
    } catch (err) {
      console.log(err);
      // process.exit(0);
      if (!isInTest) {
        await mongoInstance.connection.close();
      }
      reject(err);
    }
  });
};
