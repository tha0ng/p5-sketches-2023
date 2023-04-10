let pts;
let caslon;

function preload(){
  caslon = loadFont('AAHA.otf');
}

function setup() {
  createCanvas(1200, 1200);
  
  pts = caslon.textToPoints('U', 0, 0,620,{
    sampleFactor: 0.25,
    simplifyThreshold: 0
  });

}

function draw() {
  background(220);
  translate(400, 600);
  stroke(100,255)
  for(let i =0; i< pts.length; i++){
   line(pts[i].x, pts[i].y, pts[i].x + random(-1,1), pts[i].y + random(-30,15));
  }
  
}

function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}
