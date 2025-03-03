
responsiveVoice.speak("Teste de som no Microsoft Edge!", "Brazilian Portuguese Female");
/*Criar uma lista de numeros sorteados */
let listaDeNumerosSorteados = [];
/*Variavel para facilitar a quantidade sorteada */
let quantidadeValorSorteado = 10;

let numeroSecreto = gerarNumeroAleatorio();
tentativas = 1;
console.log(numeroSecreto); 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
   /*  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1}); */

    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemTitulo(){
    exibirTextoNaTela('h1', 'Advinhe o número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}

exibirTextoNaTela('h1', 'Advinhe o número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

/* exibirImagemNaTela('img', './img/ia.png'); */


function verificarChute() {
    let chute = document.querySelector('input').value;
/*     console.log(chute == numeroSecreto); */

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let numeroTentativas = `Parabéns, você conseguiu descobrir o numero secreto em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', numeroTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
                
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Você digitou um numero maior.');
        } else {
            exibirTextoNaTela('p', 'Você digitou um numero menor.');
        }
        tentativas++;   
          
        limparChute();
    }
    
}
/*Melhorando a função para o sistema nunca sortear o mesmo numero */
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeValorSorteado + 1);
    /*variavel para verificar o tamanho da lista. Quantos numeros tem na lista */
    let quantidadeDeNumerosDaLista = listaDeNumerosSorteados.length;

    /*If para o sistema não dá erro quando o limite de numeros sorteados acaba. */
    if(quantidadeDeNumerosDaLista == quantidadeValorSorteado){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        /*Criar uma recursão para o função se chamar novamente, e continuar as verificações. */
        return gerarNumeroAleatorio();
    }else{
        /*Push adiciona o numero sempreno final da lista. Como informado ele vai popular a lista. */
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        /*Se o numero não estiver na lista será o numero sorteado*/
        return numeroEscolhido;
    }
}

/* function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
} */

function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativas = 1;
    exibirMensagemTitulo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}













