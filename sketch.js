//namespacing
const Engine = Matter.Engine;  //laws of Physics
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box, ground;
var ball;
var box1,box2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  

  box1 = new Box(200,300,50,50);
  box2 = new Box(220,200,50,100);
  ground = new Ground(200,390,400,20);
  

var ball_options = {restitution : 1}
ball = Bodies.circle(150,100,50,ball_options);
World.add(world,ball);


console.log(box)
}

function draw() {
  background(220,255,255); 
  Engine.update(engine);
  

 

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,50);

  box1.display()
  box2.display()
  ground.display()
}