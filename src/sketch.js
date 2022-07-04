


//Desenhar canvas
function setup() {
  let canvas = createCanvas(600, 400);
  canvas.center();
  
}

//Funçao que inicia o jogo e chama as outras funções para o funcionamento do jogo
function draw() {

//Desenha o plano de fundo
  background(ImagemDeFundo);

//Funções do Sapinho 

  desenharSapinho();
  movimentarSapinho();
  verificarBordas();
  verificarColisao();

//Funções dos Carros

  desenharCarros();
  movimentarCarros();
  surgirCarros();
  
//Funções de Pontuação e Placar
  marcarPontos();
  
  
}





