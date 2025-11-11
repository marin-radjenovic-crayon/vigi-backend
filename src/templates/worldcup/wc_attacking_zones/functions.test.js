const { extractAttackingZonesData } = require('./functions');

const { event: events } = require('./events.json');

const homeTeamId = '9q0arba2kbnywth8bkxlhgmdr';
const awayTeamId = 'e5p0ehyguld7egzhiedpdnc3w';

const res = extractAttackingZonesData(events, homeTeamId, awayTeamId);

console.log(res);
