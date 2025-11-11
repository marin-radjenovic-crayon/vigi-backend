const { updateItem, upsertItem, getItem } = require('../../middleware/db');
const { isIDGood, handleError } = require('../../middleware/utils');
const { matchedData } = require('express-validator');
const _ = require('lodash');

const SetupM = require('../../models/setup');
const UserM = require('../../models/users');
const TimelineRecordsM = require('../../models/timeline_records');
/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const update = async (req, res) => {
  try {
    const setupid = _.get(req.params, 'setupid', null);
    if (setupid === '3') {
      const output = await SetupM.findOneAndUpdate(
        { id: setupid },
        {
          data: req.body
        },
        {
          lean: true,
          new: true,
          upsert: true
          // runValidators: true
        }
      );
      res.status(200).json(output);
    } else if (setupid === '2') {
      const currentUser = req?.user;

      if (!currentUser) {
        return handleError(res, {
          message: 'User is not authenticated'
        });
      }
      const output = await SetupM.findOneAndUpdate(
        { id: setupid },
        {
          data: req.body
        },
        {
          lean: true,
          new: true,
          upsert: true
        }
      );
      const { _id } = currentUser;
      await updateItem({ _id: _id }, UserM, { body: { eventData: { data: req.body?.data || req.body } } });
      res.status(200).json(output);
    } else {
      res.status(200).json(await updateItem({ id: setupid }, SetupM, req));
    }
  } catch (error) {
    console.error('###error', error);
    handleError(res, error);
  }
};

module.exports = { update };
