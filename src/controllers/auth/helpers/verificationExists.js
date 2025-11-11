const User = require('../../../models/users');
const { itemNotFound } = require('../../../middleware/utils');

/**
 * Checks if verification id exists for user
 * @param {string} id - verification id
 */
const verificationExists = async (id = '') => {
  try {
    // Attempt to find a user that matches the verification ID and is not yet verified
    const user = await User.findOne({
      verification: id,
      verified: false
    });

    // If no user is found (meaning either the user does not exist or is already verified),
    // throw a custom error.
    if (!user) {
      throw new Error('NOT_FOUND_OR_ALREADY_VERIFIED');
    }

    // If a matching user is found, return the user document.
    return user;
  } catch (error) {
    // Propagate any errors encountered during the operation.
    throw error;
  }
};

module.exports = { verificationExists };
