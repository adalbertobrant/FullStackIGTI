console.log("Olá, Mundo!")
// Tipos, valores, variáveis, operadores, condicionais e comentários
/* isso é um 
comentário de várias 
linhas, no caso 3*/
// isso é um comentário de uma linha
/*88888888888888888888888888888888888888888888888888888888888*/
// Variáveis
var nome = "variavel"
console.log(nome+" nome é uma variável do tipo "+typeof(nome));
var nome = 23
console.log("nome recebe o valor de  "+nome+" ,e é do tipo "+typeof(nome));
var nome = true;
console.log("nome recebe o valor de  "+nome+" ,e é do tipo "+typeof(nome));
var nome = false;
console.log("nome recebe o valor de  "+nome+" ,e é do tipo "+typeof(nome));
var nome = [1,2,3,"casa",{id:2,key:3,chave:456}];
console.log("nome recebe o valor de  "+nome+" ,e é do tipo "+typeof(nome));
console.log("\n\n");
//OPERADORES ARITMÉTICOS
var x = 2 , y = 5, nome = "001";
var soma = x +y + nome;
console.log("O operador soma + pode também ser usado para concatenar uma string, veja a seguinte operação: ");
console.log("soma = "+soma);
var subtracao = x -y;
console.log("subtração = "+subtracao);
var divisao = y /x;
console.log("divisão = "+divisao);
var multiplicacao = x * y;
console.log("multiplicação = "+multiplicacao);
var exponeciacao = x ** y;
console.log("exponenciação = "+ exponeciacao);
var resto = y % x;
console.log("resto = "+resto);
var incremento = ++x;
console.log("incremento de ++x = "+incremento);
var decremento = --y;
console.log("decremento de --y = "+decremento);
console.log("\n\n");
//ESTRUTURAS DE DECISÃO
/* Exemplo de estrutura de decisão com 
if/else, switch, ? */
var nome = "Adalberto";
var idade = 45;
if(idade >= 18){
    console.log(nome +" tá ficando véio né, sua idade é "+idade);
}else{
    console.log(nome + "tá novinho de novo como???");
}
console.log ("Dia da semana");
var diaMes= new Date(); // pega a data completa local com tudo dia mês ano, horas, minutos, segundos
diaMes = diaMes.getDay(); // pega o dia da semana
switch(diaMes){
    case 0: console.log("Domingão"); break;
    case 1: console.log("Segundona"); break;
    case 2: console.log("Terçona");break;
    case 3: console.log("Quarta-feira"); break;
    case 4: console.log("Quintinha"); break;
    case 5: console.log("Sextouuuuu");break;
    case 6: console.log("Sábado animado");break;
    default: console.log("Dia da semana não existe na terra, verifique o seu planeta");break;
}
// IMC resumido em tá gordo ou tá normal

var altura = 1.71, peso = 77, imc=0;
imc = 77/(1.71 * 1.71)
console.log("Seu IMC = "+ imc);
imc >=25 ? console.log(nome + " oi, acorda, esta precisando emagrecer viu!!! ") : 
console.log(nome + " Parabéns, showw, esta dentro do peso");
imc = imc - 2;
imc >=25 ? console.log(nome + " oi, acorda, esta precisando emagrecer viu!!! ") : 
console.log(nome + " Parabéns, showw, esta dentro do peso");

// Estruturas de repetição
console.log("ESTRUTURAS DE REPETIÇÃO")
/* Mudando dados em um array */

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], count = 0;
console.log("Lista inicial = "+array);
while(count < array.length){
    array[count] = array[count] * 2;
    count ++;
}
console.log("lista final = "+ array);


