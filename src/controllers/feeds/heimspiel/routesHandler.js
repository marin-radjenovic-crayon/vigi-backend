const TemplatesRecordsM = require('@/src/models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('@/src/middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('@/src/templates/_helpers/getSingle');
const setSingleDefaultHandler = require('@/src/templates/_helpers/setSingle');

const FnFeedsClass = require('@/src/controllers/feeds/opta/functions');
const { handleError } = require('@/src/middleware/utils');

/**
 * Get all items function called by route
 */

const activatedHandler = async (req, res) => {
  try {
    const FeedInstance = new FnFeedsClass({
      target: {}
    });

    const activated = await FeedInstance.setActiveCompetitions().catch(err => {
      LOGGER.error(err, 'setActiveCompetitions error');
    });

    res.status(200).json({
      status: 'success',
      data: activated
    });
  } catch (error) {
    handleError(res, error);
  }
};

const competitionTeams = async (req, res) => {
  try {
    const { cid } = req.params;
    const FnFeeds = new FnFeedsClass({
      target: {
        league: cid
      }
    });

    const teamsData = await FnFeeds.getTeams();

    res.status(200).json({
      status: 'success',
      data: teamsData
    });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  activatedHandler,
  competitionTeams
};
