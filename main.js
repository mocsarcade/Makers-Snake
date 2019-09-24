import Snake from "./snake.js";
import InputHandler from "./inputHandler.js";
// initialize vars
let cvs = document.getElementById("canvas");
// this is the context, it's an attribute of the canvas
// whose methods we can use to draw graphics
let ctx = cvs.getContext("2d");
let lastTime = 0;
let player = new Snake(40, 40, 2);
let input = new InputHandler(player);
// the main game loop

function gameLoop(timeStamp)
{ 
    timeStamp = new Date().getTime();
    // this is how much time has passed since this
    // function has been last called, this allows
    // the game to be independant of framerate
    var deltaTIme = timeStamp - lastTime; 
    lastTime = timeStamp;  
    // clear the screen and draw the background
    ctx.clearRect(0, 0, cvs.width, cvs.height); 
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    
    player.update(deltaTIme);
    player.draw(ctx);
    
    //requestAnimationFrame(gameLoop);
}// end method
// tells the browser to call this function right before every render of the page occurs
//requestAnimationFrame(gameLoop);
// let gamespeed = 200
// setInterval(gameLoop, gamespeed);