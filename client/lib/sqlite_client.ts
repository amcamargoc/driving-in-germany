// lib/db.ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db: Awaited<ReturnType<typeof open>> | null = null;

export async function getDb() {
  if (!db) {
    db = await open({
      filename: './path/to/your/database.db',
      driver: sqlite3.Database,
    });
  }
  return db;
}