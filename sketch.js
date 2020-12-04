const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, 
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {
 canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
 engine = Engine.create()
 world = engine.world;

 let canvasmouse = Mouse.create(canvas.elt);
 canvasmouse.pixelRatio = pixelDensity();
 let options = {
     mouse: canvasmouse
 };
 mConstraint = MouseConstraint.create(engine, options);
 World.add(world, mConstraint);

 startBobPositionX=width/2;
 startBobPositionY=height/4+500;
 bobObject1=new Pendulum(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
 bobObject2=new Pendulum(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
 bobObject3=new Pendulum(startBobPositionX,startBobPositionY,bobDiameter);
 bobObject4=new Pendulum(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
 bobObject5=new Pendulum(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

    rope1=new Sling(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new Sling(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Sling(bobObject3.body,roofObject.body,0, 0)
	rope4=new Sling(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Sling(bobObject5.body,roofObject.body,bobDiameter*2, 0)


}


function draw() {
    rectMode(CENTER);
    background(0);
  
    rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()	
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
}
function mouseDragged() {
    Matter.Body.setPosition(penduluml.body, {x:mouseX, y:mouseY});
}