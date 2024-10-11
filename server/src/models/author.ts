
import {DataTypes, Sequelize} from 'sequelize';
import { sequelize } from '../instances/sequelize'

// ... instances code

export const Author = sequelize.define<any>(
  'Author',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    firstName: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
  }
);