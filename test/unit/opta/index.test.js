const { expect } = require('chai');
const BaseClass = require('../../../src/controllers/feeds/del');
const config = require('../../../src/config');
const _ = require('lodash');

describe('*********** FEEDS ***********', () => {

  const BaseClass = require('../../../src/controllers/feeds/del');
  const feedsConfig = _.get(config, 'feeds');
  const feedConfigData = _.get(config, 'feeds.del.data');
  beforeEach = async () => {

  };

  it('should get tables using api call', async () => {
    const base = new BaseClass();
    const result = await base.apiCall({ url: 'tables/19.json' });
    expect(result).to.be.an('object');
    expect(result.table).to.be.an('array').to.have.lengthOf(15);
  });

  it('should get teamSchedule', async () => {
    const base = new BaseClass();
    const urlCall = feedConfigData.teamSchedule.url
      .replace('[[SEASON]]', 2021)
      .replace('[[LEAGUE]]', 1)
      .replace('[[TEAMID]]', 2);
    const result = await base.apiCall({
      url: urlCall
    });

    expect(result).to.be.an('object');
    expect(result.matches).to.be.an('array').have.a.lengthOf(56);
  });

  it('should get season data', async () => {
    const base = new BaseClass();

    const playerStatsCall = feedConfigData.season.playerStats.url
      .replace('[[SEASON]]', 2020)
      .replace('[[LEAGUE]]', 1)
      .replace('[[TEAMID]]', 2);

    const playerStatsResult = await base.apiCall({
      url: playerStatsCall
    });

    expect(playerStatsResult).to.be.an('array').have.a.lengthOf(35);

    const teamStatsCall = feedConfigData.season.teamStats.url
      .replace('[[SEASON]]', 2020)
      .replace('[[LEAGUE]]', 1)
      .replace('[[TEAMID]]', 2);

    const teamStatsResult = await base.apiCall({
      url: teamStatsCall
    });

    expect(teamStatsResult).to.be.an('object');
    expect(teamStatsResult.teamName).to.be.equal('Adler Mannheim');

  });

  it('should get live game - gameInfo', async () => {
    const base = new BaseClass();

    const gameInfoCall = feedConfigData.liveGame.gameInfo.url
      .replace('[[EVENTID]]', 2079);

    const gameInfoCallResult = await base.apiCall({
      url: gameInfoCall
    });

    expect(gameInfoCallResult).to.be.an('object');
    expect(gameInfoCallResult.actualTimeName).to.be.equal('Ende n. Penaltyschießen');
    expect(gameInfoCallResult.actualTimeAlias).to.be.equal('KN');

  });

  it('should get live game - gameRoster', async () => {
    const base = new BaseClass();

    const urlCall = feedConfigData.liveGame.gameRoster.url
      .replace('[[EVENTID]]', 2079);

    const callResult = await base.apiCall({
      url: urlCall
    });

    expect(callResult).to.be.an('object');
    expect(callResult).to.have.property('home');
    expect(callResult).to.have.property('visitor');

  });

  it('should get live game - gameEvents', async () => {
    const base = new BaseClass();

    const urlCall = feedConfigData.liveGame.gameEvents.url
      .replace('[[EVENTID]]', 2079);

    const callResult = await base.apiCall({
      url: urlCall
    });

    expect(callResult).to.be.an('object');
    expect(callResult).has.property('overtime');
    expect(callResult).has.property('shootout');

  });

  it('should get live game - playerStats', async () => {
    const base = new BaseClass();

    const urlCall = feedConfigData.liveGame.playerStats.url
      .replace('[[EVENTID]]', 2079)
      .replace('[[TEAMID]]', 2);

    const callResult = await base.apiCall({
      url: urlCall
    });

    expect(callResult).to.be.an('array').to.have.lengthOf(35);
  });

  it('should get live game - teamStats', async () => {
    const base = new BaseClass();

    const urlCall = feedConfigData.liveGame.teamStats.url
      .replace('[[EVENTID]]', 2079)
      .replace('[[TEAMID]]', 2);

    const callResult = await base.apiCall({
      url: urlCall
    });

    expect(callResult).to.be.an('object');
    expect(callResult.shotsOnGoal).to.be.equal(39);
  });

  it('should get live game - allGoalies', async () => {
    const base = new BaseClass();

    const urlCall = feedConfigData.liveGame.allGoalies.url
      .replace('[[EVENTID]]', 2079)
      .replace('[[TEAMID]]', 2);

    const callResult = await base.apiCall({
      url: urlCall
    });

    expect(callResult).to.be.an('array');
    expect(callResult).to.have.lengthOf(9);
  });


});
