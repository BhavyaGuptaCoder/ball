const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine,ground;
var ball;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world= engine.world;

  var options={
    isStatic: true,
  }

  ground = Bodies.rectangle(400,380,100,50,options);
  World.add(world,ground);

  var ball_options ={
    restitution: 1.0,
    friction: 0,
  }

  ball=Bodies.circle(100,200,60,ball_options);
  World.add(world,ball);

}
function draw() {
  background("blue");

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}