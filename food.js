export default class Food
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 10;
	}// end constructor

	update(deltatime)
	{
        
	}

	draw(ctx)
	{
		ctx.beginPath();
		ctx.fillStyle = "yellow";
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fill();
	}
}// end class