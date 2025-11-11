const { itemNotFound } = require('../utils');
const flatThis = require('../../controllers/utils/flatThis');
const _ = require('lodash');
/**
 * Updates an item in database by id
 * @param {string} id - item id
 * @param {Object} req - request object
 */
const updateItem = async (findObj = {}, model, req = {}) => {
  try {
    // Flatten the request body and update the item.
    const updatedItem = await model.findOneAndUpdate(
      { ...findObj },
      {
        $set: flatThis(req.body), // Assuming flatThis is a synchronous function.
        __body: req.body
      },
      {
        lean: true,
        new: true,
        runValidators: true
      }
    );

    // Check if the item was not found or other conditions based on itemNotFound implementation.
    // Assuming itemNotFound throws an error if the condition is not met.
    await itemNotFound(null, updatedItem, 'NOT_FOUND');

    // If itemNotFound didn't throw, return the updated item.
    return updatedItem;
  } catch (error) {
    // Handle any errors that occurred during the operation.
    throw error; // Or use a specific error handling mechanism if needed.
  }
};

module.exports = { updateItem };
