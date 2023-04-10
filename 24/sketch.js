var img;
let c;

function preload() {
  img = loadImage("umagnet.png");
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  background(255);
  image(img, 100, 100);
  noiseDetail(4, 0.5);
}

function draw() {
  var x1 = random(0, width);
  var y1 = 0;
  var x2 = round(x1 + map(noise(x1 * 0.01, frameCount * 0.001), 0, 10, mouseX-200, 70));
  var y2 = round(map(noise(y1 * 0.1, frameCount * 0.001), 0, 1, mouseY-200, 5));
  var w = random(mouseX-50, mouseY);
  var h = height;
  copy(img, x1, y1, w, h, x2 + 100, y2 + 100, w, h);
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    background(255);
    image(img, 100, 100);
  }
}
function mousePressed() {
  saveCanvas(c, "10.jpg", "jpg");
}


