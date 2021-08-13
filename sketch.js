var movingrect,fixedrect;




function setup() {
  createCanvas(800,400);
 movingrect=createSprite(400, 200, 100, 50);
 movingrect.shapeColor="black" ;
fixedrect=createSprite(600, 200, 50, 100);
 fixedrect.shapeColor="black" ;



}

function draw() {
  background(255,255,255);  
 movingrect.x=World.mouseX;
 movingrect.y=World.mouseY;
  drawSprites();
isTouching();
}

function isTouching(){
if((movingrect.x-fixedrect.x<movingrect.width/2 + fixedrect.width/2) && 
(fixedrect.x-movingrect.x<movingrect.width/2 + fixedrect.width/2) && 
(movingrect.y-fixedrect.y<movingrect.height/2 + fixedrect.height/2) && 
(fixedrect.y-movingrect.y<movingrect.height/2 + fixedrect.height/2) 
)
{
movingrect.shapeColor="red";
fixedrect.shapeColor="red";
}

else{
  movingrect.shapeColor="black";
  fixedrect.shapeColor="black";



}



}





