// abrir box do login
function entrar_entrar(){
    var abrirEntrar = document.getElementById("div_entrar_container");

    abrirEntrar.style.display = `block`;
    

    var abrirCadastrar = document.getElementById("div_cadastrar_container");
    abrirCadastrar.style.display = `none`;
}
// sair da box do login e cadastro
function sair(){
    var abrirEntrar = document.getElementById("div_entrar_container");
    var sairSair = document.getElementById("div_sair");
    var abrirCadastrar = document.getElementById("div_cadastrar_container");

    abrirCadastrar.style.display = `none`;

    abrirEntrar.style.display = `none`;
}
// abrir box do cadastro

function entrar_cadastrar(){
    var abrirEntrar = document.getElementById("div_entrar_container");
    abrirEntrar.style.display = `none`;

    var abrirCadastrar = document.getElementById("div_cadastrar_container");
    abrirCadastrar.style.display = `block`;
}

function criar_conta(){
    
    var abrirEntrar = document.getElementById("div_entrar_container");

    abrirEntrar.style.display = `none`;

    var abrirCadastrar = document.getElementById("div_cadastrar_container");
    abrirCadastrar.style.display = `block`;
}


    
