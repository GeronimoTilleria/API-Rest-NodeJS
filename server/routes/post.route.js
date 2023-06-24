const postControllers = require('../controllers/post.controller');

module.exports = function(app) {
    // Ruta GET para obtener todos los posts
    app.get('/api/posts', postControllers.getPosts);
    // Ruta GET para obtener un post por su ID
    app.get('/api/posts/:id', postControllers.getPostById);
    // Ruta POST para crear un nuevo post
    app.post('/api/posts', postControllers.createNewPost);
    // Ruta PUT para actualizar un post existente
    app.put('/api/posts/:id', postControllers.updatePostById);
    // Ruta DELETE para eliminar un post
    app.delete('/api/posts/:id', postControllers.deletePostById);
};