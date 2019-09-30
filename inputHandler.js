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
				if(snake.getDirection() != snake.getDirEnum().DIR.RIGHT) 
					snake.setDirection(snake.dirEnum.DIR.LEFT);
				break;
			case ARROW_KEYS.RIGHT:
				if(snake.getDirection() != snake.getDirEnum().DIR.LEFT) 
					snake.setDirection(snake.dirEnum.DIR.RIGHT);
				break;
			case ARROW_KEYS.UP:
				if(snake.getDirection() != snake.getDirEnum().DIR.DOWN) 
					snake.setDirection(snake.dirEnum.DIR.UP);
				break;
			case ARROW_KEYS.DOWN:
				if(snake.getDirection() != snake.getDirEnum().DIR.UP) 
					snake.setDirection(snake.dirEnum.DIR.DOWN);
				break;
			default:
				break;
			}
		});
	}// end constructor
}// end class