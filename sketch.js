const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter. Bodies;



var engine, world, object,ground,LW;
var box1,paper1

function setup() {
createCanvas(800,400);
engine = Engine.create();
world = engine.world;
box1 = new Box(300,700,20,100);
paper1=new Paper(200,740,50)
var option1 ={
  isStatic : true
}
ground=Bodies.rectangle(400,400,50,50,option1)
World.add(world,ground)
var option2 ={
  isStatic:true 
}
}

function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800,50)
  
  box1.display()
  paper1.display()
}