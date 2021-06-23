var ship, move_ship;
var sea, seaI;

function preload(){
  move_ship = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaI = loadImage("sea.png");

}


function setup(){
  createCanvas(800, 800);

  sea = createSprite(50, 50, 100, 100); 
  sea.addImage(seaI);
  sea.scale = 0.3;
  sea.velocityX = 4;

  ship = createSprite(250, 120, 50, 50);
  ship.addAnimation("move", move_ship);
  ship.scale = 0.3;

}

function draw() {
  background("white");

  if(sea.x > 600){
    sea.x = 150;
  }

  drawSprites();  
 
}
