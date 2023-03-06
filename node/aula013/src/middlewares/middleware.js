exports.middleWareGlobal = function (req,res,next) {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local';

    if(req.body.nome) {
        console.log(`Vi que você postou ${req.body.nome}`)
    }

    next()
}


exports.checkCsrfError = (err,req,res) => {
    if(err && err.code === 'EBADCSRFTOKEN' || err.code === 'ebadcsrftoken') {
       return res.render(`404`)
    }
} 


exports.csrfMiddleware = function (req,res,next) {
    res.locals.csrfToken = req.csrfToken();
    next(); 
}