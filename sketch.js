const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;
var engine, world; 
var wall1,wall2,ground,Bishop1,Bishop2,knight1,knight2,Stool1,Stool2,beam,king;
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  wall1=new WALLS()
  wall2=new Walls2()
  ground=new Ground()
  Bishop1=new bishop1()
  Bishop2=new bishop2()
  knight1=new CKnight1()
  knight2=new Cknight2()
  Stool1=new stool1()
  Stool2=new stool2()
  beam=new Beam()
  king=new King()
}
function draw() {
  background("pink"); 
  Engine.update(engine) 
  wall1.display()
  wall2.display() 
  ground.display()
  Bishop1.display()
  Bishop2.display()
  knight1.display()
  knight2.display()
  Stool1.display()
  Stool2.display()
  beam.display()
  king.display()
  drawSprites();
}