const { updateItem, upsertItem } = require('../../middleware/db');
const { isIDGood, handleError } = require('../../middleware/utils');
const { matchedData } = require('express-validator');

const TemplatesRecordsM = require('../../models/template_records');
/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const update = async (req, res) => {
  try {
    const uuid = req.params.uuid;
    res.status(200).json(await upsertItem({ uuid }, TemplatesRecordsM, req));
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { update };
