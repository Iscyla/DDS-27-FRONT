console.log("Oi");

// Funções
// Só executa
function teste() {
  console.log("Funciona!");
}

// Executando a função
teste();

// Com retorno
function soma() {
  return 3 + 4;
}
console.log(soma());

// Mostra apenas o texto da função, não executa
console.log(soma);

// Com parâmetros
function teste2(parametro) {
  console.log("O parêmetro enviado foi", parametro);
}

// Executando
teste2("Veneno");

var nome = "Julieta";
teste2(nome);

// Faz ações e retorna resultados
function media(n1, n2) {
  let resultado = (n1 + n2) / 2;
  return resultado;
}

// Guarda resultado em variável, pra depois utilizar
var final = media(9, 7);
console.log("Resultado da média:", final);

// Função anônima
var mensagem = function () {
  console.log("Pipoca");
};

// Mostra o texto da função
console.log(mensagem);

// Apenas guarda o texto função
mensagem;

// Axecuta a função, coloco os ()
mensagem();

// Arrow function - Função de seta
// Forma mais comum de escrever funções no JavaScript
const multiplicar = (x, y) => {
  let result,
    primeiro = x,
    segundo = y;
  result = primeiro * segundo;
  return result;
};

console.log("O resultado da mulplicacione é:", multiplicar(7, 4));

// Menor ainda
const dobro = (numero) => numero * 2;

console.log("O dobro é:", dobro(42));

// Faça o pedido de um ao usuário e utilize o valor informado para passar a uma função de seta e retonar a divisão por dois daquele valor. Mostre no console o resultado.
const atividade = (numeroAtiv) => numeroAtiv / 2
var numeroAtividade = Number(prompt("Informe um número: "));
console.log(atividade(numeroAtividade));


