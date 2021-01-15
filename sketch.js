var dog,happyDog,database,foodS,foodStock;

function preload(){
dog=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png");
	
}

function setup() {
  createCanvas(500,500);
 // dog.addImage("dog",dog);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy); 
  }
    textSize(15);
    fill("red");
    stroke(15);
    text("Press UP_ARROW Key To Feed Drago Milk",90,100);
  drawSprites();
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
database.ref('/').update({
  Food:x
})
}




