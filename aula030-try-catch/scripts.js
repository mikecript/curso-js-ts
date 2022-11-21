
function soma(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return console.log(x + y);
    }
    else{
        throw new TypeError('x e y precisam ser números');
    }
}

try {
    soma(5,4)
    soma(3,'9f')
} catch (error) {
    console.log(error)
    //console.log(`Não foi possivel identificar os números :(`)
}
