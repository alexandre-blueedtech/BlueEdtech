/* var prompt = require('prompt-sync')(); */

console.log('----MENU----')
console.log('1 - Peça1')
console.log('2 - Peça2')
let opcao  = +prompt('Digite uma opção acima: ')

if(opcao === 1){
    const valor1 = 6;
    let qdt = +prompt('Digite a quantidade')
    console.log(`Quantidade a pagar é de: R$ ${valor1*qdt}`)
}
else{
    const valor2 = 6;
    let qdt = +prompt('Digite a quantidade')
    console.log(`Quantidade a pagar é de: R$ ${valor2*qdt}`)
}




