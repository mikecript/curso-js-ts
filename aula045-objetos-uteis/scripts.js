


/**
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'qualquer outra coisa',
});


console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));  

produto.nome = 'kjskjbdkd';
delete produto.preco;
*/


const produto = {nome: 'caneca', preco: 1.8, material: 'porcelanato'};

console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}

