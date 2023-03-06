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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const port = 3000;
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
//app.use(helmet());
const { middleWareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')



const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.urlencoded( {
    extended: true
}))



//app.use(csrf());

//NOSSOS PROPRIOS MIDDLEWARES
app.use(middleWareGlobal);
//app.use(checkCsrfError);
//app.use(csrfMiddleware);
app.use(routes)
app.use(express.static(path.resolve(__dirname, 'public')))



const sessionOptions = session({
    secret: 'foo',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    resaveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }

})
app.use(flash());


app.use(sessionOptions);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



app.on('Conectado', () => {    
    app.listen(port, () => {
        console.log('acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    });
})
