/*
602.292.270-40

6X  0X   2x   2X   9X  2X  2X   7X  0X
10  9    8    7    6   5   4    3   2

60  0    16   14   54  10  8   21  0 = 183

////////////////////////////////////////////////////////////////////////////////////////////////

6X  0X   2x   2X   9X  2X  2X   7X  0X  4X
11  10   9    8    7   6   5    4    3   2
66  0   18    16   63  12  10   28   0   8 = 221





let cpf = '602.292.270-40'

let cpfLimpo = cpf.replace(/\D+/g, '')

arrayCpf = Array.from(cpfLimpo)

console.log(arrayCpf.reduce((acumulador, valor) => acumulador + Number(valor), 0))


*/

function ValidaCpf(cpf) {


    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '')
        }
    })
}

ValidaCpf.prototype.valida = function () {

    if (typeof this.cpfLimpo === 'undefined' || typeof this.cpfLimpo === 'null') return false;
    if (this.cpfLimpo.length > 11) return false;
    if(this.isSequencia()) { return false; }

    const cpfParcial = this.cpfLimpo.slice(0, - 2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1);
  

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo
}

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1

    const total = cpfArray.reduce((ac,val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac
    }, 0)

 
    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito);
    

}

ValidaCpf.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)

    return sequencia === this.cpfLimpo;
}

const cpf01 = new ValidaCpf('602.292.270-40');
console.log(cpf01.valida())
//cpf01.valida()




