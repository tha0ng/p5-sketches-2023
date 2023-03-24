let save;
  // Save canvas for download
  save = createCanvas(windowWidth, windowHeight);

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0.5);
  colorMode(HSB, 360, 100, 100, 100); 

    // Set random gradient colors
    c1 = color(random(140, 150), random(30, 40), random(150, 200));
    c2 = color(random(300, 305), random(30, 40), random(200, 255));
}

function draw() {
    // Create gradient background
    setGradient(0, 0, width, height, c1, c2);

  // Create many flowing shapes
  for (let x = 0; x < width; x += 200) {
    for (let y = 0; y < height; y += 200) {
      // Draw shape
      fill(c2);
      stroke(random(0, 360), random(40, 500), random(50, 300), random(50, 80));
      strokeWeight(random(mouseX - 10, mouseY));
      beginShape();
      for (let i = 0; i < 10; i++) {
        vertex(500, height - 500);
        vertex(550, height - 500);
        vertex(550, height - 250);
        vertex(700, height - 250);
        vertex(700, height - 500);
        vertex(750, height - 500);
        vertex(750, height - 200);
        vertex(500, height - 200);
      }
      endShape();
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
  saveCanvas(save, "10.jpg", "jpg")
}
