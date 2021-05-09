status = "";
objects = [];

function  preload(){
}

function setup(){
canvas = createCanvas(380, 380);
canvas.center();
Video = createCapture(VIDEO);
Video.hide()

OBJ_D = ml5.objectDetector("cocossd", model_Loaded);
document.getElementById("S").innerHTML = "Status : detecting objects";
}

function model_Loaded(){
console.log("Model Loaded!");
status = "true";
}

function draw(){
image(Video, 0, 0, 380, 380);
if(status != ""){
r = random(255);
g = random(255);
b = random(255);
OBJ_D.detect(Video, gotresults);
for(i = 0; i < objects.length; i++){
document.getElementById("S").innerHTML = "Status : Detected objects";   
document.getElementById("O").innerHTML = "Objects detected : "+objects.length;
fill(r, g, b);
percent = floor(objects[i].confidence * 100);
text(objects[i].label+" "+percent+"", objects[i].x + 10, objects[i].y + 10);
noFill();
stroke(r, g, b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}

function gotresults(error, results){
if(error){
console.log("error");
}
else{
console.log(results);
objects = results;
}
}
