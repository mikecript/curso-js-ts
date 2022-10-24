/*
&& --->
|| ===> true || false ===> vai retornar "o valor verdadeiro"

FALSY

false
0
'' "" ``
null / undefined
NaN

====================



*/

//console.log(0 || false || null || 'luiz otávio' || undefined || true)

//const corUsuario = 'verde';
///const corPadrao = corUsuario || 'preto';
//console.log(corPadrao)



const a = 0;
const b = null;
const c = 'false'; // aqui é verdadeiro pois é string
const d = false;
const e = NaN;

console.log(a || b || c || d || e)
