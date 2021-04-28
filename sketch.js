var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//pole1=createSprite(400,650,130,10);
	//pole1.shapeColor="blue";

	//pole2=createSprite(330,590,10,130);
	//pole2.shapeColor="blue";

	//pole3=createSprite(470,590,10,130);
	//pole3.shapeColor="blue";

	engine = Engine.create();
	world = engine.world;

	var packageSprite_options={
		restitution:0.1
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageSprite_options);
	Matter.Body.setStatic(packageBody,true);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x=packageBody.position.x;
  packageSprite.y= packageBody.position.y; 
  rect(packageSprite.position.x,packageSprite.position.y,20,20);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

  }
  if(keyCode === RIGHT_ARROW){
	helicopterSprite.velocityX = 3;
}
 if(keyCode === LEFT_ARROW){
	 helicopterSprite.velocityX = -3;
 }
}



