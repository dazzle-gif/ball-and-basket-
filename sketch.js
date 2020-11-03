
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,bin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	Engine.run(engine);
	ball = new Ball (200,200,50,50);
    ground = new Ground (920,320,70,70);
   // bin = new Bin (810,350);
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin.display();
  ground.display();
  //bin.display();
  drawSprites();
 
}

function keyPressed (){
	if (keyCode ===UP_ARRow){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y : -85});
	} 
}

