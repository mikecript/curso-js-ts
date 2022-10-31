const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 18,
    endereco: {
        rua: 'AV Brasil',
        numero: 320
    }
};

const {nome, sobrenome, idade, ...resto} = pessoa;
console.log(typeof(idade))
console.log(resto)
