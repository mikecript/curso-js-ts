function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function conectarBD(msg,temp) {

    return new Promise((resolve,reject) => {
        if(typeof msg !== 'string') {reject(`Bad Value`)}
        

        setTimeout(() => {
            resolve(msg);
        }, temp)
        
    })

}

conectarBD('Frase 1', aleatorio(1,3))
.then(resposta => {
    console.log(resposta);
    return conectarBD(222222, aleatorio(1,3)).then(resposta => {
        console.log(resposta);
        return conectarBD('Frase 3', aleatorio(1,3)).then(resposta => {
            console.log(resposta);
            return conectarBD('Frase 4', aleatorio(1,3)).then(resposta => {
                console.log(resposta); 
            })
        })
    })

}).then(resposta => {
    console.log(`Eu serei o ultimo executado`)
})
.catch(e => {
    console.log(`ERROR`, e);
});

