
let umaString = "Usando String para \"escapar\"";
console.log(umaString);

//localizando caracter especifico da string
console.log(umaString[0]);
console.log(umaString.charAt(2));

//concatena
console.log(umaString.concat(' em um dia'));
console.log(umaString +' em um dia');
console.log(`${umaString} em um dia`);

//Localiza texto que inicia com a palavra texto
console.log(umaString.indexOf('texto'));

//começa a partir da posição 3
console.log(umaString.indexOf('texto', 3));

//array do texto
console.log(umaString.match(/[a-z]/g));

//localiza indice da letra inserida
console.log("umaString".search(/g/));

//pega somente o primeiro s
console.log(umaString.replace('s', 'x'));

//pega todos os s
console.log(umaString.replace(/s/g, 'x'));

//pega tamanho
console.log(umaString.length);

//pega uma parte espoecifica do texto
console.log(umaString.slice(2, 5));

//pega os 2 ultimos caracteres
console.log(umaString.slice(-2));

//mesmo que slice, porém o a estrutura acaba se tornando maior
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

// a cada espaço ele separa em vetor, o 3 significa a quntidade de repetições
console.log(umaString.split(' ', 3));

//Maiuscula e minuscula
console.log(umaString.toUpperCase());
console.log(umaString.toLocaleLowerCase());



