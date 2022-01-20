var prompt = require('prompt-sync')();

let ano = +prompt('Digite quantos anos de vida: ');

let mes = +prompt('Digite quantos meses de vida: ');

let dia = +prompt('Digite quantos dias de vida: ');

let diasVividos = (ano * 365) + (mes * 30) + dia;

console.log(`Oooolha você tem ${diasVividos} dias de vida, carambaaaaa...`)

let reverterAnos = parseInt(diasVividos/365)


let reverterMeses = parseInt((diasVividos % 365) / 30)


let reverterDias = ((diasVividos) - (reverterAnos*365) - (reverterMeses*30))


console.log(`Você tem ${reverterAnos} anos, ${reverterMeses} meses e ${reverterDias} de vida`);




 
