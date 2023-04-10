let morpher;
let msg = [];
let myFont;
let snow;

function preload() {
  myFont = loadFont("AAHA.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  msg.push("U");
  msg.push("u");
  colorMode(HSB, 255)


  morpher = new morphMaker();
  //snow = new snowStorm();
  strokeCap(ROUND);
  strokeWeight(60)
  background(100, 255);
}

function draw() {
  background(190, 80, 100);
frameRate(60);

  morpher.update();
  //snow.update();
}

function morphMaker() {
  this.size = 50;
  this.speed = 0.1;
  this.close = 0.5;
  this.msgswitch = 10;
  this.offset = random(10);
  this.dart = [];
  this.timeIs = "";
  this.dateIs = "";
  
  let dartSize = 100;

  
  /// Setup the moving points, increase their scale,
  /// and set to center.
  let centerWidth = width / 2;
  for (let i = 0; i < dartSize; i++) {
    this.dart.push(createVector(this.size,this.size));
    this.dart[i].x += centerWidth;
    this.dart[i].y += height / 2;
  }
  /// Setup the target points, increase their scale,
  /// and center-justify locations.
  this.target = myFont.textToPoints(msg[0], 0, 0, 5, {
    sampleFactor: 10,
    simplifyThreshold: 0,
  });
  
  /// Scale up the target points.
  /// Find the width of the target output.
  let centerX = 0;
  for (let i = 0; i < this.target.length; i++) {
    this.target[i].x *= this.size;
    this.target[i].y *= this.size;
    if (centerX < this.target[i].x) {
      centerX = this.target[i].x;
    }
  }
  /// Center-justify the target output.
  centerWidth = width / 2 - centerX / 2;
  for (let i = 0; i < this.target.length; i++) {
    this.target[i].x += centerWidth;
    this.target[i].y += height / 2;
  }

  
  /// Animate the morphing object.
  /// Switch text and cycle through messages.
  /// Repeat processes.
  this.update = function () {
    this.offset += random(0.02, 0.1);
    for (let i = 0; i < this.dart.length; i++) {
      let findi = floor(
        map(i, 0, this.dart.length - 1, 0, this.target.length - 1)
      );

      if (i > 0) {
        let dlen = dist(
          this.dart[i].x,
          this.dart[i].y,
          this.dart[i - 1].x,
          this.dart[i - 1].y
        );
        if (dlen < this.size * random(0.8, 1.5)) {
          let colr = map(
            noise((i + random(50, 1000)) * random(0.01, 0.1), frameCount * random(0.01, 0.1)),
            0,
            1,
            -50,
            random(20)
          );
          stroke(random(25-colr, 25+colr), 105, random(100, 255));
          strokeWeight(random(1, 3));
          if (noise(i * random(0.01, 0.1), this.offset) < random(0.2, 0.8)) {
            stroke(random(20, 255),random(100), random(200, 255));
            strokeWeight(random(20, 40));
          }

          line(
            this.dart[i].x,
            this.dart[i].y,
            this.dart[i - 1].x,
            this.dart[i - 1].y
          );
        }
      }

      this.dart[i].x = lerp(
        this.dart[i].x,
        this.target[findi].x,
        random(0.01, 0.2)
      );
      this.dart[i].y = lerp(
        this.dart[i].y,
        this.target[findi].y,
        random(0.01, 0.2)
      );
      let dlen = dist(
        this.dart[i].x,
        this.dart[i].y,
        this.target[findi].x,
        this.target[findi].y
      );
      if (i === this.dart.length - 1) {
        if (dlen < this.close * random(0.5, 1.5)) {
          this.restart();
        }
      }

      if (noise((i + random(50, 250)) * random(0.001, 0.5), this.offset) < random(0.2, 0.8)) {
        if (random() < 0.01) {
          let sparkz = random(0, 1);
          for (n = 0; n < 10; n++) {
            push();
            translate(this.dart[i].x, this.dart[i].y);
            let Lrnd = random(-this.size * sparkz, 0);
            let Rrnd = random(0, this.size * sparkz);
            let rotrnd = random(-PI, PI);
            rotate(rotrnd);
            stroke(random(50, 150), random(100, 200));
            strokeWeight(random(50, 100));
            line(Lrnd, 0, Rrnd, 0);
            pop();
          }
        }
      }
    }
  };


  /// Switch text lines in the message list.
  /// Test for date, time display message.
  /// Get date/time, if needed.
  /// Setup target points with new text.
  /// Return to update method with new target locations.
  this.restart = function () {
    this.msgswitch += 1;
    this.offset = random(1000);
    if (this.msgswitch > msg.length - 1) {
      this.msgswitch = 0;
    }

    let m = msg[this.msgswitch];
    if (m === "CLOCK") {
      this.readClock();
      m = this.timeIs;
    }
    if (m === "DATE") {
      this.readDate();
      m = this.dateIs;
    }
    this.target = myFont.textToPoints(m, 0, 0, 10, {
      sampleFactor: 2,
      simplifyThreshold: 0.0,
    });
    
    let centerX = 0;
    let centerY = 0;
    for (let i = 0; i < this.target.length; i++) {
      this.target[i].x *= this.size;
      this.target[i].y *= this.size;
      if (centerX < this.target[i].x) {
        centerX = this.target[i].x;
      }
      if (centerY > this.target[i].y) {
        centerY = this.target[i].y;
      }
    }

    let centerWidth = random(0,width-centerX);
    let centerHeight = random(centerY * -2, height + centerY);
    for (let i = 0; i < this.target.length; i++) {
      this.target[i].x += centerWidth;
      this.target[i].y += centerHeight;
    }
  };

  /// Format raw time data into text string.
  this.readClock = function () {
    let sec = str(0);
    let min = str(0);
    let hou = str(0);
    if (second() < 10) {
      sec += str(second());
    } else {
      sec = str(second());
    }
    if (minute() < 10) {
      min += str(minute());
    } else {
      min = str(minute());
    }
    if (hour() > 12) {
      hou = str(hour() - 12);
    } else {
      hou = str(hour());
    }
    if (hou === "0") {
      hou = "12";
    }
    let mer = "";
    if (hour() < 11) {
      mer = "AM";
    } else {
      mer = "PM";
    }
    this.timeIs = hou + char(58) + min + " " + mer;
  };
  
  /// Format numerical date into text string.
  this.readDate = function () {
    let mnth = month();
    let mname = [
      "JANUARY",
      "FEBRARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];
    let dy = day();
    this.dateIs = mname[mnth - 1] + " " + dy;
  };
}


function snowStorm() {
  this.pos = []; /// Each flake's location
  this.vel = []; /// Each flake's speed (related to scale).
  this.size = []; /// The flake's size (related to distance).
  this.flow = []; /// Adds a generalized noise movement
  this.breeze = []; /// Adds a wind force using noise
  this.rot = []; /// Spin the snowflakes
  this.yoff = []; /// Each flake's unique noise value
  let dense = 350; /// How many flakes
  let sizeset = 0; /// Set the size based on order in array.
  
  for (let i = 0; i < dense; i++) {
    this.yoff.push(random(1000));
    this.pos.push(createVector(random(width),random(height)));
    
    /// Set the size using lerp.  This will make more small
    /// flakes with fewer large ones to add depth to the scene.
    sizeset = lerp(sizeset,5,0.1);
    this.size.push(7-sizeset);
    
    /// Smaller flakes are in the distance, and should fall
    /// slower to maintain perspective.  Set velocities to scale.
    this.vel.push(createVector(0,this.size[i])); 
    this.vel[i].mult(2.25);
    
    /// Each flake will fall in a general direction plus
    /// each flake has a unique deviation.  This simulates how
    /// aerodynamics disturb the constant rate of descent.
    this.flow.push(0);
    this.breeze.push(random(0.75));
    this.rot.push(random(-PI,PI));
  }
    
  this.update = function() {
    for (let i = 0; i < dense; i++) {
      this.yoff[i] += 0.05;
      this.pos[i].add(this.vel[i]);
      
      /// Generate common movement.
      this.flow[i] = map(noise((i+1)*0.1,
                               this.yoff[i],
                           frameCount*0.01),
                         0,1,
                         -this.size[i]*4,
                         this.size[i]*9);
      
      /// Generate unique rotation.
      this.rot[i] =  map(noise(this.yoff[i]*0.1,
                           frameCount*0.00001),
                         0,1,
                         -TWO_PI,
                         TWO_PI);
      
      /// Provide for left or right wind force.
      let switchmove = map(noise(this.yoff[i]*0.1,
                                 frameCount*0.005),
                           0,1,
                           -3,5);
      /// Applies scale to wind force.
      let move = map(this.size[i],1,5,0.1,2);
      move *= switchmove;
      
      /// Accumulate the wind force.
      this.pos[i].x += move;
      

      this.bounds(i);
      
      push();
      /// Brighter colors in front (large flakes),
      /// dimmer colors in back (small flakes).
      let scol = map(this.size[i],1,5,64,255);
      stroke(scol,150);
      // stroke(0,scol,scol,150);
      
      
      push();
      strokeWeight(this.size[i]);
      translate(this.pos[i].x+this.flow[i],
            this.pos[i].y+this.flow[i]);
      rotate(this.rot[i]);
      
      /// Change the shape of the snowflakes.
      let flip = map(this.rot[i],-TWO_PI,TWO_PI,
                     -this.size[i]*4,
                     this.size[i]*4);
      
      let scale = this.size[i];
      line(-scale-flip,0,
           scale+flip,0);
      line(0,scale+flip,
           0,-scale-flip);
      line(scale,scale,
           -scale,-scale);
      line(scale,-scale,
           -scale,scale);
      pop();
      
      pop();
      
    }
  }
  
  this.bounds = function(i) {
    /// Reset to top or wrap-around when
    /// out-of-bounds.
    /// Keep current size, and factor velocity.
    
    if (this.pos[i].y > height) {
      this.pos[i] = createVector(random(width),0);
      this.vel[i] = createVector(0,this.size[i]);                  
      this.vel[i].mult(1.25);
    }
    if (this.pos[i].x > width) {
      this.pos[i].x = 0;
    }
    if (this.pos[i].x < 0) {
      this.pos[i].x = width;
    }
  }
  
}


/// Provide a way to view the output in full screen
/// mode.  Click the canvas to switch modes.
function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function keyTyped() {
  if (key === 'Enter') {
    saveCanvas(c, "10.png", "png");
  }
}
