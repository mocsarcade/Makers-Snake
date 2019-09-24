import { DIR } from "./direction.js";

export default class Snake
{
    constructor(x, y)
    {
        this.width = 30;
        this.height = 30;
        this.body = [
            [150, 50], [120, 50]
        ];
        this.direction = DIR.RIGHT;
    }// end constructor

    update(deltaTime)
    {
        // console.log(this.direction);
        for (let i = 0; i < this.body.length; i++)
        {
            this.body[i][0] += this.direction[0];
            this.body[i][1] += this.direction[1];
        }
    }// end method

    draw(ctx)
    {
        ctx.beginPath();
        for (let i = 0; i < this.body.length; i++)
        {
            ctx.rect(this.body[i][0], this.body[i][1], this.width, this.height);
        }
        ctx.fillStyle =  "green";
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke()
    }// end method
}// end class