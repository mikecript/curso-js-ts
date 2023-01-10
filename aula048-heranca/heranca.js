// Produto -> aumento de preco e desconto
// camiseta = cor, caneca = material


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

}
Produto.prototype.aumento = function (valor) {
    this.preco += valor;
}

Produto.prototype.desconto = function (valor) {
    this.preco -= valor;
}

function Camiseta(nome,preco,cor) {
    Produto.call(this, nome, preco)
    this.cor = cor;

}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function (valor) {
    this.preco = this.preco + (this.preco * (valor / 100))
}


function Caneca(nome,preco,material,estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },

        set: function (value) {
            if(typeof value !== 'number'){
                return;
            }
            estoque = value;
        }
    })

}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



const p1 = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 50 , 'Preta')
const caneca = new Caneca('Homem de Ferro', 50, 'Porcelana', 500)
caneca.estoque = 2123

console.log(caneca)
console.log(caneca.estoque)
