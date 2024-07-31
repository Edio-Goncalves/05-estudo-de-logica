"use strict";
/* WHILE */
// Enquanto for verdade execute uma instrução
let valueWhile = 50;
while (valueWhile < 100) {
    console.log(valueWhile);
    valueWhile++;
}
/* DO WHILE */
// Faça enquanto uma condição for verdadeira, ou ao menos uma vez
let valueWhile2 = 50;
do {
    console.log(valueWhile2);
    valueWhile2++;
} while (valueWhile2 < 40);
console.log(valueWhile2);
/* CONTADORES */
// É util para quando você sabe onde começa e termina o contador
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
for (let ano = new Date().getFullYear(); ano >= 1970; ano -= 5) {
    console.log(ano);
}
