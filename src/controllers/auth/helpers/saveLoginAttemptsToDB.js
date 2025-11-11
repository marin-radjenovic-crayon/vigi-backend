const { buildErrObject } = require('../../../middleware/utils');

/**
 * Saves login attempts to dabatabse
 * @param {Object} user - user object
 */
const saveLoginAttemptsToDB = async (user = {}) => {
  try {
    // Save the user document. If there's an error, it will be caught by the catch block.
    await user.save();

    // If the save operation was successful, return true.
    return true;
  } catch (err) {
    // If there's an error during save, throw a custom error object.
    throw buildErrObject(422, err.message);
  }
};

module.exports = { saveLoginAttemptsToDB };
