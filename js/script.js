var fps = "60" //target fps


function init() {
    console.log("Init start");

    var canvas = document.getElementById("canvas");
    canvas.style.width = window.innerWidth();
    canvas.style.height = 

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


}

function resize() {

}

init();