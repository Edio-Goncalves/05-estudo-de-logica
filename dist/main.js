"use strict";
/* TIPOD DE DADOS */
//string - dados de texto
let nameUser = "Edio";
let lastNameUser = "Gonçalves";
let fullNameUser = `${nameUser} ${lastNameUser}`;
console.log(fullNameUser);
//number - inteiros, decimais, hexadecimais, binários
let age = 38;
//boolean - true, false (false sempre vai ser vazio ou 0)
let statusUser = true;
//array - variáveis indexadas. Vetores, matrizes
let fruits = ["Maçã", "Laranja", "Banana"];
let fruits2 = ["Maçã", "Laranja", 50];
let fruits3 = ["Maçã", "Laranja", "Banana"];
let company = {
    name: "Hcode Cursos",
    adress: "Av XX de Piracicaba, 2043",
    city: "São Paulo",
    state: "SP",
};
//date - "yyyy-mm-dd hh:mm:ss", timestamp - quantidade de segundos a partir de 1970
let bornDate = new Date("1986 10 20");
//tuple - array com tipod de dados definidos
let adress = ["Av XX de Piracicaba", 2043];
//enum - lista de valores possíveis
var statusEnum;
(function (statusEnum) {
    statusEnum[statusEnum["blocked"] = 0] = "blocked";
    statusEnum[statusEnum["released"] = 1] = "released";
    statusEnum[statusEnum["pending"] = 2] = "pending";
})(statusEnum || (statusEnum = {}));
let options = 0;
let options2 = statusEnum.pending;
//any - qualquer tipo de dado. NÃO RECOMENDADO
let letTeste = "false"; // vai aceitar qualquer valor e tentar usar da forma correta
