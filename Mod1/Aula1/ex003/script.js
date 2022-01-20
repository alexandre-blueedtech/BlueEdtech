var prompt = require('prompt-sync')();

let ano = +prompt('Digite quantos anos de vida: ');

let mes = +prompt('Digite o mês do seu nascimento: ');

let dia = +prompt('Digite o dia do seu nascimento: ');

let diasVividos = (ano * 365) + (mes * 30) + dia;

console.log(`Oooolha você tem ${diasVividos} dias de vida, carambaaaaa...`)

