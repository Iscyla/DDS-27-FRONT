/*
click — quando clica em um elemento.
dblclick — quando dá duplo clique.
input — quando o valor de um campo muda durante a digitação.
change — quando o valor de um campo é alterado e confirmado.
submit — quando envia um formulário.
mouseover — quando o mouse entra sobre um elemento.
mouseout — quando o mouse sai de um elemento.
mousemove — quando o mouse se movimenta sobre um elemento.
mousedown — quando pressiona um botão do mouse.
mouseup — quando solta um botão do mouse.
keydown — quando pressiona uma tecla.
keyup — quando solta uma tecla.
focus — quando um elemento recebe foco.
*/

// =====================================================

// Evento Change
// Input dispara quando o usuário altera o valor da caixinha

document.getElementById("campoChange").addEventListener("change", () => {
  // Pega o valor digitado pelo usuário
  const textoDigitado = document.getElementById("campoChange").value;

  // Pega o texto de baixo e troca pelo o valor, pelo que a pessoa digitou e guardei na veriável
  document.getElementById("resultadoChange").innerText =
    "Você digitou:" + textoDigitado;
});

// Evento Input
document.getElementById("campoInput").addEventListener("input", function () {
  // Pega o valor digitado pelo usuario
  const textoDigitado = this.value;

  // Pega o texto de baixo e troca pelo o valor, pelo que a pessoa digitou e guardei na veriável
  document.getElementById("resultadoInput").innerText = textoDigitado;
});

// =====================================================

// Guarda todo o HTML do formulário
const formulario = document.getElementById("formJogador");

// Guarda o HTML da lista de jogadores (que inicia vazia)
const lista = document.getElementById("listaJogadores");

// Função para ativar quando o usuário tentar enviar os dados
formulario.addEventListener("submit", function (evento) {
  // Parar de recarregar a pagina quando tentar enviar, além de outras
  evento.preventDefault();

  // Verifica o contéudo digitado nas caixinhas e guarda em variáveis
  const inputNome = document.getElementById("nome").value;
  const inputPosicao = document.getElementById("posicao").value;
  const inputCamisa = document.getElementById("camisa").value;
  const inputTime = document.getElementById("time").value;

  // Criar um objeto com as informações
  const jogador = {
    nome: inputNome,
    posicao: inputPosicao,
    camisa: Number(inputCamisa),
    time: inputTime,
  };

  console.log(jogador);

  // Chama a função para adicionar o Card
  adicionarJogador(jogador);

  // Resetar o formulário depois que enviar
  formulario.reset();
});

// Função para criar um Card
function adicionarJogador(jogadorAtual) {
  // Cria um elemento Card
  const card = document.createElement("div");

  // Cria elemento do Card
  const titulo = document.createElement("h4");
  const textoPosicao = document.createElement("p");
  const textoCamisa = document.createElement("p");
  const textoTime = document.createElement("p");

  // Preecher os elementos, com os valores do objeto
  titulo.textContent = jogadorAtual.nome;
  textoPosicao.textContent = "Posição:" + jogadorAtual.posicao;
  textoCamisa.textContent = "Camisa:" + jogadorAtual.camisa;
  textoTime.textContent = "Nome" + jogadorAtual.time;

  // Construo o Card
  card.appendChild(titulo);
  card.appendChild(textoPosicao);
  card.appendChild(textoCamisa);
  card.appendChild(textoTime);

  // Adiciona o card, como filho da lista de jogadores
  lista.appendChild(card);
}
