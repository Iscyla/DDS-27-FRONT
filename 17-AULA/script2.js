// Desvios condicionais

// IF = SE
var estaVivo = true;

// Primeira comparação
if (estaVivo) {
  console.log("Parabéns, muito divertido!");
}

// Segunda comparação, só vem pra cá se a primeira for falso
else if (estaVivo == undefined) {
  console.log("Mano, sei não em");
}

// Último caso, só entra aqui após todas derem falso
else {
  console.log("Bolsonaro morreu de soluço");
}

// Switch / Case
var camisa = "Marrom";

switch (camisa) {
  case "Preto":
    console.log("Parabéns! Você ganhou uma aula de interpretação de texto.");
    break;
  case "Branco":
    console.log("Parabéns! Você ganhou uma aula de história");
    break;
  case "Vermelha":
    console.log("Você ganhou direito a democracia!");
    break;
  default:
    console.log("Você é burro");
    break;
}

// Prompt - Interage com o usuário e coleta um valor
// var preferido = prompt("Qual é o seu pet favorito do mundo dos filmes: ")

// console.log("Seu pet preferido é:", preferido)

var caixa1 = Number(prompt("Tamanho da caixa 1:"));
var caixa2 = Number(prompt("Tamanho da caixa 2:"));
var caixa3 = Number(prompt("Tamanho da caixa 3:"));

// 1 Viagem
// && = e, || = ou
if ((caixa1 < caixa2 && caixa2 < caixa3) || caixa1 + caixa2 < caixa3) {
  console.log("1 viagem necessária!");
} else if (
  (caixa1 < caixa2 && caixa2 == caixa3) ||
  (caixa1 == caixa2 && caixa2 < caixa3)
) {
  console.log("2 viagens necessárias!");
} else {
  console.log("3 viagens necessárias!");
}
