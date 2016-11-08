var mainMenuRuns = 0;

function drawMainMenu(){

    if(mainMenuRuns == 0){

        var charName = "Genji"

        mainMenuRuns = 1;
    }

    buttons.push(
        {x:"10", y:"300",text:"play",color:"white",font:"overwatch",size:"60px"},
        {x:"10", y:"360",text:"Hero Gallery",color:"white",font:"overwatch",size:"60px"},
        {x:"10", y:"420",text:"Frineds",color:"white",font:"overwatch",size:"60px"},
        {x:"10", y:"480",text:"Options",color:"white",font:"overwatch",size:"60px"}
    );

    

    ctx.fillStyle = "Black"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(document.getElementById("Genji"),10,50,canvas.width,canvas.width * document.getElementById("Genji").height / document.getElementById("Genji").width);

    ctx.fillStyle = "White"

    ctx.drawImage(document.getElementById("logo"),15,9);
    //ctx.font="60px overwatch";
    //ctx.fillText("not-OVERWATCH",10,70);
    ctx.font="15px blizz";
    ctx.fillText(version,20,90);
    ctx.font="60px overwatch";
    ctx.fillText(charName,canvas.width-150,480);

    console.log(charName);

    for(var i = 0; i < buttons.length; i++){

        console.log(mousePos.x + " " + mousePos.y);

        if(mousePos.x > buttons[i].x && mousePos.x < buttons[i].x + getTextWH(buttons[i].text, buttons[i].font + " " + buttons[i].size).w && mousePos.y > buttons[i].y && mousePos.y < buttons[i].y + getTextWH(buttons[i].text, buttons[i].font + " " + buttons[i].size).h){
            console.log("It is, it's on button " + i);
        }
        else{
            console.log("It's not");
        }
    }

    for(var i = 0; i < buttons.length; i++){
        drawButton(buttons[i]);
    }

    buttons = []; //clear the buttons
}