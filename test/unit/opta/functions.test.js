const { expect } = require('chai');
const BaseClass = require('../../../src/controllers/feeds/del');
const config = require('../../../src/config');
const _ = require('lodash');
const FnFeedsClass = require('../../../src/controllers/feeds/del/functions');
const {
  add,
  parseISO,
  startOfDay,
  endOfTomorrow,
  endOfDay,
  formatInTimeZone,
  setMinutes,
  setSeconds,
  setHours,
  setMilliseconds,
  format
} = require('date-fns');

describe('*********** FEEDS ***********', () => {

  const FnFeedsClass = require('../../../src/controllers/feeds/opta/functions');
  const feedsConfig = _.get(config, 'feeds');
  const feedConfigData = _.get(config, 'feeds.opta.data');

  const WorldCupTournamentCalendar = '2a8elwzsufmguwymxbshcx756';
  const WorldCupTournamentTeamGermany = '3l2t2db0c5ow2f7s7bhr6mij4';

  const WorldCupTournamentFirstGameQatar = 'ak5kkxvpxf1url15gci42ly7e';
  const WorldCupTournamentSecondGameEngland = 'bzyh8uc9dcu6mnj4zpx9nh6hg';
  const WorldCupTournamentFranceVsAustralia = 'ac04r9oqg77zxhk8nb69frbis';

  const BundesligaCal2022 = 'eg8fn8zof4ps7z12vlxa6efx0';
  const BundesligaEintracht = 'c5hderjlkcoaze51e5wgvptk';
  const BundesligaBayern = 'apoawtpvac4zqlancmvw4nk4o';
  const BundesligaEintrachtVsBayernEvent = 'd7jq17znw97xt4hbghsq4q4no';

  const GoldCupTournamentCalendar = 'aln4bcqqbei83pgypog6h8rh0'
  const WomansWcTournamentCalendar = '5mqc55tieqhbz2sech0fp70bu'

  before(async () => {
    MAINCONFIG.feeds.feedType = 'opta';
  });

  beforeEach(async () => {

  });

  it('should get all teams from league - Qatar 2022', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: WorldCupTournamentCalendar
      }
    });

    const result = await FnFeeds.getTeams().catch((err) => {
        console.log('err', err);
      }
    );

    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/getTeams_output_19.json'));
  });

  it('should get all teams from league - Bundesliga 2022', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: BundesligaCal2022
      }
    });

    const result = await FnFeeds.getTeams().catch((err) => {
        console.log('err', err);
      }
    );

    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/bundesliga2022/allTeams.json'));
  });

  it('should get lineup() with basic eventData - Bundesliga', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent,
        teamId: BundesligaEintracht
      }
    });

    const result = await FnFeeds.getLineup();
    // console.log(JSON.stringify(FnFeeds.matchInfo));
    expect(result).to.deep.equal(require('./data/bundesliga2022/lineup.json'));
  });

  it('should get goals() with basic eventData - Bundesliga', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent,
        teamId: BundesligaEintracht
      }
    });

    const result = await FnFeeds.getGoals();
    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/bundesliga2022/goals.json'));
  });


  it('should get team heatmap() with basic eventData - Bundesliga - eintracht', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent,
        teamId: BundesligaEintracht
      }
    });

    const result = await FnFeeds.getTeamHeatmap(BundesligaEintracht);
    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/bundesliga2022/heatmap-eintracht.json'));
  });

  it('should get top player heatmap() with basic eventData - Bundesliga - eintracht', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent,
        teamId: BundesligaEintracht
      }
    });

    const result = await FnFeeds.getTopPlayerHeatmap(BundesligaEintracht);

    console.log('result.stats', JSON.stringify(result));
    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/bundesliga2022/heatmap-eintracht-top_player.json'));
  });

  it('should get seasonStats - eintracht', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: BundesligaCal2022,
        teamId: BundesligaEintracht
      }
    });

    const result = await FnFeeds.getSeasonStats(BundesligaEintracht);
    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/bundesliga2022/season-stats-eintracht.json'));
  });

  it('should get getTotalSeasonStatsByKeys - accumulated values by keys', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: WorldCupTournamentCalendar
      }
    });

    const result = await FnFeeds.getTotalSeasonStatsByKeys(5);

    console.log('result', result);
    // console.log(JSON.stringify(result));
    // expect(result).to.deep.equal(require('./data/bundesliga2022/season-stats-eintracht.json'));
  });


  it('should get league table group phase', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: WorldCupTournamentCalendar
      }
    });

    //full
    const allGroups = await FnFeeds.getStandingTable();
    expect(allGroups).to.deep.equal(require('./data/worldcup2022/standing_groups_all.json'));
    //germany
    const teamGroup = await FnFeeds.getStandingTable(WorldCupTournamentTeamGermany);
    expect(teamGroup).to.deep.equal(require('./data/worldcup2022/standing_groups_germany.json'));
    console.log(JSON.stringify(teamGroup));
  });

  it('should get match player ratings', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent
      }
    });

    //full
    const matchPlayerRatings = await FnFeeds.getMatchPlayerRatings();

    console.log('matchPlayerRatings', matchPlayerRatings);
    // expect(allGroups).to.deep.equal(require('./data/worldcup2022/standing_groups_all.json'));
    // //germany
    // const teamGroup = await FnFeeds.getStandingTable(WorldCupTournamentTeamGermany);
    // expect(teamGroup).to.deep.equal(require('./data/worldcup2022/standing_groups_germany.json'));
    // console.log(JSON.stringify(teamGroup));
  });

  it('should get tournament topPerformance players / teams', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: BundesligaCal2022
      }
    });

    //full
    const data = await FnFeeds.getTournamentTopPerformers();

    expect(data).to.be.not.empty;

    console.log('data', data);
    // expect(allGroups).to.deep.equal(require('./data/worldcup2022/standing_groups_all.json'));
    // //germany
    // const teamGroup = await FnFeeds.getStandingTable(WorldCupTournamentTeamGermany);
    // expect(teamGroup).to.deep.equal(require('./data/worldcup2022/standing_groups_germany.json'));
    // console.log(JSON.stringify(teamGroup));
  });

  it('should get tournament rankings', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: BundesligaCal2022
      }
    });

    //full
    const data = await FnFeeds.getTournamentRankings();

    expect(data).to.be.not.empty;

    console.log('data', data);
    // expect(allGroups).to.deep.equal(require('./data/worldcup2022/standing_groups_all.json'));
    // //germany
    // const teamGroup = await FnFeeds.getStandingTable(WorldCupTournamentTeamGermany);
    // expect(teamGroup).to.deep.equal(require('./data/worldcup2022/standing_groups_germany.json'));
    // console.log(JSON.stringify(teamGroup));
  });

  it('should get next matchday based on current match not parsed', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: WorldCupTournamentFirstGameQatar,
        league: WorldCupTournamentCalendar
      }
    });

    const result = await FnFeeds.getNextMatchday().catch((err) => {
        console.log('err', err);
      }
    );

    // console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/worldcup2022/nextMatchday_firstMatch.json'));
  });

  it('should get direct match by id', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: WorldCupTournamentFirstGameQatar,
        league: WorldCupTournamentCalendar
      }
    });

    const result = await FnFeeds.getMatchById('bzyh8uc9dcu6mnj4zpx9nh6hg').catch((err) => {
        console.log('err', err);
      }
    );

    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(require('./data/worldcup2022/matchbyid_firstMatch.json'));
  });

  it('should get direct match by id - bundesliga', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent,
        league: BundesligaCal2022
      }
    });

    await FnFeeds.setLiveMatchStats().catch((err) => {
      console.error(err);
    });

    console.log('this.matchDetails', FnFeeds.matchDetails);

    // console.log(JSON.stringify(result));
    // console.log('result', result);
    // expect(result).to.deep.equal(require('./data/worldcup2022/matchbyid_firstMatch.json'));
  });

  it('should get closest match based on date and competition schedule', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: WorldCupTournamentCalendar
      }
    });

    const nowUtc = new Date('2022-11-22Z15:15:00Z').getTime();
    const closestMatchPrev = (await FnFeeds.getClosestMatchFromSchedule(nowUtc).catch((err) => {
        console.log('err', err);
      }
    ))?.[0]

    //new match, less than 30 minutes, start to pick it
    const nowUtc2 = new Date('2022-11-22Z15:35:00Z').getTime();
    const closestMatchLatest = (await FnFeeds.getClosestMatchFromSchedule(nowUtc2).catch((err) => {
        console.log('err', err);
      }
    ))?.[0]

    expect(closestMatchPrev.date).to.equal('2022-11-22Z');
    expect(closestMatchPrev.time).to.equal('13:00:00Z');

    expect(closestMatchLatest.date).to.equal('2022-11-22Z');
    expect(closestMatchLatest.time).to.equal('16:00:00Z');

    // const now = new Date().getTime();
    // const closestMatchNow = await FnFeeds.getClosestMatchFromSchedule(now).catch((err) => {
    //     console.log('err', err);
    //   }
    // );
    //
    // console.log('closestMatchNow', closestMatchNow);
  });

  it('should get closest match when first, sooner than 30 minutes', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: WorldCupTournamentCalendar
      }
    });

    const nowUtc1 = new Date('2022-11-20Z15:20:00Z').getTime();
    const onlyOneMatch = (await FnFeeds.getClosestMatchFromSchedule(nowUtc1).catch((err) => {
        console.log('err', err);
      }
    ))?.[0]

    expect(onlyOneMatch.date).to.equal('2022-11-20Z');
    expect(onlyOneMatch.time).to.equal('16:00:00Z');

    const nowUtc2 = new Date('2022-11-22Z09:20:00Z').getTime();
    const closestMatchFirstMoreMatches = (await FnFeeds.getClosestMatchFromSchedule(nowUtc2).catch((err) => {
        console.log('err', err);
      }
    ))?.[0]

    expect(closestMatchFirstMoreMatches.date).to.equal('2022-11-22Z');
    expect(closestMatchFirstMoreMatches.time).to.equal('10:00:00Z');


    //after first, next games should have 30 minutes time to pick, so previous match should be taken
    const nowUtc3 = new Date('2022-11-22Z12:25:00Z').getTime();
    const closestMatchSecondMoreMatches = await FnFeeds.getClosestMatchFromSchedule(nowUtc3).catch((err) => {
        console.log('err', err);
      }
    );

    expect(closestMatchFirstMoreMatches.date).to.equal('2022-11-22Z');
    expect(closestMatchFirstMoreMatches.time).to.equal('10:00:00Z');
  });


  it('should get closest matches based on date and competition schedule', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: WorldCupTournamentCalendar
      }
    });

    const nowUtc = new Date('2022-11-29Z14:25:00Z').getTime();
    const closestMatches = await FnFeeds.getClosestMatchFromSchedule(nowUtc).catch((err) => {
        console.log('err', err);
      }
    );

    expect(closestMatches[0].id).to.not.be.equal(closestMatches[1].id);
    expect(closestMatches[0].date).to.be.equal(closestMatches[1].date);
    expect(closestMatches[0].time).to.be.equal(closestMatches[1].time);

    //
    // const nowUtc2 = new Date('2022-11-29Z14:25:00Z').getTime();
    // const closestMatches = await FnFeeds.getClosestMatchFromSchedule(nowUtc).catch((err) => {
    //     console.log('err', err);
    //   }
    // );
    //
    // expect(closestMatches[0].id).to.not.be.equal(closestMatches[1].id);
    // expect(closestMatches[0].date).to.be.equal(closestMatches[1].date);
    // expect(closestMatches[0].time).to.be.equal(closestMatches[1].time);
  });

  it('GOLDCUP - should get closest matches based on date and competition schedule', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: GoldCupTournamentCalendar
      }
    });

    // const nowUtc = new Date('2023-07-02T22:30:00.121Z').getTime();
    const nowUtc = new Date('2023-07-04T21:50:00.121Z').getTime();
    const closestMatches = await FnFeeds.getClosestMatchFromSchedule(nowUtc).catch((err) => {
        console.log('err', err);
      }
    );

    console.log('closestMatches', closestMatches);

    // expect(closestMatches[0].id).to.not.be.equal(closestMatches[1].id);
    // expect(closestMatches[0].date).to.be.equal(closestMatches[1].date);
    // expect(closestMatches[0].time).to.be.equal(closestMatches[1].time);

    //
    // const nowUtc2 = new Date('2022-11-29Z14:25:00Z').getTime();
    // const closestMatches = await FnFeeds.getClosestMatchFromSchedule(nowUtc).catch((err) => {
    //     console.log('err', err);
    //   }
    // );
    //
    // expect(closestMatches[0].id).to.not.be.equal(closestMatches[1].id);
    // expect(closestMatches[0].date).to.be.equal(closestMatches[1].date);
    // expect(closestMatches[0].time).to.be.equal(closestMatches[1].time);
  });

  it('GOLDCUP - prepare timelines for all played matches', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: GoldCupTournamentCalendar
      }
    });

    // const nowUtc = new Date('2023-07-02T22:30:00.121Z').getTime();
    const nowUtc = new Date('2023-07-04T21:50:00.121Z').getTime();
    const matches = await FnFeeds.getMatches([], false).catch(err => {
      console.error(err);
    });

    console.log('matches', matches);

    // expect(closestMatches[0].id).to.not.be.equal(closestMatches[1].id);
    // expect(closestMatches[0].date).to.be.equal(closestMatches[1].date);
    // expect(closestMatches[0].time).to.be.equal(closestMatches[1].time);

    //
    // const nowUtc2 = new Date('2022-11-29Z14:25:00Z').getTime();
    // const closestMatches = await FnFeeds.getClosestMatchFromSchedule(nowUtc).catch((err) => {
    //     console.log('err', err);
    //   }
    // );
    //
    // expect(closestMatches[0].id).to.not.be.equal(closestMatches[1].id);
    // expect(closestMatches[0].date).to.be.equal(closestMatches[1].date);
    // expect(closestMatches[0].time).to.be.equal(closestMatches[1].time);
  });

  //
  // it('should get getGoals() get goals for statistics based on eventId', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getGoals();
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getGoals_output.json'));
  // });
  //
  // it('should get getGameInfo() get eventData', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getGameInfo();
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getGameInfo_output.json'));
  // });
  //
  // it('should get getLiveGoals() live goal HOME', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '2'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getLiveGoals([]);
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getLiveGoals_output_home.json'));
  // });
  //
  //
  // it('should get getLiveGoals() live goal AWAY', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '3'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getLiveGoals([]);
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getLiveGoals_output_away.json'));
  // });
  //
  // it('should get getTeamPlayers() live goal HOME', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '2'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getTeamPlayers();
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getTeamPlayers_output_home.json'));
  // });
  //
  //
  // it('should get getTeamPlayers() live goal AWAY', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '3'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getTeamPlayers();
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getTeamPlayers_output_away.json'));
  // });
  //
  // it('should get getTeamPlayersPure()', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '3'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getTeamPlayersPure();
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getTeamPlayersPure_output_away.json'));
  // });
  //
  // it('should get getTopScorers() based on playerstats data', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '3'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getTopScorers();
  //
  //
  //   console.log(JSON.stringify(result));
  //   // expect(result).to.deep.equal(require('./data/getTopScorers.json'));
  // });
  //
  //
  // it('should get getTopScorersSeason() based on playerstats data', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '3',
  //       league: '1'
  //
  //     }
  //   });
  //
  //   const result = await FnFeeds.getTopScorersSeason();
  //
  //
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getTopScorersSeason.json'));
  // });
  //
  // it('should get current matchday based on teamSchedule', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '2',
  //       league: '1'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getMatchday().catch((err) => {
  //       console.log('err', err);
  //     }
  //   );
  //
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getMatchday_output_t2_e2070.json'));
  // });
  //

  //
  // it('should get next matchday as home only', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '2',
  //       league: '1'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getNextMatchday(true).catch((err) => {
  //       console.log('err', err);
  //     }
  //   );
  //
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getNextMatchdayHome_output_t2_e2070.json'));
  // });
  //
  //
  //
  it('should get all matches for team - Germany 2022', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: WorldCupTournamentCalendar,
        teamId: WorldCupTournamentTeamGermany
      }
    });

    const resultGermany = await FnFeeds.getMatches([WorldCupTournamentTeamGermany]).catch((err) => {
        console.log('err', err);
      }
    );
    const resultAll = await FnFeeds.getMatches().catch((err) => {
        console.log('err', err);
      }
    );

    // console.log(JSON.stringify(resultGermany));
    expect(resultGermany).to.deep.equal(require('./data/getMatches_output_germany_2022.json'));

    // console.log(JSON.stringify(resultAll));
    expect(resultAll).to.deep.equal(require('./data/getMatches_output_all_2022.json'));
  });

  it('should get all matches for team - Bundesliga 2022', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: BundesligaCal2022,
        teamId: BundesligaEintracht
      }
    });

    const resultGermany = await FnFeeds.getMatches([BundesligaEintracht]).catch((err) => {
        console.log('err', err);
      }
    );
    const resultAll = await FnFeeds.getMatches().catch((err) => {
        console.log('err', err);
      }
    );

    // console.log(JSON.stringify(resultGermany));
    expect(resultGermany).to.deep.equal(require('./data/bundesliga2022/allMatches_eintracht.json'));

    console.log(JSON.stringify(resultAll));
    expect(resultAll).to.deep.equal(require('./data/bundesliga2022/allMatches_allTeams.json'));
  });

  it('should get current match data - Bundesliga 2022', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent
      }
    });

    const resultMatch = await FnFeeds.getMatch().catch((err) => {
        console.log('err', err);
      }
    );

    console.log('resultMatch', JSON.stringify(resultMatch));
    // const resultAll = await FnFeeds.getMatches().catch((err) => {
    //     console.log('err', err);
    //   }
    // );
    //
    expect(resultMatch).to.deep.equal(require('./data/bundesliga2022/match_eintracht.json'));
    //
    // console.log(JSON.stringify(resultAll));
    // expect(resultAll).to.deep.equal(require('./data/bundesliga2022/allMatches_allTeams.json'));
  });

  it('should get matchStats data - bundesliga - Eintracht', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent,
        league: BundesligaCal2022
      }
    });

    await FnFeeds.setLiveMatchStats().catch((err) => {
        console.log('err', err);
      }
    );
    const currentMatchday = await FnFeeds.getCurrentMatchday().catch((err) => {
        console.log('err', err);
      }
    );

    const output = {
      matchday: currentMatchday,
      matchInfo: FnFeeds?.matchInfo,
      matchStats: FnFeeds?.apiData?.liveMatchStats
    };

    console.log('output', JSON.stringify(output));
    expect(output).to.deep.equal(require('./data/bundesliga2022/matchStats_matchInfo_eintracht.json'));
  });

  it('should get player compare by position- bundesliga - Eintracht', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent,
        league: BundesligaCal2022
      }
    });

    const playerCompare = await FnFeeds.getPlayerCompare().catch((err) => {
        console.log('err', err);
      }
    );

    expect(playerCompare.home.shortFirstName).to.be.not.empty;
    expect(playerCompare.away.shortFirstName).to.be.not.empty;

    // console.log('playerCompare', JSON.stringify(playerCompare))
  });

  it('should get MVP matchplayerratings - bundesliga - Eintracht', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent,
        league: BundesligaCal2022
      }
    });

    const mvpHome = await FnFeeds.getMVP('home').catch((err) => {
        console.log('err', err);
      }
    );

    expect(mvpHome).to.deep.equal(require('./data/bundesliga2022/mvp_eintracht.json'));
  });

  it('should get MVP for away, because away is winning- bundesliga - Eintracht', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent,
        league: BundesligaCal2022
      }
    });

    const mvp = await FnFeeds.getMVP().catch((err) => {
        console.log('err', err);
      }
    );

    const playerStats = await FnFeeds.getPlayerStatsById(mvp.id).catch((err) => {
        console.log('err', err);
      }
    );
    //
    // // console.log('mvpHome', JSON.stringify(mvpHome));
    // console.log('playerStats', JSON.stringify(playerStats));
    //
    expect(playerStats).to.not.null;
  });

  it('should get competition top performers - bundesliga 2022', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: BundesligaEintrachtVsBayernEvent,
        league: BundesligaCal2022
      }
    });

    const topScorersGoals = await FnFeeds.getTopScorersSeason('Goals').catch((err) => {
        console.log('err', err);
      }
    );

    // console.log('topScorers', JSON.stringify(mvpHome));
    // console.log('topScorers', JSON.stringify(topScorers));

    expect(topScorersGoals).to.deep.equal(require('./data/bundesliga2022/season_topScorers.json'));

    const topScorersAssists = await FnFeeds.getTopScorersSeason('Assists').catch((err) => {
        console.log('err', err);
      }
    );
    //
    // console.log('topScorersAssists',topScorersAssists);
  });

  it('Should get all historic last games - WM 2022', async () => {
    const allTeams = require('../../ajaxMocker/feeds/opta/perform/soccerdata/tournamentCalendars/2a8elwzsufmguwymxbshcx756/contestants.json');

    console.log('allTeams', allTeams);

    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: WorldCupTournamentFirstGameQatar,
        league: WorldCupTournamentCalendar
      }
    });

    const getLastXGames = await FnFeeds.getLastXMatchdays().catch((err) => {
        console.log('err', err);
      }
    );

    console.log('getLastXGames', getLastXGames);

    // console.log('topScorers', JSON.stringify(mvpHome));
    // console.log('topScorers', JSON.stringify(topScorers));

    // expect(topScorers).to.deep.equal(require('./data/bundesliga2022/season_topScorers.json'));
  });


  it('should get MVP WM 2022 - France vs Australia', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        eventId: WorldCupTournamentFranceVsAustralia,
        league: WorldCupTournamentCalendar
      }
    });

    const mvp = await FnFeeds.getMVP().catch((err) => {
        console.log('err', err);
      }
    );

    const playerStats = await FnFeeds.getPlayerStatsById(mvp.mvp.id).catch((err) => {
        console.log('err', err);
      }
    );

    expect(playerStats).to.not.null;
  });

  it('should get all matchdays with results for selected date range - Womans Worldcup', async () => {
    //zambia vs japan
    //1qgcgjebl615g933kyl1rprf8
    const FnFeeds = new FnFeedsClass({
      target: {
        league: WomansWcTournamentCalendar,
        eventId: '1qgcgjebl615g933kyl1rprf8'
      }
    });

    await FnFeeds.setTeamSchedule();

    const tournamentCalendar = FnFeeds.apiData?.tournamentCalendar;

    let yestarday = new Date(`${tournamentCalendar.startDate}00:00:00Z`);
    let today = new Date(`${tournamentCalendar.endDate}23:59:59Z`);

    const results = await FnFeeds.getMatchdaysInRange(yestarday.toISOString(), today.toISOString()).catch((err) => {
        console.log('err', err);
      }
    );

    const matchdays = _.groupBy(results?.matchdays, (m) => m?.matchInfo?.stage?.name);
    const groupStage = _.groupBy(matchdays?.['Group Stage'], m => m?.matchInfo?.series?.name);

    // console.log(JSON.stringify(groupStage));
    // console.log('matchesToQuery', matchesToQuery);
    //
    // console.log('results', JSON.stringify(results));

    // expect(results.matchdays).to.have.length(7)
    // console.log('results', results.series);

    // // console.log(JSON.stringify(resultGermany));
    // expect(resultGermany).to.deep.equal(require('./data/getMatches_output_germany_2022.json'));
    //
    // // console.log(JSON.stringify(resultAll));
    // expect(resultAll).to.deep.equal(require('./data/getMatches_output_all_2022.json'));
  });

  it('should get last games by teamId sorted by date - Germany 2022', async () => {
    const FnFeeds = new FnFeedsClass({
      target: {
        league: WorldCupTournamentCalendar,
        eventId: WorldCupTournamentFranceVsAustralia
      }
    });



    const results = await FnFeeds.getTeamLastGames('home').catch((err) => {
        console.log('err', err);
      }
    );

    console.log('results', results);


  });

  it('should get data for goal shots - Womans Worldcup - Penalty / Eigene goal', async () => {
    //zambia vs japan
    //1qgcgjebl615g933kyl1rprf8
    // Penalty / Eigene goal
    //norway vs philiphines 30.07.2023 6:0
    //99sxyl8zxaxn8too33p4jdz4k
    const FnFeeds = new FnFeedsClass({
      target: {
        league: WomansWcTournamentCalendar,
        eventId: '99sxyl8zxaxn8too33p4jdz4k'
      }
    });

    const matchEvents = await FnFeeds.getGoalShotsCords()

    const matchInfo = await FnFeeds.getMatch().catch(err => {
      console.log('err', err);
    });

    const tournamentCalendar = FnFeeds.apiData?.tournamentCalendar;
    //
    // let yestarday = new Date(`${tournamentCalendar.startDate}00:00:00Z`);
    // let today = new Date(`${tournamentCalendar.endDate}23:59:59Z`);
    //
    // const results = await FnFeeds.getMatchdaysInRange(yestarday.toISOString(), today.toISOString()).catch((err) => {
    //     console.log('err', err);
    //   }
    // );
    //
    // const matchdays = _.groupBy(results?.matchdays, (m) => m?.matchInfo?.stage?.name);
    // const groupStage = _.groupBy(matchdays?.['Group Stage'], m => m?.matchInfo?.series?.name);
    //
    //
    // console.log(JSON.stringify(groupStage));
    // console.log('matchesToQuery', matchesToQuery);
    //
    // console.log('results', JSON.stringify(results));

    // expect(results.matchdays).to.have.length(7)
    // console.log('results', results.series);

    // // console.log(JSON.stringify(resultGermany));
    // expect(resultGermany).to.deep.equal(require('./data/getMatches_output_germany_2022.json'));
    //
    // // console.log(JSON.stringify(resultAll));
    // expect(resultAll).to.deep.equal(require('./data/getMatches_output_all_2022.json'));
  });


  //
  // it('should get live teams stats', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       league: 1
  //     }
  //   });
  //
  //   const result = await FnFeeds.getTeamsStats().catch((err) => {
  //       console.log('err', err);
  //     }
  //   );
  //
  //   // console.log("result", result);
  //
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getTeamStats_output_2070_2.json'));
  // });
  //
  // it('should get standing table', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       league: 1
  //     }
  //   });
  //
  //   const result = await FnFeeds.getStandingTable().catch((err) => {
  //       console.log('err', err);
  //     }
  //   );
  //
  //   console.log('result', result);
  //
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getStandingTable_output_2070_2.json'));
  // });
  //
  // it('should get last x games, based on current event', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '2',
  //       league: '1'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getLastXMatchdays(5).catch((err) => {
  //       console.log('err', err);
  //     }
  //   );
  //
  //   console.log(JSON.stringify(result.home));
  //   console.log(JSON.stringify(result.away));
  //   expect(result.home).to.deep.equal(require('./data/getLastXMatchdays_output_t2_e2070_home.json'));
  //   expect(result.away).to.deep.equal(require('./data/getLastXMatchdays_output_t2_e2070_away.json'));
  // });
  //
  // it.skip('should get last x games, based on current event - problematic data', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2234',
  //       teamId: '22',
  //       league: '1'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getLastXMatchdays(5).catch((err) => {
  //       console.log('err', err);
  //     }
  //   );
  //
  //   expect(result.home).to.deep.equal(require('./data/getLastXMatchdays_output_t22_e2234_home.json'));
  //   expect(result.away).to.deep.equal(require('./data/getLastXMatchdays_output_t22_e2234_away.json'));
  // });
  //
  // it('should set teamSchedule for both teams', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       teamId: '2',
  //       league: '1'
  //     }
  //   });
  //
  //   const result = await FnFeeds.setTeamSchedule(true).catch((err) => {
  //       console.log('err', err);
  //     }
  //   );
  //
  //   // console.log(JSON.stringify(FnFeeds.apiData.teamSchedule.length));
  //   // console.log(JSON.stringify(FnFeeds.apiData.teamScheduleAway.length));
  //   expect(FnFeeds.apiData.teamSchedule.length).to.be.equal(38);
  //   expect(FnFeeds.apiData.teamScheduleAway.length).to.be.equal(38);
  // });
  //
  // it('should get current round overview - sorted by date and time - selected team always first', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       league: 1
  //     }
  //   });
  //
  //   const result = await FnFeeds.getRoundOverview(7, 2).catch((err) => {
  //       console.log('err', err);
  //     }
  //   );
  //
  //   // console.log("result", result.length);
  //   // console.log("test %s", JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getRoundOverview_s2020_r7.json'));
  // });
  //
  // it('should season team stats for both teams', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       league: 1
  //     }
  //   });
  //
  //   const result = await FnFeeds.getTeamStatsSeason().catch((err) => {
  //       console.log('err', err);
  //     }
  //   );
  //
  //   //console.log("result", result);
  //   // console.log("test %s", JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getTeamStatsSeason_s2020.json'));
  // });
  //
  // it('should get season player stats for both teams', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2070',
  //       league: 1
  //     }
  //   });
  //
  //   const result = await FnFeeds.getPlayerStatsSeason().catch((err) => {
  //       console.log('err', err);
  //     }
  //   );
  //
  //   // console.log("result", result);
  //   console.log('test %s', JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getPlayerStatsSeason_s2020.json'));
  // });
  //
  // it('should get startingSix() home for problematic match', async () => {
  //   const FnFeeds = new FnFeedsClass({
  //     target: {
  //       eventId: '2572',
  //       teamId: '2'
  //     }
  //   });
  //
  //   const result = await FnFeeds.getStartingSix();
  //   console.log(JSON.stringify(result));
  //   expect(result).to.deep.equal(require('./data/getStartingSix_output_home_2572.json'));
  //
  //   // expect(result.startingSix[1]).to.be.equal(undefined);
  // });

});
