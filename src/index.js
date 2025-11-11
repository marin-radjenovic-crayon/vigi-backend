require('module-alias/register');
// Define globals across the app
global.MAINCONFIG = require('./config');
global.LOGGER = require('./middleware/utils/logger').logger;

LOGGER.info('process.env.APP_ROOT_PATH: %s', process.env.APP_ROOT_PATH);

const cluster = require('cluster');
const os = require('os');
const socketIO = require('socket.io');
const redisAdapter = require('socket.io-redis');
const app = require('./server');
const _ = require('lodash');
const { liveDaemon, seasonDaemon, standingDaemon } = require('@/src/daemon');
const { exec } = require('child_process');
const { schedule } = require('node-cron');
const { dailyDaemon, minutes5Daemon } = require('@/src/daemon_opta_womansworldcup'); // If lodash is used, ensure it's required
const websocket = require('./routes/websocket');
const { initSocket, getIo } = require('./socket');
const { setupQueues } = require('@/src/queues/init');
const AlarmEventsM = require('@/src/models/alarm_events');
const { CLIENTS } = require('@/src/constants/config');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const removeDuplicateMatchIds = async function () {
  const duplicates = await AlarmEventsM.aggregate([
    {
      $group: {
        _id: '$matchId',
        count: { $sum: 1 },
        ids: { $push: '$_id' }
      }
    },
    {
      $match: {
        count: { $gt: 1 }
      }
    }
  ]);

  for (const doc of duplicates) {
    doc.ids.shift();
    await AlarmEventsM.deleteMany({ _id: { $in: doc.ids } });
  }
};

let cpus = process.env.NODE_ENV === 'development' ? 6 : 6;
if (process.env.CPUS) {
  cpus = parseInt(process.env.CPUS, 10);
}
const daemonAssignments = {
  adler: {
    liveDaemon: 1,
    standingDaemon: 2,
    scheduleDaemon: 3,
    seasonDaemon: 4
  },
  goldcup: {
    liveDaemon: 1,
    seasonDaemon: 2
  },
  womansworldcup: {
    // liveDaemon: 1,
    // seasonDaemon: 1,
    // overviewDaemon: 2,
    // dailyDaemon: 3,
    // minutes5Daemon: 4
  },
  aws: {
    // liveDaemon: 1,
    // seasonDaemon: 1,
    // overviewDaemon: 2,
    // dailyDaemon: 3,
    // minutes5Daemon: 4
  }
};

let assigned = daemonAssignments[MAINCONFIG.client] || {};

const runDaemons = async (worker, assignedParam) => {
  LOGGER.debug('runDaemons assignedParam %o', assignedParam);
  LOGGER.debug('runDaemons worker.id %s', worker.id);

  // Common logic for initializing daemons
  const initializeDaemon = async (daemon, id) => {
    if (worker.id === id) {
      try {
        LOGGER.debug('initializeDaemon daemon.name: %s', daemon.name);
        await daemon.init();
      } catch (err) {
        LOGGER.error(err, `DAEMON_ERROR ${id} stopped with error:`);
        // process.exit(1);
      }
    }
  };
  if (MAINCONFIG.liveUpdateOn) {
    if (MAINCONFIG.client === CLIENTS.ADLER) {
      const { liveDaemon, scheduleDaemon, standingDaemon, seasonDaemon } = require('./daemon');
      await initializeDaemon(liveDaemon, assignedParam.liveDaemon);
      await initializeDaemon(seasonDaemon, assignedParam.seasonDaemon);
      await initializeDaemon(scheduleDaemon, assignedParam.scheduleDaemon);
      await initializeDaemon(standingDaemon, assignedParam.standingDaemon);
    } else if ([CLIENTS.PERFORM_STATS, CLIENTS.AWS].includes(MAINCONFIG.client)) {
      // const { overviewDaemon, liveDaemon, seasonDaemon } = require('./daemon_opta_womansworldcup');
      // await initializeDaemon(liveDaemon, assignedParam.liveDaemon);
      // await initializeDaemon(seasonDaemon, assignedParam.seasonDaemon);
      // await initializeDaemon(overviewDaemon, assignedParam.overviewDaemon);
      // await initializeDaemon(dailyDaemon, assignedParam.dailyDaemon);
      // await initializeDaemon(minutes5Daemon, assignedParam.minutes5Daemon);
    }
  }
};

