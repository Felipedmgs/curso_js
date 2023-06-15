//revisão de objetos

//criando objeto
//01
const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Domingues'
};

//02 construtor
const pessoa1 = new Object();
pessoa1.nome = 'Flavio';
pessoa1.sobrenome = 'Daniel';


//chamando objeto:

//variavel que posso colocar dentro do console.log
//const chave = 'sobrenome';
const chave = 'nome';
//desta forma consigo mudar dinamicamente minha chamada,, fazendo que o atributo do objeto mude
console.log(pessoa[chave]);

//assim não consigo mudar dinamicamente minha chamada
console.log(pessoa.nome);

console.log(pessoa1);

//APAGANDO OBJETO
//delete pessoa1.nome;
console.log(pessoa1);


//metodos dentro do objeto
pessoa1.falarNome = function(){
    console.log(`${this.nome} esta falando seu nome.`);
};

pessoa1.falarNome();