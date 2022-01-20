console.clear();
var prompt = require('prompt-sync')();

let a = +prompt("Digite um valor para o lado a: ")
let b = +prompt("Digite um valor para o lado b: ")
let c = +prompt("Digite um valor para o lado c: ")

if( a >= b + c){
    console.log("NAO FORMA TRIANGULO")
} else if (a == b + c){
    console.log("TRIANGULO RETANGULO")
} else if (a > b + c){
    console.log("TRIANGULO OBTUSANGULO")
} else if (a < b + c){
    console.log("TRIANGULO ACUTANGULO")
} else if (a == b && b == c && a==c){
    console.log("TRIANGULO EQUILATERO")
} else if (a == b || b == c || c == a){
    console.log("TRIANGULO ISÓCELES")
}