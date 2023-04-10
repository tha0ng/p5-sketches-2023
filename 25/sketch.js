var tileCount = 20;
var moduleAlpha = 180;
var actRandomSeed = 0;
var max_distance = 500;
let ourFont;
let c;

function preload() {
  ourFont = loadFont('AAHA.otf');
  frameRate(30);
}

function setup() {
  c = createCanvas(780, 780);
}

function draw() {
  background(255);
  smooth();
  points = ourFont.textToPoints("U", width/2 - 300, height/2 + 200, 600);

  colorMode(HSB, 255);
  textSize(400);
  textFont(ourFont);
  noStroke();
  fill(mouseX,mouseY,170, 100)
  
  randomSeed(actRandomSeed);
  var moduleColor = color(0);


  for (var gridY = 0; gridY < height; gridY += 25) {
    for (var gridX = 0; gridX < width; gridX += 25) {

      var diameter = dist(mouseX, mouseY, gridX, gridY);
      diameter = diameter / max_distance * 40;
      push();
      translate(gridX, gridY, diameter * 5);

      if ((gridY < height / 2 && gridX < width / 3) || (gridY < height / 2 && gridX > 2 * width / 3) || (gridY > height / 2 && gridX > width / 3 && gridX < 2 * width / 3)) {
        circle(0, 0, diameter, diameter);
      } else if (gridX < width  && gridY > 1.5 * height / 3) {
        circle(0, 0, diameter, diameter);
        circle(0, 0, diameter, diameter);
      } else if (gridX > 2 * width / 3 && gridY > 2 * height / 1) {
        circle(0, 0, diameter, diameter);
        circle(0, 0, diameter, diameter);
      }

      pop();
    }
  }
}

function mousePressed() {
  saveCanvas(c, "10.jpg", "jpg");
}

function keyTyped() {
  if (key == 's' || key == 'S') save("P_2_1_2_03.png");
}

