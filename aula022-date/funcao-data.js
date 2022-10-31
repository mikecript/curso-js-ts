function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data) {
    //console.log(data)
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const minutos = zeroAEsquerda(data.getMinutes())
    const segundos = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}
const data = new Date();
 const dataBrasil = formataData(data);
 console.log(dataBrasil);
