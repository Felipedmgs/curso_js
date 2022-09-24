const nome = 'Felipe';
const sobrenome = 'Domingues';
const idade = 32;
const peso = 86;
const altura = 1.8;
let imc;


const dataAtual = new Date();
const anoAtual = dataAtual. getFullYear();

let anascimento  = anoAtual - idade;
console.log(anascimento);

imc = peso / (altura*altura);

//mostra o nome da variavel
console.log(`imc`);


console.log(`${nome} tem ${imc} de imc.`);