let nextWorker = cpus;

const runApp = async () => {
  if (cluster.isMaster) {
    LOGGER.info(`Clustering to ${cpus} CPUs`);
    for (let i = 0; i < cpus; i++) {
      cluster.fork(); // Fork workers
    }

    cluster.on('exit', (worker, code) => {
      LOGGER.error('Worker crashed. code: %s', code);
      if (code !== 0 && !worker.exitedAfterDisconnect) {
        LOGGER.error('Worker crashed. Starting a new one.');
        cluster.fork(); // Restart crashed worker
      }
    });
  } else {
    //ADLER LEGACY BEGIN
    // const isWorkerAssignedToDaemon = Object.values(assigned).includes(cluster.worker.id);
    //
    // // If the worker is not assigned to any daemon, start the server
    // if (isWorkerAssignedToDaemon) {
    //   // Worker assigned to a daemon
    //   LOGGER.info(`Worker ${cluster.worker.id} is assigned to a daemon and will not start the server.`);
    //
    //   // Set up global exception handlers for daemon workers
    //   const exitHandler = error => {
    //     LOGGER.error(error, `DAEMON_ERROR ${cluster.worker.id}  unexpected exit handler`);
    //     // process.exit(1);
    //   };
    //
    //   process.on('uncaughtException', exitHandler);
    //   process.on('unhandledRejection', exitHandler);
    //   process.on('SIGTERM', () => {
    //     // LOGGER.error(`#DAEMON WORKER ${cluster.worker.id} received SIGTERM`);
    //     LOGGER.error(`DAEMON_ERROR ${cluster.worker.id} SIGTERM handler`);
    //     // process.exit(2);
    //   });
    //
    //   // Regardless of assignment, you might still want to run the daemon initialization for assigned workers
    //   const assignedEnv = process.env.assigned ? JSON.parse(process.env.assigned) : assigned;
    //   runDaemons(cluster.worker, assignedEnv);
    //
    // }
    //ADLER LEGACY END

    // Check if worker is among the first four
    if (cluster.worker.id <= 4) {
      LOGGER.info(`Worker ${cluster.worker.id} initializing as BullMQ worker.`);
      // Set up the BullMQ workers and queues for the first four workers
      // setupQueues(); // Initialize BullMQ queues and workers

      if (MAINCONFIG.liveUpdateOn && MAINCONFIG.client !== 'adler') {
        console.log(`Starting worker ${cluster.worker.id} queues...`);
        await setupQueues();
      }
    } else {
      // Other workers start the web server
      LOGGER.info(`Worker ${cluster.worker.id} initializing as web server.`);
      const server = app.listen(app.get('port'), '0.0.0.0', () => {
        LOGGER.info(`Server is listening on port ${MAINCONFIG.server.port}`);
      });

      initSocket(server);
      const io = getIo();
      websocket(io);

      const exitHandler = error => {
        LOGGER.error(error, 'SERVER_ERROR exited unexpected exit handler');
        if (server) {
          server.close();
        }
        if (io) {
          io.close();
        }
        process.exit(1);
      };

      process.on('uncaughtException', exitHandler);
      process.on('unhandledRejection', exitHandler);
      process.on('SIGTERM', () => {
        LOGGER.error('SERVER_ERROR SIGTERM received');
        if (server) {
          server.close();
        }
        if (io) {
          io.close();
        }
      });
    }

    if (cluster.worker.id === 4) {
      // Schedule the task to run at 5:00 AM every day
      if (process.env?.CLIENT_CFG === 'opta_opta_dynamic') {
        console.log('Cron job scheduled to run at 05:00 AM every day - Restart production streams');
        schedule('0 5 * * *', () => {
          console.log('Restart production streams at 05:00 AM');

          exec('node ./requests/restart.js', (error, stdout, stderr) => {
            if (error) {
              LOGGER.error(error, 'Error executing script');
              return;
            }

            if (stderr) {
              LOGGER.error(stderr, 'Script stderr error');
              return;
            }

            console.log(`Restarted production streams: ${stdout}`);
          });
        });
      }

      (async () => {
        await removeDuplicateMatchIds();
      })();
    }
  }
};

(async () => {
  await runApp();
})();
