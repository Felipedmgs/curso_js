//function recursiva, é quando você chama uma função dentro de outra

function recursiva(max){
    if(max > 50) return;
    console.log(max);

    max++;
    recursiva(max);
}

recursiva(1);