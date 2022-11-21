// new Date(0)

const timer = document.querySelector('#timer');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
let segundos = 0;
let relogio;

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


iniciar.addEventListener('click', function(e) {
   iniciaRelogio()
})

pausar.addEventListener('click', function(e) {
    clearInterval(relogio)
})

zerar.addEventListener('click', function(e) {
    clearInterval(relogio);
    timer.innerHTML = `00:00:00`
})

