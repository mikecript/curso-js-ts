// new Object
/*
const objA = {
    chaveA: 'A'
    // __proto__ = Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__ = Object.prototype
}

const objC = {
    chaveC: 'C'
    // __proto__ = Object.prototype
}

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

//Object.getPrototypeOf()
//pegue o prototype assim, nunca direto ou com __proto__ pois causa instabilidade
// no seu sistema


console.log(objC.chaveB) **/




function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;


}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumenta = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('camiseta', 50)
//p1.desconto(50)
//p1.aumenta(100)



const p2 = {
    nome: 'caneca',
    preco: 35
}

Object.setPrototypeOf(p2, Produto.prototype)

p2.desconto(50)

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 113
    },
    tamanho2: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 2222
    },
    
})
p3.nome = 'Mochila';
p3.preco = 100;

p3.aumenta(100)

console.log(p3)