var nosex=0;
var nosey=0;
function preload(){
 clownnose=loadImage('https://i.postimg.cc/3rfQy5JG/clown-image.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNET=ml5.poseNet(video,modelLoaded);
poseNET.on('pose',gotPoses);


}
function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
circle(nosex,nosey,20);
image(clownnose,nosex,nosey,30,30);
}
function take_snapshot(){
    save('clownimage.png');
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;
        console.log("nose x="+nosex);
        console.log("nose y="+nosey);
    }
}