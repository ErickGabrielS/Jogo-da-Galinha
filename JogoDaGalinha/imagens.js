let imagemDaEstrada;
let ImagemDoAtor;
let ImagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;
//sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("./imagens/estrada.png");
  imagemDoAtor = loadImage("./imagens/ator-1.png");
  imagemCarro1 = loadImage("./imagens/carro-1.png");
  imagemCarro2 = loadImage("./imagens/carro-2.png");
  imagemCarro3 = loadImage("./imagens/carro-3.png");
  somDaTrilha = loadSound("./sons/trilha.mp3");
  somDaColisao = loadSound("./sons/colidiu.mp3");
  somDoPonto = loadSound("./sons/pontos.wav");
  imagemCarros=[imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro2,imagemCarro3,imagemCarro1];
}