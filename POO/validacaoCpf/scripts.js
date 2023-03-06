class ValidaCpf {
    constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, '')
    });
    }

    éSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidaCpf.geraDigito(cpfParcial);
        const digito2 = ValidaCpf.geraDigito(cpfParcial + digito1);
        this.NovoCpf = cpfParcial + digito1 + digito2;
    }

    static geraDigito (cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for (let StringNumerica of cpfParcial) {
            total += reverso * Number(StringNumerica);
            reverso --;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if(this.cpfLimpo.éSequencia === true) return false;
        this.geraNovoCpf();
        console.log(this.NovoCpf)

        return this.NovoCpf === this.cpfLimpo;
    }
}

let validaCpf = new ValidaCpf('602.292.270-40')


if(validaCpf.valida()) {
    console.log(`CPF Válido`)
} else {
    console.log(`CPF Inválido`)

}
