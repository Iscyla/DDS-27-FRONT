console.log("CATCHAAAAAU");

var musicas = ["Butterfly", "Please", "Aurora"];
var cantores = ["BTS", "BTS", "Jão"];

for (var i = 0; i < musicas.length; i++) {
  console.log(musicas[i], "-", cantores[i]);
}

// Objeto
var filme1 = {
  // "chave":"valor"
  titulo: "Devoradores de Estrelas",
  genero: "Ficção Científica, Aventura e Drama",
  anoLan: 2026,
};

console.log(filme1);

// Acessando uma chave específica
console.log(filme1.titulo);

console.log(`O filme: ${filme1.titulo} foi lançado em ${filme1.anoLan}`);

console.log(`Gênero: ${filme1["genero"]}`);

// Objeto vazio
var garrafa = {};
console.log(garrafa);

// Criar as propriedades
garrafa.cor = "bege";
garrafa.preco = 99;
garrafa.tamanho = "710ml";
garrafa["tampada"] = false;
console.log(garrafa);

// Altera uma propriedade existente
garrafa.cor = "Vermelho";
console.log(garrafa);

// Peça ao usuario uma nova propriedade e também um valor para essa propriedade, ao fim adiciona no objeto garrafa
// var novaPropriedade = prompt("Nova propriedade: ");
// garrafa[novaPropriedade] = prompt("Valor:");
// console.log(garrafa[novaPropriedade]);

// Ainda sobre objetos
var leao = {
    nome: "Simba",
    temPelo: true,
    especie: "Doméstico",
    peso: 60,
    // Métodos
    andar: function (){
        console.log("Andando");
    },
    falar: () =>{
        console.log("AINNNNN");
    }
}

console.log(leao);
// Mostra o texto do método
console.log(leao.andar);
// Executar o método do leão
leao.falar()
