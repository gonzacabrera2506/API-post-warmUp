import { Sequelize } from 'sequelize';
import mysql from 'mysql';

export const sequelize = new Sequelize(
    'test',//db
    'root',//user
    '',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
    }
);