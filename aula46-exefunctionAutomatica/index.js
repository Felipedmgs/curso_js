function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

//chamando function de tempos em tempos
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

//para a execução da função acima
setTimeout(function(){
    clearInterval(timer);
}, 3000);

//Executa essa function depois de um tempo
setTimeout(function(){
    console.log('Olá mundo!');
}, 5000);


//digite stop, ou ctrl + alt + M para dar stop

