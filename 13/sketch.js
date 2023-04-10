var letter = "U";
let c;

function setup(){
  c = createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB,255);
  strokeWeight(random(1,50));
  textFont("Arial");
  textSize(12);
  textAlign(CENTER, CENTER);
}

function draw(){
  // Add a hint of transparency to create a fading effect
  fill(0,10);
  rect(0, 0, width, height);
}

function mouseMoved(){
  // Add more saturation and brightness to the color
  noStroke();
  fill(random(0,100), 255, 200);
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function mouseDragged(){
  // Add more saturation and brightness to the stroke color
  stroke(random(0,255), 175, 200);
  noFill();
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function mousePressed() {
  saveCanvas(c, "10.png", "png")
}


