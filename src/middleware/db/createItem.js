const { buildErrObject } = require('../utils');

/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const createItem = async (req = {}, model) => {
  try {
    // Use model.create() directly with await. It returns the created item if successful.
    const item = await model.create(req);

    // Return the newly created item.
    return item;
  } catch (err) {
    // If there's an error during creation, throw a custom error.
    throw buildErrObject(422, err.message);
  }
};

module.exports = { createItem };
