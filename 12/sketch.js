let c;
let font;
let uLetters = [];
let numULetters = 100;
let maxOpacity = 50;

function preload() {
  font = loadFont('AAHA.otf'); // Replace 'your_font.otf' with the name of your desired font file
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(500);
  textAlign(CENTER, CENTER);
  
  // Create and position the central U letter
  let centralULetter = createULetter(0, 0, 255);
  let centralPos = createVector(width/2, height/2);
  centralULetter.position = centralPos;
  uLetters.push(centralULetter);
  
  // Create and position the behind U letters
  let radius = 20;
  let angleStep = TWO_PI / numULetters;
  let angle = 0;
  for (let i = 0; i < numULetters; i++) {
    let x = centralPos.x + radius * cos(angle);
    let y = centralPos.y + radius * sin(angle);
    let opacity = map(i, 0, numULetters-1, maxOpacity, 0);
    let uLetter = createULetter(x, y, opacity);
    uLetters.push(uLetter);
    angle += angleStep;
  }
}

function draw() {
  background(0);
  for (let i = 0; i < uLetters.length; i++) {
    let uLetter = uLetters[i];
    if (i > 0) {
      push();
      translate(uLetter.position.x, uLetter.position.y);
      rotate(random(-PI/24, PI/24));
      uLetter.opacity = map(dist(mouseX, mouseY, uLetter.position.x, uLetter.position.y), 0, 200, uLetter.maxOpacity, 0);
      uLetter.opacity = constrain(uLetter.opacity, 0, uLetter.maxOpacity);
      fill(255, uLetter.opacity);
      text(uLetter.text, 0, 0);
      pop();
    } else {
      fill(random(240,255));
      text(uLetter.text, uLetter.position.x, uLetter.position.y);
    }
  }
}

function createULetter(x, y, opacity) {
  let uLetter = {
    text: 'U',
    position: createVector(x, y),
    maxOpacity: opacity,
    opacity: opacity
  };
  return uLetter;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  saveCanvas(c, "10.png", "png");
}