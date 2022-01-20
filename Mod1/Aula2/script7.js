var prompt = require('prompt-sync')();

var monstro = +prompt('Digite a vida do monstro entre [10 e 50]: ');
var guerreiro = +prompt('Digite o dano atual da ult do guerreiro entre [5:10]:')
var calculo = monstro / guerreiro;
console.log(`O jogador irá derrotar o monstro em ${calculo} turnos`)






