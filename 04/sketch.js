
let save;
  // Save canvas for download
  save = createCanvas(windowWidth, windowHeight);

  function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(20); 
    noFill(); // Don't fill the shape
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
  }
  
  function draw() {
    background(255, 200, 0);
  
    for (let i = 0; i < 10; i++) {
      let x = random(width);
      let y = random(height);
      // Update the shape coordinates with mouseX and mouseY
      let x1 = mouseX;
      let y1 = height - 500;
      let x2 = mouseX + 50;
      let y2 = height - 500;
      let x3 = mouseX + 50;
      let y3 = mouseY + 250;
      let x4 = mouseX + 200;
      let y4 = mouseY + 250;
      let x5 = mouseX + 200;
      let y5 = height - 500;
      let x6 = mouseX + 250;
      let y6 = height - 500;
      let x7 = mouseX + 250;
      let y7 = mouseY + 300;
      let x8 = mouseX;
      let y8 = mouseY + 300;
  
      // Draw the modified shape
      fill(0); // Set the fill color to black
      beginShape();
      vertex(x1, y1);
      vertex(x2, y2);
      vertex(x3, y3);
      vertex(x4, y4);
      vertex(x5, y5);
      vertex(x6, y6);
      vertex(x7, y7);
      vertex(x8, y8);
      endShape(CLOSE);
    }
  
    fill(255); // Set the fill color to white
    strokeWeight(0);

for (let i = 0; i < 100; i++) {
  rect(mouseX, mouseY - i * 50, 50); // Generate squares above and below the cursor
  rect(mouseX - i * 50, mouseY, 50); // Generate squares to the left of the cursor
  rect(mouseX, mouseY, 50); // Generate squares to the left of the cursor
  rect(mouseX, mouseY - i * 50, 50); // Generate squares above and below the cursor
  rect(mouseX - i * 50, mouseY-100, 50); // Generate squares to the left of the cursor
  rect(mouseX - i * 50, mouseY-200, 50); // Generate squares to the left of the cursor

}
}
  
  

function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg")
}
