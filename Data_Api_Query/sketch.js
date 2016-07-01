
var weather;
var api ='http://api.openweathermap.org/data/2.5/weather?q='
//var city ='London,uk'
var ID ='&appid=08094006fe33809ac130834ed8c4e7e0'
var input;


function setup(){
  createCanvas(800,800);
  var button = select ('#Submit');
  input = select('#City');
  button.mousePressed(weatherRequest);

}

function weatherRequest(){

  var url = api+ input.value() + ID;
  loadJSON(url, gotData);

}

function gotData(data){
  //println(data);
  weather = data;

}

function draw(){
  background(0);
  if(weather){
    fill(255);
    ellipse(300,400,weather.main.temp,weather.main.temp);
    ellipse(600,400,weather.main.humidity,weather.main.humidity);
  }
}

