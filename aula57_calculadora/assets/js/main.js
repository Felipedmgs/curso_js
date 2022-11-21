function criaCalculadora(){
    
    return{
        display: document.querySelector('.display'),
        btnClear:document.querySelector('.btn-clear'),
       
        //******************************************************* */
        //chama metodos
        inicia(){
            this.cliqueBotoes();    
            this.pressionaEnter()        ;
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                
                //se for igual a 13 a  tecla pressionada, significa que é o enter
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                //o eval realiza conta de uma string com operadores
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            }catch(e){
                alert('Conta Inválida');
                return;                
            }           
            
        },

        clearDisplay(){
                this.display.value = '';
        },

        apagaUm(){
           this.display.value = this.display.value.slice(0, -1);
        },
       //******************************************************* */

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;

                //pega botõ que foi clicado
                if(el.classList.contains('btn-num')){
                  this.btnParaDisplay(el.innerText);
                }

                //chama metodo de apagar display                
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }


            }.bind(this)); //falo para pegar o meu this e retiro o erro do navegador

        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();