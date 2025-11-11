const { logger } = require('../../middleware/utils/logger');
const { StatusCodes } = require('http-status-codes');

/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
const handleError = (res = {}, err = {}) => {
  // Prints error in console if in development or test environment
  logger.error(err, 'handleError middleware');

  // Extract message and stack (if in development) for better serialization
  const errorMessage = {
    errors: {
      msg: err.message || JSON.stringify(err)
    }
  };

  if (err.stack) {
    errorMessage.errors['stack'] = err.stack;
  }

  // Sends the error to the client
  return res?.status(StatusCodes.BAD_REQUEST)?.json(errorMessage);
};

module.exports = { handleError };
