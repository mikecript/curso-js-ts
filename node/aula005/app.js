const path = require('path');
const caminhoArquivo =  path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

/*
const pessoas = [
    { nome: 'João'},
    { nome : 'Luiz' },
    { nome: 'Mike' }

];

const json = JSON.stringify(pessoas, '', 2)
escreve(caminhoArquivo, json) */

async function lerArquivo(caminho) {
   const lerDados = await ler(caminho).then(dados => renderizaDados(dados));
   
   return lerDados;
}

function renderizaDados(dados) {
    dados =  JSON.parse(dados);
    dados.forEach(element => {
        console.log(element)
    });
}

const dadosArquivo = lerArquivo(caminhoArquivo)

console.log(dadosArquivo);