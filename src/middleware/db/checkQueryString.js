const { buildErrObject } = require('../utils');

/**
 * Checks the query string for filtering records
 * query.filter should be the text to search (string)
 * query.fields should be the fields to search into (array)
 * @param {Object} query - query object
 */
const checkQueryString = (query = {}) => {
  return new Promise((resolve, reject) => {
    try {
      if (query.filter) {
        const queryFilter = JSON.parse(query.filter);
        resolve(queryFilter);
      } else {
        resolve({});
      }
    } catch (err) {
      console.log(err.message);
      reject(buildErrObject(422, 'ERROR_WITH_FILTER'));
    }
  });
};

module.exports = { checkQueryString };
