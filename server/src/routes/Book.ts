
import express from 'express'
import { createBook, getAllBooks, editBook, deleteBook } from '../controllers/book';

const router = express.Router();

// Handle the POST request to create a book.
router.post("/book/create-book", createBook);
// router.get("/get-book", getBook);
router.get("/book/get-all-books", getAllBooks);
router.put("/book/", editBook);
router.delete("/book/", deleteBook);

export default router;