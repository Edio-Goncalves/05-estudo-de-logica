/* FUNCTION */
function exibe() {
  console.log("Olá mundo!");
}
exibe();

function time(nomeTime?: string) {
  if (nomeTime) {
    console.log(`${nomeTime}`);
  } else {
    console.log(`Nome do time não informado!`);
  }
}
time("");
