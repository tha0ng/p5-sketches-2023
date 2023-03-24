let save;
  // Save canvas for download
  save = createCanvas(windowWidth, windowHeight);
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}





function draw() {
  // Draw the circle and fill it with yellow
  let c1 = color(random(205), random(255), random(25));
  let c2 = color(random(255), random(105), random(255));
  let c = lerpColor(c1, c2, mouseX/width);
  fill(c); // set fill color to yellow
  strokeWeight(0);
  circle(620, 350, mouseX);


  // Define U shape parameters
const uWidth = 250;
const uHeight = 500;
const uSpacing = 250;
const uXOffset = width / 2 - 150;

// Draw U shapes
stroke(255);
strokeWeight(10);
noFill();
for (let i = -2; i <= 2; i++) {
  beginShape();
  vertex(uXOffset + uSpacing * i, height - uHeight);
  vertex(uXOffset + uSpacing * i + uWidth / 6, height - uHeight);
  vertex(uXOffset + uSpacing * i + uWidth / 6, height - uHeight / 2+200);
  vertex(uXOffset + uSpacing * i + uWidth * 5 / 6, height - uHeight / 2+200);
  vertex(uXOffset + uSpacing * i + uWidth * 5 / 6, height - uHeight);
  vertex(uXOffset + uSpacing * i + uWidth, height - uHeight);
  vertex(uXOffset + uSpacing * i + uWidth, height);
  vertex(uXOffset + uSpacing * i, height);
  endShape(CLOSE);
}

}

function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg")
}








  // // Draw the center "U" letter
  // stroke(255); // Set stroke color to white
  // strokeWeight(20); // Set stroke width to 10 pixels
  // noFill(); // Don't fill the shape
  // beginShape(); // Start drawing the shape
  // vertex(500, height - 500);
  // vertex(550, height - 500);
  // vertex(550, height - 250);
  // vertex(700, height - 250);
  // vertex(700, height - 500);
  // vertex(750, height - 500);
  // vertex(750, height - 200);
  // vertex(500, height - 200);
  // endShape(CLOSE); // End drawing the shape


  // // Draw the left "U" letter
  // stroke(255); // Set stroke color to white
  // strokeWeight(20); // Set stroke width to 10 pixels
  // noFill(); // Don't fill the shape
  // beginShape(); // Start drawing the shape
  // vertex(200, height - 500);
  // vertex(250, height - 500);
  // vertex(250, height - 250);
  // vertex(400, height - 250);
  // vertex(400, height - 500);
  // vertex(450, height - 500);
  // vertex(450, height - 200);
  // vertex(200, height - 200);
  // endShape(CLOSE); // End drawing the shape
  
  // // Draw the far left "U" letter
  // stroke(255); // Set stroke color to white
  // strokeWeight(20); // Set stroke width to 10 pixels
  // noFill(); // Don't fill the shape
  // beginShape(); // Start drawing the shape
  // vertex(-100, height - 500);
  // vertex(-150, height - 500);
  // vertex(-150, height - 250);
  // vertex(100, height - 250);
  // vertex(100, height - 500);
  // vertex(150, height - 500);
  // vertex(150, height - 200);
  // vertex(-100, height - 200);
  // endShape(CLOSE); // End drawing the shape

  //  // Draw the right "U" letter
  //  stroke(255); // Set stroke color to white
  //  strokeWeight(20); // Set stroke width to 10 pixels
  //  noFill(); // Don't fill the shape
  //  beginShape(); // Start drawing the shape
  //  vertex(800, height - 500);
  //  vertex(850, height - 500);
  //  vertex(850, height - 250);
  //  vertex(1000, height - 250);
  //  vertex(1000, height - 500);
  //  vertex(1050, height - 500);
  //  vertex(1050, height - 200);
  //  vertex(800, height - 200);
  //  endShape(CLOSE); // End drawing the shape

  //  // Draw the far right "U" letter
  //  stroke(255); // Set stroke color to white
  //  strokeWeight(20); // Set stroke width to 10 pixels
  //  noFill(); // Don't fill the shape
  //  beginShape(); // Start drawing the shape
  //  vertex(1100, height - 500);
  //  vertex(1150, height - 500);
  //  vertex(1150, height - 250);
  //  vertex(1300, height - 250);
  //  vertex(1300, height - 500);
  //  vertex(1350, height - 500);
  //  vertex(1350, height - 200);
  //  vertex(1100, height - 200);
  //  endShape(CLOSE); // End drawing the shape