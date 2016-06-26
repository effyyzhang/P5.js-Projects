
var sound;
var bubbles = [];
var amp;
var button;

function setup() {
  createCanvas(400,400);
  background(50);

  sound = loadSound("assets/sound-sample.mp3", loaded);
  amp = new p5.Amplitude();
  //amp.getLevel;
  

}
function togglePlaying(){
  if(!sound.isPlaying()){
  sound.play();
  //sound.setVolumn(0.3);
  }else{
    sound.pause();
    button.html("play");
  }
  
}

function loaded(){
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
   background(0);
   var vol = amp.getLevel();
   fill(255,0,255);
   ellipse(width/2,height/2,vol*100,vol*100);

}


function Bubble(x,y,r){
  this.x = x;
  this.y = y;
  this.r = r;

  this.display = function(){
    fill(255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.update = function(){
    this.y = this.y + random(-10,10);
    this.x = this.x + random(-10,10);
  }  

}
