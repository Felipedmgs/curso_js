//slice
//splice(indice, elemento qe vou deleta);
//splice(1, Number.MAX_VALUE ); - deet o emeno de maior valor

const nomes = ['Eduardo','Felipe','Daniel', 'Julia', 'Camila'];

const removido = nomes.splice(4, 1); //remove do vetor e  valor é gyardado em outro vetor
console.log(nomes, removido);


//pop
//const removido2 = nomes.splice(-1, 1);

//shift
//const removidos = nomes.splice(0, 1);