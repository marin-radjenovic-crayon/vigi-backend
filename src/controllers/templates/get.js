const { matchedData } = require('express-validator');
const { getAllItemsFromDB } = require('./helpers');
const { getItem, checkQueryString, getItems } = require('../../middleware/db');
const { isIDGood, handleError } = require('../../middleware/utils');

const TemplatesRecordsM = require('../../models/template_records');

/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getAll = async (req, res) => {
  try {
    res.status(200).json(await getAllItemsFromDB());
  } catch (error) {
    handleError(res, error);
  }
};

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getMulti = async (req, res) => {
  try {
    const query = await checkQueryString(req.query);
    req.query.limit = 0;
    res.status(200).json(await getItems(req, TemplatesRecordsM, query));
  } catch (error) {
    handleError(res, error);
  }
};

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getSingle = async (req, res) => {
  try {
    // req = matchedData(req);
    const uuid = req.params.uuid;
    const template = req.params.template;

    res.status(200).json(
      await getItem(
        {
          uuid,
          template_name: template
        },
        TemplatesRecordsM
      )
    );
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  getAll,
  getMulti,
  getSingle
};
