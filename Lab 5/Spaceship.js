class Ship {
    constructor(x, y, vx, vy, rotation, warp) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.rotation = rotation;
        this.thrusters = warp;
        this.size = 4;
    }

    draw() {
        push();
        noStroke();
        translate(this.x, this.y);
        rotate(this.rotation);
        beginShape();
        vertex(this.size * 4, 0);
        vertex(-this.size * 4, this.size * 4);
        vertex(-this.size * 2, 0);
        vertex(-this.size * 4, -this.size * 4);
        vertex(this.size * 4, 0);
        endShape();

        if (this.thrusters == true) {
            fill(255, 215, 0);
            beginShape();
            vertex(-this.size * 3, -this.size * 2);
            vertex(-this.size * 6, 0);
            vertex(-this.size * 3, this.size * 2);
            endShape();
        }
        pop();
    }
    accelerate(ax, ay) {
        this.vx += ax;
        this.vy += ay;
    }

    move() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
}