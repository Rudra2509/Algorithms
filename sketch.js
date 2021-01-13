
var rect1, rect2;
var rect3, rect4;

function setup() {
  createCanvas(800,400);
  rect2 = createSprite(400, 200, 50, 50);
  rect2.shapeColor = "green";
  rect1 = createSprite(100,100,50,50);
  rect1.shapeColor = "green";
  rect3 = createSprite(300,50,50,50);
  rect3.shapeColor = "blue";
  rect3.velocityY = 3;
  rect4 = createSprite(300,350,50,50);
  rect4.shapeColor = "yellow";
  rect4.velocityY = -3;
}

function draw() {
  background(0,0,0);  

  rect1.y = mouseY;
  rect1.x = mouseX;

if(isTouching(rect1, rect2)){
rect1.scale = 2;
rect2.scale = 2;
}
else{
  rect1.scale = 1;
  rect2.scale = 1;


}

if(isTouching(rect1,rect3)){
 rect3.setVelocity(0,0);
 rect1.shapeColor = "blue";

}
  bounceOff(rect3, rect4);
  
  
  drawSprites();
}

