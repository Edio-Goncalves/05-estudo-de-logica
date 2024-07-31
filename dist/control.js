"use strict";
/* ESTRUTURA DE CONTROLE*/
// Sempre que uma condição for verdadeira ele retorna e encerra o if até ser requisitado novamente
const value = 0;
if (value > 0) {
    console.log(`${value} é maior que 0. Condição é verdadeira`);
}
else if (value == 0) {
    console.log(`${value} é igual a 0. Condição é verdadeira`);
}
else {
    console.log(`${value} não é maior que 0. Condição é falsa`);
}
// Exemplo operador ternário
console.log(value >= 0 ? "É verdadeiro" : "É falsa");
/* COMANDO DE DECISÃO */
switch (value) {
    case 1:
        console.log("Value vale 1");
        break;
    case 2:
        console.log("Value vale 2");
        break;
    case 3:
        console.log("Value vale 3");
        break;
    case 4:
        console.log("Value vale 4");
        break;
    default:
        console.log("Value vale é maior que 4 ou menor que 1");
        break;
}
