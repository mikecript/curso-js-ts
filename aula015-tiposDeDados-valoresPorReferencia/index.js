/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)
Valor
*/
          //0123
//let nome = 'luiz';
//nome[0] = 'R'
//console.log(nome[0]);

//let a = 'A';
//let b = a;  //cópia
//console.log(a,b)

//a = 'outra coisa'
//console.log(a,b)


/*
Referência (mutavel) - array, object, function
*/

const a = {
    nome:'Luiz',
    sobrenome: 'Otávio'
};

const b = {...a}; //copia de mutaveis

a.nome = 'luiza';
console.log(a);
console.log(b);