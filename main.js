function preload() {}

function setup() {
    canvas = createCanvas(350,350);
    canvas.center(); 
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose)
}

function draw() {
    image(video,0,0,300,300);
}

function take_snapshot() {
save('myfilterimage.png');
}

function modelLoaded() {
    console.log("Posenet is Loaded");
}


function gotPose(results) {
  if(results.length > 0) {
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
  }
}



