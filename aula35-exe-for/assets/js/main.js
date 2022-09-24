const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

//selecioando o elemento com id container
const container = document.querySelector('.container');

//cria o elemento no html
const div = document.createElement('div');

//modo js
/*
for(let i=0; i<elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}
*/
// modo node
for(let i=0; i<elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);