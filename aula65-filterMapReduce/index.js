//Filter, map, reduce


// Filter sempre retorna o array


//retorne o numeros maiores que 10
//function padrão
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array){

    if(valor > 10){
        return true;
    }else{
        return false;
    }

}

const numerosFiltrados = numeros.filter(callbackFilter);
//console.log(numerosFiltrados);


//Arrow function
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFilter = numeros2.filter(valor => valor > 10);
//console.log(numerosFilter);


//Retorne as pessoas cujo nome termine com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
//console.log(pessoasComMaisDeCinquentaAnos); 

const nomePessoaTerminaComA =pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
});
console.log(nomePessoaTerminaComA);




