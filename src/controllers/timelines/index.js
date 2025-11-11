const { create } = require('./create');
const { deleteTemplate } = require('./delete');
const { getAll, getSingle, getMulti } = require('./get');
const { getPreCreatedTimeline } = require('./get-dynamic');
const { update } = require('./update');

module.exports = {
  create,
  deleteTemplate,
  getAll,
  getSingle,
  getMulti,
  update,
  getPreCreatedTimeline
};
