
// function hoisting 


//FIRST CLASS OBJECTS (OBJETOS DE PRIMEIRA CLASSE)

const nome = function (x,y) {
    x = 10
    y = 20
    somar = x + y
    return console.log(somar)
};

function executaFuncao(funcao) {
     funcao();
}

executaFuncao(nome)



//arrow function

const funcaoArrow = () => {
    console.log('sou uma ARROW')
}

funcaoArrow()

setInterval(function () {

})


// dentro de um objeto posso ter funcao

const obj = {
    falar() {
        console.log('falar')
    },
}

obj.falar()


//function call
