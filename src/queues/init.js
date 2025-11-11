const { Queue, Worker } = require('bullmq');
const IORedis = require('ioredis');

const { redisConfig } = require('@/src/redis/config');
const { eachOfLimit } = require('async');
const crypto = require('crypto');
const { QUEUE_NAMES } = require('@/src/queues/constants');
const CLEAN_OPTA_VIDEOS = require('@/src/queues/processors/opta/CLEAN_OPTA_VIDEOS');
const { CLIENTS } = require('../constants/config');

const redisQueueConnection = new IORedis({
  ...redisConfig,
  maxRetriesPerRequest: null
});

const queueDefaultJobOptions = {
  attempts: 1,
  backoff: {
    type: 'exponential',
    delay: 5000
  }
};

// Reuse the ioredis instance
const PerformStatsVideos = new Queue(QUEUE_NAMES.PS_VIDEOS, {
  connection: redisQueueConnection,
  defaultJobOptions: queueDefaultJobOptions
});

const OlympicsTimeline = new Queue(QUEUE_NAMES.OLYMPICS_TIMELINE, {
  connection: redisQueueConnection,
  defaultJobOptions: queueDefaultJobOptions
});

const OlympicsDataUpdate = new Queue(QUEUE_NAMES.OLYMPICS_DATA_UPDATE, {
  connection: redisQueueConnection,
  defaultJobOptions: queueDefaultJobOptions
});

const OptaUpdateLive = new Queue(QUEUE_NAMES.OPTA_UPDATE_LIVE, {
  connection: redisQueueConnection,
  defaultJobOptions: queueDefaultJobOptions
});

const OptaUpdateSeason = new Queue(QUEUE_NAMES.OPTA_UPDATE_SEASON, {
  connection: redisQueueConnection,
  defaultJobOptions: queueDefaultJobOptions
});

const OptaUpdateOverview = new Queue(QUEUE_NAMES.OPTA_UPDATE_OVERVIEW, {
  connection: redisQueueConnection,
  defaultJobOptions: queueDefaultJobOptions
});

const OptaUpdateDaily = new Queue(QUEUE_NAMES.OPTA_UPDATE_DAILY, {
  connection: redisQueueConnection,
  defaultJobOptions: queueDefaultJobOptions
});

const OptaUpdate5Minutes = new Queue(QUEUE_NAMES.OPTA_UPDATE_5MINUTES, {
  connection: redisQueueConnection,
  defaultJobOptions: queueDefaultJobOptions
});

const queues = {
  PerformStatsVideos,
  OlympicsTimeline,
  OlympicsDataUpdate,
  OptaUpdateLive,
  OptaUpdateSeason,
  OptaUpdateDaily,
  OptaUpdate5Minutes,
  OptaUpdateOverview
};
// const myWorker = new Worker('myqueue', async job => {}, { connection });

