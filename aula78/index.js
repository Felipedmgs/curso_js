//super classe
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        this.verSaldo();
        console.log(`Saque indisponível para o valor de ${valor}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();   
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia} / ${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 22, 10);
console.log(conta1);

conta1.depositar(11);
conta1.sacar(22);
//===================================================================


//aceita saldo negativo:
function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

//configurando prototype
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saque indisponível para o valor de ${valor}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}
//===================================================================



function CP(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

//configurando prototype
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const contaL = new CC(15, 17, 0, 15);
console.log(contaL);
contaL.sacar(12);
contaL.sacar(12);
console.log();


const cp = new CP(1, 2, 20, 15);
console.log(cp);
cp.sacar(12);
cp.sacar(12);


//Explicação:
/*Esse poliformismo ocorre pos criamos 2 tipos de função sacar,
uma que tem limite e outra sem limite,
porém se observar no prototype o CC esta apontando para o proprio sacar dele,
enquanto o CP usa o sacar da conta.CC
*/
















