function meuEscopo(){
    //Seleciona o formulario do html inserindo a classe do form, poderia selecionar o id, no lugar de .form colocaria #nome_id
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    //local onde eu vou no html buscar os dados dos campos
    function recebeEventoForm (evento){
        evento.preventDefault();

        //busco coisas que estão dentro do form, onde seleciono na linha 4
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //Pego os dados do objeto
        pessoas.push({
            nome: nome.Value,
            sobrenome: sobrenome.Value,
            peso: peso.Value,
            altura: altura.Value
        }); 

        console.log(pessoas);   

        //insere dentro da div os dados
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
        `${peso.value} ${altura.value}</p>`;

    }
    //não envio o form quando clicar em enviar
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();