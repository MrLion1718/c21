const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground1, ground2, ground3, ground4

var ball

var b1,b2

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  b1=createImg("push.png")
  b1.position(20,30)
  b1.size(50,50)
  b1.mouseClicked(hforce)
  b2=createImg("push.png")
  b2.position(220,30)
  b2.size(50,50)
  b2.mouseClicked(vforce)
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground1=new Ground(200,390,400,20)
  ground2=new Ground(390,200,20,400)
  ground3=new Ground(10,200,20,400)
  ground4=new Ground(200,10,400,20)
  var ballOptions={
    restitution: 0.95
  }
  ball=Bodies.circle(200,100,20,ballOptions )
  World.add(world,ball)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20)
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02})
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.02,y:0})
}
