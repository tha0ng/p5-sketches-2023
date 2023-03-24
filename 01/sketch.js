
let save;
  // Save canvas for download
  save = createCanvas(windowWidth, windowHeight);
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10); 
}

  function draw() {
    background(random(250), random(150), random(100), random(50));
  
    // Create many strokes
    for (let i = 0; i < 100; i++) {
      // Randomize stroke color
      stroke(random(255), random(35), random(255));
      // Randomize stroke direction and position
      let x = random(width);
      let y = random(height);
      let angle = random(TWO_PI);
      let length = random(5, 20);
  
      // Draw stroke
      push();
      translate(x, y);
      rotate(angle);
      strokeWeight(random(2, 5));
      line(0, 0, length, 0);
      pop();
    }
  

  // Create many "U" letters
  for (let x = 0; x < width; x += 500) {
    for (let y = 0; y < height; y += 150) {
      // Draw "U" letter
      noFill();
      translate(mouseX, mouseY);
      stroke(random(255), random(25), random(255));
      strokeWeight(random(5, 50));
      ellipseMode(CENTER);
      push();
      arc(50, -25, 100, 200, PI, 0);
      pop();

    }
  }
}

function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg")
}