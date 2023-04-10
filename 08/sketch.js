
let save;

class Box {
  constructor(x, y, z, size, img) {
    this.pos = createVector(x, y, z);
    this.size = size;
    this.angle = 0;
    this.img = img;
    this.texture = null;
  }

  update() {
    // Update the angle of the box based on its position
    this.angle = map(dist(this.pos.x, this.pos.y, 0, 0), 0, width / 2, 0, PI);
  }

  display() {
    if (this.img && !this.texture) {
      // Load the image texture if it hasn't been loaded yet
      this.texture = createGraphics(this.size, this.size);
      this.texture.image(this.img, 0, 0, this.size, this.size);
    }

    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    rotateZ(this.angle);
    texture(this.texture);
    box(this.size);
    pop();
  }
}

let boxSize = 40; // The size of each box
let spacing = 20; // The spacing between boxes
let numBoxes = 10; // The number of boxes in each row/column
let boxes = []; // An array to hold all of the boxes
let rotation = 0; // The rotation of the U letter
let img; // The image to be used as a texture

function preload() {
  // Load the image to be used as a texture
  img = loadImage('Uhexagon.jpeg');
}

function setup() {
  save = createCanvas(1000, 1000, WEBGL);
  rectMode(CENTER);

  // Create all of the boxes and store them in the boxes array
  for (let i = 0; i < numBoxes; i++) {
    for (let j = 0; j < numBoxes; j++) {
      let boxX = (i - numBoxes / 2) * (boxSize + spacing);
      let boxY = (j - numBoxes / 2) * (boxSize + spacing);
      let boxZ = 0;
      let box = new Box(boxX, boxY, boxZ, boxSize, img);
      boxes.push(box);
    }
  }
}

function draw() {
  background(0);
  noStroke();

  // Set the camera position and orientation
  camera(0, 0, 800);
  rotateX(PI / 3);
  rotateY(rotation);
  rotateZ(rotation/2); // rotate around z-axis
  rotateX(rotation/3); // rotate around x-axis

  // Display all of the boxes
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    box.update();
    box.display();
  }

  // Rotate the U letter based on the mouse position
  let mouseDiff = mouseX - width / 2;
  rotation = map(mouseDiff, -width / 2, width / 2, -PI / 2, PI / 2);
}


function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg");
}
