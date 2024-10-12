
import express from 'express';

import BookRouter from './Book';

const Router = express.Router();

Router.use('/book', BookRouter);

export default Router;