//function construtora controi objetos
//function factory fabrica objetos

//Construtora -> Pessoa (new)
//todo objeto é com letra maiuscula, pois para cria-lo sempre usamos a palavra nwe
function Pessoa (nome, sobrenome){

    //atributos, ou metodos privados do objeto
    const ID = 13465;

    const metodoInterno = function(){

    };

    //criando atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    //criando metodos no objeto
    this.metodo = function(){
        console.log(this.nome + ' : sou um metodo');
    }
}
//criando objeto de acordo com o Objeto Pessoa acima
const p1 = new Pessoa ('Felipe', 'Domingues');
const p2 = new Pessoa ('Mirelle', 'Martins');
p1.metodo();
