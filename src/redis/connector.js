const Redis = require('ioredis');
const { redisConfig } = require('@/src/redis/config');

const redis = new Redis(redisConfig);

redis.on('connect', () => {
  console.log('Connected to Redis');
});

module.exports.redis = redis;
