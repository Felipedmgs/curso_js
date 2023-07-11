function produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

//instanciando
const p1 = new produto('camiseta', 50);
//p1.desconto(50);
p1.aumento(50);
console.log(p1);



//criando obj literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

//p2.aumento(50);
//como o prototype criado não esta para o p2 e sim para o produto, 
//ele da erro ao chamar a function aumento
//console.log(p2);


//quando eu defino o prototype ele permite que o p2 chama 
Object.setPrototypeOf(p2, produto.prototype);
p2.aumento(50);
console.log(p2);



//outra maneira de criar um objeto e pegar o prototype
//const p3 = Object.create(Object.prototype);
//console.log(p3);//cria obj vazio

const p4 = Object.create(produto.prototype);
p4.preco = 80;
p4.aumento(50);
console.log(p4);

const p5 = Object.create(produto.prototype, {
    preco:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },

    tamanho:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p5.aumento(10);
console.log(p5);