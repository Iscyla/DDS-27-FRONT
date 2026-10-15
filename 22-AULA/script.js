// Console - Terminal do navegador
// console.log(console);

// Window - Janela do navegador: Métodos de um objeto
// window.alert();
// window.prompt();
// console.log(window);

// Document -DOM, seu código HTML inteiro
console.log(document);
console.log(document.head);
console.log(document.body);

// SEÇÃO 1 -------------------------

// Seleciona elementos pela tag
var titulos = document.getElementsByTagName("h1");
console.log(titulos);

// Seleciona elemetos pela class
var paragrafos = document.getElementsByClassName("para");
console.log(paragrafos);

// Seleciona elemento por ID
var especifico = document.getElementById("p3");
console.log(especifico);

// Alteração de estilos

// Pego pelo ID
especifico.style.backgroundColor = "green";
especifico.style.color = "yellow";

// Pela class
paragrafos[0].style.backgroundColor = "pink";

// Pela tag
titulos[2].style.backgroundColor = "orange";

// SEÇÃO 2 -------------------------

// Função ativada, mas criada pelo JavaScript
function cliquei() {
  console.log("NÃO PODEEEEEEEEE");
}

// Função ativada, mas criada pelo JavaScript, via eventListener
let quantidade = 0;
document.getElementById("btnCliqueDuplo").addEventListener("dblclick", () => {
  quantidade++;
  console.log(`Cliques: ${quantidade}`);
});

// Botão clicável, que altera vários
document.getElementById("shazam").addEventListener("click", () => {
  for (var i = 0; i < titulos.length; i++) {
    titulos[i].style.backgroundColor = "red";
    titulos[i].style.Color = "yelloe";
    titulos[i].style.fontSize = "100px";
  }
});

// Uso o This
// Função ativdada e o parametro veio com o this
function quemFoi(elementoQuemChamou) {
  console.log(elementoQuemChamou);
}

// SEÇÃO 3

document.getElementById("criaTexto").addEventListener("click", () => {
  // Innertext
  document.getElementById("textoCriado").innerText = "Mudou rapaz"
});

// Altera o HTML
document.getElementById("criaHtml").addEventListener("click", () => {
    // InnerHTML - Altera o elemento
    document.getElementById("vazia").innerHTML += "<h2> NÃAAAAAAAAAAAAAAAAAO </h2>"
})


