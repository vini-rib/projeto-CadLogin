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
    }
}