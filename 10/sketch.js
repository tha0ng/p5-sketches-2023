var drawMode = 1;

var x = 0, y = 0;
var stepSize = 5.0;
var lineLength = 25;
var letter = "U";

function setup() {
  // use full screen size 
  c = createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  smooth();
  x = mouseX;
  y = mouseY;
  cursor(CROSS);
  fill(255); // set text color to white
  textSize(20); // set text size
  text("drag the mouse to draw", 20, 20);

}

function draw() {
  if (mouseIsPressed) {
    var d = dist(x,y, mouseX,mouseY);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x,y);
      rotate(angle);
      var hue = map(mouseX, 0, width, 0, 360);
      var saturation = random(20, 80);
      var brightness = random(80, 100);
      var alpha = random(50, 100);
      fill(hue, saturation, brightness, alpha);
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
  if (keyCode == DELETE || key == BACKSPACE) background(0);
  // lineLength ctrls arrowkeys up/down 
  if (keyCode == UP_ARROW) lineLength += 5;
  if (keyCode == DOWN_ARROW) lineLength -= 5; 
}
