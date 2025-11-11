const { parse, addMinutes, isWithinInterval, format } = require('date-fns');
const { zonedTimeToUtc } = require('date-fns-tz');
const _ = require('lodash');

function getEventData(match, config) {
  const home = _.find(match?.contestant, { position: 'home' });
  const away = _.find(match?.contestant, { position: 'away' });
  let date = new Date(`${match?.date}${match?.time}`);
  const startTime = isNaN(date) ? "" : format(date, "HH:mm");
  const startDate = isNaN(date) ? "" : format(date, 'dd.MM.yyyy');
  return {
    selectedTeamId: match?.homeContestantId || home?.id,
    competitionId: config?.competitionId,
    competitionName: config?.competitionName,
    type: 'match',
    home,
    away,
    homeTeamId: match?.homeContestantId || home?.id || '-',
    awayTeamId: match?.awayContestantId || away?.id || '-',
    eventId: match?.id,
    stage: match?.stage,
    week: match?.week,
    date: startDate,
    time: startTime,
    // Additional properties can be added as needed
  };
}

function getEventDataForBild(match, config) {
  const home = match?.home;
  const away = match?.away;
  return {
    selectedTeamId: home?.id,
    competitionId: config?.competitionId,
    competitionName: config?.competitionName,
    type: 'match',
    home,
    away,
    homeTeamId: home?.id || '-',
    awayTeamId: away?.id || '-',
    eventId: match?.id,
    stage: match?.stage,
    week: match?.matchday
    // Additional properties can be added as needed
  };
}
const TIME_ZONE = "Europe/Berlin";

function isNowWithinMatch(match) {
  if (!match?.match_date || !match?.match_time) return false;

  // Parse local Berlin datetime
  const matchDateTimeStr = `${match.match_date} ${match.match_time}`;
  const matchLocalDate = parse(matchDateTimeStr, "dd.MM.yyyy HH:mm", new Date());

  // Convert to UTC
  const kickoffUtc = zonedTimeToUtc(matchLocalDate, TIME_ZONE);

  // Match window = kickoff → kickoff + 120 minutes
  const matchEndUtc = addMinutes(kickoffUtc, 120);

  // Current time in UTC
  const nowUtc = new Date();

  // Check if now is inside the interval
  return isWithinInterval(nowUtc, { start: kickoffUtc, end: matchEndUtc });
}

function getMatchStatus(match) {
  if (match.finished === 'yes') return 'Played';
  if (match.finished === 'no') {
    if (isNowWithinMatch(match)) {
      return 'Playing';
    }
    return 'Fixture';
  }
  return 'Fixture'
}

module.exports = {
  getEventData,
  getEventDataForBild,
  isNowWithinMatch,
  getMatchStatus
};
