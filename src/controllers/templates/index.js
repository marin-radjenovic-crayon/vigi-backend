const { create } = require('./create');
const { deleteTemplate } = require('./delete');
const { getAll, getSingle, getMulti } = require('./get');
const { update } = require('./update');
const { handleSingleTemplate, saveSingleTemplate } = require('./handleTemplate');
const downloadAndZipTemplates = require('./helpers/downloadArchive');

module.exports = {
  create,
  deleteTemplate,
  getAll,
  getSingle,
  getMulti,
  update,
  handleSingleTemplate,
  saveSingleTemplate,
  downloadAndZipTemplates
};
