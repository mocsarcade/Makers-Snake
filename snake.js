import { DIR } from "./direction.js";

export default class Snake
{
    constructor(x, y)
    {
        function BodyPart(x, y, DIR)
        {
            this.x = x;
            this.y = y;
            this.direction = DIR;
        }
        this.width = 30;
        this.height = 30;
        
        this.body = [ 
            new BodyPart(50, 100, DIR.DOWN),
            new BodyPart(50, 70, DIR.DOWN)
        ];
        // [150, 50, DIR.RIGHT], [120, 50, DIR.RIGHT]

    }// end constructor

    update(deltaTime)
    {
        // console.log(this.direction);
        for (let i = 0; i < this.body.length; i++)
        {
            if(i < this.body.length - 1)
            {
                this.body[i + 1].direction = this.body[i].direction;
            }
            this.body[i].x += this.body[i].direction[0];
            this.body[i].y += this.body[i].direction[1];
        }
    }// end method

    draw(ctx)
    {
        ctx.beginPath();
        for (let i = 0; i < this.body.length; i++)
        {
            ctx.rect(this.body[i].x, this.body[i].y, this.width, this.height);
        }
        ctx.fillStyle =  "green";
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke()
    }// end method
}// end class