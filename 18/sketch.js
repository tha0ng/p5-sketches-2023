const rows = 10;
const columns = 10;
const fadeSpeed = 100;
let cells = [];
let font;
let c;

function preload() {
  font = loadFont('AAHA.otf');
}

function setup() {
  c = createCanvas(1200, 1000);
  textFont(font);
  

  for (let r = 0; r < rows; r++) {
    cells[r] = [];
    for (let c = 0; c < columns; c++) {
      cells[r][c] = random(255);
    }
  }
}

function draw() {
  const cellWidth = width / columns;
  const cellHeight = height / rows;
  textSize(random(30,100));
  if (mouseX > 0 && mouseX < width &&
      mouseY > 0 && mouseY < height) {
    const mouseR = floor(rows * (mouseY / height));
    const mouseC = floor(columns * (mouseX / width));
    cells[mouseR][mouseC] = 255;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      cells[r][c] -= fadeSpeed;
      cells[r][c] = constrain(cells[r][c], 0, 255);

      const y = height * (r / rows);
      const x = width * (c / columns);

      fill(random(255), 0, 128, cells[r][c]);
      text("U", x + cellWidth/2, y + cellHeight/2);
    }
  }
}


function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg");
}
