var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 50, 50);
  fixedRect.shapeColor = "green"
  fixedRect.debug = true

  movingRect = createSprite(600,200,50,50)
  movingRect.shapeColor = "green"
  movingRect.debug = true;

  fixedRect.velocityX=2
  movingRect.velocityX=-2
}

function draw() {
  background(0);  

 

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 
   ){
    fixedRect.velocityX=fixedRect.velocityX * (-1) 
    movingRect.velocityX=movingRect.velocityX * (-1)   
  
  }else if( movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y- movingRect.y <= fixedRect.height/2 + movingRect.height/2){
      fixedRect.velocityY=fixedRect.velocityY * (-1) 
    movingRect.velocityY=movingRect.velocityY * (-1)   
  }

  drawSprites();
}