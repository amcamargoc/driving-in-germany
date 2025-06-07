import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const questions = sqliteTable('questions', {
  id: integer().primaryKey(),
  // name: text().notNull(),
  raw_data: text().notNull(),
  external_id: text().notNull(),
  type: text().notNull(),
  external_reference: text().notNull(),
  multi_lang_title: text().notNull(),
  // valid: integer({ mode: 'boolean' }).notNull(),
  theme: text().notNull(),
  points: integer().notNull(),
  created_at:integer({ mode: 'timestamp' }).notNull(),
  updated_at:integer({ mode: 'timestamp' }).notNull()
  // question_text: text('question_text').notNull(),
  // Add more columns as needed
});