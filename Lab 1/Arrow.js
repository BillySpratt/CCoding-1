//Arrow class
class Arrow {
	constructor(x, y, rotation) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		this.size = 25;
		//rotation of arrow
		this.rotation = rotation;
	}



	update(){
		this.dx = mouseX-this.x;
		this.dy = mouseY-this.y;
		
		this.rotation = Math.atan2(this.dy, this.dx);
		console.log(this.dx,this.dy,this.rotation);
	}

	//function to draw the arrow
	drawArrow() {
		push();
		//translate from the top left corner to x and y of object
		translate(this.x, this.y);
		//rotate by rotation value of object
		rotate(this.rotation);
		line(-2*this.size, -this.size, 0, -this.size);
		line(0, -this.size, 0, -2*this.size);
		line(0, -2*this.size, 2*this.size, 0);
		line(2*this.size, 0, 0, 2*this.size);
		line(0, 2*this.size, 0, this.size);
		line(0, this.size, -2*this.size, this.size);
		line(-2*this.size, this.size, -2*this.size, -this.size);
		pop();
	}
}