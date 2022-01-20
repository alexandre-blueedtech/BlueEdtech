var prompt = require('prompt-sync')();

/* Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais. */

let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');

comparaNumero(num1, num2);

function comparaNumero(num1, num2){
    if(num1>num2){
        console.log(`O valor de ${num1} é maior que ${num2}.`)
    }
    else if(num1 < num2){
        console.log(`O valor de ${num2} é maior que ${num1}.`)
    }
    else if(num1 == num2){
        console.log(`O valor de ${num1} é igual a ${num2}.`)
    }
    else{
        console.log(`Talvez você não tenha um valor valido...`)
    }
}

