const { create } = require('./create');
const { deleteTemplate } = require('./delete');
const { getAll, getSingle, getMulti } = require('./get');
const { update } = require('./update');
const { hookVideoProduction } = require('./webhookHandler');

module.exports = {
  create,
  deleteTemplate,
  getAll,
  getSingle,
  getMulti,
  update,
  hookVideoProduction
};
