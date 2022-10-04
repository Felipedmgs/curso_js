falaOi();//podemos chamar a função antes de cria-la

//declaração d uma function
function falaOi(){
    console.log('oiiii');
}

const souUmDado = function() {
    console.log('Sou um dado');
}
souUmDado();

//arrow function
const funcaoArrow = () => {
    console.log('SOu uma arrow function');
};
funcaoArrow();



const obj = {
    falar(){
        console.log('Estou falando..');
    }
};
obj.falar();




