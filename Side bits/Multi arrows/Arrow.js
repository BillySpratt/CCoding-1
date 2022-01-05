//Arrow class
class Arrow {
    constructor(x, y, rotation) {
        //x and y properties of arrow
        this.x = random(100, 1400);
        this.y = random(100, 700);
        this.colourR = random(1, 255);
        this.colourG = random(1, 255);
        this.colourB = random(1, 255);
        this.size = 25 * random(0.3, .8);
        //rotation of arrow
        this.rotation = rotation;
    }



    update() {
        this.dx = mouseX - this.x;
        this.dy = mouseY - this.y;

        this.rotation = Math.atan2(this.dx, this.dy);
        console.log(this.dx, this.dy, this.rotation);
    }

    //function to draw the arrow
    drawArrow() {
        push();
        fill(this.colourR, this.colourG, this.colourB);
        strokeWeight(0);
        //translate from the top left corner to x and y of object
        translate(this.x, this.y);
        //rotate by rotation value of object
        rotate(this.rotation);
        rect(-2 * this.size, -this.size, 2 * (this.size + 1), 2 * this.size);
        triangle(0, -2 * this.size, 2 * this.size, 0, 0, 2 * this.size);
        pop();
    }
}