const { Worker } = require('bullmq');
const { QUEUE_NAMES, redisQueueConnection } = require('@/src/queues/init');
const { CREATE_TIMELINES } = require('@/src/queues/jobs');
const CREATE_TIMELINES_PROC = require('@/src/queues/processors/olympics/CREATE_TIMELINES');

const worker = new Worker(
  QUEUE_NAMES.OLYMPICS_TIMELINE,
  async job => {
    switch (job.name) {
      case CREATE_TIMELINES: {
        return await CREATE_TIMELINES_PROC(job);
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
    'failed handler OLYMPIC TIMELINE error'
  );
});

worker.on('completed', (job, returnvalue) => {
  console.log(`${QUEUE_NAMES.OLYMPICS_TIMELINE}:completed`, {
    returnvalue,
    data: job?.data
  });
});
