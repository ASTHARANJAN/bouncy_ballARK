const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var engine, world, ground, ball;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world

 var ground_options = {
    isStatic: true
 }

 var ball_options = {
  restitution: 2
}

  ground = Bodies.rectangle(200,380,200,20,ground_options)
  World.add(world,ground)
  
  ball = Bodies.circle(200,100,40,ball_options)
  World.add(world,ball)

  console.log(ground)
  console.log(ground.type)

}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800, 50)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 40, 40)

  drawSprites();


}