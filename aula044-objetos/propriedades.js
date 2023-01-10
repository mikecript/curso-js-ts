// defineProperty --  defineProperties

function Produto (nome, preco, id, estoque) {



    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome,    // valor da chave
            writable: true ,  // pode ou não o valor
            configurable: true ,  // pode apagar a chave, reconfigurar
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco,    // valor da chave
            writable: false ,  // pode ou não o valor
            configurable: false ,  // pode apagar a chave, reconfigurar
        },
        id: {
            enumerable: true, // mostra a chave
            value: id,    // valor da chave
            writable: false ,  // pode ou não o valor
            configurable: false ,  // pode apagar a chave, reconfigurar
        },

        estoque: {
            enumerable: true, // mostra a chave
            configurable: true ,  // pode apagar a chave, reconfigurar
            get: () => {
                return estoque;
            },
            set: (valor) => {
                if ( typeof valor !== 'number'){
                    throw new TypeError(`${valor} Não é um número de estoque`)
                }

                else {
                    estoque = valor;
                }
            }
            
        },
    })

}

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },

        set nome(valor) {

            if (typeof valor !== 'string'){
                throw new TypeError(`${valor} Não é uma string válida`)
        }

        else {
            nome = valor
        }



    }
}}


   /* 
const produto01 = new Produto('Camiseta', 20, 01, 400)
produto01.estoque = 'xjfcskjifhkjid'
produto01.estoque = 12324 */

const p2 = criaProduto('Tênis');
p2.nome = 122343
p2.nome = 'blusa';
console.log(p2.nome);