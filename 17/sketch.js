const rows = 10;
const columns = 10;
const fadeSpeed = 100;
let cells = [];
let font;
let time = 0;
let cellSize;
let c;

function preload() {
  font = loadFont('AAHA.otf');
}

function setup() {
  c = createCanvas(1200, 1000);
  textFont(font);
  textSize(90);
  cellSize = width / columns;
}

function draw() {
  background(0);
  for (let r = 0; r < rows; r++) {
    cells[r] = [];
    for (let c = 0; c < columns; c++) {
      cells[r][c] = random(0,155);
    }
  }

  if (mouseX > 0 && mouseX < width &&
      mouseY > 0 && mouseY < height) {
    const mouseR = floor(rows * (mouseY / height));
    const mouseC = floor(columns * (mouseX / width));
    cells[mouseR][mouseC] = 255;
  }

  time += 0.0005;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      cells[r][c] -= fadeSpeed;
      cells[r][c] = constrain(cells[r][c], 0, 255);

      const y = height * (r / rows);
      const x = width * (c / columns);
      const xNoise = map(noise(c * 0.1, time), 0, 1, -cellSize / 2, cellSize / 2);
      const yNoise = map(noise(r * 0.1, time), 0, 1, -cellSize / 2, cellSize / 2);

      const distanceFromMouse = dist(mouseX, mouseY, x + cellSize/2 + xNoise, y + cellSize/2 + yNoise);
      const maxDistance = cellSize * 5;
      const scaleFactor = map(distanceFromMouse, 0, maxDistance, 0.5, 1.5);
      
      push();
      translate(x + cellSize/2 + xNoise, y + cellSize/2 + yNoise);
      scale(scaleFactor);
      fill(255, 100,  cells[r][c]);
      
      text("U", 0, 0);
      pop();
    }
  }
}

function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg");
}
