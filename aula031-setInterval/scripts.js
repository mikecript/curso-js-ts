function retornaHora() {
  const data = new Date()

    return data.toLocaleTimeString('pt-br' ,{
        hour12: false
    })

}

function funcaoDoInterval() {
    console.log(retornaHora())
}

const timer = setInterval(funcaoDoInterval, 1000)

setTimeout(function () {
    clearInterval(timer)
    
}, 5500)

setTimeout(function () {
    console.log('Olá mundo')
}, 5500)
