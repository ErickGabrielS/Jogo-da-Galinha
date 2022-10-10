//variaveis carros
xCarros = [600,600,600,600,600,600];
yCarros = [40,96,150,210,260,315];
velocidadeCarros = [3,3.5,4,5,3,3.5];
comprimentoCarros = 50;
alturaCarros = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  image (imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarros,alturaCarros)}
}
function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];}
  
}
function voltaPosisaoInicial(){
  for(let i = 0; i < imagemCarros.length; i++){
  if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
  }
}
}
function passouTodaATela(xCarro){
  return xCarro < -50;
}