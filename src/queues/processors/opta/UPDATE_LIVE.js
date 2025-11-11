const { convertLocalTimeRangeToUTC, isWithinUTCRange, isUndefinedOrNull } = require('@/src/controllers/utils/auto-updater');
const _ = require('lodash');
const updaterClass = require('@/src/controllers/updater/optaUpdater');
const { localTimeRange } = require('@/src/config/opta_opta_dynamic/feedCfg');
const { CLIENTS } = require('@/src/constants/config');

const action = async job => {
  const competition = job?.data?.competition;

  try {
    const instance = new updaterClass();
    const utcTimeRange = convertLocalTimeRangeToUTC(localTimeRange, competition?.guessedTimezone);
    LOGGER.debug(`UPDATE_LIVE: ${competition.knownName} ${competition.timezoneOffset} utcTimeRange: %o`, {
      utcTimeRange,
      isWithinUTCRange: isWithinUTCRange(utcTimeRange)
    });

    job.log(`[${new Date().toISOString()}]: ${utcTimeRange.from}-${utcTimeRange.to}`);

    // We do not care about utcTimeRange, if ignoreUTCRange is set to true
    const ignoreUTCRange = competition.ignoreUTCRange;

    if (isUndefinedOrNull(ignoreUTCRange) && !isWithinUTCRange(utcTimeRange)) {
      return {
        msg: 'Not in UTC range'
      };
    }
    LOGGER.debug(`UPDATE_LIVE processing ${competition.knownName} ${competition.timezoneOffset}`);
    const client = MAINCONFIG.client;
    if (client === CLIENTS.BILD) {
        await instance.initBild(['live'], competition.heimspielId);
    } else {
      await instance.init(['live'], competition.tournamentCalendarId);
    }

    return {
      success: true
    };
  } catch (err) {
    LOGGER.error(err, `UPDATER_ERROR - LIVE - ${competition.knownName}`);
    throw err;
  }
};

module.exports = async job => {
  return action(job);
};
