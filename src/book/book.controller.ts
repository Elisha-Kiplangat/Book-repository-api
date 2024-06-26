import { Context } from 'hono';
import { bookService, oneBookService, addBookService, updateBookService, deleteBookService } from './book.service';

export const getBooksController = async (c: Context) => {
    try {
        const books = await bookService();
        return c.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        return c.json({ error: 'Error fetching books' }, 500);
    }
};

export const getOneBookController = async (c: Context) => {
    const id = parseInt(c.req.param('id'), 10);
    try {
        const book = await oneBookService(id);
        if (book) {
            return c.json(book);
        }
        return c.json({ error: 'Book not found' }, 404);
    } catch (error) {
        console.error('Error fetching book:', error);
        return c.json({ error: 'Error fetching book' }, 500);
    }
};

export const addBookController = async (c: Context) => {
    const body = await c.req.json();
    try {
        const message = await addBookService(body);
        return c.json({ message });
    } catch (error) {
        console.error('Error adding book:', error);
        return c.json({ error: 'Error adding book' }, 500);
    }
};

export const updateBookController = async (c: Context) => {
    const id = parseInt(c.req.param('id'), 10);
    const body = await c.req.json();
    try {
        const message = await updateBookService(id, body);
        if (message) {
            return c.json({ message });
        }
        return c.json({ error: 'Book not found' }, 404);
    } catch (error) {
        console.error('Error updating book:', error);
        return c.json({ error: 'Error updating book' }, 500);
    }
};

export const deleteBookController = async (c: Context) => {
    const id = parseInt(c.req.param('id'), 10);
    try {
        const message = await deleteBookService(id);
        return c.json({ message });
    } catch (error) {
        console.error('Error deleting book:', error);
        return c.json({ error: 'Error deleting book' }, 500);
    }
};