const setupQueues = async () => {

  await cleanAllQueues();

  await InitWorkers();

  const trackedCompetitions = MAINCONFIG.feeds?.opta?.trackedCompetitions;

  await eachOfLimit(trackedCompetitions, 5, async (competition, index) => {
    const data = { competition };
    const jobId = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');

    // const jobId = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
    // get videos not suitable for bild and fcb
    if (MAINCONFIG.client !== CLIENTS.FCB && MAINCONFIG.client !== CLIENTS.BILD && MAINCONFIG.client !== CLIENTS.OF) {
      await queues.PerformStatsVideos.add('PS_GET_VIDEOS', data, {
        jobId: `${jobId}_PS_GET_VIDEOS`,
        repeat: {
          every: 1000 * 60 * 30 // Repeat every 30 minutes
        },
        removeOnComplete: 10_000
      });
    }

    // We don't need auto updates for One Football
    // Instead need only Pre and Post match timelines to be configured only one time and then create video
    // Could it be every 5 mins enough ?
    // 

    if (MAINCONFIG.client !== CLIENTS.OF) {
      await queues.OptaUpdateLive.add('UPDATE_LIVE', data, {
        jobId: `${jobId}_UPDATE_LIVE`,
        repeat: {
          every: 10000 // Repeat every 25 seconds
        },
        timeout: 7 * 60 * 1000, // 7 MINUTES
        removeOnComplete: 10_000
      });

      await queues.OptaUpdateSeason.add('UPDATE_SEASON', data, {
        jobId: `${jobId}_UPDATE_SEASON`,
        repeat: {
          every: 1000 * 60 * 30 // Repeat every 30 minutes
        },
        timeout: 7 * 60 * 1000, // 7 MINUTES
        removeOnComplete: 10_000
      });

      await queues.OptaUpdateOverview.add('UPDATE_OVERVIEW', data, {
        jobId: `${jobId}_UPDATE_OVERVIEW`,
        repeat: {
          every: 1000 * 60 // Repeat every 1 minute
        },
        timeout: 7 * 60 * 1000, // 7 MINUTES
        removeOnComplete: 10_000
      });

      await queues.OptaUpdateDaily.add('UPDATE_DAILY', data, {
        jobId: `${jobId}_UPDATE_DAILY`,
        repeat: {
          every: 1000 * 60 * 60 // Repeat every 1 hour
        },
        timeout: 7 * 60 * 1000, // 7 MINUTES
        removeOnComplete: 10_000
      });

      await queues.OptaUpdate5Minutes.add('UPDATE_5_MINUTES', data, {
        jobId: `${jobId}_UPDATE_5_MINUTES`,
        repeat: {
          every: 1000 * 5 * 60 // Repeat every 5 minutes
        },
        timeout: 7 * 60 * 1000, // 7 MINUTES
        removeOnComplete: 10_000
      });
    }
    if (MAINCONFIG.client === CLIENTS.OF) {
      await queues.OptaUpdate5Minutes.add('UPDATE_5_MINUTES', data, {
        jobId: `${jobId}_UPDATE_5_MINUTES`,
        repeat: {
          every: 1000 * 10 * 60 // Repeat every 5 minutes
        },
        delay: index * 10 * 60 * 1000, // <--- staggered start
        timeout: 7 * 60 * 1000, // 7 MINUTES
        removeOnComplete: 10_000
      });
    }
  });

  await queues.OptaUpdateDaily.add(
    'CLEAN_OPTA_VIDEOS',
    {},
    {
      repeat: {
        every: 1000 * 60 * 60 // Repeat every 1 hour
      },
      delay: 15 * 1000,
      timeout: 10 * 60 * 1000, // 10 MINUTES
      removeOnComplete: 10_000
    }
  );
};

const InitWorkers = async () => {
  require('./workers/PSVideos');
  // require('./workers/OLYMPICS_TIMELINE');
  // require('./workers/OLYMPICS_DATA_UPDATE');
  require('./workers/OptaUpdateLive');
  require('./workers/OptaUpdateOverview');
  require('./workers/OptaUpdate5Minutes');
  require('./workers/OptaUpdateSeason');
  require('./workers/OptaUpdateDaily');
};

const cleanAllQueues = async () => {
  for (const [name, queue] of Object.entries(queues)) {
    console.log(`Obliterating queue: ${name}`);
    try {
      await queue.obliterate({ force: true });
      console.log(`Queue ${name} obliterated.`);
    } catch (err) {
      console.error(`Failed to obliterate queue ${name}:`, err);
    }
  }
};

module.exports = {
  setupQueues,
  queues,
  PerformStatsVideos,
  OlympicsTimeline,
  OlympicsDataUpdate,
  OptaUpdateLive,
  OptaUpdateSeason,
  OptaUpdateDaily,
  OptaUpdate5Minutes,
  OptaUpdateOverview,
  QUEUE_NAMES,
  redisQueueConnection
};
