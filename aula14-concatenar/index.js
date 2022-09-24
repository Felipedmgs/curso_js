let num1 = 10.1212;
let num2 = 2;

console.log(num1.toString() + num2); //concatena numeros
console.log(num1.toFixed(2)); //imprime com 2 casas decimais
num1 = num1.toString(); //muda para string
console.log(num1.toString(2)); //
console.log(Number.isInteger(num1));

let temp = num1 + '5';
console.log(Number.isNaN(temp));

//*************************************************** */
let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 += num4;
num3 += num4;

console.log(num3);
num3 = parseFloat(num3.toFixed(2)); //resolve problema de casa decimal e de falha de virgula
console.log(num3);

console.log(Number.isInteger(num3));

