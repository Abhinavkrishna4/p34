//Create variables here
var dog,happydog;
var database;
var foodS,foodStock;
function preload()
{
  this.image1 = loadImage("images/Dog.png");
  this.image2 = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  var dog = createSprite(250,250,10,10);
 dog.addImage(this.image1);
 database=firebase.database();
 dog.scale=0.2;;
 foodStock=database.ref('Food');
 foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
  drawSprites();
  
  textSize(10);
   fill("yellow");
   stroke(10);
  text("Note:Press UP_ARROW key to feed leo milk!")
  //add styles here
  if (keyWentDown(UP_ARROW)){
      writeStock(foodS)
  }

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}



