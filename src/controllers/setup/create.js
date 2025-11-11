const { createItem } = require('../../middleware/db');
const { handleError } = require('../../middleware/utils');
const { matchedData } = require('express-validator');

const SetupM = require('../../models/setup');

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const create = async (req, res) => {
  try {
    res.status(201).json(await createItem(req.body, SetupM));
    // }
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { create };
