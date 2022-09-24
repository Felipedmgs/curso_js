const pessoa = {

    nome: 'Felipe',
    sobrenome: 'Domingues',
    idade: 30,
    endereco:{
        rua: 'Av Brasil',
        numero: 320
    }


}

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);