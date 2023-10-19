//Fazer um sistema que valide o cpf

//705.484.450-52 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro digito)
Se o numero digito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
70 0  45 32 56 24 20 20 0  10

11 - (284 % 11) = 5 (Primeiro dígito)
*/

//console.log ( 11 - ( 284 % 11 ) );

/*
const cpf = '387.266.008-03';
const cpf_limpo = cpf.replace(/\D+/g, '');// retira tudo que não é numero

console.log(cpf_limpo);
cpfArray = Array.from(cpf_limpo); //transform string em array
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));//somando os dados do vetor
*/
//inicio do programa de validar cpf:

//function construtora do cpf
function ValidaCPF (cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            //retira o que não é numero do cpf
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

//verificando se o cpf é valido
ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false; //verifica o tipo
    if(this.cpfLimpo.length !== 11) return false; //verifica se tem 11 digitos
    if(this.isSequencia()) return false;//verificando se é uma sequencia de umeros iguais

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    
    return novoCpf === this.cpfLimpo;
};

//
ValidaCPF.prototype.criaDigito = function (cpfParcial){
    //local onde sera feito o calculo do cpf
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
     }, 0);
     const digito = 11 - (total % 11);
     return digito > 9 ? '0' : String(digito);
};

//valida se foi colocar somente um numero no cpf
  ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  };  
   

//criando e chamando functions
//const cpf = new ValidaCPF('111.111.111-12');
const cpf = new ValidaCPF('070.987.720-03');

if(cpf.valida()){
    console.log('Cpf Valido');
}
else{
    console.log('Cpf inválido');
}
 