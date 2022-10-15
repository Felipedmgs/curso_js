/*IIFE -> Immediately invoked function express 
É uma maneira de executar function sem ser preciso chama-la, ou dar nomes
*/

//(function(){})('param1', 'param2');

(function (idade, peso, altura){

    const sobrenome = 'Domingues';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Felipe'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(32, 85, 1.80);