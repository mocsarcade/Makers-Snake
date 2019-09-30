import SnakeGame from "./snakeGame.js";
// initialize vars
let cvs = document.getElementById("canvas");
// this is the context, it's an attribute of the canvas
// whose methods we can use to draw graphics
let ctx = cvs.getContext("2d");
let lastTime = 0;
let snakeGame = new SnakeGame(cvs.width, cvs.height);
snakeGame.initialize();
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
	snakeGame.update(deltaTIme);
	snakeGame.draw(ctx);
	// requestAnimationFrame(gameLoop);
}// end method
// tells the browser to call this function right before every render of the page occurs
// requestAnimationFrame(gameLoop);
let gamespeed = 300;
setInterval(gameLoop, gamespeed);