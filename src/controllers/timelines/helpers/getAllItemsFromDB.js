const MainModel = require('../../../models/timeline_records');
const { buildErrObject } = require('../../../middleware/utils');

/**
 * Gets all items from database
 */
const getAllItemsFromDB = () => {
  return new Promise((resolve, reject) => {
    MainModel.find(
      {},
      '-updatedAt -createdAt',
      {
        sort: {
          name: 1
        }
      },
      (err, items) => {
        if (err) {
          return reject(buildErrObject(422, err.message));
        }
        resolve(items);
      }
    );
  });
};

module.exports = { getAllItemsFromDB };
