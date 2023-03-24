var tileCountX = 10;
var tileCountY = 10;
var count = 0;
var colorStep = 6;
var endSize = 0;
var stepSize = 30;
var actRandomSeed = 0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  //colorMode(HSB, 360, 100, 100); 
  smooth();
  noStroke();
  background(0); 
  randomSeed(actRandomSeed);
  stepSize = mouseX/1;
  endSize = mouseY/10;
  for (var gridY=0; gridY<= tileCountY; gridY++) {
    for (var gridX=0; gridX<= tileCountX; gridX++) {  

      // kachelgrößen und positionen
      var tileWidth = width / tileCountX;
      var tileHeight = height / tileCountY;
      var posX = tileWidth*gridX;
      var posY = tileHeight*gridY;
      switch(int(random(4))) {
      case 0: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var size = map(i, 0, stepSize, tileHeight, endSize);
          fill(random(256), random(256), random(256));
          rect(posX+i, posY, size, size*2);
        }
        break;
      case 1: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var size = map(i, 0, stepSize, tileWidth, endSize);
          fill(random(256), random(256), random(256));
          rect(posX, posY+i, size*2, size);
        }
        break;
      case 2: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var size = map(i, 0, stepSize, tileHeight, endSize);
          fill(random(256), random(256), random(256));
          rect(posX-i, posY, size, size*2);
        }
        break;
      case 3: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var size = map(i, 0, stepSize, tileWidth, endSize);
          fill(random(256), random(256), random(256));
          rect(posX, posY-i, size*2, size);
        }
        break;
      }
    }
  }
} 

function mousePressed() {
  actRandomSeed = int(random(100000));
}

function keyTyped(){
  if (key == 's' || key == 'S') save("P_2_1_3_05.png");
}
