function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}



function conectarBD(msg,temp) {

    return new Promise((resolve,reject) => {
        if(typeof msg !== 'string') {reject(`Bad Value`)}
        

        setTimeout(() => {
            resolve(msg + ` - Passei na promise`);
        }, temp)
        
    })
}


/*

conectarBD('Conexão 1', aleatorio(1,5))
.then(valor => {
    console.log(valor);
    return conectarBD('Conexão 2', aleatorio())
})
.then(valor => {
    console.log(valor);
    return conectarBD('Conexão 3', aleatorio())
}).then(valor => {
    console.log(valor);
    return valor;
})
.then(valor => {
    console.log(`Terminamos no ${valor}`)
})
.catch(err => console.log(err));
;
*/

async function executa() {

    try {
   const fase1 = conectarBD('Conexão 1', 1000);
   console.log(fase1);

   setTimeout(() => {
    console.log('Essa Promise estava pendente',fase1);
   }, 1100)

   const fase2 = await conectarBD('Conexão 2', aleatorio(1,3));
   console.log(fase2);

   const fase3 = await conectarBD(111, aleatorio(1,3));
   console.log(fase3);

   console.log(`Terminamos na ${fase3} `);

    }
    catch(e) {
        console.log(e)
    };



}


//executa();

const teste = conectarBD('qlq',5000);

console.log(teste)

//pendente -> pendente
//fullfilled -> resolvida
//reject -> rejeitada