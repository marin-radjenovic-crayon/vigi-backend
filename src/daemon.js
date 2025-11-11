const updaterClass = require('./controllers/updater/delUpdater');

let liveDaemonCount = 0;
let standingDaemonCount = 0;
let scheduleDaemonCount = 0;
let seasonDaemonCount = 0;

const wait = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const liveDaemon = {
  async init() {
    await wait(1000 * 15);
    return liveDaemon.action();
  },
  async action() {
    // const randomTime = Math.floor(Math.random() * 10) * 1000;
    // LOGGER.info(`PROMISE ACTION: %s`, randomTime);
    const instance = new updaterClass();

    LOGGER.debug('LiveDaemon check');

    const updates = await instance.init(['goals', 'gameInfo', 'gameRoster', 'teamStats', 'playerStats']).catch(err => {
      LOGGER.error(err, 'UPDATER ERROR');
      process.exit(1);
    });

    if (updates.length) {
      liveDaemonCount++;
    }

    LOGGER.info(`liveDaemon updates (${liveDaemonCount}): %o`, updates);

    return liveDaemon.init();
  }
};

const standingDaemon = {
  async init() {
    await wait(1000 * 60 * 2);
    return standingDaemon.action();
  },
  async action() {
    // const randomTime = Math.floor(Math.random() * 10) * 1000;
    // LOGGER.info(`PROMISE ACTION: %s`, randomTime);
    const instance = new updaterClass();

    LOGGER.debug('standingDaemon check');

    const updates = await instance.init(['standing']).catch(err => {
      LOGGER.error(err, 'UPDATER ERROR');
      process.exit(1);
    });

    if (updates.length) {
      standingDaemonCount++;
    }

    LOGGER.info(`standingDaemonCount updates (${standingDaemonCount}): %o`, updates);

    return standingDaemon.init();
  }
};

const scheduleDaemon = {
  async init() {
    await wait(1000 * 35);
    return scheduleDaemon.action();
  },
  async action() {
    // const randomTime = Math.floor(Math.random() * 10) * 1000;
    // LOGGER.info(`PROMISE ACTION: %s`, randomTime);
    const instance = new updaterClass();

    LOGGER.debug('scheduleDaemon check');

    const updates = await instance.init(['schedule']).catch(err => {
      LOGGER.error(err, 'UPDATER ERROR');
      process.exit(1);
    });

    if (updates.length) {
      scheduleDaemonCount++;
    }

    LOGGER.info(`scheduleDaemonCount updates (${scheduleDaemonCount}): %o`, updates);

    return scheduleDaemon.init();
  }
};

const seasonDaemon = {
  async init() {
    await wait(1000 * 60 * 30);
    return seasonDaemon.action();
  },
  async action() {
    // const randomTime = Math.floor(Math.random() * 10) * 1000;
    // LOGGER.info(`PROMISE ACTION: %s`, randomTime);
    const instance = new updaterClass();

    LOGGER.debug('seasonDaemon check');

    const updates = await instance.init(['playerStatsSeason', 'teamStatsSeason']).catch(err => {
      LOGGER.error(err, 'UPDATER ERROR');
      process.exit(1);
    });

    if (updates.length) {
      seasonDaemonCount++;
    }

    LOGGER.info(`seasonDaemonCount updates (${seasonDaemonCount}): %o`, updates);

    return seasonDaemon.init();
  }
};

module.exports = {
  liveDaemon,
  standingDaemon,
  scheduleDaemon,
  seasonDaemon
};
