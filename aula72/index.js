//define property
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;    
    
    let = estoquePrivado = estoque;
    //neste metodo vc configura todos de uma só vez
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //configuravel
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Deve ser enviado int');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);


//segunda parte
function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    };
}

//quando cria o const eu chamo a function passando o valor do parametro
const p2 = criaProduto('carro');
//p2.nome = 'qualquer coisa';
console.log(p2.nome);