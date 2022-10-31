function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function diaFormatado(diaSave){
    switch (diaSave) {
        case 0:
            texto.innerHTML += `Domingo, ${diaSave} de ${mesSemana} de ${ano}`
            break;

        case 1:
            texto.innerHTML += `Segunda, ${diaSave} de ${mesSemana} de ${ano}`
            break;

        case 2:
            texto.innerHTML += `Terça, ${diaSave} de ${mesSemana} de ${ano}`
            break;

        case 3:
            texto.innerHTML += `Quarta, ${diaSave} de ${mesSemana} de ${ano}`
            break;

        case 4:
            texto.innerHTML += `Quinta, ${diaSave} de ${mesSemana} de ${ano}`
            break;

        case 5:
            texto.innerHTML += `Sexta, ${diaSave} de ${mesSemana} de ${ano}`
            break;

        case 6:
            texto.innerHTML += `Sábado, ${diaSave} de ${mesSemana} de ${ano}`
            break;

            default:
                texto.innerHTML += `Dia Inválido`
                break;
        
    }
    

}

function formatadoBr(data) {
    
}

const secao = document.querySelector('.container');
const texto = secao.querySelector('h1');

const data = new Date();
const diaSave = data.getDay();
const mesSemana = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();

console.log(diaFormatado(data))







