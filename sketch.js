
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var rope1;
var roof;
var bob1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

bobDiameter=10

  roof=new Roof(390,150,1000,40);


  
bob1=new Bob(140,400,70);  
rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
bob2=new Bob(140,400,70);  
rope2=new Rope(bob2.body,roof.body,-bobDiameter*2,0);
bob3=new Bob(140,400,70);  
bob4=new Bob(140,400,70);  
rope3=new Rope(bob3.body,roof.body,-bobDiameter*2,0);
rope4=new Rope(bob4.body,roof.body,-bobDiameter*2,0);

Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 roof.display();
 bob1.display();
 bob2.display();
rope2.display();
 rope1.display();
 bob3.display();
 bob4.display();
 rope3.display();
 rope4.display();
}



