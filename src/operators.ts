/* OPERADORES */

/* DE ATRIBUIÇÃO */
// = é único de atribuição
let y = "";
y = "Edio";
console.log(y);

//------------------------------------------------------------

/* OPERADORES ARITIMÉTICOS */
let a = 2;
let b = 6;

// + soma
console.log(a + b);
// - subtração
console.log(a - b);
// / divisão
console.log(b / a);
// * multiplicação
console.log(b * a);
// ** exponenciação
console.log(a ** 6);
// % modulo (Resto da divisão)
console.log(a % 2);
console.log(a % 3);
console.log(b % 5);

//------------------------------------------------------------

/* OPERADORES DE COMPARAÇÃO */
// Sempre vai devolver um boolean (true or false)
let c = 2;
let d = 6;
// == igual a
console.log(`"c" é igual ao "d"? ${c == d}`);
// === igual igual (igual em valor e tipo)
console.log(`"c" é igual em valor e tipo que 2? ${c === 2}`);
// != igual igual (igual em valor e tipo)
console.log(`"c" e "d" são diferentes? ${c != d}`);
// > maior que
console.log(`"c" é maior que "d"? ${c > d}`);
// < menor que
console.log(`"c" é menor que "d"? ${c < d}`);

//------------------------------------------------------------

/* OPERADORES LÓGICOS */
// Para testar mais de uma condição, e assim como os de comparação retornam um boolean
let p = 500;
let m = 600;
// && (and)
if (p <= 700 && m >= 300) {
  console.log(
    '"p" é menor que 700 e "m" é maior que 300 | ' +
      'valor de "p": ' +
      p +
      ' |valor de "m": ' +
      m
  );
}

// || (ou)
if (p <= 1000 || p <= 300) {
  console.log(
    '"p" é mmenor que 1000 e não é menor que 300' + ' |valor de "p": ' + p
  );
} else {
  console.log("TESTEW");
}

// AND (e)     OR (ou)
// V + V = V   V + V = V
// V + F = F   V + F = V
// F + V = F   F + V = V
// F + F = F   F + F = F

// AND= só vai ser true se todas forem verdadeiras
// OR= só vai ser false se todas forem falsa
