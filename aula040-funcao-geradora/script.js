function* geradora1() {
    //codigo qualquer
    yield 'valor 1'; // retorno
    //codigo qualquer
    yield 'valor 2'; // retorno
    //codigo qualquer
    yield 'valor 3'; // retorno
}


function* geradora2() {
    let indice = 0;
    
    
    while (indice !== 10) {
        yield indice;
        indice++;
    }   
}


function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield geradora3();
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4();

function* geradora5() {
    yield function() {
        console.log('vim do y1')
    }
    yield function() {
        console.log('vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()