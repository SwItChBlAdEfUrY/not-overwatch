var fps = "60" //target fps

var version = "BETA - 0.1.0" //version

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//init variables
var width = 0;
var hight = 0;
var loadPercent = 0;
var screen = 0;
var mouseClicked = 1;
var mousepos = 0;

var num = 0;

function init() {
    //console.log("Init start");

    resize();

    window.requestAnimationFrame(mainLoop);
    //console.log("Init stop");
}

function loadScreen(){
    ctx.fillStyle = "Black"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "White"
    ctx.font="50px Overwatch";
    ctx.fillText("loading... " + loadPercent + "%",10,canvas.height/2+20);

    

}

function mainLoop() {

    //handle user input
    input();

    //calculate physics
    update();

    //draw to the canvas
    draw();

    window.requestAnimationFrame(mainLoop);
}

function input() {
    if(mouseClicked == 1){
        //console.log("wow, the left mouse button button was clicked!");
    }
}

function update() {

}

function draw(){
    //clear the canvas
    ctx.fillStyle = "Black" 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if(screen == 0){
        drawMainMenu();
    }
    else if(screen == 4){
        drawOptions();
    }
    else if(screen == 10){
        drawGame();
    }
}

function drawMainMenu(){
    ctx.fillStyle = "Black"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "White"

    ctx.drawImage(document.getElementById("logo"),15,9);
    //ctx.font="60px overwatch";
    //ctx.fillText("not-OVERWATCH",10,70);
    ctx.font="15px blizz";
    ctx.fillText(version,20,90);
    ctx.font="60px overwatch";
    ctx.fillText("play",10,300);
    ctx.fillText("Hero gallery",10,360);
    ctx.fillText("friends",10,420);
    ctx.fillText("Options",10,480);

}

function drawGame() {

    drawBackground();

    drawPlatforms();

    drawPlayer();

    drawPlayers();
}

function drawBackground(){
    
}

function drawPlatforms(){

}

function drawPlayer(){

}

function drawPlayers(){

}

window.onresize = function(event) {
    resize();
};

function resize() {
    //console.log("resizing...");
    canvas.height = 800;
    canvas.width = 1200;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    //console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
  }, false);

function canvasClicked(){
    mouseClicked = 1;
    setTimeout(function(){mouseClicked = 0;}, 30);
}


init();