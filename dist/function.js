"use strict";
/* FUNCTION */
// Com execução independente da ordem
function exibe() {
    console.log("Dessa forma é uma DECLARAÇÃO");
}
exibe(); // O arquivo vai dar prioridade a execução da function neste formato, mudando a posição da execução de forma implicita
// Com ordem na execução, se a execução estiver acima da function causa erro
let mostrarNome = function time(nomeTime) {
    if (nomeTime) {
        console.log(`${nomeTime}`);
    }
    else {
        console.log(`Desta forma é EXPRESSÃO`);
    }
};
mostrarNome("Internacional"); // Nesse caso o arquivo vai priorisar a ordem de execução, dando mais controle na ordem do arquivo
// Transformar function em valor
let comoValor = function (parametro) {
    return parametro + " a Function virou valor";
};
const transformandoEmValor = comoValor("Agora"); // Transforma o retur da function em valor de uma variavel
console.log(transformandoEmValor);
