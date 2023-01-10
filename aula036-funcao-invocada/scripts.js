
(function () {
    
    function multiplicador(multiplicador) {
        
        return function operacaoNumero(numero) {
            const operacao = multiplicador * numero;
            return operacao;
        }
    }

    const multiplica = multiplicador(2)
    const triplica = multiplicador(3)

    
    const conta = multiplica(5)
    const contaTriplicada = triplica(5)


    console.log(conta)
    console.log(contaTriplicada)


})();

