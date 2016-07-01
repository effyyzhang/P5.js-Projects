
var lineX = 0;
var url ="http://api.open-notify.org/iss-now.json";
var issX, issY;


function setup(){
  createCanvas(600,600);
  
  setInterval(requestISS, 1000);
}

function requestISS(){
  loadJSON(url,gotData,'jsonp');
}


function gotData(data){
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;
  issX = map(lat, -45, 0, 0, width);
  issY = map(long, 150, 180, 0, height);
}

function draw(){
  background(51);
  stroke(255);
  fill(255);
  ellipse(issX, issY, 24, 24);
  line(lineX, 0, lineX, height);
  lineX = lineX +5;
  if(lineX>width){
    lineX = 0;
  }

}

