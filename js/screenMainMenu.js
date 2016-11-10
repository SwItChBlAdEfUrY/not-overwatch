function mainMenuInit(){
    buttons.push(
        {x:"10",vx:"10", y:"300",text:"play",color:"white",font:"overwatch",size:"60px", height:50},
        {x:"10",vx:"10", y:"360",text:"Hero Gallery",color:"white",font:"overwatch",size:"60px", height:50},
        {x:"10",vx:"10", y:"420",text:"Frineds",color:"white",font:"overwatch",size:"60px", height:50},
        {x:"10",vx:"10", y:"480",text:"Options",color:"white",font:"overwatch",size:"60px", height:50}
    );
}

function drawMainMenu(){

    if(mainMenuRan == false){
        mainMenuInit();
        mainMenuRan = true;
    }

    ctx.fillStyle = "Black"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;
    
    ctx.drawImage(document.getElementById(charName),10,50,canvas.width,canvas.width * document.getElementById(charName).height / document.getElementById(charName).width);

    ctx.fillStyle = "White"

    ctx.drawImage(document.getElementById("logo"),15,9);
    //ctx.font="60px overwatch";
    //ctx.fillText("not-OVERWATCH",10,70);
    ctx.font="15px blizz";
    ctx.fillText(version,20,90);
    ctx.font="60px overwatch";
    ctx.fillText(charName,canvas.width-150,480);

    for(var i = 0; i < buttons.length; i++){
        if(mousePos.x >= buttons[i].x && mousePos.x <= getTextW(buttons[i].text, buttons[i].font + " " + buttons[i].size) && mousePos.y >= buttons[i].y -50 && mousePos.y <= buttons[i].y -50 + buttons[i].height){
            buttons[i].vx = 50;
        }

        if(mouseClicked == 1 && mousePos.x >= buttons[i].x && mousePos.x <= getTextW(buttons[i].text, buttons[i].font + " " + buttons[i].size) && mousePos.y >= buttons[i].y -50 && mousePos.y <= buttons[i].y -50 + buttons[i].height){
            buttons[i].color = "yellow";
            console.log("you clicked button " + i);
        }
    }

    for(var i = 0; i < buttons.length; i++){
        drawButton(buttons[i]);
        buttons[i].vx = 10;
        buttons[i].color = "white";
    }

    

}