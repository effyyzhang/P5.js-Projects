
var video;
var button;
var snapshots=[];
var counter = 0;
var go = false;

function setup() {
  frameRate(30);
  createCanvas(640, 480);
  background(51);
  video = createCapture(VIDEO, ready);
  video.size(640, 480);
}


function ready(){
  go = true;
}

function draw() {
  if (go){
    snapshots[counter] = video.get();
    counter ++;
    if (counter == 71){
      counter = 0;
    };
  }
  var w = 80;
  var h = 60;
  var x = 0;
  var y = 0;
  

  for (var i = 0; i < snapshots.length; i++){
    var index = (i+frameCount)%snapshots.length;
    image(snapshots[i],x,y,w,h);
    x = x + w;
    if(x> width){
      x = 0;
      y = y+h;
    }
  }


}


