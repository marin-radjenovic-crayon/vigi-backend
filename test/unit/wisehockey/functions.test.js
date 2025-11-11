const { expect } = require('chai');
const BaseClass = require('../../../src/controllers/feeds/del');
const config = require('../../../src/config');
const _ = require('lodash');
const FnFeedsClass = require('../../../src/controllers/feeds/wisehockey/functions');
const fs = require('fs');

describe('*********** FEEDS WISEHOCKEY FUNCTIONS ***********', () => {

  const FnFeedsClass = require('../../../src/controllers/feeds/wisehockey/functions');
  const feedsConfig = _.get(config, 'feeds');
  const feedConfigData = _.get(config, 'feeds.wiseHockey.data');

  const targetCompetitonId = 2;
  const targetTeamIdAdler = '2';
  const targetFirstAdlerGameId = '2902';
  const eventIdWinAfterShooting = '2613';

  before(async () => {
    MAINCONFIG.feeds.feedType = 'wiseHockey';
  });

  beforeEach(async () => {

  });

  it('should get lineup() with basic eventData', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2079',
        teamId: '2'
      }
    });

    const result = await FnFeeds.getLineup();
    // console.log(JSON.stringify(result));
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
    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getStartingSix_output_away.json'));
  });

  it('should get startingSix() home with basic eventData', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: targetCompetitonId,
        eventId: targetFirstAdlerGameId,
        teamId: targetTeamIdAdler
      }
    });

    const result = await FnFeeds.getStartingSix(targetTeamIdAdler);
    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getStartingSix_output_home.json'));
  });

  it('should get players for team', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: targetCompetitonId,
        eventId: targetFirstAdlerGameId,
        teamId: targetTeamIdAdler
      }
    });

    const result = await FnFeeds.getPlayers(targetTeamIdAdler);

    // console.log('result', result);
    // console.log(JSON.stringify(result));

    expect(result[0]).to.deep.equal({
      id: '1377',
      name: 'Lean Bergmann',
      firstname: 'Lean',
      surname: 'Bergmann',
      position: 'Center',
      jersey: 19,
      nationality: undefined
    });
  });

  it('should get getGoals() get goals for statistics based on eventId', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: targetCompetitonId,
        eventId: eventIdWinAfterShooting,
        teamId: targetTeamIdAdler
      }
    });

    const result = await FnFeeds.getGoals();

    expect(result).to.deep.equal([
      {
        id: '1767',
        name: 'Nigel Dawes',
        firstname: 'Nigel',
        surname: 'Dawes',
        position: 'Center',
        jersey: 9,
        nationality: undefined,
        scoreboardTime: ['8.']
      },
      {
        id: '2118',
        name: 'Matthew Donovan',
        firstname: 'Matthew',
        surname: 'Donovan',
        position: 'DefenseLeft',
        jersey: 46,
        nationality: undefined,
        scoreboardTime: ['10.']
      }
    ]);
  });

  it('should get getGameInfo() get eventData', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: '2070'
      }
    });

    const result = await FnFeeds.getGameInfo();
    // console.log(JSON.stringify(result));
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
    // console.log(JSON.stringify(result));
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
    // console.log(JSON.stringify(result));
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
    // console.log(JSON.stringify(result));
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
    // console.log(JSON.stringify(result));
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
    // console.log(JSON.stringify(result));
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


    // console.log(JSON.stringify(result));
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

    // console.log(JSON.stringify(result));
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
        league: targetCompetitonId
      }
    });

    const result = await FnFeeds.getTeams().catch((err) => {
        console.log('err', err);
      }
    );

    // console.log('result', result);

    expect(result).to.deep.equal([{
      shortcut: 'Adler Mannheim',
      name: 'Adler Mannheim',
      teamId: '2'
    }]);
  });

  it('should get all matches for team - unparsed', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: targetCompetitonId,
        teamId: targetTeamIdAdler
      }
    });

    const result = await FnFeeds.getMatches(false).catch((err) => {
        console.log('err', err);
      }
    );

    expect(_.find(result, { id: '2902' })).to.deep.equal({
      'id': '2902',
      'date': '2023-01-26T18:30:00+00:00',
      'homeTeam': {
        'id': '2',
        'fullName': 'Adler Mannheim',
        'shortName': 'Adler Mannheim'
      },
      'awayTeam': {
        'id': '15',
        'fullName': 'Schwenninger Wild Wings',
        'shortName': 'Schwenninger Wild Wings'
      },
      'venue': {
        'name': 'SAP Arena',
        'city': 'Mannheim'
      },
      'status': 'Finished',
      'homeGoals': 0,
      'awayGoals': 3,
      'lastUpdated': null
    });
  });

  it('set all type of match stats should work - setMatchStatistics', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: targetCompetitonId,
        teamId: targetTeamIdAdler,
        eventId: targetFirstAdlerGameId
      }
    });

    const target = ['faceoffs', 'offenses', 'puckcontrol', 'goals', 'shots', 'passes', 'skaterstatistics', 'skatershifts', 'goalkeeperstatistics', 'teamstatistics', 'bluelinecrossings'];

    await FnFeeds.setMatchStatistics(target).catch((err) => {
        console.log('err', err);
      }
    );

    expect(Object.keys(FnFeeds.apiData.liveGame.matchStats).length).to.equal(11);
  });

  it('should get all matches for team - parsed', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: targetCompetitonId,
        teamId: targetTeamIdAdler
      }
    });

    const result = await FnFeeds.getMatches(true).catch((err) => {
        console.log('err', err);
      }
    );

    // console.log('###result', JSON.stringify(result[0]));

    expect(_.find(result, { id: '2902' })).to.deep.equal({
      'eventId': '2902',
      'competitionId': '2',
      'competitionName': 'DEL',
      'date': '26.01.2023',
      'time': '19:30',
      'start_date': null,
      'real_end_date': null,
      'stadion': null,
      'season': '2022',
      'round': 'undefined',
      'home': {
        'name': 'tbd.',
        'id': 'undefined',
        'shortcut': 'tbd.'
      },
      'away': {
        'name': 'tbd.',
        'id': 'undefined',
        'shortcut': 'tbd.'
      },
      'score': {
        'home': 0,
        'away': 0
      },
      'actual_time_name': null,
      'actual_time_alias': null,
      'status': null,
      'results': null,
      'teamId': 2
    });
  });

  it('should get live teams stats', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: targetFirstAdlerGameId,
        league: targetCompetitonId
      }
    });

    const result = await FnFeeds.getTeamStats().catch((err) => {
        console.log('err', err);
      }
    );
    // console.log("result", result);

    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getTeamStats_output_2902_2.json'));
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

    // console.log('result', result);

    // console.log(JSON.stringify(result));
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

    // console.log(JSON.stringify(result.home));
    // console.log(JSON.stringify(result.away));
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
    // console.log('test %s', JSON.stringify(result));
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
    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getStartingSix_output_home_2572.json'));

    // expect(result.startingSix[1]).to.be.equal(undefined);
  });

  it('get rankings using match skater statistics', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: targetCompetitonId,
        teamId: targetTeamIdAdler,
        eventId: targetFirstAdlerGameId
      }
    });

    const ranks = await FnFeeds.getMatchRanks().catch((err) => {
        console.log('err', err);
      }
    );

    // await fs.writeFileSync(`${__dirname}/matchRanks.json`, JSON.stringify(ranks));

    expect(ranks).to.deep.equal(require('./data/matchRanks.json'))
  });

});
