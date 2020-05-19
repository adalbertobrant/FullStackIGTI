// Fazendo o CRUD em javascript
window.addEventListener('load',start);
// variáveis para o retrieve do crud
var nomeGlobal = ['josé','luana','sofia','victor','adalberto'];
var inputName = null;
function start(){
    console.log("PÁGINA CARREGADA COM SUCESSO");   
    preventFormSubmit(); // previne a página de enviar o formulário ao clicar enter o submeter em enviar.
    // carrega o valor do nome 
    inputName = document.querySelector('#nameInput');
    // função para dar focus no formulário
    activateInput();
    render();
    
}
function preventFormSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();
    }
    var formulario = document.querySelector('#form');
    formulario.addEventListener('submit',handleFormSubmit); // escuta o evento enviar no formulário.
}
function activateInput(){
    function insertName(nome){
        nomeGlobal.push(nome);
        console.log(nomeGlobal);
        render();
    }
    function handleTyping(event){
        if(event.key === "Enter"){
            insertName(event.target.value);
        }
    }
    inputName.addEventListener('keyup',handleTyping);
    inputName.focus();
}
// Inserção dinâmica na div 
function render(){
    function createDeleteButton(index){
        function deleteName(){
            nomeGlobal.splice(index,1); // faz a exclusão com base no indice a quantidade de elementos é 1
            render(); // faz novamente a renderização;
        }
        var button = document.createElement('button');
        button.textContent = "X";
        button.classList.add('deleteButton');
        button.addEventListener('click',deleteName);
        return button;
    }
    var nomeDiv = document.querySelector("#names");
    nomeDiv.innerHTML = " ";
    var ul = document.createElement('ul');
    for(var i =0 ; i<nomeGlobal.length; i++){
        var currentName = nomeGlobal[i];
        var li = document.createElement('li');
        var buttona = createDeleteButton(i);
        var span = document.createElement('span');
        span.textContent = currentName;
        li.appendChild(buttona);
        li.appendChild(span);
        ul.appendChild(li);
    }
    nomeDiv.appendChild(ul);
    clearInput();
}
// limpar a janela de input form 
function clearInput(){
    inputName.value = " ";
    inputName.focus();
}