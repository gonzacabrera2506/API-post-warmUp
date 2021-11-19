import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';

export const Categoria = sequelize.define('categoria', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    descripcion: { type: Sequelize.STRING },
}, {
    timestamps: false,
    freezeTableName: true
});