song_1 = "";
song_2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song_1 = loadSound("song1.mp3");
    song_2 = loadSound("song2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("left wrist x = " + leftWristX + ", left wrist y = " + leftWristY);
        console.log("right wrist x = " + rightWristX + ", right wrist y = " + rightWristY);
    }
}

function modelLoaded()
{
    console.log('PoseNet is loaded!');
}

function draw()
{
    image(video, 0, 0, 600, 500);
}
