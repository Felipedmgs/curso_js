//objeto
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}

//chamando objeto
//console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome);

function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        fala(){
            console.log(`${this.nome} ${this.sobrenome} ${this.idade} esta falando oii`);
        },

        aniversario(){
            this.idade++;
        }
    };
}

const pessoaA = criaPessoa('Felipe', 'Domingues', '32');
//console.log(pessoaA.nome);
pessoaA.fala();
pessoaA.aniversario();
pessoaA.fala();