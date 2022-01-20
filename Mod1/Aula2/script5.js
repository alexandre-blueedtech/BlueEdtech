/* const readLineSync = ('readline-sync')

let userRes;
while (userRes !== '0') {
    console.log("Option 1")
    console.log("Option 2")
    console.log("Option 3")
    userRes = readLineSync.question("Pick an option");
    if (userRes === '1') {
        doSomething()
    } else if (userRes === '2') {
        doSomethingElse()
    }
} */
var prompt = require('prompt-sync')();

let opcao;
while (opcao !== '0' ){
    console.log("Opção 1")
    console.log("Opção 2")
    console.log("Opção 3")
    console.log("Sair 's'")
    opcao = prompt("Escolha uma opção: ");
    if (opcao === '1') {
        console.log("Você escolheu a opção 1")
        
    } else if (opcao === '2') {
        console.log("Você escolheu a opção 2")
    } else if (opcao === '3'){
        console.log('Você escolheu a opção 3')
    } else if(opcao === 's'){
        console.log('Encerrando o programa...')
        break 
    }
}