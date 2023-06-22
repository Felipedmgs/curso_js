//define property
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    
    //neste metodo vc configura todos de uma só vez
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque,// valor da var
        writable: false,// pode alterar o valor se for false
        configurable: true //configuravel

    });
    //aqui vc configura por atributo as propriedades, você faz uma por vez
    Object.defineProperties(this, {
        nome:{
            enumerable: true, //mostra a chave
            value: nome,// valor da var
            writable: false,// pode alterar o valor se for false
            configurable: true //configuravel

        },
        preco:{
            enumerable: true, //mostra a chave
            value: preco,// valor da var
            writable: false,// pode alterar o valor se for false
            configurable: true //configuravel

        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 5000000;
console.log(p1);

for(let chave in p1){
    console.log(chave);
}
