class Roof{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
	var options={ 
    isStatic:true
   
	}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y,this.w,this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			
			fill("brown");
           rect(0,0,this.w,this.h);
			pop()
	}

}