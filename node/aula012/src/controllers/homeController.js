const HomeModel = require('../models/HomeModel');

/*HomeModel.create({
    titulo: 'Um Título de testes03',
    descricao: "uma descricao de testes03",
})
.then(dados => console.log(dados)); */
//.catch(err => console.log(err)));

HomeModel.find().then(dados => console.log(dados));

exports.paginaInicial = (req,res) => {
    res.render('index');
    return;
}


exports.trataPost = (req,res) => {
    res.send(`Olá ${req.body.nome}`);
    
    return;
    
};