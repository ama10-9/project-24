class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options ={
	retitution: 0.8,
	friction: 3,
	density: 30,
	}
		this.x=x;
		this.y=y;
        this.w=50;
        this.h=50;
		this.body=Bodies.rectangle(this.x, this.y,50,50 , options)
		World.add(world, this.body);

	}
	display()
	{
            var rubberpos=this.body.position;
            var angle = this.body.angle		
			push()
            translate(rubberpos.x, rubberpos.y);
            rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.w,this.h)
			pop()
	}

}