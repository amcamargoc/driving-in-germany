import redis from 'redis';

export class RedisClient {
  private client;


  constructor() {
    const default_connection = 'redis://localhost:6379'

    const url = process?.env?.database_name || default_connection

    if(!url) {
      console.error('missing database url')
    } else {
      console.log('connected to redis in ', url)
      this.client = redis.createClient({ url });
    }
  }

  async initialize() {
    this.client.on('connect', () => {
      console.log('Connected to Redis!');
    });

    this.client.on('error', (err) => {
      console.error('Redis error:', err);
    });

    await this.client.connect();
  }

  async insert(key, value) {
    try {
      await this.client.set(key, value);
      console.log(`💾 saved with key: ${key} \n`);
    } catch (err) {
      console.error('Error inserting record:', err);
      throw err;
    }
  }

  async GetAll() {
    await this.client.connect();
    const keys  = this.client.keys
    const data: Record<string, string> = {};

    let limit = 1

    for(const key of keys) {
      if (limit == 10) { break }

      data[key] = await this.client.get(key)

      limit++
    }
    await this.client.close()

    return data
  }

  async get(key) {
    try {
      const value = await this.client.get(key);
      if (value) {
        console.log(`Retrieved: ${key} -> ${value}`);
      } else {
        console.log(`No record found for key: ${key}`);
      }
      return value;
    } catch (err) {
      console.error('Error retrieving record:', err);
      throw err;
    }
  }

  async delete(key) {
    try {
      const result = await this.client.del(key);
      if (result) {
        console.log(`Deleted record for key: ${key}`);
      } else {
        console.log(`No record found to delete for key: ${key}`);
      }
    } catch (err) {
      console.error('Error deleting record:', err);
      throw err;
    }
  }

  async close() {
    try {
      await this.client.quit();
      console.log('Redis connection closed.');
    } catch (err) {
      console.error('Error closing Redis connection:', err);
      throw err;
    }
  }
}
