const imagemPrincipal = document.getElementById('imagemPrincipal');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const imagens = [
    'images/imagem1.png',
    'images/imagem2.png',
    'images/imagem3.png'
];

let indiceAtual = 0;


function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length; 
    imagemPrincipal.src = imagens[indiceAtual]; 
}


function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; 
    imagemPrincipal.src = imagens[indiceAtual]; 
}


nextButton.addEventListener('click', proximaImagem);
prevButton.addEventListener('click', imagemAnterior);
