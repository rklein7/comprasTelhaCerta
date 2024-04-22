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


// PARA SELECIONAR OS BOTOES DE ESPESSURA

const btnSelEspes1 = document.getElementById('btnSelEspes1');

btnSelEspes1.addEventListener('click', function() {
    this.classList.toggle('selected');
});

const btnSelEspes2 = document.getElementById('btnSelEspes2');

btnSelEspes2.addEventListener('click', function() {
    this.classList.toggle('selected');
});

const btnSelEspes3 = document.getElementById('btnSelEspes3');

btnSelEspes3.addEventListener('click', function() {
    this.classList.toggle('selected');
});