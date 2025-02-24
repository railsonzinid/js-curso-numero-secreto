let numeroSecreto = gerarNumeroAleatorio();
tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirImagemNaTela(tag, sourceImagem){
    let imagem = document.createElement(tag);
    imagem.src = sourceImagem;
    imagem.alt = 'Acertou número';
    document.body.appendChild(imagem);
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
            exibirTextoNaTela('p', 'Você digitou um numero menor.')
        }
        tentativas++;      
        limparChute();
    }
    
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativa = 1;
    exibirMensagemTitulo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}













