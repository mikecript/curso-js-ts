function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function conectarBD(msg,temp) {

    return new Promise((resolve,reject) => {
   
        

        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject(`CAI NO ERRO`); return;}

            resolve(msg + `- Passei na Promise`);
            return;
        }, temp)
        
    })

}


function baixaPag() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache');

    } else {
        conectarBD('Baixei a página', 3000)
    }
}

baixaPag()
.then(dadosPag => {
    console.log(dadosPag)
})
.catch(e => console.log(e));

// Promise.all, Promise.race Promise.resolve Promise.reject

const promises = [
    conectarBD('Promise 1', aleatorio(1,6)),
    conectarBD('Promise 2', aleatorio(1,6)),
    conectarBD('Promise 3', aleatorio(1,6)),
    conectarBD(111111, aleatorio(1,6)),



];

Promise.race(promises).then(function (valor) {
    console.log(valor)
}).catch(function (e) {
    console.log(e);
})


