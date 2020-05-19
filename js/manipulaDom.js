//Função para manipular o primeiro elemento, classe, id de um documento html
function manipula(tag){
    let aux = document.querySelector(tag);
    aux = Array.from(aux);
    return aux;
}
//Função que armazena todos os elementos com o elemento, classe e id no documento html naquela página
function manipulaTodas(tag){
    let aux = document.querySelectorAll(tag);
    aux = Array.from(aux);
    return aux;
}

