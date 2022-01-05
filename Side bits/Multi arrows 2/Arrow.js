class Arrow {
    constructor(x, y, rotation) {
        this.x = random(100, 1400);
        this.y = random(100, 700);
        this.colourR = random(1, 255);
        this.colourG = random(1, 255);
        this.colourB = random(1, 255);
        this.size = 25 * random(0.3, .8);
        this.centerX = 750;
        this.centerY = 400;
        this.distX = 0;
        this.distY = 0;
        this.rotation = Math.random() * (Math.PI * 2);
    }

    drawArrow() {
        push();
        fill(this.colourR, this.colourG, this.colourB);
        strokeWeight(0);
        translate(this.x, this.y);
        rotate(this.rotation);
        rect(-2 * this.size, -this.size, 2 * (this.size + 1), 2 * this.size);
        triangle(0, -2 * this.size, 2 * this.size, 0, 0, 2 * this.size);
        pop();
    }

    distToCenter() {
        this.distX = this.centerX - this.x;
        this.distY = this.centerY - this.y;
        this.totalDist = sq(this.distX) + sq(this.distY);
        this.dist = sqrt(this.totalDist);
        console.log(this.dist);
    }
}