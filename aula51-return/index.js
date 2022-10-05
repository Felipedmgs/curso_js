//return
//retorna valor
//termina uma função
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('Luis', 'Otavio');
const p2 = {nome: 'Felipe', sobrenome: 'Domingues'};

console.log(typeof p1);
console.log(p1);

console.log(typeof p2);
console.log(p2);

//*****************************************/
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Mundo!');
console.log(resto);

/*****************************************/
function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));


