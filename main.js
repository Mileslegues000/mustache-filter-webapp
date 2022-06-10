
nose_X= 0;
nose_Y= 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,400);
    /*fill("red");
    stroke("red");
    rect(nose_X,nose_Y,20);*/
    image(mustache,nose_X-50,nose_Y+10,90,40);
}

function take_snapshot(){
    save('mustache_man.png');
}

function modelLoaded(){
    console.log("poseNet model is initialized");
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        nose_X=results[0].pose.nose.x;
        nose_Y=results[0].pose.nose.y;
        console.log("noseX= "+nose_X);
        console.log("noseY= "+nose_Y);
    }
}

