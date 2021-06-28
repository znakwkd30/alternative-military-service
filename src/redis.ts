import * as redis from 'redis';

export const client = redis.createClient(Number(process.env.REDIS_PORT), process.env.REDIS_HOST);