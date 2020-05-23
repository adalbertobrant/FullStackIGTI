/* a função map() faz o papel de mapear cada elemento para uma nova
 utilização do elemento e envio do resultado para um novo array.*/
'use strict';
const naturais = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
function primo(num){
    let aux = 0;
    if(num== 2 ) 
        return true;
    else if (num == 1)
        return false;
    else{
        for (let i = 2; i<=Math.floor(Math.sqrt(num)); i++){
            
            if (num % i == 0){
                aux = aux + 1;
            }
        }
        if (aux <1 )
            return true;
    }
}
const primos = naturais.map(numero =>{
    if (primo(numero)){
        console.log(`oi numero primo = ${numero}`)
        return numero;
    }
}
);;
console.log(`Os primos ${primos}`);
function aoQuadrado(num){
    return num ** 2;
}
const numQuadrados = naturais.map(num =>{
    return aoQuadrado(num);
})
console.log(`Numeros elevados ao quadrado = ${numQuadrados}`);

/* Faz a leitura no arquivo aula011JSON.js e retorna o nome e idade em um novo array */
console.log("Faz a leitura no arquivo aula011JSON.js e retorna o nome e idade em um novo array ");
const nomeIdadeDados = DADOS.map(nomesIdades=>{
    return {
        nome: nomesIdades.name,
        idade: nomesIdades.age
    };
});
console.log(nomeIdadeDados); // retorna o array com nome e idade

/* a função filter() percorre todo o array e cria um novo array com os resultados obtidos dessa busca,
ela tem o papel de um filtro */
console.log(`USANDO O FILTER() para filtrar elementos maior do que 10 no array ${primos}`);
const maiorQueDez = primos.filter(maiorDoQueDez =>{
    return maiorDoQueDez > 50;
});
console.log(maiorQueDez);

/* faz a filtragem de acordo com a idade e retorna um novo array com pessoas acima de 33 anos*/
console.log("faz a filtragem de acordo com a idade e retorna um novo array com pessoas acima de 33 anos");
const acima33 = nomeIdadeDados.filter(maior33 =>{
    return maior33.idade > 33;
});
console.log(acima33);

/* Uso do forEACH  somar as idades das pessoas maiores de 33
O forEach altera  o array portanto é um método mutável no caso abaixo utilizamos o método forEach 
para fazer a soma de idades mas sem interferir na estrututa do array */
var soma = 0;
const somaIdades = nomeIdadeDados.filter(x=>{
    return x.idade > 33;    
}).forEach(totalAnos=>{
    soma = soma + totalAnos.idade;
});
console.log(`soma de todas as idade de pessoas maiores de 33 anos é = ${soma}`);
/* Uso do forEach alterando a estrutura do array 
Somando as letras do nome completo da pessoa e colocando o valor no array */
console.log("Altera o array e acrescenta o tamanho do nome completo da pessoa");
nomeIdadeDados.forEach(tam=>{
    tam.tamanhoNome = tam.nome.first.length + tam.nome.last.length;
});
console.log(nomeIdadeDados);
/* como podemos notar o forEach trabalha direto sobre o dado em questão no caso o array nomeIdadeDados
e portanto não faz cópia de dados para outro array */

/* O reduce () utiliza dois parametros um acumulador e o valor corrente de leitura que é feita da esquerda
para a direita, na sua construção deve-se passar o valor inicial do acumulador */

console.log("Contado a soma total das idades com reduce() ");

const somaTotalIdades = nomeIdadeDados.reduce((acumula, valor)=>{
    return acumula +valor.idade;
},0);
console.log(`A soma total das idades do array `);
console.log(nomeIdadeDados);
console.log (`É  de ${somaTotalIdades}`);
/* Podemos notar que a construção do reduce () é muito boa para contas matématicas dentro de funções */

/* Usando o find para achar favoriteFruit: "banana" a fruta favorita na base de dados */

console.log("Usando o find () para achar a primeira ocorrência de fruta favorita");
const frutaFavoritaBanana = DADOS.find(fruta=>{
    return fruta.favoriteFruit ==="banana";
});
console.log(`O usuário ${frutaFavoritaBanana.name.first} gosta de ${frutaFavoritaBanana.favoriteFruit}`);

/* Função some para ver se alguém gosta de apple, essa função retorna true ou false*/

console.log("TRABALHANDO COM A FUNÇÃO SOME()");
const gostaApple = DADOS.some(maça=>{
    return maça.favoriteFruit ==="apple";
});
console.log(`Alguém do grupo gosta de maçã ? -> ${gostaApple}`);

/* Função sort() faz a ordenação de elementos do array de forma especificada */
console.log("ORDENAÇÃO COM O SORT do array DADOS por ordem alfabética");
// Vamos pegar apenas o primeiro nome do array DADOS usando o map
const primeiroNome = DADOS.map(nomes=>{
    return {
        nome: nomes.name.first
    };
}).sort((a,b)=>{
    return a.nome.localeCompare(b.nome); // essa função compara os dois valores e retorna 1 se a maior -1 se menor e 0 se iguais.
});
console.log(primeiroNome);

 // Outra comparação com o sort em strings com números

const array = ["100","9009","23","10","0","-2","3","1"].sort((a,b)=>{
    return a - b; // retorna a comparção se a > b retorna 1 se a < b -1 , se iguais zero
});