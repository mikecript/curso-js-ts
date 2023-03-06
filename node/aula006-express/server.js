const express = require('express');
const app = express();


//         criar   ler   atuali  deletar
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET    PUT    DELETE

// http://meusite.com/sobre      <- GET -> entregue a pagina


app.get('/', (req, res) => {
    res.send(`<form action="/" method="post">
    Nome: <input name="nome" type="text">
    <button type="submit">Enviar</button></form>`);
})

app.post('/', (req,res) => {
    res.send('Recebi o formulario');
})

app.get('/contato', (req,res) => {
    res.send('Obrigado por entrar em contato')
})

app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});