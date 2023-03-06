class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;

    }

    ligar () {
        if (this.ligado) {
            console.log(`${this.nome} Já ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar () {
        if (!this.ligado) {
            console.log(`${this.nome} Não ligado`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{

    constructor(nome,temWifi) {
        super(nome)
        this.temWifi = temWifi;
    }

    
    ligar () {
        console.log(`Você alterou o metodo ligar`)
    }


}


const s1 = new Smartphone('Iphone', 'Preto', 'X');
const s2 = new Smartphone('Iphone', 'Gold', '5s');
const t1 = new Tablet ('Tablet', true)

/*
s1.ligar();
console.log(s1)

console.log()

s2.ligar();
console.log(s2) */

console.log(t1)