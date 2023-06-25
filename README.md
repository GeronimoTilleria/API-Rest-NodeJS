# REST API en Node.js para Consumir JSONPlaceholder

Este repositorio contiene un ejemplo de un REST API construido en Node.js utilizando Express para consumir JSONPlaceholder, un servicio de API REST ficticio para desarrolladores. El API se ha diseñado para demostrar cómo interactuar con servicios de API REST externos y realizar operaciones CRUD básicas.

## Características

- Obtiene todos los posts del servicio JSONPlaceholder.
- Obtiene un posts específico por su ID.
- Crea un nuevo post.
- Actualiza un post existente.
- Elimina un post.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio en tu máquina local:
```bash
git clone https://github.com/GeronimoTilleria/API-Rest-NodeJS.git
```

2. Navega hasta el directorio del proyecto:
```bash
cd rest-api-nodejs
cd server
```

3. Instala las dependencias del proyecto:
```bash
npm install
```

## Uso

Cambiar de nombre el archivo de `.env copy` a `.env`

Inicia el servidor:
```bash
npm start
```
El servidor se iniciará en http://localhost:3000. Puedes utilizar herramientas como Postman para realizar solicitudes a las siguientes rutas:
* GET /posts: Obtiene todos los posts.
* GET /posts/:id: Obtiene un post por su ID.
* POST /posts: Crea un nuevo post.
* PUT /posts/:id: Actualiza un post existente.
* DELETE /posts/:id: Elimina un post.

Reemplaza :id con el ID correspondiente al post que deseas obtener, actualizar o eliminar.


## Documentación
Puedes encontrar la documentación completa de las rutas y endpoints de este API en [este enlace](https://documenter.getpostman.com/view/24494985/2s93z6e4MA)

## Créditos
Este proyecto ha sido creado por Geronimo Tilleria.