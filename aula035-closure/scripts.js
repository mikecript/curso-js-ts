function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const fun = retornaFuncao('luiz')
const fun2 = retornaFuncao('joão')

console.dir(fun());
console.dir(fun2());