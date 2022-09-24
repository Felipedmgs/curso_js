
//Solução aula
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});
console.log(data);
/*
//Solução minha:
const data = new Date();
//console.log('Dia', data.getDate());

const dia = data.getDate();
const dSemana =  data.getDay();
const mes =  data.getMonth();
const ano = data.getFullYear();
const hora =  zeraAEsquerda(data.getHours());
const minuto = zeraAEsquerda(data.getMinutes());



function zeraAEsquerda(num){
    return num >= 10? num : `0${num}`;//concatena o zero a esquerda
}

let diaSemanaTexto;

switch(dSemana){
    case 0:
        diaSemanaTexto = 'domingo';
        break;
    case 1:
        diaSemanaTexto = 'segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'sábado';
        break;
}

let mesTexto;

switch(mes){
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 1:
        mesTexto = 'Fevereiro';
        break;
    case 2:
        mesTexto = 'Março';
        break;
    case 3:
        mesTexto = 'Abril';
        break;
    case 4:
        mesTexto = 'Maio';
        break;
    case 5:
        mesTexto = 'Junho';
        break;
    case 6:
        mesTexto = 'Julho';
        break;
    case 7:
        mesTexto = 'Agosto';
        break;
    case 8:
        mesTexto = 'Setembro';
        break;
    case 9:
        mesTexto = 'Outubro';
        break;
    case 10:
        mesTexto = 'Novembro';
        break;
    case 11:
        mesTexto = 'Dezembro';
        break;
    default:
        mesTexto = '--';
        break;
}

let texto = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minuto} `;

setResultado (texto);

function criaP(){
    //criar elemento paragrafo em js
    const p = document.createElement('p');
    return p;  
  }
  
//coloca texto em div resultado
function setResultado (data){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
  
    const p = criaP();
  

    p.innerHTML = data;
    resultado.appendChild(p);
  }
  */