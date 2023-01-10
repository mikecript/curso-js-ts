const conta = function conta(operador, acumulador = 1, ...numeros) {
    
    for (let numero of numeros){

   if (operador === '+'){acumulador += numero}

   else if (operador === '-'){ acumulador -= numero}

   else if (operador === '*'){ acumulador *= numero}

   else if (operador === '/'){ acumulador /= numero}

   else if (operador === '**'){ acumulador **= numero}}

    console.log(acumulador)
};

conta('+', 20,30,40,50);
