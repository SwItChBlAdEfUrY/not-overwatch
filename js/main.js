var fps = "60" //target fps

var version = "BETA - 0.1.0" //version

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;


//init variables
var developer = true; //DEVELOPER

var mainMenuRan = false;
var buttons = [];
var width = 0;
var hight = 0;
var loadPercent = 0;
var screen = 0;
var mouseClicked = 0;
var mousePos = {
    x:0,
    y:0
};

var chars = ["Ana","Bastion","Dva","Genji","Hanzo","Junkrat","Lucio","McCree","Mei","Mercy","Roadhog","Soldier76","Symmetra","Tobjorn","Tracer","Widowmaker","Winston","Zarya","Zenyetta"];

var charName = chars[getRandomIntInclusive(0, chars.length)];

window.alert("If this is your first time running this, pleas allow the usage of 'unsafe' scripts, if you wish for fonts to be loaded correctly");


devLog(charName);

var num = 0;

function init() {
    //console.log("Init start");

    resize();

canvas.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos(canvas, evt);
    //console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
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

function getTextW(text, font) {
    ctx.save();
    ctx.font = font;
    var size = ctx.measureText(text);

    ctx.restore();

    return size.width;
    
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
    else{
        screen = 0;
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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function drawButton(button){
    
    ctx.fillStyle = button.color;
    var fontrn = button.size + " " + button.font;
    ctx.font = fontrn;
    ctx.fillText(button.text,button.vx,button.y);
    
}

function drawPlayer(player,x,y,rot){

}

function devLog(text){
    if(developer){
        console.log(text);
    }
}




init();