import DirEnum from "./dirEnum.js";

export default class Snake
{
	constructor(x, y)
	{
		this.width = 10;
		this.height = 10;
		this.dirEnum = new DirEnum(this.width);
		this.direction = this.dirEnum.DIR.DOWN;

		function BodyPart(x, y)
		{
			this.x = x;
			this.y = y;
		}
		
		this.body = [ 
			new BodyPart(x, y),
			new BodyPart(x, y - this.height),
			new BodyPart(x, y - (2 * this.height))
		];
		// [150, 50, DIR.RIGHT], [120, 50, DIR.RIGHT]

	}// end constructor

	getWidth() { return this.width; }// end method

	getHeight() { return this.height; }// end method

	getDirrection() { return this.direction; }// end method

	setHeight(height) { this.height = height; }// end method

	setWidth(width) { this.width = width; }// end method

	update(deltaTime)
	{
		console.log(deltaTime);
		for (let i = this.body.length - 1; i > 0; i--)
		{
			this.body[i].x = this.body[i - 1].x;
			this.body[i].y = this.body[i - 1].y;
		}
		this.body[0].x += this.direction[0];
		this.body[0].y += this.direction[1];
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
		ctx.stroke();
	}// end method
}// end class