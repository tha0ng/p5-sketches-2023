let c;
let ourFont;
let points = [];
let letters = "U U U U U U U U U";
let angle = 0;

function preload() {
  ourFont = loadFont('AAHA.otf');
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB, 255);
  textFont(ourFont);
  textSize(300);
  textAlign(CENTER, CENTER);
  
  // create an array of points for each letter in the string
  for (let i = 0; i < letters.length; i++) {
    let letterPoints = ourFont.textToPoints(letters.charAt(i), 0, 0, 250, {
      sampleFactor: 0.1,
      simplifyThreshold: 0
    });
    points.push(letterPoints);
  }
}

function draw() {
  // clear the canvas every frame
  background(0);
  
  // loop through each array of points and draw shapes
  for (let i = 0; i < points.length; i++) {
    let letterPoints = points[i];
    let noiseVal = noise(i, frameCount * 0.01);
    let mappedVal = map(noiseVal, 0, 1, -100, 100);
    let x = (width / points.length) * i + mappedVal;
    let y = height / 2;
    push();
    translate(x, y);
    rotate(angle);
    for (let j = 0; j < letterPoints.length; j++) {
      let point = letterPoints[j];
      let size = map(noise(j, frameCount * 0.01), 0, 1, 10, 50);
      let hue = map(point.y, 0, height, 0, 255);
      stroke(random(250), random(250), 255);
      noFill();
      strokeWeight(2);
      ellipse(point.x, point.y, size, size);
    }
    pop();
  }
  
  // increment angle for rotation
  angle += 0.01;
}

function mousePressed() {
  saveCanvas(c, "10.png", "png");
}
