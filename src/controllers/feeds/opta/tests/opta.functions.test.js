const _ = require("lodash");
const FnFeedsClass = require("@/src/controllers/feeds/opta/functions");
global.MAINCONFIG = require('@/src/config');
global.LOGGER = require('@/src/middleware/utils/logger').logger;
let res, req;

const mongoDb = require('@/src/lib/mongo');
const async = require("async");
const {getEventData} = require("@/src/controllers/updater/helpers");
const {prepareMatchdayPure} = require("@/src/controllers/actions/handleTemplate");

describe('OPTA Functions tests', () => {
  beforeAll(async () => {
    // Mock the req and res objects
    await mongoDb()

    console.log('BEFORE ALL!')

  });
  beforeEach(() => {

  });

  it('getClosestMatchFromSchedule must get matches from schedule - BUNDESLIGA', async () => {
    // {
    //   knownName: 'German Bundesliga',
    //   tournamentCalendarId: '73zebisnu1109jix9yoc09yc4',
    //   id: '6by3h89i2eykc341oz7lv1ddd',
    //   guessedTimezone: 'Europe/Berlin',
    //   timezoneOffset: '+02:00'
    // },
    const bundesligaCalendarId = '73zebisnu1109jix9yoc09yc4'
    const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, { competitionId: bundesligaCalendarId });
    const FnFeeds = new FnFeedsClass({
      target: {
        league: bundesligaCalendarId
      }
    });

    // console.log('competitionConfig', competitionConfig)

    // const nowLocal = new Date('2024-12-21Z12:00:00Z');
    const nowLocal = new Date();
    // const nowLocal = new Date();
    const closestMatchesData = await FnFeeds.getClosestMatchFromSchedule(nowLocal.getTime(), [], competitionConfig);

    // console.log('closestMatchesData', closestMatchesData)

  }, 25000);
});
