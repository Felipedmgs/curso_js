let num1  = 9.5456;

let num2 = Math.floor(num1);//arredonda pra baixo
console.log(num2);

let num3 = Math.ceil(num1);//arredonda pra cima
console.log(num3);

let num4 = Math.round(num1); //se estiver na metade arredonda pra cima, se estiver abaixo da metade arredonda pra baixo
console.log(num4);

console.log(Math.max(1,2,3,4,5,6,10)) //pega maior numero da sequencia
console.log(Math.min(1,2,3,4,5,6,10)) //Pega menor numero da sequancia
console.log(Math.random()); //gera numero aleatorio

const aleatorio = Math.round (Math.random() * (10 - 5) + 5);
console.log(aleatorio);

console.log(100/0); //essa conta retorna true (infynit), porém não é verdadeira, atenção!!


