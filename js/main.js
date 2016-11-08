var fps = "60" //target fps

var version = "BETA - 0.1.0" //version

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


//init variables
var buttons = [];
var width = 0;
var hight = 0;
var loadPercent = 0;
var screen = 0;
var mouseClicked = 1;
var mousepos = {
    x:0,
    y:0
};




var num = 0;

function init() {
    //console.log("Init start");

    resize();

canvas.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos(canvas, evt);
    console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
  }, false);

  function getMousePos(canvas, evt) {

    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

    loadScreen();

    setTimeout(function(){
        window.requestAnimationFrame(mainLoop);
    }, 2000);

    
    //console.log("Init stop");
}

function loadScreen(){
    ctx.fillStyle = "Black"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "White"
    ctx.font="50px Overwatch";
    ctx.fillText("loading... ",10,canvas.height/2+20);

    

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

function getTextWH(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return {
        w: metrics.width,
        h: metrics.height
    }
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

window.onresize = function(event) {
    resize();
};

function resize() {
    //console.log("resizing...");
    canvas.height = 800;
    canvas.width = 1200;
}

function canvasClicked(){
    mouseClicked = 1;
    setTimeout(function(){mouseClicked = 0;}, 30);
}

function drawButton(button){
    
    ctx.fillStyle = button.color;
    var fontrn = button.size + " " + button.font;
    ctx.font = fontrn;
    ctx.fillText(button.text,button.x,button.y);
    
}

function drawPlayer(player,x,y,rot){

}


init();