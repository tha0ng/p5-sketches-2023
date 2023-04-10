let pts;
let caslon;
let time = 0;

function preload() {
  caslon = loadFont('AAHA.otf');
}

function setup() {
  createCanvas(1200, 1000);
  
  pts = caslon.textToPoints('U', 0, 0, 500, {
    sampleFactor: 55,
    simplifyThreshold: 0.02
  });
  frameRate(30);
}

function draw() {
  background(220);
  
  translate(400, 500);
  fill(255, 0, 0);
  noStroke();
  for (let i = 0; i < pts.length; i++) {
    fill(i % 255);
    let x = pts[i].x + noise(pts[i].x / 10, pts[i].y / 100, time / 1000) * 50 - 25;
    let y = pts[i].y + noise(pts[i].x / 1000, pts[i].y / 10, time / 100) * 50 - 25;
    ellipse(x, y, 5, 5); 
  }
  
  time += 70; // Increase time to animate the noise over time
}

// Save art as jpg.
function keyTyped() {
  if (key === "s") {
    save("myCanvas.jpg");
  }
}

