// Save canvas for download
let save;
let font;
function preload() {
  font = loadFont('AAHA.otf');
}
function setup() {
  save = createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0);
  textFont(font);
  textSize(400);
  textAlign(CENTER, CENTER);
  frameRate(30); // reduce framerate to 10fps

  // Initialize Perlin noise variables
  noiseDetail(10, 0.65);
  noiseSeed(123);
}

function draw() {
  // Draw the circle and fill it with HSB color using Perlin noise
  let c1 = color(noise(frameCount / 50) * 360, 50, 80);
  let c2 = color(noise(frameCount / 35 + 1000) * 360, 50, 80);
  let c = lerpColor(c1, c2, mouseX / width);
  fill(c);
  strokeWeight(0);
  circle(620, 350, map(noise(frameCount / 100), 0, 1, 50, windowWidth));

  // Define U shape parameters
  const uWidth = 250;
  const uHeight = 500;
  const uSpacing = 250;
  const uXOffset = width / 2 - 150;

  // Draw U text with rotation based on Perlin noise and mouse X position
  push();
  translate(width / 2, height - uHeight / 2 - 20);
  rotate(radians(map(noise(frameCount / 50 + 2000), 0, 1, -10, 10) + map(mouseX, 0, width, -10, 10)));
  noStroke();
  fill(0);
  text('U', 0, 0);
  pop();
}

function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg");
}
