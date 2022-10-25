    
function criaPessoa(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        fala(assunto = 'falando sobre tudo'){
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        
        // utilizamos o get antes do nome da function para conseguir chamar a function como parametro
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    };
}

const p1 = criaPessoa('Felipe', 'Domingues', 1.75, 86);
p1.nomeCompleto = 'MAria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);