// certifica que o script esta carregado
//window.addEventListener('load',start);
// acha mais erros no javascript
'use strict';

/*
    console.log("PÁGINA CARRREGADA");
    withVar();
    i = 30;
    console.log(i);
   

function withVar(){
    for (let i=0; i<10;i++){
        console.log(i);
    }
}*/
// Arrow Functions 
// Serve para simplificar as funções e sua sintaxe

function print(string){
    console.log(string);
}
var string = "oi";
print(string);

// arrow function para a função print
var coisa = "Hello World";
let imprimir = (coisa)=>console.log(coisa);
imprimir("papagaio");

//Exemplo de Default Parameters

function multi(a=1,b=1){
    let multiplicacao = ()=>{
        console.log(`Valor de ${a} * ${b} = ${a*b}`);
        return a*b;}
        console.log("Fazendo a Multiplicação");
    return multiplicacao(a,b);
}

function multiplica(a=1,b=1,c="Fazendo a Multiplicação"){
    let multiplicacao = ()=>{
        console.log(`Valor de ${a} * ${b} = ${a*b}`);
        return (((a*b) + " "+ c)) ;}
        return multiplicacao(a,b);
}



