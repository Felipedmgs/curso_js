//slice
//splice(indice, elemento qe vou deleta);
//splice(1, Number.MAX_VALUE ); - deet o emeno de maior valor

const nomes = ['Eduardo','Felipe','Daniel', 'Julia', 'Camila'];

const removido = nomes.splice(4, 1); //remove do vetor e  valor é gyardado em outro vetor
console.log(nomes, removido);


//max_value pega o maior numro do js, ou seja, o maior numero do vetor
const removidos = nomes.splice(-2, Number.MAX_VALUE);

const nomes1 = ['Eduardo','Felipe','Daniel', 'Julia', 'Camila'];
const removidos1 = nomes1.splice(3, 2, 'Luiz');
console.log(nomes1, removidos);



//pop
//const removido2 = nomes.splice(-1, 1);

//shift
//const removidos = nomes.splice(0, 1);