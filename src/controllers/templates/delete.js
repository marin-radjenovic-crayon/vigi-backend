const TemplatesRecordsM = require('../../models/template_records');
const { matchedData } = require('express-validator');
const { isIDGood, handleError } = require('../../middleware/utils');
const { deleteItem } = require('../../middleware/db');

const { StatusCodes } = require('http-status-codes');

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const deleteTemplate = async (req, res) => {
  try {
    // req = matchedData(req);
    const body = req.body;

    res.status(StatusCodes.OK).json(await deleteItem(body, TemplatesRecordsM, true));
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { deleteTemplate };
