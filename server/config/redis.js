const Redis = require('ioredis');

const redis = new Redis(process.env.REDIS_URL, { maxRetriesPerRequest: null });

redis.connect(() => {
  console.log('Redis production connected');
});

module.exports = redis;