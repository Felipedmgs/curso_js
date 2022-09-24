//break para de executar
//continue pula a iteração atual

const numeros = [1,2,3,4,5,6,7,8,9];
/*
for(let numero of numeros){

    if(numero ===2){
        console.log("achei o '2'");
        continue;
    }

    if(numero ===8){
        console.log("achei o '8'");
        break;
    }
    console.log(numero);
}
*/

/*
let i = 0;
while(i < numeros.length){

    if(i ===2){
        i++;
        console.log("achei o '2'");
        continue;
    }

    if(i ===8){
        i++;
        console.log("achei o '8'");
        break;
    }
    console.log(i);
    i++;
*/

let i = 0;
do{
    let numero = numeros[i];

    if(numero === 2){
        console.log("achei o '2'");
        i++;
        continue;
    }
    console.log(i);
    
    if(numero ===8){
        console.log("achei o '8'");
        i++;
        break;
    }

    i++;

}while(i < numeros.length);