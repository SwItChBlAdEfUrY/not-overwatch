var fps = "60" //target fps

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//init variables
var width = 0;
var hight = 0;
var loadPercent = 0;
var screen = 0;

function init() {
    console.log("Init start");

    resize();

    preLoad();

    window.requestAnimationFrame(mainLoop);
    console.log("Init stop");
}

function preLoad(){
    var images = [
        "/not-overwatch/img/char/Ana.png",
        "/not-overwatch/img/char/Bastion.png",
        "/not-overwatch/img/char/Dva.png",
        "/not-overwatch/img/char/Genji.png",
        "/not-overwatch/img/char/Hanzo.png",
        "/not-overwatch/img/char/Junkrat.png",
        "/not-overwatch/img/char/Lucio.png",
        "/not-overwatch/img/char/McCree.png",
        "/not-overwatch/img/char/Mei.png",
        "/not-overwatch/img/char/Mercy.png",
        "/not-overwatch/img/char/Pharah.png",
        "/not-overwatch/img/char/Reaper.png",
        "/not-overwatch/img/char/Reinhardt.png",
        "/not-overwatch/img/char/Roadhog.png",
        "/not-overwatch/img/char/Soldier76.png",
        "/not-overwatch/img/char/Symmetra.png",
        "/not-overwatch/img/char/Tobjorn.png",
        "/not-overwatch/img/char/Tracer.png",
        "/not-overwatch/img/char/Widowmaker.png",
        "/not-overwatch/img/char/Winston.png",
        "/not-overwatch/img/char/Zarya.png",
        "/not-overwatch/img/char/Zenyetta.png"
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
    ctx.font="50px Georgia";
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
    ctx.fillStyle = "White"
    ctx.font="50px Georgia";
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

init();