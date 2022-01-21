console.clear();
var prompt = require('prompt-sync')();

const prompt = require("prompt-sync")();

let A = +prompt("Digite o valor para o lado 1: ");
let B = +prompt("Digite o valor para o lado 2: ");
let C = +prompt("Digite o valor para o lado 3: ");
let X = 0;

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("-----------------");
console.log();

if (A < B){
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    A = B;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
}

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("-----------------");
console.log();

if (B < C){
    X = B;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    B = C;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    C = X;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
}

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("-----------------");
console.log();

if (A < B){
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    A = B;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
}

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("-----------------");
console.log();

if (A >= (B + C)){
    console.log("NAO FORMA TRIANGULO");
}
else{
    if ( (A*A) == (B*B) + (C*C) )
    {
        console.log("TRIANGULO RETANGULO");
    }
    if ( (A*A) > (B*B) + (C*C) )
    {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if ( (A*A) < (B*B) + (C*C) )
    {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (A == B && B == C)
    {
        console.log("TRIANGULO EQUILATERO");
    }
    if ( (A == B && A != C) || (B == C && B != A))
    {
        console.log("TRIANGULO ISOSCELES");
    }
}