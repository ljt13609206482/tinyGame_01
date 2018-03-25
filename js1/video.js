

var videoElement;
var videoDiv;
var ctx2;
var ctx1;
var context1;
var data;
var msg;
var canvasWidth;
var canvasHeight;

var lastTime;//上一帧被执行的时间
var deltaTime;//二帧间隔的时间差

function init() {
    lastTime = Date.now();   //
    deltaTime = 0;           //

	videoElement = document.createElement("video");
    videoElement.src = "1.mp4";
    videoDiv = document.createElement('div');
    videoDiv.setAttribute("style","display:none");
	document.body.appendChild(videoDiv);
    videoDiv.appendChild(videoElement);
    videoElement.play();
    ctx2 = document.getElementById("canvas2").getContext("2d");
    context1 = document.getElementById("canvas1");
    canvasWidth = context1.width;
    canvasHeight = context1.height; 
    ctx1 = context1.getContext("2d");
    data = new dataObj();
    data.init();
    msg = document.getElementById("msg");
    msg.addEventListener("keyup",inputData,false);
}
function game() {
    init();
    gameLoop();
}

function gameLoop() {
        requestAnimFrame(gameLoop);
        ctx1.clearRect(0,0,canvasWidth,canvasHeight);
        var now  = Date.now();         //我们要计算二帧之间一共执行了多长时间 
        deltaTime = now - lastTime;   //
        lastTime = now;               //
        if(deltaTime>40) deltaTime = 40;//
        ctx2.drawImage(videoElement , 85, 30);
        data.draw();	
}

window.onload = game;
function inputData(e){
  if(e.keyCode == 13){
      data.addMsg(this.value);
      //console.log(data.rows);
  }
}





