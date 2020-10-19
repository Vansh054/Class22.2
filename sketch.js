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
	
	engine = Engine.create();
	world = engine.world;

	var package_options ={
		isStatic:true,
	    restitution: 0.5
	}
	var ground_options ={
		isStatic:true,
	}

	packageBody = Bodies.rectangle(width/2 , 80, 50, 50, package_options);
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10, ground_options);
 	World.add(world, ground);
  
	packageSprite=createSprite(packageBody.position.x, packageBody.position.y, 50, 50);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(ground.position.x, ground.position.y, width,10);
	groundSprite.shapeColor=color(255)


	
}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode=== DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false)
	 Matter.Body.setStatic(ground,true)
	 
  }
}



