nosex = 0 
nosey = 0
rwrist_x = 0
lwrist_x = 0
difference = 0

function setup(){
    canvas = createCanvas(500,400)
    canvas.center()
   
    webcam = createCapture(VIDEO)
    webcam.size(500,400)
    webcam.position(25,235)
    poseNet = ml5.poseNet(webcam , modelLoaded)
    poseNet.on('pose' , gotResults)



}


function gotResults(results){
 if(results.length > 0){
  console.log(results);
  nosex = results[0].pose.nose.x;
  nosey = results[0].pose.nose.y;
  rwrist_x = results[0].pose.rightWrist.x;
  lwrist_x = results[0].pose.leftWrist.x;
  difference = floor(lwrist_x - rwrist_x)
  console.log(difference)
 }
}

function modelLoaded(){
    console.log('model is loaded !')
}

function draw(){

    background("#9bebdf");
     fill("blue")
     stroke("yellow")
     strokeWeight(5)
     textSize(difference)
     document.getElementById("square_size").innerHTML= difference + " px"
    text("Jashan",nosex,nosey)

}


