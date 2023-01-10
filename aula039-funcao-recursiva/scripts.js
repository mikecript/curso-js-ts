(function () {


    function recursiva(max) {
        
        if (max >= 15001) return; // false 9 vezes // chega no 10 ele retorna e sai do "laço"
        max++
        console.log(max);
        recursiva(max);
    }

    recursiva(0)
 


}) ();