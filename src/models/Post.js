import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';

const Post = sequelize.define('post', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: Sequelize.STRING },
    contenido: { type: Sequelize.STRING },
    imagen: { type: Sequelize.STRING },
    categoria_id: { type: Sequelize.INTEGER },
    fechaCreacion: { type: Sequelize.DATE }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Post;