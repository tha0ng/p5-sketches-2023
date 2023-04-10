let save;
let ourFont;
let points;

function preload() {
  ourFont = loadFont('AAHA.otf');
  frameRate(30);
}

function setup() {
  save = createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(220);
  noStroke();
  points = ourFont.textToPoints("U", width/2 - 300, height/2 + 200, 600);
  colorMode(HSB, 255);

  textSize(400)
  textFont(ourFont);

  for (let x = 0; x < width; x += 500) {
    for (let y = 0; y < height; y += 200) {
      // Draw shape
      noFill();
      stroke(random(100, 255), random(140, 200), 250,  250);
      strokeWeight(random(10, 70));
      beginShape();
      strokeWeight(0); 
      fill(0); 
   

      // Draw U shape as text
      fill(random(100, 360), random(140, 200), random(100, 400), random(50, 80));
      noStroke();
      textSize(500);
      text("U", x+100, y+200);

      // Apply Perlin noise to point positions
      for (let i = 0; i < points.length; i++) {
        let offset = map(noise(x/100, y/100, i/100, frameCount/50), 0, 1, -20, 20);
        let px = points[i].x + offset;
        let py = points[i].y + offset;
        ellipse(px + x, py + y, 5, 5);
      }
    }
  }
}

function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg");
}

