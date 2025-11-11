const { expect } = require('chai');
const BaseClass = require('../../../src/controllers/feeds/del');
const config = require('../../../src/config');
const _ = require('lodash');
const FnFeedsClass = require('../../../src/controllers/feeds/del/functions');

describe('*********** FEEDS ***********', () => {

  const FnFeedsClass = require('../../../src/controllers/feeds/del/functions');
  const feedsConfig = _.get(config, 'feeds');
  const feedConfigData = _.get(config, 'feeds.del.data');

  beforeEach = async () => {

  };

  it('should get lineup() with basic eventData', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2079',
        teamId: '2'
      }
    });

    const result = await FnFeeds.getLineup();
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getLineup_output.json'));
  });


  it('should get startingSix() away with basic eventData', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2079',
        teamId: '2'
      }
    });

    const result = await FnFeeds.getStartingSix();
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getStartingSix_output_away.json'));
  });

  it('should get startingSix() home with basic eventData', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2079',
        teamId: '5'
      }
    });

    const result = await FnFeeds.getStartingSix();
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getStartingSix_output_home.json'));
  });

  it('should get getGoals() get goals for statistics based on eventId', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070'
      }
    });

    const result = await FnFeeds.getGoals();
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getGoals_output.json'));
  });

  it('should get getGameInfo() get eventData', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070'
      }
    });

    const result = await FnFeeds.getGameInfo();
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getGameInfo_output.json'));
  });

  it('should get getLiveGoals() live goal HOME', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '2'
      }
    });

    const result = await FnFeeds.getLiveGoals([]);
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getLiveGoals_output_home.json'));
  });


  it('should get getLiveGoals() live goal AWAY', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '3'
      }
    });

    const result = await FnFeeds.getLiveGoals([]);
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getLiveGoals_output_away.json'));
  });

  it('should get getTeamPlayers() live goal HOME', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '2'
      }
    });

    const result = await FnFeeds.getTeamPlayers();
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getTeamPlayers_output_home.json'));
  });


  it('should get getTeamPlayers() live goal AWAY', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '3'
      }
    });

    const result = await FnFeeds.getTeamPlayers();
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getTeamPlayers_output_away.json'));
  });

  it('should get getTeamPlayersPure()', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '3'
      }
    });

    const result = await FnFeeds.getTeamPlayersPure();
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getTeamPlayersPure_output_away.json'));
  });

  it('should get getTopScorers() based on playerstats data', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '3'
      }
    });

    const result = await FnFeeds.getTopScorers();


    console.log(JSON.stringify(result));
    // expect(result).to.deep.equal(require('./data/getTopScorers.json'));
  });


  it('should get getTopScorersSeason() based on playerstats data', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '3',
        league: '1'

      }
    });

    const result = await FnFeeds.getTopScorersSeason();


    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getTopScorersSeason.json'));
  });

  it('should get current matchday based on teamSchedule', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '2',
        league: '1'
      }
    });

    const result = await FnFeeds.getMatchday().catch((err) => {
        console.log('err', err);
      }
    );

    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getMatchday_output_t2_e2070.json'));
  });

  it('should get next matchday', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '2',
        league: '1'
      }
    });

    const result = await FnFeeds.getNextMatchday().catch((err) => {
        console.log('err', err);
      }
    );

    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getNextMatchday_output_t2_e2070.json'));
  });

  it('should get next matchday as home only', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '2',
        league: '1'
      }
    });

    const result = await FnFeeds.getNextMatchday(true).catch((err) => {
        console.log('err', err);
      }
    );

    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getNextMatchdayHome_output_t2_e2070.json'));
  });

  it('should get all teams from league', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        league: '1'
      }
    });

    const result = await FnFeeds.getTeams().catch((err) => {
        console.log('err', err);
      }
    );

    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getTeams_output_19.json'));
  });

  it('should get all matches for team', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        league: '1',
        teamId: '2'
      }
    });

    const result = await FnFeeds.getMatches().catch((err) => {
        console.log('err', err);
      }
    );

    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getMatches_output_2.json'));
  });

  it('should get live teams stats', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        league: 1
      }
    });

    const result = await FnFeeds.getTeamsStats().catch((err) => {
        console.log('err', err);
      }
    );

    // console.log("result", result);

    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getTeamStats_output_2070_2.json'));
  });

  it('should get standing table', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        league: 1
      }
    });

    const result = await FnFeeds.getStandingTable().catch((err) => {
        console.log('err', err);
      }
    );

    console.log('result', result);

    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getStandingTable_output_2070_2.json'));
  });

  it('should get last x games, based on current event', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '2',
        league: '1'
      }
    });

    const result = await FnFeeds.getLastXMatchdays(5).catch((err) => {
        console.log('err', err);
      }
    );

    console.log(JSON.stringify(result.home));
    console.log(JSON.stringify(result.away));
    expect(result.home).to.deep.equal(require('./data/getLastXMatchdays_output_t2_e2070_home.json'));
    expect(result.away).to.deep.equal(require('./data/getLastXMatchdays_output_t2_e2070_away.json'));
  });

  it.skip('should get last x games, based on current event - problematic data', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2234',
        teamId: '22',
        league: '1'
      }
    });

    const result = await FnFeeds.getLastXMatchdays(5).catch((err) => {
        console.log('err', err);
      }
    );

    expect(result.home).to.deep.equal(require('./data/getLastXMatchdays_output_t22_e2234_home.json'));
    expect(result.away).to.deep.equal(require('./data/getLastXMatchdays_output_t22_e2234_away.json'));
  });

  it('should set teamSchedule for both teams', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        teamId: '2',
        league: '1'
      }
    });

    const result = await FnFeeds.setTeamSchedule(true).catch((err) => {
        console.log('err', err);
      }
    );

    // console.log(JSON.stringify(FnFeeds.apiData.teamSchedule.length));
    // console.log(JSON.stringify(FnFeeds.apiData.teamScheduleAway.length));
    expect(FnFeeds.apiData.teamSchedule.length).to.be.equal(38);
    expect(FnFeeds.apiData.teamScheduleAway.length).to.be.equal(38);
  });

  it('should get current round overview - sorted by date and time - selected team always first', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        league: 1
      }
    });

    const result = await FnFeeds.getRoundOverview(7, 2).catch((err) => {
        console.log('err', err);
      }
    );

    // console.log("result", result.length);
    // console.log("test %s", JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getRoundOverview_s2020_r7.json'));
  });

  it('should season team stats for both teams', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        league: 1
      }
    });

    const result = await FnFeeds.getTeamStatsSeason().catch((err) => {
        console.log('err', err);
      }
    );

    //console.log("result", result);
    // console.log("test %s", JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getTeamStatsSeason_s2020.json'));
  });

  it('should get season player stats for both teams', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070',
        league: 1
      }
    });

    const result = await FnFeeds.getPlayerStatsSeason().catch((err) => {
        console.log('err', err);
      }
    );

    // console.log("result", result);
    console.log('test %s', JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getPlayerStatsSeason_s2020.json'));
  });

  it('should get startingSix() home for problematic match', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2572',
        teamId: '2'
      }
    });

    const result = await FnFeeds.getStartingSix();
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getStartingSix_output_home_2572.json'));

    // expect(result.startingSix[1]).to.be.equal(undefined);
  });

  it('should get startingSix() home for problematic match II', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2937',
        teamId: '2'
      }
    });

    const result = await FnFeeds.getStartingSix();
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal({
      'actualTimeName': 'Ende',
      'actualTimeAlias': 'K',
      'stadium': 'SAP Arena',
      'numberOfViewers': 7990,
      'teamBilance': {
        'homeWin': 13,
        'visitorWin': 13
      },
      'results': {
        'extra_time': false,
        'shooting': false,
        'contumacy': false,
        'score': {
          'final': {
            'score_home': 0,
            'score_guest': 3
          },
          'first_period': {
            'score_home': 0,
            'score_guest': 2
          },
          'second_period': {
            'score_home': 0,
            'score_guest': 0
          },
          'third_period': {
            'score_home': 0,
            'score_guest': 1
          }
        }
      },
      'home': {
        'id': 2,
        'name': 'Adler Mannheim',
        'shortcut': 'MAN'
      },
      'away': {
        'id': 7,
        'name': 'Iserlohn Roosters',
        'shortcut': 'IEC'
      },
      'startingSix': [{
        'playerId': 1768,
        'matchPlayerId': 170390,
        'name': 'Korbinian',
        'surname': 'Holzer',
        'jersey': 4,
        'position': 'DE',
        'captain': false,
        'startingSix': true,
        'roster': '211'
      }, {
        'playerId': 23,
        'matchPlayerId': 170368,
        'name': 'Sinan',
        'surname': 'Akdag',
        'jersey': 7,
        'position': 'FO',
        'captain': false,
        'startingSix': true,
        'roster': '311'
      }, {
        'playerId': 1655,
        'matchPlayerId': 170384,
        'name': 'Taro',
        'surname': 'Jentzsch',
        'jersey': 11,
        'position': 'FO',
        'captain': false,
        'startingSix': true,
        'roster': '312'
      }, {
        'playerId': 143,
        'matchPlayerId': 170371,
        'name': 'Nicolas',
        'surname': 'Krämmer',
        'jersey': 21,
        'position': 'FO',
        'captain': false,
        'startingSix': true,
        'roster': '313'
      }, {
        'playerId': 1362,
        'matchPlayerId': 170377,
        'name': 'Joonas',
        'surname': 'Lehtivuori',
        'jersey': 6,
        'position': 'DE',
        'captain': false,
        'startingSix': true,
        'roster': '212'
      }, {
        'playerId': 516,
        'matchPlayerId': 170374,
        'name': 'Felix',
        'surname': 'Brückmann',
        'jersey': 90,
        'position': 'GK',
        'captain': false,
        'startingSix': true,
        'roster': '101'
      }],
      'side': 'home',
      'referees': {
        'headReferee1': {
          'id': 120,
          'name': 'Marc Iwert'
        },
        'headReferee2': {
          'id': 284,
          'name': 'Roman Gofman'
        },
        'lineReferee1': {
          'id': 254,
          'name': 'Jan Philipp Priebsch'
        },
        'lineReferee2': {
          'id': 201,
          'name': 'Kai Jürgens'
        }
      }
    });

    // expect(result.startingSix[1]).to.be.equal(undefined);
  });

});
