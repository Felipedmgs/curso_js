const produto = {nome: 'caneca', preco: 1.8};
Object.freeze(produto);//deixo o objeto inalterado

const outracoisa = {...produto}; //criando um novo objeto
const outracoisa2 = produto;//crio objeto por referencia, ou seja tudo que faço em um tenho no outro.
const outracoisa3 = {nome: produto.nome, preco: produto.preco};//uma forma de copiar podendo escolhor se vai copiar os parametros

outracoisa.nome = 'Outro nome';
outracoisa.preco = 2.5;

console.log(produto);
console.log(outracoisa);
console.log(outracoisa2);
console.log(Object.keys(produto));//retorna as chaves do obj

//propriedades do objeto
Object.defineProperty(outracoisa3, 'nome', {
Writable: false,
configurable: false,
value: 'Qualquer outra coisa'
});

console.log(Object.getOwnPropertyDescriptor(outracoisa3, 'nome'));