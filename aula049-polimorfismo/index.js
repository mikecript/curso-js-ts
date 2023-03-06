//SuperClass
function Conta(agencia, conta,saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;




};

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo Insuficiente: Você tentou sacar: ${valor}R$ e seu saldo é ${this.saldo}R$`)
        //this.verSaldo();
    return;}

    this.saldo -= valor;
    this.verSaldo();

};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
};

//Conta.prototype.saldo = function () {

//};

Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} |` + 
    `Saldo: R$${this.saldo.toFixed(2)}`)
};

const conta1 = new Conta(11, 22, 10);

/*console.log(conta1);
conta1.depositar(42);
console.log(conta1)
conta1.sacar(55);

console.log(conta1) */


function contaCorrente(agencia, conta,saldo,limite) {

    Conta.call(this, agencia, conta,saldo)
    this.limite = limite;

};

contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.prototype.constructor = contaCorrente;


contaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: Você tentou sacar: ${valor}R$ e seu saldo é ${this.saldo}R$`)
        //this.verSaldo();
    return;}

    this.saldo -= valor;
    this.verSaldo();

};


function contaPoupanca(agencia, conta,saldo) {

    Conta.call(this, agencia, conta,saldo)

};

contaPoupanca.prototype = Object.create(Conta.prototype);
contaPoupanca.prototype.constructor = contaPoupanca;


contaPoupanca.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
    console.log(`Saldo Insuficiente: Você tentou sacar: ${valor}R$ e seu saldo é ${this.saldo}R$`)
    //this.verSaldo();
    return;}

    this.saldo -= valor;
    this.verSaldo();

};


const cp = new contaPoupanca(12,33,0)

cp.depositar(10)
cp.sacar(20)
console.log(cp)