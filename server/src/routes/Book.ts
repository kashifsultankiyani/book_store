
import express from 'express'
import { createBook, getAllBooks, editBook, deleteBook } from '../controllers/book';

const router = express.Router();

// Handle the POST request to create a book.
router.post("/create-book", createBook);
// router.get("/get-book", getBook);
router.get("/get-all-books", getAllBooks);
router.put("/", editBook);
router.delete("/", deleteBook);

export default router;