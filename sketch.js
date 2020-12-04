var mr,fr
function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  fr.shapeColor="red";
  mr=createSprite(400, 200, 80, 30);
  mr.shapeColor="red";
}

function draw() {
  background(255,255,255); 
mr.x=World.mouseX;
mr.y=World.mouseY;
console.log(mr.x-fr.x)
if(mr.x-fr.x < mr.width/2 + fr.width/2 && fr.x-mr.x < mr.width/2 + fr.width/2 && mr.y-fr.y < mr.height/2 + fr.height/2 && fr.y-mr.y < mr.height/2 + fr.height/2)
{
  fr.shapeColor="green";
  mr.shapeColor="green";
}
else { 
 fr. shapeColor="red";
mr.shapeColor="red"
}
  drawSprites();
}