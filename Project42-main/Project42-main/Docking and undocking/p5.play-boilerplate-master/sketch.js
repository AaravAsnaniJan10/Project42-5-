var spaceship;
var bg;
var spacecraft;
function preload(){
 bg = loadImage("Docking-undocking img/Docking-undocking/spacebg.jpg");
 spaceship = loadImage("Docking-undocking img/Docking-undocking/iss.png")
 spacecraft = loadImage("Docking-undocking img/Docking-undocking/spacecraft1.png")

};
function setup() {
  createCanvas(800,400);
  spaceship = createSprite(400, 200, 100, 100);
 spacecraft = createSprite(500, 100, 20, 20);

}

function draw() {
  background(bg); 
  spacecraft.x = spacecraft.x + random(+1,-1)
  drawSprites();

if(spacecraft.y<=(spaceship.y+70)&&spacecraft.x<=(spaceship.x-10)){
 hasDocked = true;
textSize(25);
fill("white")
text("Docking Succesful,200,300");

}
if(keyDown((UP_ARROW))){
  spacecraft.velocityY= +2;
}

if(keyDown((DOWN_ARROW))){
  spacecraft.velocityY= +2;
}
if(keyDown((RIGHT_ARROW))){
  spacecraft.velocityX=  +2;
}
if(keyDown((LEFT_ARROW))){
  spacecraft.velocityY= -2;
}
}