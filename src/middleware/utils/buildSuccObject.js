/**
 * Builds success object
 * @param {string} message - success text
 */
const buildSuccObject = (meta = '', data) => {
  return {
    meta,
    data
  };
};

module.exports = { buildSuccObject };
