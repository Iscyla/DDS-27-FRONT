function opcoes() {
  // This nesse contexto, é o que esta chamando a função
  console.log("As opções são:", this.tamanho.toString());
}

var produto1 = {
  nome: "Coca-Cola",
  categoria: "Bebidas",
  quantidade: 30,
  tamanho: ["200ml", "Lata", "600ml", "3L", "Ks"],
  //   Cria um método interno
  descricao: function () {
    // This - Referência o próprio
    console.log(`A ${this.nome} é da categoria ${this.categoria}`);
  },
  //   Usa uma função externa como seu método
  vertamanhos: opcoes,
};
produto1.descricao();
produto1.vertamanhos();

var produto2 = {
  nome: "Coxinha",
  categoria: "Salgados",
  quantidade: 1,
  tamanho: ["P", "M", "G"],
  descricao: function () {
    console.log(`A ${this.nome} é da categoria ${this.categoria}`);
  },
  vertamanhos: opcoes,
};
produto2.descricao();
produto2.vertamanhos();
// Outro negocio aqui
var aluno = {
  nome: "Arian Grande",
  anoEscolar: "7°",
  turma: "C",
  notas: [6, 7, 8],
  media: function () {
    let n1 = this.notas[0];
    let n2 = this.notas[1];
    let n3 = this.notas[2];

    return (n1 + n2 + n3) / 3;
  },
};

console.log(aluno.media());
