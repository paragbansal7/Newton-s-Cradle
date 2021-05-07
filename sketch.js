
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobDiameter=40;

	roof = new Roof(420,100,200,20);

	bob1 = new Bob(340,300,20);
	bob2 = new Bob(380,300,20);
	bob3 = new Bob(420,300,20);
	bob4 = new Bob(460,300,20);
	bob5 = new Bob(500,300,20);

	r1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	r2 = new Rope(bob2.body,roof.body,-bobDiameter,0);
	r3 = new Rope(bob3.body,roof.body,0,0);
	r4 = new Rope(bob4.body,roof.body,bobDiameter,0);
	r5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-104,y:-104});
	}
}