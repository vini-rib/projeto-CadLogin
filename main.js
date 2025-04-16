// Implementa acesso para tela de login
function acessar(){
    let LoginEmail = document.
    getElementById('LoginEmail').value;
    let LoginSenha = document.
    getElementById('LoginSenha').value;

    //Implementa estrutura que testa se todos os campos foram preenchios
    if(!LoginEmail || !LoginSenha){
        alert('Favor preencher todos os campos');
    }else{
        window.location.href = "cadastro.html";
    }
}

// cria variavel do tipo array
var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById
    ('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log (dadosLista);
        document.getElementById('nomeUser').value = "";
    }else{
        alert('Favor informar um nome para cadastro');
    }
}

//Função para preencher a lista de cadastro
function criaLista(){
    let tabela = '<tr><th>Nome</th><th>Ações</th></tr>';
    for (let i = 0; 1 <= (dadosLista.length -1); i++){
        tabela += '<tr><th>' + dadosLista[i] + '</th><th>Ações</th></tr>';
        document.getElementById('tabela').innerHTML = tabela;
    }
}