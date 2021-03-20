const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const pos = Body.position;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	platform = new Platform(400,100,800,20);
	bob1 = new Bob(200,500,50);
	bob2 = new Bob(300,500,50);
	bob3 = new Bob(400,500,50);
	bob4 = new Bob(500,500,50);
	bob5 = new Bob(600,500,50);

	chain1 = new Rope(bob1.body,platform.body,-200,0);
	chain2 = new Rope(bob2.body,platform.body,-100,0);
	chain3 = new Rope(bob3.body,platform.body,0,0);
	chain4 = new Rope(bob4.body,platform.body,100,0);
	chain5 = new Rope(bob5.body,platform.body,200,0);

	/*chain6 = new Chain(bob1.body,bob2.body,0,0);
	chain7 = new Chain(bob2.body,bob3.body,0,0);
	chain8 = new Chain(bob4.body,bob3.body,0,0);
	chain9 = new Chain(bob1.body,bob5.body,0,0);*/
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();

  platform.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  /*chain6.display();
  chain7.display();
  chain8.display();
  chain9.display();*/

  

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-40,y:-45});
	}
}