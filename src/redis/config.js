const redisConfig = {
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
  username: 'default', // needs Redis >= 6
  password: process.env.REDIS_PASSWORD,
  db: 5
};

module.exports = {
  redisConfig
}
