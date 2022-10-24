const nome = 'Mike';
const sobreNome = 'Santos'
const idade = 45;
const pesoEmKg = 60;
const alturaEmM = 1.75;
const indiceMassaCorporal = pesoEmKg / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(`Olá ${nome} ${sobreNome} seu índice de massa corporal é ${indiceMassaCorporal.toFixed(2)} e você nasceu no ano ${anoNascimento}.`);
