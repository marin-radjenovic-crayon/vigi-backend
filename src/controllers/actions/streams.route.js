const { handleError } = require('../../middleware/utils');
const { restartStreams } = require('@/requests/stream');

const restartProdStreams = async (req, res) => {
  try {
    const body = req.body;

    LOGGER.info('Restarting production streams - user action');
    await restartStreams();

    res.status(200).json({
      success: true
    });
  } catch (error) {
    LOGGER.error(error, 'actions->handleTemplate %o');
    const message = new Error(error);
    handleError(res, message);
  }
};

module.exports = {
  restartProdStreams
};
