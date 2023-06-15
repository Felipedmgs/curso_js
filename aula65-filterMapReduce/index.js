//Filter, map(modifica array), reduce(reduz array)


// Filter sempre retorna o array


//retorne o numeros maiores que 10
//function padrão
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array){
//essa function requer que seja retornado booleano
    
//********************* */
    if(valor > 10){
        return true;
    }else{
        return false;
    }

/********************** */
//ainda podemos fazer da seguinte forma para não colocar a estrutura acima:
//desta forma ja irá retornar o valor se for maior que 10.
//return valor > 10;

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
    {nome: 'Rosana', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

/******************************************* */
//retorna pessoas com mais de 5 letras no nome
//função normal:
const pessoaComNomeGrande = pessoas.filter(function(valor) {
    //console.log(valor.nome);//maneira de acessar a propriedade do objeto
    return valor.nome.length >= 5;
});

//Arrow function
//const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//console.log(pessoaComNomeGrande);

/******************************************* */
//pessoas mais de 50 anos
//function normal
const pessoasComMaisDeCinquentaAnos = pessoas.filter(function(valor){
    return valor.idade >= 50;
});

//Arrow function
//const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDeCinquentaAnos); 

/******************************************* */
const nomePessoaTerminaComA =pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
});
//console.log(nomePessoaTerminaComA);




