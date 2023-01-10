// Filter


//retorne os números maiores que 10
/*const numeros = [1, 2, 3, 4, 5,554,22,75,21,61,46];




const numerosFiltrados = numeros.filter( (valor) => valor > 10 );
console.log(numerosFiltrados) */

const pessoas = [
    {nome: 'Luiz', Idade: 32},
    {nome: 'Maria', Idade: 25},
    {nome: 'Júlia', Idade: 30},
    {nome: 'Ricardo', Idade: 45},
    {nome: 'Gabriela', Idade: 16},
    {nome: 'Mike', Idade: 19},
    {nome: 'Martes', Idade: 60},
    {nome: 'Carlos', Idade: 96},
    {nome: 'Carol', Idade: 69},
    {nome: 'Pedro', Idade: 99},
    {nome: 'Robson', Idade: 59},
    {nome: 'Lidia', Idade: 76},

]

const filtroNomeCom5 = pessoas.filter((atributo) => (atributo.nome.length >= 6));
const filtro50Anos = pessoas.filter((atributo) => atributo.Idade > 50);
const filtroTerminaNome = pessoas.filter((atributo) => atributo.nome.toLowerCase().endsWith('a'));



//console.log(filtroNomeCom5)
//console.log(filtro50Anos)
console.log(filtroTerminaNome)



