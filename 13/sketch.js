var drawMode = 1;

var x = 0, y = 0;
var stepSize = 5.0;
var lineLength = 25;
var letter = "U";

function setup() {
  // use full screen size 
  createCanvas(windowWidth, windowHeight);
  background(0);
  smooth();
  x = mouseX;
  y = mouseY;
  cursor(CROSS);
}

function draw() {
  if (mouseIsPressed) {
    var d = dist(x,y, mouseX,mouseY);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x,y);
      rotate(angle);
      var col = color(mouseX, random(255), random(255), random(100));
      fill(col);
      noStroke();
      textSize(150);
      text(letter, 0, 0);
      pop();

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    } 
    else {
      x  = mouseX;
      y  = mouseY; 
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function keyTyped() {
  if (key == 's' || key == 'S') save("U.png");
}

function keyPressed() {
  if (keyCode == DELETE || key == BACKSPACE) background(255);
  // lineLength ctrls arrowkeys up/down 
  if (keyCode == UP_ARROW) lineLength += 5;
  if (keyCode == DOWN_ARROW) lineLength -= 5; 
}
