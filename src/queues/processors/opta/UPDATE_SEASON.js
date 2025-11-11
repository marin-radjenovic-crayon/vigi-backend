const _ = require('lodash');
const updaterClass = require('@/src/controllers/updater/optaUpdater');

const action = async job => {
  const competition = job?.data?.competition;

  try {
    const instance = new updaterClass();

    LOGGER.debug(`UPDATE_SEASON processing ${competition.knownName} ${competition.timezoneOffset}`);
    await instance.seasonDaemonInit(competition);

    return {
      success: true
    };
  } catch (err) {
    LOGGER.error(err, `UPDATER_ERROR - SEASON - ${competition.knownName}`);
    throw err;
  }
};

module.exports = async job => {
  return action(job);
};
