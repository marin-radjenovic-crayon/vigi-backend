const { Worker } = require('bullmq');
const { PS_VIDEOS, PS_VIDEOS_OLYMPICS } = require('@/src/queues/processors/processors');
const { QUEUE_NAMES, redisQueueConnection } = require('@/src/queues/init');
const { CREATE_TIMELINES } = require('@/src/queues/jobs');
const CREATE_TIMELINES_PROC = require('@/src/queues/processors/olympics/CREATE_TIMELINES');

const worker = new Worker(
  QUEUE_NAMES.PS_VIDEOS,
  async job => {
    switch (job.name) {
      case 'PS_GET_VIDEOS': {
        const processor = require(PS_VIDEOS);
        return await processor(job);
      }
      case 'PS_VIDEOS_OLYMPICS': {
        const processor = require(PS_VIDEOS_OLYMPICS);
        return await processor(job);
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
    `${QUEUE_NAMES.PS_VIDEOS}:failed`
  );
});

worker.on('error', error => {
  LOGGER.error(error, '${QUEUE_NAMES.PS_VIDEOS}:error');
});

worker.on('completed', (job, returnvalue) => {
  // console.log(`${QUEUE_NAMES.PS_VIDEOS}:completed`, {
  //   returnvalue,
  //   data: job?.data
  // });
});

worker.on('stalled', job => {
  LOGGER.error({ data: job?.data }, `Job ${job.id} in queue ${QUEUE_NAMES.PS_VIDEOS} stalled`);
});

process.on('unhandledRejection', (reason, p) => {
  LOGGER.error(reason, 'WORKER PS VIDEOS: Unhandled Rejection at');
});
