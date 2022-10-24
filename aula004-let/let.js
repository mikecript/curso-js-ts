let nome; //apenas declarou a variável

nome = 'Marcos';  //inicializando a variável
console.log(`Meu nome é ${nome}`);
nome = 'Luiz';  // mudou o valor da variável conforme o codigo foi rodando
console.log(`Agora meu nome é ${nome}`)


// Regras
//Não podemos criar variáveis com palavras reservadas, ex: let let = ... | let console = ..
//precisam ter nomes significativos, ex: let n = 'joao'; ... | o certo é let nomeCliente..
//não pode começar o nome de uma variável com um número, ex: let 1nome... error
//não podem conter espaços ou traços, ex let nome-cliente
//utilizamos camelCase
// case-sensitive
//Não podemos redeclarar variáveis com let
//Não utilize var, utilize let.

let senhaCliente;
let senhacliente; // estas duas variaveis possuem valores diferentes