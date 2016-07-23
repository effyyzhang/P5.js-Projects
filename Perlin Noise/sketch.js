var inc = 0.01;
var pixel;


function setup(){
  createCanvas(400,400);

}

function draw(){
  loadPixels();
  background(51);
  stroke(255);
  noFill();
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++){
      var index = (x + y*width )*4;
      pixels[index] = 255;
      pixels[index+1] = 0;
      pixels[index+2] = 0;
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}
