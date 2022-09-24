//chamada de funcao sem retorno
function saudacao(nome){
    console.log(`Bom dia ${nome}`);
}
saudacao('Luis');
saudacao('Maria');


//chamada de função com retorno
function saudacao2(nome){    
    return `Bom dia ${nome}`;
}

const variavel = saudacao2('Luisa2');
console.log(variavel);

//outro tipo de função
const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(9));

//outro tipo de function
const raiz2 = n => n ** 0.5;
console.log(raiz2(9));

//outro tipo de function
const raiz3 = (n) =>{
    return n ** 0.5;
};

console.log(raiz3(9));