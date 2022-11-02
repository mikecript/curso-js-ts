// ESCREVA UMA FUNCAO QUE RECEBE 2 NUMEROS E RETORNE O MAIOR DELES



const primeiroNumero = Number(window.prompt('Digite um Número: '))
const segundoNumero = Number(window.prompt('Digite outro número: '))



function detectaValores(primeiroNumero , segundoNumero) {


    if (primeiroNumero > segundoNumero) {
        return `${primeiroNumero} é maior que ${segundoNumero}`;
    }

    else if (segundoNumero > primeiroNumero) {
       return `${segundoNumero} é maior que ${primeiroNumero}`;
    }

    else if (primeiroNumero === segundoNumero){
        return `Os números são iguais`
    }

    else {
        return `Indefinido`;
    }
}

function imprimeResultado(resultadoFinal) {
    const secao = document.createElement("section");
    const h1 = document.createElement("h1");
    const resultadoTexto = document.createTextNode(resultadoFinal)
    h1.appendChild(resultadoTexto);
    document.body.appendChild(h1);
}

const resultadoFinal = detectaValores(primeiroNumero, segundoNumero)

imprimeResultado(resultadoFinal)


