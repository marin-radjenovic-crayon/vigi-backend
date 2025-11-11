const { itemNotFound } = require('../utils');
const flatThis = require('../../controllers/utils/flatThis');
const _ = require('lodash');
/**
 * Updates an item in database by id
 * @param {string} id - item id
 * @param {Object} req - request object
 */
const upsertItem = async (findObj = {}, model, req = {}) => {
  try {
    // Perform the upsert operation. The options indicate that if the item
    // does not exist, it should be created (`upsert: true`), and the updated
    // or newly created item should be returned (`new: true`).
    // `lean: true` ensures the result is a plain JavaScript object.
    const item = await model.findOneAndUpdate(
      { ...findObj },
      { $set: req.body },
      {
        lean: true,
        new: true,
        upsert: true /*, runValidators: true*/
      }
    );

    // If `itemNotFound` is an async operation for additional checks or error handling,
    // ensure to call it here. Assuming it throws an error if conditions are not met.
    await itemNotFound(null, item, 'NOT_FOUND');

    // If the item is found or successfully upserted, return it.
    return item;
  } catch (error) {
    // If there's an error (either from `findOneAndUpdate` or `itemNotFound`),
    // it will be caught here. You can then throw it or handle it as needed.
    throw error; // This could be replaced with more specific error handling if required.
  }
};

module.exports = { upsertItem };
