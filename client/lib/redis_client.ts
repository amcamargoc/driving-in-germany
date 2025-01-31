import { createClient } from "redis";

const redis = createClient();

redis.on("error", (err) => console.error("Redis Client Error", err));

const recordsPerPage = 10

export async function getFirst10Records(page: number) {
  try {
    await redis.connect();
    const keys = await redis.keys("*");
    let startIndex = 0
    let endIndex = recordsPerPage

    if (page && page > 1) {
      startIndex = recordsPerPage * page
      endIndex = (recordsPerPage * page) + recordsPerPage
    }


    const first10Keys = keys.slice(startIndex, endIndex);

    const records = await Promise.all(
      first10Keys.map(async (key) => {
        const value =  (await redis.get(key)) || '{}'
        return JSON.parse(value)
      }
    ));

    return records
  } catch (error) {
    console.error("Error fetching records:", error);
  } finally {
    await redis.disconnect();
  }
}

export async function getMetadata() {
  let total = 0
  try {
    await redis.connect();
    total = await redis.dbSize();
    console.log('total', total)
  } catch (error) {
    console.error("Error fetching records:", error);
  }  finally {
    await redis.disconnect();
  }

  return {
    total: total,
    pages: Math.floor(total / recordsPerPage)
  }
}