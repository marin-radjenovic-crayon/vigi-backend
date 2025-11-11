const {
  differenceInMinutes,
  isWithinInterval,
  parseISO,
  differenceInMilliseconds,
  isBefore,
  isAfter
} = require('date-fns');
const crypto = require('crypto');
const FeedsDataM = require('@/src/models/feeds_data');
const _ = require('lodash');

const getClosestMatchMinutesBefore = ({ matches, findGameBeforeMinutes, teamIds }) => {
  const now = new Date();
  const pickedMatches =
    matches
      .filter(match => {
        if (match?.time && match?.date) {
          const matchDate = new Date(match?.date + match?.time).getTime();
          const distancePure = differenceInMinutes(matchDate, now);

          if (teamIds.length) {
            return (
              distancePure <= findGameBeforeMinutes &&
              (teamIds.includes(match?.homeContestantId) || teamIds.includes(match?.awayContestantId))
            );
          }
          return distancePure <= findGameBeforeMinutes;
        }
      })
      .sort((matchA, matchB) => {
        const matchDateA = new Date(matchA?.date + matchA?.time).getTime();
        const matchDateB = new Date(matchB?.date + matchB?.time).getTime();
        const distanceA = Math.abs(differenceInMinutes(matchDateA, now));
        const distanceB = Math.abs(differenceInMinutes(matchDateB, now));
        return distanceA - distanceB;
      }) || [];

  return pickedMatches?.[0];
};
const getClosestMatchFromNow = ({ matches, teamIds = [], now = new Date() }) => {
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  const endOf48Hours = new Date(now.getTime() + 12 * 60 * 60 * 1000);

  // Function to parse match date, handling different date formats
  const parseMatchDate = match => {
    if (match?.date && match?.time) {
      if (match.date.endsWith('Z') && match.time.endsWith('Z')) {
        // Both date and time have 'Z', meaning they're in UTC
        return new Date(`${match.date}${match.time}`);
      } else {
        // Handle date with or without time
        const matchDateTimeString = match.time ? `${match.date}T${match.time}` : `${match.date}T00:00:00`;
        return new Date(matchDateTimeString);
      }
    } else if (match?.date) {
      // Handle the case where only the date is provided, and it ends with 'Z'
      if (match.date.endsWith('Z')) {
        return new Date(`${match.date}T00:00:00Z`); // UTC time, start of the day
      }
      return new Date(`${match.date}T00:00:00`); // Local time, start of the day
    }
    return null;
  };

  let prevClosest = null;
  let nextClosest = null;
  let closestMatch = null;
  let closestMatchIndex = null;
  let closestDistance = Number.MAX_VALUE;
  let closeMatches = [];

  matches.forEach((match, index) => {
    const matchDate = parseMatchDate(match);

    if (
      matchDate &&
      (teamIds.length === 0 || teamIds.includes(match.homeContestantId) || teamIds.includes(match.awayContestantId))
    ) {
      // Add match to closeMatches if it falls within the next 48 hours
      if (isAfter(matchDate, startOfToday) && isBefore(matchDate, endOf48Hours)) {
        closeMatches.push(match);
      }

      // Determine the closest match based on distance from now
      const distanceFromNow = Math.abs(differenceInMilliseconds(matchDate, now)); // Dynamic comparison of time difference

      if (distanceFromNow < closestDistance) {
        closestMatch = match;
        closestDistance = distanceFromNow;
        closestMatchIndex = index;
      }
    }
  });

  prevClosest = matches?.[closestMatchIndex - 1];
  nextClosest = matches?.[closestMatchIndex + 1];

  if (!closestMatch) {
    closestMatch = matches?.[0];
    closeMatches.push(closestMatch);
    nextClosest = matches?.[1];
  } else {
    if (!closeMatches?.length) {
      closeMatches.push(closestMatch);
    }
  }

  return {
    closestMatch: closestMatch,
    closeMatches: closeMatches,
    prevClosest,
    nextClosest
  };
};

