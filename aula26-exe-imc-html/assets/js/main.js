//Captura evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura= e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if(!peso){
    setResultado('Peso inválido', false);
    return;
  }

  if(!altura){
    setResultado('Altura inválido', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc}.)`

  console.log(imc, nivelImc);
  
  //chama função que insere dados na div
  setResultado(msg, true);
});

 
 //exibe msg do imc
function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if(imc >= 39.9)   return nivel[5];
  if(imc >= 34.9)   return nivel[4];
  if(imc >= 29.9)   return nivel[3];
  if(imc >= 24.9)   return nivel[2];
  if(imc >= 18.5)   return nivel[1];
  if(imc < 18.5)    return nivel[0];

}


//Faz calculo do imc
function getImc(peso, altura){
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP(){
  //criar elemento paragrafo em js
  const p = document.createElement('p');
  return p;  
}


//coloca texto em div resultado
function setResultado (msg, isValid){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  //Se parametro for true cham uma classe no css, caso contrario chma outra
  if(isValid){
    p.classList.add('paragrafo-resultado');
  }else{
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}






