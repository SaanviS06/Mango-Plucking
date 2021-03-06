
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject,ground2;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var stone1;
var constraint1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(990,200,30);
	mango4=new mango(1100,200,30);
	mango5=new mango(1200,250,30);
	mango6=new mango(900,230,30);
	mango7=new mango(1100,200,30);

	stone1=new stone(230,390,30);

	ground2=new ground(230,390,30);
	

	contraint1=new constr1nt(stone1.body,{x:230,y:420});
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone1.display();

  contraint1.display();
  
  groundObject.display();
}
