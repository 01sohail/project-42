var spacecraft,iss;
var hasDocked = false;


function setup() {
  createCanvas(600,350);


  //created spacecraft
  spacecraft = createSprite (285,240);
  spacecraft.addImage(space1);
  spacecraft.scale = 0.15;
  
  //created iss
  iss = createSprite (330,130);
  iss.addImage(issImg);
  iss.scale = 0.25;

}

function preload (){
issImg = loadImage("images/iss.png");
spacebgImg = loadImage("images/spacebg.jpg");
space1 = loadImage("images/spacecraft1.png");
space2 = loadImage("images/spacecraft2.png");
space3 = loadImage("images/spacecraft3.png");
space4 = loadImage("images/spacecraft4.png");


  
}

function draw() {
  background(spacebgImg); 
  spacecraft.addImage(space1);
  

  if(!hasDocked){
   spacecraft.x = spacecraft.x + random(-1,1); 
    
  if(keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y - 2;  
  }
  
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(space2);  
    }  

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(space3);  
      spacecraft.x = spacecraft.x + 1;
      }  
    
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(space4);  
      spacecraft.x = spacecraft.x - 1;
        }  
        
         }
    if(spacecraft.y<= (iss.y+70) && spacecraft.x<= (iss.x-10)){
      hasDocked=true  ;
      textSize(25);
      fill("white");
      text("Docking Successfull",200,300);
    } 
    drawSprites();
}