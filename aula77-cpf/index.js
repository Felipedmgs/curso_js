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
            //retira oque não é numero do cpf
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

//verificando se o cpf é valido
ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false; //verifica o tipo
    if(this.cpfLimpo.length !== 11) return false; //verifica se tem 11 digitos
  
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);

    return true;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial){
    //local onde sera feito o calculo do cpf
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpf.length + 1;
    const digito = cpfArray.reduce((ac, val) => {
        console.log(regressivo, val, regressivo * val);
        regressivo--;
        return ac;
     }, 0);
};

    
   

//criando e chamando functions
const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());
 

 