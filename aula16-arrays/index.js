//criação de arrays
const alunos = ['Felipe', 'Daniel', 'Domingues'];
//acessando arrays
console.log(alunos);
console.log(alunos[1]);

//mudando dados do array
alunos[0] = 'Eduardo';
console.log(alunos[0]);

//tamanho do array
console.log(alunos.length);

//insere no final do array
alunos.push('Otávio');

//insere no inicio
alunos.unshift('Luiza');
console.log(alunos);

//remove o ultimo indice e armazena na const
const removidop = alunos.pop();
console.log(removidop);
//remove o primeiro indice e armazena na const
const removidou = alunos.shift();
console.log(removidou);

//deleta registro do indice
delete alunos[1];
console.log(alunos);

//fatiar e pegar indices especificos
console.log(alunos.slice(0, -2));

//verifica se a const é array
console.log(alunos instanceof Array);