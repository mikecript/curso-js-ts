const nome = 'Luiz' //string
const nome1 = "Luiz" //string
const nome2 = `Luiz` //string

const numero = 10; //Number
const numeroFlutuante = 10.50; //Number

let nomeAluno; //undefined --- não aponta para local nenhum na memória
const sobrenomeAluno = null; //nulo -> não aponta para local algum

/*
diferença:

nulo é setado pelo programador, já o undefined é algo indefinido criado pelo motor do js
*/

const boolean = false; //verdadeiro ou falso -> valor lógico


/** 
console.log(typeof sobrenomeAluno, sobrenomeAluno)

const array = [1,2];
const arrayb = array

console.log(array, arrayb)
arrayb.push(3)
console.log(array,arrayb)

*/

let a = 2;
const b = a;
a = 3;

console.log(a,b)


// string, number, undefined, null, boolean(logico) , symbol
