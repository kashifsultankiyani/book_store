
import Sequelize, { DataTypes } from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { Book } from './book';

export const Author = sequelize.define<any>(
    'Author',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            defaultValue: Sequelize.UUIDV4,
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

Author.hasMany(Book, {
    foreignKey: {name: 'bookAuthId', allowNull: false}
})