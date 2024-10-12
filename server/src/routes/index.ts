
import express from 'express';

import BookRouter from './Book';
import AuthorRouter from './Author';

const Router = express.Router();

Router.use('/book', BookRouter);
Router.use('/author', AuthorRouter);

export default Router;