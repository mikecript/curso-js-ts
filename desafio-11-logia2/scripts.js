/* 
Faça uma função que leia valores e retorna se a imagem está no modo paisagem 
*/

function ePaisagem(largura, altura) {

    if (largura > altura) {
        return console.log(true)
    }

    else {
        return console.log(false)
    }

}


ePaisagem(1250 , 720)
ePaisagem(1080 , 720)
ePaisagem(720 , 1080)