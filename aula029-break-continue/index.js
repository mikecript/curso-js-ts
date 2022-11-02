const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Coninue; continua para a proxima iteração
// break quebra/sai o laço

let i = 1;
do {
    

    if (i === 2) {
    console.log('pulei')
    i++
    continue;
}

    if(i === 7){
        console.log('7 encontrado, saindo...')
        i++
        break;
    }

    i++
    console.log(i);
} while ( i < numeros.length ){

};