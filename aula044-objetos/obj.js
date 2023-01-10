// new array();

/*
const pessoa01 = new Object();

pessoa01.nome = 'Luiz';
pessoa01.sobrenome = 'Otávio';
pessoa01.idade = 5;

pessoa01.falarNome = function () {
    console.log(`${this.nome} fala oi`);
}

pessoa01.getDataNascimento = function () {
    const dataAtual = new Date();
    return console.log(dataAtual.getFullYear() - this.idade);
};

for (let chave in pessoa01) {
    console.log([chave])
}   */

/*
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
    }
}


const pessoa01 = criaPessoa('mike','santos', 19)
const pessoa02 = criaPessoa('Gabriela', 'Tavares', 16)

console.log(pessoa01.nomeCompleto)
console.log(pessoa02.nomeCompleto) */


function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);

}


// {} <- this 
const pessoa01 = new Pessoa('Mike', 'Santos')
pessoa01.nome = 'Carlos'
const pessoa02 = new Pessoa('gabriela', 'tavares')
console.log(pessoa01)
console.log(pessoa02)