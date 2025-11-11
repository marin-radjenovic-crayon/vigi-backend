const { itemNotFound } = require('../utils');

/**
 * Gets item from database by id
 * @param {string} id - item id
 */
const getItem = async (findObj = {}, model) => {
  try {
    // Use the findOne method and wait for its resolution.
    const item = await model.findOne({ ...findObj });

    if (!item) {
      // Optionally handle the case where no item is found. You might want to throw an error here.
      // For instance: throw new Error('NOT_FOUND');
      return null;
    }

    // Convert the Mongoose document to a plain JavaScript object.
    let response = item.toObject();
    delete response._id; // Remove _id from the response if necessary.

    return response;
  } catch (error) {
    // Handle any errors that occur during the database operation.
    throw error; // Or use a custom error handling mechanism.
  }
};

module.exports = { getItem };
