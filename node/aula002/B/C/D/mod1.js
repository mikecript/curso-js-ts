module.exports = class Cachorro {
    constructor(nome,cor,raca) {
        this.nome = nome;
        this.cor = cor;
        this.raca = raca;

        
    }

    get descricao() {
        return `${this.nome} ${this.cor} ${this.raca}` ;
    }

    

}

