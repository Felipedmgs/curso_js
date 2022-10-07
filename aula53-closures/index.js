function retornaFuncao(){
    const nome = 'Luiz';
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao);



function retornaFuncao2(nome){
    return function(){
        return nome;
    };    
}

const funcaon1 = retornaFuncao2('Luiz');
const funcaon2 = retornaFuncao2('Felipe');
console.dir(funcaon1);
console.dir(funcaon2);

console.log(funcaon1(), funcaon2());
