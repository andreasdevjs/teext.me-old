const { Queue, Worker } = require('bullmq');
const IORedis = require('ioredis');

// Instanciamos redis con la url completa
const redis = new IORedis(process.env.REDIS_URL, { maxRetriesPerRequest: null });
redis.connect(() => {
  console.log('Redis connected');
});

const myQueue = new Queue('myqueue', { connection: redis });

const myWorker = new Worker('myqueue', async (job) => {

}, { connection: redis });