const getNextClosestMatchFromNow = ({ matches, teamIds = [], now = new Date() }) => {
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  const endOf48Hours = new Date(now.getTime() + 12 * 60 * 60 * 1000);

  // Function to parse match date, handling different date formats
  const parseMatchDate = match => {
    if (match?.date && match?.time) {
      if (match.date.endsWith('Z') && match.time.endsWith('Z')) {
        // Both date and time have 'Z', meaning they're in UTC
        return new Date(`${match.date}${match.time}`);
      } else {
        // Handle date with or without time
        const matchDateTimeString = match.time ? `${match.date}T${match.time}` : `${match.date}T00:00:00`;
        return new Date(matchDateTimeString);
      }
    } else if (match?.date) {
      // Handle the case where only the date is provided, and it ends with 'Z'
      if (match.date.endsWith('Z')) {
        return new Date(`${match.date}T00:00:00Z`); // UTC time, start of the day
      }
      return new Date(`${match.date}T00:00:00`); // Local time, start of the day
    }
    return null;
  };

  let prevClosest = null;
  let nextClosest = null;
  let closestMatch = null;
  let closestMatchIndex = null;
  let closestDistance = Number.MAX_VALUE;
  let closeMatches = [];

  matches.forEach((match, index) => {
    const matchDate = parseMatchDate(match);

    if (
      matchDate &&
      (teamIds.length === 0 || teamIds.includes(match.homeContestantId) || teamIds.includes(match.awayContestantId))
    ) {
      // Add match to closeMatches if it falls within the next 48 hours
      if (isAfter(matchDate, startOfToday) && isBefore(matchDate, endOf48Hours)) {
        closeMatches.push(match);
      }

      // Determine the closest match based on distance from now
      // const distanceFromNow = Math.abs(differenceInMilliseconds(matchDate, now)); // Dynamic comparison of time difference
      // console.log('distanceFromNow: ', distanceFromNow, matchDate)

      // if (distanceFromNow < closestDistance) {
      //   closestMatch = match;
      //   closestDistance = distanceFromNow;
      //   closestMatchIndex = index;
      // }
      const diffMs = matchDate.getTime() - now.getTime(); // positive if in future, negative if past
      if (diffMs >= 0 && diffMs < closestDistance) {
        closestDistance = diffMs;
        closestMatch = match;
        closestMatchIndex = index;
      }
    }
  });

  prevClosest = matches?.[closestMatchIndex - 1];
  nextClosest = matches?.[closestMatchIndex + 1];

  if (!closestMatch) {
    closestMatch = matches?.[0];
    closeMatches.push(closestMatch);
    nextClosest = matches?.[1];
  } else {
    if (!closeMatches?.length) {
      closeMatches.push(closestMatch);
    }
  }

  return {
    closestMatch: closestMatch,
    closeMatches: closeMatches,
    prevClosest,
    nextClosest
  };
};

function generateUrlHash(url) {
  return crypto.createHash('md5').update(url).digest('hex');
}

// Extend the cachedApiCall function to accept an options object
const findMostRecentDateByPath = (data, path) => {
  if (!path) {
    return null;
  }

  // Split the path to identify the target array/object and the key of the date
  const pathSegments = path.split('.');
  const basePath = pathSegments.shift(); // The first segment is the base path
  const restOfPath = pathSegments.join('.'); // Re-join the remaining segments for the nested path

  // Retrieve the base part (could be an array or a single object)
  const base = _.get(data, basePath);

  let mostRecentDate = null;

  // A helper function to update the most recent date
  const updateMostRecentDate = dateString => {
    const date = new Date(dateString);
    if (!mostRecentDate || date > mostRecentDate) {
      mostRecentDate = date;
    }
  };

  // A function to process each item (whether base is an array or a single object)
  const processItem = item => {
    const itemDate = _.get(item, restOfPath);
    if (itemDate) {
      updateMostRecentDate(itemDate);
    }
  };

  // Check if the base is an array and iterate over it, or directly access the date if it's a single object
  if (_.isArray(base)) {
    base.forEach(item => processItem(item));
  } else {
    processItem(base);
  }

  return mostRecentDate;
};

function filterEventsBetweenDates(events, startIsoString, endIsoString) {
  // Parse the start and end date ISO strings to Date objects
  const startDate = parseISO(startIsoString);
  const endDate = parseISO(endIsoString);

  // Filter the events
  const filteredEvents = events.filter(event => {
    // Combine date and time into an ISO string and parse to a Date object
    const eventDate = parseISO(`${event.date}T${event.time.substring(0, event.time.length - 1)}`);

    // Check if the event date is within the specified range
    return isWithinInterval(eventDate, {
      start: startDate,
      end: endDate
    });
  });

  return filteredEvents;
}

const eventType = {
  16: 'goal'
  // Other event types, e.g
  // 21: 'yellow_card'
};

const getApiCallRelevantMatchData = (liveMatch) => {
  return {
    matchInfo: liveMatch?.matchInfo,
    liveData: _.pick(liveMatch?.liveData, 'matchDetails'),
  }
}

function isOlderThanDelay(createdAt, delay = 24 * 60 * 60 * 1000) {
  const currentTime = new Date();
  const createdAtDate = new Date(createdAt);
  const timeDifference = currentTime.getTime() - createdAtDate.getTime();

  return timeDifference > delay;
}

module.exports = {
  getClosestMatchMinutesBefore,
  getClosestMatchFromNow,
  getNextClosestMatchFromNow,
  generateUrlHash,
  findMostRecentDateByPath,
  filterEventsBetweenDates,
  eventType,
  getApiCallRelevantMatchData,
  isOlderThanDelay
};
