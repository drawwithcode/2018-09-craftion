var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiY3JhZnRpb24iLCJhIjoiY2pvaDFhNjd2MGw3eTNwcGp3dzF4cjJnbyJ9.A56r5OjYzH5cl6vn3Pi-dQ');
var options = {
	lat: 0,
	lng: 0,
	zoom: 8,
	style: 'mapbox://styles/craftion/cjovp9kw3b3o52sl805grn5ab',
	pitch: 50
}
var myImage;
var mySong;
var volume;
var analyzer;
function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
  myImage = loadImage("./assets/here.png");
  mySong = loadSound("./assets/dr-tumi-you-are-here.mp3");

}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);

	options.lat = myLoc.latitude;
	options.lng = myLoc.longitude;


	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);



mySong.play();
  if (mySong.isPlaying() == false) {
      mySong.play();
    }
}

function draw() {

  clear();

  textAlign(CENTER);
  textSize(30);
  text('Where Are You?', width/2, height/8);

	var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
	image(myImage, point.x, point.y, myImage.width, myImage.height);


  imageMode(CENTER);



}

//
function mouseWheel(analyzer) {
	analyzer = new p5.Amplitude();
analyzer.setInput(mySong);
}
