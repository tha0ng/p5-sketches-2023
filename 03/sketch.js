let save;

function setup() {
  save = createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100); // Set color mode to HSB
  frameRate(60);
  save = createCanvas(1200, 1000);
}

function draw() {
  background(360, 100, 100, 50); // Use HSB values for background color

  // Create many "U" letters
  for (let x = 0; x < width; x += 100) {
    for (let y = 0; y < height; y += 5) {
      // Display "U" text
      noStroke();
      let u_x = x + map(noise(x * 0.3, y * 0.01, frameCount * 0.01), 0, 1, 0, 50); // Randomize U's x position with Perlin noise
      let u_y = y + map(noise(x * 0.5, y * 0.01, frameCount * 0.01), 0, 1, 0, 50); // Randomize U's y position with Perlin noise
      textSize(random(10, 80));
      fill(0, random(10), random(80)); // Set text color to white
      text("U", u_x, u_y);
    }
  }

}

function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg");
}
