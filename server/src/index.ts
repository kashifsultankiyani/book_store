import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {sequelize} from './instances/sequelize';
// import {BookModel} from './models/book';
import {Book} from './models/book';
import {User} from './models/user';
import {Author} from './models/author';

import Router from "./routes";


dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("This is my book store server.....");
});

app.use(Router);


const initDB = async () => {
  await sequelize.authenticate();
  Author.sync({ alter: true });
  Book.sync({ alter: true });
  // User.sync({ alter: true });
}

initDB();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
