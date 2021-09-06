var alien ,alienimg  , astronaut , astronautimg, rock , rockimg;

 


function preload() {

  
  backgroundimg = loadImage("../images/background.jpg");
  astronautimg = loadImage("../images/astronaut.png"); 
  rockimg = loadImage("../images/rock.png"); 
  alienimg = loadImage("../images/alien.png"); 
}

function setup() {
createCanvas(1024, 500);


astronaut = createSprite(100,100,50,50);
astronaut.addImage("astronaut" , astronautimg);
astronaut.scale = 0.2;

alien = createSprite(200,100,70,50);
alien.addImage("alien" , alienimg);
alien.scale = 0.2;

rock = createSprite(300,200,60,20);
rock.addImage("rock" , rockimg);
rock.scale = 0.2;



}

function draw() {
  background(backgroundimg);








drawSprites();
}
