
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var rectangle1,rectangle2,rectangle3;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	paper=new Paper(150,300,50);
	ground=new Ground(600,380,1200,10);

	rectangle1 = new Dustbin(1000, 360, 200, 20);
	rectangle2 = new Dustbin(900, 320, 20, 100);
	rectangle3 = new Dustbin(1100, 320, 20, 100);
	
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  paper.display();
  ground.display();
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();

  

 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:125, y: -115})
	}
  }
