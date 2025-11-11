const User = require('../../../models/users');
const { itemNotFound } = require('../../../middleware/utils');

/**
 * Finds user by email
 * @param {string} email - user´s email
 */
const findUser = async (email = '') => {
  try {
    // Attempt to find the user by email
    const item = await User.findOne(
      {
        email: email
      },
      'password loginAttempts blockExpires name email role verified verification'
    );

    // If no user is found, throw an error
    if (!item) {
      throw new Error('USER_DOES_NOT_EXIST');
    }

    // User found, return the item
    return item;
  } catch (error) {
    // If an error occurs, throw it
    throw error;
  }
};

module.exports = { findUser };
