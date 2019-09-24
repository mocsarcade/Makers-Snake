import Snake from "./snake.js";

const ARROW_KEYS = {
    LEFT: 37, 
    UP: 38, 
    RIGHT: 39, 
    DOWN: 40
}
export default class InputHandler
{
    constructor(Snake)
    {
        document.addEventListener("keydown", (event) => 
        {
            switch (event) {
                case ARROW_KEYS.LEFT:
                    break;
                case ARROW_KEYS.RIGHT:
                    break;
                case ARROW_KEYS.UP:
                    break;
                case ARROW_KEYS.DOWN:
                    break;
                default:
                    break;
            }
        })
    }
}