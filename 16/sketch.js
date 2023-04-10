let pts;
let caslon;

function preload(){
  caslon = loadFont('AAHA.otf');
}

function setup() {
  createCanvas(1200, 1000);
  
  pts = caslon.textToPoints('U', 10, 0, 520,{
    sampleFactor: 1,
    simplifyThreshold: 0
  });
  
  // for(let i =0; i<pts.length; 
}

function draw() {
  background(0);
  
  translate(400, 600);
  beginShape(POINTS);
  stroke(10,200,255);
  for(let i =0; i< pts.length; i++){
   vertex(pts[i].x + sin(frameCount*0.1 + pts[i].y*0.3)*20, pts[i].y);
  }
  endShape();
}

function mousePressed() {
  saveCanvas(c, "10.png", "png");
}