exports.paginaInicial = (req,res) => {
    res.send(`<form action="/" method="post">
    Nome do cliente: <input name="nome" type="text">
    <button type="submit">Enviar Formulario cliente</button></form>`);
}


exports.trataPost = (req,res) => {
    res.send(`Opa sou sua nova rota de post`)
};