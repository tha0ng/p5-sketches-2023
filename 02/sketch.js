let save;
let ourFont;
let points;

function preload() {
  ourFont = loadFont('AAHA.otf');
  frameRate(30);
}

function setup() {
  save = createCanvas(windowWidth, windowHeight);
  frameRate(60);
  colorMode(HSB, 360, 100, 100, 100);

  // Set random gradient colors
  c1 = color(random(140, 150), random(30, 40), random(150, 200));
  c2 = color(random(300, 305), random(30, 40), random(200, 255));

  // Convert "U" text to points using the font
  points = ourFont.textToPoints("U", width/2 - 300, height/2 + 200, 600);

  colorMode(HSB, 255);
  textSize(400);
  textFont(ourFont);
  noStroke();

  // Save canvas for download
  save = createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Create gradient background
  setGradient(0, 0, width, height, c1, c2);


  // Create many flowing shapes
  for (let x = 0; x < width; x += 200) {
    for (let y = 0; y < height; y += 200) {

      // Draw shape
      stroke(random(0, 360), random(40, 500), random(50, 300), random(50, 80));
      strokeWeight(random(100));

      for (let i = 0; i < points.length; i++) {
        // Calculate Perlin noise values
        let noiseX = map(points[i].x, 0, width, 0.001, 0.01);
        let noiseY = map(points[i].y, 0, height, 0.001, 0.01);
        let noiseVal = noise(noiseX + frameCount/100, noiseY + frameCount/100);

        // Create U-shaped rect with noise
        rect(points[i].x + map(noiseVal, 0, 1, -20, 20), 
             points[i].y + map(noiseVal, 0, 1, -20, 20), 
             map(noiseVal, 0, 1, 1, 3));
        rect(points[i].x + map(noiseVal, 0, 1, -30, 30), 
             points[i].y + map(noiseVal, 0, 1, -20, 20), 
             map(noiseVal, 0, 1, 1, 3));
        rect(points[i].x + map(noiseVal, 0, 1, -40, 40), 
             points[i].y + map(noiseVal, 0, 1, -30, 30), 
             map(noiseVal, 0, 1, 1, 3));
      }
    }
  }
}

// Gradient background function
function setGradient(x, y, w, h, c1, c2) {
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg");
}
