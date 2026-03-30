const express = require('express');
const app = express();

app.use(express.json());


//rotas
const userRoutes = require('./routes/user');
app.use ('/users', userRoutes);

module.exports = app;