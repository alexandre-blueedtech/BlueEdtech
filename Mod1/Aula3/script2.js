var prompt = require('prompt-sync')();

var i = 0
var cont = 1


let nota1 = +prompt('Digite a 1ª nota: ')
let nota2 = +prompt('Digite a 2º nota: ')
let nota3 = +prompt('Digite a 3º nota: ')

media = ((nota1 + nota2 + nota3)/3) 

if(media >= 7){
     console.log(`Aprovado`)
} else if (media > 5 && media <7){
     console.log(`Em recuperação`)
} else {
     console.log(`Reprovado`)
}
