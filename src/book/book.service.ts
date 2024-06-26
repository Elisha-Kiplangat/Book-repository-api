import  db  from '../drizzle/db';
import { bookTable, BookSelect, BookInsert } from '../drizzle/schema';

import {eq} from "drizzle-orm";


export const bookService = async (): Promise<BookSelect[]> => {
    try {
        const book = await db.query.bookTable.findMany();
        return book;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
}
export const oneBookService = async (id: number): Promise<BookSelect | undefined> => {
    return await db.query.bookTable.findFirst({
        where: eq(bookTable.id, id)
    })
}

export const addBookService = async (book: BookInsert) => {
    await db.insert(bookTable).values(book)
    return "Book added successfully";
}

export const updateBookService = async (id: number, book: BookInsert) => {
    try {
        const searchedbook = await oneBookService(id);
        if (!searchedbook) {
            return false;
    }
    await db.update(bookTable).set(book).where(eq(bookTable.id, id));
    return "Book updated successfully";
} catch (error) {
        throw new Error("Failed to update book: ");
    }
}

export const deleteBookService = async (id: number) => {
    await db.delete(bookTable).where(eq(bookTable.id, id));
    return "Book deleted successfully"
}
