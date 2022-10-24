/*
if - pode ser usado sozinho
sempre que utilizo a palavra else preciso de um if antes
posso ter apenas um else na checagem
*/


const hora = Number(window.prompt(`Que horas são? `));
const text = document.querySelector('#text')

if (hora < 11) {
    text.innerHTML += `Bom dia, é ${hora} horas`;
}

else if (hora >= 12 && hora <= 17) {
    text.innerHTML += `Boa tarde, é ${hora} horas`;
    
}

else if (hora > 17 && hora <= 23) {
    text.innerHTML += `Boa noite, é ${hora} horas`;
}

else {
    text.innerHTML += `Nenhum horário válido inserido`;
}

