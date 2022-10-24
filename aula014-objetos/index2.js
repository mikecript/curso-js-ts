const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'otávio',
    idade: 25,

    incrementaIdade() {
        ++this.idade;
    },


    fala() {
        console.log(`meu nome é -${this.nome} ${this.sobrenome} e a minha idade atual é ${this.idade}`)
    },

}
 

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala();
pessoa1.incrementaIdade()
pessoa1.fala();
pessoa1.incrementaIdade()
pessoa1.fala();
