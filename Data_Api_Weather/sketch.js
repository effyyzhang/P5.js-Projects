var x = 0;
var y = 200;
var weather;
var apiKey = '&APPID=5980089575bdaabe553199f1f769e780';
var api = 'http://api.openweathermap.org/data/2.5/forecast/weather?q='
var extras = '&cnt=10&units=metric';
var input;

function setup() {
 createCanvas(windowWidth,windowHeight);
 var button = select('#submit');
 button.mousePressed(weatherAsk);
 input = select('#city');
}

function weatherAsk() {
 var url = api + input.value() + apiKey + extras;
 loadJSON(url, gotData);
}

function gotData(data) {
 weather = data;
 x = 0;
}

function draw() {
 background(255);
 fill(51);
 noStroke();
 if (weather) {
   for (var i = 0; i < weather.list.length; i++) {
     var numClouds = weather.list[i].clouds.all;
     ellipse(i*100, height/2, numClouds, numClouds);
     text("day "+i, i*100, height/2);
   }

 }
}
