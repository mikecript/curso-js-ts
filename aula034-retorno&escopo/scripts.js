// retorno
//retorna um valor

function criaMultiplicador(multiplicador) {
    
    function multiplicacao(numero) {
        return numero * multiplicador;

    }

    return multiplicacao;
}


const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)


const contaDuplicada = triplica(2)
const contaTriplicada = duplica(2)
const contaQuadriplicada = quadriplica(2)


console.log(contaDuplicada)
console.log(contaTriplicada)
console.log(contaQuadriplicada)
