const router = require('express-promise-router')();

const { index, buscarPostPorId, nuevoPost, actualizarPost, borrarPost } = require('../controllers/Post.controller');

router.get('/', index);
router.get('/:id', buscarPostPorId);

router.post('/', nuevoPost);
router.patch('/:id', actualizarPost);

router.delete('/:id', borrarPost);

module.exports = router;