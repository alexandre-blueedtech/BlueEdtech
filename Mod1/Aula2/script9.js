var prompt = require('prompt-sync')();

/* var entrada = +prompt("Insira um valor: ") */


/* EXIBIR MENU */
console.log("MENU")
console.log("Escolha uma opção abaixo.")
console.log("1- Euro") // 6.17
console.log("2- Dolar") // 5.44
console.log("3- Iene") // 5.44

let valor = +prompt('Digite um valor para converção: ')

/* SELECIONANDO A OPÇÃO */
let opcao = +prompt('Digite uma da opções de converção citadas acima: ')

/* PREENCHENDO OS PARÂMETROS DA FUNÇÃO E CHAMANDO NO PROGRAMA PRINCIPAL */
converterValor(opcao, valor)

/* FUNÇÃO DE CONVERÇÃO */
function converterValor(opcao, valor){
    const euro = 6.17
    const dolar = 5.44
    const iene = 0.048
    if (opcao === 1 ){
        console.log(`Você selecionou Euro...`)
        let convertido = valor / euro
        let valorConvertido =  convertido.toFixed(2)
        console.log(`O valor converido fica: € ${valorConvertido}`)
    }
    else if (opcao === 2 ){
        console.log(`Você selecionou Euro...`)
        let convertido = valor / dolar
        let valorConvertido =  convertido.toFixed(2)
        console.log(`O valor converido fica: $ ${valorConvertido}`)
    }
    else if (opcao === 3 ){
        console.log(`Você selecionou Iene...`)
        let convertido = valor / iene
        let valorConvertido =  convertido.toFixed(2)
        console.log(`O valor converido fica:  ¥ ${valorConvertido}`)

    }
    else{
        console.log(`Você selecionou uma opção invalida.`)
        console.log(`Encerrando programa...`)
    }
   
}