const express = require('express');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mydatabase')

//registrar a model
require('./model/cliente')


// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


//criar rota para cliente
const clienteRouter = require('./routes/cliente-route')
app.use('/cliente', clienteRouter)

module.exports = app;