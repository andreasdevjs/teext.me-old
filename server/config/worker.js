const { Worker } = require('bullmq');
const redis = require('./redis');
const anotherRedis = redis.duplicate();

const transactionWorker = new Worker('pepe', async (job) => {
  console.log(job.data);
}, { connection: anotherRedis });

module.exports = transactionWorker;