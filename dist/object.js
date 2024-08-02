"use strict";
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
let getNome = function () {
    console.log(`${this.nome}, ${this.sobrenome}, ${this.idade} anos`);
};
let nomes3 = {
    nome: "Edio",
    sobrenome: "Gonçalves",
    idade: 28,
    getNome: getNome,
};
let nomes4 = {
    nome: "Matheus",
    sobrenome: "da Fontoura",
    idade: 17,
    getNome: getNome,
};
nomes3.getNome();
nomes4.getNome();
let cadPessoa = {};
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
let propri = Object.keys(cadPessoa); // Para informar o type"as (keyof Pessoas)[], se nao da erro de typo
console.log(propri); // Exibir todas as propriedades
// Iterar sobre as propriedades para exibir nome e valor
for (let i = 0; i < propri.length; i++) {
    console.log(propri[i]); // Nome da propriedade
    console.log(cadPessoa[propri[i]]); // Valor da propriedade
}
