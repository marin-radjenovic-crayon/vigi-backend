const _ = require('lodash');
const anyOutcomeEvents = [
  1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 41, 42, 45, 49, 50, 51, 52, 53, 54, 55, 56, 60, 61, 69, 72, 74
];
const zeroOutcomeEvents = [44, 59];

function calculateAttackingZonesData(events, homeTeamId, awayTeamId) {
  const counter = {
    home: {
      leftZone: 0,
      centralZone: 0,
      rightZone: 0,
      total: 0
    },
    away: {
      leftZone: 0,
      centralZone: 0,
      rightZone: 0,
      total: 0
    }
  };

  let totalEvents = 0;
  for (const { typeId, outcome, contestantId, x, y } of events) {
    if (anyOutcomeEvents.includes(typeId) || (zeroOutcomeEvents.includes(typeId) && outcome === 0)) {
      const team = contestantId === homeTeamId ? 'home' : 'away';
      if (x < 50) {
        continue;
      }

      totalEvents += 1;

      let zone = 'centralZone';
      if (y >= 66.7) {
        zone = 'leftZone';
      }
      if (y <= 33.3) {
        zone = 'rightZone';
      }

      counter[team][zone] = counter[team][zone] + 1;
      counter[team].total = counter[team].total + 1;
    }
  }

  return {
    home: {
      leftZone: _.round((counter.home.leftZone / counter.home.total) * 100, 2),
      centralZone: _.round((counter.home.centralZone / counter.home.total) * 100, 2),
      rightZone: _.round((counter.home.rightZone / counter.home.total) * 100, 2)
    },
    away: {
      leftZone: _.round((counter.away.leftZone / counter.away.total) * 100, 2),
      centralZone: _.round((counter.away.centralZone / counter.away.total) * 100, 2),
      rightZone: _.round((counter.away.rightZone / counter.away.total) * 100, 2)
    }
  };
}

module.exports = {
  extractAttackingZonesData: calculateAttackingZonesData
};
