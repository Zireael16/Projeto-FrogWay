


//Variáveis Sapinho
let xSapinho = 100;
let ySapinho = 366;
let comprimentoSapinho = 30;
let alturaSapinho = 30;
let colisao = false;
let pontos = 0;

//Função que desenha o Sapinho
function desenharSapinho(){
    image(sapinho, xSapinho, ySapinho, comprimentoSapinho, alturaSapinho);
}

//Funçãoo que controla o movimento do Sapinho
function movimentarSapinho(){
    if (keyIsDown(UP_ARROW)){
      ySapinho -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      ySapinho += 3;
    }
    if (keyIsDown(LEFT_ARROW)){
      xSapinho -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)){
      xSapinho += 3;
    }
}

//Função que confere se o Sapinho colidiu em algum carro
function verificarColisao() {
    for(let i = 0; i < xCarros.length; i++) {
      colisao = collideRectCircle(xCarros[i], yCarros[i] , comprimentoCarros, alturaCarros , xSapinho , ySapinho , 10)
      if(colisao) {
        voltarPosicaoInicial();
        perderPontos();
      }
    }
}

//Função que marca os pontos e retorna o Sapinho para a posição inicial 
function marcarPontos() {
  //Desenho Pontuação
  textAlign(CENTER)
  textSize(18)
  fill(color(60, 179, 113))
  text(pontos, width / 5 , 15)
//Retorno do Sapinho ao início e marca os pontos
  if(ySapinho < 0 ) {
   voltarPosicaoInicial();
    pontos++
  }
}

//Função que verifica as bordas do canvas para o Sapinho não sair da tela
function verificarBordas() {
  if(ySapinho > 400) {
    ySapinho = 380;
  }
  if(xSapinho > 600) {
    xSapinho = 580;
  }
  if(xSapinho < 0) {
    xSapinho = 5;
  }
}

//Retorna o Sapinho para a posição inicial
function voltarPosicaoInicial() {
  ySapinho = 366;
  xSapinho = 100;
}

//Função que diminui os pontos
function perderPontos() {
  if(pontos > 0) {
    pontos--
  }
}