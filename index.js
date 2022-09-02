const express = require('express');
const app = express();

app.use(express.json());

const handler = async (event) => {
    app.get('/todo', (req, res) => {
        return res.send("Hello World!");
    });
};

module.exports = handler;