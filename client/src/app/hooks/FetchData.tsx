"use client"; // To use hooks in a React Client Component

import { useEffect, useState } from "react";
import { RedisClient } from "@/utils/redisClient"

export const  FetchData = () => {
  const [data, setData] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const redisClient = new RedisClient()

    const fetchData = async () => {
      try {
        const questions = await redisClient.GetAll()
        setData(questions);
 } catch (error) {
        console.error("Error fetching Redis data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};
