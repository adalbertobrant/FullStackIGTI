// Boa prática do Javascript para garantir a manutenção correta do código é colocar o seguinte comando

window.addEventListener('load',start); // essa construção permite carregar e se certificar da execução correta do código


function start () {
    console.log("Página carregada 100%");   
    let nameInput = document.querySelector('#nameInput');
    nameInput.addEventListener('keyup',countName);   
    var formulario = document.querySelector('form');    
    formulario.addEventListener("submit",preventSubmit);
    nameId = document.querySelector('#nomeId');
    var formulario2= document.querySelector('#formulario');
    formulario2.addEventListener("submit", handleFormSubmit);
    
    formAtivo();
}
var contador = 0;
function countName(event) { // conta os espaços em branco no meio também
    console.log(event);
    let count = event.target.value;
    console.log(count);    
    if (event.code == "Space"){
        contador = contador + 1;
        console.log("contador = "+contador);
    }
   total = count.length;
    let span = document.querySelector('#nameLength');
    span.textContent = "Total de caracteres sem espaço =  "+(total - contador) ;
    let span2=document.querySelector('#outraLinha');
    span2.textContent = "Total de caracteres com espaço = "+total;
}
function preventSubmit(event){
    console.log(event);
    event.preventDefault();// nao envia para o servidor os dados
    let enviado = document.querySelector('#nameInput');
    alert("Enviado com sucesso "+enviado.value);
}


