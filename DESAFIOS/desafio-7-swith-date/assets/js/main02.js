const container = document.querySelector('.container')
const h1 = container.querySelector('h1')
const data = new Date();
function resetaData(data) {
    switch (data) {
        case 0:
            const diaSemanaa = `Domingo`;
            return diaSemanaa;

        case 1:
            const diaSemana = `Segunda-feira`;
            return diaSemana;

        case 2:
            diaSemana = `Terça-feira`;
            return diaSemana;

        case 3:
            diaSemana = `Quarta-feira`
            break;

        case 4:
            diaSemana = `Quinta-feira`
            break;

        case 5:
            diaSemana = `Sexta-feira`
            break;

        case 6:
            diaSemana = `Sábado`
            break;
    
        default:
            diaSemana = `Dia inválido`
            break;
    }
}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes){
    case 0:
        const nomeMess = `Janeiro`;
        return nomeMes;

    case 1:
        const nomeMes = `Fevereiro`;
        return nomeMes;

    case 2:
        nomeMes = `Março`;
        return nomeMes;

    case 3:
        nomeMes = `Abril`
        return nomeMes;
    case 4:
        nomeMes = `Junho`
        return nomeMes;

    case 5:
        nomeMes = `Julho`
        return nomeMes;

    case 6:
        nomeMes = `Agosto`
        return nomeMes;

    case 7:
        nomeMes = `Setembro`;
        return nomeMes;

    case 8:
        nomeMes = `Outubro`;
        return nomeMes;

    case 9:
        nomeMes = `Novembro`;
        return nomeMes;

    case 10:
        nomeMes = `Dezembro`;
        return nomeMes;

    default:
        nomeMes = `Mês inválido`
        break;
}}

function criaData(data) {
    const diaSemana = data.getDay();
    const NumeroMes = data.getMonth();
    const nomeMes = getNomeMes(NumeroMes)
    const nomeDia = resetaData(diaSemana)

    console.log(nomeDia, nomeMes)
    return `${nomeDia} ${data.getDate()} de ${nomeMes}`
}

h1.innerHTML = criaData(data)

