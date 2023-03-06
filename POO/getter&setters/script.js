//Symbol

const _velocidade = Symbol('Velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;

    }

    acelerar() {
        if (this[_velocidade] >= 150) {
            return;
        }
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) {
            return;
        }
        this[_velocidade]--;
    }

    get velocidade () {
        console.log('GETTER')
        return this[_velocidade];
    }

    set velocidade (valor) {
        console.log('SETTER')
        if (typeof valor !== 'number') {
            return;
        }

        if (valor <= 150 && valor > 0){
         `${this[_velocidade] = valor}Km/h`;
    }

    else {
        return console.log(`Valor Não compativel, então sua velocidade permanecerá no padrão: ${this[_velocidade]}Km/h`);
    }
    }
} 

const c1 = new Carro('Fusca');


for(let i = 0; i <= 200; i++) {
    c1.acelerar();
};

c1.velocidade = 122;
console.log(`${c1.velocidade} km/h`);