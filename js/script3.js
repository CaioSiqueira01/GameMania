// JavaScript da página de categorias

let listaProdutos = [
    {
        titulo: "PC GAMER T-GAMER HAWK INTEL I5 10400F / NVIDIA GEFORCE GTX 1050 TI / 8GB DDR4 / SSD 240GB"
    },
    {
        titulo: "PC GAMER T-GAMER, FRAMEMASTER, AMD RYZEN 5 5600X / GEFORCE RTX 2060 6GB / DDR4 8GB / SSD 120GB"
    },
    {
        titulo: "PC GAMER T-GAMER WARLORD AMD RYZEN 7 3700X / GEFORCE GTX 1660 / DDR4 8GB / SSD 120GB"
    },
    {
        titulo: "PC GAMER SUPER T-SOLDIER LVL-1 INTEL CORE I5 10ª / NVIDIA GEFORCE / DDR4 8GB / HD 1TB"
    }
]

function renderizarProdutos() {
    let espaco = document.getElementById("espaco-produtos")

    let listaProdutos = [
        {
            titulo: "PC GAMER T-GAMER HAWK INTEL I5 10400F / NVIDIA GEFORCE GTX 1050 TI / 8GB DDR4 / SSD 240GB"
        },
        {
            titulo: "PC GAMER T-GAMER, FRAMEMASTER, AMD RYZEN 5 5600X / GEFORCE RTX 2060 6GB / DDR4 8GB / SSD 120GB"
        },
        {
            titulo: "PC GAMER T-GAMER WARLORD AMD RYZEN 7 3700X / GEFORCE GTX 1660 / DDR4 8GB / SSD 120GB"
        },
        {
            titulo: "PC GAMER SUPER T-SOLDIER LVL-1 INTEL CORE I5 10ª / NVIDIA GEFORCE / DDR4 8GB / HD 1TB"
        }
    ]

    let template = "";

    for (let index = 0; index < listaProdutos.length; index++) {
        const produto = listaProdutos[index];

        template += `<div class="produto">
        <a href="#"><img src="img/imagemproduto.png" alt="Imagem do produto"></a>
        <h4>${produto.titulo}</h4>
        <button>Comprar</button>
        </div>
        <br><br>`
        
    }

    espaco.innerHTML = template;   
}

