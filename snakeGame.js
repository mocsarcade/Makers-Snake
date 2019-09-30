import InputHandler from "./inputHandler.js";
import Snake from "./snake.js";
import Food from "./food.js";

export default class SnakeGame
{
	constructor(gameWidth, gameHeight)
	{
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.gameObjects = [];
	}// end constructor

	initialize()
	{
		this.player = new Snake(40, 40, 2);
		this.food = new Food(50, 50);
		new InputHandler(this.player);
		this.gameObjects.push(this.player, this.food);
	}// end method
    
	update(deltaTime)
	{
		this.gameObjects.forEach(element => {
			element.update(deltaTime);
		});

	}// end method

	draw(ctx)
	{
		ctx.clearRect(0, 0, this.gameWidth, this.gameHeight); 
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
		this.gameObjects.forEach(element => {
			element.draw(ctx);
		});
	}// end method
}// end class