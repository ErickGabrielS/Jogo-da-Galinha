//variaveis ator
xAtor = 100;
yAtor = 366;
meusPontos = 0;
colisao = false;
function mostraAtor(){
  image (imagemDoAtor,xAtor,yAtor,30,30)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor-= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
    yAtor+= 2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor+=2;
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor-=2;
  }
}
function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros,alturaCarros,xAtor,yAtor,15)
    if (colisao){
      yAtor = 366;
      if(pontosMaiorQueZero()){
      meusPontos -= 1};
      somDaColisao.play()
    }
  }
}
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(240,230,140);
  text(meusPontos,400,26);

}
function marcaPontos(){
  if( yAtor < 26){
    meusPontos += 1;
    yAtor = 366;
    somDoPonto.play()
}
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}
function podeSeMover(){
  return yAtor < 366
}