var x = 0, y = 0;
var stepSize = 5.0;
var letters = "U";
var fontSizeMin = 3;
var angleDistortion = 0.0;
var counter = 0;
let c;
let font;


function preload() {
  font = loadFont('AAHA.otf'); // Replace 'your_font.otf' with the name of your desired font file
}

// Noise variables
var noiseScale = 0.02;
var noiseStrength = 100;
var noiseOffset = 0;

function setup() {
  // Use full screen size
  c = createCanvas(windowWidth, windowHeight);
  background(0);
  smooth();
  cursor(CROSS);

  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill(200, 200, 200)
  textFont(font);
}

function draw() {
  if (mouseIsPressed) {
    var d = dist(x, y, mouseX, mouseY);
    textSize(fontSizeMin + d / 2);
    var newLetter = letters.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY - y, mouseX - x);

      // Add noise to angle and stepSize
      var angleNoise = noise(x * noiseScale, y * noiseScale, noiseOffset) * angleDistortion;
      var stepNoise = noise(x * noiseScale, y * noiseScale, noiseOffset) * stepSize;

      push();
      translate(x + noise(x * noiseScale, y * noiseScale, noiseOffset) * noiseStrength, y + noise(x * noiseScale, y * noiseScale, noiseOffset + 100) * noiseStrength);
      rotate(angle + angleNoise);
      text(newLetter, 0, 0);
      pop();

      counter++;
      if (counter > letters.length - 1) counter = 0;

      x = x + cos(angle + angleNoise) * (stepSize + stepNoise);
      y = y + sin(angle + angleNoise) * (stepSize + stepNoise);

      noiseOffset += 0.1;
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down 
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (keyCode == UP_ARROW) angleDistortion += 0.1;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.1;
  if (key == 's' || key == 'S') saveCanvas("myCanvas", "jpg");
}
