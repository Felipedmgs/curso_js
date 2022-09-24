
//imprime o numero do vetor do indice 0 e 1 pois somente tem 2 valores
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const [pn1, pn2,...resto2] = numeros;
console.log(pn1, pn2);
console.log(resto2);//pega o resto do vetor



const numeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const [pn3, , pn4,...resto3] = numeros2; //pega indice 0 e 2
console.log(pn3, pn4);
console.log(resto3);//pega o resto do vetor

//linha por coluna do array
const numeros3 = [ [0, 1, 2], [3, 4, 5], [6, 7, 8]];
console.log(numeros3[2][0]);//pega o numero 6, linha 2 coluna 0