console.clear()
var prompt = require('prompt-sync')();


let a = +prompt('Digite o valor de (A): ')
let b = +prompt('Digite o valor de (B): ')

if(a % b === 0){
    console.log(`${a} é multiplo de ${b}.`)
} else if (b % a === 0){
    console.log(`${b} é multiplo de ${a}.`)
} else{
    console.log(`Não são multiplos`)
}