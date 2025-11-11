const { buildErrObject } = require('../utils');
const { buildSort } = require('./buildSort');

/**
 * Builds initial options for query
 * @param {Object} query - query object
 */
const listInitOptions = (req = {}) => {
  try {
    const order = req.query.order || -1;
    const sort = req.query.sort || 'createdAt';
    let projection = req.query.projection ? JSON.parse(req.query.projection) : [];

    const sortBy = buildSort(sort, order); // Assuming buildSort is a synchronous function
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 0;
    const pagination = limit !== 0;
    return {
      sort: sortBy,
      lean: true,
      page,
      limit,
      projection,
      pagination
    };
  } catch (error) {
    throw new Error('ERROR_WITH_INIT_OPTIONS'); // Throw an error to be caught by the caller
  }
};

module.exports = { listInitOptions };
