/*

console.log("AOBA");

// laços de repetição

// FOR = PARA / DURANTE
// i = variável de controle
// i < 10 = duração do laço
// i++ = aumenta a intereção de 1 em 1 (i = i + 1)
for (var i = 0; i < 3; i++) {
  console.log("Papoi");
}

console.log("Ela não vem mais!");

// While = Enquanto
var contagem = 1

while(contagem < 51){
    console.log("Você disse, pi po ca?");
    contagem = contagem + 5
}

console.log("Final")

// ARRAY 
var lista = ["Arroix", 6, true, "outro", 7.7, ["Sim", ["Não"]]]

// Mostra o Array
console.log(lista);

// Mostra um elemento específico
console.log(lista[3]);

// length - retorna o número de itens no array
console.log(lista.length);

// Lista de Times
var times = ["São Paulo", "Gama", "Santos", "Real Madrid", "Desportiva"]

// Interage com valor fixo
for(var i = 0; i < 5; i++){
    console.log("O time atual é:",times[i]);
}

// Interage com valor retornado
for(var i = 0; i < times.length; i++){
    console.log("O time atual é:",times[i]);
}
*/

// Funções para interagir com um Array
var frutas = ["Melancia", "Morango", "Uva"];

// Array original
console.log(frutas);

// Para adição de elementos
// Push - Adiciona no fim do Array
frutas.push("Bananapapoi");
console.log(frutas);

// Unshift - Adiciona no inicio do Array
frutas.unshift("Manga");
console.log(frutas);

// Para remoção de elementos
// Pop - Remove o último elemento
var FrutaRetirada = frutas.pop();
console.log("A última fruta retirada era:", FrutaRetirada);

// Shift - Remove o primeiro elemento
var PrimeiraRetirada = frutas.shift();
console.log("A primeira fruta retirada era:", PrimeiraRetirada);

// Descobrir se há um valor específito nesse Array
console.log("Garcom! Tem pitu?", frutas.includes("pitu"));
console.log("Garcom! Tem maracujá?", frutas.includes("Maracujá"));

// Sort - Ordenar o Array
frutas.sort();
console.log(frutas);

// Reverse - Inverte o Array
frutas.reverse();
console.log(frutas);

// Convertendo o Array
console.log(frutas.toString());

// Junta o array e troca o separador deles
console.log(frutas.join(" - "));

// Slice - Cópia
// Em qual indice começa, quando elementos serão copiados
console.log(frutas.length);
var parteCopiada = frutas.slice(2, 4);
console.log("Cópia:", parteCopiada);

// Splice
// Para remover
var removidos = frutas.splice(1, 2);
console.log("Removidos:", removidos);

// Para adicionar
// Adiciona sem substituir ninguém
frutas.splice(2, 0, "Coca-cola", "Laranja", "Caju");
console.log(frutas);

// Adicionar com substituição
frutas.splice(1, 3, "Computador", "Mouse");
console.log(frutas);

// Atividade no finalzinho
var roupas = [];

for (var i = 0; i < 3; i++) {
  var roupa = roupas.push(prompt("Uma roupa legal"));
}

console.log(roupas);
