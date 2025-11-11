const { Worker } = require('bullmq');
const { PS_VIDEOS, PS_VIDEOS_OLYMPICS } = require('@/src/queues/processors/processors');
const { QUEUE_NAMES, redisQueueConnection } = require('@/src/queues/init');
const { CREATE_TIMELINES } = require('@/src/queues/jobs');
const UPDATE_DAILY = require('@/src/queues/processors/opta/UPDATE_DAILY');
const CLEAN_OPTA_VIDEOS = require('@/src/queues/processors/opta/CLEAN_OPTA_VIDEOS');

const queueName = QUEUE_NAMES.OPTA_UPDATE_DAILY;

const worker = new Worker(
  queueName,
  async job => {
    switch (job.name) {
      case 'UPDATE_DAILY': {
        return await UPDATE_DAILY(job);
      }
      case 'CLEAN_OPTA_VIDEOS': {
        return await CLEAN_OPTA_VIDEOS(job);
      }
    }
  },
  {
    connection: redisQueueConnection,
    concurrency: 2,
    lockDuration: 600 * 1000 //seconds
  }
);

worker.on('failed', (job, error) => {
  LOGGER.error(
    {
      error,
      data: job?.data
    },
    `${queueName}:failed`
  );
});

worker.on('error', error => {
  LOGGER.error(error, `${queueName}:error`);
});

worker.on('completed', (job, returnvalue) => {
  // console.log(`${QUEUE_NAMES.PS_VIDEOS}:completed`, {
  //   returnvalue,
  //   data: job?.data
  // });
});

worker.on('stalled', job => {
  LOGGER.error({ data: job?.data }, `Job ${job.id} in queue ${queueName} stalled`);
});

process.on('unhandledRejection', (reason, p) => {
  LOGGER.error(reason, `WORKER ${queueName}: Unhandled Rejection at`);
});
