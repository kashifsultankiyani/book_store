
import express from 'express';

import BookRouter from './Book';
import AuthorRouter from './Author';
import UserRouter from './User';

const Router = express.Router();

Router.use('/book', BookRouter);
Router.use('/author', AuthorRouter);
Router.use('/user', UserRouter); 

export default Router;