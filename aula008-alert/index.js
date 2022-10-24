let nome = window.prompt('Digite seu nome: ')
const question = window.confirm('Deseja realmente apagar? ')
const mostraTela = document.body.querySelector('.dados')



if (question === true) {
    console.log('Apagando Dados...')
    mostraTela.innerHTML = `${nome} estamos apagando seus dados do sistema...`
}

else{
    console.log('Cancelado')
    mostraTela.innerHTML = `${nome} você cancelou a exclusão dos seus dados`
};