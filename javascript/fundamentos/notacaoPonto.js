class Movel {
  constructor(nome, tamanho) {
    this.nome = nome;
    this.tamanho = tamanho;
  }
}

const cadeira = new Movel("Cadeira!!");
const banco = new Movel("Banco!!!");
const cadTamanho = new Movel("Sofá", 20);

console.log(cadeira.nome);
console.log(banco.nome);
console.log("O tamanho do", cadTamanho.nome, "é", cadTamanho.tamanho, "cm");
