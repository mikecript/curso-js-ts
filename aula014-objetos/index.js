
function criaPessoa(nome,sobrenome,idade) {
    const objeto = {nome, sobrenome, idade,}
    return objeto;
}

const pessoa1 = criaPessoa('maicol','santos', 18);
const pessoa2 = criaPessoa('joão','silva', 24);
const pessoa3 = criaPessoa('maria','clara', 35);
const pessoa4 = criaPessoa('júlio','cézar', 28);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);