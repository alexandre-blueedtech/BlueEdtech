var prompt = require('prompt-sync')();


let numero = +prompt('Digite um número que eu te direi se ele é par ou impar: ');

if(numero % 2 === 0){
    console.log(`O número ${numero} é par.`)
} else if (numero % 2 === 1){
    console.log(`O número ${numero} é impar.`)
} else{
    console.log(`O que você digitou não é um número.`)
}