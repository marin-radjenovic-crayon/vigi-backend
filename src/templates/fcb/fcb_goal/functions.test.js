const { getGoalData } = require('./functions');

const events = require('./events.json');
const lineup = require('./lineup.json');

const res = getGoalData(events, lineup);

console.dir(res, {
  depth: null
});
