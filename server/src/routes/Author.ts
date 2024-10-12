
import express from 'express'
import { create, getAll, edit, del } from '../controllers/author';

const router = express.Router();

// Handle the POST request to create a book.
router.post("/create", create);
// router.get("/get-book", getBook);
router.get("/get-all", getAll);
router.put("/", edit);
router.delete("/", del);

export default router;