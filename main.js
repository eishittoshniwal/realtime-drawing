nosex=0
nosey=0
difference=0
r_wristx=0
l_wristx=0


function setup(){
 canvas=createCanvas(500,300)
    canvas.position(450,250)

video= createCapture(VIDEO)
video.size(500,300)
video.position(-50,250)

poseNet= ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotresults)
}

function modelloaded(){
console.log("posenet has been intialized")
}

function gotresults(result){
if (result.length>0) {
    console.log(result)
 nosex=result[0].pose.nose.x
 nosey=result[0].pose.nose.y
 console.log("nosex="+nosex,"nosey="+nosey)

 l_wristx=result[0].pose.leftWrist.x
 r_wristx=result[0].pose.rightWrist.x
difference=floor(l_wristx-r_wristx)
console.log("left="+l_wristx,"right="+r_wristx,"diff="+difference)
}
}

function draw() {
    background("#fffacd")
    document.getElementById("hwans").innerHTML= difference+"px"
    document.getElementById("xyans").innerHTML= "x="+nosex + "    "+"& " + "    "+ "y="+nosey
    fill(0, 189, 196)
   stroke("black")
   square(nosex,nosey,difference)
} 


