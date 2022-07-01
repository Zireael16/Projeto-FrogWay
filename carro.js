


//Carro 1
let xCarro1 = 600;
let yCarro1 = 40;

//Carro 2
let xCarro2 = 600;
let yCarro2 = 95;

//Carro 3
let xCarro3 = 600;
let yCarro3 = 150;


function desenhaCarros(){
    image(carro1, xCarro1, yCarro1, 50, 40);
    image(carro2, xCarro2, yCarro2, 50, 40);
    image(carro3, xCarro3, yCarro3, 50, 40);
}
  
function movimentoCarros(){
    xCarro1 -= 2;
    xCarro2 -= 3;
    xCarro3 -= 5;
}