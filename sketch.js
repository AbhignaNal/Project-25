
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball, binSide1, binSide2, binSide3;
var ground;

function preload(){
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 690, 800, 20);
	paperball = new Paper(150, 650, 100);

	binSide1 = new Dustbin(600, 550, 200, 150);
	//binSide2 = new Dustbin(710, 620, 20, 100);
	//binSide3 = new Dustbin(490, 620, 20, 100);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paperball.display();
  binSide1.display();
  //binSide2.display();
  //binSide3.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body, paperball.body.position, {x: 450, y: 2250});
	}
}