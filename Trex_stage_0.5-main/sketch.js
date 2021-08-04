var trex, trex_running, edges;
var groundImage;
var invisibleground
var ground
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  ground=createSprite(150,180,600,5)
  ground.addImage("Rex",groundImage)
  ground.velocityX=-5
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  // creating invisibleground
  invisibleground=createSprite(150,190,600,5)
  invisibleground.visible=false

  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>150){
    trex.velocityY = -10;
  }
  
  // It Gives gravity
  trex.velocityY = trex.velocityY + 0.5;

  // It Gives infinite ground
  if (ground.x<0){
   ground.x=ground.width/2
   
  }
  //stop trex from falling down
  trex.collide(invisibleground)
  drawSprites();
}