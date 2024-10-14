import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'

export interface UserAddModel {
    email: string
    userName: string
    password: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
    id: number
    email: string
    userName: string
    password: string
    createdAt: string
    updatedAt: string
}

export interface UserViewModel {
    id: number
    email: string
    userName: string
}

export const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: Sequelize.STRING,
    userName: Sequelize.STRING,
    password: Sequelize.STRING
})
