/* TIPOD DE DADOS */
//string - dados de texto
let nameUser: string = "Edio";
let lastNameUser: string = "Gonçalves";
let fullNameUser = `${nameUser} ${lastNameUser}`;
console.log(fullNameUser);

//number - inteiros, decimais, hexadecimais, binários
let age: number = 38;

//boolean - true, false (false sempre vai ser vazio ou 0)
let statusUser: boolean = true;

//array - variáveis indexadas. Vetores, matrizes
let fruits: Array<string> = ["Maçã", "Laranja", "Banana"];
let fruits2: Array<string | number> = ["Maçã", "Laranja", 50];
let fruits3: string[] = ["Maçã", "Laranja", "Banana"];
//object - objeto, propriedades e funcionalidades
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

//date - "yyyy-mm-dd hh:mm:ss", timestamp - quantidade de segundos a partir de 1970
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

//any - qualquer tipo de dado. NÃO RECOMENDADO
let letTeste = "false"; // vai aceitar qualquer valor e tentar usar da forma correta
