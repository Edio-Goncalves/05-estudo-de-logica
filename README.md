# 05-estudo-de-logica-e-POO

Este repositório contém todos os recursos, exemplos e notas que compilei enquanto aprendia POO. Meu objetivo é fornecer uma referência útil e prática a partir do que aprendi e documentar meu próprio progresso.

### ÍNDICE

- [OPERADORES] (#operadores)
- [ESTRUTURA DE CONTROLE] (#estrutura-de-controle)
- [LOOPS] (#looops)
- [TIPOS DE DADOS] (#tipos-de-dados)
- [OBJECT] (#object)
- [FUNCTION] (#function)

#

### OPERADORES

- De atribuição

  " = " é o único de atribuição

```
let y = "";
y = "Edio";
console.log(y);
```

#

- Operadores aritiméticos

```
let a = 2;
let b = 6;

// "+" soma
console.log(a + b);

// "-" subtração
console.log(a - b);

// "/" divisão
console.log(b / a);

// "*" multiplicação
console.log(b * a);

// "**" exponenciação
console.log(a ** 6);

// "%" modulo (Resto da divisão)
console.log(a % 2);
console.log(a % 3);
console.log(b % 5);
```

#

- Operadores de comparação

  Sempre vai devolver um boolean (true or false)

```
let c = 2;
let d = 6;

// "==" igual a
console.log(`"c" é igual ao "d"? ${c == d}`);

// "===" igual igual (igual em valor e tipo)
console.log(`"c" é igual em valor e tipo que 2? ${c === 2}`);

// "!=" igual igual (igual em valor e tipo)
console.log(`"c" e "d" são diferentes? ${c != d}`);

// ">" maior que
console.log(`"c" é maior que "d"? ${c > d}`);

// "<" menor que
console.log(`"c" é menor que "d"? ${c < d}`);
```

#

- Operadores lógicos

  Para testar mais de uma condição, e assim como os de comparação retornam um boolean

```
let p = 500;
let m = 600;

// "&&" (and)
if (p <= 700 && m >= 300) {
  console.log(
    '"p" é menor que 700 e "m" é maior que 300 | ' +
      'valor de "p": ' +
      p +
      ' |valor de "m": ' +
      m
  );
}

// "||" (ou)
if (p <= 1000 || p <= 300) {
  console.log(
    '"p" é mmenor que 1000 e não é menor que 300' + ' |valor de "p": ' + p
  );
} else {
  console.log("TESTEW");
}

// AND (e) OR (ou)
// V + V = V V + V = V
// V + F = F V + F = V
// F + V = F F + V = V
// F + F = F F + F = F

// AND= só vai ser true se todas forem verdadeiras
// OR= só vai ser false se todas forem falsa
```

#

### ESTRUTURA DE CONTROLE

Sempre que uma condição for verdadeira ele retorna e encerra o if até ser requisitado novamente

```
const value: number = 0;
if (value > 0) {
  console.log(`${value} é maior que 0. Condição é verdadeira`);
} else if (value == 0) {
  console.log(`${value} é igual a 0. Condição é verdadeira`);
} else {
  console.log(`${value} não é maior que 0. Condição é falsa`);
}
```

#

- Operador ternário

```
console.log(value >= 0 ? "É verdadeiro" : "É falsa");
```

#

- Comando de decisão (switch)

```
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
```

#

### LOOPS

- while

  Enquanto for verdade execute uma instrução

```
let valueWhile: number = 50;

while (valueWhile < 100) {
  console.log(valueWhile);
  valueWhile++;
}
```

#

- do while

  Faça enquanto uma condição for verdadeira, ou ao menos uma vez

```
let valueWhile2: number = 50;
do {
  console.log(valueWhile2);
  valueWhile2++;
} while (valueWhile2 < 40);
console.log(valueWhile2);
```

#

- contador for()

  É util para quando você sabe onde começa e termina o contador

```
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let ano = new Date().getFullYear(); ano >= 1970; ano -= 5) {
  console.log(ano);
}
```

#

### TIPOS DE DADOS

- string - dados de texto

```
let nameUser: string = "Edio";
let lastNameUser: string = "Gonçalves";
let fullNameUser = `${nameUser} ${lastNameUser}`;
//console.log(fullNameUser);
```

#

- number - inteiros, decimais, hexadecimais, binários

```
let age: number = 38;
```

#

- boolean - true, false (false sempre vai ser vazio ou 0)

```
let statusUser: boolean = true;
```

#

- array - variáveis indexadas. Vetores, matrizes

```
let fruits: Array<string> = ["Maçã", "Laranja", "Banana"];
let fruits2: Array<string | number> = ["Maçã", "Laranja", 50];
let fruits3: string[] = ["Maçã", "Laranja", "Banana"];
```

#

- object - objeto, propriedades e funcionalidades

```
  type companyType = {
  name: string;
  adress: string;
  city: string;
  state?: string;
  };

let company = {
name: "Hcode Cursos",
adress: "Av XX de Piracicaba, 2043",
city: "São Paulo",
state: "SP",
};
```

#

- date - "yyyy-mm-dd hh:mm:ss", timestamp - quantidade de segundos a partir de 1970

```
let bornDate = new Date("1986 10 20");
//tuple - array com tipod de dados definidos
let adress: [string, number] = ["Av XX de Piracicaba", 2043];
//enum - lista de valores possíveis
enum statusEnum {
blocked = 0,
released = 1,
pending = 2,
}

let options: statusEnum = 0;
let options2: statusEnum = statusEnum.pending;
```

#

- any - qualquer tipo de dado. NÃO RECOMENDADO

```
let letTeste = "false"; // vai aceitar qualquer valor e tentar usar da forma correta
```

#

Ex01

```
let montadoras = [
["BMW", "320 i", "M3", "M4", "M5"],
["Audi", "A1", "A3", "A4", "A5"],
["Mercedez", "GLE", "GLA", "GLC", "GLK"],
];

montadoras.forEach((c, index) => {
console.log(montadoras[index][0]);
let carros: string = "";
c.forEach((modelo, index) => {
if (index > 0) {
carros += modelo + "; ";
}
});
console.log(carros.split("; ").slice(0, -1).join(" - "));
console.log("-----------------------------------------------");
});

```

#

### OBJECT

// https://www.youtube.com/watch?v=xPtypgipUls&list=PLTULYczsbNmoLrNyVESgaqJTxMUEPl9Gv&index=5

- Objeto literal

```

let nomes = {
nome: "Edio",
sobrenome: "Gonçalves",
idade: 28,
};
console.log(nomes);

```

#

- Objeto com método

```

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

```

#

- Criando método para ser reaproveitado

```

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

```

#

- Manipulação do this

```

getNome.call(pessoa, "TIO", "DO MATHEUS")
getNome.apply(pessoa, ["SOBRINHO", "DO EDIO"])

var pegarNome = getNome.bind(pessoa, "SOBRINHO", "DO EDIO")
pegarNome()

```

#

- A natureza dos objetos no Javascript é dinâmica

```

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

```

#

### FUNCTION

- Com execução independente da ordem

```

function exibe() {
console.log("Dessa forma é uma DECLARAÇÃO");
}
exibe(); // O arquivo vai dar prioridade a execução da function neste formato, mudando a posição da execução de forma implicita

```

#

- Com ordem na execução (se a execução estiver acima da function causa erro)

```

let mostrarNome = function time(nomeTime?: string) {
if (nomeTime) {
console.log(`${nomeTime}`);
} else {
console.log(`Desta forma é EXPRESSÃO`);
}
};
mostrarNome("Internacional"); // Nesse caso o arquivo vai priorisar a ordem de execução, dando mais controle na ordem do arquivo

```

#

- Transformar function em valor

```

let comoValor = function (parametro?: string) {
return parametro + " a Function virou valor";
};
const transformandoEmValor = comoValor("Agora"); // Transforma o retur da function em valor de uma variavel
console.log(transformandoEmValor);

```

#

🚧 _Projeto EM CONSTRUÇÃO_ 🚧
