
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(600, height, 1200, 20);
	dustbin1 = new Ground(900, 615, 20, 150);
    dustbin2 = new Ground (1070,615, 20,150);
	base = new Ground (985, 680,190,20)
	ball = new CrPaper (100, 105)
}


function draw() {
  
  background(0);
  Engine.update(engine);
  ground.display();
   
  dustbin1.display();
  dustbin2.display();
  base.display();
  ball.display();

  // no need to call, its inbuilt function ... keyPressed(); 
}

/*
function keyPressed(){
UP_ARROW
Matter.Body.applyForce
}
is that ok?
try it on output
if ball jumps well, then use these values
,{x=100,y=-105} wrong

,{x:100,y:-105}
it aint jumping

any error??
Failed to load resource: the server responded with a status of 404 (Not Found) .. for which file??
...
dustbin.js? uh why is that showing

remove it from index.html
oh ye
TypeError: Cannot read property 'position' of undefined
    at keyPressed (sketch.js:69)
    at _.n.default._onkeydown (p5.min.js:3)
	bruh

	now try it
 ???
 

	*/


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-150})
	}
}