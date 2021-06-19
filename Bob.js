class Bob{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={ 
    isStatic:false,
     restitution:0.3,
	 density:1,
	 friction:5

	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			pop()
	}

}