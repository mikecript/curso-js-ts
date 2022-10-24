const nomeCompletoUsuario = window.prompt('Digite o seu nome completo: ');

document.body.innerHTML += `Olá ${nomeCompletoUsuario}, tudo bem? <br/>`;
document.body.innerHTML += `Seu nome possui ${nomeCompletoUsuario.length} letras <br/>`;
document.body.innerHTML += `a segunda letra do seu nome é ${nomeCompletoUsuario.charAt(1)}<br/>`;
document.body.innerHTML += `primerio indice da letra A: ${nomeCompletoUsuario.indexOf('a')}<br/>`;
document.body.innerHTML += `ultimo indice da letra A: ${nomeCompletoUsuario.lastIndexOf('a')} <br/>`;
document.body.innerHTML += `As últimas três letras do seu nome são: ${nomeCompletoUsuario.slice(-3)}<br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${nomeCompletoUsuario.split(' ')}<br/>`;
document.body.innerHTML += `seu nome em maiúsculas: ${nomeCompletoUsuario.toUpperCase(nomeCompletoUsuario)}<br/>`;
document.body.innerHTML += `seu nome em minúsculas: ${nomeCompletoUsuario.toLowerCase(nomeCompletoUsuario)}<br/>`;

console.log(typeof(nomeCompletoUsuario));