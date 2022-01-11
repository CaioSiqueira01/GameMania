// JavaScript de Login e de Cadastro e Carrinho

let email = document.getElementById("email");
let senha = document.getElementById("senha");
let cep = document.getElementById("cep");

function enviarDados() {
    let dado1 = email.value;
    let dado2 = senha.value;
    console.log(dado1);
    console.log(dado2);
}

function enviarCep() { 
    let cep = cep.value;
    console.log(cep);
}