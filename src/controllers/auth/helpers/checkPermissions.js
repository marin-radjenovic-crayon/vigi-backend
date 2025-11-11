const User = require('../../../models/users');
const { itemNotFound, buildErrObject } = require('../../../middleware/utils');

/**
 * Checks against user if has quested role
 * @param {Object} data - data object
 * @param {*} next - next callback
 */
const checkPermissions = async ({ id = '', roles = [] }, next) => {
  try {
    const user = await User.findById(id).exec(); // Use exec() for a true promise

    // Assuming itemNotFound throws an error if the user is not found
    await itemNotFound(null, user, 'USER_NOT_FOUND');

    // Check if the user's role is within the allowed roles
    if (roles.includes(user.role)) {
      return next(); // Proceed with the next middleware/function
    } else {
      throw buildErrObject(401, 'UNAUTHORIZED'); // Use throw for error handling
    }
  } catch (error) {
    // Propagate any errors that occur (user not found, database issues, etc.)
    throw error; // Rethrow to be handled by the caller or global error handler
  }
};

module.exports = { checkPermissions };
