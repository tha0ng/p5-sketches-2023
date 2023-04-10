let c;
let message = 'U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U U';
let messageX;
const xSpeed = 3;
const ySpeed = 0.05;
const amplitude = 100;
const verticalLetterSpacing = 30;
let font;

function preload() {
  font = loadFont('AAHA.otf');
}

function setup() {
  c = createCanvas(1200, 1000);
  textFont(font);

  messageX = width;
}

function draw() {
  background(200, mouseY,mouseX);
  colorMode(HSB, 255)

  fill(mouseX, 200, 250,100);

  textSize(mouseX);

  for (let i = 0; i < message.length; i++) {
    const letterX = messageX + textWidth(message.substring(0, i));

    const letterOffset = i * verticalLetterSpacing;
    const letterY = height / 2 +
      sin((frameCount - letterOffset) * ySpeed) * amplitude;

    text(message[i], letterX, letterY);
  }

  messageX -= xSpeed;
  if (messageX < - textWidth(message)) {
    messageX = width ;
  }


}

function mousePressed() {
  saveCanvas(save, "10.jpg", "jpg");
}
