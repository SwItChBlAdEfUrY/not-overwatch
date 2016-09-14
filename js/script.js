var fps = "60" //target fps

var width = 0;
var hight = 0;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function init() {
    console.log("Init start");

    resize();

    window.requestAnimationFrame(mainLoop);
    console.log("Init stop");
}

function mainLoop() {

    input();

    update();

    draw();

    window.requestAnimationFrame(mainLoop);
}

function input() {

}

function update() {

}

function draw() {
    ctx.fillStyle = "Black"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}

window.onresize = function (event) {
    resize();
};

function resize() {
    console.log("resizing...");
    canvas.height = window.innerHeight;
    canvas.width = (window.innerHeight / 9) * 16;
    width = document.getElementById("canvas").style.width;
    height = document.getElementById("canvas").style.height;
    
}

init();