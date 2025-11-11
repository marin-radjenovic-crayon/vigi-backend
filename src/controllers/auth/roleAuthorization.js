const { checkPermissions } = require('./helpers');

const { handleError } = require('../../middleware/utils');
const _ = require('lodash');

/**
 * Roles authorization function called by route
 * @param {Array} roles - roles specified on the route
 */
const roleAuthorization = roles => async (req, res, next) => {
  try {
    const data = {
      id: _.get(req, 'user._id', null),
      roles
    };
    await checkPermissions(data, next);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { roleAuthorization };
