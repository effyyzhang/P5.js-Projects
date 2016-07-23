var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var input;


function setup(){
  noCanvas();
  var button = select('#submit');
  button.mousePressed(searchGif);
  input = select('#gifid');
}

function searchGif(){
  var url = api + apiKey + "&q=" + input.value();
  console.log(url);
  loadJSON(url, gotData);
  setInterval(gotData, 1000);
}
//
function gotData(giphy){
  createImg(giphy.data[0].images.original.url);
}
