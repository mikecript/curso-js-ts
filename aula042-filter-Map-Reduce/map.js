//Map
//Dobre os Números
/*
const numeros = [1, 2, 3, 4, 5,6,7,8,9,10,11];

const numerosDobrados = numeros.map((valores) => (console.log(`Dobro -> ${valores * 2}`)))
*/

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



//const nomeString = pessoas.map( (objeto) => console.log(objeto.nome));
//const removeChaveNome = pessoas.map((objeto) => ({idade: objeto.Idade}));
const addId = pessoas.map((objeto,indice) => {
    const newObjeto = {...objeto}
    newObjeto.id = indice + 1;
    return newObjeto;})


console.log(pessoas)
console.log(addId)
