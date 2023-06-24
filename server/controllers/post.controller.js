const axios = require('axios');

const getPosts = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getPostById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const user = response.data;
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createNewPost = async (req, res) => {
    const { body } = req;

    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', body);
        const newPost = response.data;
        res.json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updatePostById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, body);
        const updatedPost = response.data;
        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deletePostById = async (req, res) => {
    const { id } = req.params;

    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getPosts,
    getPostById,
    createNewPost,
    updatePostById,
    deletePostById
};