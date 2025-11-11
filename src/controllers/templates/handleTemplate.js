const path = require('path');
const { isIDGood, handleError } = require('../../middleware/utils');
const { getItem, checkQueryString, getItems } = require('../../middleware/db');

const TemplatesRecordsM = require('../../models/template_records');
const { getClientTemplateDirectory } = require('./helpers');

/**
 * Dynamicly handle template
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const handleSingleTemplate = async (req, res) => {
  const template = req.params.template;
  try {
    let clientSubDirectory = getClientTemplateDirectory(template);
    // if(template === 'staticmedia') {
    //   clientSubDirectory = ''
    // }
    const handlerPath = path.join(`../../templates/${clientSubDirectory}`, template);
    const handlerClass = require(handlerPath);
    const classInstance = new handlerClass(req, res);
    return await classInstance.getSingle();
  } catch (error) {
    console.log('error: ', error)
    const message = new Error(`Can't find template (${template}) handler`);
    handleError(res, message);
  }
};

/**
 * Dynamicly handle template
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const saveSingleTemplate = async (req, res) => {
  const template = req.params.template;

  try {
    let clientSubDirectory = getClientTemplateDirectory(template);
    // if(template === 'staticmedia') {
    //   clientSubDirectory = ''
    // }
    const handlerPath = path.join(`../../templates/${clientSubDirectory}`, template);
    const handlerClass = require(handlerPath);
    const classInstance = new handlerClass(req, res);
    return await classInstance.setSingle();
  } catch (error) {
    console.log('error: ', error)
    const message = new Error(`Can't find template (${template}) handler`);
    handleError(res, message);
  }
};

module.exports = {
  handleSingleTemplate,
  saveSingleTemplate
};
