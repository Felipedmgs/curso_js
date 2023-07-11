//construtora molde
function pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome;
}

//repare que existe a function 'nomeCompleto' dentro do contrutor, porem o metodo proto type 
//detecta caso não tenha dentro do contrutor, deverá ser chamado no proto.

pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}


//instancia
const pessoa1 = new pessoa('Felipe', 'Domingues');
const pessoa2 = new pessoa('Mirelle', 'Martins');

const data1 = new Date();

console.dir(data1);

console.dir(pessoa1);
//console.dir(pessoa2);

console.dir(pessoa1.nomeCompleto());


