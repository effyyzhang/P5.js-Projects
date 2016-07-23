var x = 0;
var y = 200;
var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=5980089575bdaabe553199f1f769e780';
var input;
var units = '&cnt=10&units=metric';

function setup() {
  createCanvas(400, 400);
  var button = select('#submit');
  button.mousePressed(weatherAsk);
  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
  x = 0;
}
function draw() {
  background(255);
  if (weather) {
    for (var i = 0; i < weather.list.length; i++){
      var numClouds = data.list[i].clouds;
      ellipse(i*100, height/2, numClouds, numClouds);
     text("day "+i, i*100, height/2);

    }

  }

}
