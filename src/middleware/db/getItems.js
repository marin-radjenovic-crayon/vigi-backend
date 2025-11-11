const { buildErrObject } = require('../utils');

const { listInitOptions } = require('./listInitOptions');
const { cleanPaginationID } = require('./cleanPaginationID');
const { isEmpty } = require('bullmq');

/**
 * Gets items from database
 * @param {Object} req - request object
 * @param {Object} query - query object
 */
const getItems = async (req = {}, model, query, ignoreQuery = false) => {
  try {
    const options = listInitOptions(req);
    // if (isEmpty(query)) {
    //   return [];
    // }
    /*
    options.allowDiskUse = true;*/

    const items = await model.paginate(query, options).catch(err => {
      LOGGER.error(err, 'getItems paginate error');
    });

    return cleanPaginationID(items);
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
};

const getItemsPure = async (findObj = {}, model, projection = null, options = {}) => {
  try {
    // Incorporating options directly into the find operation.
    const finalOptions = {
      lean: true,
      sort: { createdAt: -1 },
      ...options
    };

    // Execute the query with the provided options.
    const items = await model.find(findObj, projection, finalOptions);

    // You might want to include your itemNotFound check here if items are empty.
    // if (items.length === 0) throw new Error('NOT_FOUND');

    return items;
  } catch (error) {
    throw error; // Or use your custom error handling, like: throw buildErrObject(422, error.message);
  }
};

module.exports = {
  getItems,
  getItemsPure
};
