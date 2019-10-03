const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose')

const app = express();
mongoose.connect("mongodb+srv://postgres:postgres@cluster0-k5a5z.mongodb.net/semana09?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete) 
//req.body = Acessar corpo da requisição (para Criação e edição)

app.use(express.json());
app.use(routes);

app.listen(8888);