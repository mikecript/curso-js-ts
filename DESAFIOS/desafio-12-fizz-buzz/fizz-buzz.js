/**
 * escreva uma função que recebe um número e retorne o seguinte:
 * número é divisivel por 3 =   Fizz
 * númweo é divisivel por 5 = buzz
 * número é divisivel por 3 e 5 = fizzbuzz
 * número não é divisivel por 3 e 5 retorna o próprio número
 * checar se realmente é um número
 * use a função com números de 0 a 100
 */

function fizzBuzz(numero) {
    let divisivelPorTres = numero % 3;
    let divisivelPorCinco = numero % 5;
    let numeroRealTres = typeof(divisivelPorTres);
    let numeroRealCinco = typeof(divisivelPorCinco);        

    if (numero < 0 || numero > 100) {
        return console.log(`Apenas números de 0 á 100`);
    }

    else if (divisivelPorTres === 0 && divisivelPorCinco === 0) {
        console.log('FIZZBUZZ');
    }

    else if (divisivelPorTres !== 0 && divisivelPorCinco !== 0) {
        console.log(`${numero} Nenhum dos dois`);
    }


    else if (divisivelPorTres === 0) {
        console.log('FIZZ');
        
    }

    else if (divisivelPorCinco === 0) {
        console.log('BUZZ');}

    }
   



function acionafuncao(){
    
    const numero = document.getElementById('#numerofizz');
    const resultado = document.getElementById('#resultado');

    return resultado.innerHTML = `Seu resultado será ${fizzBuzz(Number(numero))}`

}