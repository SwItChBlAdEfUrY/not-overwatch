var fps = "60" //target fps

var version = "0.1.0" //version

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//init variables
var width = 0;
var hight = 0;
var loadPercent = 0;
var screen = 0;
var mouseClicked = 1;

var num = 0;

function init() {
    console.log("Init start");

    resize();

    preLoad();

    window.requestAnimationFrame(mainLoop);
    console.log("Init stop");
}

function preLoad(){
    var images = [
        "/not-overwatch/img/char/Ana.png", //0
        "/not-overwatch/img/char/Bastion.png",//1
        "/not-overwatch/img/char/Dva.png",//2
        "/not-overwatch/img/char/Genji.png",//3
        "/not-overwatch/img/char/Hanzo.png",//4
        "/not-overwatch/img/char/Junkrat.png",//5
        "/not-overwatch/img/char/Lucio.png",//6
        "/not-overwatch/img/char/McCree.png",//7
        "/not-overwatch/img/char/Mei.png",//8
        "/not-overwatch/img/char/Mercy.png",//9
        "/not-overwatch/img/char/Pharah.png",//10
        "/not-overwatch/img/char/Reaper.png",//11
        "/not-overwatch/img/char/Reinhardt.png",//12
        "/not-overwatch/img/char/Roadhog.png",//13
        "/not-overwatch/img/char/Soldier76.png",//14
        "/not-overwatch/img/char/Symmetra.png",//15
        "/not-overwatch/img/char/Tobjorn.png",//16
        "/not-overwatch/img/char/Tracer.png",//17
        "/not-overwatch/img/char/Widowmaker.png",//18
        "/not-overwatch/img/char/Winston.png",//19
        "/not-overwatch/img/char/Zarya.png",//20
        "/not-overwatch/img/char/Zenyetta.png",//21
        "/not-overwatch/img/etc/overwatch-logo-white.png"//22
    ];
    for(var i = 0; i < images.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = images[i];

        loadPercent = 100/images.length*i;
        loadScreen();
    }
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
    else if(screen == 1){
        drawGame();
    }
}

function drawMainMenu(){
    ctx.fillStyle = "Black"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "White"
    ctx.font="50px Overwatch";
    ctx.fillText("Main Menu",10,canvas.height/2+20);
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
    console.log("resizing...");
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

function canvasClicked(){
    mouseClicked = 1;
    setTimeout(function(){mouseClicked = 0;}, 500);
}

init();