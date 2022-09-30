const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaLi(){
    const li  = document.createElement('li');
    return li;
}

//insere a tarefa quando o enter foi pressionado
inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

//limpa texto do input tarefa
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');//cria botão com atributo class 'apagar'
    li.appendChild(botaoApagar);
}

function criaTarefa(textInput){
    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

//pego local que foi clicado
document.addEventListener('click', function(e){
    const el = e.target;
       
    if(el.classList.contains('apagar')){
        el.parentElement.remove();//remove o pai do botão que é o LI
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    //grava a tarefa na base de dados do navegador
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);//converte a string do banco do navegador em vetor

    //carrega as tarefas do banco na página
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }

}

//chama function para carregar tarefas do banco de dados
adicionaTarefasSalvas();