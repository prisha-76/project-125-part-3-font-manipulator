
difference=0;
leftWristX=0;
rightWristX=0;

function setup()
{
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,450);
canvas.position(560,100);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log('PoseNet is Initialized!');
}

function gotPoses(results)
{
if(results.length>0){
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWrist = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}
}

function draw()
{
background('#ffa500');
document.getElementById("name_side").innerHTML = "Width and Height of name will be = " + difference + "px";
textSize(difference)
fill('#0000ff');
text('PRISHA' , 50 , 400)

}
