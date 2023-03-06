exports.paginaInicial = (req,res) => {
    res.render('index');
}


exports.trataPost = (req,res) => {
    res.send(`Opa sou sua nova rota de post`)
};