window.addEventListener('load',start);
var red = null, green = null, blue = null;
var vermelho = null, verde = null, azul = null;
var div;

function start(){
    console.log("Página Carregada com sucesso");
    console.log('Trabalho do módulo 01');
    red = document.querySelector('#vermelho');
    vermelho = document.querySelector('#valorRed');
    green = document.querySelector('#verde');
    verde = document.querySelector('#valorGreen');
    blue = document.querySelector('#azul');   
    azul = document.querySelector('#valorBlue');
    div = document.querySelector('.flex-container >div');
    console.log(div);
    console.log(red);
    console.log(green);
    console.log(blue);
    red.addEventListener('input',modificaCorVermelha);
    green.addEventListener('input',modificaCorVerde);
    blue.addEventListener('input',modificaCorAzul);
   

}

function modificaCorVermelha(event){
    var aux = event.target.value;    
    vermelho.value = aux;
    modificaBox();
}
function modificaCorVerde(event){
    var aux = event.target.value;    
    verde.value = aux;
    modificaBox();
}

function modificaCorAzul(event){
    var aux = event.target.value;    
    azul.value = aux;
    modificaBox();
}
function modificaBox(){
    div.style.backgroundColor='rgb(' + vermelho.value + ',' + verde.value + ',' + azul.value + ')';

}
