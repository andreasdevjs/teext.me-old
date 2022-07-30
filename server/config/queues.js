const { Queue } = require('bullmq');
const redis = require('./redis');

const transactionQueue = new Queue('pepe', { connection: redis });

module.exports = transactionQueue;