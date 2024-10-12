import Sequelize, { DataTypes } from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { Author } from './author';

export const Book = sequelize.define(
   "Book",
   {
      // Each attribute will pair with a column
      // Here we define our model attributes

      // Our primaryKey, book id, our unique identifier
      id: {
         type: DataTypes.UUID,
         defaultValue: Sequelize.UUIDV4,
         primaryKey: true,
      },

      // This will create a title for a column of the book
      title: {
         type: DataTypes.STRING,
         allowNull: false,
      },

      // authorId: {
      //    allowNull: true,
      //    type: DataTypes.UUID,
      //  },
   },
   {
      // For the sake of clarity we specify our indexes
      indexes: [{ unique: true, fields: ["id"] }],
   }
);

// Book.hasOne(Author)

// `sequelize.define` also returns the model
// console.log(Book === sequelize.models.Book); // true

//module.exports = {
  // Book,
   //sequelize,
//};

