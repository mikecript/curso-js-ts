/* 
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const umAno = 60 * 60 * 8760 * 1000;
const data = new Date(0 + tresHoras + umDia - umAno - umAno);
console.log(data.toString()); */

//const data = new Date(2019, 3 , 20); // 0-11         a,m,d,h,M,,s,ms
const data = new Date(1666811357916);
console.log('dia', data.getDate())
console.log('mês', data.getMonth()) // Mês começa do 0
console.log('ano', data.getFullYear())
console.log('minuto', data.getMinutes())
console.log('hora', data.getHours())
console.log('segundos', data.getSeconds())
console.log('milisegundos', data.getMilliseconds())
console.log('dia semana', data.getDay()) // 0 - Domingo, 6 - sábado
//console.log(Date.now())


console.log(data.toString())