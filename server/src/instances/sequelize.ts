import {Sequelize} from 'sequelize'

const db = 'book_store'
const username = 'root'
const password = 'Root@123'

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
});

// sequelize.authenticate()
