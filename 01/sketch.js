let outFont;
let save;
  // Save canvas for download
  save = createCanvas(windowWidth, windowHeight);

  
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2); 
}

function draw() {
  background(220);

  // Create many strokes
  for (let i = 0; i < 100; i++) {
    // Randomize stroke color
    stroke(random(255), random(350), random(255));
    // Randomize stroke direction and position
    let x = random(width);
    let y = random(height);
    let angle = random(TWO_PI);
    let length = random(50, 20);

    // Draw stroke
    push();
    translate(x, y);
    rotate(angle);
    strokeWeight(random(5, 15));
    arc(5, -25, 10, 20, PI, 0);
    line(0, 0, length, 0);
    pop();
  }


  // Create a larger "U" shape with many "U" letters
  for (let x = 0; x < width; x += 200) {
    for (let y = 0; y < height; y += 200) {
      // Draw "U" letter
noFill();
stroke(random(255), random(35), random(255));
strokeWeight(random(5, 50));
push();
translate(x + 100, y + 150);

arc(0, -200, 100, 150, 100, PI);
pop();
    }
  }
}

function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg")
}




