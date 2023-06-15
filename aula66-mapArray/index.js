const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

//para cada elemto:
//retirne apenas umastring como nome da pessoa
//remova apenas a chave "nome do objeto
//adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Lais', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

//retirne apenas umastring como nome da pessoa
const nomes = pessoas.map(function(obj){
    return obj.nome;
});
//eros function
const nome1 = pessoas.map(obj => obj.nome);
console.log(nome1);

//remova apenas a chave "nome do objeto
//const nome2 = pessoas.map(obj => obj.idade);
const nome2 = pessoas.map(obj => ({idade: obj.idade}));
console.log(nome2);

const comIds = pessoas.map(function(obj, indice){
    const newObj={ obj };
    newObjid = indice;
    return newObj;
    obj.id= (indice + 1) * 1000;
    return obj;
});
console.log(pessoas);
console.log(comIds);

