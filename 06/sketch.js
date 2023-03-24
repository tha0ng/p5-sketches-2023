var formResolution = 15;
var stepSize = 2;
var distortionFactor = 1;
var initRadius = 150;
var centerX, centerY;
var x = [formResolution];
var y = [formResolution];
var filled = false;
var freeze = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();

 // init form
 centerX = width / 2+30;
 centerY = height / 2+50;
 var angle = radians(180 / (formResolution - 1));
 for (var i = 0; i < formResolution; i++) {
   if (i < formResolution / 2) {
     x[i] = cos(angle * i + 500) * initRadius;
     y[i] = sin(angle * i + 500) * initRadius;
   } else {
     x[i] = cos(angle * i - HALF_PI) * initRadius;
     y[i] = sin(angle * i - HALF_PI) * initRadius / 2;
   }
 }

  stroke(0, 50);
  background(255);
}

function draw() {
  // floating towards mouse position
  if (mouseX != 0 || mouseY != 0) {
    centerX += (mouseX - centerX) * 0.01;
    centerY += (mouseY - centerY) * 0.01;
  }

  // calculate new points
  for (var i = 0; i < formResolution; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
  }

  // set stroke weight and color randomly
  var strokeWeightVal = random(0.5, 2.5);
  var strokeColorVal = color(random(255), random(255), random(255));

  strokeWeight(strokeWeightVal);
  stroke(strokeColorVal);

  if (filled) fill(random(255));
  else noFill();

  beginShape();
  // start controlpoint
  curveVertex(x[0] + centerX, y[0] + centerY);

  // only these points are drawn
  for (var i = 1; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }

  // end controlpoint
  curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);
  endShape();
}

// events
function mousePressed() {
  //init form on mouse position
  centerX = mouseX;
  centerY = mouseY;
  var angle = radians(180 / (formResolution - 1));
  var radius = initRadius * random(0.5, 1.0);
  for (var i = 0; i < formResolution; i++) {
    x[i] = cos(angle * i - HALF_PI) * radius;
    y[i] = sin(angle * i - HALF_PI) * radius;
  }
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (key == 's' || key == 'S') save("U_shape.png");
  if (key == '1') filled = false;
  if (key == '2') filled = true;
  // switch draw loop on/off
  if (key == 'f' || key == 'F') freeze = !freeze;
  if (freeze == true) noLoop();
  else loop();
}
