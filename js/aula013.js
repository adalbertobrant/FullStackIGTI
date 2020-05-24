window.addEventListener('load',()=>{
    console.log("Código js carregado e pronto para execução - :) ");
    let dadosUsuarios = [];
// Comando fetch()

console.log("Realizando o fetch");
// O uso do then com um callback garante que a promise será resolvida e passará o valor para o randomUser
// a promise envia um recurso binário para o then que pode ser capturado como indica o res

const randomUser = fetch("https://randomuser.me/api/?nat=BR&results=50").then(res=>{
    console.log("Promise resolved");
    // será mostrado o conteúdo de res que é do tipo binário
    console.log(res);
    /* Devemos então transformar para um conteúdo conhecido tal como o JSON , deve ser obdecido
    a documentação da API para que não ocorra erros, esse processo com JSON, também é demorad
    portanto devemos novamente usar o then e passar uma call para a ação desejada */
    res.json().then(data=>{
        // Devido as duas requisições then a manipulação do resultado tem que ser feito dentro da const randomUser.
        // envio da data para uma variável através do push
        console.log(data);
        // manipulando dados filtrados usando destructuring no objeto data
        filtraQtdSexo(data.results) // mostra a quantidade homens e mulheres po sexo binário

    });
     
});
}
);
function filtraQtdSexo(objeto){
    let qtd = 0;
    let qtdM = 0;
    objeto.filter((sexo)=>{        
        if(sexo.gender ==="male"){
            qtd++; 
        }
        else if(sexo.gender ==="female"){
            qtdM++;
        }
    }
    );
    return console.log(`Quantidade de Homens = ${qtd}; Quantidade de Mulheres ${qtdM}`);
}

