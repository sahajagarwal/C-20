var car, wall;
var speed, weight,deformation;

function setup() {
  createCanvas(1600,400);
 speed=random(55,90);
 weight=random(400,1500);

 car=createSprite(50,200,50,50);
car.velocityX=speed;

 wall=createSprite(1200,200,60,height/2);
 wall.shapeColor=(0,255,0);
}

function draw() {
  background(255);  

  deformation=0.5*weight*speed*speed/22500;

  if (isTouching(car,wall)) {
    car.velocityX=0;

    if(deformation<100){
      car.shapeColor=(0,255,0);
      textSize(30);
      text("this car is not lethal for passengers",200,200);
      console.log("neev");
    }
  
    if(deformation>100 && deformation<180){
      car.shapeColor=(230,230,0);
      textSize(30);
      text("this car is partially lethal for passengers",200,200);
      console.log("neev");
    }

    if( deformation>180){
      car.shapeColor=(255,0,0);
      textSize(30);
      text("this car is lethal for passengers",200,200);
      console.log("neev");
    }
  }
  
  drawSprites();
}

function isTouching (object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2
    ) {
  return true;
}else{
  return false;
}
}