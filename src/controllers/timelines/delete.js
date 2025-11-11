const { matchedData } = require('express-validator');
const { isIDGood, handleError } = require('../../middleware/utils');
const { deleteItem } = require('../../middleware/db');

const { StatusCodes } = require('http-status-codes');

const MainModel = require('../../models/timeline_records');

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const deleteTemplate = async (req, res) => {
  try {
    // req = matchedData(req);
    const body = req.body;

    res.status(StatusCodes.OK).json(await deleteItem(body, MainModel));
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { deleteTemplate };
