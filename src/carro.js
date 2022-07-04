


//Arrays com as variáveis dos carros
let yCarros = [15, 45, 80, 115, 150, 185, 220, 255, 285]
let xCarros = [585, 595, 600, 585, 590, 600, 595, 600, 590]
let velocidadesCarros = [7, 4.5, 6 , 5 ,6 , 3.5, 6, 4, 5.5]
let comprimentoCarros = 50;
let alturaCarros = 40;

//Função que desenha os Carros em looping
function desenharCarros(){
    for(let i = 0; i < imagensCarros.length; i++ ){
    image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
    }
}

//Função que controla o movimento dos Carros em looping

function movimentarCarros(){
    for( let i = 0; i < xCarros.length; i++)
    xCarros[i] -= velocidadesCarros[i];
}

//Função que controla o surgimento dos Carros em looping

function surgirCarros() {
    for(let i = 0; i < xCarros.length; i++ ) {
        if(xCarros[i] < -50) {
            xCarros[i] = 600
        }
    }
}