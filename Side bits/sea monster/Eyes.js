class Eye {
	constructor(x, y, rotation) {
		this.x = random(570,1000);
		this.y = random (65,329);
		this.colourR = random(1,255);
		this.colourG = random(1,255);
		this.colourB = random(1,255);
		this.size = 10*random(0.2,1.2);
		this.rotation = rotation;
	}



	update(){
		this.dx = mouseX-this.x;
		this.dy = mouseY-this.y;
		
		this.rotation = Math.atan2(this.dy, this.dx);
		console.log(mouseX,mouseY);
	}

	stare() {
		push();
		translate(this.x, this.y);
		rotate(this.rotation);
		//white of eye
		fill(255);
		ellipse(0,0,5*this.size);
		//iris
		strokeWeight(2);
		fill(this.colourR,this.colourG,this.colourB);
		ellipse(1.5*this.size,0,2*this.size);
		fill(0);
		ellipse(1.75*this.size,0,this.size)
		//black ring
		noFill();
		strokeWeight(3);
		ellipse(0,0,5*this.size);
		pop();
	}
}