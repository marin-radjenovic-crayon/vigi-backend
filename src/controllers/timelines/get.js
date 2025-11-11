const { matchedData } = require('express-validator');
const { getAllItemsFromDB } = require('./helpers');
const { getItem, checkQueryString, getItems } = require('../../middleware/db');
const { isIDGood, handleError } = require('../../middleware/utils');

const MainModel = require('../../models/timeline_records');
const TemplatesRecordsM = require('../../models/template_records');
const { asyncFilter } = require('../utils/functions');
const _ = require('lodash');
const { timelineTemplateDataCheck } = require('@/src/controllers/timelines/helpers');
const { CLIENTS } = require('@/src/constants/config');

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
    res.status(200).json(await getItems(req, MainModel, query));
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
    const {
      params: { uuid },
      query: { lng: language }
    } = req;

    let timeline = await getItem({ uuid }, MainModel);
    timeline.templates = await asyncFilter(timeline.templates, async template => {
      const { lng, template: templateType, templateId } = template || {};
      if (MAINCONFIG.client === CLIENTS.OF) {
        return true
      }
      if (lng && language) {
        return lng === language;
      }
      return true;
    });
    timeline.templates = await Promise.all(
      timeline.templates.map(template => timelineTemplateDataCheck(template))
    ).then(results => timeline.templates.filter((_, index) => results[index]));

    res.status(200).json(timeline);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  getAll,
  getMulti,
  getSingle
};
