import { Hono } from 'hono';
import { getBooksController, getOneBookController, addBookController, updateBookController, deleteBookController } from './book.controller';

const bookRouter = new Hono();

bookRouter.get('/books', getBooksController);
bookRouter.get('/books/:id', getOneBookController);
bookRouter.post('/books', addBookController);
bookRouter.put('/books/:id', updateBookController);
bookRouter.delete('/books/:id', deleteBookController);

export default bookRouter ;
