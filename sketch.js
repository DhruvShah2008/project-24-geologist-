
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,iron, plane, stone, rubber, sand, sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9;


function setup() {
	createCanvas(1200, 700);
engine = Engine.create()
world = engine.world ;

hammer = new Hammer(10,100);
iron = new Iron(300,350);
plane = new Plane(600, height, 1200, 30);
stone = new Stone(700, 320, 100, 100);
rubber = new Rubber(900, 450, 70);
sand = new Sand(400, 600, 10);
sand1 = new Sand(401, 600, 10);
sand2 = new Sand(403, 603, 10);
sand3 = new Sand(406, 603, 10);
sand4 = new Sand(406, 606, 10);
sand5 = new Sand(409, 606, 10);
sand6 = new Sand(409, 609, 10);
sand7 = new Sand(412, 609, 10);
sand8 = new Sand(412, 612, 10);
sand9 = new Sand(415, 612, 10);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  iron.display();
  plane.display();
  stone.display();
  rubber.display();
  sand.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();


  drawSprites();
 
}



