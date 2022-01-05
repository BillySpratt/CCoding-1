class Arrow {
    constructor(x, y, vx, vy, rotation, arrow) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.rotation = rotation;
        this.colour = color(arrow);
        this.size = 25;
    }
    draw() {
        push()
        translate(this.x, this.y);
        rotate(this.rotation);
        fill(this.colour);
        beginShape();
        vertex(-this.size * 2, -this.size);
        vertex(0, -this.size);
        vertex(0, -this.size * 2);
        vertex(this.size * 2, 0);
        vertex(0, this.size * 2);
        vertex(0, this.size);
        vertex(-this.size * 2, this.size);
        vertex(-this.size * 2, -this.size);
        endShape();
        pop()
    }
    move() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation = atan2(this.vy, this.vx);
    }
}