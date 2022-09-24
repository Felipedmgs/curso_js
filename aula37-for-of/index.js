/***
 * for in retorna o indice com interaeis
 * for of retorna o valor em si  ou chave(string, array ou objetos)
 * for classico reatorna com interaveis e arrays
 * 
 */

//pegar cada caractere do vetor
const nome = 'Felipe Domingues';

for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}
console.log('#########');

//for in
for(let j in nome){
    console.log(nome[j]);
}
console.log('#########');

//for of onde pega o valor de cada indice
for(let j of nome){
    console.log(j);
}
console.log('#########');


//fro each
const nome2 = ['Felipe', 'Daniel', 'Domingues'];

nome2.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});


