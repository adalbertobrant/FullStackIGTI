span = document.querySelector('#typedtext');
spanRest = document.querySelector('#texto');
spanDestruct = document.querySelector('#estrutura');
var geral = spanDestruct;
var rest = `Fazendo uma soma infinita com rest:\nlet numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13];\n \nconst superSoma = (...numeros) => numeros.reduce((acc,val) => \nacc + val , 0);\nconsole.log("Super soma é "+superSoma(1,2,3,4,5,...[23,45,67,1,2,3,4,5,6,7,8,9,10,11]));`;
const superSoma = (...numbers) => numbers.reduce((acc,curr)=>acc + curr, 0);
let res = superSoma(1,2,3,4,5,...[23,45,67,1,2,3,4,5,6,7,8,9,10,11]);
var restResultado ='<p id="textoRest">\=> '+res+' </p>';
var conta = 0;
var speedo = 150;
let spread = 'Dado o seguinte array :let array = [1,2,3,4,5,6,7,8,9,10];let array1 = [11,12,13];let somaArrays = [...array, ...array1]; let res =somaArrays ;';
let spreadResultado ='<p id="resultado">res => [1,2,3,4,5,6,7,8,9,10,11,12,13] </p>';
var nomeD = 'var objeto = {p: 42, q: true};\nvar {p, q} = objeto;\nconsole.log(p); =>42\nconsole.log(q); => true\n ';
var finalAula = '<p id="textoRest">=> Final da Aula </p>';
let speed = 150;
var cont = 0;


window.addEventListener('load', () => {
  console.log('Página Carregada');   
  function typeWriter() {
    if (cont < spread.length) {
      span.innerHTML += spread.charAt(cont);
      cont++;
      if (spread.charAt(cont) == 'l') {
        span.innerHTML += '<p> </p>';
      }
      setTimeout(typeWriter, speed);
    } else {
      span.innerHTML += spreadResultado;
      cont = 0;
    }
  }
typeWriter(); 
teclado();
digtAi( nomeD,finalAula,geral);
});

// mesma função usando variáveis globais

function teclado(){
    if (conta < rest.length) {
        spanRest.innerHTML += rest.charAt(conta);
        conta++;
        if (rest.charAt(conta) == '\n') {
          spanRest.innerHTML += '<p> </p>';
        }
        setTimeout(teclado, speedo);
      } else {
        spanRest.innerHTML += restResultado;
        conta = 0;
      }
  }  
  console.log(`Super Soma é ${res}`);
  
// mesma função usando parametros
function digtAi(x, outraString,spanDom, velocidadeDigitacao = 1, contador =0) {
    if (contador < x.length) {      
        spanDom.innerHTML += x.charAt(contador);
        contador++;
        if (x.charAt(contador) == '\n') {
            spanDom.innerHTML += '<p> </p>';
        }
        setTimeout(digtAi, velocidadeDigitacao);
      } else {
        spanDom.innerHTML += outraString;
      console.log(outraString);       
      }
}

