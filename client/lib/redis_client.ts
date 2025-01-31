import { createClient } from "redis";

const redis = createClient();

redis.on("error", (err) => console.error("Redis Client Error", err));

const MAX_PER_PAGE = 10

function validatePage(page: number, metadata: { pages: number }) {
  if (page > metadata.pages || page < 1 || !page) {
    return 1
  } else {
    return page
  }
}

export async function getRecords(page: number) {
  try {
    await redis.connect();
    const payload = []
    const keys = await redis.keys("*");
    const totalCount = await redis.dbSize();

    const metadata = {
      total: totalCount,
      pages: Math.floor(totalCount / MAX_PER_PAGE)
    }

    const pageFormatted = validatePage(page, metadata)
    console.log(pageFormatted)

    let startIndex = 0
    let endIndex = MAX_PER_PAGE

    if (pageFormatted && pageFormatted > 1) {
      startIndex = MAX_PER_PAGE * pageFormatted
      endIndex = (MAX_PER_PAGE * pageFormatted) + MAX_PER_PAGE
    }

    const keysToRead = keys.slice(startIndex, endIndex);

    for (const key of keysToRead) {
      const value = (await redis.get(key)) || '{}';
      payload.push(JSON.parse(value));
    }

    return {
      payload,
      metadata
    }
  } catch (error) {
    console.error("Error fetching records:", error);
  } finally {
    await redis.disconnect();
  }
}