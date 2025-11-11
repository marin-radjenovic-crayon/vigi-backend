const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz');
const _ = require('lodash');
const { addDays, isEqual, add, parse, differenceInHours, isBefore, isWithinInterval, parseISO } = require('date-fns');

function convertLocalTimeRangeToUTC(localTimeRange, timezone) {
  const now = utcToZonedTime(new Date(), timezone);
  const fromLocal = parse(localTimeRange.from, 'HH:mm:ss', now);
  let toLocal = parse(localTimeRange.to, 'HH:mm:ss', now);

  // If 'to' time is before 'from', it spans midnight
  if (isBefore(toLocal, fromLocal) || isEqual(toLocal, fromLocal)) {
    toLocal = addDays(toLocal, 1);
  }

  // Convert both times to UTC
  const fromUTC = zonedTimeToUtc(fromLocal, timezone);
  const toUTC = zonedTimeToUtc(toLocal, timezone);

  return {
    from: fromUTC.toISOString(),
    to: toUTC.toISOString(),
  };
}

function isWithinUTCRange(timeRange) {
  const nowUTC = new Date();
  const fromUTC = parseISO(timeRange.from);
  const toUTC = parseISO(timeRange.to);

  const interval = {
    start: fromUTC,
    end: toUTC
  };
  return isWithinInterval(nowUTC, interval);
}

function isUndefinedOrNull(value) {
  if (_.isUndefined(value)) {
    return true;
  }
  if (_.isNull(value)) {
    return true;
  }
  if (!value) {
    return true;
  }
  return false;
}

module.exports = {
  convertLocalTimeRangeToUTC,
  isWithinUTCRange,
  isUndefinedOrNull
};
