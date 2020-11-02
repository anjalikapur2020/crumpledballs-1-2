
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1,side1,bottom,ball,ground,dustbinimage;
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
side1= new Dustbin(510,625,20,150)
side2= new Dustbin(620,625,20,150)
bottom= new Dustbin(575,690,50,50)

ground= new Dustbin(400,690,800,10)

ball = new Ball(100,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  
bottom.display();

}

function keyPressed(){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-75})
}

}

