class RCB {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = 0;
        this.vy = 0;
        this.R = random(150, 255);
        this.G = random(150, 255);
        this.B = random(150, 255);
        this.size = random(30, 60)
    }

    ball() {
        fill(this.R, this.G, this.B);
        ellipse(this.x, this.y, this.size);
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
    accelerateBall(ax, ay) {
        this.vx += ax;
        this.vy += ay;
    }
}