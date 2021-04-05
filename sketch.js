const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowflakes;
var backgroundImg,ground;
var character;

function preload() {
  backgroundImg = loadAnimation("snow1.jpg");
  snowflakes = loadAnimation("snow4.webp","snow5.webp");

}

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

function draw() {
   background(backgroundImg/"snow1.jpg");
  ground.display(); 
  drawSprites();
}
}