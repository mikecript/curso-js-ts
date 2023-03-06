require('dotenv').config();

const express = require('express');
const app = express();


const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log(`Conectei à base de dados`);
    app.emit(`Conectado`);
})
.catch(err => console.error(err));


const routes = require('./routes');
const port = 3000;
const path = require('path');


const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


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



app.on('Conectado', () => {    
    app.listen(port, () => {
        console.log('acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    });
})
