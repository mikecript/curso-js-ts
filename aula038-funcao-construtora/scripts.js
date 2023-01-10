// Função construtora -> objetos
// Função Fábrica -> objetos
// construtora -> CriaPessoa (new)

function Pessoa(nome , sobrenome) {
    const ID = 123456;
    // atributos privados
    const metodoInterno = function () {

    };


    //metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function () {
        console.log(`${this.nome} fala sou um metodo`);
    }
}

const pessoa01 = new Pessoa('Maicol', 'Santos');
const pessoa02 = new Pessoa('Luiza', 'Maria');

console.log(pessoa01.nome);
console.log(pessoa02.nome);
pessoa01.metodo()
