let ourFont;
let c;

function preload() {
  font = loadFont('AAHA.otf');
}

function setup() {
  c = createCanvas(1200, 1000, WEBGL);
  ourFont = loadFont('AAHA.otf');
  colorMode(HSB, 255);
  strokeWeight(50);
}

function draw() {
  background(250);
  let radius = width * 0.5;

  //drag to move the world.
  orbitControl();

  textFont(ourFont);
  textSize(50);
  textAlign(CENTER, CENTER);
  
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let a = (j / 12) * PI;
      let b = (i / 12) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
      if (j % 2 === 0) {
        let randomHue = random(0, 255);
        let randomSaturation = random(190, 250);
        let randomBrightness = random(190, 250);
        fill(randomHue, randomSaturation, randomBrightness);
        stroke(randomHue, randomSaturation, randomBrightness);
        textSize(300);
        text('U', 0, 0);
      } else {
        let noiseVal = noise(i / 10, j / 10, frameCount / 100);
        let hue = map(noiseVal, 0, 1, 150, 220);
        fill(hue, 200, 230);
        stroke(hue, 200, 230);
        textSize(300);
        text('U', 0, 0);
      }
      pop();
    }
  }
}

function keyTyped() {
  if (key === 'Enter') {
    saveCanvas(c, "10.png", "png");
  }
}
