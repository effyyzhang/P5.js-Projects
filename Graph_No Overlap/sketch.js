var circles = [];

function setup(){
  createCanvas(640, 360);
  for (var i = 0; i < 50; i++){
    circles.push(new Circle())

  }
}

function draw(){

}

function Circle(x,y,r){
    fill(255,0,125,100);
    ellipse(x,y,r*2,r*2);
}