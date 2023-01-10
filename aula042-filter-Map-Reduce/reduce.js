/*const numeros = [3,6,8,,2,66,787,88,909,33,22,11,14];

const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, []) 


console.log(total);*/


const pessoas = [
    {nome: 'Luiz', Idade: 32},
    {nome: 'Ricardo', Idade: 45},
    {nome: 'Maria', Idade: 25},
    {nome: 'Júlia', Idade: 30},
   

]

const pessoaIdentify = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(pessoaIdentify)