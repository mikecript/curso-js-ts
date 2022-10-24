let primeiroNumero = window.prompt('Digite um número: ')
let segundoNumero = window.prompt('Digite outro número: ')
let resultadoFinal = document.body.querySelector('#soma')

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)

const soma = primeiroNumero + segundoNumero;

resultadoFinal.innerHTML += `Sua soma foi ${soma}`

if (primeiroNumero === NaN || segundoNumero === NaN) {
    resultadoFinal.innerHTML += `Números não foram identificados`;
}


