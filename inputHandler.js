const ARROW_KEYS = {
	LEFT: 37, 
	UP: 38, 
	RIGHT: 39, 
	DOWN: 40
};
export default class InputHandler
{
	constructor(snake)
	{
		document.addEventListener("keydown", (event) => 
		{
			switch (event.keyCode) {
			case ARROW_KEYS.LEFT:
				if(snake.direction != snake.dirEnum.DIR.RIGHT) 
					snake.direction = snake.dirEnum.DIR.LEFT;
				break;
			case ARROW_KEYS.RIGHT:
				if(snake.direction != snake.dirEnum.DIR.LEFT) 
					snake.direction = snake.dirEnum.DIR.RIGHT;
				break;
			case ARROW_KEYS.UP:
				if(snake.direction != snake.dirEnum.DIR.DOWN) 
					snake.direction = snake.dirEnum.DIR.UP;
				break;
			case ARROW_KEYS.DOWN:
				if(snake.direction != snake.dirEnum.DIR.UP) 
					snake.direction = snake.dirEnum.DIR.DOWN;
				break;
			default:
				break;
			}
		});
	}
}