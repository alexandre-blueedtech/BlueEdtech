console.clear()
var prompt = require('prompt-sync')();

console.log('Você precisará vencer Aldrich para prosseguir no jogo.');
console.log();
console.log('Este chefe encontra-se em Anor Londo, na mesma sala em que você derrotou Ornstein e Smough.');
console.log();
console.log('Para derrotar Aldrich, você deve focar seus ataques na cauda do chefe. Ele tem uma resistência bem baixa a golpes lá, e frequentemente fica paralisado caso você cause uma grande quantidade de dano neste ponto.');
console.log();
console.log('Além disso, este chefe é fraco contra o elemento fogo e eletricidade, ou seja, é possível encantar sua arma, caso ela permita, com estes elementos, ou usar magias deles contra o inimigo para causar mais dano.');
console.log();
console.log('Vale ressaltar, entretanto, que Aldrich é forte contra Magia, Sangramento, Congelamento e Magia Negra. Além disso, ele é imune contra veneno.');
console.log();


// PERGUNTA 1
console.log('Você está equipado?');
let c1 = prompt('Digite [S - SIM] ou [N-NÃO]: ');
let p1 = c1.toUpperCase();
console.log();

// CONDIÇÃO 1
if(p1 == 'S'){
    var res1 = 1; // ARMAZENA O RESULTADO 
}
else{
    var res1 = 0; // ARMAZENA O RESULTADO 
}
var resultado = res1; // ARMAZENA "RES" EM  var resultado
console.log();


// PERGUNTA 2
console.log('Tomou seus elixires?');
let c2 = prompt('Digite [S - SIM] ou [N-NÃO]: ');
let p2 = c2.toUpperCase();
console.log();
// CONDIÇÃO 2
if(p2 == 'S'){
    var res2 = 1;
}
else{
    var res2 = 0;
}
var resultado = res1 + res2 // Soma o valor da condição anterior com a atual para o calculo final
console.log();


// PERGUNTA 3
console.log('Ultilizar linha de vida para matar o Boss?');
let c3 = prompt('Digite [S - SIM] ou [N-NÃO]: ');
let p3 = c3.toUpperCase();
console.log();
// CONDIÇÃO 3
if(p3 == 'S'){
    var res3 = 1;
}
else{
    var res3 = 0;
}
var resultado = res1 + res2 + res3;
console.log();


// PERGUNTA 4
console.log('Ir até Anor Londo?');
let c4 = prompt('Digite [S - SIM] ou [N-NÃO]: ');
let p4 = c4.toUpperCase();
console.log();
// CONDIÇÃO 4
if(p4 == 'S'){
    var res4 = 1;
}
else{
    var res4 = 0 ;
}
var resultado = res1 + res2 + res3 + res4;
console.log();


// PERGUNTA 5
console.log('Atacar o Boss ?');
let c5 = prompt('Digite [S - SIM] ou [N-NÃO]: ');
let p5 = c5.toUpperCase();
console.log();
// CONDIÇÃO 5
if(p5 == 'S'){
    var res5 = 1;
}
else{
    var res5 = 0; 
}
var resultado = res1 + res2 + res3 + res4 + res5;
console.log();


/* RESULTADO/CÁLCULO */
if((resultado === 0)){
    console.log("Você falha miseravelmente.");
    console.log();
    console.log("Morte...");
}
else if((resultado === 1) || (resultado === 2)){
    console.log("Você falha, mas ainda consegue fugir da situação.");
    console.log();
    console.log("Você ainda está fraco se prepare melhor...");

}
else if(resultado === 3){
    console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.");
    console.log();
    console.log("Apesar da sua evolução seus atributos ainda não são suficientes para derrotar Aldrich. ");
}
else if(resultado === 4){
    console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.");
    console.log();
    console.log("Parece que a sorte está ao seu lado dessa vez ");
    

}
else if(resultado === 5){
    console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");
    console.log();
    console.log("Glória eterna... ") ;
}





