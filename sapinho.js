


let xSapinho = 100;
let ySapinho = 366;

function desenhaSapinho(){
    image(sapinho, xSapinho, ySapinho, 30, 30);
}

function movimentoSapinho(){
    if (keyIsDown(UP_ARROW)){
      ySapinho -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      ySapinho += 3;
    }
}