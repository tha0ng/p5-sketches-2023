

let save;
  // Save canvas for download
  save = createCanvas(windowWidth, windowHeight);
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(0);
  noStroke();
  
  // create a random color for each circle
  let r, g, b;
  
  // draw the U
  for(let i = 0; i < 80; i++){
    r = random(300);
    g = random(255);
    b = random(50);
    fill(r, g, b);
    
  }
   // Create many flowing shapes
 for (let x = 0; x < width; x += 500) {
  for (let y = 0; y < height; y += 200) {
    // Draw shape
    noFill();
    stroke(random(0, 360), random(40, 500), random(50, 300), random(50, 80));
    strokeWeight(random(10, 70));
    beginShape();
  strokeWeight(0); 
  fill(0); // Don't fill the shape
  beginShape(); // Start drawing the shape
  vertex(500, height - 500);
  vertex(550, height - 500);
  vertex(550, height - 250);
  vertex(700, height - 250);
  vertex(700, height - 500);
  vertex(750, height - 500);
  vertex(750, height - 200);
  vertex(500, height - 200);
  endShape(CLOSE); // End drawing the shape
  for (let i = 0; i < 10; i++) {
    let r1 = i * 30;
    let c1 = color(300, random(120+mouseX), random(120+ mouseY), 25);
    fill(c1);
    circle(mouseX,mouseY, r1+ mouseY);

  }
    }
    endShape();
  }
}


function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg")
}


