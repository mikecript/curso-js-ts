const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const { middleWareGlobal } = require('./src/middlewares/middleware');




//Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', middleWareGlobal,homeController.trataPost)


//Rotas contato
route.get('/contato', contatoController.paginaContato);

module.exports = route;
