var fps = "60" //target fps

var width = 0;
var hight = 0;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var loadPercent = 0;

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
        "/not-overwatch/img/char/Genji.png"
    ];
    for(var i = 0; i < images.length; i++ ) 
    {
        loadPercent = 100/images.length*i;
        loadScreen();

        var imageObject = new Image();
        imageObject.src = images[i];
    }
}

function loadScreen(){
    ctx.fillStyle = "Black"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "White"
    ctx.font="50px Georgia";
    ctx.fillText("loading... " + loadPercent + "%",500,canvas.height/2+20);

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

function draw() {
    

}

window.onresize = function(event) {
    resize();
};

function resize() {
    console.log("resizing...");
    canvas.height = 800;
    canvas.width = 1200;
    
    ctx.fillStyle = "Black"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

init();