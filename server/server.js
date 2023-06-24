require('dotenv').config()

const express = require('express');

const app = express();

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

const port = process.env.PUERTO;

require('./routes/post.route')(app);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});