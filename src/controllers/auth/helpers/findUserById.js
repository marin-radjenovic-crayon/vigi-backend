const User = require('../../../models/users');
const { itemNotFound } = require('../../../middleware/utils');

/**
 * Finds user by ID
 * @param {string} id - user´s id
 */
const findUserById = async (userId = '') => {
  try {
    // Attempt to find the user by ID.
    const item = await User.findById(userId).exec(); // Using .exec() to ensure a true promise is returned

    // Assuming itemNotFound() is an async function that throws an error if the item doesn't exist
    await itemNotFound(null, item, 'USER_DOES_NOT_EXIST');

    // If the item is found and itemNotFound() does not throw, return the item
    return item;
  } catch (error) {
    // Propagate any errors that occur during finding the user or within itemNotFound()
    throw error; // It's generally better to throw the error to be handled by the caller
  }
};

module.exports = { findUserById };
