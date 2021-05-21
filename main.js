faded = "";
darkside = "";
right_x = 0;
right_y = 0;
left_x = 0;
left_y = 0;

function preload(){
    //loading sound
   darkside = loadSound('Darkside.mp3');
   faded = loadSound('Faded.mp3');
}

function setup(){
    // creating canvas and setting its position
    canvas = createCanvas(500 , 400);
    canvas.position(500 , 310);
    // creating live view of the webcam and hiding the video component created by p5
    webcam = createCapture(VIDEO);
    webcam.hide();
    //initializing posenet
    posenet = ml5.poseNet(webcam , modelLoaded);
    posenet.on('pose' , gotPoses);
}

function draw(){
    //placing the webcam on the canvas
    image(webcam , 0 , 0 , 600 , 500);
}

function modelLoaded(){
    // it is important to do any action in this function otherwise posenet will not work as it will not have any parameter
    console.log("PoseNet Initialized!");
}

function gotPoses(results){
    // Checking if 'results' array's length is greater than 0 , then it will console the array and the x and y co-ordinates of both the wrists
    if(results.length > 0){
        console.log(results);
        right_x = results[0].pose.rightWrist.x;
        right_y = results[0].pose.rightWrist.y;
        left_x = results[0].pose.leftWrist.x;
        left_y = results[0].pose.leftWrist.y;
        console.log("Right_Wrist -> X- " + right_x + " Y- " + right_y + "Left_Wrist -> X- " + left_x + " Y- " + left_y);
    }
}