const { updateItem } = require('@/src/middleware/db');
const { isIDGood, handleError, itemNotFound } = require('@/src/middleware/utils');
const { matchedData } = require('express-validator');

const MainModel = require('@/src/models/timeline_records');
const flatThis = require('@/src/controllers/utils/flatThis');
/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const update = async (req, res) => {
  try {
    const uuid = req.params.uuid;
    const timelineType = req.body?.type || 'template';
    let updatedItem = null;
    if (timelineType === 'container') {
      const timelineIds = req.body.timelines.map(t => t.timelineId);
      const timelines = await MainModel.find({ uuid: { $in: timelineIds } }, ['templates'], {
        lean: true
      });

      const templates = timelines.reduce((acc, timeline) => {
        return acc.concat(timeline.templates);
      }, []);

      req.body.templates = templates;

      const flatBody = flatThis(req.body, ['event']);
      updatedItem = await MainModel.findOneAndUpdate(
        { uuid },
        {
          $set: flatBody,
          __body: req.body
        },
        {
          lean: true,
          new: true,
          runValidators: true
        }
      );
    } else {
      const flatBody = flatThis(req.body, ['event']);
      updatedItem = await MainModel.findOneAndUpdate(
        { uuid },
        {
          $set: flatBody,
          __body: req.body
        },
        {
          lean: true,
          new: true,
          runValidators: true
        }
      );
    }

    return res.status(200).json(updatedItem);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { update };
