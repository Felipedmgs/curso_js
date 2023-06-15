//podemos utilizar qualquer uma das linhas abaixo, porém a primeira é mais usuál.
/*1*/
const nomes = ['Eduardo','Felipe','Daniel'];
//const nomes = new Array('Eduardo','Felipe','Daniel'); mesmo que a linha de cima, porem menus usual.

//criando array com sprad, desta forma copio os dados do array nomes, porém evido deles serem referenciados,
//desta maneira eles acabam sendo independentes e caso eu mude algo em um array não mudarei em outro.
//MANEIRA PARA COPIAR ARRAY E NÃO DEIXAR POR REFERENCIAS - --------------------
const novo2 = [...nomes];

//Valor por referencia, quando junto um array com outro e caso altere um eu altero o outro tambem
const novo = nomes;

//mudo dados para verificarmos as referencias e independencias
nomes[2] = 'João'; //altera dados da posição 2 do array
delete nomes[2]; // deleta a posição 2 do array
novo.pop();// ao deletar o indice no array 'novo' eu  deleto o indice do nomes também.

//repare que como este esta referenciado no array nome, logo o que eu fiz no array nome, refletiu
//no array novo 
console.log(novo);

//no array novo2 como usei o spred 'const novo2 = [...nomes];' ele não esta se referenciando 
//em outro array.
console.log(novo2);


/************************COMANDOS DO ARRAY*************************************** */
const sobrenomes = ['Eduardo','Felipe','Daniel'];

//maneira de criar array
//const nomes = new Array('Eduardo', 'Felipe', 'Daniel');
const removido = sobrenomes.shift();
console.log(sobrenomes, removido);

//add deleta************************
//Comando shift serve para remover o indice do começo de um array,
// trazendo os demais índices para o inicio

sobrenomes.pop(); //comando remove dados do final do array
console.log(sobrenomes);

sobrenomes.push('Andre'); //comando push add dados no fim do array
console.log(sobrenomes);

sobrenomes.unshift('Andre'); //comando add dados no inicio do array
console.log(sobrenomes);

/************************FATIAR ARRAY***********************/
const aslice = ['Eduardo','Felipe','Daniel'];
//consigo definir qual indice pegar e qual começar, igual o substring
const novoslice = aslice.slice(0, -1);
console.log(novoslice);

/************************CONVERTER STRING EM ARRAY***********************/
const felipe = 'Felipe Daniel Domingues';
const afelipe = felipe.split(' '); //no split eu fali qual será o separador, neste caso é o espaço
console.log(afelipe);

/************************CONVERTER ARRAY EM STRING***********************/
const nome3 = ['Eduardo','Felipe','Daniel'];
const snome = nome3.join(' ');
console.log(snome);


