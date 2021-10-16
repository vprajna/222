function preload() {
video=createVideo("DTYs.gif");
}
function setup() {
canvas=createCanvas(500, 500);
canvas.center();
video.hide();
}
function draw() {
image(video,0,0,500,500);
}
function start(){
    object=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded() {
    console.log('model loaded');
    video.speed(1);
    video.volume(1);
    video.loop();
}