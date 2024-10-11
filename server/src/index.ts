import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {sequelize} from './instances/sequelize';
// import {BookModel} from './models/book';
import {Book} from './models/book';
import {User} from './models/user';
import {Author} from './models/author';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("This is my book store server.....");
});

const initDB = async () => {
  await sequelize.authenticate();
  Book.sync({ alter: true });
  User.sync({ alter: true });
  Author.sync({ alter: true });
}

initDB();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
