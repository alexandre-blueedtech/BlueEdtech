var prompt = require('prompt-sync')();


let nome = prompt('Digite o seu nome: ');
let endereco = prompt('Digite o seu endereço: ');
let cep = prompt('Digite o seu CEP: ');
let telefone = prompt('Digite o seu telefone: ');

console.log(`Olá ${nome} seu endereço é ${endereco} com esse CEP: ${cep} e seu telefone é ${telefone}`);
