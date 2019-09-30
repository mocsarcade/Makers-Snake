export default class Food
{
	constructor(x, y, game)
	{
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 10;
	}// end constructor

	update(deltatime)
	{
	}// end method

	draw(ctx)
	{
		ctx.beginPath();
		ctx.fillStyle = "yellow";
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fill();
	}// end method
}// end class