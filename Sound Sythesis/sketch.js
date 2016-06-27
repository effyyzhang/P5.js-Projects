var wave;
var slider;
var button;
var playing = false;

function setup(){
	createCanvas(200,200);
	background(250);
	wave = new p5.Oscillator();
	slider = createSlider(100,1200,440);
	
	wave.setType('sine');
	wave.start();
	wave.amp(0);
	wave.freq(1000);


	button = createButton('Play/Pause');
	button.mousePressed(toggle);
}

function draw() {
	wave.freq(slider.value());
	
	if(playing) {
		background(255,0,255);
	} else {
		background(51);
	}
}

function toggle() {
	if(!playing){
		wave.amp(0.5,1);
    	playing = true;
	} else {
		wave.amp(0,1);
		playing = false;
	}
}