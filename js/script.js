// Trabalhando com Jquery

$( document ).ready(function() {

    $("#barras").click(function(){

        if ($("#menu").hasClass("menu-ativo")) {
            $("#menu").removeClass("menu-ativo")
        } else {
            $("#menu").addClass("menu-ativo")
        }

    })

})




//JavaScript da Home

let Menu = document.getElementById("menu")

function mostrarMenu() {
    if(menu.style.display == "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
}

let produto = document.getElementById("produto");

function enviarProduto() {
    let produtoDigitado = produto.value;
    console.log(produtoDigitado)
}

