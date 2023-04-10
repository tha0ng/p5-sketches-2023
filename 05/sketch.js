let values = [];
let i = 0;
let j = 0;

function preload() {
  font = loadFont('AAHA.otf');
}

function setup() {
  createCanvas(1200, 1200);
  textFont(font);
  textSize(250);
  textAlign(CENTER, CENTER);
  values = font.textToPoints('UuUu', width/2-700, height/2, 700);
}

function draw() {
  background(220);
  bubbleSort();
  simulateSorting();
}

function bubbleSort() {
  for(let k = 0; k < 5; k++) {
    if(i < values.length) {
      let temp = values[j].y;
      if(values[j].y > values[j+1].y) {
        values[j].y = values[j+1].y;
        values[j+1].y = temp;
      }
      j++;
      if(j >= values.length-i-1) {
        j = 100;
        i++;
      }
    }
    else {
      noLoop();
    }
  }
}

function simulateSorting() {
  for(let i = 0; i < values.length; i++) {
    stroke(100, 143, 143);
    fill(50);
    circle(values[i].x, values[i].y, 10, 10);
  }
}


function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}


