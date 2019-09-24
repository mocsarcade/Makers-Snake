import { DIR } from "./direction.js";

export default class Snake
{
    constructor(x, y)
    {
        this.width = 30;
        this.height = 30;
        this.body = [];
        this.direction = DIR.RIGHT;
        this.position = 
        {
            x: x,
            y: y,
        }
    }// end constructor

    update(deltaTime)
    {
        // console.log(this.direction);
        this.position.x += this.direction[0];
        this.position.y += this.direction[1];
    }// end method

    draw(ctx)
    {
        ctx.beginPath();
        ctx.fillStyle =  "green";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }// end method
}// end class