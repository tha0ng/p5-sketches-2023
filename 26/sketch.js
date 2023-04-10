let pts;
let caslon;

function preload() {
  caslon = loadFont('AAHA.otf');
}

function setup() {
  createCanvas(1200, 1000);
  
  pts = caslon.textToPoints('U', 0, 0, 200, {
    sampleFactor: 10,
    simplifyThreshold: 0
  });
}

function draw() {
  background(220);
  
  translate(400, 500);
  fill(255, 0, 0);
  noStroke();
  
  let time = millis() * 0.001;
  
  for (let i = 0; i < pts.length; i++) {
    let x = pts[i].x + 300 * noise(time + i * 0.01);
    let y = pts[i].y + 300 * noise(time + i * 0.01 + 1000);
    
    fill(noise(time + i * 0.01) * 255, noise(time + i * 0.01 + 1000) * 255, noise(time + i * 0.01 + 2000) * 255);
    ellipse(x, y, 4, 4);
  }
}

function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}
