// https://www.youtube.com/watch?v=xPtypgipUls&list=PLTULYczsbNmoLrNyVESgaqJTxMUEPl9Gv&index=5

//OBJETO LITERAL
let nomes = {
  nome: "Edio",
  sobrenome: "Gonçalves",
  idade: 28,
};
console.log(nomes);

//OBJETO COM METODO
let nomes2 = {
  nome: "Edio",
  sobrenome: "Gonçalves Junior",
  idade: 37,
  getNome: function () {
    return `${this.nome} ${this.sobrenome}, ${this.idade} anos`;
  },
};
console.log(nomes2);
console.log(nomes2.getNome());
//Quando atribui uma função anonima à uma propriedade de um objeto temos um metodo.

//CRIAR METODO PARA SER REAPROVEITADO
type Pessoa = {
  nome: string;
  sobrenome: string;
  idade: number;
  getNome: () => void;
};

let getNome = function (this: Pessoa) {
  console.log(`${this.nome}, ${this.sobrenome}, ${this.idade} anos`);
};

let nomes3: Pessoa = {
  nome: "Edio",
  sobrenome: "Gonçalves",
  idade: 28,
  getNome: getNome,
};

let nomes4: Pessoa = {
  nome: "Matheus",
  sobrenome: "da Fontoura",
  idade: 17,
  getNome: getNome,
};

nomes3.getNome();
nomes4.getNome();

//MANIPULANDO O THIS

/* 
getNome.call(pessoa, "TIO", "DO MATHEUS")
getNome.apply(pessoa, ["SOBRINHO", "DO EDIO"])

var pegarNome = getNome.bind(pessoa, "SOBRINHO", "DO EDIO")
pegarNome()
*/

// A NATUREZA DOS OBJETOS EM JS É DINAMICA
interface Pessoas {
  nome?: string;
  idade?: string | number;
  sexo?: string;
  casado?: boolean;
}

let cadPessoa: Pessoas = {};
cadPessoa.nome = "Edio";
cadPessoa.idade = "37";
cadPessoa.sexo = "Masculino";
cadPessoa.casado = false;

delete cadPessoa.idade;

// hasOwnProperty p/ deletar de forma acertiva, sem ter o problema de deletar algo do prototype
if (cadPessoa.hasOwnProperty("sexo")) {
  delete cadPessoa.sexo;
}
console.log(cadPessoa);

// Obter as chaves do objeto
let propri = Object.keys(cadPessoa) as (keyof Pessoas)[]; // Para informar o type"as (keyof Pessoas)[], se nao da erro de typo
console.log(propri); // Exibir todas as propriedades
// Iterar sobre as propriedades para exibir nome e valor
for (let i: number = 0; i < propri.length; i++) {
  console.log(propri[i]); // Nome da propriedade
  console.log(cadPessoa[propri[i]]); // Valor da propriedade
}
