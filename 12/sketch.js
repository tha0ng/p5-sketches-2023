

  var letter = "U";

  function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(random(1,50))
    noFill();
    textFont("Arial");
    textSize(12);
    textAlign(CENTER, CENTER);
  }
  
  function mouseMoved(){
    background(0);
    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    textSize((mouseX-width/2)*5+1);
    text(letter, width/2, mouseY);
  }
  
  function mouseDragged(){
  
    stroke(random(0,255),random(0,255),random(0,255));
    noFill();
    textSize((mouseX-width/2)*5+1);
    text(letter, width/2, mouseY);
  }
  
  function keyPressed() {
    if (keyCode == CONTROL) save("U.png");
  }
  
  function keyTyped(){
        letter = str(key);
    
  }
  

