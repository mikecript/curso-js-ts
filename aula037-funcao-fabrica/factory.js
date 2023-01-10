
function criaPessoa(nome,sobrenome, idade,altura,peso) {
    return {
        nome,

        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`  
        },

        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
            console.log(valor);
        },


        idade,

        peso,

        fala: function(assunto){
            return `${this.nome} está falando ${assunto}.`;
        },

        altura,

        get imc() {
            const imc = `seu indice de massa corporal será ${(this.peso) / (this.altura*this.altura)}`
            return imc;
        }
    }
}


const pessoa1 = criaPessoa('Mike', 'Santos', 19, 1.76, 64);
const pessoa2 = criaPessoa('Gabriela', 'Santos', 16, 1.55, 50);
pessoa1.nomeCompleto = 'Maria silva oliveira'
console.log(pessoa1.nomeCompleto)

console.log(pessoa2.fala('olá, mundo'))
