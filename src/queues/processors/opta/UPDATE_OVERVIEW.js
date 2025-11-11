const TimelineRecordsM = require('@/src/models/timeline_records');
const { convertLocalTimeRangeToUTC, isWithinUTCRange, isUndefinedOrNull } = require('@/src/controllers/utils/auto-updater');
const _ = require('lodash');
const updaterClass = require('@/src/controllers/updater/optaUpdater');
const { localTimeRange } = require('@/src/config/opta_opta_dynamic/feedCfg');

const action = async job => {
  const competition = job?.data?.competition;

  try {
    const instance = new updaterClass();
    const utcTimeRange = convertLocalTimeRangeToUTC(localTimeRange, competition?.guessedTimezone);
    LOGGER.debug(`UPDATE_OVERVIEW: ${competition.knownName} ${competition.timezoneOffset} utcTimeRange: %o`, {
      utcTimeRange,
      isWithinUTCRange: isWithinUTCRange(utcTimeRange)
    });

    // We do not care about utcTimeRange, if ignoreUTCRange is set to true
    const ignoreUTCRange = competition.ignoreUTCRange;

    if (isUndefinedOrNull(ignoreUTCRange) && !isWithinUTCRange(utcTimeRange)) {
      return {
        msg: 'Not in UTC range'
      };
    }

    LOGGER.debug(`UPDATE_OVERVIEW processing ${competition.knownName} ${competition.timezoneOffset}`);
    await instance.overviewDaemonInit(competition);

    return {
      success: true
    };
  } catch (err) {
    LOGGER.error(err, `UPDATER_ERROR - OVERVIEW - ${competition.knownName}`);
    throw err;
  }
};

module.exports = async job => {
  return action(job);
};
