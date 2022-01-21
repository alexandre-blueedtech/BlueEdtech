console.clear()
var prompt = require('prompt-sync')();

console.log('Você precisará vencer Aldrich para prosseguir no jogo.');
console.log('Este chefe encontra-se em Anor Londo, na mesma sala em que você derrotou Ornstein e Smough.');


console.log('Ir até Anor Londo?'); // PERGUNTA 1
let dec1 = prompt('Digite [s - SIM] ou [n-NÃO]: '); // REPOSTA PERGUNTA 1

// CONDIÇÕES DA 1º PERGUNTA
if (dec1 == 's'){
    console.log('Aguarde...')
    console.log('Anor Londo...')
    console.log('Você está em Anor Londo.')
} else if( dec1 == 'n'){
    console.log('Você demonstra fraquesa...');
} 

console.log('Você se equipou para o combate guerreiro(a)?'); // PERGUNTA 2
let dec2 = prompt('Digite [s - SIM] ou [n-NÃO]: '); // REPOSTA PERGUNTA 2

// CONDIÇÕES DA 2º PERGUNTA
if (dec2 == 's'){
    
}