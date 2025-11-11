/* eslint handle-callback-err: "off"*/

const seed = require('../../../scripts/seeder/seed');
const clean = require('../../../scripts/seeder/clean');

const faker = require('faker');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require(APP_ROOT_PATH + '/src/server');
// eslint-disable-next-line no-unused-vars
const should = chai.should();
const expect = chai.expect;
const UpdaterClass = require('../../../src/controllers/updater/optaUpdater');

chai.use(chaiHttp);

describe('*********** UPDATER OPTA ***********', () => {

  beforeEach(async () => {
    await clean();
    await seed();
  });

  it.skip('it should check missing goals for event based on db feed record', async () => {
    const updaterInstance = new UpdaterClass();
    const eventData = {
      selectedTeamId: '2',
      competitionId: '1',
      competitionName: 'Del',
      type: 'match',
      homeTeamId: '2',
      awayTeamId: '14',
      side: 'home',
      eventId: '1821',
      dateObj: '202130203023'
    };

    const something = await updaterInstance.createGoalsEntries(eventData).catch((err) => {
      LOGGER.error(err);
    });

  }).timeout(15000);

  it('it should check updates for gameInfo', async () => {
    const updaterInstance = new UpdaterClass();
    const eventData = {
      selectedTeamId: '2',
      competitionId: '1',
      competitionName: 'Del',
      type: 'match',
      homeTeamId: '2',
      awayTeamId: '14',
      side: 'home',
      eventId: '1821',
      dateObj: '202130203023'
    };
    const shouldUpdate = await updaterInstance.checkLiveGame('gameInfo', eventData);
    expect(shouldUpdate).to.be.true;

    const shouldUpdate2 = await updaterInstance.checkLiveGame('gameInfo', eventData);
    expect(shouldUpdate2).to.be.false;
  });

  it('it should check updates for gameRoster', async () => {
    const eventData = {
      selectedTeamId: '2',
      competitionId: '1',
      competitionName: 'Del',
      type: 'match',
      homeTeamId: '2',
      awayTeamId: '14',
      side: 'home',
      eventId: '1821',
      dateObj: '202130203023'
    };
    const updaterInstance = new UpdaterClass();
    const shouldUpdate = await updaterInstance.checkLiveGame('gameRoster', eventData);
    expect(shouldUpdate).to.be.true;

    const shouldUpdate2 = await updaterInstance.checkLiveGame('gameRoster', eventData);
    expect(shouldUpdate2).to.be.false;
  });

  it('it should check updates for teamStats', async () => {
    const eventData = {
      selectedTeamId: '2',
      competitionId: '1',
      competitionName: 'Del',
      type: 'match',
      homeTeamId: '2',
      awayTeamId: '14',
      side: 'home',
      eventId: '1821',
      dateObj: '202130203023'
    };
    const updaterInstance = new UpdaterClass();
    const shouldUpdate = await updaterInstance.checkLiveGame('teamStats', eventData);
    expect(shouldUpdate).to.be.true;

    const shouldUpdate2 = await updaterInstance.checkLiveGame('teamStats', eventData);
    expect(shouldUpdate2).to.be.false;
  });

  it('it should check updates for playerStats', async () => {
    const eventData = {
      selectedTeamId: '2',
      competitionId: '1',
      competitionName: 'Del',
      type: 'match',
      homeTeamId: '2',
      awayTeamId: '14',
      side: 'home',
      eventId: '1821',
      dateObj: '202130203023'
    };
    const updaterInstance = new UpdaterClass();
    const shouldUpdate = await updaterInstance.checkLiveGame('playerStats', eventData);
    expect(shouldUpdate).to.be.true;

    const shouldUpdate2 = await updaterInstance.checkLiveGame('playerStats', eventData);
    expect(shouldUpdate2).to.be.false;
  });

  it('it should check updates for standing', async () => {
    const updaterInstance = new UpdaterClass();
    const shouldUpdate = await updaterInstance.checkStanding();
    expect(shouldUpdate).to.be.true;

    const shouldUpdate2 = await updaterInstance.checkStanding();
    expect(shouldUpdate2).to.be.false;
  });

  it('it should check init fn for feeds updater', async () => {
    // await clean();
    // await seed();
    const updaterInstance = new UpdaterClass();
    const updateArray = await updaterInstance.init().catch((err) => {
      console.error(err);
    });

    // console.log("updateArray", updateArray);

    expect(updateArray).to.deep.equal(['goals',
      'gameInfo',
      'gameRoster',
      'teamStats',
      'playerStats',
      'standing'
    ]);
  });

  //@todo simulate auto-update with adler templates, adapt seeder, to work per - test-case / suite
  it('it should check simulate updates for some template', async () => {
    const updaterInstance = new UpdaterClass();
    // const shouldUpdate = await updaterInstance.checkLiveGame('gameInfo', {
    //         selectedTeamId: '2',
    //         competitionId: '1',
    //         competitionName: 'Del',
    //         type: 'match',
    //         homeTeamId: '2',
    //         awayTeamId: '14',
    //         side: 'home',
    //         eventId: '1821',
    //         dateObj: '202130203023'
    //   }
    // );

    const updater = await updaterInstance.processTemplates(['gameInfo'], {
        selectedTeamId: '2',
        competitionId: '1',
        competitionName: 'Del',
        type: 'match',
        homeTeamId: '2',
        awayTeamId: '14',
        side: 'home',
        eventId: '1821',
        dateObj: '202130203023'
      }
    );

    console.log('updater', updater);


  });

});
