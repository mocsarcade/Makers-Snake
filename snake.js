export default class Snake
{
    constructor(x, y)
    {
        this.width = 30;
        this.height = 30;
        this.body = [];
        this.position = 
        {
            x: x,
            y: y,
        }
    }// end constructor

    update(deltaTime)
    {
        this.position.x += 5;
    }// end method

    draw(ctx)
    {
        ctx.beginPath();
        ctx.fillStyle =  "green";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }// end method
}// end class