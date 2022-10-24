/*
Operadores Lógicos

&& -> and -> e -> todas as expressões precisam ser verdadeira para retornar true 
|| -> or -> ou -> se um valor retornar verdadeiro a expressão será verdadeira, só é falso se todos retornarem falso
! -> not -> não -> negação (oposto de um valor)

const expressaoAnd = true && false && true && true;
const expressaoOr =  true || false || false || false;
const expressaoNot = !expressaoOr

console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot); 

const usuario = 'luiz'; //form
const senha = '123456'; //form
//                          true        &&         false            =           false
const vaiLogar = usuario === 'luiz' && senha === '12345';
console.log(vaiLogar) */

console.log(!true)