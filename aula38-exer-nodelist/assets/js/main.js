const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

//Seleciona o body para pegar cor de fundo
const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);


for(let p of ps){
    console.log(p);// cor em rgb
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffff'; //coloca a cor da fonte como branca.
}
