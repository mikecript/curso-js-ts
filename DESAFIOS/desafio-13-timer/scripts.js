// new Date(0)

const timer = document.querySelector('#timer');
let segundos = 0;
let relogio;


document.addEventListener('click', function(e){
    const elemento = e.target

    if(elemento.classList.contains('zerar')){
    clearInterval(relogio);
    timer.innerHTML = '00:00:00';
    segundos = 0;
    }

    if(elemento.classList.contains('iniciar')){
     timer.classList.remove('pausado');
     clearInterval(relogio);
     iniciaRelogio();
    }

    if(elemento.classList.contains('pausado')){
    clearInterval(relogio)
    timer.classList.add('pausado')
    }
})

function iniciaRelogio() {
    relogio = setInterval(function() {
        segundos++;
        timer.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br', {
        hour12:false,
        timeZone: 'GMT'
    })
}


