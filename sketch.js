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

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);

	options.lat = myLoc.latitude;
	options.lng = myLoc.longitude;


	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);
}

function draw() {
	clear();
	angleMode(DEGREES);
	var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
	fill('black');
	push();
	translate(point.x, point.y);
	rotate(45);
	rectMode(CENTER);
	rect(0,0,30,10);
	pop();
	push();
	translate(point.x, point.y);
	rotate(-45);
	rectMode(CENTER);
	rect(0,0,30,10);
	pop();
}
