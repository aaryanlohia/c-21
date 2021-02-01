var fixedRect, movingRect;
var a,b,c,d;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 5;

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;

  /*
  a = createSprite(100,100,50,50);
  a.shapeColor="green";
  b = createSprite(200,100,50,50);
  b.shapeColor="green";
  c = createSprite(300,100,50,50);
  c.shapeColor="green";
  d = createSprite(400,100,50,50);
  d.shapeColor="green";
*/

}


function draw() {
  background(0,0,0);  
  

  /*
  if(isTouching(b,movingRect)) {
    movingRect.shapeColor = "blue";
   b.shapeColor = "blue";
  } 
  else{
    movingRect.shapeColor = "green";
   b.shapeColor = "green";
  }
*/

bounceOff(movingRect,fixedRect);

  drawSprites();
}



