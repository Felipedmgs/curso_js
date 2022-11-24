//
function Calculadora(){
    //pega o elemento html
    this.display = document.querySelector('.display');

    //inicia a function para pegar os cliques, ou o enter
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    //pega o enter se pressionado
    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            //se tecla for igual a enter entra no if
            if(e.keyCode === 13){
                this.realizaConta();
            }            
        });
    };


    //pega as teclar que foram digitadas e coloca no display
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    //analisa se a conta é valida ou não
    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta inválida');
                return;
            }

            //imprime resultado no display
            this.display.value = conta;

        }catch(e){
            alert('Conta inválida');
            return;
        }
    };



    //capturando botão preesionado
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();//coloca o foco no botão, pós prescionar tecla
    };

    this.clear = el => this.display.value = '';
   
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();//criando objeto
calculadora.inicia();//chama metodo do objeto