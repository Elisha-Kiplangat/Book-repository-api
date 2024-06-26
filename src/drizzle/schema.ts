import { pgTable, text, varchar, serial, date, integer } from 'drizzle-orm/pg-core';


export const bookTable = pgTable("book", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    author: varchar("author", { length: 255 }).notNull(),
    publication_year: integer("publication_year").notNull(),
});


export type BookSelect = typeof bookTable.$inferSelect
export type BookInsert = typeof bookTable.$inferInsert