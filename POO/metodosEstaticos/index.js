class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //metodo de instancia
    aumentarVolume() {
        this.volume += 2
    }
    //metodo de instancia
    diminuirVolume() {
        this.volume -= 2
    }


    //Metodo estatico
    static soma (x, y) {
        const resultado = x + y;
        console.log(resultado);
        
    }
}

const controle1 = new ControleRemoto('LG');


ControleRemoto.soma(5, 10)

