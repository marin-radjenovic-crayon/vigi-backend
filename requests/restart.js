const { restartStreams, parseInputJsonToCsv } = require('./stream');


(async ()=> {
  await restartStreams();
  await parseInputJsonToCsv();
})()

