// condição       ? <- verdadeiro      : <- falso

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
const corUser = 'green';
const corFundo = corUser || 'Preto';
console.log(nivelUsuario, corFundo);









/* if (pontuacaoUsuario >= 1000) {
    console.log('Vip')
}
else {
    console.log('Usuário Normal')
} */
