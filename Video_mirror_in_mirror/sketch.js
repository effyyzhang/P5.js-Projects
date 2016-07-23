
var mirror1;
var back;
var front;

var vScale = 8;

function setup() {
  createCanvas(640, 480);
  mirror1 = createCapture(mirror1);
  mirror1.size(width/vScale, height/vScale);

  createCanvas(640, 480);
  mirror1 = createCapture(mirror1);
  mirror1.size(width/vScale, height/vScale);
  //back.child(mirror1);
}

function draw() {
  background(51);

  mirror1.loadPixels();
  loadPixels();

  for (var y = 0; y < mirror1.height; y++) {
    for (var x = 0; x < mirror1.width; x++) {
      var index = (mirror1.width - x + 1 + (y * mirror1.width))*4;
      var r = mirror1.pixels[index+0];
      var g = mirror1.pixels[index+1];
      var b = mirror1.pixels[index+2];
      var bright = (r+g+b)/3;
      var w = map(bright, 0, 255, 0, vScale);
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(x*vScale, y*vScale, w, w);

    }
  }
 
}