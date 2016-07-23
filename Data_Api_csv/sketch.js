var data;
var homeRuns = [];
var rbi = [];

function preload(){
  data = loadTable("libraries/ortiz.csv");

}
function setup(){
  createCanvas(480,120);
    homeRuns = data.getColumn(1);
    rbi = data.getColumn(2);



}
function draw(){
    noFill();
  background(200);
  line(20,100,20,20);
  line(20,100,460,100);
  for(var i=0; i<homeRuns.length; i++){
    var x = map(i,0, homeRuns.length-1, 20, 460);
    line(x,20,x,100);
  }

  beginShape();
  for(var i = 0; i < homeRuns.length; i++) {
    var x = map(i, 0, homeRuns.length-1, 20, 460);
    var y = map(homeRuns[i],0,max(homeRuns), 100, 20);
    vertex(x,y);
  }
  endShape();

  beginShape();
  for(var i = 0; i < rbi.length; i++) {
    var x = map(i, 0, rbi.length-1, 20, 460);
    var y = map(rbi[i],0,max(rbi), 100, 20);
    vertex(x,y);
  }
  endShape();


print(homeRuns.length);
noLoop();

}
