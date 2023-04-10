var tileCount = 20;
var moduleAlpha = 180;
var actRandomSeed = 0;
var max_distance = 500;


function preload() {
  ourFont = loadFont('AAHA.otf');
  frameRate(30);
}
function setup() {
  createCanvas(780, 780);
}

function draw() {
  background(255);
  smooth();
  noFill();

  randomSeed(actRandomSeed);
  var moduleColor = color(0);
  stroke(moduleColor, moduleAlpha);
  strokeWeight(1);

  for (var gridY = 0; gridY < height; gridY += 25) {
    for (var gridX = 0; gridX < width; gridX += 25) {

      var diameter = dist(mouseX, mouseY, gridX, gridY);
      diameter = diameter / max_distance * 40;
      push();
      translate(gridX, gridY, diameter * 5);

      if ((gridY < height / 2 && gridX < width / 3) || (gridY < height / 2 && gridX > 2 * width / 3) || (gridY > height / 2 && gridX > width / 3 && gridX < 2 * width / 3)) {
        circle(0, 0, diameter, diameter);
      }

      pop();
    }
  }
}

function mousePressed() {
  actRandomSeed = int(random(100000));
}

function keyTyped() {
  if (key == 's' || key == 'S') save("P_2_1_2_03.png");
}




