var prompt = require('prompt-sync')();

let vidaMonstro = +prompt('Digite a quantidade de vida do monstro: ')
let danoPersonagem = +prompt('Digite o dano do personagem: ')

let round = vidaMonstro / danoPersonagem;
console.log(`A `round);

