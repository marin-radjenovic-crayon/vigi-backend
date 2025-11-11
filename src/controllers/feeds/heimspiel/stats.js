const { format } = require('date-fns');
const { redis } = require('@/src/redis/connector');

const { differenceInMinutes } = require('date-fns');

const processPerformCallsStats = config => {
  const identifier = `${config?._extra?.identifier}:` || '';
  const currentDate = format(new Date(), 'yyyy-MM-dd');
  const urlSplit = config?.url?.split('/');
  const urlType = `${urlSplit?.[0]}:${urlSplit?.[1]}`;
  const redisKey = `stats:axios:calls:${urlType}:${identifier}${currentDate}`;

  redis.incr(redisKey, (err, reply) => {
    if (err) {
      LOGGER.error(`#REDIS# Increment Error ${err}`);
    } else {
      // Set expiration to 30 days if this is the first call of the day
      if (reply === 1) {
        const thirtyDaysInSeconds = 30 * 24 * 60 * 60; // 30 days in seconds
        redis.expire(redisKey, thirtyDaysInSeconds);
      }
    }
  });
};

module.exports = {
  processPerformCallsStats
};
