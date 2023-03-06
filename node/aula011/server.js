/*mongodb+srv://mikecript:<password>817634md@cluster0.hmsjqka.mongodb.net/meuBancoDeDados?retryWrites=true&w=majority*/




const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const routes = require('./routes');
app.use(routes)
app.use(express.urlencoded( {
    extended: true
}))


const { middleWareGlobal } = require('./src/middlewares/middleware')




// NOSSOS PROPRIOS MIDDLEWARES
app.use(middleWareGlobal)
app.use(express.static(path.resolve(__dirname, 'public')))



app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');




app.listen(port, () => {
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});