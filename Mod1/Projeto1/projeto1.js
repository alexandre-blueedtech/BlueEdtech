console.clear()
var prompt = require('prompt-sync')();

console.log('Você precisará vencer Aldrich para prosseguir no jogo.');
console.log('Este chefe encontra-se em Anor Londo, na mesma sala em que você derrotou Ornstein e Smough.');
console.log('Ir até Anor Londo?'); // PERGUNTA 1
let dec1 = prompt('Digite [s - SIM] ou [n-NÃO]: '); // REPOSTA PERGUNTA 1
if (dec1 == 's'){
    console.log('Aguarde...')
    console.log('Anor Londo...')
    console.log('Você está em Anor Londo.')
    console.log('Você se equipou para o combate guerreiro(a)?'); // PERGUNTA 2
        let dec2 = prompt('Digite [s - SIM] ou [n-NÃO]: '); // REPOSTA PERGUNTA 2
        if (dec2 == 's'){
        console.log('Atacar o Boss ?') // PERGUNTA 3
            let dec3 = prompt('Digite [s - SIM] ou [n-NÃO]: '); // REPOSTA PERGUNTA 3
            if (dec3 == 's'){ 
                console.log('Atacando...')
                console.log('Consumindo poção de vida...')
                console.log('Consumindo elixirs...')
                console.log('Utilizar Utimate?') // PERGUNTA 4
                let dec4 = prompt('Digite [s - SIM] ou [n-NÃO]: '); // REPOSTA PERGUNTA 4
                if( dec4 == 's'){
                    console.log('Atacando...')
                    console.log('Atingindo pico de porder máximo')
                    console.log('Ultilizar linha de vida para matar o Boss?') // PERGUNTA 5
                    let dec5 = prompt('Digite [s - SIM] ou [n-NÃO]: ');
                    if(dec5 == 's'){
                        console.log('Ascenção...')
                        console.log('Linha de vida reduzida...')
                        console.log('Você matou o Boss.')
                    } else{
                        console.log('Morte... (VOCÊ MORREU...)')
                    }
                }
            } 
            else if( dec3 == 'n'){
                console.log('Você demonstra fraquesa...');
            }
        }
        else if( dec2 == 'n'){
            console.log('É melhor não enfrentar o Boss você falhará miseravelmente.');
        }
}
else if( dec1 == 'n'){
    console.log('Você demonstra frasquesa...');
} 





