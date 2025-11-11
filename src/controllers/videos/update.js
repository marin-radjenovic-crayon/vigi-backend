const { updateItem } = require('../../middleware/db');
const { handleError } = require('../../middleware/utils');

const VideosM = require('../../models/videos');
/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const update = async (req, res) => {
  try {
    const uuid = req.params.uuid;
    LOGGER.info('update video req.body %o', req.body);
    res.status(200).json(await updateItem({ uuid }, VideosM, req));
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { update };
