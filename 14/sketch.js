let c;
let ourFont;
let points;


function preload() {
    ourFont = loadFont('AAHA.otf');
    frameRate(10);
}

function setup() {
   
    c = createCanvas(1000,1000)
    points = ourFont.textToPoints("U",500,600,600);
    
    colorMode(HSB,255);

    textSize(400)
    textFont(ourFont);
    


    noStroke();

}

function draw() {

 
  for(let i=0; i<points.length; i++) {
    fill(random(100,250),200,220)
    circle(points[i].x+random(-60,60), points[i].y+random(-50,50),random(1,30))
    
}
    let mapping = map(mouseX, 0, 1000, 0, 255)
    fill(mapping,255,255)
    textSize(mouseY/10)
}

function mousePressed() {
    saveCanvas(c, "10.png", "png")
}