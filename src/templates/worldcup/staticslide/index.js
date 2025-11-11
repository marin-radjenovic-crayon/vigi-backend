const TemplatesRecordsM = require('@/src/models/template_records');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('@/src/templates/_helpers/getSingle');
const setSingleDefaultHandler = require('@/src/templates/_helpers/setSingle');
const initialData = require('./initialData');

const getUserEvent = require('@/src/controllers/functions/getUserEvent');

/**
 * Get all items function called by route
 */

function Template(req, res) {
  this.template = req.params.template;
  this.uuid = req.params.uuid;
  this.templateconf = _.find(MAINCONFIG.templates, { name: this.template });
  this.res = res;
  this.req = req;
}

// the start method
Template.prototype.getSingle = async function () {
  let setupEvent = await getUserEvent(this.req);
  setupEvent = setupEvent.data;
  const setupFeedType = _.get(setupEvent, 'data.event.feedType', 'opta');

  getSingleDefaultHandler.call(this, {
    initialData: {
      ...initialData,
      event: {
        ...initialData.event,
        feedType: setupFeedType
      }
    }
  });
};

// the start method
Template.prototype.setSingle = async function () {
  setSingleDefaultHandler.call(this, {
    initialData
  });
};

Template.prototype.getDynamicData = async function (baseData) {
  const event = _.get(baseData, 'event');

  const assets = {};

  return {
    teamSide: _.get(event, 'side'),
    assets
  };
};

module.exports = Template;
