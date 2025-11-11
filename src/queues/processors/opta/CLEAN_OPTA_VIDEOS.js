const { cleanUpVideos } = require('@/src/controllers/vod/perform-stats');

const action = async job => {
  try {
    LOGGER.debug(`CLEAN_OPTA_VIDEOS processing`);
    await cleanUpVideos({ days: 10 });

    return {
      success: true
    };
  } catch (err) {
    LOGGER.error(err, `UPDATER_ERROR - CLEAN_OPTA_VIDEOS`);
    throw err;
  }
};

module.exports = async job => {
  return action(job);
};
