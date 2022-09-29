function relogio(){

    //inicia ao relogio formatado
    function criHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    //inicia a contagem do relogio
    function iniciaRelogio(){
            timer = setInterval(function() {
            segundos ++;
            relogio.innerHTML = criHoraDosSegundos(segundos);
        }, 1000);
    }


    document.addEventListener('click', function(e) {
        const el = e.target;//pega o elemento que clicar
        
        if(el.classList.contains('zerar')){
            segundos = 0;
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            
        }

        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

    });

}

relogio();
