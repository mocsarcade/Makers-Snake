import Snake from "./snake.js";
import { DIR } from "./direction.js";

const ARROW_KEYS = {
    LEFT: 37, 
    UP: 38, 
    RIGHT: 39, 
    DOWN: 40
}
export default class InputHandler
{
    constructor(snake)
    {
        document.addEventListener("keydown", (event) => 
        {
            switch (event.keyCode) {
                case ARROW_KEYS.LEFT:
                    snake.body[0].direction = DIR.LEFT;
                    break;
                case ARROW_KEYS.RIGHT:
                    snake.body[0].direction = DIR.RIGHT;
                    break;
                case ARROW_KEYS.UP:
                    snake.body[0].direction = DIR.UP;
                    break;
                case ARROW_KEYS.DOWN:
                    snake.body[0].direction = DIR.DOWN;
                    break;
                default:
                    break;
            }
        })
    }
}