var value = 0;
var egg;
var crack;
var open;
var pan;

function setup() {
  egg = loadImage("./assets/egg.png");
  crack = loadImage("./assets/crack.png");
  open = loadImage("./assets/open.png");
  pan = loadImage("./assets/pan.png");
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  // by defaults equals to 30
  setShakeThreshold(10);
  frameRate(15);
}

function draw() {
  background(0,104,86);

  if (value === 0) {
    textSize(45);
    textAlign(CENTER);
    textFont('Anton');
    fill(255);
    imageMode(CENTER);
    image(egg,windowWidth/2,windowHeight/2, egg.width/2, egg.height/2);
    text('Shake to crack the egg',windowWidth/2,250);
  } else if (value === 1) {
    background(0,104,86);
    imageMode(CENTER);
    image(crack,windowWidth/2,windowHeight/2, crack.width/2, crack.height/2);
    text('Tilt to open the egg',windowWidth/2,250);
  } else if (value === 2) {
    background(0,104,86);
    imageMode(CENTER);
    image(pan,windowWidth/2,map(rotationX,-300,300,1,2000), pan.width/2, pan.height/2);
    text("Here's your pan, have a nice lunch!",windowWidth/2,250);
    image(open,windowWidth/2,map(rotationX,-300,300,700,1200), open.width/2, open.height/2);
  }
}

function deviceShaken() {
  value = 1;
}

function deviceTurned() {
  if (turnAxis === 'X'){
    value = 2;
  }
}
