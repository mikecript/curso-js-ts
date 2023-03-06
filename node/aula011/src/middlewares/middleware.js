exports.middleWareGlobal = function (req,res,next) {
    

    if(req.body.nome) {
        console.log(`Vi que você postou ${req.body.nome}`)
    }

    next()
}