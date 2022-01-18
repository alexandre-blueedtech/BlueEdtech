var prompt = require('prompt-sync')();

let nota1 = +prompt('Digite a nota (A): ');
let nota2 = +prompt('Digite a nota (B): ');

media = ((nota1 * 4) + (nota1 * 6)/2);

console.log(`A média correspodente é: ${media}`)




