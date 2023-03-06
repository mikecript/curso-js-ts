const express = require('express');
const app = express();
app.use(express.urlencoded( {
    extended: true
}))



// http://facebook.com/profiles/544324?campanha=googleads&nomecampanha=seila


app.get('/', (req, res) => {
    res.send(`<form action="/" method="post">
    Nome do cliente: <input name="nome" type="text">
    <button type="submit">Enviar Formulario cliente</button></form>`);
})

app.get('/testes/:idUsuarios?/:parametro?', (req,res) => {
    console.log(req.query);
    res.send(req.query.sobrenome)
})

app.post('/', (req,res) => {
    console.log(req.body);
    res.send(`Oque você me enviou foi: ${req.body.nome}`);
})

app.get('/contato', (req,res) => {
    res.send('Obrigado por entrar em contato')
})

app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});