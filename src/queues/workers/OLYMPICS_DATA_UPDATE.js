const { Worker } = require('bullmq');
const { QUEUE_NAMES, redisQueueConnection } = require('@/src/queues/init');
const { UPDATE_OLYMPICS_DATA } = require('@/src/queues/jobs');
const UPDATE_OLYMPICS_DATA_PROC = require('@/src/queues/processors/olympics/UPDATE_OLYMPICS_DATA');

const worker = new Worker(
  QUEUE_NAMES.OLYMPICS_DATA_UPDATE,
  async job => {
    switch (job.name) {
      case UPDATE_OLYMPICS_DATA: {
        return await UPDATE_OLYMPICS_DATA_PROC(job);
      }
    }
  },
  {
    connection: redisQueueConnection,
    concurrency: 1
  }
);

worker.on('failed', (job, error) => {
  LOGGER.error(
    {
      error,
      data: job?.data
    },
    'failed handler OLYMPIC DATA UPDATE error'
  );
});

worker.on('completed', (job, returnvalue) => {
  console.log(`${QUEUE_NAMES.OLYMPICS_DATA_UPDATE}:completed`, {
    returnvalue,
    data: job?.data
  });
});
