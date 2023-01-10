
// molde(classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
   // this.nomeCompleto = () => {return `Original ${this.nome} ${this.sobrenome }` }
    
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome }`
}

//instancia
const pessoa01 = new Pessoa('Mike', 'Santos');
const pessoa02 = new Pessoa('Maria', 'Gabriela')
const data = new Date()

console.log(pessoa01)
console.log(data)