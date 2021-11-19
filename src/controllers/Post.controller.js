import { response } from 'express';
import Post from '../models/Post';

const urlExists = require('url-exists');

module.exports = {

    index: async (req, res, next) => {
        try {
            const posts = await Post.findAll({
                attributes: ['id', 'titulo', 'imagen', 'categoria_id', 'fechaCreacion'],
                order: [['fechaCreacion', 'DESC']]
            });
            res.status(200).json({
                posts
            });
        } catch (error) {
            res.status(500).json({
                message: 'Ocurrio un error!'
            });
        }
    },

    buscarPostPorId: async (req, res, next) => {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (!post) {
            res.status(400).json({
                message: 'Post no encontrado'
            });
        } else {
            res.status(200).json({
                post
            });
        }
    },

    nuevoPost: async (req, res, next) => {
        //verificar URL//
        var b = 0;
        const { titulo, contenido, imagen, categoria_id, fechaCreacion } = req.body;
        urlExists(imagen, function (err, exists) {
            if (exists == false) {
                res.status(400).json({
                    message: 'No existe la url de la imagen proporcionada'
                });
            }
            b = 1;
        });
        if (b != 1) {
            try {
                let nuevoPost = await Post.create({
                    titulo, contenido, imagen, categoria_id, fechaCreacion
                }, {
                    fields: ['titulo', 'contenido', 'imagen', 'categoria_id', 'fechaCreacion']
                });
                if (nuevoPost) {
                    return res.status(201).json({
                        message: 'Se ha creado el Post',
                        data: nuevoPost
                    });
                }
            } catch (error) {
                res.status(500).json({
                    message: 'Error al crear el Post',
                    data: nuevoPost
                });
            }
        }
    },

    actualizarPost: async (req, res, next) => {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (!post) {
            res.status(400).json({
                message: 'Post no encontrado'
            });
            return;
        } else {
            const { titulo, contenido, imagen, categoria_id, fechaCreacion } = req.body;
            await post.update({
                titulo, contenido, imagen, categoria_id, fechaCreacion
            });
        }
        return res.status(200).json({
            message: 'Post modificado!',
            data: post
        });
    },

    borrarPost: async (req, res, next) => {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (!post) {
            res.status(400).json({
                message: 'Post no encontrado'
            });
            return;
        } else {
            await Post.destroy({
                where: { id }
            });
            return res.status(200).json({
                message: 'Post eliminado!'
            });
        }
    }

}
