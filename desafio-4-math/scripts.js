let numero = Number(window.prompt('Digite um número: '));
const titulo = document.body.querySelector('#numero-titulo');
let texto = document.body.querySelector('#texto');

titulo.innerHTML += ` ${numero}<br/>`;
texto.innerHTML += `<p> A raiz quadrada é: ${numero ** (1/2)} <br/> </p> <br/>`;
texto.innerHTML += `<p> Meu numero ${numero} é inteiro? ${Number.isInteger(numero)} </p> <br/>`;
texto.innerHTML += `<p> é NaN: ${Number.isNaN(numero)} </p> <br/>`;
texto.innerHTML += `<p> arredondado para baixo: ${Math.floor(numero)} </p> <br/>`;
texto.innerHTML += `<p> arredondado para cima: ${Math.ceil(numero)} </p> <br/>`;
texto.innerHTML += `<p>com duas casas decimais: ${numero.toFixed(2)} </p> <br/>`;

if (Number.isNaN(numero) == true) {
    texto.innerHTML += `<h1>Isto não é um número <br/> (Not a Number)</h1>`
}


