let pts;
let caslon;

function preload(){
  caslon = loadFont('AAHA.otf');
}

function setup() {
  createCanvas(1200, 1200);
  
  pts = caslon.textToPoints('U', 0, 0, 720,{
    sampleFactor: 0.5,
    simplifyThreshold: 0
  });
  

}

function draw() {
  background(220);
  
  
  translate(380, 600);
	noFill();
  stroke(mouseX,random(50-150),random(100,150));
  let rotX = sin(frameCount/20) * 30;
  let rotY = cos(frameCount/20) * 50;
  for(let i =0; i< pts.length; i++){      
    line(pts[i].x, pts[i].y, pts[i].x - rotX, pts[i].y - rotY);
  }
}

function keyTyped() {
  if (key === 's') {
    save('myCanvas.jpg');
  }
}
