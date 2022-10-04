//parametros que sustentam argumentos enviados

function funcao(a, b, c=4){
    b = b || 2;
    console.log(a+b+c);
}
funcao(2);
funcao(2, undefined, 20); // chamada mandando b vazio


function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Felipe', sobrenome: 'Daniel', idade: 20};
funcao(obj);

//coloca resto de argumentos em parametro
function conta(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros);
}
conta('+', 0, 20, 30, 40, 50);


//coloca resto de argumentos em parametro
function conta(operador, acumulador, ...numeros){
    console.log(arguments);
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;        
    }   
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);