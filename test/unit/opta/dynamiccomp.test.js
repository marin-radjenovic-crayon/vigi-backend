const { expect } = require('chai');
const config = require('../../../src/config');
const _ = require('lodash');
const FnFeedsClass = require('@/src/controllers/feeds/opta/functions');

describe('*********** FEEDS ***********', () => {
  const FnFeedsClass = require('../../../src/controllers/feeds/opta/functions');
  const feedsConfig = _.get(config, 'feeds');
  const feedConfigData = _.get(config, 'feeds.opta.data');

  const uclTournamentCalendarId = 'eaf2z13av1rs0jbwnnxfapdec';
  const eplTournamentCalendarId = '1jt5mxgn4q5r6mknmlqv5qjh0';

  before(async () => {
    MAINCONFIG.feeds.feedType = 'opta';
  });

  beforeEach(async () => {});

  it('should get league table group phase', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: uclTournamentCalendarId
      }
    });

    //full
    const allGroups = await FnFeeds.getStandingTable();

    console.log('allGroups', allGroups);

    // expect(allGroups).to.deep.equal(require('./data/worldcup2022/standing_groups_all.json'));
    // //germany
    // const teamGroup = await FnFeeds.getStandingTable(WorldCupTournamentTeamGermany);
    // expect(teamGroup).to.deep.equal(require('./data/worldcup2022/standing_groups_germany.json'));
    // console.log(JSON.stringify(teamGroup));
  });

  it('should get top 5 ranking teams for goals', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: eplTournamentCalendarId
      }
    });

    //full

    const ranking = await FnFeeds.getTournamentTeamRanking(
      ['total goals ranking'],
      ['total goals', 'total scoring att'],
      5
    );

    console.log('ranking', JSON.stringify(ranking));
  });

  it('should get top 5 ranking players for goals', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: eplTournamentCalendarId
      }
    });

    //full

    const gk = {
      rankStatType: ['total saves ranking'],
      additionalStats: ['total games', 'total goals conceded', 'total saves']
    };

    const totalPoints = {
      rankStatType: ['total goals ranking', 'total assists'],
      additionalStats: ['total goals', 'total assists', 'total_points']
    };

    const ranking = await FnFeeds.getTournamentPlayerRanking(totalPoints.rankStatType, totalPoints.additionalStats, 5);

    console.log('ranking', JSON.stringify(ranking));
  });

  it.only('should getTournamentSingleTeamRanking', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: eplTournamentCalendarId
      }
    });

    const teamRanking = await FnFeeds.getTournamentSingleTeamRanking('4dsgumo7d4zupm2ugsvm4zm4d');
    const playerRanking = await FnFeeds.getTournamentSinglePlayerRanking(
      '4dsgumo7d4zupm2ugsvm4zm4d',
      'cnmlhoum9aahwqruxgmz2gcfd'
    );

    console.log('teamRanking', teamRanking);
    console.log('playerRanking', playerRanking);
  });
});
