const fruta = ['pera', 'uva', 'maçã'];

for(let indice in fruta){
    console.log(fruta[indice]);
}


const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Domingues',
    idade: '32'
};

for(let i in pessoa){
    console.log(i);
    console.log(pessoa[i]);

    // maneiras de acessar variaveis do objeto
    console.log(pessoa.nome);
    console.log(pessoa['nome']);
}

